export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("usb id")) {
    return "15-10088";
  }

  if (query.toLowerCase().includes("name")) {
    return "Felix Arnos";
  }

  // Detectar y procesar la suma de dos números en el formato "What is X plus Y?"
  const sumMatch = query.match(/what is (\d+) plus (\d+)\?/i);
  if (sumMatch) {
    const num1 = parseInt(sumMatch[1], 10);
    const num2 = parseInt(sumMatch[2], 10);
    return (num1 + num2).toString();
  }

  // Detectar y procesar la suma de dos números en el formato "What is X plus Y?"
  const multMatch = query.match(/what is (\d+) multiplied by (\d+)\?/i);
  if (multMatch) {
    const num1 = parseInt(multMatch[1], 10);
    const num2 = parseInt(multMatch[2], 10);
    return (num1 * num2).toString();
  }

  // Detectar y procesar la resta de dos números
  const subMatch = query.match(/what is (\d+) minus (\d+)\?/i);
  if (subMatch) {
    const num1 = parseInt(subMatch[1], 10);
    const num2 = parseInt(subMatch[2], 10);
    return (num1 - num2).toString();
  }

  // Detectar y procesar el número más grande en el formato "Which of the following numbers is the largest: X, Y, Z?"
  const largestMatch = query.match(
    /which of the following numbers is the largest: ([\d, ]+)\?/i
  );
  if (largestMatch) {
    const numbers = largestMatch[1]
      .split(",")
      .map((num) => parseInt(num.trim(), 10));
    const largestNumber = Math.max(...numbers);
    return largestNumber.toString();
  }

  // Detectar y procesar número que es tanto cuadrado como cubo en una lista
  const squareCubeMatch = query.match(
    /which of the following numbers is both a square and a cube: ([\d, ]+)\?/i
  );
  if (squareCubeMatch) {
    const numbers = squareCubeMatch[1]
      .split(",")
      .map((num) => parseInt(num.trim(), 10));

    // Buscar el primer número que sea tanto cuadrado como cubo
    for (let number of numbers) {
      const sixthRoot = Math.pow(number, 1 / 6);
      if (Number.isInteger(sixthRoot)) {
        return number.toString();
      }
    }
    return "None";
  }

  // Detectar y procesar los números primos en una lista
  const primeMatch = query.match(
    /which of the following numbers are primes: ([\d, ]+)\?/i
  );
  if (primeMatch) {
    const numbers = primeMatch[1]
      .split(",")
      .map((num) => parseInt(num.trim(), 10));

    // Filtrar los números primos
    const primes = numbers.filter(isPrime);

    // Retornar los números primos como una cadena separada por comas
    return primes.length > 0 ? primes.join(", ") : "None";
  }

  return "";
}

// Función para verificar si un número es primo8
function isPrime(num: number): boolean {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
