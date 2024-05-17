const odbc = require('odbc');

class DatabaseManager {
    constructor(connectionString) {
        this.connectionString = connectionString;
    }

    connect() {
        return new Promise((resolve, reject) => {
            odbc.connect(this.connectionString, (err, connection) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(connection);
                }
            });
        });
    }

    query(sql) {
        return new Promise(async (resolve, reject) => {
            try {
                const connection = await this.connect();
                connection.query(sql, (err, rows) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(rows);
                    }
                    connection.close(); // Close the connection after query execution
                });
            } catch (error) {
                reject(error);
            }
        });
    }
}

module.exports = DatabaseManager;