const buttonToOne = document.getElementById("to-oneplayer");
buttonToOne.addEventListener("click", () => {
  window.location.href = "onePlayer.html";
});

const buttonToMulti = document.querySelector("#to-multiplayer");
buttonToMulti.addEventListener("click", () => {
  window.location.href = "multiPlayer.html";
});
