var a = [1, 2, 3, 4, 5];
var s = 0;
a.forEach(function (v, i) {
    if (i % 2 == 0) {
        s = s + v;
    }
});
console.log(s);
var max = a[0];
var min = a[0];
a.forEach(function (va, i) {
    if (va > max) {
        max = va;
    }
    if (va < min) {
        min = va;
    }
});
console.log(max);
console.log(min);
