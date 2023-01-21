abstract class Country {
    public name: string
    public language: string
    public population: number
    public populationGrowthRate: number
    constructor(name: string, language: string, population: number, populationGrowthRate: number) {
        this.name = name
        this.language = language
        this.population = population
        this.populationGrowthRate = populationGrowthRate
    }
    public abstract populationGrowth(): number
}

class OICcountry extends Country {
    constructor(
     name: string,
     language: string,
     population: number,
     populationGrowthRate: number
    ) {
        super(name, language,population,populationGrowthRate)
    }
    public populationGrowth(): number {
        this.population=this.population*(1+this.populationGrowthRate/100)
        return this.population
    }
}

let pakistan =new OICcountry('Pakustan', 'Urdu', 30000000,2.5)
console.log(pakistan)

pakistan.populationGrowth()
console.log(pakistan)

pakistan.populationGrowth()
console.log(pakistan)

pakistan.populationGrowth()
console.log(pakistan)