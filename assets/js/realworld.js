/* du må både ændre koden her, og i din HTML, hvis det er nødvendigt.. */

/*Opgave 1: skriv en validering af svar i koden herunder. resultatet skal vises i myAnsverFeedbackElement når bruger trykker på myAnsverButton .
der et korrekte svar:
nej 
*/

const myAnsverInput = document.getElementById('answerOne');
const myAnsverButton = document.getElementById('answerButton');
const myAnsverFeedbackElement = document.getElementById('answerFeedback');
const correctAnswer1 = 'false';
const correctAnswer2 = 'disney';

// myAnsverButton.addEventListener('click', (e) => {
//   e.preventDefault();

//   if (myAnswer === correctAnswer) {
//     alert('du har svarret rigtigt');
//     myAnsverFeedbackElement.textContent = 'Korrekt svar!';
//   } else {
//     alert('du har svarret forkert');
//     myAnsverFeedbackElement.textContent = 'Forkert svar!';
//   }
// });
//   let myAnswer = myAnsverInput.value;
// });

/*Opgave 2: udkommenter opgave 1, og omskriv nu din funktion til to korrekte svar:
nej
ja i disney film
*/
myAnsverButton.addEventListener('click', (e) => {
  e.preventDefault();
  let myAnswer = myAnsverInput.value;
  console.log('user answer', myAnswer);

  if (myAnswer === correctAnswer1 || myAnswer === correctAnswer2) {
    alert('du har svarret rigtigt');
    myAnsverFeedbackElement.textContent = 'Korrekt svar!';
  } else {
    alert('du har svarret forkert');
    myAnsverFeedbackElement.textContent = 'Forkert svar!';
  }
});
/*opgave 3: skriv en kode der valider formen med følgende elementer: (denne opgave er på extreme niveau) 

- korrekt e-mail type. brug funktionen "validateEmail(minEmail) til at checke en string med den indtastede email
- navnet skal være længere end 3 bogstaver, med realtime validering (brug keyup til at checke, og .lengt til at finde længden)
- alder skal være større end 12.
 du må gerne bare consol.logge de forskellige tests i konsollen, men hvis du kan må du gerne lave feedback i elementet formValideringResult.
*/

/* helper functions*/
// function validateEmail(email) {
//   var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(String(email).toLowerCase());
// }
// bider over lidt mere end jeg kan: dette er bare mere eller mere mig der leger med copolit haha
function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(String(email).toLowerCase());
}

const myNameInput = document.getElementById('myName');
const myEmailInput = document.getElementById('myEmail');
const myAgeInput = document.getElementById('myAge');
const submitButton = document.getElementById('submitButton');
const formValideringResult = document.getElementById('formValideringResult');

function validateForm() {
  let nameValid = false;
  let emailValid = false;
  let ageValid = false;
}
function validateName() {
  if (myNameInput.value.length > 3) {
    nameValid = true;
    console.log('name is valid');
  } else {
    nameValid = false;
    console.log('name is invalid');
  }
}
function validateEmail() {
  if (validateEmail(myEmailInput.value)) {
    emailValid = true;
    console.log('email is valid');
  } else {
    emailValid = false;
    console.log('email is invalid');
  }
}
function validateAge() {
  if (myAgeInput.value > 12) {
    ageValid = true;
    console.log('age is valid');
  } else {
    ageValid = false;
    console.log('age is invalid');
  }
}
function validateForm() {
  if (nameValid && emailValid && ageValid) {
    formValideringResult.textContent = 'Form is valid';
  } else {
    formValideringResult.textContent = 'Form is invalid';
  }
}
myNameInput.addEventListener('keyup', validateName);
myEmailInput.addEventListener('keyup', () => {
  validateForm();
});

myAgeInput.addEventListener('keyup', validateAge);

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  validateForm();
});

/* eks på kald:
if (validateEmail("test@example.com")) {
  console.log("Valid email address");
} else {
  console.log("Invalid email address");
}
*/
