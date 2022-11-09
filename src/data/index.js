"use strict";

const events = require("./events");
const sql = require("mssql");

const client = async (server, config) => {
  let pool = null;

  const closePool = async () => {
    try {
      await pool.close();
      pool = null;
    } catch (err) {
      pool = null;
      console.error(err);
    }
  };

  const getConnection = async () => {
    try {
      if (pool) {
        return pool;
      }

      pool = await sql.connect(config);
      // pool = new Connection(config);

      pool.on("error", async err => {
        console.log(err);
        await closePool();
      });

      return pool;
    } catch (err) {
      pool = null;
      console.error(err);
    }
  };

  return {
    events: await events.register({sql, getConnection})
  };
};

module.exports = client;
