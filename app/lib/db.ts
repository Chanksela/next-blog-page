import mysql from "mysql2/promise";

const pool = mysql.createPool({
	host: "localhost",
	user: "chanksela",
	password: "popgof",
	database: "next_news",
});
export default pool;
