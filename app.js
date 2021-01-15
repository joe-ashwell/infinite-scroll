// let albumIndexNumber = 1;

// let imageUrlArray = [];
 
// function scrollHandler() {
//     const distanceToBottom = document.body.getBoundingClientRect().bottom;
 
//     if (distanceToBottom < document.documentElement.clientHeight + 150) {
//         getImages();
//     }
// }
 
// const getImages = () => {
//     imageUrlArray = [];

//     let imageEndpoint = `https://jsonplaceholder.typicode.com/photos?albumId=${albumIndexNumber}`;

//     fetch(imageEndpoint)
//         .then(blob => blob.json())
//         .then(data => imageUrlArray.push(...data))
//         .then(renderItems);
    
//     albumIndexNumber++;
//     console.log(imageUrlArray);
// }

// const renderItems = () => {
//     imageUrlArray.forEach(item => {
//         const main = document.querySelector('main');
//         const newDivElement = document.createElement('div');
//         newDivElement.innerHTML = `<img src="${item.url}">`;
//         main.append(newDivElement);
//     })
// }

let albumIndexNumber = 1;

let imageUrlArray = [];
 
function scrollHandler() {
    const distanceToBottom = document.body.getBoundingClientRect().bottom;
 
    if (distanceToBottom < document.documentElement.clientHeight+50) {
        getImages();
        console.log('Ive been called');
    }
}
 
const getImages = () => {
    imageUrlArray = [];

    let imageEndpoint = `https://source.unsplash.com/random?sig=${Math.random()}`;

    const main = document.querySelector('main');
    const newDivElement = document.createElement('div');
    newDivElement.innerHTML = `<img src="${imageEndpoint}">`;
    main.append(newDivElement);
    
    albumIndexNumber++;
    console.log(imageUrlArray);
}

window.addEventListener('scroll', scrollHandler);