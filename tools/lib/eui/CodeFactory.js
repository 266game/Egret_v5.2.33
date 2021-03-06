//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// module eui.sys {
var STATE = "eui.State";
var ADD_ITEMS = "eui.AddItems";
var SET_PROPERTY = "eui.SetProperty";
var SET_STATEPROPERTY = "eui.SetStateProperty";
var BINDING_PROPERTIES = "eui.Binding.$bindProperties";
/**
 * @private
 * ????????????????????????
 */
var CodeBase = /** @class */ (function () {
    function CodeBase() {
        /**
         * @private
         */
        this.indent = 0;
    }
    /**
     * @private
     *
     * @returns
     */
    CodeBase.prototype.toCode = function () {
        return "";
    };
    /**
     * @private
     * ?????????????????????
     */
    CodeBase.prototype.getIndent = function (indent) {
        if (indent === void 0)
            indent = this.indent;
        var str = "";
        for (var i = 0; i < indent; i++) {
            str += "	";
        }
        return str;
    };
    return CodeBase;
}());
exports.CodeBase = CodeBase;
/**
 * @private
 */
var EXClass = /** @class */ (function (_super) {
    __extends(EXClass, _super);
    function EXClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * @private
         * ??????,??????????????????
         */
        _this.className = "";
        /**
          * @private
          * ?????????????????????
          */
        _this.allName = "";
        /**
         * @private
         * ????????????,?????????????????????
         */
        _this.superClass = "";
        /**
         * @private
         * ???????????????
         */
        _this.innerClassBlock = [];
        /**
         * @private
         * ??????????????????
         */
        _this.variableBlock = [];
        /**
         * @private
         * ??????????????????
         */
        _this.functionBlock = [];
        return _this;
    }
    /**
     * @private
     * ?????????????????????
     */
    EXClass.prototype.addInnerClass = function (clazz) {
        if (this.innerClassBlock.indexOf(clazz) == -1) {
            this.innerClassBlock.push(clazz);
        }
    };
    /**
     * @private
     * ????????????
     */
    EXClass.prototype.addVariable = function (variableItem) {
        if (this.variableBlock.indexOf(variableItem) == -1) {
            this.variableBlock.push(variableItem);
        }
    };
    /**
     * @private
     * ?????????????????????????????????
     */
    EXClass.prototype.getVariableByName = function (name) {
        var list = this.variableBlock;
        var length = list.length;
        for (var i = 0; i < length; i++) {
            var item = list[i];
            if (item.name == name) {
                return item;
            }
        }
        return null;
    };
    /**
     * @private
     * ????????????
     */
    EXClass.prototype.addFunction = function (functionItem) {
        if (this.functionBlock.indexOf(functionItem) == -1) {
            this.functionBlock.push(functionItem);
        }
    };
    /**
     * @private
     * ????????????????????????????????????
     */
    EXClass.prototype.getFuncByName = function (name) {
        var list = this.functionBlock;
        var length = list.length;
        for (var i = 0; i < length; i++) {
            var item = list[i];
            if (item.name == name) {
                return item;
            }
        }
        return null;
    };
    /**
     * @private
     *
     * @returns
     */
    EXClass.prototype.toCode = function (isAssignWindow) {
        if (isAssignWindow === void 0) { isAssignWindow = false; }
        var indent = this.indent;
        var indentStr = this.getIndent(indent);
        var indent1Str = this.getIndent(indent + 1);
        var indent2Str = this.getIndent(indent + 2);
        //??????????????????
        var returnStr = indentStr + "(function (";
        if (this.superClass) {
            returnStr += "_super) {\n" + indent1Str + "__extends(" + this.className + ", _super);\n";
        }
        else {
            returnStr += ") {\n";
        }
        //?????????????????????
        var innerClasses = this.innerClassBlock;
        var length = innerClasses.length;
        for (var i = 0; i < length; i++) {
            var clazz = innerClasses[i];
            clazz.indent = indent + 1;
            if (!isAssignWindow)
                returnStr += indent1Str + "var " + clazz.className + " = " + clazz.toCode() + "\n\n";
            else {
                returnStr += indent1Str + "var " + clazz.className + " = " + clazz.toCode() + "\n";
                returnStr += indent1Str + ("window." + clazz.allName + "=" + clazz.className + ";\n");
            }
        }
        returnStr += indent1Str + "function " + this.className + "() {\n";
        if (this.superClass) {
            returnStr += indent2Str + "_super.call(this);\n";
        }
        //??????????????????
        var variables = this.variableBlock;
        length = variables.length;
        for (var i = 0; i < length; i++) {
            var variable = variables[i];
            if (variable.defaultValue) {
                returnStr += indent2Str + variable.toCode() + "\n";
            }
        }
        //??????????????????
        if (this.constructCode) {
            var codes = this.constructCode.toCode().split("\n");
            length = codes.length;
            for (var i = 0; i < length; i++) {
                var code = codes[i];
                returnStr += indent2Str + code + "\n";
            }
        }
        returnStr += indent1Str + "}\n";
        returnStr += indent1Str + "var _proto = " + this.className + ".prototype;\n\n";
        //??????????????????
        var functions = this.functionBlock;
        length = functions.length;
        for (var i = 0; i < length; i++) {
            var functionItem = functions[i];
            functionItem.indent = indent + 1;
            returnStr += functionItem.toCode() + "\n";
        }
        //???????????????
        returnStr += indent1Str + "return " + this.className + ";\n" + indentStr;
        if (this.superClass) {
            returnStr += "})(" + this.superClass + ");";
        }
        else {
            returnStr += "})();";
        }
        return returnStr;
    };
    return EXClass;
}(CodeBase));
exports.EXClass = EXClass;
/**
 * @private
 */
