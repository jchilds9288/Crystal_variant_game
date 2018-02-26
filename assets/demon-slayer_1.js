$(document).ready(function() {

// //     $("button").on("click", function() {
// //     $(".introImage1").animate({ opacity: "0" });
// //   });

  $( "button" ).click(function() {
    $( "#intro" ).hide( "slow" );
  });

// Game Variables

var monsterHealth, 
    weaponValue, 
    weaponDamage = 0,
    wins = 0,
    loss = 0,
    weaponRefs = $(".weapon")



setup()
//functions
$(".weapons-container").on("click", ".weapon",function(event) {
    

        console.log(weaponValue)
        var value = weaponValue [ this.dataset.index ]
        weaponDamage += value
        
        updateWeaponDamage()
        console.log(monsterHealth)

      
        if (gameOver()) {
            console.log('OVER')
            console.log(weaponDamage)
            console.log(monsterHealth)
            if (weaponDamage === monsterHealth){
                wins++
                alert("YOU SLAYED THE DEMON AND GAINED BRAGGING RIGHTS! TOTALLY WORTH PLAYING THE BONE FLUTE!")
            } else if (weaponDamage > monsterHealth) {
                loss++
                alert("OH NO! YOU USED TOO MUCH POWER TO TRY AND KILL THE DEMON!!! HE USED IT AGAINST YOU! NEXT TIME TRY NOT TO SHOWBOAT AROUND WITH YOUR MUSICAL SKILLS. Your LOST LOSER!")
            }

        setup()
    
        } 
      
})

function gameOver() {
    return weaponDamage >= monsterHealth
}


function setup() {
    monsterHealth = monsterHealthValue()
    weaponDamage = 0
    weaponValue = []
    assignWeaponValue()
    updateWeaponDamage()
    updateMonsterHealth()
    updateScore()
}
function monsterHealthValue() {
    return Math.floor(Math.random() * 102) +18;
    
    
}

function weaponStrengthValue() {
    return Math.floor(Math.random() * 12) +1
}

function assignWeaponValue() {
    for (i=0; i < weaponRefs.length; i++){
        weaponValue.push(weaponStrengthValue())
    }

}

function updateWeaponDamage() {
    $(".weaponDamage").text(weaponDamage)
}

function updateMonsterHealth() {
    $(".demonLife").text(monsterHealth)
}
function updateScore(){
    $(".wins").text(wins)
    $(".loses").text(loss)
}
})
