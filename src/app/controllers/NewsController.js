class NewController {
  //  [GET] news
  index(req, res) {
    res.render("news");
  }

  //  [GET] news/:slug
  show(req, res) {
    res.send("news -> show");
  }
}

module.exports = new NewController();
