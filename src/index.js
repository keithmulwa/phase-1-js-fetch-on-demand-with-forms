const init = () => {
  const inputForm = document.querySelector("form");

  inputForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const input = document.querySelector("input#searchByID");
    const movieId = input.value;

    fetch(`http://localhost:3000/movies/${movieId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Movie not found");
        }
        return response.json();
      })
      .then((data) => {
        const title = document.querySelector("#movieDetails h4");
        const summary = document.querySelector("#movieDetails p");

        title.innerText = data.title;
        summary.innerText = data.summary;

        input.value = ""; // Clear the input field
      })
      .catch((error) => {
        const title = document.querySelector("#movieDetails h4");
        const summary = document.querySelector("#movieDetails p");

        title.innerText = "Not Found";
        summary.innerText = "Please enter a valid movie ID.";
        console.error("Error fetching movie:", error);
      });
  });
};

document.addEventListener("DOMContentLoaded", init);
