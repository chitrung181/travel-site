var $ = require('jquery');
//var Person = require('./modules/Person');
import Person from './modules/Person';
// alert("ABC rew");
class Adult extends Person {
    payTaxes() {
        console.log(this.name + ' now owes xxx$ in taxes. ');
    }
}

var john = new Person("John Doe", "blue");
john.greet();

var cat = new Adult("Cat McKitty", "black");
cat.greet();
cat.payTaxes();

$('h1').remove();
