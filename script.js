let form = document.querySelector('form');

document.addEventListener('DOMContentLoaded', localGet);

form.addEventListener('submit', (e) => {

    e.preventDefault();
    let inp = document.querySelector('input');
    showDisplay(inp);


    //!bunlar class elave elemeyin yollaridir
    //-----------------------------------------------------
    // newLi.classList.add('list-group-item')
    // newLi.className='list-group-item';
    // newLi.setAttribute('class','list-group-item');
    // console.log(newLi.getAttribute('class'));
    //-----------------------------------------------------










})

function localAdd(val) {
    let todos_arr;
    if (localStorage.getItem('todo') === null) {
        todos_arr = []
    }
    else {
        todos_arr = JSON.parse(localStorage.getItem('todo'));

    }
    console.log(todos_arr);
    todos_arr.push(val);

    localStorage.setItem('todo', JSON.stringify(todos_arr));

}

function localGet() {
    let todos_arr = JSON.parse(localStorage.getItem('todo'));

    todos_arr.forEach(item => {
        console.log(item);
    });
}

function showDisplay(inp) {
    let ul = document.querySelector('ul');
    let newLi = document.createElement('li');
    let newBtn = document.createElement('button');
    newBtn.textContent = 'X';
    newBtn.classList.add('btn', 'btn-danger', 'btn-sm');


    if (inp.value.trim() === "" || inp.value === null || inp.value === undefined) {
        inp.classList.add('is-invalid');
    }
    else {
        newLi.textContent = inp.value;
        newLi.classList.add('list-group-item', 'd-flex', 'justify-content-between')
        ul.append(newLi); //appendChild da bir dene elave elemek olur appendChildda coxlu ola biler
        newLi.append(newBtn);
        localAdd(inp.value);
        inp.value = "";
        inp.classList.remove('is-invalid')

    }

    //silmek funksiysi
    newBtn.addEventListener('click', (e) => {
        let clickElement = e.target;
        clickElement.parentElement.remove();

    })
}