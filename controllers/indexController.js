const dayjs = require("dayjs");
const stringToColor = require("../utils/stringToColor");

const messages = [
  {
    text: "Hi there!",
    user: "Rohit",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Nilisha",
    added: new Date(),
  },
  {
    text: "How are you?",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Good morning!",
    user: "Sophie",
    added: new Date(),
  },
  {
    text: "Hi there!",
    user: "Rohit",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Nilisha",
    added: new Date(),
  },
  {
    text: "How are you?",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Good morning!",
    user: "Sophie",
    added: new Date(),
  },
];

const renderHomePage = (req, res) => {
  const formattedMessages = messages.map((msg) => ({
    ...msg,
    added: dayjs(msg.added).format("MMM D, h:mm A"),
  }));
  return res.render("index", {
    messages: formattedMessages,
    stringToColor: stringToColor,
  });
};

const renderForm = (req, res) => {
  return res.render("form");
};

const createMessage = (req, res) => {
  const { username, message } = req.body;
  messages.push({ user: username, text: message, added: new Date() });
  res.redirect("/");
};

module.exports = { renderHomePage, renderForm, createMessage };
