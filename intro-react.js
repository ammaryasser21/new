////////////////
//es6
//module:single file
import { price } from './variabelemodule';
import ammar from './Validationmodule'
//or
import * as obj from './variabelemodule'
ammar();
console.log(price);
console.log(obj.username);
/////////////////////
//distract syntax
let user = {
    nameus: 'ahmed',
    age: 30,
    friend: {
        phone: '01029451993'
    }
}
let { nameus } = user;
let { phone } = user.friend;
////////////////
let colores = ['red', 'green', 'blue'];
let [x, , z] = colores; //print red and blue
//map,filter,reduce
//map
let pricenum = [100, 200, 300, 400, 500, 600];
let newPrice = pricenum.map((priceone) => 'price is' + priceone);
console.log(newPrice);
//filter
let newArray = newPrice.filter((priceone /*,index,array*/ ) => { return priceone > 200 })
    //reduce

let total = newPrice.reduce((tmp, priceone) => { return tmp + priceone });