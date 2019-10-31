"use strict";
const ws_1 = require("ws");
const child_process = require("child_process");
class WebServer {
    constructor() {
        // private _socket: Server;
        this._clientList = [];
    }
    connect(port) {
        let server = new ws_1.Server({ port: port }, () => {
            console.log(`监听成功：port:${port}`);
        });
        console.log(`正在监听：port:${port}`);
        server.on("connection", (socket, req) => {
            this.onConnectClient(socket, req);
        });
        server.on("error", (error) => {
            console.error(error.message);
        });
    }
    onConnectClient(client, incomingMessage) {
        if (this._curClient) {
            this._curClient.close(3000, "结束");
        }
        this._clientList.push(client);
        this._curClient = client;
        var remoteAddress = incomingMessage.connection.remoteAddress;
        var ip = remoteAddress.substr(7);
        console.log("客户端连接：ip = " + ip);
        client.onmessage = (msg) => {
            this.parseClientMessage(msg);
        };
        client.onclose = (msg) => {
            console.log("客户端断开连接,reason=" + msg.reason);
            console.log("客户端断开连接,code=" + msg.code);
            console.log("客户端断开连接,wasClean=" + msg.wasClean);
            this.closeClient(msg);
        };
    }
    sendToClient(msg) {
        this._clientList.forEach(value => {
            value.send(msg);
        });
    }
    parseClientMessage(msg) {
        this._clientList.forEach(value => {
            value.send(msg.data);
        });
        if (msg.data == "push") {
            // child_process.exec(" egret publish d:\\workspace\\client\\trunk\\login", (error, stdout, stderr) => {
            //     if (error) {
            //         console.log("error" + error.message)
            //     }
            //     console.log("stdout=" + stdout)
            //     console.log("stderr=" + stderr)
            // })
            var process = child_process.spawn("egret publish", ["d:\\workspace\\client\\trunk\\login"], { shell: true });
            process.stderr.on("data", (chuck) => {
                this.sendToClient(chuck + "");
            });
            process.stdout.on("data", (chuck) => {
                this.sendToClient(chuck + "");
            });
            process.on("exit", (code, signal) => {
                if (code == 0) {
                    this.sendToClient("完成");
                }
                else {
                    this.sendToClient("错误" + code);
                }
            });
            process.on("error", (err) => {
                this.sendToClient("错误" + err.message);
            });
        }
        console.log("客户端消息：" + msg.data);
    }
    closeClient(msg) {
        let index = this._clientList.indexOf(msg.target);
        this._clientList.splice(index, 1);
    }
}
module.exports = WebServer;
//# sourceMappingURL=WebServer.js.map