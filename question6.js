// 6. Hämta och visa foton. (3p)
// Ladda ner foton med fetch från denna url: https://jsonplaceholder.typicode.com/photos
// Visa dom första 10 fotona på sidan.
// När man klickar på ett foto ska dess titel visas i en popup med `alert`

async function getPhotos() {
  const response = await fetch(" https://jsonplaceholder.typicode.com/photos");
  const dataPhotos = await response.json();
  dataPhotos.forEach((photo) => {
    const photoDiv = document.createElement("div");
    section.classList.add("photo");

    const title = document.createElement("div");
    title.classList.add("title");
    title.textContent = photo.title;

    photoDiv.appendChild(title);
    title.addEventListener("click");

    const seeTitle = promt("title");
    alert(`${photo.title}`);
  });
}

function toggle(e) {
  const title = e.target;
  photoDiv.classList.toggle("active");
}
