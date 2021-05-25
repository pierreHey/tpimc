function calculer() {
    let taille = document.getElementById("taille").value;
    let poids = document.getElementById("poids").value;

    let imc = poids / (taille * taille);
    imc = Math.round(imc * 10) / 10;
    // ou imc.toFixed(1)
    document.getElementById("imc").innerHTML = "IMC : " + imc;

    /**
    console.log("taille :" + taille);
    console.log("poids :" + poids);
    console.log("imc :" + imc);
    */

    if (imc <= 18.5) {
        document.getElementById("tranche").innerHTML = "Maigreur";
    }
    else if (imc <= 25) {
        document.getElementById("tranche").innerHTML = "Normal"
    }
    else {
        document.getElementById("tranche").innerHTML = "Surpoids"
    }

    document.getElementById("taille").value = "";
    document.getElementById("poids").value = "";

}
