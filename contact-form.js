const form = document.getElementById('form')
const clientName = document.getElementById('client-name')
const clientLocation = document.getElementById('client-location')
const clientEmail = document.getElementById('exampleInputEmail1')
const nameError = document.getElementById('name-error')
const locationError = document.getElementById('location-error')
const emailError = document.getElementById('email-error')


form.addEventListener('submit', (e) => {
    let nameProblems = []
    let emailProblems = []

    if(clientName.value === null || clientName.value == ' '){
        nameProblems.push("Name is required!")
    }
    if(nameProblems.length > 0 || emailProblems >0){
        e.preventDefault()
        nameError.innerText = nameProblems.join(',')
    }
})
