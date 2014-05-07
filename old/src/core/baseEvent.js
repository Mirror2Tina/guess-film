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

      baseEvent.prototype._events["click"] = {};
      doc.addEventListener('click', function(e) {
        console.log(e, e.srcElement, e.srcElement.id, e.srcElement.className, e.srcElement.tagName);
        _.each(baseEvent.prototype._events["click"], function(value, key) {
          console.log(value, key)
        });

      })

      baseEvent.prototype.baseBindReady = true;
    };

    baseEvent.prototype.addListener = function(type, listener) {
      if (!_.isFunction(listener))
        throw TypeError('listener must be a function');


      return this;
    };

    baseEvent.prototype.on = baseEvent.prototype.addListener;

    baseEvent.prototype.emit = function(type) {};
    /**
     * [ description]
     * @param  {[type]} elementFlag flag 为 id或 class ，id以#开头 class 以. 开头
     * @param  {[type]} type        [description]
     * @param  {[type]} handler     [description]
     * @return {[type]}             [description]
     */
    baseEvent.prototype.bindDom = function(elementFlag, type, handler) {
      if (!baseEvent.prototype._eventHanders[type][elementFlag])
        baseEvent.prototype._eventHanders[type][elementFlag] = [];

      baseEvent.prototype._eventHanders[type][elementFlag].push(handler);
    }
    return baseEvent;

  });
})(
  typeof define === 'function' && define.amd ? define : function(factory) {
    module.exports = factory(require);
  }
  // Boilerplate for AMD and Node
);