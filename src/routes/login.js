const { Hono } = require("hono");
const { html } = require("hono/html");
const layout = require("../layout");

const app = new Hono();

app.get("/", (c) => {
  const session = c.get("session");
  return c.html(
    layout(
      "Login",
      html`
        <h1>Login</h1>
        <a href="/auth/github">GitHub でログイン</a>
        ${session.user
          ? html`<p>現在 ${session.user.login} でログイン中</p>`
          : ""}
      `,
    ),
  );
});

module.exports = app;
