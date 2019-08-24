"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var index_js_1 = __importDefault(require("../../index.js"));
var assert_1 = __importDefault(require("assert"));
var split = index_js_1["default"].split, join = index_js_1["default"].join;
console.log(index_js_1["default"]('aaa-bbb-ccc'));
assert_1["default"].equal(index_js_1["default"]('aaa-bbb-ccc'), 'aaaBbbCcc');
console.log(join(split('aaa-bbb-ccc')));
assert_1["default"].equal(join(split('aaa-bbb-ccc')), 'aaaBbbCcc');
