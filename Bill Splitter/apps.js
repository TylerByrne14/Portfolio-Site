 'use strict'

const tipOptions = document.querySelectorAll('.tip')
const bill = document.querySelector('#bill');
const numPeople = document.querySelector('#numPeople');
const tipDisplay = document.querySelector('.finalTipDisplay');
const totalDisplay = document.querySelector('.perPersonDisplay');
const resetBtn = document.querySelector('.reset-btn');
const tipCustom = document.querySelector('.custom');

let billValue = 0.00;
let tipValue = 0.05;
let people = 1;


bill.addEventListener('input', setBillValue);
numPeople.addEventListener('input', setPeopleValue);
resetBtn.addEventListener('click', reset);
window.addEventListener('load', reset);
bill.addEventListener('input', setBillValue);
tipCustom.addEventListener('input', setTipCustomValue);




function validateFloat(s){
    var rgx = /^[0-9]*\.?[0-9]*$/;
    return s.match(rgx);
}

function validateInt(s){
    var rgx = /^[0-9]*$/;
    return s.match(rgx);
}

function updateTotals(){
    tipDisplay.innerHTML = (((billValue * tipValue) / (people))).toFixed(2).toString();
    totalDisplay.innerHTML = (((billValue + (billValue * tipValue)))/(people)).toFixed(2).toString();
}

function setBillValue(){
    if(!validateFloat(bill.value)){
        bill.value = bill.value.substring(0, bill.value.length-1);
    }

    if(bill.value == ""){
        billValue = 0;
    }
    else{
        billValue = parseFloat(bill.value);
    }

    if (bill.value.includes(',')){
        bill.value = bill.value.replace(',', '.');
    }
    

    updateTotals();
    
}

function setPeopleValue(){
    if(numPeople.value == ''){
        numPeople.value = 1;
    }
    people = parseFloat(numPeople.value);
    updateTotals();
}

tipOptions.forEach(btn => {
    btn.addEventListener('click', buttonClick);
    // btn.addEventListener('input', buttonClick);
});

function buttonClick(event){
    tipOptions.forEach(btn => {
        //clear active state
        btn.classList.remove('atv-btn');
        btn.value = "";

        //set active state 
        if(event.target.innerHTML == btn.innerHTML){
            btn.classList.add('atv-btn');
            if(event.target.innerHTML == ""){
                setTipCustomValue;
            }
            else{
            tipValue = parseFloat(btn.innerHTML)/100;
            }
        }
    });
    updateTotals();
}

function setTipCustomValue(){
    if(tipCustom.value == ''){
        tipValue = parseFloat(0/100);
        updateTotals();
    }
    if(!validateInt(tipCustom.value)){
        tipCustom.value = tipCustom.value.substring(0, tipCustom.value.length-1);
    }

    tipCustom.addEventListener('input', ()=>{
        tipCustom.classList.add('atv-btn');
    })

    
    //remove active state from buttons
    tipOptions.forEach(btn => {
        btn.classList.remove('atv-btn');
    });
    
    tipOptions[tipOptions.length-1].classList.add('.atv-btn');

    if(tipCustom.value !== ''){
        tipValue = parseFloat(tipCustom.value/100);
        updateTotals();
    }
}


function reset(){
    bill.value = '';
    numPeople.value = '1';
    tipDisplay.innerHTML = '0.00';
    totalDisplay.innerHTML = '0.00';
    tipCustom.value = '';
    tipOptions.forEach(btn => {
        btn.classList.remove('atv-btn');
    });
    tipOptions[0].classList.add('atv-btn');

}

