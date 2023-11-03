let btn = document.querySelector('.btn');
let frist_name = document.querySelector('.frist_name');
let last_name = document.querySelector('.last_name');
let email = document.querySelector('.email');
let pass = document.querySelector('.pass');
let con_pass = document.querySelector('.con_pass');




let arr_name1 = document.querySelector(".arr_f_name");
let arr_name2 = document.querySelector(".arr_l_name");
let arr_email = document.querySelector(".arr_email");
let arr_pass = document.querySelector(".arr_pass");
let arr_con_pass = document.querySelector(".arr_con_pass");




let validate_email = RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

let validate_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/




btn.addEventListener('click', (event)=>{
    event.preventDefault()

    if(!frist_name.value){
        arr_name1.innerHTML = "Enter Your Frist Name"
    }else{
        arr_name1.innerHTML = ""
    }


    if(!last_name.value){
        arr_name2.innerHTML = "Enter Your Last Name"
    }else{
        arr_name2.innerHTML = ""
    }


    if(!email.value){
        arr_email.innerHTML = "Enter Your Email"
    }
    else{
        if(email.value.match(validate_email)){
            arr_email.innerHTML = ""
        }else{
            arr_email.innerHTML = "formate not ok"
        }
    }


    if(!pass.value){
        arr_pass.innerHTML = "Enter Your Password"
    }else{
        if(pass.value.match(validate_password)){
            arr_pass.innerHTML = ""
        }else{
            arr_pass.innerHTML = "week password"
        }
    }

    
    if(!con_pass.value){
        arr_con_pass.innerHTML = "Enter Your Confirm Password"
    }else{
        if(pass.value == con_pass.value){
            arr_con_pass.innerHTML = ""
        }else{
            arr_con_pass.innerHTML = "Not Match Confirm Password"
        }
    }
})
