require("dotenv").config();
const express = require("express");
const app = express();
const port = 6000;

const githubData = {
  login: "TusharNegi6986",
  id: 141410019,
  node_id: "U_kgDOCG2-4w",
  avatar_url: "https://avatars.githubusercontent.com/u/141410019?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/TusharNegi6986",
  html_url: "https://github.com/TusharNegi6986",
  followers_url: "https://api.github.com/users/TusharNegi6986/followers",
  following_url:
    "https://api.github.com/users/TusharNegi6986/following{/other_user}",
  gists_url: "https://api.github.com/users/TusharNegi6986/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/TusharNegi6986/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/TusharNegi6986/subscriptions",
  organizations_url: "https://api.github.com/users/TusharNegi6986/orgs",
  repos_url: "https://api.github.com/users/TusharNegi6986/repos",
  events_url: "https://api.github.com/users/TusharNegi6986/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/TusharNegi6986/received_events",
  type: "User",
  user_view_type: "public",
  site_admin: false,
  name: "TUSHAR NEGI",
  company: null,
  blog: "",
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 22,
  public_gists: 0,
  followers: 0,
  following: 5,
  created_at: "2023-08-04T09:55:06Z",
  updated_at: "2025-11-09T10:45:29Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("tusharnegi5465");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login at instagram</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>use everyday youtube</h2>");
});

app.get('/github',(req,res)=>{
    res.json(githubData)
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
