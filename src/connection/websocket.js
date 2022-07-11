import { WebSocketServer } from "ws";


export function initWebsocketServer()
{
    const wsServer = new WebSocketServer({ port: 8080 });

    wsServer.on("connection", wsClient =>
    {
        wsClient.on("message", data =>
        {
            console.log("received data:", data);
        });

        wsClient.send(JSON.stringify({
            serverName: "qTown server",
            describe: "A qTown server"
        }));
    });
}