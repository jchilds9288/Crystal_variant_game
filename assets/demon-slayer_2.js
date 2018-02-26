// Variables
var gameOn
var monsterHealth 
var weaponValue 
var weaponDamage = 0;
var wins = 0;
var loss = 0;
var weaponRefs = $(".weapon")

//functions


setup()


$(".weapons-container").on("click", ".weapon",function(event) {
    if (gameOn) {
        gameOn = false

        console.log(weaponValue)
        var value = weaponValue [ this.dataset.index ];
        weaponDamage += value;

        

        updateWeaponDamage()
        
        if (weaponDamage === monsterHealth){
            win()
        } else if (weaponDamage > monsterHealth){
            lose()
        }

        setup()
        // gameOver()
        // if (gameOver()) {
        //     if (weaponDamage === monsterHealth){
        //         wins++;
        //         alert("YOU SLAYED THE DEMON AND GAINED BRAGGING RIGHTS! TOTALLY WORTH PLAYING THE BONE FLUTE!");
        //     } else if (weaponDamage >= monsterHealth) {
        //         loss++;
        //         alert("OH NO! YOU USED TOO MUCH POWER TO TRY AND KILL THE DEMON!!! HE USED IT AGAINST YOU! NEXT TIME TRY NOT TO SHOWBOAT AROUND WITH YOUR MUSICAL SKILLS. Your LOST LOSER!")
        //     }

        // setup()
    
        // } 
        gameOn = true 
    } 
console.log(wins);
console.log(loss);  
})


function setup() {
    monsterHealth = monsterHealthValue();
    weaponDamage = 0;
    weaponValue = [];
    assignWeaponValue();
    updateWeaponDamage();
    updateMonsterHealth();
    gameOn = true
}
function monsterHealthValue() {
    return Math.floor(Math.random() * 102) +18;
    
}

function weaponStrengthValue() {
    return Math.floor(Math.random() * 12) +1;
}

function assignWeaponValue() {
    for (i=0; i < weaponRefs.length; i++){
        weaponValue.push(weaponStrengthValue());
    }

}

function updateWeaponDamage() {
    $(".weaponDamage").text(weaponDamage);
}

function updateMonsterHealth() {
    $(".demonLife").text(monsterHealth)
}
function win(){
    wins++;
    alert("YOU SLAYED THE DEMON AND GAINED BRAGGING RIGHTS! TOTALLY WORTH PLAYING THE BONE FLUTE!");
}

function lose(){
    loss++;
    alert("OH NO! YOU USED TOO MUCH POWER TO TRY AND KILL THE DEMON!!! HE USED IT AGAINST YOU! NEXT TIME TRY NOT TO SHOWBOAT AROUND WITH YOUR MUSICAL SKILLS. Your LOST LOSER!")
};

