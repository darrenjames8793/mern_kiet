console.log("...APP Started...");

//https://newsapi.org/v2/everything?q=tesla&from=2024-03-08&sortBy=publishedAt&apiKey=9356d6231e8944c9a06ed60a537fc0f7

function callAPI() {
  fetch(
    "https://newsapi.org/v2/everything?q=tesla&from=2024-03-08&sortBy=publishedAt&apiKey=9356d6231e8944c9a06ed60a537fc0f7"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      renderUI(data);
    });
}

function renderUI(data) {
  
  const root = document.getElementById("root");
  
  //got the articles from data
  const articles = data.articles;


  for (let i = 0; i < articles.length; i++) {

    const ar = articles[i];
    const div = document.createElement("div");
    div.setAttribute("class", "news-card");

    const h3 = document.createElement("h3");
    h3.innerText = ar.title;
    div.appendChild(h3);

    const img = document.createElement("img");
    img.src = ar.urlToImage;
    div.appendChild(img);

    //const a = 

    const p = document.createElement("p");

    root.appendChild(div);
  }
}

callAPI();
