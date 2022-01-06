var obj = {};

// 这个就是顶层原型
console.log(obj.__proto__); // [Object: null prototype] {}   这个也就是Object.peototype 
console.log(obj.__proto__.__proto__);  // Object.peototype 这个原型对象当然也有__proto__，指向null
