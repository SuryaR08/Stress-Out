const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MySQL connection with retry logic
const dbConfig = {
  host: process.env.MYSQL_HOST || "localhost",
  user: process.env.MYSQL_USER || "root",
  password: process.env.MYSQL_PASSWORD || "",
  database: process.env.MYSQL_DB || "peerhealhaven",
};

let connection;

const connectWithRetry = () => {
  connection = mysql.createConnection(dbConfig);

  connection.connect((err) => {
    if (err) {
      console.error("Error connecting to MySQL: " + err.stack);
      setTimeout(connectWithRetry, 5001);
    } else {
      console.log("Connected to MySQL as id " + connection.threadId);
    }
  });

  connection.on("error", (err) => {
    console.error("MySQL error", err);
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      connectWithRetry();
    } else {
      throw err;
    }
  });
};

connectWithRetry();

// Routes
app.post("/signup", (req, res) => {
  const { fullname, email, username, password } = req.body;
  connection.query(
    "SELECT * FROM userdata WHERE email = ? OR username = ?",
    [email, username],
    (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
      }
      if (results.length > 0) {
        return res
          .status(400)
          .json({ message: "Email or username already exists" });
      }
      connection.query(
        "INSERT INTO userdata (fullname, email, username, password) VALUES (?, ?, ?, ?)",
        [fullname, email, username, password],
        (error, results) => {
          if (error) {
            console.error(error);
            return res.status(500).json({ message: "Internal server error" });
          }
          res.json({ message: "Signup successful" });
        }
      );
    }
  );
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  connection.query(
    "SELECT * FROM userdata WHERE username = ? AND password = ?",
    [username, password],
    (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
      }
      if (results.length === 0) {
        return res.status(401).json({ message: "Invalid username/password" });
      }
      res.json({ message: "Login successful", user: results[0] });
    }
  );
});

app.get("/profile2/:username", (req, res) => {
  const username = req.params.username;
  connection.query(
    "SELECT fullname, email, username FROM userdata WHERE username = ?",
    [username],
    (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error" });
      }
      if (results.length === 0) {
        return res.status(404).json({ message: "User not found" });
      }
      res.json({ username: results[0] });
    }
  );
});

app.put("/profile2/:username/change-password", (req, res) => {
  const { username } = req.params;
  const { newPassword } = req.body;

  connection.query(
    "UPDATE userdata SET password = ? WHERE username = ?",
    [newPassword, username],
    (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
      }
      if (results.affectedRows === 0) {
        return res.status(404).json({ error: "User not found" });
      }
      res.status(200).json({ message: "Password changed successfully" });
    }
  );
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
