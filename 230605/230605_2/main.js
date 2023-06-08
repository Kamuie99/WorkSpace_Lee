window.onload = function counter() {
    const count = document.querySelector(".count");
    const decrease = document.querySelector(".decrease");
    const reset = document.querySelector(".reset");
    const increase = document.querySelector(".increase");

    decrease.addEventListener("click", function () {
      let num = count.textContent;
      num = Number(num - 1);
      count.textContent = num;
    });
    increase.addEventListener("click", function () {
      let num = count.textContent;
      num = Number(num) + 1;
      count.textContent = num;
    });
    reset.addEventListener("click", function () {
      count.textContent = 0;
    });
};