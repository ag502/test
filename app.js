const https = require("http");
const expressApp = require("express");
const protoo = require("protoo-server");

run();

async function run() {
  // Open the interactive server.
  //   await interactiveServer();

  //   // Open the interactive client.
  //   if (process.env.INTERACTIVE === "true" || process.env.INTERACTIVE === "1")
  //     await interactiveClient();

  // Run a mediasoup Worker.
  //   await runMediasoupWorkers();

  // Create Express app.
  //   await createExpressApp();

  // Run HTTPS server.
  await runHttpsServer();

  // Run a protoo WebSocketServer.
  await runProtooWebSocketServer();

  // Log rooms status every X seconds.
  //   setInterval(() => {
  //     for (const room of rooms.values()) {
  //       room.logStatus();
  //     }
  //   }, 120000);
}

async function runHttpsServer() {
  //   logger.info("running an HTTPS server...");

  //   // HTTPS server for the protoo WebSocket server.
  //   const tls = {
  //     cert: fs.readFileSync(config.https.tls.cert),
  //     key: fs.readFileSync(config.https.tls.key),
  //   };

  httpsServer = https.createServer(expressApp);

  httpsServer.listen(4443, () => {
    console.log("start");
  });

  //   await new Promise((resolve) => {
  //     httpsServer.listen(4443, resolve);
  //   });
}

async function runProtooWebSocketServer() {
  //   logger.info("running protoo WebSocketServer...");
  console.log("running");

  // Create the protoo WebSocket server.
  protooWebSocketServer = new protoo.WebSocketServer(httpsServer, {
    maxReceivedFrameSize: 960000, // 960 KBytes.
    maxReceivedMessageSize: 960000,
    fragmentOutgoingMessages: true,
    fragmentationThreshold: 960000,
  });

  //   console.log(protooWebSocketServer);

  // Handle connections from clients.
  let transport;
  protooWebSocketServer.on("connectionrequest", (info, accept, reject) => {
    console.log("t!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
    transport = accept();
    // console.log(t);
    // Serialize this code into the queue to avoid that two peers connecting at
    // the same time with the same roomId create two separate rooms with same
    // roomId.

    const room = new protoo.Room();
    const peer = room.createPeer("alice", transport);

    peer.on("request", (request, accept, reject) => {
      console.log(request);
      if (something in request) accept({ foo: "bar" });
      else reject(400, "Not Here");
    });
  });
}
