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
