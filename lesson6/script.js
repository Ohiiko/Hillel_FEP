"use strict";

const obj = {name: 'Alex',
             age: 33,
             adress:
               { country: 'UA',
               city: 'Dnipro'}
}


let objClone = {};

function copy(obj) {
		for (let key in obj) {
			objClone[key] = obj[key];
		  }
return objClone;
}

const objCopy = copy(obj);

console.log(obj);
console.log(objCopy);








