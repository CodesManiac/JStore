import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Jessica Egbedele",
    email: "jessyJ@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Collins Price",
    email: "col@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
