function dogImage(delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                "img/dog1.jpg",
                "img/dog2.jpg",
                "img/dog3.jpg"
            ]);
        }, delay * 1000);
    });
}

function catImage(delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                "img/cat1.jpg",
                "img/cat2.jpg",
                "img/cat3.jpg"
            ]);
        }, delay * 1000);
    });
}

function displayImages(images, containerClass) {
    const div = document.querySelector(`#${containerClass}`);
    const listEl = document.createElement('ul');
    div.prepend(listEl);
    images.forEach((src) => {
        const liEl = document.createElement('li');
        const img = document.createElement("img");
        img.src = src;
        listEl.append(liEl);
        liEl.append(img);
    });
}

function progressCat() {
    const div = document.querySelector('#cat-images');
    const divEl = document.createElement('div');
    const timer = document.createElement('div');
    timer.id = 'timer';
    divEl.id = 'progress-bar';
    div.append(divEl, timer);
    
    const delay = Math.floor(Math.random() * (6 - 2 + 1) + 2);
    divEl.style.animationDuration = `${delay}s`;
    
    let elapsedTime = 0;
    const interval = setInterval(() => {
        elapsedTime++;
        timer.textContent = `${elapsedTime} сек.`; 
        
        if (elapsedTime >= delay) {
            clearInterval(interval);
        }
    }, 1000); 
    
    const catPromise = catImage(delay);
    
    catPromise.then(
        function(catImage) {
            displayImages(catImage, 'cat-images');
            progressDog()
        }
    )
}

function progressDog() {
    const div = document.querySelector('#dog-images');
    const divEl = document.createElement('div');
    const timer = document.createElement('div');
    timer.id = 'timer';
    divEl.id = 'progress-bar';
    div.append(divEl, timer);
    
    const delay = Math.floor(Math.random() * (6 - 2 + 1) + 2);
    divEl.style.animationDuration = `${delay}s`;
    
    let elapsedTime = 0;
    const interval = setInterval(() => {
        elapsedTime++;
        timer.textContent = `${elapsedTime} сек.`; 
        
        if (elapsedTime >= delay) {
            clearInterval(interval);
        }
    }, 1000); 
    
    const dogPromise = dogImage(delay);

    dogPromise.then(
        function(dogImage) {
            displayImages(dogImage, 'dog-images');
        }
    )
}

progressCat()