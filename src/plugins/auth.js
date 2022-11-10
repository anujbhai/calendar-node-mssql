"use strict";

const bell = require("@hapi/bell");
const cookie = require("@hapi/cookie");

const isSecure = process.env.NODE_ENV === "production";

module.exports = {
  name: "auth",
  version: "1.0.0",
  register: async server => {
    await server.register({bell, cookie});

    const config = server.app.config;

    server.auth.strategy("session", "cookie", {
      cookie: {
        name: "okta-oauth",
        path: "/",
        password: config.cookPwd,
        isSecure
      },
      redirectTo: "/authorization-code/callback"
    });

    server.auth.strategy("okta", "bell", {});
  }
};
