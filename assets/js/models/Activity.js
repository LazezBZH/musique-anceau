//objet créé par MediaFactory si le type est activity

class Activity {
  constructor(data) {
    this.levelId = data.levelId;
    this.sequenceId = data.sequenceId;
    this.sessionId = data.sessionId;
    this.activityId = data.activityId;
    this.file = data.file;
    this.comment = data.comment;
  }
  render() {
    let html = "";
    if (this.file != null) {
      this.file.forEach((file) => {
        html += `<a href='${file.url}' class="${file.type}" target='_blank' > ${file.name} </a>`;
      });
    }
    return `
  <h3>Activité</h3>
  <p>${this.comment}</p>
  ${html}
    `;
  }
}
