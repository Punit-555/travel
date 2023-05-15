const express = require("express");
const db = require("./db");
const cors = require("cors");
const pool = require("./db");
const app = express();
const port = 5000;
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

const username = "admin@gmail.com";
const password = "12345";

const salt = bcrypt.genSaltSync(10);
const hashedPassword = bcrypt.hashSync(password, salt);

const User = { email: "admin@gmail.com", password: "12345" };

// Authenticate :::
app.post("/authenticate", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  console.log("---------->", email);
  console.log("---------->", password);
  User.findOne({ email: email })
    .then((user) => {
      if (user) {
        const isPasswordCorrect = bcrypt.compareSync(password, user.password);
        if (isPasswordCorrect) {
          res.send({ message: "Authentication successful" });
        } else {
          res.status(401).send({ message: "Authentication failed" });
        }
      } else {
        res.status(404).send({ message: "User not found" });
      }
    })
    .catch((error) => {
      res.status(500).send({ message: "Internal server error" });
    });
});

///////////////////////////////////////////////////////////////////////////////

// Get Data
app.get("/getData", async (req, res) => {
  const result = await pool.query("SELECT * FROM  feedback");
  // console.log(result.rows);
  const feedbackData = result.rows;
  return res.status(200).send({ message: "SuccesFul Response", feedbackData });
});

// Deleting Rows
app.get("/removeData/:id", async (req, res) => {
  var user = req.params.id;
  try {
    pool.query("DELETE FROM feedback WHERE id = $1", [user]);
    return res.status(200).send("Deleted Succesfully");
  } catch (error) {
    console.log(error);
  }
});

// Add data
app.get("/addData", async (req, res) => {
  const {
    eventname,
    eventtitle,
    eventdate,
    eventreview,
    eventrating,
    eventdescription,
    emotions,
  } = req.body;
  // console.log("BODY", req.body);
  const result = pool
    .query(
      "insert into feedback ( eventname , eventtitle , eventdate, eventreview, eventrating, eventdescription , emotions	) values ($1,$2,$3, $4,$5,$6,$7)",
      [
        eventname,
        eventtitle,
        eventdate,
        eventreview,
        eventrating,
        eventdescription,
        emotions,
      ]
    )
    .then((data) => {
      const d = data.rows;
      return res.status(200).send({ message: "Inserted Succesfuly", d });
    })
    .catch((error) => {
      console.log(error);
    });
});

// Users
// app.get("/user", async (req, res, next) => {
//   await pool
//     .query("select * from users")
//     .then((result) => {
//       // console.log("User : ", result.rows);
//       const data = result.rows;
//       return res.status(200).send({ message: "User Data ", data });
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// });

// Review
app.get("/review", async (req, res) => {
  await pool
    .query(
      "select feedback.eventrating, feedback.eventname from feedback inner join review on  feedback.reviewid = review.reviewid;   "
    )
    .then((result) => {
      console.log("Review :", result.rows);
      return res.status(200).send(result.rows);
    })
    .catch((error) => {
      console.log(error);
    });
});

// Event Rating
app.get("/eventRating", async (req, res) => {
  await pool
    .query("select eventrating from feedback   ")
    .then((result) => {
      console.log("eventRating :", result.rows);
      return res.status(200).send(result.rows);
    })
    .catch((error) => {
      console.log(error);
    });
});

// Adding Review
app.put("/addReview", async (req, res) => {
  const {   Description, AvgRating , Eventtitle } = req.body;
  console.log("-------------------->", req.body);
  const result = pool
    .query(
      "update feedback set eventdescription = $1  , eventrating = $2, eventtitle = $3,  emotions=true  where reviewid= 2", 
       [Description ,  AvgRating , Eventtitle ,]
    )
    .then((res) => console.log("Updated Succesfully!") )
    .catch((error) => [console.log(error)]);

  return res.status(200).send(result.rows);
});



app.listen(port, () => {
  console.log("Server is Running on the Port : ", port);
});
