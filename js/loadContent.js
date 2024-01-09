//TODO
function getBasePath() {
    const currentPath = window.location.pathname;
    const pathSegments = currentPath.split('/').filter(Boolean);
    
    const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    
    let startIndex = isLocalhost ? 0 : 1;

    let basePath = '';
    for (let i = startIndex; i < pathSegments.length - 1; i++) {
        basePath += '../';
    }

    return basePath;
}


function loadContent(url, containerId, callbacks = []) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(containerId).innerHTML = data;
            callbacks.forEach(callback => {
                callback();
            });
        })
        .catch(err => console.error('Ошибка загрузки', err));
}

function updateLogoSrc() {
    const logoImage = document.getElementById('company-logo');
    if (logoImage) {
        logoImage.src = getBasePath() + 'pics/ait-tr.svg';
    } else {
        console.error('Элемент логотипа не найден');
    }
}



document.addEventListener('DOMContentLoaded', () => {
    const basePath = getBasePath();
    loadContent(basePath + 'header.htm', 'header-container', [updateLogoSrc]);
    loadContent(basePath + 'footer.htm', 'footer-container');
});

