function name(input) {
    let heroData = [];
    for (let index = 0; index < input.length; index++) {
        let currentHeroArguments = input[index].split('/ ')
        let chn = currentHeroArguments[0].trim();
        let chl = currentHeroArguments[1];
        let chi = []
        if (currentHeroArguments.length > 2) { 
         chi = currentHeroArguments[2].split(", ") }
        let hero = {
            name : chn,
            level : Number(chl),
            items : chi
        };
        heroData.push(hero);
    }
    console.log (JSON.stringify(heroData));
}
//100/100
name(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']
)