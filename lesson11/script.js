"use strict";


function Student(name, ball){
  this.name = name;
  this.ball = ball;
}

const methodAverage = {averageMark: function(){
  return  this.ball.reduce((sum, current) => sum + current) / this.ball.length;
  }
};

Student.prototype = methodAverage;
    
const students = [ 
  new Student('Student 1', [10,9,8,0,10]), // имя, оценки
  new Student('Student 12', [10,0,8,0,3,4])
];

function averageMark(value){
  return allBall(value)/value.length;
}

function allBall(value){
  let totalScore = null;
  for (let i=0; i<value.length; i++){
  totalScore += value[i].averageMark();
  }
  return totalScore;
}
