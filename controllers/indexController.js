const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

const renderHomePage = (req, res) => {
  return res.render("index", { messages: messages });
};

module.exports = { renderHomePage };
