let btnPfree = document.getElementById("btn_pfree");
let btnPbasic = document.getElementById("btn_pbasic");
let btnPexpert = document.getElementById("btn_pexpert");
let btnPduo = document.getElementById("btn_pduo");

let infoPlanes = [
    "Solo puedes tomar los cursos gratis",
    "Puedes tomar casi todos los cursos de Platzi durante un mes",
    "Puedes tomar casi todos los cursos de Platzi durante un año",
    "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
];

function hideText(x) {
    let a = document.getElementById("p_1");
    let b = document.getElementById("p_2");
    let c = document.getElementById("p_3");
    let d = document.getElementById("p_4");
    let e = document.getElementById("p_info");

    a.style.opacity = "0";
    a.style.transition = "0.1s";
    b.style.opacity = "0";    
    b.style.transition = "0.1s";
    c.style.opacity = "0";
    c.style.transition = "0.1s";
    d.style.opacity = "0";
    d.style.transition = "0.1s";
    e.style.opacity = "0";
    e.style.transition = "0.1s";

    x.style.opacity = "500";
    x.style.transition = "0.5s";
}

btnPfree.onclick = function() {
    document.getElementById("p_1").innerText = infoPlanes[0];
    let x = document.getElementById("p_1");
    hideText(x);
}

btnPbasic.onclick = function() {
    document.getElementById("p_2").innerText = infoPlanes[1];
    let x = document.getElementById("p_2");
    hideText(x);
}
btnPexpert.onclick = function() {
    document.getElementById("p_3").innerText = infoPlanes[2];
    let x = document.getElementById("p_3");
    hideText(x);
}
btnPduo.onclick = function() {
    document.getElementById("p_4").innerText = infoPlanes[3];
    let x = document.getElementById("p_4");
    hideText(x);
}

