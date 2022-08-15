class CharacterCard extends HTMLElement {
/* 
    static baseCharacerApi = "https://rickandmortyapi.com/api/character/"

    static baseEpisodeApi = "https://rickandmortyapi.com/api/episode/"
    
    static NUMBEROFCHARACTERS = 826 */

    
    getRandomId() {
        return Math.floor(Math.random() * NUMBEROFCHARACTERS + 1); 
    }

    static get observedAttributes(){
        return ['id'];
    }

    attributeChangedCallback(name, oldVal, newVal){
        if (name === 'id'){
          
        }
    }

    set id(value){
        this.id = value < NUMBEROFCHARACTERS ? value : NUMBEROFCHARACTERS;
    }

    
    connectedCallback(){

        let name = this.getAttribute("id");

        let character=  JSON.parse(`{
            "id": 25,
            "name": "Armothy",
            "status": "Dead",
            "species": "unknown",
            "type": "Self-aware arm",
            "gender": "Male",
            "origin": {
            "name": "Post-Apocalyptic Earth",
            "url": "https://rickandmortyapi.com/api/location/8"
            },
            "location": {
            "name": "Post-Apocalyptic Earth",
            "url": "https://rickandmortyapi.com/api/location/8"
            },
            "image": "https://rickandmortyapi.com/api/character/avatar/25.jpeg",
            "episode": [
            "https://rickandmortyapi.com/api/episode/23"
            ],
            "url": "https://rickandmortyapi.com/api/character/25",
            "created": "2017-11-05T08:54:29.343Z"
            }`)


        this.innerHTML =`<article class="characterCard__Wrapper-sc-1ejywvi-0 bEklxv">
        <div class="characterCard__ImgWrapper-sc-1ejywvi-1 fkUcVI"><img src="https://rickandmortyapi.com/api/character/avatar/291.jpeg" alt="${character["name"]}"></div>
        <div class="characterCard__ContentWrapper-sc-1ejywvi-2 isMAic">
           <div class="section">
              <a href="https://rickandmortyapi.com/api/character/291" rel="nofollow noopener noreferrer" target="_blank" class="externalLink__ExternalLink-sc-1lixk38-0 ffGNdR">
                 <h2>${character["name"]}</h2>
              </a>
              <span class="status"><span class="status__icon"></span> ${character["status"]} - Human</span>
           </div>
           <div class="section"><span class="text-gray">Last known location:</span><a href="https://rickandmortyapi.com/api/location/3" rel="nofollow noopener noreferrer" target="_blank" class="externalLink__ExternalLink-sc-1lixk38-0 ffGNdR">Citadel of Ricks</a></div>
           <div class="section"><span class="text-gray">First seen in:</span><a href="https://rickandmortyapi.com/api/episode/28" rel="nofollow noopener noreferrer" target="_blank" class="externalLink__ExternalLink-sc-1lixk38-0 ffGNdR">The Ricklantis Mixup</a></div>
        </div>
     </article>`


    }


}
if (!customElements.get('character-card')) {
    customElements.define('character-card', CharacterCard);
}