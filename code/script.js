// API key: yy4GMy82PIQTTnCdF62v60K7W9ZmnFTQ
//SEARCH  https://developers.giphy.com/docs/api/endpoint/#search
// https://developers.giphy.com/explorer/

// RESET BUTTON

function refreshPage() {
  window.location.reload();
}

// från jenni

const searchForm = document.getElementById("searchForm");
const searchInput = document.getElementById("searchInput");

let api = `https://api.giphy.com/v1/gifs/search?api_key=yy4GMy82PIQTTnCdF62v60K7W9ZmnFTQ&q=${searchInput.value}&limit=5&offset=0&rating=G&lang=en`;

// onsubmit triggers on button press and when using the enter key
searchForm.onsubmit = event => {
  event.preventDefault(); // för att inte formet ska ladda om sidan, det är standard behaviour

  let searchValue = searchInput.value;
  console.log("searchValue", searchValue);
  handleSearch(searchValue);
};

const handleSearch = searchValue => {
  console.log("Will call the api with:", searchValue);

  fetch(api)
    .then(response => {
      return response.json();
    })
    .then(json => {
      search.src = `${json.data[0].images.original.url}`;
    });

  fetch(api)
    .then(response => {
      return response.json();
    })
    .then(json => {
      searchone.src = `${json.data[1].images.original.url}`;
    });

  fetch(api)
    .then(response => {
      return response.json();
    })
    .then(json => {
      searchtwo.src = `${json.data[2].images.original.url}`;
    });

  fetch(api)
    .then(response => {
      return response.json();
    })
    .then(json => {
      searchthree.src = `${json.data[3].images.original.url}`;
    });

  fetch(api)
    .then(response => {
      return response.json();
    })
    .then(json => {
      searchfour.src = `${json.data[4].images.original.url}`;
    });
};
