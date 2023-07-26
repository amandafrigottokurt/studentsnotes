const students = [
  {
    name: "Amanda",
    firstNote: 6,
    secondNote: 10,
  },
  {
    name: "Carolina",
    firstNote: 9,
    secondNote: 8,
  },
  {
    name: "Jhonatan",
    firstNote: 10,
    secondNote: 9,
  },
  {
    name: "Willian",
    firstNote: 2,
    secondNote: 7,
  },
]

function printStudentNote(student){
  return`
  A média do(a) aluno(a) ${student.name} é:
  ${((student.firstNote + student.secondNote) / 2).toFixed(2)}   
`
}

for (let student of students) {
  let noteMessage = printStudentNote(student)
  alert(noteMessage)
}


{ 
  if (printStudentNote >= 7) {
  alert("Parabéns, ${student.name}! Você foi aprovado(a) na matéria." )
}
else (printStudentNote < 7); {
  alert("Não foi dessa vez, ${student.name}! Tente novamente." )
}
}
