var countDownTime = 600 + 1;
function countDown() {
    countDownTime--;
    if (countDownTime <= 0) {
        location.href = "http://192.168.10.254:1000/keepalive?0305011e8492865f";
        return;
    }
    document.getElementById('countdown').innerHTML = countDownTime;
    counter = setTimeout("countDown()", 1000);
}
function startit() {
    countDown();
}
window.onload = startit