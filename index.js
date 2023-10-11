const express = require('express');
const app = express();
const port = 3000;

// require routes   
const messagesRouter = require('./routes/api/v1/messages');


// json body-parser (op alles)
app.use(express.json());
app.use("/api/v1/messages", messagesRouter); // gebruik de messagesRouter op de /api/v1/messages route - nu plug je de router in de app

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});