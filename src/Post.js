export class Post {
  constructor(title) {
    this.title = title;
    this.date = new Date();
  }

  toString() {
    return JSON.stringify({
      title: this.title,
      date: this.date,
    });
  }

  get upcaseTitle() {
    return this.title.toUpperCase();
  }
}
