const url = "https://jsonplaceholder.typicode.com/posts";

const template = (item) => `
  <div class="posts">
    <h2 class="posts-title">${item.title}</h2>
    <p class="posts-text">${item.body}</p>
    <p class="author">Author: <strong><span class="author-name" data-id="${item.userId}"></span></strong></p>
  </div>  
`;

const xhrPromise = (method, url) => {
  const promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.send();

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response);
      } else {
        resolve(xhr.response);
      }
    };

    xhr.onerror = () => {
      reject("Something went wrong!");
    };
  });

  return promise;
};

xhrPromise("GET", url)
	.then((response) => {
		const posts = JSON.parse(response);
		let result = "";
		posts.forEach((item) => {
			result += template(item);
		});
		document.getElementById("blog").innerHTML = result;
	})

	.then(() => {
		const users = document.querySelectorAll(".author-name");
		users.forEach((user) => {
			xhrPromise(
				"GET",
				`https://jsonplaceholder.typicode.com/users/${user.dataset.id}`
			).then((response) => {
				let userName = JSON.parse(response);
				console.log(userName.name);
				user.textContent = userName.name;
			});
		});
	});
