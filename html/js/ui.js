function initialize() {
  setIndex();
  setHeader();
  setContents();
  setBottom();
  newBackground();
  adjustScale();
}

function adjustScale() {
  var wrap = document.getElementById("wrap");

  function scaleContent() {
      var windowRatio = window.innerWidth / window.innerHeight;
      var targetRatio = 1280 / 720;

      if (windowRatio > targetRatio) {
          // 창의 가로가 더 길 때
          wrap.style.transform = `translate(-50%, -50%) scale(${
              window.innerHeight / 720
          })`;
      } else {
          // 창의 세로가 더 길 때
          wrap.style.transform = `translate(-50%, -50%) scale(${
              window.innerWidth / 1280
          })`;
      }
  }

  window.addEventListener("resize", scaleContent);
  scaleContent(); // 초기 스케일 조정
}

document.addEventListener("DOMContentLoaded", () => {
  initialize();
});