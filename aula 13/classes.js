class Product{
    constructor(name,price){
        this.name= name;
        this.price=price;
    }
    displayProduct(){
        console.log(`Product ${this.name}`);
        console.log(`Product/${this.price.toFixed(2)}`);
    }
    
    calculateAll(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;

const product1 = new Product (Cell, 1200);

console.log(product1);