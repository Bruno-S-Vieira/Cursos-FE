# Anotações CSS
***
## Simbolos  
https://erikasarti.com/html/dingbats-simbolos-desenhos/
## Cores
* Paletas de cores:

https://color.adobe.com/pt/create/color-wheel
https://paletton.com/#uid=1000u0kllllaFw0g0qFqFg0w0aF
https://coolors.co/734b5e-bcbdc0-565857-8a8d91-f5d3c8

* Inspirações:

Cedricpereira-inspiração de site
***
## Fontes

__Fontes Seguras:__ 

https://www.w3schools.com/cssref/css_websafe_fonts.php#:~:text=use%20fallback%20fonts!-,Arial%20(sans-serif),on%20all%20major%20operating%20systems.

Fontes bonitas: Courier New; Proxima Nova;<br>Pesquisar-><br>
Google Fonts<br>Dafont.com<br>Whatfontis<br>FontSquirrel

## Simplificação:<br>
style->weight->size->family <br> `font:italic normal 3em Courier New;`

 width->type->color<br>`border: 1px solid rgba(0, 0, 0, 0.7);`

shorthand background:  color-image-position-repeat-[size]-attachment  
ex:  
background: black url('imagens/wallpaper002.jpg') center center no-repeat fixed;  
background-size: cover;   (size n funcionando no shorhand atualmente)


 ## Comandos para lembrar:

box-shadow: 5px 5px 15px (cor); -> sombra  
text-indent: (tamanho)-> inicio de paragrafo.  
div:hover {background-color: (cor);} -> passar mouse.
border-radius: ()px;--> arredondar bordas.

listas com check:
ex:-->ul {
    list-style-type: '\2714\00A0\00A0';
    padding: 20px;
    list-style-position: inside;
    columns: 2;}

ajuste de vídeo: ex--
div.video {
    background-color: var(--cor4);
    margin-bottom: 30px;
    margin: 0px -20px 30px -20px;
    padding: 20px;
    padding-bottom: 56.5%;
    
    position: relative;
}
div.video > iframe {
    position: absolute;
    top: 5%;
    left: 5%;
    width: 90%;
    height: 90%;
}

Tabelas zebradas:   
tbody > tr:nth-child(2n) {
            background-color: rgb(218, 217, 217);
        }

background-size: cover; --> cobrir toda a viewport

Esconder a barra de scroll  
 ::-webkit-scrollbar {
            width: 0px;
            height: 0px;
        }






* box's: 
padding: (valor);

