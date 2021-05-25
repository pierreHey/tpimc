function calculer() {
    let taille = document.getElementById("taille").value;
    let poids = document.getElementById("poids").value;


    let tailleParsed = Number(taille);
    let poidsParsed = Number(poids);

    //Math.round(number * 10) / 10
    let imc = poidsParsed / (tailleParsed * tailleParsed);
    imc = Math.round(imc * 10) / 10;


    document.getElementById("imc").innerHTML = "IMC : " + imc;

    console.log("taille :" + taille);
    console.log("poids :" + poids);
    console.log("imc :" + imc);



    if (imc <= 18.5) {
        document.getElementById("tranche").innerHTML = "Maigreur";
    }
    else if (imc <= 25) {
        document.getElementById("tranche").innerHTML = "Normal"
    }
    else {
        document.getElementById("tranche").innerHTML = "surpoids"
    }





}
