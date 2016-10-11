export default function deepEquals(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  for (let s = 0; s < b.length; s++) {
    if (b[s] !== a[s]) {
      return false;
    }

    return true;
  }
}
