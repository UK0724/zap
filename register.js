function getData()
{
    var Name = document.getElementById('name').value
    var Email = document.getElementById('email').value
    var password = document.getElementById('password').value
    user = {
        Name : Name,
        email : Email,
        Password : password
    }

    localStorage.setItem('Name',Name)
    localStorage.setItem('email',Email)
    localStorage.setItem('password',password)

    var Error_Case_Name = document.getElementById('error-case-name')
    var Error_Case_Email = document.getElementById('error-case-email')
    var Error_Case_Pass = document.getElementById('error-case-pass')
    if (Name=="" )
    {
        Error_Case_Name.innerText = "Enter The Details"
        Error_Case_Email.innerText =""
        Error_Case_Pass.innerText =""
    }
    else if ( Email=="" )
    {
        Error_Case_Email.innerText = "Enter The Details"
        Error_Case_Name.innerText = ""
        Error_Case_Pass.innerText =""
    }
    else if(password =="" )
    {
        Error_Case_Pass.innerText = "Enter The Details"
        Error_Case_Name.innerText = ""
        Error_Case_Email.innerText =""
        
    }
    else{
        document.getElementById('name').value = " ";
        document.getElementById('email').value = " ";
        document.getElementById('password').value = " ";
        window.location.href = 'login.html';
    }
}
function userLogin()
{
    var Error_Case_Email = document.getElementById('error-case-email')
    var Error_Case_Pass = document.getElementById('error-case-pass')
    let Email = localStorage.getItem('email')
    let password = localStorage.getItem('password')
    // console.log(Email,password);
    let useremail = document.getElementById('email').value
    let userpass = document.getElementById('password').value
    // console.log(useremail)

    if (useremail == "")
    {
        Error_Case_Email.innerText = "Email Should Not Be Empty"
    }
    else if (Email != useremail)
    {
        Error_Case_Email.innerText = 'Email incorrect'
    }
    else if(userpass == "")
    {
        Error_Case_Pass.innerText = "Email Should Not Be Empty"
    }
    else if(password != userpass)
    {
        Error_Case_Pass.innerText = 'Password incorrect'
    }
    else if(Email == useremail && password == userpass)
    {
        window.location.href = 'menu.html'
    }

}