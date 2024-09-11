import db from "../config/database.js";

db.run(`
  CREATE TABLE IF NOT EXISTS customers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    document TEXT UNIQUE NOT NULL,
    street_address TEXT NOT NULL,
    city TEXT NOT NULL,
    country TEXT,
    eircode TEXT NOT NULL,
    phone_number TEXT NOT NULL
  )
`);

const createCustomer = (newCustomer) => {
  const {
    name,
    email,
    document,
    streetAddress,
    city,
    country,
    eircode,
    phoneNumber,
  } = newCustomer;
  return new Promise((resolve, reject) => {
    db.run(
      `INSERT INTO customers ( name, email, document, street_address, city, country, eircode, phone_number )
      VALUES (?,?,?,?,?,?,?,?)`,
      [
        name,
        email,
        document,
        streetAddress,
        city,
        country,
        eircode,
        phoneNumber,
      ],
      function (err) {

        if (err) reject(err);
        else resolve( newCustomer );
      }
    );
  });
};

const updateCustomer = async (customer) => {
  return new Promise((resolve, reject) => {
    const {
      name,
      email,
      streetAddress,
      city,
      country,
      eircode,
      phoneNumber,
      document
    } = customer;
    db.run(
      `
        UPDATE customers
        SET
          name =?,
          email=?,
          street_address =?,
          city =?,
          country =?,
          eircode =?,
          phone_number =?
        WHERE document = ?
      `,
      [
        name,
        email,
        streetAddress,
        city,
        country,
        eircode,
        phoneNumber,
        document,
      ],
      (err) => {
        if (err) reject(err);
        else resolve(customer);
      }
    );
  });
};


const findCustomerByDocument = (document) => {
  return new Promise((resolve, reject) => {
    db.get(`SELECT * FROM customers WHERE document = ?`, [document], (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });
};


export default {
  createCustomer,
  updateCustomer,
  findCustomerByDocument,
};
