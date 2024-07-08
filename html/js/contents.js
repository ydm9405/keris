var answerArray = ["2024", "2024년", "2024년도"]; // 주관식 정답
var answerCheck = 0; // 주관식 기회
var chanceCount = 0; // 객관식 기회
var wordAnswer = 0; // 낱말 체크

function setContents() {
    console.log("setContents 호출");
    $("#fs-content").append(`
        <div id="content">
            <div class="backgroundGroup">
                <img class='airplane' src='./css/img/background/blue/airplane.png' alt='비행기'>
                <img class='balloon' src='./css/img/background/blue/balloon.png' alt='에듀벌룬'>
                <img class='globe' src='./css/img/background/blue/globe.png' alt='지구본'>
            </div>
            <div class="resultBox">
                <img class="resultSuccess" src="./css/gif/success.gif" alt="정답 gif">
                <img class="resultFail" src="./css/gif/fail.gif" alt="오답 gif">
                <img class="resultChance" src="./css/gif/chance.gif" alt="기회 gif">
            </div>
            <div id="pageContents">
                <!--contents01 콘텐츠 소개-->
                <div id="contents01" class="sceneLayer left1">
                    <span class="introductionSubTitle">이 콘텐츠는 각각의 페이지별로 기능을 소개하며<div></div>실제 개발된 콘텐츠에서 간단하게 재구성하였습니다.</span>
                    <ul class="introduction">
                        <li>1페이지: 소개</li><span>- 소개 페이지입니다.</span>
                        <li>2페이지: 주관식 콘텐츠</li><span>- 질문을 확인하고 키보드아이콘을 클릭 후 정답을 입력합니다.</span>
                        <li>3페이지: OX 콘텐츠</li><span>- 질문을 확인하고 정답을 체크합니다.</span>
                        <li>4페이지: 객관식 콘텐츠</li><span>- 질문을 확인하고 정답을 체크합니다.</span>
                        <li>5페이지: 순서맞추기 콘텐츠</li><span>- 1~5까지 순서대로 찾습니다.</span>
                        <li>6페이지: 카드뒤집기 콘텐츠</li><span>- 카드를 뒤집어 뒷면을 확인합니다.</span>
                    </ul>
                    <a href="./downloads/resume.pdf" download="resume.pdf" class="download">이력서 다운로드</a>
                </div>
                <!--contents02 주관식 콘텐츠-->
                <div id="contents02" class="sceneLayer left2">
                    <span class="conTitle">주관식 콘텐츠</span>
                    <div id="conGroup">
                        <div class="groupLine"></div>
                        <div class="conExamples">
                            <span class="conSubTitle">실제 개발물 이미지</span>
                            <img class="conEx_01" src="./css/img/contents02/ex_01.png" alt="콘텐츠 예시"></img>
                        </div>
                        <div class="conPractice">
                            <span class="conSubTitle">기능 확인</span>
                            <span class="conQustion">올해는 몇년도인가요?</span>
                            <span class="subAnswer">올해는<span class="blank"></span>입니다.</span>
                            <div class="keyboardGroup">
                                <img class="keyboard" src="./css/img/contents02/keyboard.png" alt="키보드 버튼">
                                <input autocomplete="off" id="keyboardText" class="keyboardText">
                                <div id="result"></div>
                                <input type="button" id="complet" class="complet" alt="입력 완료 버튼">
                            </div>
                            <span class="exAnswer">정답은 [2024, 2024년, 2024년도] 입니다.</span>
                        </div>
                    </div>
                </div>
                <!--contents03 OX 콘텐츠-->
                <div id="contents03" class="sceneLayer left3">
                    <span class="conTitle">OX 콘텐츠</span>
                    <div id="conGroup">
                        <div class="groupLine"></div>
                        <div class="conExamples">
                            <span class="conSubTitle">실제 개발물 이미지</span>
                            <img class="conEx_01" src="./css/img/contents03/ex_01.png" alt="콘텐츠 예시"></img>
                        </div>
                        <div class="conPractice">
                            <span class="conSubTitle">기능 확인</span>
                            <span class="conQustion">올해는 2023년입니다.</span>
                            <div class="oxBox">
                                <img class="o_btn" src="./css/img/contents03/o_non.png" alt="o버튼"></img>
                                <img class="x_btn correct" src="./css/img/contents03/x_non.png" alt="x버튼"></img>
                            </div>
                            <span class="commentary">해설: 올해는 2024년입니다.</span>
                        </div>
                    </div>
                </div>
                <!--contents04 객관식 콘텐츠-->
                <div id="contents04" class="sceneLayer left4">
                    <span class="conTitle">객관식 콘텐츠</span>
                    <div id="conGroup">
                        <div class="groupLine"></div>
                        <div class="conExamples">
                            <span class="conSubTitle">실제 개발물 이미지</span>
                            <img class="conEx_01" src="./css/img/contents04/ex_01.png" alt="콘텐츠 예시"></img>
                        </div>
                        <div class="conPractice">
                            <span class="conSubTitle">기능 확인</span>
                            <span class="conQustion">올해는 몇년도인가요?</span>
                            <ul class="selectBox">
                                <li class="selectList01" onclick="chooseAnswer(this)">
                                    <img class="check01 check" src="./css/img/contents04/no_check.png" alt="체크박스">
                                    <span>2022년</span>
                                </li>
                                <li class="selectList02" onclick="chooseAnswer(this)">
                                    <img class="check02 check" src="./css/img/contents04/no_check.png" alt="체크박스">
                                    <span>2023년</span>
                                </li>
                                <li class="selectList03 checkCorrect" onclick="chooseAnswer(this)">
                                    <img class="check03 check" src="./css/img/contents04/no_check.png" alt="체크박스">
                                    <span>2024년</span>
                                </li>
                                <li class="selectList04" onclick="chooseAnswer(this)">
                                    <img class="check04 check" src="./css/img/contents04/no_check.png" alt="체크박스">
                                    <span>2025년</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!--contents05 순서대로 클릭 콘텐츠-->
                <div id="contents05" class="sceneLayer left5">
                    <span class="conTitle">순서대로 클릭 콘텐츠</span>
                    <div id="conGroup">
                        <div class="groupLine"></div>
                        <div class="conExamples">
                            <span class="conSubTitle">실제 개발물 이미지</span>
                            <img class="conEx_01" src="./css/img/contents05/ex_01.png" alt="콘텐츠 예시"></img>
                        </div>
                        <div class="conPractice">
                            <span class="conSubTitle">기능 확인</span>
                            <span class="conQustion">1~5 숫자를 순서대로 찾으세요</span>
                            <div class="questionObj">
                                <div class="obj01">
                                    <div class="word01 wordBtn"><span class="word01">0</span></div>
                                    <div class="word02 wordBtn"><span class="word02">5</span></div>
                                    <div class="word03 wordBtn"><span class="word03">6</span></div>
                                </div>
                                <div class="obj02">
                                    <div class="word04 wordBtn"><span class="word04">3</span></div>
                                    <div class="word05 wordBtn"><span class="word05">1</span></div>
                                    <div class="word06 wordBtn"><span class="word06">7</span></div>
                                </div>
                                <div class="obj03">
                                    <div class="word07 wordBtn"><span class="word07">2</span></div>
                                    <div class="word08 wordBtn"><span class="word08">4</span></div>
                                    <div class="word09 wordBtn"><span class="word09">8</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--contents06 카드뒤집기 콘텐츠-->
                <div id="contents06" class="sceneLayer left6">
                    <span class="conTitle">카드뒤집기 콘텐츠</span>
                    <div id="conGroup">
                        <div class="groupLine"></div>
                        <div class="conExamples">
                            <span class="conSubTitle">실제 개발물 이미지</span>
                            <img class="conEx_01" src="./css/img/contents06/ex_01.png" alt="콘텐츠 예시"></img>
                        </div>
                        <div class="conPractice">
                            <span class="conSubTitle">기능 확인</span>
                            <div id="perspective">
                                <div id="card">
                                    <img class="illust" src="./css/img/contents06/illust.png" alt="년도">
                                    <div id="cardChange">
                                        <img class="changeBg" src="./css/img/contents06/change_bg2.png">
                                        <span class="changeText">년</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--contents07 코드 소개-->
                <div id="contents07" class="sceneLayer left7">
                    <span class="conTitle">코드 소개</span>
                    <div id="conGroup">
                        <span class="jsIntroduce">bottom.js - bottom을 구성하고 이전,다음페이지이동 및 페이지이동에 따른 배경을 설정합니다.</span>
                        <span class="jsIntroduce">common.js - js 및 css를 로드합니다.</span>
                        <span class="jsIntroduce">contents.js - 페이지별 콘텐츠를 구성하고 기능을 정의합니다.</span>
                        <span class="jsIntroduce">header.js - header를 구성합니다.</span>
                        <span class="jsIntroduce">index.js - index를 구성합니다.</span>
                        <span class="jsIntroduce">ui.js - 각각 js의 함수를 호출하여 페이지를 구성하며 스케일을 조정합니다.</span>
                    </div>
                </div>
            </div>
        </div>
    `);

    totalSceneNumber = $(".sceneLayer").length;
    sceneAreaObject = $("#pageContents");
    sceneAreaObject.addClass("left1");

    /*주관식 키보드*/
    $(".keyboard").on("click", keyboardClick);

    $(".complet").on("click", function () {
        var textArray = $("#result").text();
        if (textArray === "") {
            alert("빈 칸을 채워주세요.");
        } else if (answerArray.includes(textArray)) {
            resultSuccess();
        } else {
            answerCheck++;
            if (answerCheck == 1) {
                resultChance();
            } else if (answerCheck == 2) {
                resultFail();
            }
        }
    });

    /*OX퀴즈 O를 눌렀을 경우*/
    $(".o_btn").on("click", function () {
        var isCorrect = $(this).hasClass("correct");
        if (isCorrect) {
            $(this).attr("src", "./css/img/contents03/o_on.png");
            oxResultSuccess();
        } else {
            $(".x_btn").attr("src", "./css/img/contents03/x_on.png");
            oxResultFail();
        }
    });

    /*OX퀴즈 X를 눌렀을 경우*/
    $(".x_btn").on("click", function () {
        var isCorrect = $(this).hasClass("correct");
        if (isCorrect) {
            $(this).attr("src", "./css/img/contents03/x_on.png");
            oxResultSuccess();
        } else {
            $(".o_btn").attr("src", "./css/img/contents03/o_on.png");
            oxResultFail();
        }
    });

    /*낱말 정답 처리*/
	$(".word05").on("click",function(){
		$(".word05").addClass("answer")
		$(".word005").css("pointer-events","none")
		wordAnswer = 1;
	})
	$(".word07").on("click",function(){
		if(wordAnswer == 1){
			$(".word07").addClass("answer")
			$(".word07").css("pointer-events","none")
			wordAnswer = 2;
		}
	})
	$(".word04").on("click",function(){
		if(wordAnswer == 2){
			$(".word04").addClass("answer")
			$(".word04").css("pointer-events","none")
			wordAnswer = 3;
		}
	})
	$(".word08").on("click",function(){
		if(wordAnswer == 3){
			$(".word08").addClass("answer")
			$(".word08").css("pointer-events","none")
			wordAnswer = 4;
		}
	})
	$(".word02").on("click",function(){
		if(wordAnswer == 4){
			$(".word02").addClass("answer")
			$(".word02").css("pointer-events","none")
			wordAnswer = 5;
            $(".resultSuccess").show();
            setTimeout(function () {
                $(".resultSuccess").hide();
            }, 2000);
		}
	})
    
    /*카드 뒤집기*/
    initializeCardFlip();
}

