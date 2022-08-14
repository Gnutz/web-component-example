class CharacterCard extends HTMLElement {
/* 
    static baseCharacerApi = "https://rickandmortyapi.com/api/character/"

    static baseEpisodeApi = "https://rickandmortyapi.com/api/episode/"
    
    static NUMBEROFCHARACTERS = 826 */

    
/* 
    getRandomId() {
        return Math.floor(Math.random() * NUMBEROFCHARACTERS + 1); 
    }

    static get observedAttributes(){
        return ['charId'];
    }

    attributeChangedCallback(name, oldVal, newVal){
        if (name === 'charId'){
            this.fetchCharacterById(newVal);
        }
    }

    set id(value){
        this.charId = value < NUMBEROFCHARACTERS ? value : NUMBEROFCHARACTERS;
    }

    set character(character){
        this.character
    } */

    connectedCallback(){

        /* id = this.getAttribute("charId");
        console.log("id") */

        let name = this.getAttribute("name");

        this.innerHTML =`<article class="characterCard__Wrapper-sc-1ejywvi-0 bEklxv">
        <div class="characterCard__ImgWrapper-sc-1ejywvi-1 fkUcVI"><img src="https://rickandmortyapi.com/api/character/avatar/291.jpeg" alt="${name}"></div>
        <div class="characterCard__ContentWrapper-sc-1ejywvi-2 isMAic">
           <div class="section">
              <a href="https://rickandmortyapi.com/api/character/291" rel="nofollow noopener noreferrer" target="_blank" class="externalLink__ExternalLink-sc-1lixk38-0 ffGNdR">
                 <h2>${name}<"/h2>
              </a>
              <span class="status"><span class="status__icon"></span> Alive - Human</span>
           </div>
           <div class="section"><span class="text-gray">Last known location:</span><a href="https://rickandmortyapi.com/api/location/3" rel="nofollow noopener noreferrer" target="_blank" class="externalLink__ExternalLink-sc-1lixk38-0 ffGNdR">Citadel of Ricks</a></div>
           <div class="section"><span class="text-gray">First seen in:</span><a href="https://rickandmortyapi.com/api/episode/28" rel="nofollow noopener noreferrer" target="_blank" class="externalLink__ExternalLink-sc-1lixk38-0 ffGNdR">The Ricklantis Mixup</a></div>
        </div>
     </article>`


/*      this.addEventListener('click', event =>
            this.fecthRandomCharacter(event)); */
    
    }

   /*  fecthRandomCharacter(){
        this.id = this.getRandomId();
    } */

}
if (!customElements.get('character-card')) {
    customElements.define('character-card', CharacterCard);
}