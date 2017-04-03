var app = document.getElementById("app");

var template = {
  get: function (container, path) {
    superagent
      .get(path)
      .end(function (err, res) {
        if (err) {
          console.log(err);
        }
        app.innerHTML = res.text;
      });
  }
};

page("/", function () {
  template.get(app, "../templates/home.html");
});

page("/login", function () {
  template.get(app, "../templates/login.html");
});

page({
  hashbang: true
});
