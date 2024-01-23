class Cardnews extends HTMLElement{
  constructor(){
    super();

    const shadow = this.attachShadow({mode: "open"});
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build(){
    const componentRoot = document.createElement("div");
    componentRoot.setAttribute("class","card");

    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class","card_lef");

    const autor = document.createElement("span");
    autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");

    const linktitle = document.createElement("a");
    linktitle.textContent = this.getAttribute("title");
    linktitle.href = this.getAttribute("link-url");

    const newsContent = document.createElement("p");
    newsContent.textContent = this.getAttribute("content");

    cardLeft.appendChild(autor);
    cardLeft.appendChild(linktitle);
    cardLeft.appendChild(newsContent);
    
    const cardRight = document.createElement("div");
    cardRight.setAttribute("class","card_right");

    const newsImage = document.createElement("img");
    newsImage.src = "assents/Darth-Vader.png" 

    cardRight.appendChild(newsImage);

    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    

    return componentRoot;
  }

styles(){
    const style = document.createElement("style");
    style.textContent = `
    
        .card{
          width: 80%;
          border: 1px solid gray;
          box-shadow: 9px 9px 27px 0px black;
          -webkit-box-shadow: 9px 9px 27px 0px black;
          -moz-box-shadow: 9px 9px 27px 0px black; 
          display: flex;
          flex-direction: row;
          justify-content: space-between;
        }

        .card_left{
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding-left: 10px;
        }

        .card_left> span{
        font-weight: 400;

        }

        .card_left > h1{
          margin-top: 25px;
          font-size: 25px;
        }
        .card_left>p{ 
        color: gray;
        }

    
    `;
    return style;
}

}
customElements.define("card-news", Cardnews);