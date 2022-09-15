//Race Day

// number will be between 0-999
let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly= true ;
let runnerAge =30;
//control flow statement means if else statements
if(registeredEarly && runnerAge>18){
    raceNumber=raceNumber+1000;
}
if(registeredEarly && runnerAge>18){
    console.log(`your race timing will be 9:30am with racenumber: ${raceNumber}`);

}else if(!registeredEarly && runnerAge>18){
    console.log(` your race timing is 11:30 with racenumber :${raceNumber}`);
}else if( runnerAge<18){
    console.log(` your race timing will bw 12:30 with racenumber:${raceNumber}`);
}else{
    console.log(` see the registration disk`);
}