const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "yamanote.proxy.rlwy.net",  // Gunakan MYSQL_PUBLIC_URL jika perlu
  user: "root",                     // Username (root)
  password: "FcFRZDHjLmrpnWBNIJEKODuqMYgUIETo",  // Password
  database: "railway",              // Nama database
  port: 22511,                      // Port yang benar
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Menggunakan async/await untuk cek koneksi
const checkDatabaseConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log("Database connected!");
    connection.release();  // Jangan lupa untuk melepaskan koneksi setelah digunakan
  } catch (err) {
    console.error("Database connection failed: ", err.message);
  }
};

// Menjalankan cek koneksi saat aplikasi mulai
checkDatabaseConnection();

module.exports = pool;
