const scrollHandler = () => {
    let distanceToBottomOfDocument = document.body.getBoundingClientRect().bottom;
    let distanceToBottomOfElement = document.documentElement.clientHeight;

    if (distanceToBottomOfDocument <= distanceToBottomOfElement) {
        getImage();
    }
}

const getImage = () => {
    let imageEndpoint = `https://source.unsplash.com/random?sig=${Math.random()}`;
    const main = document.querySelector('main');
    const newDivElement = document.createElement('div');
    newDivElement.classList.add('infin-div');
    newDivElement.style.backgroundImage = `url("${imageEndpoint}")`;
    main.append(newDivElement);
}

const scrollCounter = () => {
    const startDiv = document.querySelector('div.start');
    const scrollDistanceSpan = document.querySelector('span.scroll-distance');
    const header = document.querySelector('h1');

    let distanceToTopOfDocumentInPX = document.body.getBoundingClientRect().top;
    let distanceToTopOfDocumentInCM = -distanceToTopOfDocumentInPX * 0.0264583333;

    scrollDistanceSpan.textContent = `${distanceToTopOfDocumentInCM.toFixed(0)}`;

    if (-distanceToTopOfDocumentInPX >= 400 && (!startDiv.classList.contains('fixed-to-top'))) {
        startDiv.classList.add('fixed-to-top');
        header.style.display = 'none';
    } else if (-distanceToTopOfDocumentInPX < 400 && (startDiv.classList.contains('fixed-to-top'))) {
        startDiv.classList.remove('fixed-to-top');
        header.style.display = 'block';
    }
}

window.addEventListener('load', scrollHandler);
window.addEventListener('scroll', _.throttle(scrollHandler, 500));
window.addEventListener('scroll', scrollCounter);
