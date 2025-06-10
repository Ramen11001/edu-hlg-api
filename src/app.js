var createError = require("http-errors");
var express = require("express");
var cors = require("cors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

//new routes soon:
var app = express();
var coursesRouter = require("./routes/course");
var commentsRouter = require("./routes/comment");
var usersRouter = require("./routes/user");
var indexRouter = require("./routes/index");
const authRouter = require("./routes/auth");
var authenticate = require("./middleware/auth");

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

//For web
app.use(
  cors({
    origin: "http://localhost:4200", // Allow access from Angular
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

////new IMPLEMENTS ROUTES soon:
app.use("/", indexRouter);
app.use("/auth", authRouter);
app.use("/courses",  authenticate, coursesRouter);
app.use("/comments",  authenticate, commentsRouter);
app.use("/users",  authenticate, usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
