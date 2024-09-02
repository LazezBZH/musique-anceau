//objet créé par MediaFactory si le type est corpus

class Corpus {
  constructor(data) {
    this.levelId = data.levelId;
    this.sequenceId = data.sequenceId;
    this.sessionId = data.sessionId;
    this.activityId = data.activityId;
    this.file = data.file;
    this.comment = data.comment;
  }
  render() {
    let urls = "";
    this.file.forEach((file) => {
      urls += `<a href='${file.url}' class="${file.type}" target='_blank' > ${file.name} </a>`;
    });
    let comments = "";
    this.comment.forEach((comm) => {
      comments += `<p>${comm}</p>`;
    });

    return `
    <h3>Auditions comparées</h3>
    ${urls}
    ${comments}
    `;
  }
}
