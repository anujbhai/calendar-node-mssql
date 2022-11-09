"use strict";

require("dotenv").config();
const assert = require("assert");

const {
  PORT,
  HOST,
  HOST_URL,
  COOKIE_ENCRYPT_PWD,
  SQL_USER,
  SQL_PASSWORD,
  SQL_DATABASE,
  SQL_SERVER,
  SQL_ENCRYPT,
  OKTA_ORG_URL,
  OKTA_CLIENT_ID,
  OKTA_CLIENT_SECRET
} = process.env;

const sqlEncrypt = SQL_ENCRYPT === "true";

assert(PORT, "Port is required.");
assert(HOST, "Host is required.");

module.exports = {
  port: PORT,
  host: HOST,
  url: HOST_URL,
  cookiePwd: COOKIE_ENCRYPT_PWD,
  sql: {
    server: SQL_SERVER,
    database: SQL_DATABASE,
    user: SQL_USER,
    password: SQL_PASSWORD,
    options: {
      encrypt: sqlEncrypt,
      enableArithAbort: true,
      trustServerCertificate: true
    }
  },
  okta: {
    url: OKTA_ORG_URL,
    clientId: OKTA_CLIENT_ID,
    clientSecret: OKTA_CLIENT_SECRET
  }
};
