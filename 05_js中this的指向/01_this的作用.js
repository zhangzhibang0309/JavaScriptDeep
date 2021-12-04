// 从某些角度来说，开发中如果没有this，很多的问题我们也是有解决方案的
// 但是没有this，会让我们写代码很不方便
// 不用this 下面就要obj.name 如果对象改名 还需要改成和对象名对应的
var obj = {
    name: "zzb",
    eating: function() {
        console.log(this.name + "在吃东西")
    },
    running: function() {
        console.log(this.name + "在跑步")
    },
    studing: function() {
        console.log(this.name + "在学习")
    }
}