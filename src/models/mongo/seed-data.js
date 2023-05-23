export const seedData = {
    users: {
      _model: "User",
      homer: {
        firstName: "Homer",
        lastName: "Simpson",
        email: "homer@simpson.com",
        password: "secret"
      },
      marge: {
        firstName: "Marge",
        lastName: "Simpson",
        email: "marge@simpson.com",
        password: "secret"
      },
      bart: {
        firstName: "Bart",
        lastName: "Simpson",
        email: "bart@simpson.com",
        password: "secret"
      }
    },
    counties: {
      _model: "County",
      cork:{
        nameEng: "Cork",
        nameIrish: "Corcaigh",
        countyTown: "Cork City"
      },
      mayo:{
        nameEng: "Mayo",
        nameIrish: "Mhaigh Eo",
        countyTown: "Castlebar"
      },
      galway:{
        nameEng: "Galway",
        nameIrish: "Gaillimh",
        countyTown: "Galway City"

      },
      kerry:{
        nameEng: "Kerry",
        nameIrish: "Ciarraí",
        countyTown: "Tralee"
    
      },
      sligo:{
        nameEng: "Sligo",
        nameIrish: "Sligeach",
        countyTown: "Sligo Town"
      },
      clare:{
        nameEng: "Clare",
        nameIrish: "an Clár",
        countyTown: "Ennis"
      },
      limerick:{
        nameEng: "Limerick",
        nameIrish: "Luimneach",
        countyTown: "Limerick City"
      },
      leitrim:{
        nameEng: "Leitrim",
        nameIrish: "Liatroim",
        countyTown: "Carrick-on-Shannon"
      },
      donegal:{
        nameEng: "Donegal",
        nameIrish: "Dhún na nGall",
        countyTown: "Donegal Town"
      }
    },
    visits: {
      _model: "Visit",
      visit_1: {
        location: "Glengarriff",
        latitude: "51.75",
        longitude: "-9.55",
        date: "August 2022",
        details: "Overcast, went to Garnish Island and saw some seals on the boat trip",
        county: "->counties.cork",
        visitor: "->users.bart"
      },
      visit_2: {
        location: "Achill Island",
        latitude: "53.96",
        longitude: "-10.01",
        date: "July 2021",
        details: "Sunny day, cycled around the island and had fish and chips in Mastersons Bar",
        county: "->counties.mayo",
        visitor: "->users.homer"
      },
    }
  };