/*주관식 키보드*/
function keyboardClick() {
    $(this).hide();
    $(".keyboardText").show();
    $(".complet").show();
}

function printName() {
    var name = $("#keyboardText").val();
    $("#result").html(name);
}

$(document).on("input", ".keyboardText", function () {
    printName();
});

/*주관식 정답*/
function resultSuccess() {
    answerCheck = 0;
    $(".keyboardText").attr("disabled", true);
    $(".complet").hide();
    $(".resultSuccess").show();
    setTimeout(function () {
        $(".resultSuccess").hide();
    }, 2000);
}

/*주관식 기회*/
function resultChance() {
    $("#result").html("");
    $(".keyboardText").val("");
    $(".resultChance").show();
    setTimeout(function () {
        $(".resultChance").hide();
    }, 2000);
}

/*주관식 오답*/
function resultFail() {
    answerCheck = 0;
    $("#result").html("2024년도");
    $(".keyboardText").val("2024년도");
    $("#keyboardText").attr("disabled", true);
    $(".exAnswer").show();
    $(".resultFail").show();
    setTimeout(function () {
        $(".resultFail").hide();
    }, 2000);
}

/*OX 정답*/
function oxResultSuccess() {
    $(".oxBox").css("pointer-events", "none");
    $(".resultSuccess").show();
    setTimeout(function () {
        $(".resultSuccess").hide();
    }, 2000);
    $(".commentary").show();
}

