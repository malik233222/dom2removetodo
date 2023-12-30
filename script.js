let form = document.querySelector('form');


form.addEventListener('submit', (e) => {

    e.preventDefault();
    let inp = document.querySelector('input');
    let ul = document.querySelector('ul');
    let newLi = document.createElement('li');
    let newBtn = document.createElement('button');
    newBtn.textContent = 'X';
    newBtn.classList.add('btn', 'btn-danger', 'btn-sm');


    //!bunlar class elave elemeyin yollaridir
    //-----------------------------------------------------
    // newLi.classList.add('list-group-item')
    // newLi.className='list-group-item';
    // newLi.setAttribute('class','list-group-item');
    // console.log(newLi.getAttribute('class'));
    //-----------------------------------------------------

    if (inp.value.trim() === "" || inp.value === null || inp.value === undefined) {
        inp.classList.add('is-invalid')
    }
    else {
        newLi.textContent = inp.value;
        newLi.classList.add('list-group-item', 'd-flex', 'justify-content-between')
        ul.append(newLi); //appendChild da bir dene elave elemek olur appendChildda coxlu ola biler
        newLi.append(newBtn);
        inp.value = "";
        inp.classList.remove('is-invalid')

    }

    newBtn.addEventListener('click', (e) => {
        let clickElement = e.target;
        clickElement.parentElement.remove();

    })





})