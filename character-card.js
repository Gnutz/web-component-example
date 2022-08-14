/* class PhotoCarousel extends HTMLElement {
    connectedCallback() {
        this._photoIndex = 0;
        this._photos = this.getAttribute('photos').split(',');
        this.innerHTML = '<h2>' + this.getAttribute('title') + '</h2>' +
            '<h4>by ' + this.getAttribute('author') + '</h4>' +
            '<div class="image-container"></div>' +
            '<button class="back">&lt</button>' +
            '<button class="forward">&gt</button>';

        this.showPhoto();

        this.querySelector('button.back').addEventListener('click', event =>
            this.onBackButtonClick(event));
        this.querySelector('button.forward').addEventListener('click', event =>
            this.onForwardButtonClick(event));
    }

    showPhoto() {
        this.querySelector('.image-container').style.backgroundImage = 'url(' +
            this._photos[this._photoIndex] + ')'
    }


    onBackButtonClick(event) {
        this._photoIndex--;
        if (this._photoIndex < 0) {
            this._photoIndex = this._photos.length - 1;
        }
        this.showPhoto();
    }
    
    
    onForwardButtonClick(event) {
        this._photoIndex++;
        if (this._photoIndex >= this._photos.length) {
            this._photoIndex = 0;
        }
        this.showPhoto();
    }
}
if (!customElements.get('afe-photo-carousel')) {
    customElements.define('afe-photo-carousel', PhotoCarousel);
}


`<article class="characterCard__Wrapper-sc-1ejywvi-0 bEklxv">
<div class="characterCard__ImgWrapper-sc-1ejywvi-1 fkUcVI"><img src="https://rickandmortyapi.com/api/character/avatar/813.jpeg" alt="Crow Horse"></div>
<div class="characterCard__ContentWrapper-sc-1ejywvi-2 isMAic">
   <div class="section">
      <a href="https://rickandmortyapi.com/api/character/813" rel="nofollow noopener noreferrer" target="_blank" class="externalLink__ExternalLink-sc-1lixk38-0 ffGNdR">
         <h2>Crow Horse</h2>
      </a>
      <span class="status"><span class="status__icon"></span> Alive - Robot</span>
   </div>
   <div class="section"><span class="text-gray">Last known location:</span><a href="https://rickandmortyapi.com/api/location/20" rel="nofollow noopener noreferrer" target="_blank" class="externalLink__ExternalLink-sc-1lixk38-0 ffGNdR">Earth (Replacement Dimension)</a></div>
   <div class="section"><span class="text-gray">First seen in:</span><a href="https://rickandmortyapi.com/api/episode/51" rel="nofollow noopener noreferrer" target="_blank" class="externalLink__ExternalLink-sc-1lixk38-0 ffGNdR">Rickmurai Jack</a></div>
</div>
</article>`

 */
class CharacterCard extends HTMLElement {

    static baseCharacerApi = "https://rickandmortyapi.com/api/character/"

    static baseEpisodeApi = "https://rickandmortyapi.com/api/episode/"
    