var EXCodeBlock = /** @class */ (function (_super) {
    __extends(EXCodeBlock, _super);
    function EXCodeBlock() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * @private
         */
        _this.lines = [];
        return _this;
    }
    /**
     * @private
     * ????????????????????????
     * @param name ?????????
     * @param value ???????????????
     */
    EXCodeBlock.prototype.addVar = function (name, value) {
        var valueStr = value ? " = " + value : "";
        this.addCodeLine("var " + name + valueStr + ";");
    };
    /**
     * @private
     * ??????????????????
     * @param target ??????????????????
     * @param value ???
     * @param prop ???????????????(??????.?????????)??????????????????????????????
     */
    EXCodeBlock.prototype.addAssignment = function (target, value, prop) {
        var propStr = prop ? "." + prop : "";
        this.addCodeLine(target + propStr + " = " + value + ";");
    };
    /**
     * @private
     * ?????????????????????
     */
    EXCodeBlock.prototype.addReturn = function (data) {
        this.addCodeLine("return " + data + ";");
    };
    /**
     * @private
     * ??????????????????
     */
    EXCodeBlock.prototype.addEmptyLine = function () {
        this.addCodeLine("");
    };
    /**
     * @private
     * ????????????if?????????,????????????startBlock();
     */
    EXCodeBlock.prototype.startIf = function (expression) {
        this.addCodeLine("if(" + expression + ")");
        this.startBlock();
    };
    /**
     * @private
     * ??????else?????????,????????????startBlock();
     */
    EXCodeBlock.prototype.startElse = function () {
        this.addCodeLine("else");
        this.startBlock();
    };
    /**
     * @private
     * ??????else if?????????,????????????startBlock();
     */
    EXCodeBlock.prototype.startElseIf = function (expression) {
        this.addCodeLine("else if(" + expression + ")");
        this.startBlock();
    };
    /**
     * @private
     * ????????????????????????????????????????????????
     */
    EXCodeBlock.prototype.startBlock = function () {
        this.addCodeLine("{");
        this.indent++;
    };
    /**
     * @private
     * ????????????????????????,????????????????????????
     */
    EXCodeBlock.prototype.endBlock = function () {
        this.indent--;
        this.addCodeLine("}");
    };
    /**
     * @private
     * ???????????????????????????
     * @param functionName ????????????????????????
     * @param args ??????????????????
     */
    EXCodeBlock.prototype.doFunction = function (functionName, args) {
        var argsStr = args.join(",");
        this.addCodeLine(functionName + "(" + argsStr + ")");
    };
    /**
     * @private
     * ??????????????????
     */
    EXCodeBlock.prototype.addCodeLine = function (code) {
        this.lines.push(this.getIndent() + code);
    };
    /**
     * @private
     * ??????????????????????????????
     */
    EXCodeBlock.prototype.addCodeLineAt = function (code, index) {
        this.lines.splice(index, 0, this.getIndent() + code);
    };
    /**
     * @private
     * ??????????????????????????????
     */
    EXCodeBlock.prototype.containsCodeLine = function (code) {
        return this.lines.indexOf(code) != -1;
    };
    /**
     * @private
     * ??????????????????????????????????????????
     */
    EXCodeBlock.prototype.concat = function (cb) {
        this.lines = this.lines.concat(cb.lines);
    };
    /**
     * @private
     *
     * @returns
     */
    EXCodeBlock.prototype.toCode = function () {
        return this.lines.join("\n");
    };
    return EXCodeBlock;
}(CodeBase));
exports.EXCodeBlock = EXCodeBlock;
/**
 * @private
 */
