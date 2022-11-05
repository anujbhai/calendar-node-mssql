"use strict";

const config = require("./config");
const server = require("./server");

const startServer = async () => {
  try {
    // const config = {
    //   host: "localhost",
    //   port: 8080
    // };

    const app = await server(config);

    await app.start();

    console.log(`Server running at http://${config.host}:${config.port}`);
  } catch (err) {
    console.error("setup error:", err);
  }
};

startServer();
