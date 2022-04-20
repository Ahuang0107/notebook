/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @return {number[]}
 */
var countSubTrees = function (n, edges, labels) {
  const al = Array.from({length: n}, () => []);
  for (const [a, b] of edges) {
    al[a].push(b);
    al[b].push(a);
  }

  const cc = new Array(26).fill(0);
  const res = new Array(n).fill(0);

  (function dfs(f, vis) {
    vis[f] = true;
    const charIndex = labels[f].charCodeAt() - 'a'.charCodeAt();
    const pre = cc[charIndex];

    for (const child of al[f]) {
      if (!vis[child]) dfs(child, vis);
    }

    res[f] += ++cc[charIndex] - pre;
  })(0, new Array(n).fill(false));

  return res;
};

export {
  countSubTrees
}
