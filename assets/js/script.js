// const xhr = new XMLHttpRequest();

// //Status codes: 100,200,300,400,500
// xhr.onreadystatechange = function () {
//   if (this.readyState === 4 && this.status === 200) {
//     let request = document.getElementById("request");
//     request.innerHTML = this.response;
//   }
// };

// // Method: GET, POST, PUT, PATCH, DELETE
// xhr.open("GET", "https://jsonplaceholder.typicode.com/todos");
// xhr.send();

// let row = document.querySelector(".row");

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((res) => {
//     res.forEach((data) => {
//       //   let card = document.createElement("div");
//       //   let cardBody = document.createElement("div");
//       //   let h5 = document.createElement("h5");
//       //   let h6 = document.createElement("h6");
//       //   let p = document.createElement("p");
//       //   card.className = "card col-lg-3";
//       //   //   card.style.width = "18rem";
//       //   cardBody.className = "card-body";
//       //   h5.className = "card-title";
//       //   h6.className = "card-subtitle mb-2 text-muted";
//       //   p.className = "card-text";
//       //   h5.innerText = `${data.name}, username: ${data.username}`;
//       //   h6.innerText = data.email;
//       //   p.innerHTML = `${data.address.city}<br> ${data.address.street}`;
//       //   cardBody.append(h5, h6, p);
//       //   card.append(cardBody);
//       //   row.append(card);
//       row.innerHTML += `<div class="card" style="width: 18rem;">
//       <div class="card-body">
//           <h5 class="card-title">${data.name}, username: ${data.username}</h5>
//           <h6 class="card-subtitle mb-2 text-muted">Email: ${data.email}</h6>
//           <p class="card-text">
//             <strong>Adress</strong>
//             City: ${data.address.city}<br>
//             Street: ${data.address.street}
//           </p>
//       </div>
//   </div>`;
//     });
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// let result = fetch("https://jsonplaceholder.typicode.com/users");

// console.log(result);

// let number = Math.random() * 10;

// const promise = new Promise((resolve, reject) => {
//   if (number < 5) {
//     setTimeout(() => {
//       resolve("promise finished");
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       reject("promise failed");
//     }, 2000);
//   }
// });

// promise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const p1 = "hey";

// const p2 = Promise.reject("Hello world");

// const p3 = 9478;

// Promise.all([
//   p1,
//   p2.catch((err) => {
//     console.log(err);
//   }),
//   p3,
// ]).then((promises) => {
//   console.log(promises);
// });

async function fetchPosts() {
  let result = await fetch("https://jsonplaceholder.typicode.com/posts");
  let response = await result.json();
  response.forEach((element) => {
    console.log(element);
  });
}

fetchPosts();
