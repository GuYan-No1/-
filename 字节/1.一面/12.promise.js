function Promise(executor) {
  let _this = this;
  _this.status = 'pending';
  _this.value = null;
  _this.reason = null;
  _this.fulfilledCallback = [];
  _this.rejectedCallback = [];
  function resolve(value) {
    if (value instanceof Promise) {
      value.then(y => resolve(y), r => reject(r));
    }
    if (_this.status === 'pending') {
      _this.value = value;
      _this.status = 'fulfilled';
      _this.fulfilledCallback.forEach(fn => fn());
    }
  }
  function reject(reason) {
    if (_this.status === 'pending') {
      _this.reason = reason;
      _this.status = 'rejected';
      _this.rejectedCallback.forEach(fn => fn());
    }
  }
  try {
    executor(resolve, reject)
  } catch (err) {
    reject(err);
  }

}

function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x) return reject(new TypeError('循环引用'));
  if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
    let called;
    try {
      let then = x.then;
      if (typeof then === 'function') {
        then.call(x, y => {
          if (called) return;
          called = true;
          resolvePromise(promise2, y, resolve, reject)
        }, r => {
          if (called) return;
          called = true;
          reject(r)
        });
      } else {
        if (called) return;
        called = true;
        resolve(x);
      }
    } catch (e) {
      if (called) return;
      called = true;
      reject(e);
    }
  } else {
    resolve(x)
  }
}

Promise.prototype.then = function (onFulfilled, onRejected) {
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v;
  onRejected = typeof onRejected === 'function' ? onRejected : r => { throw r };
  let promise2 = new Promise((resolve, reject) => {
    let _this = this;
    if (_this.status === 'fulfilled') {
      setTimeout(() => {
        try {
          let x = onFulfilled(_this.value);
          resolvePromise(promise2, x, resolve, reject)
        } catch (e) {
          reject(e);
        }
      })
    };
    if (_this.status === 'rejected') {
      setTimeout(() => {
        try {
          let x = onRejected(_this.reason);
          resolvePromise(promise2, x, resolve, reject)
        } catch (e) {
          reject(e);
        }
      })
    }
    if (_this.status === 'pending') {
      _this.fulfilledCallback.push(() => {
        setTimeout(() => {
          try {
            let x = onFulfilled(_this.value);
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e);
          }
        })
      });
      _this.rejectedCallback.push(() => {
        setTimeout(() => {
          try {
            let x = onRejected(_this.reason);
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            reject(e);
          }
        })
      })
    }
  });

  return promise2;
}
Promise.deferred = function () {
  let defer = {};
  defer.promise = new Promise((resolve, reject) => {
    defer.resolve = resolve;
    defer.reject = reject;
  })
  return defer;
}
module.exports = Promise;

