// Binary search ____________________________________________________________________
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let index = [];

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      index.push(mid);

      let i = mid - 1;
      while (i >= 0 && arr[i] === target) {
        index.push(i);
        i--;
      }

      let j = mid + 1;
      while (j <= arr.length && arr[j] === target) {
        index.push(j);
        j++;
      }
      break;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else if (arr[mid] > target) {
      right = mid - 1;
    } else {
      return -1;
    }
  }

  return index.sort((a, b) => a - b);
}
// Binary search ____________________________________________________________________

// Merge sort _________________________________________________________________________
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  function merge(l, r) {
    const result = [];
    let x = 0;
    y = 0;

    while (x < l.length && y < r.length) {
      if (l[x] < r[y]) {
        result.push(l[x]);
        x++;
      } else {
        result.push(r[y]);
        y++;
      }
    }

    return result.concat(l.slice(x)).concat(r.slice(y));
  }

  return merge(left, right);
}
// Merge sort _________________________________________________________________________

// GCD ________________________________________________________________________________

function gcd(a, b) {
  while(b !== 0) {
    let temp = b

    b = a % b
    a = temp
  }

  return a
}
console.log(gcd(20, 4))