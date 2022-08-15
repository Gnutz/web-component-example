import Template from './char-card-template.js'

class CharacterCard extends HTMLElement {
    

    getRandomId() {
         let id = Math.floor(Math.random() * 826); 
         console.log(id)
         return id
    }

    async populateWithCharacter(id){

        let character = await this.getCharacterById(id)


        let name = character["name"]
        let image = character["image"]
        let status = character["status"]
        let species = character["species"]
        let location = character["location"]["name"]


        let episodeUrl =  character["episode"][0]
        let firstEpisode = (await this.getEpisodeByUrl(episodeUrl))["name"];


        this.shadowRoot.innerHTML= Template.render({
            name: name,
            image: image,
            status: status,
            species: species,
            location: location,
            firstEpisode: firstEpisode
        }) 
    }
    
        async connectedCallback(){

            this.attachShadow({mode: 'open'})
            
            this.id = this.getAttribute("id");
            this.populateWithCharacter(this.id)
        
            this.addEventListener('click', event =>
                this.getRandomCharacter(event)); 
    }


    async getCharacterById(id){
        let result = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        let character =  await result.json()
        return character
    }

    async getRandomCharacter(){
        this.id = this.getRandomId()
        this.populateWithCharacter(this.id)
        
    }

    async getEpisodeById(id){
        let result = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        let episode =  await result.json()
        return episode

    }

    async getEpisodeByUrl(url){
        let result = await fetch(url)
        let episode =  await result.json()
        return episode

    }


}
if (!customElements.get('character-card')) {
    customElements.define('character-card', CharacterCard);
}