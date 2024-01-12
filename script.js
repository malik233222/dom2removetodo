let form = document.querySelector('form');
let inp = document.querySelector('input');

document.addEventListener('DOMContentLoaded', localGet);


form.addEventListener('submit', (e) => {

    e.preventDefault();
    localAdd(inp.value);
    showDisplay(inp.value);


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
    // console.log(todos_arr);
    todos_arr.push(val);

    localStorage.setItem('todo', JSON.stringify(todos_arr));

}

function localGet() {
    let todos_arr = JSON.parse(localStorage.getItem('todo'));
    if (todos_arr === null) {
        //ne yazim bilmedim
    }
    else {

        todos_arr.forEach(item => {
            showDisplay(item);
        });
    }
}

function showDisplay(val) {
    if (!val) {
        inp.classList.add('is-invalid');
    }
    else {
        let ul = document.querySelector('ul');
        let newLi = document.createElement('li');
        let newBtn = document.createElement('button');
        newBtn.textContent = 'X';
        newBtn.classList.add('btn', 'btn-danger', 'btn-sm');
        newLi.textContent = val;
        newLi.classList.add('list-group-item', 'd-flex', 'justify-content-between')
        ul.append(newLi); //appendChild da bir dene elave elemek olur appendChildda coxlu ola biler
        newLi.append(newBtn);
        inp.value = "";
        // inp.classList.remove('is-invalid');
        //silmek funksiysi
        newBtn.addEventListener('click', (e) => {
            let clickElement = e.target;
            clickElement.parentElement.remove();
            let todos_arr = JSON.parse(localStorage.getItem('todo'));
            let new_text = clickElement.parentElement.textContent;
            let new_text_sbst = new_text.substr(0,new_text.length - 1);
            let ind = todos_arr.indexOf(new_text_sbst);
            todos_arr.splice(ind,1);
            localStorage.setItem('todo', JSON.stringify(todos_arr));
        });
    }


}