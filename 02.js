let x = '';
let i = 1;
function my_function(n) {
    if (n > 1) {
        x += ' ' + i;
        i++;
        return my_function(n - 1);
    }
    else if (n == 1) {
        x += ' ' + i;
        return x;
    }
}
console.log(my_function(9));