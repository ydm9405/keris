var currentSceneNumber = 1;
var sceneAreaObject = null;

function setBottom() {
    console.log("setBottom 호출");
    $("#fs-footer").append(
        `
        <div id="footer">
            <div id="pageFooter">
                <button class="prevBtn">이전</button>
                <div class="pageNum">
                    <span class="currentPageNum">` + currentSceneNumber + `</span>
                    <span class="dash">/</span>
                    <span class="totalPageNum">` + totalSceneNumber + `</span>
                </div>
                <button class="nextBtn">다음</button>
            </div>
        </div>
    `
    );

    $(".prevBtn").on("click", handlePrevClick);
    $(".nextBtn").on("click", handleNextClick);
}

/* 다음버튼 클릭(씬 이동) */
function handleNextClick() {
    if (currentSceneNumber == totalSceneNumber) {
        alert("마지막 페이지입니다.");
    } else {
        currentSceneNumber++;
        _ChangeScene(currentSceneNumber);
        newBackground();
        updatePageNumber();
    }
    console.log("현재 페이지는 " + currentSceneNumber + "페이지 입니다.");
}

/* 이전버튼 클릭 */
function handlePrevClick() {
    if (currentSceneNumber == 1) {
        alert("첫 페이지입니다.");
    } else {
        currentSceneNumber--;
        _ChangeScene(currentSceneNumber);
        newBackground();
        updatePageNumber();
    }
    console.log("현재 페이지는 " + currentSceneNumber + "페이지 입니다.");
}

/* 배경 변경 */
function newBackground() {
    if (currentSceneNumber == 1) {
        $(".mainTitle").text("Introduction Page");
        $(".airplane").attr("src", "./css/img/background/blue/airplane.png");
        $(".balloon").attr("src", "./css/img/background/blue/balloon.png");
        $(".globe").attr("src", "./css/img/background/blue/globe.png");
        $("#fs-container").css("background-image", "url('./css/img/background/blue/blue_bg.png')");
    } else if (currentSceneNumber == 2) {
        $(".mainTitle").text("콘텐츠 기능 소개");
        $(".airplane").attr("src", "./css/img/background/green/airplane.png");
        $(".balloon").attr("src", "./css/img/background/green/balloon.png");
        $(".globe").attr("src", "./css/img/background/green/globe.png");
        $("#fs-container").css("background-image", "url('./css/img/background/green/green_bg.png')");
    } else if (currentSceneNumber == 3) {
        $(".mainTitle").text("콘텐츠 기능 소개");
        $(".airplane").attr("src", "./css/img/background/pink/airplane.png");
        $(".balloon").attr("src", "./css/img/background/pink/balloon.png");
        $(".globe").attr("src", "./css/img/background/pink/globe.png");
        $("#fs-container").css("background-image", "url('./css/img/background/pink/pink_bg.png')");
    } else if (currentSceneNumber == 4) {
        $(".mainTitle").text("콘텐츠 기능 소개");
        $(".airplane").attr("src", "./css/img/background/yellow/airplane.png");
        $(".balloon").attr("src", "./css/img/background/yellow/balloon.png");
        $(".globe").attr("src", "./css/img/background/yellow/globe.png");
        $("#fs-container").css("background-image", "url('./css/img/background/yellow/yellow_bg.png')");
    } else if (currentSceneNumber == 5) {
        $(".mainTitle").text("콘텐츠 기능 소개");
        $(".airplane").attr("src", "./css/img/background/puple/airplane.png");
        $(".balloon").attr("src", "./css/img/background/puple/balloon.png");
        $(".globe").attr("src", "./css/img/background/puple/globe.png");
        $("#fs-container").css("background-image", "url('./css/img/background/puple/puple_bg.png')");
    } else if (currentSceneNumber == 6){
        $(".mainTitle").text("콘텐츠 기능 소개");
        $(".airplane").attr("src", "./css/img/background/orange/airplane.png");
        $(".balloon").attr("src", "./css/img/background/orange/balloon.png");
        $(".globe").attr("src", "./css/img/background/orange/globe.png");
        $("#fs-container").css("background-image", "url('./css/img/background/orange/orange_bg.png')");
    } else {
        $(".mainTitle").text("콘텐츠 코드 소개");
        $(".airplane").attr("src", "./css/img/background/orange/airplane.png");
        $(".balloon").attr("src", "./css/img/background/orange/balloon.png");
        $(".globe").attr("src", "./css/img/background/orange/globe.png");
        $("#fs-container").css("background-image", "url('./css/img/background/orange/orange_bg.png')");
    }
}

/* 페이지 넘버*/
function updatePageNumber() {
    $(".currentPageNum").text(currentSceneNumber);
}