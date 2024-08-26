class ArticleFactory {
  build(data) {
    if (data.type == "activity") {
      return new Activity(data);
    } else if (data.type == "annex") {
      return new Annex(data);
    } else if (data.type == "corpus") {
      return new Corpus(data);
    } else if (data.type == "note") {
      return new Note(data);
    } else if (data.type == "opus") {
      return new Opus(data);
    } else if (data.type == "project") {
      return new Project(data);
    } else if (data.type == "vocable") {
      return new Vocable(data);
    } else {
      throw "Unknown type format";
    }
  }
}
