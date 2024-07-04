class landing {
    dataBase={}


//stoarge pattern
    // dataBase={
    //     "eldo@gmail.com":{name:"eldo",email:"eldo@gmail.com",password:"1234"}
    // }


    registerUser() {
        if(localStorage.getItem("userData")!=null)
            {
                this.getData()
            }
            let firstName=username.value;
            let email=exampleInputEmail1.value;
            let password=exampleInputPassword1.value;

            if(firstName !=='' && email !=='' && password !=='')
                {
                    if(email in this.dataBase){
                        alert(`${email} already exist`)
                    }
                    else{
                        this.dataBase[email]={
                            name:firstName,
                            email:email,
                            password:password
                        }
                        //save data
                        this.saveData();
                        alert("Registeration sucesss")
                        //method to navigate to new html page
                        window.location="index.html"
                    }

                    
                    
                }
                else
                {
                    alert('Please enter valid details')
                }
    }
    getData()
    {
        this.dataBase=JSON.parse(localStorage.getItem("userData"))
    }
    saveData(){
        localStorage.setItem("userData",JSON.stringify(this.dataBase))
    }
    //loggin html

    login(){
        let loggedEmail=userEmail.value;
        let loggedPassword=userPassword.value;
        this.getData();
        if(loggedEmail == '' || loggedPassword=='' )
            {
                alert("Please Enter the value")
            }
            else{
                // alert(`${loggedEmail},${loggedPassword}`)

                if(loggedEmail in this.dataBase)
                    {
                        if(this.dataBase[loggedEmail].password===loggedPassword)
                            {
                                // alert("Signed in!!!!!!!!!")
                                localStorage.setItem("firstname",this.dataBase[loggedEmail].name)
                                //used to print the name home html

                                window.location="home.html"
                            }else{
                                alert("Password mimatach")
                            }

                    }
                    else{
                        alert(`${loggedEmail} not found`)
                    }
            }
    }
}
const Obj=new landing()