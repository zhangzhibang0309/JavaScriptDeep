// 导出方式一：
// import { add, sub } from "./utils/math.js";
// import { timeFormat, priceFormat } from "./utils/format.js";

// export { add, sub, timeFormat, priceFormat };

// 导出方式二：
// export { add, sub } from "./utils/math.js";
// export { timeFormat, priceFormat } from "./utils/format.js";

// 导出方式三：
export * from "./math.js"
export * from "./format.js"