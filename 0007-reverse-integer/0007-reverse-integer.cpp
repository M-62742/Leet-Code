class Solution {
public:
    int reverse(int x) {
        int y = abs(x);
        long long current = 0; 
        
        while (y > 0) {
            current = current * 10 + y % 10; 
            y /= 10;
        }
        
        if (current > INT_MAX) return 0; 
        return x < 0 ? -current : current; 
    }
};
