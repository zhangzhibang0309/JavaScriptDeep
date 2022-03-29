class ZCache {
  constructor(isLocal = true) {
    this.storage = isLocal ? localCache : sessionCache;
  }

  setItem(key, value) {
    this.storage.setItem(key, JSON.stringify(value));
  }

  getItem(key) {
    let value = this.storage.getItem(key);
    if (value) {
      value = JSON.parse(value);
      return value;
    }
  }

  removeItem(key) {
    this.storage.removeItem(key);
  }

  clear() {
    this.storage.clear();
  }

  key(index) {
    return this.storage.key(index);
  }

  length() {
    return this.storage.length;
  }
}

const localCache = new ZCache();
const sessionCache = new ZCache(false);

export { localCache, sessionCache };
