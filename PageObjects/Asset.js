class Asset{

    constructor(page){
        this.page = page
        //this.CreateButton = page.getByRole('button' , {name : 'Create'})
        this.assetInputField = page.getByPlaceholder('Email address')
    }

    async AssetCreation(assetName){
        await this.assetInputField.fill(assetName)
       // await this.CreateButton.click()
    }

}

module.exports = {Asset}