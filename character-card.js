import Template from './char-card-template.js'

class CharacterCard extends HTMLElement {
    
    static NUMBEROFCHARACTERS = 826

    
    getRandomId() {
        return Math.floor(Math.random() * NUMBEROFCHARACTERS + 1); 
    }

    static get observedAttributes(){
        return ['id'];
    }

    attributeChangedCallback(name, oldVal, newVal){
        if (name === 'id'){
          //rerender
        }
    }

    set id(value){
        this.id = value < NUMBEROFCHARACTERS ? value : NUMBEROFCHARACTERS;
    }

    
    async connectedCallback(){

        let id = this.getAttribute("id");
        let character = await this.getCharacterById(id)


        let name = character["name"]
        let image = character["image"]
        let status = character["status"]
        let species = character["species"]
        let location = character["location"]["name"]


        let episodeUrl =  character["episode"][0]
        let firstEpisode = (await this.getEpisodeByUrl(episodeUrl))["name"];


        this.innerHTML = Template.render({
            name: name,
            image: image,
            status: status,
            species: species,
            location: location,
            firstEpisode: firstEpisode
        })
/* 
        this.addEventListener('click', event =>
            this.getRandomCharacter(event)); */
     
    }


    async getCharacterById(id){
        let result = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        let character =  await result.json()
        return character
    }

    async getRandomCharacter(){
        let id = this.getRandomId()
        return await this.getCharacterById(id)
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