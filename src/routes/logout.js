const { Hono } = require("hono");

const app = new Hono();

app.get("/", (c) => {
  const session = c.get("session");
  session?.destroy();
  return c.redirect("/");
});

module.exports = app;
