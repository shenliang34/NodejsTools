"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const WebServer_1 = __importDefault(require("./net/WebServer"));
var web = new WebServer_1.default();
web.connect(8000);
//# sourceMappingURL=app.js.map