let { readFileSync } = require("fs"),
  { EOL } = require("os"),
  input = readFileSync("../input.txt", "utf-8")
    .split("\n")
    .map(n => n.split(" | "))
    .map(n => [n[0].split(" "), n[1].split(" ")]),
  sum = 0;
const knownByLength = { 2: 1, 3: 7, 4: 4, 7: 8 };
function isAnagram(n, t) {
  if (n.length !== t.length) return !1;
  const e = {};
  for (let t = 0; t < n.length; t++) e[n[t]] = (e[n[t]] || 0) + 1;
  for (let n = 0; n < t.length; n++) {
    if (!e[t[n]]) return !1;
    e[t[n]]--;
  }
  return !0;
}
function includesAll(n, t) {
  for (const e of t) if (!n.includes(e)) return !1;
  return !0;
}
for (let [n, t] of input) {
  const e = {},
    l = [],
    o = [];
  for (const t of n)
    knownByLength[t.length]
      ? (e[knownByLength[t.length]] = t)
      : 5 === t.length
      ? l.push(t)
      : o.push(t);
  const s = e[1].split(""),
    i = e[4].split(""),
    r = i.filter(n => !s.includes(n));
  for (const n of l)
    includesAll(n, s)
      ? (e[3] = n)
      : includesAll(n, r)
      ? (e[5] = n)
      : (e[2] = n);
  for (const n of o)
    includesAll(n, i)
      ? (e[9] = n)
      : includesAll(n, r)
      ? (e[6] = n)
      : (e[0] = n);
  const u = [];
  for (const n of t)
    for (const [t, l] of Object.entries(e))
      if (isAnagram(n, l)) {
        u.push(t);
        break;
      }
  sum += +u.join("");
}
console.log(sum);
