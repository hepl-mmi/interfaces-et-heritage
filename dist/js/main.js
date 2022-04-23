/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Circle.ts":
/*!**************************!*\
  !*** ./src/js/Circle.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n      }\n    };\n\n    return _extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null) throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n\n    _extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\nexports.__esModule = true;\nexports.Circle = void 0;\n\nvar Shape_1 = __webpack_require__(/*! ./Shape */ \"./src/js/Shape.ts\");\n\nvar Circle = function (_super) {\n  __extends(Circle, _super);\n\n  function Circle(origin, color, ctx, radius) {\n    var _this = _super.call(this, origin, color, ctx) || this;\n\n    _this.radius = radius;\n    return _this;\n  }\n\n  Circle.prototype.draw = function () {\n    this.ctx.beginPath();\n    this.ctx.fillStyle = this.color;\n    this.ctx.arc(this.origin.x, this.origin.y, this.radius, 0, Math.PI * 2);\n    this.ctx.fill();\n    this.ctx.closePath();\n  };\n\n  return Circle;\n}(Shape_1.Shape);\n\nexports.Circle = Circle;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvQ2lyY2xlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUdBO0FBQTRCQTs7QUFJeEIsa0JBQVlDLE1BQVosRUFBOENDLEtBQTlDLEVBQTZEQyxHQUE3RCxFQUE0RkMsTUFBNUYsRUFBMEc7QUFBMUcsZ0JBQ0lDLGtCQUFNSixNQUFOLEVBQWNDLEtBQWQsRUFBcUJDLEdBQXJCLEtBQXlCLElBRDdCOztBQUVJRyxTQUFJLENBQUNGLE1BQUwsR0FBY0EsTUFBZDs7QUFDSDs7QUFFUUcsMEJBQVQ7QUFDSSxTQUFLSixHQUFMLENBQVNLLFNBQVQ7QUFDQSxTQUFLTCxHQUFMLENBQVNNLFNBQVQsR0FBcUIsS0FBS1AsS0FBMUI7QUFDQSxTQUFLQyxHQUFMLENBQVNPLEdBQVQsQ0FBYSxLQUFLVCxNQUFMLENBQVlVLENBQXpCLEVBQTRCLEtBQUtWLE1BQUwsQ0FBWVcsQ0FBeEMsRUFBMkMsS0FBS1IsTUFBaEQsRUFBd0QsQ0FBeEQsRUFBMkRTLElBQUksQ0FBQ0MsRUFBTCxHQUFVLENBQXJFO0FBQ0EsU0FBS1gsR0FBTCxDQUFTWSxJQUFUO0FBQ0EsU0FBS1osR0FBTCxDQUFTYSxTQUFUO0FBQ0gsR0FOUTs7QUFPYjtBQUFDLENBaEJELENBQTRCQyxhQUE1Qjs7QUFBYUMsY0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRlcmZhY2VzLWV0LWhlcml0YWdlLy4vc3JjL2pzL0NpcmNsZS50cz82Y2VlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2hhcGV9IGZyb20gXCIuL1NoYXBlXCI7XG5pbXBvcnQge0lEcmF3YWJsZX0gZnJvbSBcIi4vSURyYXdhYmxlXCI7XG5cbmV4cG9ydCBjbGFzcyBDaXJjbGUgZXh0ZW5kcyBTaGFwZSBpbXBsZW1lbnRzIElEcmF3YWJsZXtcbiAgICBwcml2YXRlIHJlYWRvbmx5IHJhZGl1czogbnVtYmVyO1xuXG5cbiAgICBjb25zdHJ1Y3RvcihvcmlnaW46IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSwgY29sb3I6IHN0cmluZywgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHJhZGl1czogbnVtYmVyKSB7XG4gICAgICAgIHN1cGVyKG9yaWdpbiwgY29sb3IsIGN0eCk7XG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xuICAgIH1cblxuICAgIG92ZXJyaWRlIGRyYXcoKSB7XG4gICAgICAgIHRoaXMuY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICB0aGlzLmN0eC5hcmModGhpcy5vcmlnaW4ueCwgdGhpcy5vcmlnaW4ueSwgdGhpcy5yYWRpdXMsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgdGhpcy5jdHguZmlsbCgpO1xuICAgICAgICB0aGlzLmN0eC5jbG9zZVBhdGgoKTtcbiAgICB9XG59Il0sIm5hbWVzIjpbIl9fZXh0ZW5kcyIsIm9yaWdpbiIsImNvbG9yIiwiY3R4IiwicmFkaXVzIiwiX3N1cGVyIiwiX3RoaXMiLCJDaXJjbGUiLCJiZWdpblBhdGgiLCJmaWxsU3R5bGUiLCJhcmMiLCJ4IiwieSIsIk1hdGgiLCJQSSIsImZpbGwiLCJjbG9zZVBhdGgiLCJTaGFwZV8xIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/Circle.ts\n");

