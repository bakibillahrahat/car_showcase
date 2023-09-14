const axios = require("axios");

const options = {
  method: "GET",
  url: "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
  params: { model: "corolla" },
  headers: {
    "X-RapidAPI-Key": "8ff8c2b6e6mshd65b7ac41af864bp1ac3d3jsna5f0535361c6",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  },
};

try {
  const response = await axios.request(options);
  console.log(response.data);
} catch (error) {
  console.error(error);
}


export async function fetchCars() {
    const headers = {
        "X-RapidAPI-Key": "8ff8c2b6e6mshd65b7ac41af864bp1ac3d3jsna5f0535361c6",
        "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    }
    const response = await fetch("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?");
}