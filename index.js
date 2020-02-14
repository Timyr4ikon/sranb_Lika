'use strict';

const inputName = document.querySelector('input[data-action="name"]');
const inputImg = document.querySelector('input[data-action="photo"]');
const btnAdd = document.querySelector('button[data-action="add"]');

const newDish = {
    name:'',
    img:'./img/depositphotos_7523319-stock-photo-pirate-skull-captain-with-hat.jpg'
}

inputName.addEventListener('focus',(e)=>{
    inputName.classList.remove('invalid')
})

btnAdd.addEventListener('click',(e)=>{
    e.preventDefault();
    if(inputName.value !== ''){
        newDish.name = inputName.value;
    }
    if(inputName.value === ''){
        inputName.placeholder = "Укажите название товара";
        inputName.classList.add('invalid');
        return;
    }

    if(inputImg.value !== ''){
        newDish.img = inputImg.value;
    }
    inputName.value = '';
    inputImg.value = '';
    alert(`Категория ${newDish.name} успешно добавлена!`);

    ////пушим обьект в массив
})
    

