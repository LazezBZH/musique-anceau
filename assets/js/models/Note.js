//objet créé par MediaFactory si le type est note

class Note {
  constructor(data) {
    this.levelId = data.levelId;
    this.sequenceId = data.sequenceId;
    this.comment = data.comment;
  }
  render() {
    return `
  <p>${this.comment}</p>
    `;
  }
}
