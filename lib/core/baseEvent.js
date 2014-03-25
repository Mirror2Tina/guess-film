(function(define) {
  define(function(require) {

    require('_');

      function baseEvent() {
        this.baseinit(document);
      }

    baseEvent.prototype.baseBindReady = false;

    baseEvent.prototype._events = {};

    baseEvent.prototype.baseinit = function(doc) {
      if (baseEvent.prototype.baseBindReady)
        return;

      doc.addEventListener('click', function(e) {
        console.log('click');
      })
      baseEvent.prototype.baseBindReady = true;
    };

    baseEvent.prototype.addListener = function(type, listener) {
      if (!_.isFunction(listener))
      throw TypeError('listener must be a function');

      // To avoid recursion in the case that type === "newListener"! Before
      // adding it to the listeners, first emit "newListener".
      if (baseEvent.prototype._events.newListener)
        this.emit('newListener', type,
          util.isFunction(listener.listener) ?
          listener.listener : listener);

      if (!baseEvent.prototype._events[type])
      // Optimize the case of one listener. Don't need the extra array object.
        baseEvent.prototype._events[type] = listener;
      else if (util.isObject(this._events[type]))
      // If we've already got an array, just append.
        baseEvent.prototype._events[type].push(listener);
      else
      // Adding the second element, need to change to array.
        baseEvent.prototype._events[type] = [this._events[type], listener];

      return this;
    };

    baseEvent.prototype.on = baseEvent.prototype.addListener;

    baseEvent.prototype.emit = function(type) {
      var er, handler, len, args, i, listeners;

      if (!this._events)
        this._events = {};

      // If there is no 'error' event listener then throw.
      if (type === 'error' && !this._events.error) {
        er = arguments[1];
        if (this.domain) {
          if (!er)
            er = new Error('Uncaught, unspecified "error" event.');
          er.domainEmitter = this;
          er.domain = this.domain;
          er.domainThrown = false;
          this.domain.emit('error', er);
        } else if (er instanceof Error) {
          throw er; // Unhandled 'error' event
        } else {
          throw Error('Uncaught, unspecified "error" event.');
        }
        return false;
      }

      handler = this._events[type];

      if (util.isUndefined(handler))
        return false;

      if (this.domain && this !== process)
        this.domain.enter();

      if (util.isFunction(handler)) {
        switch (arguments.length) {
          // fast cases
          case 1:
            handler.call(this);
            break;
          case 2:
            handler.call(this, arguments[1]);
            break;
          case 3:
            handler.call(this, arguments[1], arguments[2]);
            break;
            // slower
          default:
            len = arguments.length;
            args = new Array(len - 1);
            for (i = 1; i < len; i++)
              args[i - 1] = arguments[i];
            handler.apply(this, args);
        }
      } else if (util.isObject(handler)) {
        len = arguments.length;
        args = new Array(len - 1);
        for (i = 1; i < len; i++)
          args[i - 1] = arguments[i];

        listeners = handler.slice();
        len = listeners.length;
        for (i = 0; i < len; i++)
          listeners[i].apply(this, args);
      }

      if (this.domain && this !== process)
        this.domain.exit();

      return true;
    };
    return baseEvent;

  });
})(
  typeof define === 'function' && define.amd ? define : function(factory) {
    module.exports = factory(require);
  }
  // Boilerplate for AMD and Node
);