/***/ }),

/***/ "./src/js/Rectangle.ts":
/*!*****************************!*\
  !*** ./src/js/Rectangle.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\n\nvar __extends = this && this.__extends || function () {\n  var _extendStatics = function extendStatics(d, b) {\n    _extendStatics = Object.setPrototypeOf || {\n      __proto__: []\n    } instanceof Array && function (d, b) {\n      d.__proto__ = b;\n    } || function (d, b) {\n      for (var p in b) {\n        if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];\n      }\n    };\n\n    return _extendStatics(d, b);\n  };\n\n  return function (d, b) {\n    if (typeof b !== \"function\" && b !== null) throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n\n    _extendStatics(d, b);\n\n    function __() {\n      this.constructor = d;\n    }\n\n    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n  };\n}();\n\nexports.__esModule = true;\nexports.Rectangle = void 0;\n\nvar Shape_1 = __webpack_require__(/*! ./Shape */ \"./src/js/Shape.ts\");\n\nvar Rectangle = function (_super) {\n  __extends(Rectangle, _super);\n\n  function Rectangle(origin, color, ctx, dimension) {\n    var _this = _super.call(this, origin, color, ctx) || this;\n\n    _this.dimension = dimension;\n    return _this;\n  }\n\n  Rectangle.prototype.draw = function () {\n    this.ctx.fillStyle = this.color;\n    this.ctx.fillRect(this.origin.x, this.origin.y, this.dimension.width, this.dimension.height);\n  };\n\n  return Rectangle;\n}(Shape_1.Shape);\n\nexports.Rectangle = Rectangle;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvUmVjdGFuZ2xlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUdBO0FBQStCQTs7QUFHM0IscUJBQVlDLE1BQVosRUFBOENDLEtBQTlDLEVBQTZEQyxHQUE3RCxFQUE0RkMsU0FBNUYsRUFBd0k7QUFBeEksZ0JBQ0lDLGtCQUFNSixNQUFOLEVBQWNDLEtBQWQsRUFBcUJDLEdBQXJCLEtBQXlCLElBRDdCOztBQUVJRyxTQUFJLENBQUNGLFNBQUwsR0FBaUJBLFNBQWpCOztBQUNIOztBQUVRRyw2QkFBVDtBQUNJLFNBQUtKLEdBQUwsQ0FBU0ssU0FBVCxHQUFxQixLQUFLTixLQUExQjtBQUNBLFNBQUtDLEdBQUwsQ0FBU00sUUFBVCxDQUFrQixLQUFLUixNQUFMLENBQVlTLENBQTlCLEVBQWlDLEtBQUtULE1BQUwsQ0FBWVUsQ0FBN0MsRUFBZ0QsS0FBS1AsU0FBTCxDQUFlUSxLQUEvRCxFQUFzRSxLQUFLUixTQUFMLENBQWVTLE1BQXJGO0FBQ0gsR0FIUTs7QUFJYjtBQUFDLENBWkQsQ0FBK0JDLGFBQS9COztBQUFhQyxpQkFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRlcmZhY2VzLWV0LWhlcml0YWdlLy4vc3JjL2pzL1JlY3RhbmdsZS50cz84MDk5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2hhcGV9IGZyb20gXCIuL1NoYXBlXCI7XG5pbXBvcnQge0lEcmF3YWJsZX0gZnJvbSBcIi4vSURyYXdhYmxlXCI7XG5cbmV4cG9ydCBjbGFzcyBSZWN0YW5nbGUgZXh0ZW5kcyBTaGFwZSB7XG4gICAgcHJpdmF0ZSBkaW1lbnNpb246IHsgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIgfVxuXG4gICAgY29uc3RydWN0b3Iob3JpZ2luOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0sIGNvbG9yOiBzdHJpbmcsIGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBkaW1lbnNpb246IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSkge1xuICAgICAgICBzdXBlcihvcmlnaW4sIGNvbG9yLCBjdHgpO1xuICAgICAgICB0aGlzLmRpbWVuc2lvbiA9IGRpbWVuc2lvbjtcbiAgICB9XG5cbiAgICBvdmVycmlkZSBkcmF3KCkge1xuICAgICAgICB0aGlzLmN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xuICAgICAgICB0aGlzLmN0eC5maWxsUmVjdCh0aGlzLm9yaWdpbi54LCB0aGlzLm9yaWdpbi55LCB0aGlzLmRpbWVuc2lvbi53aWR0aCwgdGhpcy5kaW1lbnNpb24uaGVpZ2h0KVxuICAgIH1cbn0iXSwibmFtZXMiOlsiX19leHRlbmRzIiwib3JpZ2luIiwiY29sb3IiLCJjdHgiLCJkaW1lbnNpb24iLCJfc3VwZXIiLCJfdGhpcyIsIlJlY3RhbmdsZSIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwieCIsInkiLCJ3aWR0aCIsImhlaWdodCIsIlNoYXBlXzEiLCJleHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/Rectangle.ts\n");

