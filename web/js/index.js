var ws;

function connect() {
    ws = new WebSocket("ws://172.33.0.237:8000")
    ws.onopen = function() {
        console.log("连接成功")
    }

    ws.onmessage =
        /**
         * @param {{ data: string; }} msg
         */
        function(msg) {
            console.log(msg.data);
        }

    ws.onerror = function(msg) {
        console.log("连接错误", msg);
    }

    ws.onclose = function(ev) {
        switch (ev.code) {

        }
        console.log("服务器关闭", ev.type);
    }
}


function send() {
    if (ws) {
        ws.send("ssssssssssssssssss");
    }
}

function exec() {
    if (ws) {
        ws.send("push");
    }
}