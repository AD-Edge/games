function calculateBounds(u,n){return adjustBounds([u-n,u+n])}function adjustBounds(u){let n=u;return n[0]<1&&(n[0]=1),n[1]>25&&(n[1]=25),n}function movementRangeSquares(u,n){let t=[],e=calculateBounds(u[0],n),o=calculateBounds(u[1],n);for(let a=e[0];a<=e[1];a++)for(let l=o[0];l<=o[1];l++)t.push([a,l]);return t}