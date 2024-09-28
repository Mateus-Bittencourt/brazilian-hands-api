import db from "../config/database.js";

db.run(`
    CREATE TABLE IF NOT EXISTS workers (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      document TEXT UNIQUE NOT NULL,
      eircode TEXT NOT NULL,
      phone_number TEXT NOT NULL,
      tools TEXT
    )
  `);

const createWorker = (newWorker) => {
  const { name, email, document, eircode, phoneNumber, tools } = newWorker;
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO Workers ( name, email, document, eircode, phone_number, tools )
        VALUES (?,?,?,?,?,?)`,
      [name, email, document, eircode, phoneNumber, tools],
      function (err) {
        if (err) reject(err);
        else resolve(newWorker);
      }
    );
  });
};

const findWorkerByDocument = (document) => {
  return new Promise((resolve, reject) => {
    db.get(
      `SELECT * FROM workers WHERE document = ?`,
      [document],
      (err, row) => {
        if (err) reject(err);
        else resolve(row);
      }
    );
  });
};

export default { createWorker, findWorkerByDocument };
