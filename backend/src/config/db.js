import dotenv from "dotenv";
dotenv.config();

import sql2 from "mysql2/promise";

const pool = sql2.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  multipleStatements: true,
});

// Check connection
const checkConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log("✅ DB is connected");
    connection.release();
  } catch (error) {
    console.error("❌ DB is not connected:", error.message);
  }
};

export default checkConnection;
export { pool };
