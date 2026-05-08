function currentPath() { //функция, которая печатает название текущего пути

  let path = localStorage.getItem('path');

  if (path === "0") {document.getElementById("current-path").textContent = "Path: Chronological";}
  else if (path === "1") {document.getElementById("current-path").textContent = "Path: Not Just Clothing";}
  else if (path === "2") {document.getElementById("current-path").textContent = "Path: Red Carpet";}
}

currentPath();