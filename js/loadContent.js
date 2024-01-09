function getBasePath() {
    const currentPath = window.location.pathname;
    const pathSegments = currentPath.split('/').filter(Boolean); 

    let pathToRoot = pathSegments.length - 1; 

    let basePath = '';
    for (let i = 0; i < pathToRoot; i++) {
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
