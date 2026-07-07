class Login{

    constructor (page){
        // Initialize the Login page object with the current Playwright page instance.
        this.page = page;
        this.EmailId = page.getByPlaceholder('Emailaddress')
        this.Password = page.getByPlaceholder('Password')
        this.SignIn = page.getByRole('button' , {name: 'Sign In'})
    }

    async goto(){
        // Navigate to the login page using the configured BASEURL environment variable.
        await this.page.goto(process.env.BASEURL)
    }

    async enterLoginCred(username,password){
        // Fill the username and password fields with provided credentials.
        await this.EmailId.fill(username);
        await this.Password.fill(password);
    }
}

module.exports={Login}