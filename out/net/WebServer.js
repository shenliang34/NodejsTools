"use strict";
// import { Server, Data } from "ws";
// import WebSocket = require("ws");
// import child_process = require("child_process");
// import { IncomingMessage } from "http";
// import { fstat } from "fs";
// class WebServer {
//     // private _socket: Server;
//     private _clientList: WebSocket[] = [];
//     private _curClient!: WebSocket;
//     constructor() {
//     }
//     public connect(port: number) {
//         let server = new Server({ port: port }, () => {
//             console.log(`监听成功：port:${port}`);
//         });
//         console.log(`正在监听：port:${port}`);
//         server.on("connection", (socket, req) => {
//             this.onConnectClient(socket, req);
//         });
//         server.on("error", (error: Error) => {
//             console.error(error.message);
//         })
//     }
//     private onConnectClient(client: WebSocket, incomingMessage: IncomingMessage) {
//         if (this._curClient) {
//             this._curClient.close(3000, "结束");
//         }
//         this._clientList.push(client);
//         this._curClient = client
//         var remoteAddress = incomingMessage.connection.remoteAddress as string;
//         var ip = remoteAddress.substr(7);
//         console.log("客户端连接：ip = " + ip);
//         client.onmessage = (msg: WebSocket.MessageEvent) => {
//             this.parseClientMessage(msg);
//         };
//         client.onclose = (msg: WebSocket.CloseEvent) => {
//             console.log("客户端断开连接,reason=" + msg.reason);
//             console.log("客户端断开连接,code=" + msg.code);
//             console.log("客户端断开连接,wasClean=" + msg.wasClean);
//             this.closeClient(msg);
//         }
//     }
//     sendToClient(msg: string) {
//         this._clientList.forEach(value => {
//             value.send(msg);
//         })
//     }
//     parseClientMessage(msg: { data: Data, type: string, target: WebSocket }) {
//         this._clientList.forEach(value => {
//             value.send(msg.data);
//         })
//         if (msg.data == "push") {
//             // child_process.exec(" egret publish d:\\workspace\\client\\trunk\\login", (error, stdout, stderr) => {
//             //     if (error) {
//             //         console.log("error" + error.message)
//             //     }
//             //     console.log("stdout=" + stdout)
//             //     console.log("stderr=" + stderr)
//             // })
//             var process = child_process.spawn("egret publish", ["d:\\workspace\\client\\trunk\\login"], { shell: true });
//             process.stderr.on("data", (chuck) => {
//                 this.sendToClient(chuck + "");
//             })
//             process.stdout.on("data", (chuck) => {
//                 this.sendToClient(chuck + "");
//             })
//             process.on("exit", (code, signal) => {
//                 if (code == 0) {
//                     this.sendToClient("完成");
//                 }
//                 else {
//                     this.sendToClient("错误" + code);
//                 }
//             })
//             process.on("error", (err: Error) => {
//                 this.sendToClient("错误" + err.message);
//             })
//         }
//         console.log("客户端消息：" + msg.data);
//     }
//     closeClient(msg: WebSocket.CloseEvent) {
//         let index = this._clientList.indexOf(msg.target);
//         this._clientList.splice(index, 1);
//     }
// }
// export = WebServer;
//# sourceMappingURL=WebServer.js.map