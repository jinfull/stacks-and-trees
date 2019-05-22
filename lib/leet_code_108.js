// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/


function sortedArrayToBST(nums) {

}


var sortedArrayToBST = function (nums) {
  let mid = Math.floor(nums.length / 2);
  let midEl = nums[mid];
  let left = nums.slice(0, mid + 1);
  let right = nums.slice(mid + 1);
  let answerArr = [midEl];

  for (let i = right.length - 1; i >= 0; i--) {
    answerArr.push(left[i]);
    answerArr.push(right[i]);
  }

  return answerArr;
};

// come back to me and figure out how to insert nulls 
// or go back to tree method