    static NUMBEROFCHARACTERS = 826

    

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
    }

    connectedCallback(){

        /* id = this.getAttribute("charId");
        console.log("id") */

        let character = JSON.parse('{"id":2,"name":"Morty Smith","status":"Alive","species":"Human","type":"","gender":"Male","origin":{"name":"unknown","url":""},"location":{"name":"Citadel of Ricks","url":"https://rickandmortyapi.com/api/location/3"},"image":"https://rickandmortyapi.com/api/character/avatar/2.jpeg","episode":["https://rickandmortyapi.com/api/episode/1","https://rickandmortyapi.com/api/episode/2","https://rickandmortyapi.com/api/episode/3","https://rickandmortyapi.com/api/episode/4","https://rickandmortyapi.com/api/episode/5","https://rickandmortyapi.com/api/episode/6","https://rickandmortyapi.com/api/episode/7","https://rickandmortyapi.com/api/episode/8","https://rickandmortyapi.com/api/episode/9","https://rickandmortyapi.com/api/episode/10","https://rickandmortyapi.com/api/episode/11","https://rickandmortyapi.com/api/episode/12","https://rickandmortyapi.com/api/episode/13","https://rickandmortyapi.com/api/episode/14","https://rickandmortyapi.com/api/episode/15","https://rickandmortyapi.com/api/episode/16","https://rickandmortyapi.com/api/episode/17","https://rickandmortyapi.com/api/episode/18","https://rickandmortyapi.com/api/episode/19","https://rickandmortyapi.com/api/episode/20","https://rickandmortyapi.com/api/episode/21","https://rickandmortyapi.com/api/episode/22","https://rickandmortyapi.com/api/episode/23","https://rickandmortyapi.com/api/episode/24","https://rickandmortyapi.com/api/episode/25","https://rickandmortyapi.com/api/episode/26","https://rickandmortyapi.com/api/episode/27","https://rickandmortyapi.com/api/episode/28","https://rickandmortyapi.com/api/episode/29","https://rickandmortyapi.com/api/episode/30","https://rickandmortyapi.com/api/episode/31","https://rickandmortyapi.com/api/episode/32","https://rickandmortyapi.com/api/episode/33","https://rickandmortyapi.com/api/episode/34","https://rickandmortyapi.com/api/episode/35","https://rickandmortyapi.com/api/episode/36","https://rickandmortyapi.com/api/episode/37","https://rickandmortyapi.com/api/episode/38","https://rickandmortyapi.com/api/episode/39","https://rickandmortyapi.com/api/episode/40","https://rickandmortyapi.com/api/episode/41","https://rickandmortyapi.com/api/episode/42","https://rickandmortyapi.com/api/episode/43","https://rickandmortyapi.com/api/episode/44","https://rickandmortyapi.com/api/episode/45","https://rickandmortyapi.com/api/episode/46","https://rickandmortyapi.com/api/episode/47","https://rickandmortyapi.com/api/episode/48","https://rickandmortyapi.com/api/episode/49","https://rickandmortyapi.com/api/episode/50","https://rickandmortyapi.com/api/episode/51"],"url":"https://rickandmortyapi.com/api/character/2","created":"2017-11-04T18:50:21.651Z"}')
        console.loq(`id: ${character.id}, ${character.name}`)
       /*  this.character.name = "Crow"  */


        this.innerHTML =`<article class="characterCard__Wrapp
        er-sc-1ejywvi-0 bEklxv">
        <div class="characterCard__ImgWrapper-sc-1ejywvi-1 fkUcVI"><img
              src="https://rickandmor   tyapi.com/api/character/avatar/813.jpeg" alt=${this.character.name}></div>
        <div class="characterCard__ContentWrapper-sc-1ejywvi-2 isMAic">
           <div class="section">
              <h2>${this.character.name}</h2>
              <span class="status"><span class="status__icon"></span></span>
           </div>
           <div class="section"><span class="text-gray">Last known location:</span><a
                 href="https://rickandmortyapi.com/api/location/20" rel="nofollow noopener noreferrer" target="_blank"
                 class="externalLink__ExternalLink-sc-1lixk38-0 ffGNdR"> a></div>
           <div class="section"><span class="text-gray">First seen in episode:</span> rel="nofollow noopener noreferrer" target="_blank"
                 class="externalLink__ExternalLink-sc-1lixk38-0 ffGNdR"></a></div>
        </div>
     </article>`


     this.addEventListener('click', event =>
            this.fecthRandomCharacter(event));
    
    }

    fecthRandomCharacter(){
        this.id = this.getRandomId();
    }


    fetchCharacterById(id){
        this.character = JSON.parse('{"id":2,"name":"Morty Smith","status":"Alive","species":"Human","type":"","gender":"Male","origin":{"name":"unknown","url":""},"location":{"name":"Citadel of Ricks","url":"https://rickandmortyapi.com/api/location/3"},"image":"https://rickandmortyapi.com/api/character/avatar/2.jpeg","episode":["https://rickandmortyapi.com/api/episode/1","https://rickandmortyapi.com/api/episode/2","https://rickandmortyapi.com/api/episode/3","https://rickandmortyapi.com/api/episode/4","https://rickandmortyapi.com/api/episode/5","https://rickandmortyapi.com/api/episode/6","https://rickandmortyapi.com/api/episode/7","https://rickandmortyapi.com/api/episode/8","https://rickandmortyapi.com/api/episode/9","https://rickandmortyapi.com/api/episode/10","https://rickandmortyapi.com/api/episode/11","https://rickandmortyapi.com/api/episode/12","https://rickandmortyapi.com/api/episode/13","https://rickandmortyapi.com/api/episode/14","https://rickandmortyapi.com/api/episode/15","https://rickandmortyapi.com/api/episode/16","https://rickandmortyapi.com/api/episode/17","https://rickandmortyapi.com/api/episode/18","https://rickandmortyapi.com/api/episode/19","https://rickandmortyapi.com/api/episode/20","https://rickandmortyapi.com/api/episode/21","https://rickandmortyapi.com/api/episode/22","https://rickandmortyapi.com/api/episode/23","https://rickandmortyapi.com/api/episode/24","https://rickandmortyapi.com/api/episode/25","https://rickandmortyapi.com/api/episode/26","https://rickandmortyapi.com/api/episode/27","https://rickandmortyapi.com/api/episode/28","https://rickandmortyapi.com/api/episode/29","https://rickandmortyapi.com/api/episode/30","https://rickandmortyapi.com/api/episode/31","https://rickandmortyapi.com/api/episode/32","https://rickandmortyapi.com/api/episode/33","https://rickandmortyapi.com/api/episode/34","https://rickandmortyapi.com/api/episode/35","https://rickandmortyapi.com/api/episode/36","https://rickandmortyapi.com/api/episode/37","https://rickandmortyapi.com/api/episode/38","https://rickandmortyapi.com/api/episode/39","https://rickandmortyapi.com/api/episode/40","https://rickandmortyapi.com/api/episode/41","https://rickandmortyapi.com/api/episode/42","https://rickandmortyapi.com/api/episode/43","https://rickandmortyapi.com/api/episode/44","https://rickandmortyapi.com/api/episode/45","https://rickandmortyapi.com/api/episode/46","https://rickandmortyapi.com/api/episode/47","https://rickandmortyapi.com/api/episode/48","https://rickandmortyapi.com/api/episode/49","https://rickandmortyapi.com/api/episode/50","https://rickandmortyapi.com/api/episode/51"],"url":"https://rickandmortyapi.com/api/character/2","created":"2017-11-04T18:50:21.651Z"}')
    }

}
if (!customElements.get('character-card')) {
    customElements.define('character-card', CharacterCard);
}