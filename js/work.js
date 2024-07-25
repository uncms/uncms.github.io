let portfolioDatas = [];
let urlSearch = null;
let portfolioID = 0;

window.addEventListener("load", function () {
    portfolioDatas = [];
    portfolioDatas = JSON.parse(JSON.stringify(portfolio));

    urlSearch = new URLSearchParams(location.search);
    portfolioID = parseInt(urlSearch.get("id"));
    
    if(portfolioID >= 0 && portfolioID <= portfolioDatas.length){
    }else{
        portfolioID = 0;
    }
    
    this.document.title = "언커먼즈 포트폴리오 - " + portfolioDatas[portfolioID].ko;
    this.document.querySelector('meta[property="og:title"]').setAttribute("content", "언커먼즈 포트폴리오 - " + portfolioDatas[portfolioID].ko);

    generateWork(portfolioDatas[portfolioID]);
});

const workTitle = document.querySelector(".work-title");
const workTitleSub = document.querySelector(".work-title-sub");
const workDesc = document.querySelector(".work-desc");

const imgWrapper = document.querySelector(".img-wrapper");

function generateWork(_obj){
    workTitle.innerHTML = _obj.ko + "<span>.</span>";
    workTitleSub.innerHTML = _obj.sub;
    workDesc.innerHTML = _obj.desc1 + "<br><br>" + _obj.desc2;

    for(let i = 0; i < _obj.img; i++){
        let el_img = document.createElement("img");
        el_img.src = "img/portfolio/" + _obj.en + "_" + (i+1) + ".jpg";
        el_img.alt = _obj.ko;

        imgWrapper.appendChild(el_img);
    }
}

AOS.init({
    offset: 0,
    duration: 1500,
    once: true,
    anchorPlacement: "top-bottom",
});