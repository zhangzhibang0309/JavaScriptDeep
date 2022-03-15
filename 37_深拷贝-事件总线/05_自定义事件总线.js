class ZBEventBus {
  constructor() {
    // 这里面记录每个事件，一个事件称为一个handlers，里面包含众多函数，这些函数都由它的事件名触发
    this.eventBus = {};
  }

  // 监听 -- 事件名 回调函数 绑定this
  on(eventName, eventCallback, thisArg) {
    let handlers = this.eventBus[eventName];
    if (!handlers) {
      handlers = [];
      this.eventBus[eventName] = handlers;
    }
    handlers.push({
      eventCallback,
      thisArg,
    });
  }

  // 移除事件
  off(eventName, eventCallback) {
    const handlers = this.eventBus[eventName];
    if (!handlers) return;

    const newHandlers = [...handlers]
    for(let i = 0;i < newHandlers.length;i++) {
        const handler = newHandlers[i]
        if(handler.eventCallback === eventCallback) {
            const index = handlers.indexOf(handler)
            handlers.splice(index,1)
        }
    }
  }

  // 触发事件 -- 事件名称 参数
  emit(eventName, ...payload) {
    const handlers = this.eventBus[eventName];
    if (!handlers) return;

    handlers.forEach((handler) => {
      handler.eventCallback.apply(handler.thisArg, payload);
    });
  }
}

const eventBus = new ZBEventBus();

// main.js
eventBus.on(
  "abc",
  function (payload) {
    console.log("监听abc", payload, this);
  },
  { name: "zzb" }
);
const handleCallback = function () {
  console.log("监听abc2", this);
};
eventBus.on("abc", handleCallback, { name: "zzb" });

// utils.js
eventBus.emit("abc", 123);

// 移除事件
eventBus.off("abc",handleCallback);

eventBus.emit("abc", 123);
