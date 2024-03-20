const mysql = require("mysql2");
const migration = require("mysql-migrations")

const connection = mysql.createPool({
    connectionLimit: 10,
    host: "localhost",
    user: "pinetree",
    password: "admin",
    database: "prueba"
});

migration.init(connection, __dirname + '/migrations', function() {
    console.log("finished running migrations");
});