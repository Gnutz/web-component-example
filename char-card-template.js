export default {
    render(props) {
        return `${this.html(props)}
                ${this.css(props)}`;
    },
    html(p) {
        return `<div> <article class="characterCard__Wrapper-sc-1ejywvi-0 bEklxv">
        <div class="characterCard__ImgWrapper-sc-1ejywvi-1 fkUcVI"><img src="https://rickandmortyapi.com/api/character/avatar/291.jpeg" alt="${p.name}"></div>
        <div class="characterCard__ContentWrapper-sc-1ejywvi-2 isMAic">
           <div class="section">
              <a href="https://rickandmortyapi.com/api/character/291" rel="nofollow noopener noreferrer" target="_blank" class="externalLink__ExternalLink-sc-1lixk38-0 ffGNdR">
                 <h2>${p.name}</h2>
              </a>
              <span class="status"><span class="status__icon"></span> ${p.status} - ${p.pecies}</span>
           </div>
           <div class="section"><span class="text-gray">Last known location:</span>
           <a href="https://rickandmortyapi.com/api/location/3" rel="nofollow noopener noreferrer" target="_blank" class="externalLink__ExternalLink-sc-1lixk38-0 ffGNdR">
           ${p.location}
           </a>
           </div>
           <div class="section"><span class="text-gray">First seen in:</span><a href="https://rickandmortyapi.com/api/episode/28" rel="nofollow noopener noreferrer" target="_blank" class="externalLink__ExternalLink-sc-1lixk38-0 ffGNdR">
            ${p.firstEpisode}
           </a></div>
        </div>
     </article>
     <style></style>
     </div`
    },
    css(props){
        return ``
    }
}