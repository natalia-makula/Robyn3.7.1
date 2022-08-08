# Copyright (c) Meta Platforms, Inc. and its affiliates.

# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.

####################################################################
#' Import and Export Robyn JSON files
#'
#' \code{robyn_write()} generates a JSON file with all the information
#' required to replicate a single Robyn model.
#'
#' @inheritParams robyn_outputs
#' @param select_model Character. Which model (by \code{solID}) do you
#' want to export into a JSON file?
#' @param dir Character. Existing directory to export JSON file to.
#' @examples
#' \dontrun{
#' InputCollectJSON <- robyn_inputs(
#'   dt_input = Robyn::dt_simulated_weekly,
#'   dt_holidays = Robyn::dt_prophet_holidays,
#'   json_file = "~/Desktop/RobynModel-1_29_12.json"
#' )
#' print(InputCollectJSON)
#' }
#' @return (invisible) List. Contains all inputs and outputs of exported model.
#' Class: \code{robyn_write}.
#' @export
robyn_write <- function(InputCollect,
                        OutputCollect = NULL,
                        select_model = NULL,
                        dir = OutputCollect$plot_folder,
                        quiet = FALSE) {

  # Checks
  stopifnot(inherits(InputCollect, "robyn_inputs"))
  if (!is.null(OutputCollect)) {
    stopifnot(inherits(OutputCollect, "robyn_outputs"))
    stopifnot(select_model %in% OutputCollect$allSolutions)
    if (is.null(select_model) & length(OutputCollect$allSolutions == 1)) {
      select_model <- OutputCollect$allSolutions
    }
  }
  if (is.null(dir)) dir <- getwd()

  # InputCollect JSON
  ret <- list()
  skip <- which(sapply(InputCollect, function(x) is.list(x) | is.null(x)))
  skip <- skip[!names(skip) %in% c("calibration_input", "hyperparameters", "custom_params")]
  ret[["InputCollect"]] <- inputs <- InputCollect[-skip]
  # toJSON(inputs, pretty = TRUE)

  # ExportedModel JSON (improve)
  if (!is.null(OutputCollect)) {
    outputs <- list()
    outputs$select_model <- select_model
    outputs$summary <- filter(OutputCollect$xDecompAgg, .data$solID == select_model) %>%
      select(variable = .data$rn, .data$coef, decomp = .data$xDecompPerc)
    outputs$errors <- filter(OutputCollect$resultHypParam, .data$solID == select_model) %>%
      select(.data$rsq_train, .data$nrmse, .data$decomp.rssd, .data$mape)
    hyps_name <- c("thetas", "shapes", "scales", "alphas", "gammas")
    outputs$hyper_values <- OutputCollect$resultHypParam %>%
      filter(.data$solID == select_model) %>%
      select(contains(hyps_name), .data$lambda) %>%
      select(order(colnames(.))) %>%
      as.list()
    outputs$hyper_updated <- OutputCollect$hyper_updated
    skip <- which(sapply(OutputCollect, function(x) is.list(x) | is.null(x)))
    skip <- c(skip, which(names(OutputCollect) %in% c("allSolutions")))
    outputs <- append(outputs, OutputCollect[-skip])
    ret[["ExportedModel"]] <- outputs
    # toJSON(outputs, pretty = TRUE)
  } else {
    select_model <- "inputs"
  }

  if (lares::right(dir, 1) == "/") dir <- substr(dir, 1, nchar(dir) - 1)
  filename <- sprintf("%s/RobynModel-%s.json", dir, select_model)
  write_json(ret, filename, pretty = TRUE)
  if (!quiet) message(sprintf(">> Exported model %s as %s", select_model, filename))
  class(ret) <- c("robyn_write", class(ret))
  return(invisible(ret))
}


#' @rdname robyn_write
#' @aliases robyn_write
#' @param x \code{robyn_write()} output.
#' @export
print.robyn_write <- function(x, ...) {
  print(glued(
    "
  Exported directory: {x$ExportedModel$plot_folder}
  Exported model: {x$ExportedModel$select_model}
  Window: {start} to {end} ({periods} {type}s)",
    start = x$InputCollect$window_start,
    end = x$InputCollect$window_end,
    periods = x$InputCollect$rollingWindowLength,
    type = x$InputCollect$intervalType
  ))

  print(glued(
    "\n\nModel's Performance and Errors:\n    {errors}",
    errors = paste(
      "R2 (train):", signif(x$ExportedModel$errors$rsq_train, 4),
      "| NRMSE =", signif(x$ExportedModel$errors$nrmse, 4),
      "| DECOMP.RSSD =", signif(x$ExportedModel$errors$decomp.rssd, 4),
      "| MAPE =", signif(x$ExportedModel$errors$mape, 4)
    )
  ))

  print(glued("\n\nSummary Values on Selected Model:"))

  print(x$ExportedModel$summary %>%
    mutate(decomp = formatNum(100 * .data$decomp, pos = "%")) %>%
    dplyr::mutate_if(is.numeric, function(x) formatNum(x, 4, abbr = TRUE)) %>%
    replace(., . == "NA", "-") %>% as.data.frame())

  print(glued(
    "\n\nHyper-parameters for channel transformations:\n    Adstock: {x$InputCollect$adstock}"
  ))

  # Nice and tidy table format for hyper-parameters
  hyps_name <- c("thetas", "shapes", "scales", "alphas", "gammas")
  regex <- paste(paste0("_", hyps_name), collapse = "|")
  hyper_df <- as.data.frame(x$ExportedModel$hyper_values) %>%
    select(-contains("lambda")) %>%
    tidyr::gather() %>%
    tidyr::separate(.data$key,
      into = c("channel", "none"),
      sep = regex, remove = FALSE
    ) %>%
    mutate(hyperparameter = gsub("^.*_", "", .data$key)) %>%
    select(.data$channel, .data$hyperparameter, .data$value) %>%
    tidyr::spread(key = "hyperparameter", value = "value")
  print(hyper_df)
}


#' @rdname robyn_write
#' @aliases robyn_write
#' @param json_file Character. JSON file name to read and import as list.
#' @param step Integer. 1 for import only and 2 for import and ouput.
#' @export
robyn_read <- function(json_file = NULL, step = 1, quiet = FALSE) {
  if (!is.null(json_file)) {
    if (lares::right(tolower(json_file), 4) != "json") {
      stop("JSON file must be a valid .json file")
    }
    if (!file.exists(json_file)) {
      stop("JSON file can't be imported: ", json_file)
    }
    json <- read_json(json_file, simplifyVector = TRUE)
    json$InputCollect <- json$InputCollect[lapply(json$InputCollect, length) > 0]
    if (!"InputCollect" %in% names(json) & step == 1) {
      stop("JSON file must contain InputCollect element")
    }
    if (!"ExportedModel" %in% names(json) & step == 2) {
      stop("JSON file must contain ExportedModel element")
    }
    if (!quiet) message("Imported JSON file succesfully: ", json_file)
    return(json)
  }
}