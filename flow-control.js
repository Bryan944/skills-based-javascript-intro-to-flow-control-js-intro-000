function basicTeenager(age) {
    if (age <= 19) {
      return 'you are teenager';
    }
}
function teenager(age) {
  if(age >= 13 && age <= 19) {
    return 'you are teenager'
  } else{
    return 'you are not teenager'
  }
} console.log(teenager(15));


function ageChecker(age) {
  if(age >= 13 && age <= 19) {
    return 'you are teenager!'
  } else if( age <=12) {
    return 'you are kid';
  } else {
    return 'you are grownup'
  }
} console.log(ageChecker(15));



function ternaryTeenager(age) {

  return  age >= 13 && age <= 19 ? 'you are teenager' : 'you are not teenager';
}
console.log(ternaryTeenager(16));

function switchAge(age) {



}
function switchAge(age){


var age =20 ;
    switch(age) {
      case 13:
      case 14:
      case 15:
      case 16:
      case 17:
      case 18:
      case 19:
          return "teen";

      default:
          return 'You have an age';

    }

}
