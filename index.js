// Code your solution in this file!
function distanceFromHqInBlocks(pickup) {
    const hq=42;
  return Math.abs(pickup-hq) ; 
}
function distanceFromHqInFeet(pickup){
    return (distanceFromHqInBlocks(pickup)*264)
}
function distanceTravelledInFeet(start,destination) {
    return( Math.abs(start-destination)*264);
    
}
function calculatesFarePrice(start,destination) {
    if (distanceTravelledInFeet(start,destination)<400) {
        // console.log('gives customers a free sample'); 
        return 0
    }
    else if (400 < distanceTravelledInFeet(start,destination) && distanceTravelledInFeet(start,destination)<2000) {
        return ((distanceTravelledInFeet(start,destination))-400)*0.02
        
    }
    else if (distanceTravelledInFeet(start,destination)>2000 && distanceTravelledInFeet(start,destination)<2500){
        return 25
    } 
    else if (distanceTravelledInFeet(start,destination)>2500){
        return 'cannot travel that far'
    }
    
}