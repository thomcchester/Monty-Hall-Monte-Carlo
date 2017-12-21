var numberOfDoors = 3;
var numberOfRuns = 100;
var totalArray = [];
var stayWins = 0;
var switchWins = 0;

for(var i=0; i<numberOfRuns; i++){
  var doorPickOne = Math.floor(Math.random()*(numberOfDoors));
  var doorActual = Math.floor(Math.random()*(numberOfDoors));
  var doorArray = [doorPickOne,doorActual];
  if(doorArray[0]===doorArray[1]){
    totalArray.push(1)
  }else{
    totalArray.push(0)
  }
}

console.log(totalArray)

for(i=0; i<totalArray.length; i++){
  if(totalArray[i]===0){
    switchWins++
  }else{
    stayWins++
  }
}

console.log(switchWins,stayWins)
