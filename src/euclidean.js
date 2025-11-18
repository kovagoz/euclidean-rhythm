export function bresenhamEuclidean(onsets, pulses) {
  const slope = onsets / pulses;
  const result = [];
  let previous = null;

  for (let i = 0; i < pulses; i++) {
    const current = Math.floor(i * slope);
    result.push(current !== previous ? 1 : 0);
    previous = current;
  }

  return result;
}

export function rotatePattern(arr, n) {
  const len = arr.length
  if (len === 0) return arr
  const normalized = ((n % len) + len) % len
  return arr.slice(-normalized).concat(arr.slice(0, -normalized))
}
