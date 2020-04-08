export default function generateRandomNumbers(amount) {
  const numbers = [];

  while (numbers.length < amount) {
    const num = Math.floor(Math.random() * 50);

    if (!numbers.includes(num)) numbers.push(num);
  }

  return numbers;
}
