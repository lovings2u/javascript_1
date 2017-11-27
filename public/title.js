// Q. 모든 타이틀 들을 내가 원하는 이름으로 바꾸기
// (버튼을 눌렀을 때)
// 1. 버튼이 눌린다.
// 1-1. 버튼의 내용을 가져온다.
// 1-2. 버튼에 onClickListener를 달아준다.
// 1-3. 버턴을 눌렀을 때 메소드를 실행시킨다.
// 2. 타이틀에 해당하는 html element들을 가져온다.(변수에 담는다)
// 3. 각각을 순환하며 내용을 바꾼다.

// 자바스크립트로 HTML내용물 가지고오기
// document.getElementById(ID명);
// document.getElementsByClassName(class명);
// document.getElementsByTagName(Tag명);
// document.querySelectorAll(css Selector);


function setTitle() {
    var titles = document.getElementsByClassName('title');
    for(var i = 0; i < titles.length; i++) {
        titles[i].innerHTML = "배가 아프다...";
    }
}


var btn = document.getElementsByTagName('button')[0];

btn.onclick = function() {
    alert("Done");
    setTitle();
}


