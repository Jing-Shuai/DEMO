
var stateLamp = false;
var stateFan = false;
var stateAir = false;
var valueLamp = "0";
var valueFan = "0";
var valueAir = "0";

//ham ghi du lieu len firebase
function WriteDataToFirebase(lamp,fan,air){
    firebase.database().ref("TTT").set({
        Den: lamp,
        Quat: fan,
        Maylanh: air
    })
}

//function nut bam
function ClickLamp(){
    stateLamp=!stateLamp;
    if(stateLamp){
      valueLamp="1";
    }else{
      valueLamp="0";
    }
    WriteDataToFirebase(valueLamp,valueFan,valueAir);
}
function ClickFan(){
    stateFan=!stateFan;
    if(stateFan){
      valueFan="1";
    }else{
      valueFan="0";
    }
    WriteDataToFirebase(valueLamp,valueFan,valueAir);
}
function ClickAir(){
    stateAir=!stateAir;
    if(stateAir){
      valueAir="1";
    }else{
      valueAir="0";
    }
    WriteDataToFirebase(valueLamp,valueFan,valueAir);
}