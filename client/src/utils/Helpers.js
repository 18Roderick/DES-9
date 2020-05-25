export const utils ={
  truncateText: function truncateText(text, length = 10) {
    this.text = text;
    if (text.length > length) return `${text.slice(0, length)}`;
    return text;
  }
}