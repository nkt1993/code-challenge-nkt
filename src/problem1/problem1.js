// O(1)
var sum_to_n_a = function(n) {
    return (n*(n+1))/2;
};

// O(n) iterative
var sum_to_n_b = function(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
};

// O(n) receursive
var sum_to_n_c = function(n) {
    if (n == 0) {
        return 0;
    } else {
        return n + sum_to_n_c(n-1);
    }
};