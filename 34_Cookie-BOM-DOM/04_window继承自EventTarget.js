const clickHandler = () => {
  console.log("window发生了点击");
};

window.addEventListener("click", clickHandler);
window.removeEventListener("click", clickHandler);

window.addEventListener("zzb", () => {
  console.log("zzb事件");
});
window.dispatchEvent(new Event("zzb"));
