// variabler du skal bruge i din kode...
const A = 10;
const B = 30;
const C = '30';
const D = 10;
const E = 40;

// Opgave 1: skriv et expression der viser true når A er lig med B.

if (A == B) {
  console.log('statement true!');
}

//opgave 2: skrive en If then statement der vurderer om A er større end B.
// Løsning 1:
function isAgreaterThanB() {
  if (A > B) {
    result = true;
  } else {
    result = false;
  }
  return result;
}
// løsgning 2 + let a og b definering
let a = 10;
let b = 30;
let c = 20;
if (a > b) {
  console.log('statement true!');
} else {
  console.log('statement false!');
}

//opgave 3: Skriv en If then statement der vurderer om A er mindre end eller lig med B
if (A <= B) {
  console.log('statement true!');
} else {
  console.log('statement false!');
}

//opgave 4: Skriv en If then statement der bliver FALSE når du sammenligner B og C.
if (B == C) {
  console.log('statement true!');
} else {
  console.log('statement false!');
}

//opgave 5: Skriv en If then statement der bliver TRUE når du sammenligner B og C.
c = 30;
if (B == c) {
  console.log('statement true!');
} else {
  console.log('statement false!');
}
// ellers kan man vel også (hvis man ikke gider ændre værdierne på variablerne)
//  men nu stod der sammenlign så gik ud fra det ville være == eller ===
if (B < C) {
  console.log('statement true!');
} else {
  console.log('statement false!');
}

//opgave 6: Skriv en If then statement der sammenligner B = C og E = A hvis B=C skal den blive TRUE.
let e = 40;
if (B == C && E == A) {
  console.log('statement true!');
} else {
  console.log('statement false!');
}
