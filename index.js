// HINTS:
// 1. Import express and axios
import express from "express";
import axios from "axios";
// 2. Create an express app and set the port number.
const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

app.use(express.static("public"));
// 3. Use the public folder for static files.

// 4. When the user goes to the home page it should render the index.ejs file.


app.get("/", async (req , res) => {
try{
    const response = await axios.get("https://secrets-api.appbrewery.com/random");
    const result = response.data;
    res.render("index.ejs" , {data:result });
}
catch(error) {
    console.error("failed to make request:" , error.message);
    res.render("index.ejs", {
        error: error.message,
    });
}
});
// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.
app.listen(port, () => {
    console.log(`server running on port: ${port}`);
});
// 6. Listen on your predefined port and start the server.
