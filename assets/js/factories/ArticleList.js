//ensemble des articles d'une session

class ArticleList {
  constructor() {
    this.all = [];
  }
  add(article) {
    this.all = this.all.sort((a, b) => {
      return a.activityId - b.activityId;
    });
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
