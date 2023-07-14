(function () {
  const init = function (el) {
    el.addEventListener("change", (event) => {
      const target = document.querySelector(
        'a[name="' + event.target.value + '"]'
      );
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    });
  };
  init(document.getElementById("mobile-nav"));
})();