/*OX 오답*/
function oxResultFail() {
    $(".oxBox").css("pointer-events", "none");
    $(".resultFail").show();
    setTimeout(function () {
        $(".resultFail").hide();
    }, 2000);
    $(".commentary").show();
}

/*객관식*/
function chooseAnswer(e) {
    var realAnswer = $(e)
        .parent()
        .children(".checkCorrect")
        .children("span")
        .text();
    var choosenOne = $(e).children("span").text();
    console.log("RealAnswer : " + realAnswer);
    console.log("choosenOne : " + choosenOne);

    if ($(e).hasClass("checkCorrect")) {
        chooseResultSuccess(e);
    } else {
        if (chanceCount == 0) {
            chooseResultChance(e);
        } else {
            chooseResultFail(e);
        }
    }
}

function chooseResultSuccess(e) {
    console.log("정답");
    chanceCount = 0;
    $(e).children(".check").attr("src", "./css/img/contents04/yes_check.png");
    $(e).css("pointer-events", "none");
    $(e).siblings("li").css("pointer-events", "none");

    $(e).siblings("li").css("opacity", "0.5");
    $(e).css("opacity", "1");
    $(".resultSuccess").show();
    setTimeout(function () {
        $(".resultSuccess").fadeOut(300);
    }, 2000);
}

