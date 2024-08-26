//objet créé par MediaFactory si le type est vocable

class Vocable {
  constructor(data) {
    this.levelId = data.levelId;
    this.sequenceId = data.sequenceId;
    this.comment = data.comment;
  }
  render() {
    let comments = this.comment.join(", ");
    return `
    <article class="vocable">
  <div class="fieldset"><h3 class="legend"><span class="field-left"></span><span class="field-center">Notions & vocabulaire</span><span class="field-right"></span></h3>
 <p class="fieldset-content">${comments}</p>
 </div>
 </article>
    `;
  }
}
