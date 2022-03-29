 /** cookie主要是后端来设置
  * 缺点：
  * 1.将cookie附加到每一次作用域内的所有请求中，浪费资源
  * 2.明文传输
  * 3.限制大小4kb
  * 4.cookie验证登录，ios Android 小程序可能没法自动设置携带cookie
  * 5.
  */