var slaying = true;
//50% chance of hit (0 or 1 aka false or true)
var youHit = Math.floor(Math.random() * 2)
//sets to number between 1-5
var damageThisRound = Math.floor(Math.random()*5 + 1)
var totalDamage = 0;

while(slaying) { 
    //determining if hit
    if (youHit) {
        console.log("You hit!");
       
        totalDamage += damageThisRound;
       
        //if damage is greater than 4
        if (totalDamage >= 4) {
            console.log("You slew the dragon!")
            //end loop   
            slaying = false;
            }
        //if damage is not greater than 4   
            else {
                youHit = Math.floor(Math.random() * 2)
                }
    }
   
    else {
        console.log("You missed!");
        //end loop   
        slaying = false;
        }
 }