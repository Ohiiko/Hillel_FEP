"use strict";

const table = document.getElementById('table');

let rowsTabl = prompt('Сколько строк будет в таблице?', 3);
let colsTabl = prompt('Сколько столбцов будет в таблице?', 3);

  for (let i=0; i<rowsTabl; i++){
    let row = document.createElement('tr');
    creatCols(row, i+1)
    table.appendChild(row);
  }

function creatCols(row, numberRow){
  for (let i=0; i<colsTabl; i++){
    let col = document.createElement('td');
    col.innerHTML = ('row №' + (numberRow) + '/' + 'col №' + (i+1))
    row.appendChild(col);
  }
}
  







