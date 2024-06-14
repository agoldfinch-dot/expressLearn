import express from "express";
import cors from "./middleware/cors.js";
import router from "./routes/router.js";

const PORT = process.env.PORT ?? 3000;
const app = express();

app.set('view engine', "ejs")
app.use(express.json())
app.use(express.urlencoded({"extended": false}))
app.use(cors)
app.use(router)

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));