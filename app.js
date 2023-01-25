const btn = document.querySelector(".btn");
const inpEle = document.querySelector("input");
inpEle.style.display = "none";
const output = document.querySelector(".output");
btn.textContent = "Get the Joke of the Day";
const url = "https://api.jokes.one/jod";

btn.addEventListener("click", (e) => {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.contents);
      if (data.success.total > 0) {
        outputJoke(data.contents.jokes);
      }
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

function outputJoke(data) {
  console.log(data);
  const joke = data[0];
  output.innerHTML = `<h1>${joke.description}</h1>`;
  output.innerHTML += `<div>${joke.joke.title}</div>`;
  output.innerHTML += `<div>${joke.joke.text}</div>`;
}
