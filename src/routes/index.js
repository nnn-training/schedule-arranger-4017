const { Hono } = require("hono");
const { html } = require("hono/html");
const layout = require("../layout");

const app = new Hono();

app.get("/", (c) => {
  return c.html(
    layout(
      c,
      "Home",
      html`
        <h1>Hello, Hono!</h1>
      `,
    ),
  );
});

module.exports = app;
