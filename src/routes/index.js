const { Hono } = require("hono");
const { html } = require("hono/html");
const layout = require("../layout");

const app = new Hono();

app.get("/", (c) => {
  const session = c.get("session");
  return c.html(
    layout(
      "Home",
      html`
        <h1>Hello, Hono!</h1>
        ${session.user
          ? html`
              <p>Hello, ${session.user.name}!</p>
              <p>
                <a href="/logout">Logout</a>
              </p>
            `
          : html`
              <p>
                <a href="/login">Login</a>
              </p>
            `}
      `,
    ),
  );
});

module.exports = app;
