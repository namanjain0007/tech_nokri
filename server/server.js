const express = require("express");
const server = express();

const cors = require("cors");
const cookieParser = require("cookie-parser");

const connectDb = require("./utils/db");
const router = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const jobApplicationRouter = require("./router/job_application-router");



server.use(
  cors({
    origin: "https://tech-nokri-frontend.onrender.com", // Frontend ka deployed URL
    credentials: true, // Cookies allow karna
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed methods
    allowedHeaders: ["Content-Type", "Authorization"], // Custom headers agar use ho rahe ho
  })
);


const PORT = 5012;

server.use(express.json());

server.use("/", router);
server.use("/contactForm", contactRoute);
server.use("/", jobApplicationRouter);

connectDb().then(() => {
  server.listen(PORT, () => {
    console.log(`server started at PORT : ${PORT}`);
  });
});
