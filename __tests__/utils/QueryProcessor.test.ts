import QueryProcessor from "../../utils/QueryProcessor";
import "@testing-library/jest-dom";

describe("QueryProcessor", () => {
  test("should return a string", () => {
    const query = "test";
    const response: string = QueryProcessor(query);
    expect(typeof response).toBe("string");
  });

  test("should return shakespeare description", () => {
    const query = "shakespeare";
    const response: string = QueryProcessor(query);
    expect(response).toBe(
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
        "English poet, playwright, and actor, widely regarded as the greatest " +
        "writer in the English language and the world's pre-eminent dramatist."
    );
  });

  // TODO: Deberías actualizar la prueba a continuación después de añadir tu USB ID
  test("should return my USB ID", () => {
    const query = "what's your USB ID?";
    const response: string = QueryProcessor(query);
    expect(response).toBe("15-10088");
  });

  test("should return my name", () => {
    const query = "What is your name?";
    const response: string = QueryProcessor(query);
    expect(response).toBe("Felix Arnos");
  });

  test("should return correct sum for user-provided numbers", () => {
    // Array con diferentes pares de números para la suma
    const sumCases = [
      { query: "What is 5 plus 10?", expected: "15" },
      { query: "What is 12 plus 23?", expected: "35" },
      { query: "What is 100 plus 200?", expected: "300" },
    ];

    // Para cada caso de prueba, ejecutar QueryProcessor y verificar el resultado
    sumCases.forEach(({ query, expected }) => {
      const response = QueryProcessor(query);
      expect(response).toBe(expected);
    });
  });

  test("should return the largest number for user-provided list", () => {
    // Array con diferentes listas de números para verificar el número más grande
    const largestCases = [
      {
        query: "Which of the following numbers is the largest: 3, 9, 2, 6?",
        expected: "9",
      },
      {
        query: "Which of the following numbers is the largest: 10, 50, 30, 20?",
        expected: "50",
      },
      {
        query:
          "Which of the following numbers is the largest: 100, 250, 150, 200?",
        expected: "250",
      },
    ];

    // Para cada caso de prueba, ejecutar QueryProcessor y verificar el resultado
    largestCases.forEach(({ query, expected }) => {
      const response = QueryProcessor(query);
      expect(response).toBe(expected);
    });
  });

  test("should return correct product for user-provided numbers", () => {
    const multiplyCases = [
      { query: "What is 7 multiplied by 8?", expected: "56" },
      { query: "What is 27 multiplied by 87?", expected: (27 * 87).toString() },
      { query: "What is 12 multiplied by 12?", expected: "144" },
    ];

    multiplyCases.forEach(({ query, expected }) => {
      const response = QueryProcessor(query);
      expect(response).toBe(expected);
    });
  });

  test("should return correct difference for user-provided numbers", () => {
    const subtractCases = [
      { query: "What is 10 minus 5?", expected: "5" },
      { query: "What is 30 minus 15?", expected: "15" },
      { query: "What is 99 minus 100?", expected: "-1" },
    ];

    subtractCases.forEach(({ query, expected }) => {
      const response = QueryProcessor(query);
      expect(response).toBe(expected);
    });
  });

  test("should return the number that is both square and cube from user-provided list", () => {
    const squareCubeCases = [
      {
        query:
          "Which of the following numbers is both a square and a cube: 27, 201, 729, 100, 4001, 4952, 2135?",
        expected: "729",
      },
      {
        query:
          "Which of the following numbers is both a square and a cube: 64, 128, 729, 100?",
        expected: "64",
      },
    ];

    squareCubeCases.forEach(({ query, expected }) => {
      const response = QueryProcessor(query);
      expect(response).toBe(expected);
    });
  });

  test("should return primes from a list", () => {
    const query =
      "Which of the following numbers are primes: 71, 29, 9, 88, 3?";
    const response: string = QueryProcessor(query);
    expect(response).toBe("71, 29, 3");
  });

  test("should return None if there are no primes", () => {
    const query = "Which of the following numbers are primes: 4, 6, 8, 9, 10?";
    const response: string = QueryProcessor(query);
    expect(response).toBe("None");
  });

  test("should return all primes", () => {
    const query = "Which of the following numbers are primes: 17, 23, 31?";
    const response: string = QueryProcessor(query);
    expect(response).toBe("17, 23, 31");
  });
});
