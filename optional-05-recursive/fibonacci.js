function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(10)); // Testing output harusnya 55

// Jangan hapus kode di bawah ini!
export default fibonacci;
