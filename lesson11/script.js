"use strict";

function Student(name, marks){
  this.name = name;
  this.marks = marks;
}

Student.prototype.averageMark = function(){
  return  this.marks.reduce((sum, current) => sum + current) / this.marks.length;
}
 
const students = [ 
  new Student('Student 1', [10,9,8,0,10]), // имя, оценки
  new Student('Student 12', [10,0,8,0,3,4])
];

function averageMark(arr){
  return arr.reduce((sum, current) => sum + current.averageMark(),0)/arr.length;
}
