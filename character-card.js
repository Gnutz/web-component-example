class CharacterCard extends HTMLElement {

    static baseEpisodeApi = "https://rickandmortyapi.com/api/episode/"
    
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
        let status = character["status"]
        let species = character["species"]
        let location = character["location"]["name"]

        let episodeUrl =  character["episode"][0]
        let firstEpisode = (await this.getEpisodeByUrl(episodeUrl))["name"];


        this.innerHTML =`<article class="characterCard__Wrapper-sc-1ejywvi-0 bEklxv">
        <div class="characterCard__ImgWrapper-sc-1ejywvi-1 fkUcVI"><img src="https://rickandmortyapi.com/api/character/avatar/291.jpeg" alt="${name}"></div>
        <div class="characterCard__ContentWrapper-sc-1ejywvi-2 isMAic">
           <div class="section">
              <a href="https://rickandmortyapi.com/api/character/291" rel="nofollow noopener noreferrer" target="_blank" class="externalLink__ExternalLink-sc-1lixk38-0 ffGNdR">
                 <h2>${name}</h2>
              </a>
              <span class="status"><span class="status__icon"></span> ${status} - ${species}</span>
           </div>
           <div class="section"><span class="text-gray">Last known location:</span>
           <a href="https://rickandmortyapi.com/api/location/3" rel="nofollow noopener noreferrer" target="_blank" class="externalLink__ExternalLink-sc-1lixk38-0 ffGNdR">
           ${location}
           </a>
           </div>
           <div class="section"><span class="text-gray">First seen in:</span><a href="https://rickandmortyapi.com/api/episode/28" rel="nofollow noopener noreferrer" target="_blank" class="externalLink__ExternalLink-sc-1lixk38-0 ffGNdR">
            ${firstEpisode}
           </a></div>
        </div>
     </article>`
     
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