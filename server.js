const express = require("express");

const app = express();
const port = process.env.PORT || 8080;
const path = process.cwd();

app.use(express.static(`${path}/app/public`));
app.use("/jquery", express.static(`${__dirname}/node_modules/jquery/dist/`));
app.use(
  "/bootstrap",
  express.static(`${__dirname}/node_modules/bootstrap/dist/`)
);

// Root Route
app.get("/", (req, res) => res.sendFile(`${path}/public/index.html`));

// Page Not Found Route
app.get("*", (req, res) => res.sendFile(`${path}/app/public/notfound.html`));

app.listen(port, () => console.log(`Node.js listening on port ${port}...`));

/*
no-var rules: all var keywords changed to const keyword
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
prefer-template: using string template feature from ES2015
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
func-name + prefer-arrow-callback: always name your functions and use arrow functions when writing
  callback functions
  https://stackoverflow.com/questions/22939130/when-should-i-use-arrow-functions-in-ecmascript-6
no-console: We can leave console statements for a while. When we are going to production, we need to
  figure out logging into a file placed in the server.
*/
