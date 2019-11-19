- 力扣：打家劫舍：
  - 不能够相邻的偷，偷最多的钱。
  - ABCD 动态规划算法
  选择A    不选择A
  CD       BCD
          B   CD

- 每一个位置中最大的值决策时这样的：
 - Math.max() --> 求2者之间的最大值
 - i=0 Math.max( , ) 
 nums=[1,2,3,1]
 - dp[i]=Math.max(nums[i]+dp[i-2],dp[i-1])
  
 