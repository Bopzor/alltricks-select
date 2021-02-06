(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1080:function(module,exports,__webpack_require__){"use strict";var _clientApi=__webpack_require__(55),_clientLogger=__webpack_require__(36),_configFilename=__webpack_require__(1081);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1081:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters}));var parameters={actions:{argTypesRegex:"^on[A-Z].*"}}},1082:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(359).configure)([__webpack_require__(1083),__webpack_require__(1084)],module,!1)}).call(this,__webpack_require__(105)(module))},1083:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=1083},1084:function(module,exports,__webpack_require__){var map={"./OptionDisplay/OptionDisplay.stories.jsx":1085,"./Select/Select.stories.jsx":1092};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1084},1085:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var _home_vio_projects_running_alltricks_select_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(80),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(0),__webpack_require__(208)),_OptionDisplay__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(157),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(29);__webpack_exports__.default={title:"OptionDisplay",component:_OptionDisplay__WEBPACK_IMPORTED_MODULE_3__.a,argTypes:{onSelect:{action:"selected"}}};var Default=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_OptionDisplay__WEBPACK_IMPORTED_MODULE_3__.a,Object(_home_vio_projects_running_alltricks_select_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},args))}.bind({});Default.args={size:"S",value:10,stock:2,price:"18.00 €",onSelect:Object(_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action)("onSelect")},Default.parameters=Object(_home_vio_projects_running_alltricks_select_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => <OptionDisplay {...args} />"}},Default.parameters)},1087:function(module,exports,__webpack_require__){},1092:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default})),__webpack_require__.d(__webpack_exports__,"EmptyOption",(function(){return EmptyOption}));var objectSpread2=__webpack_require__(80),react=__webpack_require__(0),react_default=__webpack_require__.n(react),OptionDisplay=__webpack_require__(157),slicedToArray=__webpack_require__(213),use_select=function useSelect(options){var _useState=Object(react.useState)(),_useState2=Object(slicedToArray.a)(_useState,2),value=_useState2[0],setValue=_useState2[1],_useState3=Object(react.useState)(!1),_useState4=Object(slicedToArray.a)(_useState3,2),open=_useState4[0],setOpen=_useState4[1],_useState5=Object(react.useState)(!1),_useState6=Object(slicedToArray.a)(_useState5,2),isMobile=_useState6[0],setIsMobile=_useState6[1],selectRef=Object(react.useRef)(),hiddenSelectRef=Object(react.useRef)(),displayValue=Object(react.useMemo)((function(){if(void 0===value)return"Veuillez sélectionner";var selectedIdx=options.findIndex((function(o){return o.value===value}));return selectedIdx>=0?options[selectedIdx].size:void 0}),[value,options]),onClickAway=Object(react.useCallback)((function(event){selectRef.current&&(selectRef.current.contains(event.target)||setOpen(!1))}),[selectRef]);return Object(react.useEffect)((function(){return document.addEventListener("mousedown",onClickAway),function(){return document.removeEventListener("mousedown",onClickAway)}}),[onClickAway]),Object(react.useEffect)((function(){document.documentElement.offsetWidth<=600&&setIsMobile(!0)}),[]),{value:displayValue,open:open,selectRef:selectRef,hiddenSelectRef:hiddenSelectRef,onToggle:function onToggle(){return setOpen((function(o){return!o}))},handleSelect:function handleSelect(selectedValue){setValue(selectedValue),setOpen(!1)},isMobile:isMobile}},jsx_runtime=(__webpack_require__(1087),__webpack_require__(29)),HiddenSelect=react_default.a.forwardRef((function(_ref,ref){var options=_ref.options;return Object(jsx_runtime.jsxs)("select",{name:"product-size",className:"hidden-select",ref:ref,children:[Object(jsx_runtime.jsx)("option",{}),options.map((function(option){return Object(jsx_runtime.jsx)("option",{value:option.value,"data-stock":option.stock,"data-price":option.price,children:option.size},option.size)}))]})})),Select_Select=function Select(_ref2){var options=_ref2.options,_useSelect=use_select(options),value=_useSelect.value,open=_useSelect.open,selectRef=_useSelect.selectRef,hiddenSelectRef=_useSelect.hiddenSelectRef,onToggle=_useSelect.onToggle,handleSelect=_useSelect.handleSelect,isMobile=_useSelect.isMobile;return options?Object(jsx_runtime.jsxs)("div",{ref:selectRef,children:[Object(jsx_runtime.jsxs)("div",{onClick:onToggle,className:"display-value",children:[Object(jsx_runtime.jsx)("span",{children:value}),Object(jsx_runtime.jsx)("span",{className:"caret",children:"^"})]}),open&&Object(jsx_runtime.jsxs)("div",{className:"option-container",children:[isMobile&&open&&Object(jsx_runtime.jsx)("div",{onClick:onToggle,className:"close",children:"x"}),Object(jsx_runtime.jsx)("div",{className:"option-title",children:options.length>0?"Taille :":"Article non disponible"}),options.length>0&&options.map((function(option,idx){return Object(jsx_runtime.jsxs)(react_default.a.Fragment,{children:[Object(jsx_runtime.jsx)(OptionDisplay.a,Object(objectSpread2.a)(Object(objectSpread2.a)({},option),{},{onSelect:handleSelect})),idx!==options.length-1&&Object(jsx_runtime.jsx)("div",{className:"divider"})]},option.size)}))]}),Object(jsx_runtime.jsx)(HiddenSelect,{ref:hiddenSelectRef,options:options}),isMobile&&open&&Object(jsx_runtime.jsx)("div",{className:"backdrop"})]}):null};Select_Select.__docgenInfo={description:"",methods:[],displayName:"Select",props:{options:{type:{name:"arrayOf",value:{name:"shape",value:{value:{name:"number",required:!0},size:{name:"enum",value:[{value:"'S'",computed:!1},{value:"'M'",computed:!1},{value:"'L'",computed:!1},{value:"'XL'",computed:!1}],required:!0},stock:{name:"number",required:!0},price:{name:"string",required:!0}}}},required:!1,description:""}}};var src_Select_Select=Select_Select;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Select/Select.jsx"]={name:"Select",docgenInfo:Select_Select.__docgenInfo,path:"src/Select/Select.jsx"});__webpack_exports__.default={title:"Select",component:src_Select_Select};var Select_stories_Template=function Template(args){return Object(jsx_runtime.jsx)(src_Select_Select,Object(objectSpread2.a)({},args))},Default=Select_stories_Template.bind({});Default.args={options:[{size:"S",value:10,stock:2,price:"18.00 €"},{size:"M",value:11,stock:5,price:"18.00 €"},{size:"L",value:12,stock:0,price:"18.00 €"},{size:"XL",value:13,stock:2,price:"22.00 €"}]};var EmptyOption=Select_stories_Template.bind({});EmptyOption.args={options:[]},Default.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Select {...args} />"}},Default.parameters),EmptyOption.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Select {...args} />"}},EmptyOption.parameters)},157:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(0);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(29),OptionDisplay=function OptionDisplay(_ref){var size=_ref.size,stock=_ref.stock,price=_ref.price,value=_ref.value,onSelect=_ref.onSelect,sotckInfo=function getStockInfo(nbInStock){return 0===nbInStock?"Epuisé":1===nbInStock?"C'est le dernier, dépêchez vous !":nbInStock<10?"Vite plus que ".concat(nbInStock," en stock !"):"En stock"}(stock);return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div",{value:value,onClick:function onClick(){return onSelect(value)},className:"option",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"option-size",children:size}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"option-stock",children:sotckInfo}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span",{className:"option-price",children:price})]})};OptionDisplay.__docgenInfo={description:"",methods:[],displayName:"OptionDisplay",props:{value:{type:{name:"number"},required:!0,description:""},size:{type:{name:"enum",value:[{value:"'S'",computed:!1},{value:"'M'",computed:!1},{value:"'L'",computed:!1},{value:"'XL'",computed:!1}]},required:!0,description:""},stock:{type:{name:"number"},required:!0,description:""},price:{type:{name:"string"},required:!0,description:""},onSelect:{type:{name:"func"},required:!0,description:""}}},__webpack_exports__.a=OptionDisplay,"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/OptionDisplay/OptionDisplay.jsx"]={name:"OptionDisplay",docgenInfo:OptionDisplay.__docgenInfo,path:"src/OptionDisplay/OptionDisplay.jsx"})},477:function(module,exports,__webpack_require__){__webpack_require__(478),__webpack_require__(642),__webpack_require__(643),__webpack_require__(801),__webpack_require__(1021),__webpack_require__(1054),__webpack_require__(1059),__webpack_require__(1071),__webpack_require__(1073),__webpack_require__(1078),__webpack_require__(1080),module.exports=__webpack_require__(1082)},551:function(module,exports){},643:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(359)}},[[477,1,2]]]);
//# sourceMappingURL=main.f03ce1bd9edc3aba49c7.bundle.js.map