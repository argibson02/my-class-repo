const Algo = require("../algo");

describe("Algo", () => {
  describe("reverse", () => {
    // TODO: Write a test for the `reverse` method that should take a string as an argument and return a new reversed version of the string
    it ("should return a reveresed string" , () =>  {
      const str = "hello world!"
      const rev = reverse(str);
      // const rev = "!dlrow olleh"
      const algo = new Algo().reverse(str);
      expect(algo).toEqual(rev);
    })
  });

  describe("isPalindrome", () => {
    // TODO: Write a test for the `isPalindrome` method that should take a string as an argument and return the boolean `true` if the provided string is a palindrome.
    it ("should return palindrome", () => {
    const algo = new Algo();
    const algo2 = new Algo();


    expect(algo.isPalindrome(str)).toEqual(true);
    expect(algo2.isPalindrome(str)).toEqual(true);
    })
  });

  describe("capitalize", () => {
    // TODO: Write a test for the `capitalize` method that should take a string as an argument and return a new string with the first letter of each word capitalized
    it ("should return capitalsi in all first letter positions", () => {

    const str = "capitalize every first word of the string";
    const str = "Capitalize Every First Word Of The String";
    const algo =Algo();
    expect(algo.capitalize(str)).toEqual(cap);
    })
  });
});
