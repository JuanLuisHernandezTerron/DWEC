window.addEventListener('load',function () {
    if (window.XMLHttpRequest) {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            llamardato(xhr)
        }
        xhr.open('GET','https://api.themoviedb.org/3/movie/550?api_key=3d3725dcabd44da454fa1c54cc34ce40')
        xhr.send();
    }
})

function llamardato(xhr) {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            console.log(JSON.parse(xhr.responseText))
        }
    }
}

