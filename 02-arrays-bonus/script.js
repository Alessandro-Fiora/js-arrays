const teachers = ["Nathan", "Ed", "Fabio", "Phil", "Carlo", "Lewis", "Luca"]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers

// ^ SOLUZIONE MIGLIORE, SENZA CICLO
const reversedTeachers = teachers.toReversed();
console.log(teachers, reversedTeachers);

// ^ SOLUZIONE CON CICLO, COME RICHIESTO DA TIZIANO
const reversedTeachersWithCycle = [];

for (i = 0; i < teachers.length; i++) {
  let currentTeacher = teachers[i];
  reversedTeachersWithCycle.unshift(currentTeacher);

  // ^ SOLUZIONE ALTERNATIVA
  // reversedTeachersWithCycle[i] = teachers[teachers.length - i - 1];
}
console.log(teachers, reversedTeachersWithCycle);

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri

let longNames = [];
for (i = 0; i < teachers.length; i++) {
  currentTeacher = teachers[i];

  if (currentTeacher.length >= 5) {
    longNames.push(currentTeacher);
  }
}
console.log(teachers, longNames);

// 3. Rimuovi 'Ed' dall'array teachers

// ^ CONTROLLO PRIMA DI TUTTO CHE SIA PRESENTE NELL'ARRAY L'ELEMENTO CHE VOGLIO ELIMINARE, DOPODICHE' LO ELIMINO

const teacherToDelete = "Ed";

//* IL CONTROLLO RITORNA 0 (-1 (RISULTATO DI INDEXOF) +1) SE NON TROVA L'INSEGNANTE NELLA LISTA,
//* ALTRIMENTI UN NUMERO INTERO POSITIVO (INDICE + 1 (PER EVITARE CHE RITORNI 0)), USO QUESTO OUTPUT COME VALORE BOOLEANO
let isTeacherPresent = teachers.indexOf(teacherToDelete) + 1;

if (isTeacherPresent) {
  console.log(teachers);
  teachers.splice(teachers.indexOf(teacherToDelete), 1);
  console.log(teachers);
} else {
  console.log("L'insegnante non è presente nella lista");
}
