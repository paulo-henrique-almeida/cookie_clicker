// obtém o id da quantidade de cookies
const cookies = document.getElementById("cookies");

if (localStorage.getItem('qtdCookies')) {
    cookies.innerHTML = localStorage.getItem('qtdCookies');
}

// função que aumenta a quantidade de cookies
function maiscookie() {
    // guarda o contador no localStorage
    localStorage.setItem('qtdCookies', parseInt(cookies.innerHTML) + 1);

    cookies.innerHTML = localStorage.getItem('qtdCookies');
}