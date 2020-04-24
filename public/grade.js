const grades = document.querySelectorAll('.grade')

for (grade of grades) {
  if (grade.textContent == "5EF") {
    grade.textContent = "5º Ano do Ensino Fundamental"
  } else if (grade.textContent == "6EF") {
    grade.textContent = "6º Ano do Ensino Fundamental"
  } else if (grade.textContent == "7EF") {
    grade.textContent = "7º Ano do Ensino Fundamental"
  } else if (grade.textContent == "8EF") {
    grade.textContent = "8º Ano do Ensino Fundamental"
  } else if (grade.textContent == "9EF") {
    grade.textContent = "9º Ano do Ensino Fundamental"
  } else if (grade.textContent == "1EM") {
    grade.textContent = "1º Ano do Ensino Médio"
  } else if (grade.textContent == "2EM") {
    grade.textContent = "2º Ano do Ensino Médio"
  } else if (grade.textContent == "3EM") {
    grade.textContent = "3º Ano do Ensino Médio"
  }
}