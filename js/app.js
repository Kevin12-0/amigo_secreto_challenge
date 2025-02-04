/* se declara el array */
let users = [];

/* funcion de agregar usuario */
function agregarUsuario() {
  let name = document.getElementById("name").value;
  /* console.log(name); */
  if (name === "") {
    alert(`Campo vacio, inserta algo`);
  } else {
    users.push(name);
    let lista = document.getElementById("Lista");
    let newElemet = document.createElement("p");
    newElemet.textContent = name;
    lista.appendChild(newElemet);

    console.log(users);
  }
  /* console.log(users); */
}

/* funcion de sorteo */

function sorteo() {
  let lista = document.getElementById("Lista");
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }
  let nameRandom = Math.floor(Math.random() * users.length);
  console.log(users[nameRandom]);
  let nameSorted = document.createElement("p");
  nameSorted.textContent = users[nameRandom];
  lista.appendChild(nameSorted);
}
