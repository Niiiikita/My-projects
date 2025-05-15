function handleFormSubmit() {

    const name = document.querySelector('#name').value;
    const shelf = document.querySelector('#shelf').value;
    const weight = document.querySelector('#weight').value;
    const date = document.querySelector('#date').value;

    const offer = {
        name,
        shelf,
        weight,
        date
    }

    addItemToLocalStorage(offer)
}

function addItemToLocalStorage(offer) {
    const offers = JSON.parse(localStorage.getItem('offers')) || []
    offers.push(offer)
    localStorage.setItem('offers', JSON.stringify(offers))
}

function renderTable() {
    const offers = JSON.parse(localStorage.getItem('offers')) || []

    const offerTable = document.querySelector('.tableWarehouse');
    const tableBody = document.createElement('tbody');
    offerTable.append(tableBody);
    
    tableBody.innerHTML = '';

    offers.forEach((offer) => {
        const row = document.createElement('tr');
        
        const delBtn = document.createElement('button');
        delBtn.setAttribute('type', 'button');
        delBtn.textContent = 'Удалить';
        
        row.innerHTML = `
        <td>${offer.name}</td>
        <td>${offer.shelf}</td>
        <td>${offer.weight}</td>
        <td>${offer.date}</td>
        `;
        tableBody.appendChild(row);
        row.insertCell(-1).append(delBtn)
        
        delBtn.addEventListener('click', function () {
            if(offers.some(item => JSON.stringify(item) == JSON.stringify(offer))) {
                row.innerHTML = '';
                row.remove();
                localStorage.setItem('offers', JSON.stringify(offers.filter(item => JSON.stringify(item) !== JSON.stringify(offer))));
            };
        });
    })
}

export {
    handleFormSubmit,
    addItemToLocalStorage,
    renderTable
}