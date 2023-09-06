var check = document.querySelector(".check");

check.addEventListener('change', cambioIdioma);

function cambioIdioma() {
    if (check.checked) {
        cambiarIdioma('english');
    } else {
        cambiarIdioma('spanish');
    }
}

function cambiarIdioma(language) {
    if (language === 'english') {
        localStorage.setItem('selectedLanguage', 'english');
        location.href = "pagenglish.html";
    } else {
        localStorage.removeItem('selectedLanguage');
        location.href = "index.html";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var selectedLanguage = localStorage.getItem('selectedLanguage');
    if (selectedLanguage === 'english') {
        check.checked = true;
    }
});
