//objet créé par MediaFactory si le type est note

class Note {
  constructor(data) {
    this.levelId = data.levelId;
    this.sequenceId = data.sequenceId;
    this.sessionId = data.sessionId;
    this.activityId = data.activityId;
    this.comment = data.comment;
  }
  render() {
    return `
  <p>${this.comment}</p>
    `;
  }
}
