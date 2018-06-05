const app = require("express")();
const bodyParser = require("body-parser");
const routes = require("./server/routes");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extened: false}));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/", routes);

app.listen(3000, () => {
  console.log(`Server listening on port http://localhost:3000...`);
});
