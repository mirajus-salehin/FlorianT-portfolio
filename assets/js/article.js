const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
console.log(urlParams.get('page_id'));