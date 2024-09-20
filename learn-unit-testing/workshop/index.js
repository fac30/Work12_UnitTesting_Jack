// "pikachu" -> "https://pokeapi.co/api/v2/pikachu"

function makeUrl(name) {
  return "https://pokeapi.co/api/v2/" + name;
}

function searchParamsToObject(queryString) {
  const params = new URLSearchParams(queryString);
  const result = {};

  for (const [key, value] of params.entries()) {
    result[key] = value;
  }

  return result;
}

// Example usage:
const queryString = "name=oliver&email=hello@oliverjam.es";
const result = searchParamsToObject(queryString);
// console.log(result); // { name: "oliver", email: "hello@oliverjam.es" }

const isLeapYear = (year) => {
  if (typeof year !== "number" || year < 0) {
    console.log(typeof year);
    return "error";
  } else {
    // returns true if not a leap year, false if a leap year
    return year % 4 === 0 || (year % 100 !== 0 && year % 400 === 0);
  }
};

isLeapYear(800);
