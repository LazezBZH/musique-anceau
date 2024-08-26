//ensemble des médias de la page d'un photographe

class ArticleList {
  constructor() {
    this.all = [];
  }
  add(article) {
    this.all.push(article);
  }

  build() {
    this.display(this.all);
  }

  display(articles) {
    let html = "";

    articles.forEach((article) => {
      html += article.render();
    });
    document.querySelector("#display-sheet").innerHTML = html;
  }
}
