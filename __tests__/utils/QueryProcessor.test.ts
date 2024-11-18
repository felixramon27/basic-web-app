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
});
