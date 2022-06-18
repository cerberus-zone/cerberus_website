module.exports = {
  title: "Cerberus",
  // description: "The first-ever three headed dog meme-coin in the Cosmos network",
  head: [["link", { rel: "icon", href: "/website_logo.png" }]],
  themeConfig: {
    nav: [
      { text: "Website", link: "https://cerberus.zone" },
      { text: "FAQ", link: "/index/" },
      {
        text: "Validators",
        items: [{ text: "Running a validator", link: "/running-a-validator/" }],
      },

      {
        text: "How-To Guides",
        items: [{ text: "How to Re-add Cerberus to Keplr", link: "/keplr/" }],
      },
    ],
  },
};
