
const nameUser = document.querySelector('#name-User')
const dateUser = document.querySelector('#age-User')
const btnCalculate = document.querySelector('#button-calculate')
const response = document.querySelector('#response-verify')
// .value para traer el contenido de un input
//console.log(ageUser.value)
btnCalculate.addEventListener('click', calculate_age);

function calculate_age(){
    let birthday = dateUser.value.split('-');

    console.log(birthday[0]); //Año
    console.log(birthday[1]); //Mes
    console.log(birthday[2]); // día

    let current_date = new Date();
    //console.log(current_date);
    let year = current_date.getFullYear();
    //console.log(year);
    let month = current_date.getMonth();
    //console.log(month+1);
    let day = current_date.getDate();
    //console.log(day);
    let result1 = parseInt(year - birthday[0]) ;
    console.log(result1)
    let result2 = parseInt(month - birthday[1]) ;
    let result3 = parseInt(day - birthday[2]) ;
    
    if (result1 >=18 && result2 <=0 && result3 >=0){
        console.log(nameUser.value + ' es mayor de edad');
        response.textContent = nameUser.value + ' es mayor de edad; por lo tanto, SI puede votar.';
    } 
    else{
        console.log(nameUser.value + ' es menor de edad');
        response.textContent = nameUser.value + ' es menor de edad; por lo tanto, NO puede votar.';
    }
   
}