function chooseResultChance(e) {
    chanceCount++;
    console.log(chanceCount + "번 틀림");
    $(e).css("pointer-events", "none");
    $(e).siblings("li").css("pointer-events", "none");
    $(e).children(".check").attr("src", "./css/img/contents04/yes_check.png");
    $(".resultChance").show();
    setTimeout(function () {
        $(".resultChance").fadeOut(300);
        $(e).css("pointer-events", "auto");
        $(e).siblings("li").css("pointer-events", "auto");
        $(e).children(".check").attr("src", "./css/img/contents04/no_check.png");
    }, 2000);
}

function chooseResultFail(e) {
    console.log("오답");
    chanceCount = 0;
    $(e).children(".check").attr("src", "./css/img/contents04/yes_check.png");
    $(e).css("pointer-events", "none");
    $(e).siblings("li").css("pointer-events", "none");

    $(e).siblings("li").css("opacity", "0.5");
    $(e).css("opacity", "0.5");
    $(e).siblings(".checkCorrect").css("opacity", "1");

    $(".resultFail").show();
    setTimeout(function () {
        $(".resultFail").fadeOut(300);
    }, 2000);
}

// 카드 뒤집기
function initializeCardFlip() {
    var card = document.querySelector("#card");
    card.addEventListener("click", cardClick);
}

function cardClick(event) {
    var card = event.currentTarget;
    if (card.style.transform === "rotateY(180deg)") {
        card.style.transform = "rotateY(0deg)";
    } else {
        card.style.transform = "rotateY(180deg)";
    }
}

/*페이지 변경*/
function _ChangeScene(n) {
    currentSceneNumber = n;

    for (var i = 1; i <= totalSceneNumber; i++) {
        sceneAreaObject.removeClass("left" + i);
    }
    sceneAreaObject.addClass("left" + currentSceneNumber);
}