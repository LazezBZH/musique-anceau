//objet créé par MediaFactory si le type est opus

class Opus {
  constructor(data) {
    this.levelId = data.levelId;
    this.sequenceId = data.sequenceId;
    this.sessionId = data.sessionId;
    this.activityId = data.activityId;
    this.file = data.file;
    this.comment = data.comment;
  }
  render() {
    let comments = "";
    this.comment.forEach((comm) => {
      comments += `<p>${comm}</p>`;
    });
    return `
    <article class="opus">
   <h3>Audition</h3>
   <div class="row">
    <a href='${this.file.url}' class="yt" target='_blank' > ${this.file.name} </a>
    </div>
    <div>${comments}</div>
    </article>
    `;
  }
}
