// Import mysql2 untuk koneksi MySQL
const mysql = require('mysql2/promise');

// Menyimpan informasi database dari environment variables atau langsung di sini
const dbConfig = {
  host: process.env.MYSQL_HOST || 'mysql.railway.internal', // Menggunakan MYSQL_HOST dari Railway
  user: process.env.MYSQL_USER || 'root', // Username root (sesuaikan dengan informasi yang diberikan)
  password: process.env.MYSQL_PASSWORD || 'FcFRZDHjLmrpnWBNIJEKODuqMYgUIETo', // Password root (sesuaikan dengan informasi yang diberikan)
  database: process.env.MYSQL_DATABASE || 'railway', // Nama database (sesuaikan dengan informasi yang diberikan)
  port: process.env.MYSQL_PORT || 3306, // Port default MySQL (sesuaikan dengan informasi yang diberikan)
  ssl: {
    rejectUnauthorized: false, // Sesuaikan dengan pengaturan SSL di Railway (opsional)
  },
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
};

// Membuat koneksi pool ke database
const pool = mysql.createPool(dbConfig);

// Mengecek koneksi database
pool
  .getConnection()
  .then((conn) => {
    console.log("Database connected!");
    conn.release(); // Melepaskan koneksi setelah sukses
  })
  .catch((err) => {
    console.error("Database connection failed: ", err.message);
  });

// Mengekspor pool agar bisa digunakan di bagian lain aplikasi
module.exports = pool;
