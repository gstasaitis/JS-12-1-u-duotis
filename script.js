// 1. Nusikopijuok array (const cars = ["BMW", "VW", "Audi"]) ir naudojant forEach, atspausdink kiekvieną elementą (automobilio reikšmę)
// 2. Pakoreguok pirmą pratimą, kad atspaudintum index: value (pvz: "0: BMW", "1: VW" ir t.t.).


const cars = ["BMW", "VW", "Audi"]
cars.forEach(function(item, index){
    console.log(index, item)
})



// 3. Sukurk Array su savo draugų vardais, raidžių kapitalizaciją pamiksuok (t.y. "peTras", "Jonas", "aNTanaS" ir t.t.). Naudojant map metodą, padaryk, kad susikurtų naujas array (ir jį atspausdink), kuriame vardai surašyti teisinga kapitalizacija (pvz. "peTras" => "Petras").

const friends = ["Songokas", "shrekas", "kempiNIUkas", "hOmeris", "pablo"]

function capitalizeWords(friends) {
    return friends.map(word => {
        const firstLetter = word.charAt(0).toUpperCase()
    const rest = word.slice(1).toLowerCase()

    return firstLetter + rest;
    })
}
console.log(capitalizeWords(friends))


// 4. Sukurk Array su savo draugų amžiais (nuo 1 iki 99). Naudojant filter - prafiltruok tik tuos skaičius, kurie didesni arba lygūs 18.

const friendsAge = [15, 20, 25, 30, 13, 12, 55, 18]
const AgeFilter = friendsAge.filter(x => x >= 18)

console.log(AgeFilter)



// 5. Sukurk Array su Lietuvos miestais ("Vilnius", "Kaunas"). Naudojant find - surask bet kokį pirmą miestą, kuris prasideda iš "K" raidės.


const cities = ["Vilnius", "Kaunas", "Klaipėda", "Vilkaviškis", "Šiauliai", "Kupiškis", "Kalanga", "Kaišiadorys"]

const citiesK = cities.find(function(word){
    return word.includes('K')
})
console.log(citiesK)


// 6. Penktame pratime esantį sprendimą pakoreguot ir patikrink su some ar bent vienas miestas prasideda iš mažosios.

const some = cities.some(function(word){
    return word.charAt(0).toLowerCase() == word.charAt(0)
})
console.log(some)

// 7. Pakoreguok šeštą pratimą, kad tikrintų ne ar bent vienas miestas prasideda ir mažosios, bet ar visi iš didžiosios.

const somes = cities.some(function(word){
    return word.charAt(0).toUpperCase() == word.charAt(0)
})
console.log(somes)
