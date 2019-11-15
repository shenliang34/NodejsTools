
// import WebServer from "./net/WebServer";

// var web = new WebServer();
// web.connect(8000);




// import WebServer from "./net/WebServer";
// import crypto = require("crypto");
import fse = require("fs-extra");
import fs = require("fs");
import { parse, parseFolder, exportXls } from "./utils/Xls";
// fse.existsSync("")
// fs.existsSync("")

// let arr = []
// for (let index = 0; index < 10; index++) {
//     arr[index] = index;
// }


// var args = process.argv.splice(2);
// console.log(args);
// console.log(process.platform);
// parse();
// parseFolder();
exportXls("demo2");
// arr.sort((a, b) => {
//     return b - a;
// })

// setImmediate(function a() {
//     console.log(arguments[0])
// }, 111)

// console.log(arr)
// import { EventEmitter } from "events";
// const hash = crypto.Hash;
// var web = new WebServer();
// web.connect(8000);
// let out = crypto.createHash("md5").update("15202136250", "utf8").digest("hex");
// // let out2 = crypto.createCipheriv("aes-192-gcm", "sss").update("15202136250", "utf8", "hex");
// // 如下方法使用指定的算法与密码来创建cipher对象
// const cipher = crypto.createCipher('aes192', "password");

// // 使用该对象的update方法来指定需要被加密的数据
// let crypted = cipher.update("123456", 'utf8', 'hex');
// console.log(out);
// console.log(crypted);

// fs.exists(pathUrl, (exist: boolean) => {
//     if (exist) {
//         console.log("文件存在");
//         fs.readFile(pathUrl, "utf-8", (err, data) => {
//             console.log("文件内容：" + data);
//         })

//         fs.writeJson(pathUrl, "\n添加数据", { encoding: "utf-8" });
//     }
//     else {
//         console.log("文件不存在");
//         console.log("开始创建");
//         fs.writeFile(pathUrl, "第一次", { encoding: "utf-8" }, (err) => {
//             if (err) {
//                 if (err.code == "0") {

//                 }
//                 else {
//                     console.log("write err" + err.message);
//                 }
//             } else {
//                 console.log("write success");
//             }
//         });
//     }

// })

// fs.ensureFile(pathUrl).then(() => {
//     console.log("存在");
// }).catch(() => {
//     console.log("错误");
// })

// require("timers")
// var event = new EventEmitter();
// class AB {

//     private _id: number = 100;
//     constructor() {
//         // event.on("complete", () => {
//         //     this.onComplete();
//         // })
//     }
//     onComplete() {
//         console.log("complete" + this._id);
//     }
// }

// new AB();
// event.emit("complete")

// class A {
//     a?: number;
// }

// class B {
//     b?: string;
//     a?: number;
// }

// class C {
//     c?: string;
//     a?: number;
// }

// function extend<T, U, V>(t: T, u: U): T & U {
//     let r = <T & U>{}
//     return r;
// }

// console.log(extend<number, string>(100, "100"));

// var v = <A | B | C>{};
// v.a = 1;
// console.log(v.a);