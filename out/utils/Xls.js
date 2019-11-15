"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodeXlsx = require("node-xlsx");
const fse = require("fs-extra");
const path_1 = require("path");
const path = require("path");
function parse() {
    let xlsPathUrl = "./xls/demo.xls";
    let data = nodeXlsx.parse(xlsPathUrl);
    data.forEach((value, sIndex) => {
        let hasData = value.data.length > 1;
        if (hasData) {
            console.log(`${value.name}有${value.data.length}条数据`);
            fse.readFile(sIndex + ".xml", "utf8", (err, data) => {
                let totalStr = data;
                let newStr = "";
                value.data.forEach((sheet, index) => {
                    let str = index == 0 ? "表头" : `第${index}条`;
                    sheet.forEach((sheetValue) => {
                        str += sheetValue + ",";
                    });
                    newStr += str.replace(/,$/g, "\n");
                });
                fse.writeFileSync(sIndex + ".xml", newStr);
            });
        }
    });
    // for (let index = 1; index < 100; index++) {
    //     let j = 2
    //     for (; j < index; j++) {
    //         if (index % j == 0) {
    //             // console.log("非质数：" + index);
    //             break;
    //         }
    //     }
    //     if (index == j) {
    //         console.log("质数：" + index)
    //     }
    // }
}
exports.parse = parse;
function parseXlsx(fileName) {
    let xlsxList = nodeXlsx.parse(fileName);
    console.log("解析:" + fileName);
    let pathData = path.parse(fileName);
    let resultStr = "";
    if (xlsxList) {
        xlsxList.some((sheets) => {
            let has2 = sheets.data.some((sheet, index) => {
                return sheet.some(value => {
                    let newValue = value + "";
                    if (newValue.indexOf("\"UNDERGO\"") >= 0) {
                        return true;
                    }
                    return false;
                });
            });
            if (has2) {
                resultStr += fileName + "\t" + sheets.name + "\n";
            }
        });
    }
    return resultStr;
}
exports.parseXlsx = parseXlsx;
function parseFolder() {
    let xlsFolder = "D:\\xlsxdemo";
    let dirs = fse.readdirSync(xlsFolder, { encoding: "utf-8", withFileTypes: true });
    let result = "";
    dirs.forEach(value => {
        if (value.isFile()) {
            let newFileName = xlsFolder + "\\" + value.name;
            let extName = path_1.extname(newFileName);
            if (extName == ".xlsx") {
                let findName = parseXlsx(newFileName);
                if (findName != "") {
                    result += findName + "\n";
                }
            }
        }
    });
    fse.writeFileSync("查找结果.txt", result);
    // let data = nodeXlsx.parse(xlsPathUrl);
    // data.forEach((value, sIndex) => {
    //     let hasData = value.data.length > 1;
    //     if (hasData) {
    //         console.log(`${value.name}有${value.data.length}条数据`);
    //         fse.readFile(sIndex + ".xml", "utf8", (err, data) => {
    //             let totalStr: string = data;
    //             let newStr = "";
    //             value.data.forEach((sheet, index) => {
    //                 let str = index == 0 ? "表头" : `第${index}条`;
    //                 sheet.forEach((sheetValue) => {
    //                     str += sheetValue + ",";
    //                 })
    //                 newStr += str.replace(/,$/g, "\n");
    //             })
    //             fse.writeFileSync(sIndex + ".xml", newStr)
    //         })
    //     }
    // })
    // for (let index = 1; index < 100; index++) {
    //     let j = 2
    //     for (; j < index; j++) {
    //         if (index % j == 0) {
    //             // console.log("非质数：" + index);
    //             break;
    //         }
    //     }
    //     if (index == j) {
    //         console.log("质数：" + index)
    //     }
    // }
}
exports.parseFolder = parseFolder;
function exportXls(xlsName) {
    let xlsPathUrl = `./xls/${xlsName}.xlsx`;
    let data = nodeXlsx.parse(xlsPathUrl);
    let result = [];
    data.some((value, sIndex) => {
        let hasData = value.data.length > 1;
        if (hasData) {
            let datas = value.data;
            datas.forEach((xlsValue, outindex) => {
                let d = [];
                let path = "";
                xlsValue.forEach((single, index) => {
                    console.log(single);
                    d.push(single);
                    let pushValue;
                    if (index == 1 && outindex > 0) {
                        path = single;
                        pushValue = fse.statSync("D:\\workspace\\client\\versioning\\client\\res\\game\\" + path).size / 1024;
                        d.push(Math.ceil(pushValue) + "kb");
                    }
                });
                result.push(d);
            });
        }
        return true;
    });
    let out = nodeXlsx.build([{ "name": "Sheet1", data: result }]);
    fse.writeFileSync('user.xlsx', out, 'binary');
}
exports.exportXls = exportXls;
//# sourceMappingURL=Xls.js.map