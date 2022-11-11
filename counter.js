var increament = document.getElementsByClassName('Increase');
var Decreament = document.getElementsByClassName('Decrease');
// console.log(increament)
// console.log(Decreament)

for (var i = 0; i < increament.length; i++) {
    var button = increament[i];
    button.addEventListener('click', function (event) {
        var buttonclicked = event.target;
        // console.log(buttonclicked)
        var input = buttonclicked.parentElement.children[2];
        console.log(input)
        let inputvalue = input.innerHTML
        let num = parseInt(inputvalue)
        num = num + 1
        input.innerHTML = num
    })
}
for (var i = 0; i < Decreament.length; i++) {
    var button = Decreament[i];
    button.addEventListener('click', function (event) {
        var buttonclicked = event.target;
        // console.log(buttonclicked)
        var input = buttonclicked.parentElement.children[2];
        console.log(input)
        let inputvalue = input.innerHTML
        let num = parseInt(inputvalue)
        num = num - 1
        input.innerHTML = num
    })
}

let data1 = ""
let counter = 4
let count = 0

const Add = () => {
    data1 += `<div class="counter">
    <h3 class="content">Counter ${counter}</h3>
        <button class="Decrease" onclick="Decrease()">-</button>
        <p class="count">${count + 1}</p>
        <button class="Increase">+</button>
</div>`
    document.getElementById('counting').innerHTML = data1
    counter += 1
    count += 1
}
const submit = () => {
    let count1 = document.getElementById('count1').innerHTML;
    let count2 = document.getElementById('count2').innerHTML;
    let count3 = document.getElementById('count3').innerHTML;
    let data = `<div class="counter1">
                <h3 class="content">Counter 1</h3>
                <p class="count1">${count1}</p>
                </div>
                <div class="counter1">
                    <h3 class="content">Counter 2</h3>
                    <p class="count1">${count2}</p>
                </div>
                <div class="counter1">
                    <h3 class="content">Counter 3</h3>
                    <p class="count1">${count3}</p>
                </div>`
    document.getElementById('div1').innerHTML = data;

    data2 = ""
    for (i = 0; i < count; i++) {
        data2 += `<div class="counter1">
        <h3 class="content">Counter 1</h3>
        <p class="count1">${i + 1}</p>
        </div>`

        document.getElementById('div2').innerHTML = data2
    }
}




