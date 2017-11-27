// Q. 50분마다 잠시 쉬는 시간을 가지는 안내메시지를 출력
// + 17시는 마지막 시간이므로 수고하셨습니다 메시지 출력
// + 그 이전에는 열공합니다 메시지 출력

// 1. 현재 시간을 가져옵니다.
// 2. 현재 시간 중에서 "시"에 해당하는 부분을 가져옵니다.
// 3. "시"에 해당하는 부분이 17 이상일 경우 '잘가용'
// 아닐 경우 '열공해용' 메시지를 출력합니다.(alert)
// 4. 1,2,3에 해당하는 과정을 50분에 한번씩만 나오게!


function alertRest() {
    var time = new Date();
    console.log(time);
    var hour = time.getHours();
    console.log(hour);
    if(hour >= 17) {
        alert("잘가용!!!!");
    } else {
        alert("열공해용!!!!");
    } 
}

// setInterval(alertRest, 1000*5);
// alertRest();