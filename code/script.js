
// RESET 
const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

const refreshPage = () => {
  window.location.reload();
  searchInput.value = "";
};

// onsubmit triggers on button press and when using the enter key

searchForm.onsubmit = event => {
  event.preventDefault();
  
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
      // loop the array snd create img tags
      json.data.forEach(item => {
        searchResponsesMobile.innerHTML += `<img src=${item.images.fixed_width.url} />`;
      });
    });
  fetch(SearchApi)
    .then(response => response.json())
    .then(json => {
      console.log("json", json);
        // loop the array snd create img tags
      json.data.forEach(item => {
        searchResponses.innerHTML += `<img src=${item.images.fixed_width.url} />`;
      });
    });
};
