const JSONString =
  '{"name":"zzb","age":18,"friends":{"name":"kobe"},"hobbies":["篮球","足球"]}';

const info = JSON.parse(JSONString, (key, value) => {
  // 对转化结果做拦截
  if (key === "age") {
    return value - 1;
  }
  return value;
});
console.log(info);
