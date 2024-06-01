let fromRuble = document.getElementById('input-from-ruble');
let toWon = document.getElementById('input-to-won');
let fromWon = document.getElementById('input-from-won');
let toRuble = document.getElementById('input-to-ruble');

document.getElementById('button-to').addEventListener('click', function() {
    let convertedValue = fx(fromRuble.value).from("RUB").to("KRW");
    toWon.value = convertedValue.toFixed(2);
});

document.getElementById('button-from').addEventListener('click', function() {
    let convertedValue = fx(fromWon.value).from("KRW").to("RUB");
    toRuble.value = convertedValue.toFixed(2);
});