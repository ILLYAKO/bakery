export class Item {
  constructor(product) {
    this.id = product.id;
    this.title = product.title;
    this.imgUrl = product.imgUrl;
    this.price = product.price;
    this.company = product.company;
    this.info = product.info;
    this.inCart = product.inCart;
    this.count = product.count;
    this.total = product.total;
  }
}
