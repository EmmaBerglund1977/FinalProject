// API key: yy4GMy82PIQTTnCdF62v60K7W9ZmnFTQ
// SEARCH  https://developers.giphy.com/docs/api/endpoint/#search
// https://developers.giphy.com/explorer/

// RESET
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

const refreshPage = () => {
  window.location.reload();
  searchInput.value = "";
};

// onsubmit triggers on button press and when using the enter key
searchForm.onsubmit = event => {
  event.preventDefault(); // för att inte formet ska ladda om sidan, det är standard behaviour

  let searchValue = searchInput.value;
  console.log("searchValue", searchValue);
  handleSearch(searchValue);
};

const handleSearch = searchValue => {
  console.log("Will call the api with:", searchValue);
  searchResponses.innerHTML = "";

  let SearchApiMobile = `https://api.giphy.com/v1/gifs/search?api_key=yy4GMy82PIQTTnCdF62v60K7W9ZmnFTQ&q=${searchValue}&limit=12&offset=0&rating=G&lang=en`;
  let SearchApi = `https://api.giphy.com/v1/gifs/search?api_key=yy4GMy82PIQTTnCdF62v60K7W9ZmnFTQ&q=${searchValue}&limit=96&offset=0&rating=G&lang=en`;

  fetch(SearchApiMobile)
    .then(response => response.json())
    .then(json => {
      console.log("json", json);
      // loopa igenom arrayen och skapa en img tag för varje bild
      json.data.forEach(item => {
        searchResponsesMobile.innerHTML += `<img src=${item.images.fixed_width.url} />`;
      });
    });
  fetch(SearchApi)
    .then(response => response.json())
    .then(json => {
      console.log("json", json);
      // loopa igenom arrayen och skapa en img tag för varje bild
      json.data.forEach(item => {
        searchResponses.innerHTML += `<img src=${item.images.fixed_width.url} />`;
      });
    });
};
