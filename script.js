let isMatchNumber;
let isMatchcal;
document.getElementById('randomGenerate').addEventListener('click', function() {
    let numberRandom = Math.floor(1000 + Math.random() * 9000);
    isMatchNumber = numberRandom;
    document.getElementById('random-input').value = isMatchNumber;
chackPin();
})

//Pin display value
function pinNumber() {
    var calculateBtn = document.getElementsByClassName('button');
    for (let i = 0; i < calculateBtn.length; i++) {
        calculateBtn[i].addEventListener('click', function() {
            let outputCalculateNum = document.getElementById('calculate-input');
            isMatchcal = outputCalculateNum;
            isMatchcal.value = isMatchcal.value + this.innerText;
            chackPin();
        })
    }
}

pinNumber();

// pin match checker
function chackPin() {
    document.getElementById('submit').addEventListener('click', function() {
          if (isMatchcal.value == isMatchNumber) {
            const activeDisplay = document.getElementById('notify-active');
            activeDisplay.style.display = "block";
           const deactiveDisplay = document.getElementById('notify-deactive');
            deactiveDisplay.style.display = "none";
       }
        if (isMatchcal.value != isMatchNumber) {
            const deactiveDisplay = document.getElementById('notify-deactive');
            deactiveDisplay.style.display = "block";
            const activeDisplay = document.getElementById('notify-active');
            activeDisplay.style.display = "none";
            actionLeft();

        }
    })
}

// Clear display number
document.getElementById('clear').addEventListener('click', function() {
    isMatchcal.value = null;
})
// clear one by   one
document.getElementById('single-number-delete').addEventListener('click', function() {
    isMatchcal.value = isMatchcal.value.substring(0, isMatchcal.value.length - 1);
})

// disableed and left action function
var count = 0;
function actionLeft() {
    count += 1;
    var actionLeft = document.getElementById('action-leftId');
    var click = document.getElementById('submit');
        click = count;
        actionLeft = count;
    var btn = document.getElementById('submit');

    if (click >= 15) {
      btn.disabled = true;
        btn.style.backgroundColor = 'red';
        document.getElementById('submit').innerText="blocked for 24 hours"
    } else if (click >= 3) {
        document.getElementById('action-leftId').innerHTML = 2;
     }
    if (click >= 6) {
        document.getElementById('action-leftId').innerHTML = 1;
    }
    if (click >= 12) {
        document.getElementById('action-leftId').innerHTML = 0;
       }
}