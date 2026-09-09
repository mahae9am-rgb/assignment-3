const pool = require('./common/db/db');

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('في مشكلة في الاتصال:', err);
  } else {
    console.log('الاتصال شغال! الوقت من السيرفر:', res.rows[0]);
  }
  pool.end();
});