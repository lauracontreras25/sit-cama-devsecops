const express = require('express');
const router = express.Router();

router.get('/pacientes', (req, res) => {
  const sql = "SELECT * FROM pacientes WHERE cedula = '" + req.query.cedula + "'";
  db.query(sql, (err, rows) => res.json(rows));
});

module.exports = router;
