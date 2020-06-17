let btn = document.getElementById('btn');
let file = document.getElementById('file');
let images = document.getElementById('images');
let img = document.getElementById('img');
btn.addEventListener('click', function(e) {
    e.preventDefault();
    let data = new FormData();
    data.append('file', file.files[0]);
    fetch('get.php', {
            method: 'post',
            body: data
        })
        .then(response => response.text())
        .then(text => {
            img.src = "images/" + text;

        })
        .catch(error => console.log(error))
})