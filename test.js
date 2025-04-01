const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "yamanote.proxy.rlwy.net",  // Host Railway yang benar
  user: "root",                     // Username MySQL
  password: "FcFRZDHjLmrpnWBNIJEKODuqMYgUIETo",  // Password
  database: "railway",              // Nama database
  port: 22511,                      // Port Railway
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

const checkDatabaseConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log("Database connected successfully!");
    connection.release();  // Jangan lupa melepaskan koneksi setelah digunakan
  } catch (err) {
    console.error("Database connection failed:", err.message);
  }
};

checkDatabaseConnection();
