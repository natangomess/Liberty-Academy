module.exports = {
  age(timestamp) {
    const today = new Date()
    const birthDate = new Date(timestamp)

    let age = today.getFullYear() - birthDate.getFullYear()
    const month = today.getMonth() - birthDate.getMonth()

    if (month < 0 || month == 0 && today.getDate() < birthDate.getDate()) {
      age = age - 1
    }

    return age
  },

  date(timestamp) {
    const date = new Date(timestamp)
    const year = date.getUTCFullYear()
    const month = `0${date.getUTCMonth() + 1}`.slice(-2)
    const day = `0${date.getUTCDate()}`.slice(-2)

    return {
      day,
      month,
      year,
      iso: `${year}-${month}-${day}`,
      birthDay: `${day}/${month}`,
      format: `${day}/${month}/${year}`
    }
  },

  graduation(graduation) {
    if (graduation == "EMC") {
      graduation = "Ensino Médio Completo"
    } else if (graduation == "ESC") {
      graduation = "Ensino Superior Completo"
    } else if (graduation == "M") {
      graduation = "Mestrado"
    } else if (graduation == "D") {
      graduation = "Doutorado"
    }
    return graduation
  },

  grade(grade) {
    if (grade == "5EF") {
      grade = "5º Ano do Ensino Fundamental"
    } else if (grade == "6EF") {
      grade = "6º Ano do Ensino Fundamental"
    } else if (grade == "7EF") {
      grade = "7º Ano do Ensino Fundamental"
    } else if (grade == "8EF") {
      grade = "8º Ano do Ensino Fundamental"
    } else if (grade == "9EF") {
      grade = "9º Ano do Ensino Fundamental"
    } else if (grade == "1EM") {
      grade = "1º Ano do Ensino Médio"
    } else if (grade == "2EM") {
      grade = "2º Ano do Ensino Médio"
    } else if (grade == "3EM") {
      grade = "3º Ano do Ensino Médio"
    }

    return grade
  }
}