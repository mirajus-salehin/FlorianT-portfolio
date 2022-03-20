async function fetchDataFromApi() {
    const response = await fetch("/blogs/fetchBlog")
        .then(response => response.json())
        .then(data => data.response.results);

    document.querySelector(".article-list").innerHTML = response.map(
        article => `
          <div
            class="col-sm-6 col-md-4 d-xl-flex flex-column justify-content-xl-start align-items-xl-start item"
            style="padding-bottom: 50px"
          >
            <a href="#"><img class="img-fluid" src="${article.properties.Image.files[0].external.url}" /></a>
            <h3
              class="name"
              style="
                font-family: Montserrat, sans-serif;
                font-weight: bold;
                text-align: left;
              "
            >
              ${article.properties.Name.title[0].plain_text}
            </h3>
            <p
              class="description"
              style="font-family: Cardo, serif; text-align: left"
            >
              ${article.properties.subtitle.rich_text[0].text.content}
            </p>
            <button class="btn btn-primary" type="button" onclick="window.open('/pages/article.html?page_id=${article.id}')">Read More</button>
          </div>
          `
    ).join("");
}
fetchDataFromApi();