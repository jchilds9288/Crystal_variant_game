// Variables
var monsterHealth 
var weaponValue 
var weaponDamage = 0
var wins
var loss
var weaponRefs = $(".weapon")
var monsterHealthRef = $(".demonLife")
var weaponDamageRef = $(".weaponDamage")
//functions


setup()
    

$(".weapons-container").on("click", ".weapon",function(event) {

    console.log(weaponValue)
    var value = weaponValue [ this.dataset.index ];
    weaponDamage = weaponDamage += value;
    monsterHealth = monsterHealth - value;
    
    console.log(value);
    // updateDemonHealth()
    updateWeaponDamage()
})



function setup() {
    monsterHealth = monsterHealthValue();
    weaponDamage = 0;
    weaponValue = [];
    assignWeaponValue();

    // updateDemonHealth()
    updateWeaponDamage()
}
function monsterHealthValue() {
    monsterHealth = Math.floor(Math.random() * 102) +18
    console.log(monsterHealth)
    $(".demonLife").text(monsterHealth)
}

function weaponStrengthValue() {
    return Math.floor(Math.random() * 12) +1
}

function assignWeaponValue() {
    for (i=0; i < weaponRefs.length; i++){
        weaponValue.push(weaponStrengthValue())
    }
    console.log(weaponValue[3])
}

// function updateDemonHealth() {
//     monsterHealth.text(monsterHealth)
// }

function updateWeaponDamage() {
    $(".weaponDamage").text(weaponDamage)
}

