"use strict";(self.webpackChunkmmm_for_all=self.webpackChunkmmm_for_all||[]).push([[715],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return p}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=c(a),p=r,f=m["".concat(l,".").concat(p)]||m[p]||u[p]||i;return a?n.createElement(f,o(o({ref:t},d),{},{components:a})):n.createElement(f,o({ref:t},d))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3919:function(e,t,a){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}a.d(t,{b:function(){return n},Z:function(){return r}})},4996:function(e,t,a){a.d(t,{C:function(){return i},Z:function(){return o}});var n=a(2263),r=a(3919);function i(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,a=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,a,n){var i=void 0===n?{}:n,o=i.forcePrependBaseUrl,s=void 0!==o&&o,l=i.absolute,c=void 0!==l&&l;if(!a)return a;if(a.startsWith("#"))return a;if((0,r.b)(a))return a;if(s)return t+a;var d=a.startsWith(t)?a:t+a.replace(/^\//,"");return c?e+d:d}(i,a,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},82:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=a(4996),s=["components"],l={id:"robyn-at-a-glance",title:"Core capabilities"},c=void 0,d={unversionedId:"robyn-at-a-glance",id:"robyn-at-a-glance",isDocsHomePage:!1,title:"Core capabilities",description:"Model flow",source:"@site/docs/robyn-at-a-glance.mdx",sourceDirName:".",slug:"/robyn-at-a-glance",permalink:"/Robyn/docs/robyn-at-a-glance",editUrl:"https://github.com/facebookexperimental/Robyn/docs/robyn-at-a-glance.mdx",tags:[],version:"current",frontMatter:{id:"robyn-at-a-glance",title:"Core capabilities"},sidebar:"someSidebar",previous:{title:"Walkthrough videos",permalink:"/Robyn/docs/step-by-step-videos"},next:{title:"Example plots",permalink:"/Robyn/docs/example-plots"}},u=[{value:"Model flow",id:"model-flow",children:[]},{value:"Core capabilities",id:"core-capabilities",children:[]}],m={toc:u};function p(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"model-flow"},"Model flow"),(0,i.kt)("img",{alt:"inst folder",src:(0,o.Z)("/img/model-flow.png")}),(0,i.kt)("h2",{id:"core-capabilities"},"Core capabilities"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Semi-automated modelling process:")," Robyn automatically returns a set of business-relevant and statistically robust model solutions. Robyn does so by sampling all possible adstock and saturation curves combinations and minimizing the normalized root-mean-square error (NRMSE), decomposition root-sum-square distance (DECOMP.RSSD) & calibration mean average percentage error (MAPE.LIFT). Building MMM manually is a time-consuming process that involves subjective decisions based on analysts\u2019 modeling experience and trial and error over hundreds of iterations. Sometimes months of effort are a common requirement to build classic MMMs from scratch. Please find our case study with Resident ",(0,i.kt)("a",{parentName:"li",href:"https://www.facebook.com/business/success/resident"},"here")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Continuous reporting:")," After an initial model is built and selected, the new ",(0,i.kt)("inlineCode",{parentName:"li"},"robyn_refresh()")," function is able to continuously build and add new model periods, at any given cadence (weeks, months, etc.), based on previous model results. This capability enables using MMM as a continuous reporting tool which enables timely and actionable decision-making."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Trend, seasonality and holidays automated decomposition:")," Robyn leverages ",(0,i.kt)("a",{parentName:"li",href:"https://facebook.github.io/prophet/"},"Prophet"),", Facebook's open source ML library for time series forecasting. We use Prophet to automatically decompose the trend, seasonality and holidays effects directly from the response as input variables for further modeling. This capability often increases model fit and reduces autoregressive patterns in residuals."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Rolling window:")," Robyn allows users to specify ",(0,i.kt)("inlineCode",{parentName:"li"},"window_start")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"window_end")," dates in the ",(0,i.kt)("inlineCode",{parentName:"li"},"robyn_inputs()")," function to define a modeling period as a subset of the total available data for media and other variables. This feature allows for example, to define a recent modeling period, i.e. last 6 months. This allows relevant and up-to-date decision-making, based on media and other variable data that can be more relevant and better represent your business and marketing investment mix. At the same time, trend, seasonality and holiday effects will still be decomposed from the entire uploaded dataset capturing effects from the full data history."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Granular datasets:")," Robyn is able to deal with large datasets and multicollinearity. In marketing, it is common to have similar spend patterns between Marketing channels, for example, increasing spend for multiple channels during Black Friday. Robyn uses Ridge regression to deal with the inherent multicollinearity, it defines predictors contribution by applying a penalization score, and prevents overfitting without the need to do computationally intensive time-series cross validation."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Organic media:")," Robyn enables users to specify ",(0,i.kt)("inlineCode",{parentName:"li"},"organic_vars")," to model marketing activities without direct spend. Typically, this may include newsletter, push notification, social media posts, among other efforts. Moreover, organic variables are expected to have similar carryover (adstock) and saturating behavior as paid media variables. The respective transformation techniques such as geometric or Weibull transformation for adstock; or Hill transformation for saturation, are also applied to organic variables."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Experimental calibration:"),' We believe integrating results from causal experiments into MMM is the best choice for model selection. As the general aphorism in statistics is "all models are wrong but some are useful", there is no more reliable way to select final MMM results than the one of experiments that measure the causal effect of each channel\u2019s ad exposure. Common experimental tools include techniques like ',(0,i.kt)("a",{parentName:"li",href:"https://www.facebook.com/business/m/one-sheeters/conversion-lift"},"Facebook Conversion Lift")," and geo-based techniques like ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/ArturoEsquerra/GeoLift/"},"Facebook GeoLift"),", among others. Robyn drives model results closer to experimental results by using MAPE.LIFT as the third Nevergrad algorithm objective function besides NRMSE & DECOMP.RSSD when calibrating and minimizing the error between predicted and experimental results."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Variable transformations:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Custom adstock:")," Robyn offers the one-parametric Geometric function and the two-parametric Weibull function as adstock options to enable more customization and flexibility in adstock transformation. While the Geometric adstock is considered more intuitive and runs faster, the Weibull adstock is not only more flexible, but often more suitable for digital media transformation, as shown in this ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/annalectnl/weibull-adstock/blob/master/adstock_weibull_annalect.pdf"},"study"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"S-shape saturation:")," Robyn uses the two-parametric Hill function that is able to transform the relationship between ad exposure (or spend) with the response variable (Sales, conversions, etc.). It can adopt C- and S-shapes to enable more flexibility in the transformation."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Budget allocator:")," Based on a selected model, and using the corresponding saturation curve of each paid media variable, the ",(0,i.kt)("inlineCode",{parentName:"li"},"robyn_allocator()")," function returns the optimal mix of spend that maximizes the total response. Robyn uses, by default, a combination of an Augmented Lagrangian (AUGLAG) global optimization algorithm and a Sequential Least Square Quadratic Programming (SLSQP) as a local optimization algorithm to solve the nonlinear objective function analytically."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Automated output:")," When using ",(0,i.kt)("inlineCode",{parentName:"li"},"robyn_run()")," function to build the initial model, Robyn outputs a one-pager that contains 6 charts for every Pareto-optimal model and saves 4 csv-files (pareto_hyperparameters.csv, pareto_aggregated.csv, pareto_media_transform_matrix.csv, pareto_alldecomp_matrix.csv) that contains all results. The 6 charts are: the effect decomposition waterfall chart, the actual vs. predicted fit line chart, the media spend vs. effect bar chart, the media saturation line chart, the adstock decay rate bar chart and the predicted vs. residual line chart. When using ",(0,i.kt)("inlineCode",{parentName:"li"},"robyn_refresh()")," function to build refresh models, Robyn outputs 2 extra charts (aggregated actual vs. predicted line chart and aggregated decomposition bar chart) and saves 4 extra csv-files separately (report_hyperparameters.csv, report_aggregated.csv, report_media_transform_matrix.csv, report_alldecomp_matrix.csv).")))}p.isMDXComponent=!0}}]);