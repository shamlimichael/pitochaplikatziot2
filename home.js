const loginBtn = document.getElementById("log-in");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("pass");
const emailLink = loginBtn.closest("a");
const iconbutton = document.getElementById("icon");


loginBtn.addEventListener("click", function (e) 
{
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (email === "" || !correct_email(email)) 
    {
        e.preventDefault();
        emailInput.style.border = "1px solid red";
        emailInput.placeholder = "Enter your email";
    }
    if (!correct_password(password)) 
    {
        e.preventDefault();
        passwordInput.style.border = "1px solid red";
        passwordInput.placeholder = "Enter your password";
    }
});

emailInput.addEventListener("input", function ()
{
    emailInput.style.border = "";
    
});

passwordInput.addEventListener("input", function ()
{
    passwordInput.style.border = "";
});

function correct_email (email)
{
    let met = false;
    let ch_past = false;
    let dot_place = 0;
    for(i = 0; i < email.length; i++)
    {
        if(email[i] === '@' && i >= 3)
        {
            for(j = i; j < email.length; j++)
            {
                if(email[j] === '.' && j - i > 3)
                {
                    met = true; 
                    dot_place = j;
                }
                if(met && (email.length - dot_place >= 3 && email.length - dot_place <= 5))
                {
                    return true;
                }
            }
        }
    }
    return false;
}

function correct_password(password)
{
    if (password.length < 8)
        return false;
    if (!/[A-Z]/.test(password))
        return false;
    if (!/[a-z]/.test(password))
        return false;
    if (!/[0-9]/.test(password))
        return false;
    if (!/[!@#$%^&*]/.test(password)) 
        return false;

    return true;
}

const icon = document.querySelector("#icon img");

iconbutton.addEventListener("click", function()
{
    if (passwordInput.type === "password") 
    {
        passwordInput.type = "text";
        icon.src = "longahhproject/eye-light.svg";
        icon.style.width = "3.5rem";
        icon.style.length = "3.5rem";
    }
    else
    {
        passwordInput.type = "password";
        icon.src = "longahhproject/eye-slash-light.svg";
        icon.style.width = "2.5rem";
        icon.style.length = "2.5rem";
    }
});