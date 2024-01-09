function getBasePath() {
    const currentPath = window.location.pathname;
    const depth = currentPath.split('/').length - 1;

    let basePath = './';
    for (let i = 1; i < depth; i++) {
        basePath += '../';
    }

    return basePath;
}



function loadContent(url, containerId) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(containerId).innerHTML = data;
        })
        .catch(err => console.error('Ошибка загрузки', err));
}

document.addEventListener('DOMContentLoaded', () => {
    const basePath = getBasePath();
    loadContent(basePath + 'header.htm', 'header-container');
    loadContent(basePath + 'footer.htm', 'footer-container');
});
