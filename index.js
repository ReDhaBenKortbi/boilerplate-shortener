import dotenv from "dotenv"
import express from 'express';
import cors from 'cors';
import { validateURL } from "./middlewares/validateURL.js";
import { shortURL } from "./handlers/shortURL.js";
import { redirectURL } from "./handlers/redirectURL.js";
const app = express();
dotenv.config();
// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});


//create shorten link
app.post("/api/shorturl", validateURL, shortURL)
//redirect to shorten link
app.get("/api/shorturl/:short_url", redirectURL)