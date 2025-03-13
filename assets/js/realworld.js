/* du må både ændre koden her, og i din HTML, hvis det er nødvendigt.. */

/*Opgave 1: skriv en validering af svar i koden herunder. resultatet skal vises i myAnsverFeedbackElement når bruger trykker på myAnsverButton .
der et korrekte svar:
nej 
*/

const myAnsverInput = document.getElementById('answerOne');
const myAnsverButton = document.getElementById('answerButton');
const myAnsverFeedbackElement = document.getElementById('answerFeedback');
const correctAnswer = 'false';
let myAnswer = myAnsverInput.value;

myAnsverButton.addEventListener('click', (e) => {
  e.preventDefault();

  let myAnswer = myAnsverInput.value; // Move this line inside the event listener to get the updated value

  if (myAnswer === correctAnswer) {
    alert('du har svarret rigtigt');
    myAnsverFeedbackElement.textContent = 'Korrekt svar!';
  } else {
    alert('du har svarret forkert');
    myAnsverFeedbackElement.textContent = 'Forkert svar!';
  }
});

/*Opgave 2: udkommenter opgave 1, og omskriv nu din funktion til to korrekte svar:
nej
ja i disney film
*/

/*opgave 3: skriv en kode der valider formen med følgende elementer: (denne opgave er på extreme niveau) 

- korrekt e-mail type. brug funktionen "validateEmail(minEmail) til at checke en string med den indtastede email
- navnet skal være længere end 3 bogstaver, med realtime validering (brug keyup til at checke, og .lengt til at finde længden)
- alder skal være større end 12.
 du må gerne bare consol.logge de forskellige tests i konsollen, men hvis du kan må du gerne lave feedback i elementet formValideringResult.
*/

/* helper functions*/
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

/* eks på kald:
if (validateEmail("test@example.com")) {
  console.log("Valid email address");
} else {
  console.log("Invalid email address");
}
*/
