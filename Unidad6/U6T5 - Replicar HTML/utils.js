const div = generarDIV();
const article = generarArticle();
const img1 = generadorIMG(" ","cards__snap_image-aOud","lazy","https://baul.mediaset.es/dist/assets/guides/img_guide.png?w=1024","https://baul.mediaset.es/dist/assets/guides/img_guide.png?w=1024 1024w,https://baul.mediaset.es/dist/assets/guides/img_guide.png?w=800   800w,https://baul.mediaset.es/dist/assets/guides/img_guide.png?w=768   768w,https://baul.mediaset.es/dist/assets/guides/img_guide.png?w=640   640w,https://baul.mediaset.es/dist/assets/guides/img_guide.png?w=600   600w,https://baul.mediaset.es/dist/assets/guides/img_guide.png?w=480   480w,https://baul.mediaset.es/dist/assets/guides/img_guide.png?w=360   360w,ttps://baul.mediaset.es/dist/assets/guides/img_guide.png?w=320   320w","(min-width: 960px) 502px, (min-width: 768px) 50vw, 100vw"," ","true")
const div2Article = generarDIV();
const figure = generadorFigure();
const divfigure1 = generarDIV();
const divSpan = generarDIV();
const span = generadorSpan();
const enlace = generarEnlace("https://www.telecinco.es/la-isla-de-las-tentaciones/galla-desvela-punto-relacion-miguel-hoyos_18_3268924939.html","cards__link-1oHn","_self");
const img2 = generadorIMG(" ","cards__image-24d0","lazy","https://album.mediaset.es/eimg/10000/2022/01/18/clipping_a8lSPY_2e98.jpg?w=1024","https://album.mediaset.es/eimg/10000/2022/01/18/clipping_a8lSPY_2e98.jpg?w=1024 1024w,https://album.mediaset.es/eimg/10000/2022/01/18/clipping_a8lSPY_2e98.jpg?w=800   800w,https://album.mediaset.es/eimg/10000/2022/01/18/clipping_a8lSPY_2e98.jpg?w=768   768w,https://album.mediaset.es/eimg/10000/2022/01/18/clipping_a8lSPY_2e98.jpg?w=640   640w,https://album.mediaset.es/eimg/10000/2022/01/18/clipping_a8lSPY_2e98.jpg?w=600   600w,https://album.mediaset.es/eimg/10000/2022/01/18/clipping_a8lSPY_2e98.jpg?w=480   480w,https://album.mediaset.es/eimg/10000/2022/01/18/clipping_a8lSPY_2e98.jpg?w=360   360w,https://album.mediaset.es/eimg/10000/2022/01/18/clipping_a8lSPY_2e98.jpg?w=320   320w","(min-width: 960px) 245px, (min-width: 768px) 50vw, 100vw","Gal·la desvela en qué punto se encuentra con Miguel de Hoyos",true)
const div2 = generarDIV();
const div3 = generarDIV();
const enlace2 = generarEnlace("color_eta","https://www.telecinco.es/la-isla-de-las-tentaciones/galla-desvela-punto-relacion-miguel-hoyos_18_3268924939.html","_self");
const h3 = generarH3();

window.addEventListener("load",()=>{
    const container = document.createElement("div");
    document.body.appendChild(container)
    container.className= "grid__column_space1of4-3Auw grid__column-2zuc";
    container.appendChild(div).className="grid__card-1AMl grid__is_not_ad-3CXE";
    div.appendChild(article).className="cards__postcard-37d3 cards__postcardLandscape-3RIF cards__font_landscape_single_text_below_4_col-7iX7 cards__columns-4-YOiO background_color_zeta cards__no_has_section-3wNM";
    article.appendChild(generarDIV());
    article.firstChild.appendChild(img1);
    article.appendChild(div2Article).className="cards__postcard__content-1w21";
    div2Article.appendChild(figure).className="cards__postcard__cnt_media-1R9F";
    figure.appendChild(divfigure1).className="cards__cnt_coin-2H_i";
    divfigure1.appendChild(span).className="cards__postcard__channel-1-fM coin_undefined";
    divfigure1.appendChild(generarDIV());
    divfigure1.appendChild(enlace)
    enlace.appendChild(img2)
    article.appendChild(div2).className="cards__postcard__cnt_info-21bV";
    div2.appendChild(generarDIV()).className="sponsor__content-3-Ul sponsor__typeH-3Hjq sponsor__imgBand-2XTv"
    div2.appendChild(div3).setAttribute("data-agth","cardTitle")
    div3.appendChild(enlace);
    enlace.appendChild(h3);


},false);

function generadorIMG(class1,class2,class3,class4,class5,class6,class7,class8) {
    const img = document.createElement("img");
    img.setAttribute("title",class1)
    img.setAttribute("class",class2)
    img.setAttribute("loading",class3)
    img.setAttribute("src",class4)
    img.setAttribute("scrset",class5)
    img.setAttribute("sizes",class6)
    img.setAttribute("alt",class7)
    img.setAttribute("pinger-seen",class8)
    return img;
}

function generarEnlace(class1,class2,class3) {
    const enlace = document.createElement("a");
    enlace.setAttribute("href",class1);
    enlace.setAttribute("class",class2);
    enlace.setAttribute("target",class3);
    return enlace;
}

function generadorSpan() {
    const span = document.createElement("span");
    return span;
}

function generadorFigure() {
    const figure = document.createElement("figure");
    return figure;
}

function generarDIV() {
    const div = document.createElement("div");
    return div;
}

function generarArticle() {
    const article = document.createElement("article");
    return article;
}

function generarH3() {
    const h3 = document.createElement("h3");
    h3.innerHTML =  "<!-- -->Gal·la desvela en qué punto se encuentra su relación con Miguel tras su rechazo en 'La isla de las tentaciones'<!-- -->"
    return h3;
}