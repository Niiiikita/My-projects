function handleFormSubmit(e) {
    e.preventDefault()

    const title = document.querySelector('#title').value;
    const genre = document.querySelector('#genre').value;
    const releaseYear = document.querySelector('#releaseYear').value;
    const isWatched = document.querySelector('#isWatched').checked;

    const film = {
        title,
        genre,
        releaseYear,
        isWatched
    }

    addFilmToLocalStorage(film)
}

function addFilmToLocalStorage(film) {
    const films = JSON.parse(localStorage.getItem('films')) || []
    films.push(film)
    localStorage.setItem('films', JSON.stringify(films))

    renderTable();
}

function renderTable() {
    const films = JSON.parse(localStorage.getItem('films')) || []

    const filmTableBody = document.querySelector('#film-tbody');

    filmTableBody.innerHTML = '';

    films.forEach((film) => {
        const row = document.createElement('tr');

        const delBtn = document.createElement('button');
        const editBtn = document.createElement('button');
        delBtn.setAttribute('type', 'button');
        delBtn.innerHTML = 'Удалить';
        editBtn.innerHTML = 'Редактировать';
        
        row.innerHTML = `
            <td>${film.title}</td>
            <td>${film.genre}</td>
            <td>${film.releaseYear}</td>
            <td>${film.isWatched ? 'Да' : 'Нет'}</td>
        `;
        filmTableBody.appendChild(row);
        row.insertCell(-1).append(editBtn, delBtn)
        
        delBtn.addEventListener('click', function (e) {
            if(films.some(item => JSON.stringify(item) == JSON.stringify(film))) {
                row.innerHTML = '';
                row.remove();
                localStorage.setItem('films', JSON.stringify(films.filter(item => JSON.stringify(item) !== JSON.stringify(film))));
            };
        });

        editBtn.addEventListener('click', function (e) {
            e.preventDefault()
            if(document.querySelector('.add') != null) {
                const newBtn = document.querySelectorAll('.displayNone').forEach(element => {
                    element.style.cssText = 'display: block'                
                });
                document.querySelector('.add').remove();
            }
            const inputEl = document.querySelectorAll('input');
            inputEl[0].setAttribute('value', film.title);
            inputEl[1].setAttribute('value', film.genre);
            inputEl[2].setAttribute('value', film.releaseYear);
            if(film.isWatched == true) {
                inputEl[3].setAttribute('checked', '');
            }
            document.querySelector('#film-form').removeEventListener('submit', handleFormSubmit)

            document.querySelector('#film-form').addEventListener('submit', function () {
                const title = document.querySelector('#title').value;
                const genre = document.querySelector('#genre').value;
                const releaseYear = document.querySelector('#releaseYear').value;
                const isWatched = document.querySelector('#isWatched').checked;

                const film = {
                    title,
                    genre,
                    releaseYear,
                    isWatched
                }

                const films = JSON.parse(localStorage.getItem('films')) || []

                films.forEach(element => {
                    if(JSON.stringify(element).includes(JSON.stringify(film.title))) {
                        Object.assign(element, film);
                        localStorage.setItem('films', JSON.stringify(films));
                        renderTable()
                        console.log(JSON.stringify(element).includes(JSON.stringify(film.title)));
                    }
                }); 
            });
        });
    })
}




document.querySelector('#film-form').addEventListener('submit', handleFormSubmit);

renderTable();

const sortBtn = document.querySelector('.btn__sort');

sortBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const films = JSON.parse(localStorage.getItem('films'));
    const selectEl = document.querySelector('#sort');
    if(selectEl.value == 'Год') {
        films.sort((a, b) => a.releaseYear - b.releaseYear)
        localStorage.setItem('films', JSON.stringify(films));
        renderTable()
    }   else if(selectEl.value == 'Название') {
        films.sort((a, b) => a.title.localeCompare(b.title))
        localStorage.setItem('films', JSON.stringify(films));
        renderTable()
    }   else if(selectEl.value == 'Жанр') {
        films.sort((a, b) => a.genre.localeCompare(b.genre))
        localStorage.setItem('films', JSON.stringify(films));
        renderTable()
    }   else if(selectEl.value == 'Просмотр') {
        films.sort((a, b) => a.isWatched - b.isWatched)
        localStorage.setItem('films', JSON.stringify(films));
        renderTable()
    }
});
