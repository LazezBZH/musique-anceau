//objet créé par MediaFactory si le type est annex

class Annex {
  constructor(data) {
    this.levelId = data.levelId;
    this.sequenceId = data.sequenceId;
    this.file = data.file;
  }
  render() {
    let html = "";
    this.file.forEach((file) => {
      let url = file.type == "pdf" ? `./contents/pdf/${file.url}` : file.url;
      html += `<a href='${url}' class="${file.type}" target='_blank' > ${file.name} </a>`;
    });

    return `
  <article class="annex">${html}</article>
    `;
  }
}
