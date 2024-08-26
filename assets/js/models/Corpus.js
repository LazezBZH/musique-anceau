//objet créé par MediaFactory si le type est corpus

class Corpus {
  constructor(data) {
    this.levelId = data.levelId;
    this.sequenceId = data.sequenceId;
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
    <h2>Auditions comparées</h2>
    ${urls}
    ${comments}
    `;
  }
}
