
//算出関数
function calculationCalorie(ageValue,heightValue,weightValue){
    const sexValue = document.querySelector("#sex").value;
    let calorie = 0;

    if (sexValue == "man"){
        calorie = Math.ceil((0.0481 * weightValue + 0.0234 * heightValue - 0.0138 * ageValue - 0.4235) * 1000 / 4.186);
    }else{
        calorie = Math.ceil((0.0481 * weightValue + 0.0234 * heightValue - 0.0138 * ageValue - 0.9708) * 1000 / 4.186);
    }
    alert(`あなたの基礎代謝は${calorie}kcalです。`);
}


//入力値が空じゃないか判断する関数
function inputCheck(inputvalue,inputname,inputlabel){
    if(inputvalue == ("")){
        return [1 , inputname,inputlabel];
    }else{
        return [0 , inputname,inputlabel];
    }
}

//基礎代謝計算関数
function baseCalorieCalculation(){
    const inputAge = [document.querySelector("#age").value,"年齢", "age"];
    const inputHeight = [document.querySelector("#height").value,"身長","height"];
    const inputWeight = [document.querySelector("#weight").value,"体重","weight"];
    let resultSum = 0;
    let alertText = "";
    let result = {};

    result[0] = inputCheck(inputAge[0],inputAge[1],inputAge[2]);
    result[1] = inputCheck(inputHeight[0],inputHeight[1],inputHeight[2]);
    result[2] = inputCheck(inputWeight[0],inputWeight[1],inputWeight[2]);

    for (let index = 0; index < 3; index++) {
        resultSum = resultSum + result[index][0];
        if (result[index][0]){
            alertText = alertText + result[index][1] + ",";
            document.querySelector(`label[for = ${result[index][2]}]`).style.color = "Red";
        }else{
            document.querySelector(`label[for = ${result[index][2]}]`).style.color = "Black";
        }
    }
    if (resultSum > 0){
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