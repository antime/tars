$import("js.util.Collection","BootstrapClassLoader"),$import("js.util.LinkIterator","BootstrapClassLoader"),$import("js.util.Iterator","BootstrapClassLoader"),$import("js.lang.IndexOutOfBoundsException","BootstrapClassLoader"),$import("js.lang.UnsupportedOperationException","BootstrapClassLoader"),Class.forName({name:"class js.util.List extends js.util.Collection",listIterator:function(){var t=arguments[0]||0;if(t<0||t>this.size())throw new new js.lang.IndexOutOfBoundsException("Index: "+t);return new js.util.LinkIterator(this,t)},"protected rangeCheck":function(t){if(t<0||t>=this.size())throw new js.lang.IndexOutOfBoundsException("Index: "+t+", Size: "+size)},iterator:function(){return new js.util.Iterator(this)},"abstract removeAt":function(t){},"abstract get":function(t){},"abstract subList":function(t,e){throw new js.lang.UnsupportedOperationException},"abstract set":function(t,e){throw new js.lang.UnsupportedOperationException},indexOf:function(t){for(var e=this.listIterator();e.hasNext();){var s=e.next();if(s===t)return e.previousIndex();if(!Object.isEmpty(t)&&!Object.isEmpty(t.equals)&&Object.isFunction(t.equals)&&t.equals(s))return e.previousIndex()}return-1},lastIndexOf:function(t){for(var e=this.listIterator(this.size());e.hasPrevious();){var s=e.previous();if(s===t)return e.nextIndex();if(!Object.isEmpty(t)&&!Object.isEmpty(t.equals)&&Object.isFunction(t.equals)&&t.equals(s))return e.nextIndex()}return-1}});