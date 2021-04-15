class Product {
  constructor(productName) {
    this.name = productName
  }
  display() {
    return `For sale: ${this.name}`
  }
}
class Item extends Product {
  constructor(productName, sku, style, qty) {
    super(productName)
    this.sku = sku
    this.style = style
    this.qty = qty
  }
  itemDisplay() {
    // For sale: shirt, large black (TKL)
    return this.display() + `,${this.style} (${this.qty})`
  }
  sellSome(qtySold) {
    this.qty -= qtySold // this.qty = this.qty - qtySold
  }
  addSome(qtyAdded) {
    this.qty += qtyAdded
  }
}

let item1 = new Item('shirt', 'TKL', 'large black', 10)
console.log(item1.display())
console.log(item1.itemDisplay())
item1.sellSome(3)
console.log(item1.itemDisplay())
item1.addSome(10)
console.log(item1.itemDisplay())
