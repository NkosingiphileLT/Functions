//Function
function welcomeToFES(name) {
    console.log(`Welcome to Frontend Simplified, ${name}`)
}

//Calling the function
welcomeToFES('Nkosi');
welcomeToFES('Vanta');



//Function
function welcomeToFEShuman(name, lastname) {
    console.log(`Welcome to Frontend Simplified, ${name} ${lastname}`)
}

//Calling the function
welcomeToFEShuman('Nkosi', 'Tukuse');
welcomeToFEShuman('Sobza', 'Nkohla');


//----------------------------------------------------------------------------------



//Setting parameter
//Sum of num function
function sumofnumber(num1,num2){
 return num1 + num2   
  
}
console.log(sumofnumber(13,7));

//---------------------------------------------------------------------------

//Function for Converting
//Function

function convertceltofah(cel){
return cel * 1.8 + 32
}
//Calling the function
console.log(convertceltofah(0));
console.log(convertceltofah(10));


// func/using const
const convceltofah = (cel) =>{
 return cel * 1.8 + 32
}
//Using it
console.log(convceltofah(30));