var slaying = true;
var youHit = Math.floor(Math.random()*2);
var roundDamage = Math.floor(Math.random()*5 + 1);
var totalDamage = 0

while(slaying){
    if(youHit){
        console.log("Sweet! You hit the dragon!");
        totalDamage += roundDamage;
        if(totalDamage >= 4){
            console.log("Congratulations! You are a true warrior knight! You have slain the dragon!");
            slaying = false
        } else {
            youHit = Math.floor(Math.random()*2);
        }
    } else {
        console.log("Well...you're dead.");
        slaying = false
    }
}
