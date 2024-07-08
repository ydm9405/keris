function setHeader() {
  console.log("setHeader 호출");
  $("#fs-header").append(`
      <div id="header">
          <div id="pageHeader">
              <h1 class="mainTitle"></h1>
          </div>
      </div>
  `);
}