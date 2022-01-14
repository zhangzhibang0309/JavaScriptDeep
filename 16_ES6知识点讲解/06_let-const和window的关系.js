// VO/AO/GO => VE
// 之前的时候VO指向GO 然后window会指向GO
// 所以var定义的变量会放到window

// 但是在最新的标准中VO变成了VE（variable environment） 然后指向也不是GO AO 而是_variables: VariableMap 这么一个对象 这是一个hashMap 这个对象已经和window不相等了 但是为了支持之前的代码 如果你用var声明的变量 他还是会放到window 但是并不会完全和window相等