const express = require("express"); //module
// middleware( To access all kind of data type of request from the server)
const bodyParser = require("body-parser");
const app = express(); // function

app.use(bodyParser.urlencoded({ extended: false })); //function which will process the input request using middleware like(body-parser) and produce response
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send(`<h1>Hi welcome to Express.js App</h1>
        <form action="/submit" method="POST">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" required/>
        <button type="submit">Submit</button>
        </form>
        `);
});
app.post("/submit", (req, res) => {
  const name = req.body.name;
  res.send(`Hello ${name} your data have been submitted`);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`server is running successfully on http://localhost:${PORT}`);
});
