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

      baseEvent.prototype._events["click"]={};
      doc.addEventListener('click', function(e) {
        console.log('click');
      })

      baseEvent.prototype.baseBindReady = true;
    };

    baseEvent.prototype.addListener = function(type, listener) {
      if (!_.isFunction(listener))
      throw TypeError('listener must be a function');


      return this;
    };

    baseEvent.prototype.on = baseEvent.prototype.addListener;

    baseEvent.prototype.emit = function(type) {
    };

    baseEvent.prototype.bindDom =function  (elementId,type,handler) {
      if(!baseEvent.prototype._eventHanders[type][elementId])
        baseEvent.prototype._eventHanders[type][elementId]=[];

        baseEvent.prototype._eventHanders[type][elementId].push(handler);
    }
    return baseEvent;

  });
})(
  typeof define === 'function' && define.amd ? define : function(factory) {
    module.exports = factory(require);
  }
  // Boilerplate for AMD and Node
);