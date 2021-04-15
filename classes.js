class Product {
  constructor(productName) {
    this.name = productName
  }
  display() {
    console.log(`For sale: ${this.name}`)
  }
}

class Item extends Product {
  constructor(productName, sku, style) {
    super(productName)
    this.sku = sku
    this.style = style
  }
}
