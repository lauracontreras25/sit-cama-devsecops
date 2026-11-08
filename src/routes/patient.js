const express = require('express');
const { Pool } = require('pg');

const app = express();
const db = new Pool();

app.get('/patient', (req, res) => {
  db.query(`SELECT * FROM patients WHERE id = '${req.query.id}'`);
});
