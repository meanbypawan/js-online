import mysql, { createConnection } from "mysql2";

export default mysql.createPool({
    connectionLimit: 100,
    database: "eshop",
    host: "localhost",
    user: 'root',
    password: ''
});
