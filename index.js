let query = document.querySelector('.query');
let srch = document.querySelector('.srch');

srch.onclick = function(){
    let url = 'https://www.google.com/search?q=' + query.value;
    window.open(url, '_self')
}