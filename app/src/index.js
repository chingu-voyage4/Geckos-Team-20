// Load settings
const { app, port } = require("./config");

// Start server
app.listen(port, () => console.log(`Node.js listening on port ${port}...`));
