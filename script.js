const btnEl = document.getElementById("btn");
const jokeEl = document.querySelector(".Joke");
const apiKey = "JI0ZZek9h9BdXj+mfv1mLQ==C7yKKZa7MLSVbhYi";
const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
  jokeEl.innerText = "Updating..."
  btnEl.disabled = true;
  btnEl.innerText = "Loading....."
  const response = await fetch(apiUrl, options);
  const data = await response.json();
  btnEl.disabled = false;
  btnEl.innerText = "Tell me a joke"

  jokeEl.innerText = data[0].joke;
}

btnEl.addEventListener("click", getJoke);
