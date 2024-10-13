let pNumb = 0;
let nNumb = 0;
let nullNumb = 0;
function clicked(){
    const numbers = document.getElementById('numbers').value.split(',').map(Number);
    for (let i = 0 ; i < numbers.length ; i++){
        if (numbers[i] > 0){
            pNumb += 1;
        }
        else if (numbers[i] < 0){
            nNumb += 1;
        }
        else{
            nullNumb += 1;
        }
    }
    const posRatioI = document.getElementById("posRatioInfo");
    const negRatioI = document.getElementById("negRatioInfo");
    const nullRatioI = document.getElementById("nullRatioInfo");

    const ratioOpt = document.getElementById("ratioOpt").value;

    if(ratioOpt == "pourcentage"){
        let pRatio = pNumb / numbers.length * 100;
        let nRatio = nNumb / numbers.length * 100;
        let nullRatio = nullNumb / numbers.length * 100;
        posRatioI.value = pRatio + "%";
        negRatioI.value = nRatio + "%";
        nullRatioI.value = nullRatio + "%";
    }
    else{
        let pRatio = pNumb / numbers.length;
        let nRatio = nNumb / numbers.length ;
        let nullRatio = nullNumb / numbers.length ;
        posRatioI.value = pRatio.toFixed(6) ;
        negRatioI.value = nRatio.toFixed(6) ;
        nullRatioI.value = nullRatio.toFixed(6);
    }


    pNumb = 0;
    nNumb = 0;
    nullNumb = 0;
}
