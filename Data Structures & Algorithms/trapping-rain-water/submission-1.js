class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        // i need to find the min height of left and right and subtract current height from them and thats how much water the current cell can hold
        // so for each cell i have to walk from the current cell to the right to find the max right height then take the min of left and right 
        // i could use extra space to know the max height on left and right prefixes respectively or i could just start with two pointers and when i find a left thats bigger than right pointer then i swap to finding the rightside water amount and moving to the left
        let n = height.length;
        let [left,right] = [0,n-1];
        let water = 0;
        let [lmax,rmax] = [0,0];
        while(left < right){
            if(height[left] <= height[right]){
                water += Math.max(height[left+1],height[left],lmax)-height[left+1];
                lmax = Math.max(lmax,height[left])
                left++;
            }else{
                water += Math.max(height[right-1],height[right],rmax)-height[right-1];
                rmax = Math.max(rmax,height[right]);
                right--;
            }
        }
        return water;
    }
}
