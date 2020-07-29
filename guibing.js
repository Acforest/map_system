function divide(p, r) {
      return Math.floor((p + r) / 2);
    }
    
    function merge(A, p, q, r) {
      const A1 = A.slice(p, q);
      const A2 = A.slice(q, r);
      A1.push(Number.MAX_SAFE_INTEGER);
      A2.push(Number.MAX_SAFE_INTEGER);
    
      for (let i = p, j = 0, k = 0; i < r; i++) {
        if (A1[j] < A2[k]) {
          A[i] = A1[j];
          j++;
        } else {
          A[i] = A2[k];
          k++;
        }
      }
    }
    
    function merge_sort(A, p = 0, r) {
      r = r || A.length;
      if (r - p === 1) {
        return;
      }
      const q = divide(p, r);
      merge_sort(A, p, q);
      merge_sort(A, q, r);
      merge(A, p, q, r);
    
      return A;
    }