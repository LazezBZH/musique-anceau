//objet créé par MediaFactory si le type est project

class Project {
  constructor(data) {
    this.levelId = data.levelId;
    this.sequenceId = data.sequenceId;
    this.file = data.file;
    this.score = data.score;
    this.comment = data.comment;
  }
  render() {
    let comments = "";
    this.comment.forEach((comm) => {
      comments += `<p>${comm}</p>`;
    });
    return `
    <article class="project">
  <h3>projet musical</h3>
  <div class="row">
   <a href='${this.file.url}' class="yt" target='_blank' > ${this.file.name} </a>
   
   <a href='./contents/pdf/${this.score}' class="pdf" target='_blank' > partition  </a>
   </div>
   <div>
   ${comments}
   </div>
   </article>
    `;
  }
}