/***/ }),

/***/ "./src/js/Shape.ts":
/*!*************************!*\
  !*** ./src/js/Shape.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nexports.__esModule = true;\nexports.Shape = void 0;\n\nvar Shape = function () {\n  function Shape(origin, color, ctx) {\n    this.origin = origin;\n    this.color = color;\n    this.ctx = ctx;\n  }\n\n  Shape.prototype.draw = function () {};\n\n  return Shape;\n}();\n\nexports.Shape = Shape;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvU2hhcGUudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQTtBQU1JLGlCQUFzQkEsTUFBdEIsRUFBd0RDLEtBQXhELEVBQXVFQyxHQUF2RSxFQUFvRztBQUNoRyxTQUFLRixNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLQyxHQUFMLEdBQVdBLEdBQVg7QUFDSDs7QUFFREMsc0NBQ0MsQ0FERDs7QUFFSjtBQUFDLENBZEQ7O0FBQXNCQyxhQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2ludGVyZmFjZXMtZXQtaGVyaXRhZ2UvLi9zcmMvanMvU2hhcGUudHM/Y2NkNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0lEcmF3YWJsZX0gZnJvbSBcIi4vSURyYXdhYmxlXCI7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTaGFwZSBpbXBsZW1lbnRzIElEcmF3YWJsZSB7XG4gICAgcHJvdGVjdGVkIHJlYWRvbmx5IG9yaWdpbjogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9O1xuICAgIHByb3RlY3RlZCByZWFkb25seSBjb2xvcjogc3RyaW5nO1xuICAgIHByb3RlY3RlZCByZWFkb25seSBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcblxuXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKG9yaWdpbjogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9LCBjb2xvcjogc3RyaW5nLCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCkge1xuICAgICAgICB0aGlzLm9yaWdpbiA9IG9yaWdpbjtcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgICAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB9XG5cbiAgICBkcmF3KCkge1xuICAgIH1cbn0iXSwibmFtZXMiOlsib3JpZ2luIiwiY29sb3IiLCJjdHgiLCJTaGFwZSIsImV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/Shape.ts\n");

/***/ }),

