export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "8ff8c2b6e6mshd65b7ac41af864bp1ac3d3jsna5f0535361c6",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };
  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars",
    {
      headers: headers,
    }
  );

  const result = await response.json();
  return result;
}
