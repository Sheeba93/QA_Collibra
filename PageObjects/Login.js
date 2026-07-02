class Login{

    constructor (page){
        this.page = page;
        this.EmailId = page.getByPlaceholder('Email address')
        this.Password = page.getByPlaceholder('Password')
        this.SignIn = page.getByRole('button' , {name: 'Sign In'})
        
    }

    async goto(){
        await this.page.goto(process.env.BASEURL)
    }

    async enterLoginCred(username,password){
        await this.EmailId.fill(username);
        await this.Password.fill(password);
    }
}

module.exports={Login}