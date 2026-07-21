/**
 * Deterministic hash for a string seed; returns a value in [0, 1).
 */
export function hashSeed(seed: string): number {
  let h = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    h ^= seed.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return ((h >>> 0) % 100000) / 100000;
}

/**
 * Pick a deterministic number in [min, max) from a string seed.
 */
export function seededRange(seed: string, min: number, max: number): number {
  return min + hashSeed(seed) * (max - min);
}
