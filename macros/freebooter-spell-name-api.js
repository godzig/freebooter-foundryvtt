// demonstration of a macro for pulling from a glitch api into foundry

const url = "https://dune-green-fly.glitch.me/api?generator=freebooters-on-the-frontier-2e-spell-name-generator&list=output";

function fetchURL(URL) {
  fetch(URL)
    .then((response) => response.text())
    .then((data) => {
      ChatMessage.create({
        content: `<h2>Spell Name</h2>${data}`
      });
    })
 }

fetchURL(url);