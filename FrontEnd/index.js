
//算出関数
function calculationCalorie(ageValue,heightValue,weightValue){
    const sexValue = document.querySelector("#sex").value;
    let calorie = 0;

    if (sexValue == "man"){
        calorie = (0.0481 * weightValue + 0.0234 * heightValue - 0.0138 * ageValue - 0.4235) * 1000 / 4.186;
    }else{
        calorie = (0.0481 * weightValue + 0.0234 * heightValue - 0.0138 * ageValue - 0.9708) * 1000 / 4.186;
    }
    alert(`あなたの基礎代謝は${calorie}kcalです。`);
}


//入力値が空じゃないか判断する関数
function inputCheck(inputvalue,inputname){
    if(inputvalue == ("")){
        return [1 , inputname];
    }else{
        return [0 , inputname];
    }
}

//基礎代謝計算関数
function baseCalorieCalculation(){
    const inputAge = [document.querySelector("#age").value,"年齢"];
    const inputHeight = [document.querySelector("#height").value,"身長"];
    const inputWeight = [document.querySelector("#weight").value,"体重"];
    let resultSum = 0;
    let alertText = "";
    let result = {};

    result[0] = inputCheck(inputAge[0],inputAge[1]);
    result[1] = inputCheck(inputHeight[0],inputHeight[1]);
    result[2] = inputCheck(inputWeight[0],inputWeight[1]);

    for (let index = 0; index < 3; index++) {
        resultSum = resultSum + result[index][0];
    }

    if (resultSum > 0){
        for (let index = 0; index < 3; index++) {
            if (result[index][0]){
                alertText = alertText + result[index][1] + ",";
            }else{
            }
        }
        alert(`${alertText}が未入力です。値を入力してから実行してください。`);
    }else{
        const returnAge = ageCalculation(inputAge[0]);
        calculationCalorie(returnAge,inputHeight[0],inputWeight[0]);
    }
}

function ageCalculation(inputAge){
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    const birthday = new Date(inputAge);
    let nowAge = null;

    if (month & date >= (birthday.getMonth() + 1) & birthday.getDate()){
        nowAge = year - birthday.getFullYear();
    }else{
        nowAge = year - birthday.getFullYear() - 1;
    }
    return nowAge;

}