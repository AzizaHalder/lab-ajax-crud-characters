const charactersAPI = new APIHandler("http://localhost:8000");

window.addEventListener("load", () => {
  document
    .getElementById("fetch-all")
    .addEventListener("click", function (event) {
      axios.get(`http://localhost:8000/characters`).then((response) => {});
    });

  document
    .getElementById("fetch-one")
    .addEventListener("click", function (event) {
      const characterID = document.getElementById("search-by-id").value;

      axios
        .get(`http://localhost:8000/characters/${characterID}`)
        .then((response) => {
          const characterDetail = response.data;
          console.log(characterDetail);
          document.getElementById("name").innerText = characterDetail.name;
          document.getElementById("occupation").innerText =
            characterDetail.occupation;
          document.getElementById("cartoon").innerText =
            characterDetail.cartoon;
          document.getElementById("weapon").innerText = characterDetail.weapon;
        })
        .catch((error) => {
          console.log("An error occurred when fetching the character", error);
        });
    });

  document
    .getElementById("delete-one")
    .addEventListener("click", function (event) {});

  document
    .getElementById("edit-character-form")
    .addEventListener("submit", function (event) {});

  document
    .getElementById("new-character-form")
    .addEventListener("submit", function (event) {});
});
