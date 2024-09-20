function test(name, testFunction) {
  console.group(name);
  testFunction();
  console.groupEnd(name);
}

function equal(actual, expected, message) {
  if (actual === expected) {
    const defaultMessage = `Expected ${expected} and received ${actual}`;
    console.info("Pass: " + (message || defaultMessage));
  } else {
    const defaultMessage = `Expected ${expected} but received ${actual} instead`;
    console.error("Fail: " + (message || defaultMessage));
  }
}

// test("test for Pikachu", () => {
//   const result = makeUrl("pikachu");
//   const expected = "https://pokeapi.co/api/v2/pikachu";
//   equal(result, expected);
// });

// test("test for Pikachu", () => {
//   const result = makeUrl("charmander");
//   const expected = "https://pokeapi.co/api/v2/pikachu";
//   equal(result, expected);
// });

// test("test to deconstruct a URL string", () => {
//   const result = searchParamsToObject("name=oliver&email=hello@oliverjam.es");
//   const { name, email } = result;

//   const expectedName = "oliver";
//   const expectedEmail = "hello@oliverjam.es";

//   equal(name, expectedName);
//   equal(email, expectedEmail);
// });

test("is 4 a leap year", () => {
  const result = isLeapYear(4);
  const expected = true;
  equal(result, expected);
});
test("is 2000 a leap year", () => {
  const result = isLeapYear(2000);
  const expected = true;
  equal(result, expected);
});
test("is 77 a leap year", () => {
  const result = isLeapYear(77);
  const expected = false;
  equal(result, expected);
});
test("is a negative number a leap year", () => {
  const result = isLeapYear(-400);
  const expected = "error";
  equal(result, expected);
});
test("is a boolean a leap year", () => {
  const result = isLeapYear(true);
  const expected = "error";
  equal(result, expected);
});
test("is 999999999999999 a leap year", () => {
  const result = isLeapYear(999999999999999);
  const expected = false;
  equal(result, expected);
});
test("is a function a leap year", () => {
  const result = isLeapYear(console.log());
  const expected = "error";
  equal(result, expected);
});
