/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/users.js":
/*!*******************************!*\
  !*** ./resources/js/users.js ***!
  \*******************************/
/***/ (() => {

eval("Livewire.on(\"triggerDelete\", function (id, name) {\n  var proceed = confirm(\"Are you sure you want to delete \".concat(name));\n\n  if (proceed) {\n    Livewire.emit(\"delete\", id);\n  }\n});\nwindow.addEventListener(\"user-deleted\", function (event) {\n  alert(\"\".concat(event.detail.user_name, \" was deleted!\"));\n});\nLivewire.on(\"triggerCreate\", function () {\n  $(\"#user-modal\").modal(\"show\");\n});\nwindow.addEventListener(\"user-saved\", function (event) {\n  $(\"#user-modal\").modal(\"hide\");\n  alert(\"User \".concat(event.detail.user_name, \" was \").concat(event.detail.action, \"!\"));\n});\nLivewire.on(\"dataFetched\", function (user) {\n  $(\"#user-modal\").modal(\"show\");\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdXNlcnMuanM/ZWJjZSJdLCJuYW1lcyI6WyJMaXZld2lyZSIsIm9uIiwiaWQiLCJuYW1lIiwicHJvY2VlZCIsImNvbmZpcm0iLCJlbWl0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiYWxlcnQiLCJkZXRhaWwiLCJ1c2VyX25hbWUiLCIkIiwibW9kYWwiLCJhY3Rpb24iLCJ1c2VyIl0sIm1hcHBpbmdzIjoiQUFBQUEsUUFBUSxDQUFDQyxFQUFULENBQVksZUFBWixFQUE2QixVQUFDQyxFQUFELEVBQUtDLElBQUwsRUFBYztBQUN2QyxNQUFNQyxPQUFPLEdBQUdDLE9BQU8sMkNBQW9DRixJQUFwQyxFQUF2Qjs7QUFFQSxNQUFJQyxPQUFKLEVBQWE7QUFDVEosSUFBQUEsUUFBUSxDQUFDTSxJQUFULENBQWMsUUFBZCxFQUF3QkosRUFBeEI7QUFDSDtBQUNKLENBTkQ7QUFRQUssTUFBTSxDQUFDQyxnQkFBUCxDQUF3QixjQUF4QixFQUF3QyxVQUFDQyxLQUFELEVBQVc7QUFDL0NDLEVBQUFBLEtBQUssV0FBSUQsS0FBSyxDQUFDRSxNQUFOLENBQWFDLFNBQWpCLG1CQUFMO0FBQ0gsQ0FGRDtBQUlBWixRQUFRLENBQUNDLEVBQVQsQ0FBWSxlQUFaLEVBQTZCLFlBQU07QUFDL0JZLEVBQUFBLENBQUMsQ0FBQyxhQUFELENBQUQsQ0FBaUJDLEtBQWpCLENBQXVCLE1BQXZCO0FBQ0gsQ0FGRDtBQUlBUCxNQUFNLENBQUNDLGdCQUFQLENBQXdCLFlBQXhCLEVBQXNDLFVBQUNDLEtBQUQsRUFBVztBQUM3Q0ksRUFBQUEsQ0FBQyxDQUFDLGFBQUQsQ0FBRCxDQUFpQkMsS0FBakIsQ0FBdUIsTUFBdkI7QUFDQUosRUFBQUEsS0FBSyxnQkFBU0QsS0FBSyxDQUFDRSxNQUFOLENBQWFDLFNBQXRCLGtCQUF1Q0gsS0FBSyxDQUFDRSxNQUFOLENBQWFJLE1BQXBELE9BQUw7QUFDSCxDQUhEO0FBS0FmLFFBQVEsQ0FBQ0MsRUFBVCxDQUFZLGFBQVosRUFBMkIsVUFBQ2UsSUFBRCxFQUFVO0FBQ2pDSCxFQUFBQSxDQUFDLENBQUMsYUFBRCxDQUFELENBQWlCQyxLQUFqQixDQUF1QixNQUF2QjtBQUNILENBRkQiLCJzb3VyY2VzQ29udGVudCI6WyJMaXZld2lyZS5vbihcInRyaWdnZXJEZWxldGVcIiwgKGlkLCBuYW1lKSA9PiB7XHJcbiAgICBjb25zdCBwcm9jZWVkID0gY29uZmlybShgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSAke25hbWV9YCk7XHJcblxyXG4gICAgaWYgKHByb2NlZWQpIHtcclxuICAgICAgICBMaXZld2lyZS5lbWl0KFwiZGVsZXRlXCIsIGlkKTtcclxuICAgIH1cclxufSk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInVzZXItZGVsZXRlZFwiLCAoZXZlbnQpID0+IHtcclxuICAgIGFsZXJ0KGAke2V2ZW50LmRldGFpbC51c2VyX25hbWV9IHdhcyBkZWxldGVkIWApO1xyXG59KTtcclxuXHJcbkxpdmV3aXJlLm9uKFwidHJpZ2dlckNyZWF0ZVwiLCAoKSA9PiB7XHJcbiAgICAkKFwiI3VzZXItbW9kYWxcIikubW9kYWwoXCJzaG93XCIpO1xyXG59KTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwidXNlci1zYXZlZFwiLCAoZXZlbnQpID0+IHtcclxuICAgICQoXCIjdXNlci1tb2RhbFwiKS5tb2RhbChcImhpZGVcIik7XHJcbiAgICBhbGVydChgVXNlciAke2V2ZW50LmRldGFpbC51c2VyX25hbWV9IHdhcyAke2V2ZW50LmRldGFpbC5hY3Rpb259IWApO1xyXG59KTtcclxuXHJcbkxpdmV3aXJlLm9uKFwiZGF0YUZldGNoZWRcIiwgKHVzZXIpID0+IHtcclxuICAgICQoXCIjdXNlci1tb2RhbFwiKS5tb2RhbChcInNob3dcIik7XHJcbn0pOyJdLCJmaWxlIjoiLi9yZXNvdXJjZXMvanMvdXNlcnMuanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./resources/js/users.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./resources/js/users.js"]();
/******/ 	
/******/ })()
;