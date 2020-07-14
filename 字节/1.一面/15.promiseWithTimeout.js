function promiseWithTimeout(url, timer) {
  return new Promise((resolve, reject) => {
    fetch(url).then(data => data.json()).then(data => resolve(data));
    setTimeout(() => reject(Error('时间到了呀~')), timer);
  })
}