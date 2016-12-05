var names = ['Nikita', 'sasha', 'Ilya'];

// names.forEach(function (name) {
//     console.log('forEach', name);
// });

// names.forEach(name => console.log('arrowFunc',name));


// var returnMe = (name) => name + '!';

// console.log(returnMe('Nikita'));


// var person = {
//     name: 'Nikita',
//     greet: function (){
//         names.forEach((name)=>{
//             console.log(this.name + 'says hi to', name)
//         });
//     }
// }

// person.greet();

//Chalange

function add(a, b) {
    return a + b;
}

var addStatement = (a, b) => {return a + b;}
console.log(addStatement(1, 2))

console.log(add(1, 3));

console.log(add(9, 0));
