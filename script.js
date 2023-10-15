const CloseModel = document.querySelector(".closeModel");
const Allmodel = document.querySelectorAll(".btn");
const TextModel = document.querySelector(".textModel");
const Overlay = document.querySelector(".overlay");

Close = function () {
  TextModel.classList.add("hidden");
  Overlay.classList.add("hidden");
};
Open = function () {
  TextModel.classList.remove("hidden");
  Overlay.classList.remove("hidden");
};

for (let i = 0; i < Allmodel.length; i++) {
  Allmodel[i].addEventListener("click", Open);
}

Overlay.addEventListener("click", Close);
CloseModel.addEventListener("click", Close);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    Close();
  }
});
