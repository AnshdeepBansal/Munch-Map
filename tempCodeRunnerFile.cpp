#include <iostream>
#include <vector>
#include <algorithm>
#include <map>

using namespace std;

// Function to find the minimum swap cost to make the arrays equal
int minimalSwapCost(vector<int>& arrA, vector<int>& arrB) {
    int n = arrA.size();
    
    // Combine both arrays to check the frequency of each element
    map<int, int> freq;
    for (int x : arrA) freq[x]++;
    for (int x : arrB) freq[x]++;
    
    // If any element appears an odd number of times, return -1 (impossible)
    for (auto& [key, value] : freq) {
        if (value % 2 != 0) {
            return -1;  // Impossible to balance
        }
    }
    
    // Sort both arrays to make it easy to compare them
    sort(arrA.begin(), arrA.end());
    sort(arrB.begin(), arrB.end());
    
    // Find elements that need to be swapped
    vector<int> swapA, swapB;
    for (int i = 0; i < n; ++i) {
        if (arrA[i] != arrB[i]) {
            if (arrA[i] < arrB[i]) swapA.push_back(arrA[i]);  // From arrA to arrB
            else swapB.push_back(arrB[i]);  // From arrB to arrA
        }
    }
    
    // If swapA and swapB don't match in size, return -1 (this should not happen due to frequency check)
    if (swapA.size() != swapB.size()) return -1;
    
    // Sort swap arrays for minimum cost calculation
    sort(swapA.begin(), swapA.end());
    sort(swapB.begin(), swapB.end());

    // Find the minimum element in both arrays combined (for optimal swap cost calculation)
    int minElement = min(arrA[0], arrB[0]);

    // Calculate the total cost of swaps
    int cost = 0;
    for (int i = 0; i < swapA.size(); ++i) {
        cost += min(2 * minElement, min(swapA[i], swapB[swapB.size() - 1 - i]));
    }

    return cost;
}

int main() {
    // Example arrays
    vector<int> arrA = {4, 2, 2, 2};
    vector<int> arrB = {1, 4, 1, 2};

    // Calculate the minimum cost
    int result = minimalSwapCost(arrA, arrB);
    
    if (result == -1) {
        cout << "Impossible to make both lines equal." << endl;
    } else {
        cout << "Minimum cost to make both lines equal: " << result << endl;
    }

    return 0;
}
