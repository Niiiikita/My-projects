const dogImage = function() {
    return new Promise((resolve) => {
        const delay = (Math.floor(Math.random() * (5 - 2 + 1) + 2)) * 1000; // от 2 до 5 секунд
        setTimeout(() => {
            resolve([
                "img/dog1.jpg",
                "img/dog2.jpg",
                "img/dog3.jpg"
            ]);
        }, delay);
    });
}

const catImage = function() {
    return new Promise((resolve) => {
        const delay = (Math.floor(Math.random() * (5 - 2 + 1) + 2)) * 1000;
        setTimeout(() => {
            resolve([
                "img/cat1.jpg",
                "img/cat2.jpg",
                "img/cat3.jpg"
            ]);
        }, delay);
    });
}

function displayImages(images, containerClass) {
    const div = document.createElement('div');
    div.classList.add(`${containerClass}`);
    document.body.append(div);
    const listEl = document.createElement('ul');
    div.append(listEl);
    images.forEach((src) => {
        const liEl = document.createElement('li');
        const img = document.createElement("img");
        img.src = src;
        listEl.append(liEl);
        liEl.append(img);
    });
}

dogImage().then(
    function(dogImage) {
        displayImages(dogImage, 'dog-images');
    }
)

catImage().then(
    function(catImage) {
        displayImages(catImage, 'cat-images');
    }
)