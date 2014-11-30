/**
 * Atom.core.Event
 * @public
 * @class Atom.core.Event
 * @description Atom.core.Event是一个混合类型,给控件提供事件能力
 */
Atom.define('Atom.core.Eventable', {

    /**
     * 定义事件
     * @public
     * @method addEvents
     * @param {array} events 事件名称数组
     * @description 通过此方法定义事件名称
     * @example
     * <code>
     * </code>
     */
    addEvents : function(events) {
        this.eventsDefine = this.eventsDefine || {};
        var me = this, n;
        for(var i = 0; i < arguments.length; i++) {
            n = arguments[i];
            me.eventsDefine[n] = true;
        }
    },

    /**
     * 绑定事件
     * @public
     * @method on
     * @param {string} name 事件名称
     * @param {function} fn 监听事件
     * @description 通过此方法绑定事件监听函数
     * @example
     * <code>
     * </code>
     */
    on : function(name,fn,scope) {
        this.events = this.events || {};
        var me = this;
        if(this.eventsDefine[name]){
        	if(!me.events[name]){
        		me.events[name] = [];
        		me.events[name].push({
        			fn:fn,
        			scope:scope
        		});
        	}else{
        		me.events[name].push({
        			fn:fn,
        			scope:scope
        		});
        	}
            // me.events[name] = fn;
        }
        
    },

    /**
     * 解除绑定事件
     * @public
     * @method on
     * @param {string} name 事件名称
     * @description 通过此方法解除绑定事件监听函数
     * @example
     * <code>
     * </code>
     */
    un: function (name) {
        if (this.events && this.events[name]) {
            this.events[name] = null;
            delete this.events[name];
        }
    },

    /**
     * 锁定
     * @public
     * @method lock
     * @description 锁定后,所有事件失效
     * @example
     * <code>
     * </code>
     */
    lock : function() {
        this.lockFlag = true;
    },

    /**
     * 解锁
     * @public
     * @method unlock
     * @description 解除锁定后,所有事件生效
     * @example
     * <code>
     * </code>
     */
    unlock : function() {
        this.lockFlag = false;
    },

    /**
     * 锁定
     * @public
     * @method ATOM_lock
     * @description 锁定后,所有事件失效
     * @example
     * <code>
     * </code>
     */
    ATOM_lock : function() {
        this.lockFlag = true;
    },

    /**
     * 解锁
     * @public
     * @method ATOM_unlock
     * @description 解除锁定后,所有事件生效
     * @example
     * <code>
     * </code>
     */
    ATOM_unlock : function() {
        this.lockFlag = false;
    },


    /**
     * 调用事件
     * @public
     * @method fireEvent
     * @param {string} name 事件名称
     * @param {obj} arguments 参数
     * @description 通过此方法调用事件
     * @example
     * <code>
     * </code>
     */
    fireEvent : function(name, argu) {
        this.events = this.events || {};
        var fnAr = this.events[name];
        if(!this.lockFlag && this.eventsDefine[name] && Atom.isArray(fnAr)) {
        	var fn = fnAr[fnAr.length-1];
    		if(Atom.isFunction(fn.fn)){
	            fn.fn.apply(fn.scope||this, argu || []);
    		}
        }
    },
    
    /**
     * 事件广播
     * @public
     * @method fireEvent
     * @param {string} name 事件名称
     * @param {obj} arguments 参数
     * @description 事件广播
     * @example
     * <code>
     * </code>
     */
    publishEvent : function(name, argu) {
        this.events = this.events || {};
        var fnAr = this.events[name];
        if(!this.lockFlag && this.eventsDefine[name] && Atom.isArray(fnAr)) {
        	fnAr.each(function(i,fn){
        		if(Atom.isFunction(fn.fn)){
		            // setTimeout(function(){fn.apply(this, argu || []);},0);
		          fn.fn.apply(fn.scope||this, argu || []);
        		}
        	})
        }
    },

    bind : function(dom, type, fn) {
        if(!fn){
           return;
        }
        this.eventsCache = this.eventsCache || {};
        var me = this;
        var temp = function(e) {
            if(!me.lockFlag){
                fn.call(this, e);
            }
        };
        if(!dom.id) {
            dom.id = Atom.id();
        }
        if(dom.attachEvent) {// IE
            dom.attachEvent('on' + type, temp);
        } else {
            dom.addEventListener(type, temp, false);
        }

        if(!this.eventsCache[dom.id]) {
            this.eventsCache[dom.id] = {};
        }

        if(!this.eventsCache[dom.id][type]) {
            this.eventsCache[dom.id][type] = [];
        }

        this.eventsCache[dom.id][type].push({
            dom : dom,
            fn : temp
        });
        	// console.log(this.eventsCache);
        return temp;
    },

    unbind : function(dom, type, fn, flag) {
        if(!fn){
           return;
        }
        this.eventsCache = this.eventsCache || {};
        if(dom.detachEvent) {// IE
            dom.detachEvent('on' + type, fn);
        } else {
            dom.removeEventListener(type, fn, false);
        }

        if(flag) {
            return;
        }
        if(this.eventsCache[dom.id]&&this.eventsCache[dom.id][type]){
            this.eventsCache[dom.id][type] = null;
            delete this.eventsCache[dom.id][type];
        }
        //	console.log(this.eventsCache);
    },

    /**
     * 释放监听程序
     * @public
     * @method release
     * @description 释放监听程序
     * @example
     * <code>
     * </code>
     */
    release : function() {
        var me = this, obj;
        for(var n in this.eventsCache) {
            obj = me.eventsCache[n];
            for(var k in obj) {
                ar = obj[k];
                ar.each(function(i, j) {
                    me.unbind(j.dom, k, j.fn, true);
                });
            }
        }

        for(var n in this.eventsCache) {
            obj = me.eventsCache[n];
            for(var k in obj) {
                if(this.eventsCache[n][k]){
                    this.eventsCache[n][k] = null;
                }
                delete this.eventsCache[n][k];
            }
            if(this.eventsCache[n]){
                this.eventsCache[n] = null;
                delete this.eventsCache[n];
            }
        }

        //	console.log(this.eventsCache);
    }
});

