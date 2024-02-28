class FastFood{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    venta(){
        return  `Total Sale: ${this.price} Usd`
    }
}

class Burger extends FastFood{  
     constructor(name, price, type){
         super(name, price);
         this.type = type;
     }
     sale(){
        return  `Product: ${this.name}, Type: ${this.type}
        Price: ${super.venta()}`
    }
}

class Pizza extends FastFood{
    constructor(name, price, flavor){
        super(name, price);
        this.flavor = flavor;
    }
    sale(){
        return  `Product: ${this.name}, Flavor: ${this.flavor}, 
                 Price: ${super.venta()}`
    }
}
class Hotdog extends FastFood{
    constructor(name, price, size){
        super(name, price);
        this.size = size;
    }
    sale(){
        return  `Product: ${this.name}, Size: ${this.size}, 
                 Price: ${super.venta()}`
    }
}

alert("***Welcome to your fat food service****")
alert("Select you favorite from our fat boys menu:")

do{
    alert ("1. Burger, 2. Hot Dog  3. Pizza" ) 
    let option = prompt("Select your favorite:")
    switch(option){
        case "1":
            alert("Burger type: 1. Meet, 2. Chicken")
            let type = null;
                select = prompt("Select yours: ")
                if (select == 1){
                   type = "meet"   
                }else if (select == 2){
                    type = "Chicken"
                }else{
                    alert("Invalid option")
                }
                let burger1 = new Burger("WildBurger", 5, type)
                alert(burger1.sale());
            break;

        case "2":
            alert("Hot Dog Size:  1.Big, 2.Extra Big")
            let size = null;
                select = prompt("Select yours: ")
                if (select == 1){
                   size = "Big"   
                }else if (select == 2){
                    size = "Exta Big"
                }else{
                    alert("Invalid option")
                }
                let hotdog1 = new Hotdog("Dogggooo", 3, size)
                alert(hotdog1.sale());
            break;

        case "3":
            alert("Pizza flavors: 1. Peperonni, 2. Napolitan")
            let flavor = null;
            select = prompt("Select yours: ")
            if (select == 1){
               flavor = "Peperonni"   
            }else if (select == 2){
                flavor = "Napolitan"
            }else{
                alert("Invalid option")
            }
            let pizza1 = new Pizza("ItalPizza", 6, flavor)
            alert(pizza1.sale());
            break;
        default:
            alert("Invalid option")
            break;
        }
}while (option != "1" || option != "2" || option != "3")