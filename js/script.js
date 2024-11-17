const epicMix = [
  "Somebody That I Used To Know",
  "Too Cool To Be Careless",
  "New Person, Same Old Mistakes",
  "Rapture",
  "I Put a Spell on You",
  "Call Me",
  "Ray Of Solar",
  "Jolene",
  "You Don't Own Me",
  "Fast Car",
  "Dinner & Diatribes",
  "Superstition"
];

const mixList = document.querySelector(".mix");
const button = document.querySelector(".show-list");
const total = document.querySelector(".total");

button.addEventListener("click", function () {
  mixList.classList.remove("hide");
  button.classList.add("hide");
  mixInfo(epicMix);
});

total.innerText = `${epicMix.length} great songs!`;

const mixInfo = function (mix) {
  epicMix.forEach(function (song, index) {
    const li = document.createElement("li");
    li.classList.add("song");
    li.innerHTML = `<span class="song-number">#${index + 1}</span> ${song}`;
    mixList.append(li);
  });
};
