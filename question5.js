// 5. Responsive Posts (3p)
// Ladda ner posts från denna url: https://jsonplaceholder.typicode.com/posts
// För varje post ska title och body placeras under varandra.
// I desktop-vy ska posts visas i 3 kolumner.
// I mobil-vy ska posts visas i en kolumn med 100% width.

async function getPost() {
  const response = await fetch(" https://jsonplaceholder.typicode.com/posts");
  const dataPost = await response.json();

  dataPost.forEach((post) => {
    const titleEL = document.createElement("h3");
    const bodyEl = document.createElement("div");

    titleEL.setAttribute.add("class");
    bodyEl.setAttribute.add("class");

    titleEL.innerHTML = `<h3>${post.title}</h3>`;
    bodyEl.innerHTML = `<div><${post.body}</div>`;

    titleEl.className.add = "title";
    bodyEl.className.add = "bodyText";

    document.body.appendChild(bodyEl);
    document.body.appendChild(titleEl);
  });
  getPost();
}
