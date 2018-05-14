function Robot ( awareness, reveries) {
    this.awareness = awareness
    this.reveries = reveries
    this.action= function () {
        return this.awareness * this.reveries
   }
}
undefined
var Ai = new Robot (Math.PI, Math.E)
undefined
Ai.action()
8.539734222673566
var Ai = new Robot (Math.PI, Math.LOG10E)
undefined
Ai.reveries
0.4342944819032518
Ai.aw
undefined
Ai.awareness
3.141592653589793
Ai.action()
1.3643763538418412
var Ai = new Robot (Math.SQRT1_2, Math.LOG10E)
undefined
Ai.awareness
0.7071067811865476
Ai.action();
0.3070925731856877
Math.gcd = function() {
    if (arguments.length == 2) {
        if (arguments[1] == 0)
            return arguments[0];
        else
            return Math.gcd(arguments[1], arguments[0] % arguments[1]);
    } else if (arguments.length > 2) {
        var result = Math.gcd(arguments[0], arguments[1]);
        for (var i = 2; i < arguments.length; i++)
            result = Math.gcd(result, arguments[i]);
        return result;
    }
};
gcd()
​
arguments: null
​
caller: null
​
length: 0
​
name: ""
​
prototype: Object { … }
​
<prototype>: function ()