var EXFunction = /** @class */ (function (_super) {
    __extends(EXFunction, _super);
    function EXFunction() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * @private
         * ?????????
         */
        _this.codeBlock = null;
        /**
         * @private
         */
        _this.isGet = false;
        /**
         * @private
         * ?????????
         */
        _this.name = "";
        return _this;
    }
    /**
     * @private
     *
     * @returns
     */
    EXFunction.prototype.toCode = function () {
        var indentStr = this.getIndent();
        var indent1Str = this.getIndent(this.indent + 1);
        var codeIndent;
        var returnStr = indentStr;
        if (this.isGet) {
            codeIndent = this.getIndent(this.indent + 2);
            returnStr += 'Object.defineProperty(_proto, "skinParts", {\n';
            returnStr += indent1Str + "get: function () {\n";
        }
        else {
            codeIndent = indent1Str;
            returnStr += "_proto." + this.name + " = function () {\n";
        }
        if (this.codeBlock) {
            var lines = this.codeBlock.toCode().split("\n");
            var length = lines.length;
            for (var i = 0; i < length; i++) {
                var line = lines[i];
                returnStr += codeIndent + line + "\n";
            }
        }
        if (this.isGet) {
            returnStr += indent1Str + "},\n" + indent1Str + "enumerable: true,\n" +
                indent1Str + "configurable: true\n" + indentStr + "});";
        }
        else {
            returnStr += indentStr + "};";
        }
        return returnStr;
    };
    return EXFunction;
}(CodeBase));
exports.EXFunction = EXFunction;
/**
 * @private
 */
var EXVariable = /** @class */ (function (_super) {
    __extends(EXVariable, _super);
    /**
     * @private
     */
    function EXVariable(name, defaultValue) {
        var _this = _super.call(this) || this;
        _this.indent = 2;
        _this.name = name;
        _this.defaultValue = defaultValue;
        return _this;
    }
    /**
     * @private
     *
     * @returns
     */
    EXVariable.prototype.toCode = function () {
        if (!this.defaultValue) {
            return "";
        }
        return "this." + this.name + " = " + this.defaultValue + ";";
    };
    return EXVariable;
}(CodeBase));
exports.EXVariable = EXVariable;
var EXArray = /** @class */ (function (_super) {
    __extends(EXArray, _super);
    function EXArray(array) {
        var _this = _super.call(this) || this;
        _this.array = array;
        return _this;
    }
    EXArray.prototype.toCode = function () {
        return "[" + this.array.map(function (v) { return "\"" + v + "\""; }).join(",") + "]";
    };
    return EXArray;
}(CodeBase));
exports.EXArray = EXArray;
/**
 * @private
 */
