function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5)); // Testing output harusnya 120

// Jangan hapus kode di bawah ini!
export default factorial;
