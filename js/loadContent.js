function getBaseURL() {
    const currentURL = window.location.href;
    const url = new URL(currentURL);

    return url.origin;
}

function loadContent(relativePath, containerId) {
    const baseURL = getBaseURL();
    const fullPath = new URL(relativePath, baseURL).href;

    fetch(fullPath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(containerId).innerHTML = data;
        })
        .catch(err => console.error('Ошибка загрузки', err));
}

document.addEventListener('DOMContentLoaded', () => {
    loadContent('/header.htm', 'header-container');
    loadContent('/footer.htm', 'footer-container');
});