var EXState = /** @class */ (function (_super) {
    __extends(EXState, _super);
    /**
     * @private
     */
    function EXState(name, stateGroups) {
        var _this = _super.call(this) || this;
        /**
         * @private
         * ??????????????????
         */
        _this.name = "";
        /**
         * @private
         */
        _this.stateGroups = [];
        /**
         * @private
         */
        _this.addItems = [];
        /**
         * @private
         */
        _this.setProperty = [];
        _this.name = name;
        if (stateGroups)
            _this.stateGroups = stateGroups;
        return _this;
    }
    /**
     * @private
     * ??????????????????
     */
    EXState.prototype.addOverride = function (item) {
        if (item instanceof EXAddItems)
            this.addItems.push(item);
        else
            this.setProperty.push(item);
    };
    /**
     * @private
     *
     * @returns
     */
    EXState.prototype.toCode = function () {
        var indentStr = this.getIndent(1);
        var returnStr = "new " + STATE + " (\"" + this.name + "\",\n" + indentStr + "[\n";
        var index = 0;
        var isFirst = true;
        var overrides = this.addItems.concat(this.setProperty);
        while (index < overrides.length) {
            if (isFirst)
                isFirst = false;
            else
                returnStr += ",\n";
            var item = overrides[index];
            var codes = item.toCode().split("\n");
            var length = codes.length;
            for (var i = 0; i < length; i++) {
                var code = codes[i];
                codes[i] = indentStr + indentStr + code;
            }
            returnStr += codes.join("\n");
            index++;
        }
        returnStr += "\n" + indentStr + "])";
        return returnStr;
    };
    return EXState;
}(CodeBase));
exports.EXState = EXState;
/**
 * @private
 */
var EXAddItems = /** @class */ (function (_super) {
    __extends(EXAddItems, _super);
    /**
     * @private
     */
    function EXAddItems(target, property, position, relativeTo) {
        var _this = _super.call(this) || this;
        _this.target = target;
        _this.property = property;
        _this.position = position;
        _this.relativeTo = relativeTo;
        return _this;
    }
    /**
     * @private
     *
     * @returns
     */
    EXAddItems.prototype.toCode = function () {
        var returnStr = "new " + ADD_ITEMS + "(\"" + this.target + "\",\"" + this.property + "\"," + this.position + ",\"" + this.relativeTo + "\")";
        return returnStr;
    };
    return EXAddItems;
}(CodeBase));
exports.EXAddItems = EXAddItems;
/**
 * @private
 */
var EXSetProperty = /** @class */ (function (_super) {
    __extends(EXSetProperty, _super);
    /**
     * @private
     */
    function EXSetProperty(target, name, value) {
        var _this = _super.call(this) || this;
        _this.target = target;
        _this.name = name;
        _this.value = value;
        return _this;
    }
    /**
     * @private
     *
     * @returns
     */
    EXSetProperty.prototype.toCode = function () {
        return "new " + SET_PROPERTY + "(\"" + this.target + "\",\"" + this.name + "\"," + this.value + ")";
    };
    return EXSetProperty;
}(CodeBase));
exports.EXSetProperty = EXSetProperty;
/**
 * @private
 */
var EXSetStateProperty = /** @class */ (function (_super) {
    __extends(EXSetStateProperty, _super);
    /**
     * @private
     */
    function EXSetStateProperty(target, property, templates, chainIndex) {
        var _this = _super.call(this) || this;
        if (target) {
            target = "this." + target;
        }
        else {
            target = "this";
        }
        _this.target = target;
        _this.property = property;
        _this.templates = templates;
        _this.chainIndex = chainIndex;
        return _this;
    }
    /**
     * @private
     *
     * @returns
     */
    EXSetStateProperty.prototype.toCode = function () {
        var expression = this.templates.join(",");
        var chain = this.chainIndex.join(",");
        return "new " + SET_STATEPROPERTY + "(this, [" + expression + "]," + "[" + chain + "]," +
            this.target + ",\"" + this.property + "\")";
    };
    return EXSetStateProperty;
}(CodeBase));
exports.EXSetStateProperty = EXSetStateProperty;
/**
 * @private
 */
var EXBinding = /** @class */ (function (_super) {
    __extends(EXBinding, _super);
    /**
     * @private
     */
    function EXBinding(target, property, templates, chainIndex) {
        var _this = _super.call(this) || this;
        _this.target = target;
        _this.property = property;
        _this.templates = templates;
        _this.chainIndex = chainIndex;
        return _this;
    }
    /**
     * @private
     *
     * @returns
     */
    EXBinding.prototype.toCode = function () {
        var expression = this.templates.join(",");
        var chain = this.chainIndex.join(",");
        return BINDING_PROPERTIES + "(this, [" + expression + "]," + "[" + chain + "]," +
            this.target + ",\"" + this.property + "\");";
    };
    return EXBinding;
}(CodeBase));
exports.EXBinding = EXBinding;
// }
