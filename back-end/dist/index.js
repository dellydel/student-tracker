/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 234:
/***/ ((module) => {

module.exports = eval("require")("aws-sdk");


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
const AWS = __nccwpck_require__(234);

exports.handler = async (event) => {
  console.log(event, "event");

  const docClient = new AWS.DynamoDB.DocumentClient();

  const params = {
    TableName: "next-byte-Courses-development",
  };

  let body;
  let statusCode = 200;

  try {
    body = await docClient.scan(params).promise();
  } catch (err) {
    statusCode = err.statusCode;
    body = err.message;
  }
  return {
    statusCode,
    body,
  };
};

})();

module.exports = __webpack_exports__;
/******/ })()
;