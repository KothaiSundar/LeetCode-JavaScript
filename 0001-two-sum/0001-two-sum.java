class Solution {
    public int[] twoSum(int[] nums, int target) {

        for(int i=0;i<nums.length;i++)
        {
            for(int j=i+1;j<nums.length;j++)
            {
            if(nums[i]+nums[j]==target)
            { 
                      return new int[] {i, j}; // Return the indices immediately
             }
            }
        }
        throw new IllegalArgumentException("No two sum solution"); // Throw exception if no solution
    }
}