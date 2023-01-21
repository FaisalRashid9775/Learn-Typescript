 class Country {
    public name: string
    public language: string
    public population: number
    public populationGrowthRate: number
    private _leaderName : string
    private _privateData : string
    constructor(
        name: string,
        language: string, 
        population: number, 
        populationGrowthRate: number,
        _leaderName:string,
        _privateData:string
        ) 
        {
        this.name = name
        this.language = language
        this.population = population
        this.populationGrowthRate = populationGrowthRate
        this._leaderName= _leaderName
        this._privateData= _privateData
    }
    //public abstract populationGrowth(): number

    public get PrivateInfo() : string {
        return this._privateData
    }
    public set leader(newleader : string ){
        this._leaderName=newleader
    }
    public greet(){
        return 'Hello'
    }
}

class OICcountry extends Country {
    constructor(
     name: string,
     language: string,
     population: number,
     populationGrowthRate: number,
     leaderName:string,
     privateData : string
    ) {
        super(name, language,population,populationGrowthRate,leaderName, privateData)
    }
    public populationGrowth(): number {
        this.population=this.population*(1+this.populationGrowthRate/100)
        return this.population
    }
    public greet(){
        return 'AOA'
    }
}

let pakistan =new OICcountry('Pakustan', 'Urdu', 30000000,2.5,'QAU','PrivateData')
let china =new Country('China', 'Chinies', 330000000,1.5,'MOZAYPING','PrivateData')
console.log(pakistan)
console.log(pakistan.greet())
console.log(china.greet())
console.log(china)


export{}