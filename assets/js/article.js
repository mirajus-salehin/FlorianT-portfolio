const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
async function fetchArticle() {
    const res = await fetch("https://floriantanner.netlify.app/api/fetchArticle?page_id=" + urlParams.get('page_id'))
        .then(res => res.json())
        .then(data => data.response);
    var dateString = res.created_time;
    var date = moment(dateString).format('MMMM Do YYYY');
    document.querySelector(".article-clean").innerHTML = `
    <div class="container">
        <div class="row">
          <div class="col-lg-10 col-xl-8 offset-lg-1 offset-xl-2">
            <!-- Start: Intro -->
            <div class="intro">
              <h1
                class="text-center"
                style="font-family: Montserrat, sans-serif"
              >
                ${res.properties.Name.title[0].plain_text}
              </h1>
              <!-- Start: Date -->
              <p class="text-center" style="font-family: Cardo, serif">
                <span class="author">${res.properties.author.rich_text[0].plain_text}</span>
                <span class="date">Published on ${date}</span>
              </p>
              <!-- End: Date and Author --><img
                class="img-fluid"
                src="/assets/img/Group 11.png"
                style="text-align: center"
              />
            </div>
            <!-- End: Intro -->
            <!-- Start: Text -->
            <div class="text">
              <p style="font-family: Cardo, serif">
                ${res.properties.Content.rich_text[0].text.content}
              </p>
            </div>
            <!-- End: Text -->
          </div>
        </div>
      </div>
    `

}

fetchArticle();