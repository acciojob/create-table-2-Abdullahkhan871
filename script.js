function createTable() {
  //Write your code here

  let table = document.querySelector("#myTable");
  let tbody = document.createElement("tbody");
  let rn = prompt("Input number of rows");
  let cn = prompt("Input number of columns");

  for (let index = 0; index < rn; index++) {
    let row = tbody.insertRow();
    for (let j = 0; j < cn; j++) {
      let td = row.insertCell();
      td.innerHTML = `Row-${index} Column-${j}`;
    }
  }
  table.append(tbody);
}
