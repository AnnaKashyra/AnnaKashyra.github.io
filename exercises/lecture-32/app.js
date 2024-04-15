// Переписати код, використовуючи метод fetch

// const url = "https://jsonplaceholder.typicode.com/posts";

// const template = (item) => `
// <div class="posts">
//   <h2 class="posts-title">${item.title}</h2>
//   <p class="posts-text">${item.body}</p>
//   <p class="author">Author: <strong><span class="author-name" data-id="${item.userId}"></span></strong></p>
// </div>
// `;

// const xhrPromise = (method, url) => {
// 	const promise = new Promise((resolve, reject) => {
// 		const xhr = new XMLHttpRequest();
// 		xhr.open(method, url);
// 		xhr.send();

// 		xhr.onload = () => {
// 			if (xhr.status >= 400) {
// 				reject(xhr.response);
// 			} else {
// 				resolve(xhr.response);
// 			}
// 		};

// 		xhr.onerror = () => {
// 			reject("Something went wrong!");
// 		};
// 	});

// 	return promise;
// };

// console.log(xhrPromise("GET", url));

// xhrPromise("GET", url)
// 	.then((response) => {
// 		const posts = JSON.parse(response);
// 		let result = "";
// 		posts.forEach((item) => {
// 			result += template(item);
// 		});
// 		document.getElementById("blog").innerHTML = result;
// 	})

// 	.then(() => {
// 		const users = document.querySelectorAll(".author-name");
// 		users.forEach((user) => {
// 			xhrPromise(
// 				"GET",
// 				`https://jsonplaceholder.typicode.com/users/${user.dataset.id}`
// 			).then((response) => {
// 				let userName = JSON.parse(response);
// 				console.log(userName.name);
// 				user.textContent = userName.name;
// 			});
// 		});
// 	});


const url = "https://jsonplaceholder.typicode.com/posts";

const template = (item) => `
<div class="posts">
  <h2 class="posts-title">${item.title}</h2>
  <p class="posts-text">${item.body}</p>
  <p class="author">Author: <strong><span class="author-name" data-id="${item.userId}"></span></strong></p>
</div>
`;

const fetchPromise = (url) => {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      return response.json();
    });
};

fetchPromise(url)
  .then((posts) => {
    let result = "";
    posts.forEach((item) => {
      result += template(item);
    });
    document.getElementById("blog").innerHTML = result;
    return posts;
  })
  .then((posts) => {
    const userPromises = posts.map(post =>
      fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Something went wrong!');
          }
          return response.json();
        })
        .then(user => user.name)
    );
    return Promise.all(userPromises);
  })
  .then((userNames) => {
    const authorNames = document.querySelectorAll(".author-name");
    authorNames.forEach((authorName, index) => {
      authorName.textContent = userNames[index];
    });
  })

