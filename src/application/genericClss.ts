class DataStorage<T> {
  private data: Array<T> = [];

  addItem(item: T) {
    return this.data.push(item);
  }
  removeItem(item: T) {
    return this.data.splice(this.data.indexOf(item), 0);
  }

  getItems() {
    return this.data;
  }
}

const StringStorage = new DataStorage<string>() //Generic datatype will be of type strings