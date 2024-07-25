const elWorks = document.querySelector(".works");

let portfolioDatas = [];

window.addEventListener("load", function(){
    portfolioDatas = [];
    portfolioDatas = JSON.parse(JSON.stringify(portfolio));

    for(let i = 0; i < portfolioDatas.length; i++){
        generateWork(portfolioDatas[i], i);
    }
})


function generateWork(_obj, _num){
    let el_work = document.createElement("div");
    el_work.setAttribute("class", "work");

    let el_div = document.createElement("div");

    let el_bg =  document.createElement("img");
    el_bg.src = "img/portfolio/" + _obj.en + "_bg.jpg";
    el_bg.alt = _obj.ko;

    let el_logo =  document.createElement("img");
    el_logo.src = "img/portfolio/" + _obj.en + "_logo.png";
    el_logo.alt = _obj.ko;

    let el_h3 = document.createElement("h3");
    el_h3.innerHTML = _obj.ko;

    let el_p = document.createElement("p");
    el_p.innerHTML = _obj.sub;

    el_div.appendChild(el_logo);
    el_div.appendChild(el_bg);

    el_work.appendChild(el_div);
    el_work.appendChild(el_h3);
    el_work.appendChild(el_p);

    let el_link = document.createElement("a");
    el_link.setAttribute("href", "/work?id=" + _num);
    el_link.setAttribute("data-aos", "fade-up");

    el_link.appendChild(el_work);

    elWorks.appendChild(el_link);
}

AOS.init({
    offset: 250,
    duration: 1500,
    once: true,
    anchorPlacement: "top-bottom",
});