/***/ "./src/js/main.ts":
/*!************************!*\
  !*** ./src/js/main.ts ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nexports.__esModule = true;\n\nvar Rectangle_1 = __webpack_require__(/*! ./Rectangle */ \"./src/js/Rectangle.ts\");\n\nvar Circle_1 = __webpack_require__(/*! ./Circle */ \"./src/js/Circle.ts\");\n\nvar canvas = document.getElementById('my-canvas');\nvar ctx = canvas.getContext('2d');\nvar myShapes = [];\ncanvas.width = window.innerWidth;\ncanvas.height = window.innerHeight;\nmyShapes.push(new Rectangle_1.Rectangle({\n  x: 300,\n  y: 100\n}, \"red\", ctx, {\n  width: 50,\n  height: 40\n}));\nmyShapes.push(new Rectangle_1.Rectangle({\n  x: 100,\n  y: 200\n}, \"blue\", ctx, {\n  width: 20,\n  height: 60\n}));\nmyShapes.push(new Circle_1.Circle({\n  x: 50,\n  y: 200\n}, \"blue\", ctx, 30));\nmyShapes.push(new Circle_1.Circle({\n  x: 600,\n  y: 100\n}, \"yellow\", ctx, 25));\nmyShapes.forEach(function (shape) {\n  return shape.draw();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbWFpbi50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQ0E7O0FBR0EsSUFBTUEsTUFBTSxHQUFzQkMsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQWxDO0FBQ0EsSUFBTUMsR0FBRyxHQUE2QkgsTUFBTSxDQUFDSSxVQUFQLENBQWtCLElBQWxCLENBQXRDO0FBQ0EsSUFBTUMsUUFBUSxHQUFnQixFQUE5QjtBQUdBTCxNQUFNLENBQUNNLEtBQVAsR0FBZUMsTUFBTSxDQUFDQyxVQUF0QjtBQUNBUixNQUFNLENBQUNTLE1BQVAsR0FBZ0JGLE1BQU0sQ0FBQ0csV0FBdkI7QUFFQUwsUUFBUSxDQUFDTSxJQUFULENBQWMsSUFBSUMscUJBQUosQ0FBYztBQUFDQyxHQUFDLEVBQUUsR0FBSjtBQUFTQyxHQUFDLEVBQUU7QUFBWixDQUFkLEVBQWdDLEtBQWhDLEVBQXVDWCxHQUF2QyxFQUE0QztBQUFDRyxPQUFLLEVBQUUsRUFBUjtBQUFZRyxRQUFNLEVBQUU7QUFBcEIsQ0FBNUMsQ0FBZDtBQUNBSixRQUFRLENBQUNNLElBQVQsQ0FBYyxJQUFJQyxxQkFBSixDQUFjO0FBQUNDLEdBQUMsRUFBRSxHQUFKO0FBQVNDLEdBQUMsRUFBRTtBQUFaLENBQWQsRUFBZ0MsTUFBaEMsRUFBd0NYLEdBQXhDLEVBQTZDO0FBQUNHLE9BQUssRUFBRSxFQUFSO0FBQVlHLFFBQU0sRUFBRTtBQUFwQixDQUE3QyxDQUFkO0FBQ0FKLFFBQVEsQ0FBQ00sSUFBVCxDQUFjLElBQUlJLGVBQUosQ0FBVztBQUFDRixHQUFDLEVBQUUsRUFBSjtBQUFRQyxHQUFDLEVBQUU7QUFBWCxDQUFYLEVBQTRCLE1BQTVCLEVBQW9DWCxHQUFwQyxFQUF5QyxFQUF6QyxDQUFkO0FBQ0FFLFFBQVEsQ0FBQ00sSUFBVCxDQUFjLElBQUlJLGVBQUosQ0FBVztBQUFDRixHQUFDLEVBQUUsR0FBSjtBQUFTQyxHQUFDLEVBQUU7QUFBWixDQUFYLEVBQTZCLFFBQTdCLEVBQXVDWCxHQUF2QyxFQUE0QyxFQUE1QyxDQUFkO0FBRUFFLFFBQVEsQ0FBQ1csT0FBVCxDQUFpQixVQUFDQyxLQUFELEVBQWlCO0FBQUssY0FBSyxDQUFDQyxJQUFOO0FBQVksQ0FBbkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRlcmZhY2VzLWV0LWhlcml0YWdlLy4vc3JjL2pzL21haW4udHM/NGI3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JlY3RhbmdsZX0gZnJvbSBcIi4vUmVjdGFuZ2xlXCI7XG5pbXBvcnQge0NpcmNsZX0gZnJvbSBcIi4vQ2lyY2xlXCI7XG5pbXBvcnQge0lEcmF3YWJsZX0gZnJvbSBcIi4vSURyYXdhYmxlXCI7XG5cbmNvbnN0IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbXktY2FudmFzJykgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG5jb25zdCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuY29uc3QgbXlTaGFwZXM6IElEcmF3YWJsZVtdID0gW107XG5cblxuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuXG5teVNoYXBlcy5wdXNoKG5ldyBSZWN0YW5nbGUoe3g6IDMwMCwgeTogMTAwfSwgXCJyZWRcIiwgY3R4LCB7d2lkdGg6IDUwLCBoZWlnaHQ6IDQwfSkpO1xubXlTaGFwZXMucHVzaChuZXcgUmVjdGFuZ2xlKHt4OiAxMDAsIHk6IDIwMH0sIFwiYmx1ZVwiLCBjdHgsIHt3aWR0aDogMjAsIGhlaWdodDogNjB9KSk7XG5teVNoYXBlcy5wdXNoKG5ldyBDaXJjbGUoe3g6IDUwLCB5OiAyMDB9LCBcImJsdWVcIiwgY3R4LCAzMCkpO1xubXlTaGFwZXMucHVzaChuZXcgQ2lyY2xlKHt4OiA2MDAsIHk6IDEwMH0sIFwieWVsbG93XCIsIGN0eCwgMjUpKTtcblxubXlTaGFwZXMuZm9yRWFjaCgoc2hhcGU6IElEcmF3YWJsZSkgPT4gc2hhcGUuZHJhdygpKTtcblxuXG4iXSwibmFtZXMiOlsiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJteVNoYXBlcyIsIndpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImhlaWdodCIsImlubmVySGVpZ2h0IiwicHVzaCIsIlJlY3RhbmdsZV8xIiwieCIsInkiLCJDaXJjbGVfMSIsImZvckVhY2giLCJzaGFwZSIsImRyYXciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/main.ts\n");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9tYWluLnNjc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW50ZXJmYWNlcy1ldC1oZXJpdGFnZS8uL3NyYy9zY3NzL21haW4uc2Nzcz9mN2U1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scss/main.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/main": 0,
/******/ 			"css/main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkinterfaces_et_heritage"] = self["webpackChunkinterfaces_et_heritage"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/js/main.ts")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/main"], () => (__webpack_require__("./src/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;