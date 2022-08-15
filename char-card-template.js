export default {
    render(props) {
        return `${this.css(props)}
                ${this.html(props)}`;
    },
    html(p) {
        return `<div> <article class="characterCard__Wrapper-sc-1ejywvi-0 bEklxv">
        <div class="characterCard__ImgWrapper-sc-1ejywvi-1 fkUcVI"><img src="${p.image}"alt="${p.name}"></div>
        <div class="characterCard__ContentWrapper-sc-1ejywvi-2 isMAic">
           <div class="section">
              <a href="https://rickandmortyapi.com/api/character/291" rel="nofollow noopener noreferrer" target="_blank" class="externalLink__ExternalLink-sc-1lixk38-0 ffGNdR">
                 <h2>${p.name}</h2>
              </a>
              <span class="status"><span class="status__icon"></span> ${p.status} - ${p.species}</span>
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
     </div`
    },
    css(props){
        return `<style>
        .isMAic {
            flex: 3 1 0%;
            position: relative;
            padding: 0.75rem;
            color: rgb(255, 255, 255);
            display: flex;
            flex-direction: column;
        }
        
        .isMAic .section {
            -webkit-box-pack: start;
            justify-content: flex-start;
        }
        
        .isMAic .section {
            flex: 1 1 0%;
            display: flex;
            flex-direction: column;
            -webkit-box-pack: center;
            justify-content: center;
        }
        
        ::selection {
            color: rgb(255, 152, 0);
            background: rgb(32, 35, 41);
        }
        
        .isMAic a {
            color: rgb(245, 245, 245);
        }
        
        a {
            color: rgb(51, 51, 51);
        }
        
        .isMAic .status {
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            text-transform: capitalize;
        }
        
        .isMAic span {
            font-size: 16px;
            font-weight: 500;
        }
        
        .isMAic span,
        .isMAic h2 {
            margin: 0px;
            padding: 0px;
        }
        
        .isMAic .status__icon {
            height: 0.5rem;
            width: 0.5rem;
            margin-right: 0.375rem;
            background: rgb(85, 204, 68);
            border-radius: 50%;
        }
        
        a {
            background-color: transparent;
        }
        
        .isMAic a {
            color: rgb(245, 245, 245);
        }
        
        a {
            color: rgb(51, 51, 51);
        }
        
        a {
            color: #4078c0;
            text-decoration: none;
        }
        
        kUcVI {
            flex: 2 1 0%;
            width: 100%;
        }
        
        .bEklxv {
            width: 600px;
            height: 220px;
            display: flex;
            overflow: hidden;
            background: rgb(60, 62, 68);
            border-radius: 0.5rem;
            margin: 0.75rem;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
        }
        
        div {
            display: block;
        }
        
        * {
            box-sizing: inherit;
        }
        
        .isMAic .text-gray {
            color: rgb(158, 158, 158);
        }
        </style>`
    }
}