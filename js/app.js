const password = document.getElementById('password')
const cpassword = document.getElementById('cpassword')
const btn = document.getElementById('btn')
const error = document.getElementById('error')
const lname = document.getElementById('lname')

btn.addEventListener('click', () => {
    if(password.value < 10){
        password.style.border = '1px solid red'
        error.innerHTML = "error"
    }
    if(password.value < 10){
        lname.style.border = '1px solid blue'
        error.innerHTML = "error"
    }
})
