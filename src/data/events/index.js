"use strict";

const sql = require("mssql");
const utils = require("../utils");

const register = async ({sql, getConnection}) => {
  const sqlQueries = await utils.loadSqlQueries("events");

  const getEvents = async (userId) => {
    const pool = await getConnection();
    const request = await pool.request();

    request.input("userId", sql.VarChar(50), userId);

    return await request.query(sqlQueries.getEvents);
  };

  const addEvent = async ({userId, title, description, startDate, endDate, startTime, endTime}) => {
    const pool = await getConnection();
    const request = await pool.request();

    request.input("userId", sql.VarChar(50), userId);
    request.input("title", sql.NVarChar(200), title);
    request.input("description", sql.NVarChar(1000), description);
    request.input("startDate", sql.Date, startDate);
    request.input("startTime", sql.Time, startTime);
    request.input("endDate", sql.Date, endDate);
    request.input("endTime", sql.Time, endTime);

    return await request.query(sqlQueries.addEvent)
  };

  const updateEvent = async ({id, userId, title, description, startDate, endDate, startTime, endTime}) => {
    const pool = await getConnection();
    const request = await pool.request();

    request.input("id", sql,Int, id);
    request.input("userId", sql.VarChar(50), userId);
    request.input("title", sql.NVarChar(200), title);
    request.input("description", sql.NVarChar(1000), description);
    request.input("startDate", sql.Date, startDate);
    request.input("startTime", sql.Time, startTime);
    request.input("endDate", sql.Date, endDate);
    request.input("endTime", sql.Time, endTime);

    return await request.query(sqlQueries.updateEvent);
  };

  const deleteEvent = async ({id, userId}) => {
    const pool = await getConnection();
    const request = await pool.request();

    request.input("id", sql,Int, id);
    request.input("userId", sql.VarChar(50), userId);

    return await request.query(sqlQueries.deleteEvent);
  };

  return {
    getEvents,
    addEvent,
    updateEvent,
    deleteEvent
  };
};

module.exports = {register};
