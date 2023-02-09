x = [];
let s = 1;
function my_function(n) {
    if (n > 1) {
        x.push(s);
        s = s * n;
        return my_function(n - 1);
    }
    else if (n == 1) {
        s = s * n;
        x.push(s);
        return x;
    }
}
console.log(my_function(5).join(' '));