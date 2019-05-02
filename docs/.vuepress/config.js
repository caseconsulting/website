module.exports = {
  title: "Case Consulting Blog",
  description: "Just playing around",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Case Cares", link: "/case-cares/" }
    ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@images": "/public/"
      }
    }
  }
};
