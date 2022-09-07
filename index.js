// formulario

// document.addEventListener("DOMContentLoaded", function(e) {

//   var data = document.getElementById('data');
//   data.onsubmit = function(e) {
//     e.preventDefault();
//     var formData = new FormData(this);
//     var jsonData = {};
//     for (var [k, v] of formData) {
//       jsonData[k] = v;
//     }
//     console.log(jsonData);
//   }

// document.addEventListener("DOMContentLoaded", function(e) {

//   var miForm = document.getElementById('miForm');
//   miForm.onsubmit = function(e) {
//     e.preventDefault();
//     var formData = new FormData(this);
//     var jsonData = {};
//     for (var [k, v] of formData) {
//       jsonData[k] = v;
//     }
//     console.log(jsonData);
//   }

// });

// });




// const API_URL = "https://jsonplaceholder.typicode.com";

// const xhr = new XMLHttpRequest();

// function onRequestHandle() {
//     if (this.readyState === 4 && this.status === 200) {
//         // 0 = UNSET, no se ha llamado al metodo open
//         // 1 = OPENED, se ha llamado al metodo open
//         // 2 = HEADERS_RECEIVED, se esta llamando al metodo send()
//         // 3 = LOADING, esta cargando, es decir, esta recibiendo la respuesta
//         // 4 = DONE, se ha completado la operacion
//         // console.log(this.response);
//         const data = JSON.parse(this.response);
//         console.log(data);
//         const HTMLResponse = document.querySelector('#app');

//         const tpl = data.map(user => `<li>${user.name} ${user.email} </li>`);
//         HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
//     }
// }
// xhr.addEventListener('load', onRequestHandle);
// xhr.open('GET', `${API_URL}/users`);
// xhr.send();

// const HTMLResponse = document.querySelector('#app');
// const ul = document.createElement('ul');
// fetch(`${API_URL}/users`)
//     .then((response) => response.json())
//     .then((users)=>{
//         users.forEach((user) => {
//             let elem = document.createElement('li');
//             elem.appendChild(
//                 document.createTextNode(`${user.name} ${user.email}`)
//             );
//                 ul.appendChild(elem);
//         });
//         HTMLResponse.appendChild(ul);
//         // const tpl = users.map((user) => `<li>${user.name} ${user.email} </li>`);
//         // HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
//     });


//     const express = require('express');
// const app = express();
// const { auth, requiredScopes } = require('express-oauth2-jwt-bearer');

// // Authorization middleware. When used, the Access Token must
// // exist and be verified against the Auth0 JSON Web Key Set.
// const checkJwt = auth({
//   audience: 'YOUR_API_IDENTIFIER',
//   issuerBaseURL: `https://YOUR_DOMAIN/`,
// });

// // This route doesn't need authentication
// app.get('/api/public', function(req, res) {
//   res.json({
//     message: 'Hello from a public endpoint! You don\'t need to be authenticated to see this.'
//   });
// });

// This route needs authentication
// app.get('/api/private', checkJwt, function(req, res) {
//   res.json({
//     message: 'Hello from a private endpoint! You need to be authenticated to see this.'
//   });
// });

// const checkScopes = requiredScopes('read:messages');

// app.get('/api/private-scoped', checkJwt, checkScopes, function(req, res) {
//   res.json({
//     message: 'Hello from a private endpoint! You need to be authenticated and have a scope of read:messages to see this.'
//   });
// });

// app.listen(3000, function() {
//   console.log('Listening on http://localhost:3000');
// });
// const express = require('express');
// const app = express();
// const server = app.listen(5000, function () {
//   console.log(`Listening http://localhost:${server.address().port}`);
// });

// var axios = require("axios").default;

// var options = {
//   method: 'POST',
// //   url: 'https://lisa.rpalumza.com/',
//   url: 'https://lisa.rpalumza.com/galileo/lisa/geninf/consulta_factura',
// //   Host: '140.238.158.16:443',
//   headers: {Authorization: 'Basic Q09OU1VMVEFTOmFsdW16YTIy'},
//   data:{
//     SERIE: "V33",
//     NUMERO: "1375664",
//     RFC: "RIMM760224BW8",
//     CODIGO_CLIENTE: "233648"
//   },
// };

// axios.request(options).then(function (response) {
//   console.log(response.data);
// }).catch(function (error) {
//     console.log("Sin conexion" + error);
// });


const ser = document.getElementById("serie").value;
const num = document.getElementById("factura").value;
const rfc = document.getElementById("rfc").value;
const c_c = document.getElementById("codigo_cliente").value;

console.log(ser);
console.log(num);
console.log(rfc);
console.log(c_c);

var myHeaders = new Headers();
myHeaders.append("Authorization", "Basic Q09OU1VMVEFTOmFsdW16YTIy");
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

var urlencoded = new URLSearchParams();
urlencoded.append("SERIE", ser);
urlencoded.append("NUMERO", num);
urlencoded.append("RFC", rfc);
urlencoded.append("CODIGO_CLIENTE", c_c);

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: urlencoded,
  redirect: 'follow'
};

fetch("https://lisa.rpalumza.com/galileo/lisa/geninf/consulta_factura", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));