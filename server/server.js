const express = require("express");
const server = express();

const cors = require("cors");
const connectDb = require("./utils/db");
const router = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const jobApplicationRouter = require("./router/job_application-router");

server.use(cors({
  origin: 'https://tech-nokri-frontend.onrender.com', // Apne frontend ka URL specify karein
  credentials: true // Agar cookies ya authentication tokens bhi share karne hain toh
}));

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
