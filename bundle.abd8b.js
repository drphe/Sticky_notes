! function(t) {
  function e(o) {
    if (l[o]) return l[o].exports;
    var n = l[o] = {
      i: o,
      l: !1,
      exports: {}
    };
    return t[o].call(n.exports, n, n.exports, e), n.l = !0, n.exports
  }
  var l = {};
  e.m = t, e.c = l, e.d = function(t, l, o) {
    e.o(t, l) || Object.defineProperty(t, l, {
      enumerable: !0,
      get: o
    })
  }, e.r = function(t) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(t, "__esModule", {
      value: !0
    })
  }, e.t = function(t, l) {
    if (1 & l && (t = e(t)), 8 & l) return t;
    if (4 & l && "object" == typeof t && t && t.__esModule) return t;
    var o = Object.create(null);
    if (e.r(o), Object.defineProperty(o, "default", {
        enumerable: !0,
        value: t
      }), 2 & l && "string" != typeof t)
      for (var n in t) e.d(o, n, function(e) {
        return t[e]
      }.bind(null, n));
    return o
  }, e.n = function(t) {
    var l = t && t.__esModule ? function() {
      return t.default
    } : function() {
      return t
    };
    return e.d(l, "a", l), l
  }, e.o = function(t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, e.p = "/", e(e.s = "BVUt")
}({
  "+XzI": function(t, e, l) {
    "use strict";
    (function() {
      function t(e) {
        return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, t(e)
      }

      function o(t, e) {
        for (var l = 0; l < e.length; l++) {
          var o = e[l];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
      }

      function n(t, e) {
        return n = Object.setPrototypeOf || function(t, e) {
          return t.__proto__ = e, t
        }, n(t, e)
      }

      function i(t) {
        var e = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (t) {
            return !1
          }
        }();
        return function() {
          var l, o = a(t);
          if (e) {
            var n = a(this).constructor;
            l = Reflect.construct(o, arguments, n)
          } else l = o.apply(this, arguments);
          return r(this, l)
        }
      }

      function r(e, l) {
        if (l && ("object" === t(l) || "function" == typeof l)) return l;
        if (void 0 !== l) throw new TypeError("Derived constructors may only return object or undefined");
        return function(t) {
          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t
        }(e)
      }

      function a(t) {
        return a = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }, a(t)
      }
      l.d(e, "a", (function() {
        return s
      }));
      var c = l("2mXy"),
        s = (l("9fdY"), function(t) {
          function e(t) {
            return c.call(this, t)
          }! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                writable: !0,
                configurable: !0
              }
            }), Object.defineProperty(t, "prototype", {
              writable: !1
            }), e && n(t, e)
          }(e, t);
          var l, r, a, c = i(e);
          return l = e, (r = [{
            key: "componentWillUnmount",
            value: function() {}
          }, {
            key: "componentDidMount",
            value: function() {}
          }, {
            key: "onClickButton",
            value: function() {
              window.open(COMMONCONSTANTS.PAYMENT_URL, "_blank"), this.props.logToAmplitude(COMMONCONSTANTS.CLICK_LOADER_BUTTON, {
                noteId: this.props.noteId
              })
            }
          }, {
            key: "render",
            value: function() {
              return null
            }
          }]) && o(l.prototype, r), a && o(l, a), Object.defineProperty(l, "prototype", {
            writable: !1
          }), e
        }(c.Component))
    }).call(this, l("2mXy").h)
  },
  "/Vop": function() {},
  "03eb": function() {},
  "0cdj": function(t, e, l) {
    "use strict";
    (function(t) {
      function o(t) {
        return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, o(t)
      }

      function n(t, e) {
        for (var l = 0; l < e.length; l++) {
          var o = e[l];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
      }

      function i(t, e) {
        return i = Object.setPrototypeOf || function(t, e) {
          return t.__proto__ = e, t
        }, i(t, e)
      }

      function r(t) {
        var e = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (t) {
            return !1
          }
        }();
        return function() {
          var l, o = c(t);
          if (e) {
            var n = c(this).constructor;
            l = Reflect.construct(o, arguments, n)
          } else l = o.apply(this, arguments);
          return a(this, l)
        }
      }

      function a(t, e) {
        if (e && ("object" === o(e) || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        return function(t) {
          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t
        }(t)
      }

      function c(t) {
        return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }, c(t)
      }
      l.d(e, "a", (function() {
        return u
      }));
      l("cr5L");
      var s = l("2mXy"),
        p = l("OLr9"),
        u = function(e) {
          function l(t) {
            var e;
            return (e = s.call(this, t)).state = {
              selectedFeature: null
            }, e.options = Utility.getOptions(), e
          }! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                writable: !0,
                configurable: !0
              }
            }), Object.defineProperty(t, "prototype", {
              writable: !1
            }), e && i(t, e)
          }(l, e);
          var o, a, c, s = r(l);
          return o = l, (a = [{
            key: "onClickAction",
            value: function(t) {
              this.setState({
                selectedFeature: t
              });
              var e = "";
              switch (t.id) {
                case "notesSize":
                  e = COMMONCONSTANTS.NOTE_SIZE_DROPDOWN_CLICK;
                  break;
                case "fontFamily":
                  e = COMMONCONSTANTS.FONT_FAMILY_DROPDOWN_CLICK;
                  break;
                case "fontSize":
                  e = COMMONCONSTANTS.FONT_SIZE_DROPDOWN_CLICK;
                  break;
                case "theme":
                  e = COMMONCONSTANTS.THEME_DROPDOWN_CLICK
              }
              this.props.logToAmplitude(e), TRACK({
                category: COMMONCONSTANTS.SETTINGS,
                action: e,
                label: !Utility.disablePremiumFeature(this.props.userLocalData)
              })
            }
          }, {
            key: "getJSX",
            value: function() {
              var e = this;
              return t("div", {
                className: "features-container"
              }, t("div", {
                className: "tabs"
              }, this.options.map((function() {}))), t("div", {
                className: "themes-container"
              }, t(p.a, {
                logToAmplitude: this.props.logToAmplitude,
                setParentState: this.props.setParentState,
                userLocalData: this.props.userLocalData,
                settings: this.props.settings,
                close: function() {
                  e.setState({
                    selectedFeature: null
                  })
                },
                data: Utility.getOptions().filter((function(t) {
                  return t.id == e.props.whatToShow
                }))[0]
              })))
            }
          }, {
            key: "render",
            value: function() {
              return this.getJSX()
            }
          }]) && n(o.prototype, a), c && n(o, c), Object.defineProperty(o, "prototype", {
            writable: !1
          }), l
        }(s.Component)
    }).call(this, l("2mXy").h)
  },
  "12DX": function(t, e, l) {
    "use strict";
    (function(t) {
      function o(e) {
        var l = Object(n.b)(null);
        return t("div", {
          className: "modal-container"
        }, t("div", {
          className: "background",
          onClick: function(t) {
            e.blocking || l.current && (l.current.contains(t.target) || e.close())
          }
        }, t("div", {
          className: "modal-content",
          ref: l
        }, t("div", {
          className: "header"
        }, t("span", {
          className: "title"
        }, e.title || ""), !e.blocking && t("div", {
          className: "close",
          onClick: e.close
        }, t("div", {
          className: "lnr lnr-cross-circle"
        }))), t("div", {
          className: "body"
        }, e.children))))
      }
      l.d(e, "a", (function() {
        return o
      }));
      l("ftAZ");
      var n = l("MOxe")
    }).call(this, l("2mXy").h)
  },
  "1X64": function() {},
  "1Xhv": function(t, e, l) {
    "use strict";
    (function(t) {
      function o(t) {
        return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, o(t)
      }

      function n() {
        return n = Object.assign || function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var l = arguments[e];
            for (var o in l) Object.prototype.hasOwnProperty.call(l, o) && (t[o] = l[o])
          }
          return t
        }, n.apply(this, arguments)
      }

      function i(t, e) {
        for (var l = 0; l < e.length; l++) {
          var o = e[l];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
      }

      function r() {
        return r = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, l) {
          var o = a(t, e);
          if (o) {
            var n = Object.getOwnPropertyDescriptor(o, e);
            return n.get ? n.get.call(arguments.length < 3 ? t : l) : n.value
          }
        }, r.apply(this, arguments)
      }

      function a(t, e) {
        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = f(t)););
        return t
      }

      function c(t, e) {
        return c = Object.setPrototypeOf || function(t, e) {
          return t.__proto__ = e, t
        }, c(t, e)
      }

      function s(t) {
        var e = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (t) {
            return !1
          }
        }();
        return function() {
          var l, o = f(t);
          if (e) {
            var n = f(this).constructor;
            l = Reflect.construct(o, arguments, n)
          } else l = o.apply(this, arguments);
          return p(this, l)
        }
      }

      function p(t, e) {
        if (e && ("object" === o(e) || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        return u(t)
      }

      function u(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }

      function f(t) {
        return f = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }, f(t)
      }
      l.d(e, "a", (function() {
        return h
      }));
      l("PW7t");
      var h = function(e) {
        function l(t) {
          var e;
          return (e = h.call(this, t)).setWrapperRef = e.setWrapperRef.bind(u(e)), e
        }! function(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(t, "prototype", {
            writable: !1
          }), e && c(t, e)
        }(l, e);
        var o, a, p, h = s(l);
        return o = l, (a = [{
          key: "setWrapperRef",
          value: function(t) {
            this.wrapperRef = t
          }
        }, {
          key: "componentDidMount",
          value: function() {
            r(f(l.prototype), "componentDidMount", this).call(this)
          }
        }, {
          key: "componentWillUnmount",
          value: function() {
            r(f(l.prototype), "componentWillUnmount", this).call(this)
          }
        }, {
          key: "itemOnClick",
          value: function(e) {
            var l = !1;
            if (this.props.userLocalData && this.props.userLocalData.installDate && (l = !0), !Utility.disablePremiumFeature(this.props.userLocalData)) this.props.setParentState({
              upgradePopup: {
                text: "Backup interval"
              }
            });
            else {
              var o = Utility.getPriceObject();
              if (l) {
                var i = n({}, this.props.userLocalData);
                i.backupSettings.interval = e, MessagePassing.send({
                  key: COMMONCONSTANTS.SAVE_USER_LOCAL_DATA,
                  value: i
                }), this.props.logToAmplitude(COMMONCONSTANTS.BACKUP_OPTION_CHANGE, {
                  backupInterval: e
                }), TRACK({
                  category: COMMONCONSTANTS.AUTH,
                  action: COMMONCONSTANTS.BACKUP_OPTION_CHANGE,
                  label: e
                }), this.props.close()
              } else this.props.setParentState({
                notification: {
                  actionType: COMMONCONSTANTS.NOTIFICATION_WITH_CROSS,
                  showType: "info",
                  timer: 1e4,
                  children: t("span", null, "Backup interval change is a Premium feature. please ", t("a", {
                    href: COMMONCONSTANTS.LICENSE_BUY_URL,
                    target: "_blank"
                  }, "Buy License "), ". You can use coupon code ", o.couponCodeName, " to get ", o.percentOff, "% OFF for 6 months and 50%OFF afterwards")
                }
              })
            }
          }
        }, {
          key: "getJSX",
          value: function() {
            return this.backupSettings = this.props.userLocalData.backupSettings, t("div", {
              className: "backup-settings",
              ref: this.setWrapperRef
            }, t("div", {
              className: "arrow-container"
            }, t("span", {
              className: "arrow-up"
            })), t("div", {
              className: "items-container"
            }, t("div", {
              className: "item",
              onClick: this.itemOnClick.bind(this, "daily")
            }, t("span", {
              className: "label"
            }, "Daily")), t("div", {
              className: "item",
              onClick: this.itemOnClick.bind(this, "weekly")
            }, t("span", {
              className: "label"
            }, "Weekly")), t("div", {
              className: "item",
              onClick: this.itemOnClick.bind(this, "never")
            }, t("span", {
              className: "label"
            }, "Never"))))
          }
        }, {
          key: "render",
          value: function() {
            return this.getJSX()
          }
        }]) && i(o.prototype, a), p && i(o, p), Object.defineProperty(o, "prototype", {
          writable: !1
        }), l
      }(l("V6Lh").a)
    }).call(this, l("2mXy").h)
  },
  "1s1d": function(t, e, l) {
    "use strict";
    (function(t) {
      function o(t) {
        return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, o(t)
      }

      function n() {
        return n = Object.assign || function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var l = arguments[e];
            for (var o in l) Object.prototype.hasOwnProperty.call(l, o) && (t[o] = l[o])
          }
          return t
        }, n.apply(this, arguments)
      }

      function i(t, e) {
        for (var l = 0; l < e.length; l++) {
          var o = e[l];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
      }

      function r(t, e) {
        return r = Object.setPrototypeOf || function(t, e) {
          return t.__proto__ = e, t
        }, r(t, e)
      }

      function a(t) {
        var e = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (t) {
            return !1
          }
        }();
        return function() {
          var l, o = s(t);
          if (e) {
            var n = s(this).constructor;
            l = Reflect.construct(o, arguments, n)
          } else l = o.apply(this, arguments);
          return c(this, l)
        }
      }

      function c(t, e) {
        if (e && ("object" === o(e) || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        return function(t) {
          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t
        }(t)
      }

      function s(t) {
        return s = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }, s(t)
      }
      l.d(e, "a", (function() {
        return h
      }));
      var p = l("2mXy"),
        u = l("RJ2T"),
        f = l("uK48"),
        h = (l("C7V0"), function(e) {
          function l(t) {
            var e;
            return (e = p.call(this, t)).state = {
              linkEditorData: null,
              createLinkData: null,
              mounted: !1,
              loading: !1
            }, e
          }! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                writable: !0,
                configurable: !0
              }
            }), Object.defineProperty(t, "prototype", {
              writable: !1
            }), e && r(t, e)
          }(l, e);
          var o, c, s, p = a(l);
          return o = l, (c = [{
            key: "componentWillUnmount",
            value: function() {
              this.unbindEvents(), this.editor = null
            }
          }, {
            key: "onCloseLinkEditor",
            value: function() {
              this.setState({
                linkEditorData: null
              })
            }
          }, {
            key: "onClickUnlink",
            value: function(t) {
              for (var e = t.index, l = t.ops, o = 0, n = 0, i = l.length; n < i; ++n)
                if (l[n].attributes && l[n].attributes.link) {
                  if (o == e) {
                    delete l[n].attributes;
                    break
                  }++o
                } this.editor.setContents({
                ops: l
              }, "user"), this.setState({
                linkEditorData: null
              })
            }
          }, {
            key: "editLink",
            value: function(t) {
              for (var e = t.href, l = t.text, o = t.index, n = t.ops, i = 0, r = 0, a = n.length; r < a; ++r)
                if (n[r].attributes && n[r].attributes.link) {
                  if (i == o) {
                    n[r].insert = l, n[r].attributes.link = e;
                    break
                  }++i
                } this.editor.setContents({
                ops: n
              }, "user"), this.setState({
                linkEditorData: null
              })
            }
          }, {
            key: "onClickAnchorTag",
            value: function(t) {
              for (var e = this.editor.getContents().ops, l = this.editor.root.getElementsByTagName("a"), o = 0, n = 0; n < l.length; ++n)
                if (l[n] == t.target) {
                  o = n;
                  break
                } var i = t.target;
              if ("A" == i.nodeName) {
                var r = i.innerText,
                  a = i.getAttribute("href"),
                  c = this.editor.root.getBoundingClientRect(),
                  s = t.clientX - c.left,
                  p = t.clientY - c.top;
                s + 200 > c.width && (s = c.width - 205), p + 100 > c.height && (p = c.height - 120), this.setState({
                  linkEditorData: {
                    ops: e,
                    index: o,
                    el: t.target,
                    text: r,
                    href: a,
                    x: s,
                    y: p
                  }
                })
              }
            }
          }, {
            key: "addMatcher",
            value: function() {
              this.editor.clipboard.addMatcher(Node.TEXT_NODE, (function(t, e) {
                if ("string" == typeof t.data) {
                  var l = t.data.match(/https?:\/\/[^\s]+/g);
                  if (l && l.length > 0) {
                    var o = [],
                      n = t.data;
                    l.forEach((function(t) {
                      var e = n.split(t),
                        l = e.shift();
                      o.push({
                        insert: l
                      }), o.push({
                        insert: t,
                        attributes: {
                          link: t,
                          id: (new Date).getTime()
                        }
                      }), n = e.join(t)
                    })), o.push({
                      insert: n
                    }), e.ops = o
                  }
                  return e
                }
              }))
            }
          }, {
            key: "makeLink",
            value: function() {
              var e = this.editor.getSelection();
              if (e && 0 != e.length) {
                var l = this.editor.getBounds(e.index),
                  o = this.editor.root.getBoundingClientRect(),
                  n = l.left - o.left,
                  i = l.top - o.top;
                n + 200 > o.width && (n = o.width - 205), i + 100 > o.height && (i = o.height - 100), i - 100 < 0 && (i = 10), this.setState({
                  createLinkData: {
                    x: 0,
                    y: i,
                    range: e
                  }
                })
              } else this.props.setParentState({
                notification: {
                  actionType: COMMONCONSTANTS.NOTIFICATION_WITH_CROSS,
                  showType: "info",
                  autoClose: !0,
                  timer: 3e3,
                  children: t("span", null, "Please select some text to make it a link.")
                }
              })
            }
          }, {
            key: "onClickCreateLink",
            value: function(t) {
              var e = t.range,
                l = t.text;
              this.editor.setSelection(e.index, e.length), this.editor.format("link", l), this.setState({
                createLinkData: null
              })
            }
          }, {
            key: "afterMount",
            value: function() {
              var t = {
                  syntax: !0,
                  toolbar: {
                    container: "#toolbar-" + this.props.id
                  }
                },
                e = Quill.import("blots/block");
              e.tagName = "DIV", Quill.register(e, !0);
              var l = Quill.import("attributors/class/color"),
                o = Quill.import("attributors/class/background"),
                n = Quill.import("attributors/style/size");
              Quill.register(o, !0), Quill.register(l, !0), Quill.register(n, !0), this.editor = new Quill("#" + this.props.id, {
                theme: "snow",
                formats: ["bold", "italic", "underline", "link", "strike", "list", "color", "background", "size", "code-block"],
                modules: t
              }), this.setContentWithLazyLoading(), this.editor.history.clear(), this.bindEvents()
            }
          }, {
            key: "setContentWithLazyLoading",
            value: function() {
              if (this.setState({
                  loading: !1
                }), this.props.delta.ops.length > 100) {
                var t = {
                  ops: this.props.delta.ops.slice(0, 100).concat({
                    insert: "\n\n\n Loading rest of your data ...",
                    attributes: {
                      bold: !0
                    }
                  })
                };
                this.editor.setContents(t, "silent"), this.setState({
                  loading: !0
                }), this.partialDataId && (clearTimeout(this.partialDataId), this.partialDataId = null);
                var e = this;
                this.partialDataId = setTimeout((function() {
                  e.editor.setContents(e.props.delta, "silent"), e.setState({
                    loading: !1
                  })
                }), 0)
              } else this.editor.setContents(this.props.delta, "silent")
            }
          }, {
            key: "clearNote",
            value: function() {
              this.editor.setContents({
                ops: []
              }, "user")
            }
          }, {
            key: "componentDidMount",
            value: function() {
              this.setState({
                mounted: !0
              }, this.afterMount.bind(this))
            }
          }, {
            key: "onTextChange",
            value: function() {
              if (localStorage[Utility.getBackupKey(this.props.id)] = "true", this.editor) {
                var t = n({}, this.editor.getContents());
                this.props.onTextChange(t)
              }
            }
          }, {
            key: "onPaste",
            value: function(t) {
              var e = t.clipboardData.getData("text/html"),
                l = Utility.getNoteMetaDataForClipboard(e),
                o = n({
                  noteId: this.props.id
                }, l);
              this.props.logToAmplitude(COMMONCONSTANTS.PASTE_ON_NOTE, o), TRACK({
                category: COMMONCONSTANTS.NOTES,
                action: COMMONCONSTANTS.PASTE_ON_NOTE,
                label: this.props.id
              })
            }
          }, {
            key: "onCopy",
            value: function(t) {
              var e = t.clipboardData.getData("text/html"),
                l = Utility.getNoteMetaDataForClipboard(e),
                o = n({
                  noteId: this.props.id
                }, l);
              this.props.logToAmplitude(COMMONCONSTANTS.COPY_FROM_NOTE, o), TRACK({
                category: COMMONCONSTANTS.NOTES,
                action: COMMONCONSTANTS.COPY_FROM_NOTE,
                label: this.props.id
              })
            }
          }, {
            key: "bindEvents",
            value: function() {
              this.editor.on("text-change", this.onTextChange.bind(this)), this.editor.root.addEventListener("click", this.props.onFocusIn), this.editor.root.addEventListener("click", this.onClickAnchorTag.bind(this)), this.editor.root.addEventListener("keydown", this.onKeyDown.bind(this)), this.editor.root.addEventListener("paste", this.onPaste.bind(this)), this.editor.root.addEventListener("copy", this.onCopy.bind(this)), this.addMatcher()
            }
          }, {
            key: "unbindEvents",
            value: function() {
              this.editor.off("text-change", this.onTextChange.bind(this)), this.editor.root.removeEventListener("click", this.props.onFocusIn), this.editor.root.removeEventListener("click", this.onClickAnchorTag.bind(this)), this.editor.root.removeEventListener("keydown", this.onKeyDown.bind(this)), this.editor.root.removeEventListener("paste", this.onPaste.bind(this)), this.editor.root.removeEventListener("copy", this.onCopy.bind(this))
            }
          }, {
            key: "onKeyDown",
            value: function(t) {
              if ((t.metaKey || t.ctrlKey) && (66 == t.keyCode || 85 == t.keyCode || 73 == t.keyCode)) {
                var e = !1,
                  l = "";
                return 66 == t.keyCode && (l = "bold"), 85 == t.keyCode && (l = "italic"), 73 == t.keyCode && (l = "underline"), void((t.metaKey || t.ctrlKey) && (this.props.logToAmplitude(COMMONCONSTANTS.RICH_TEXT_KEYBOARD_SHORTCUT_CLICK, {
                  keyCode: l,
                  disablePremiumFeature: e
                }), TRACK({
                  category: COMMONCONSTANTS.NOTES,
                  action: COMMONCONSTANTS.RICH_TEXT_KEYBOARD_SHORTCUT_CLICK,
                  label: l,
                  value: 1
                })))
              }
            }
          }, {
            key: "itemOnClick",
            value: function(t) {
              this.props.logToAmplitude(COMMONCONSTANTS.RICH_TEXT_ACTIONBAR_CLICK, {
                action: t,
                disablePremiumFeature: !Utility.disablePremiumFeature(this.props.userLocalData)
              }), TRACK({
                category: COMMONCONSTANTS.NOTES,
                action: COMMONCONSTANTS.RICH_TEXT_ACTIONBAR_CLICK,
                label: t,
                value: !Utility.disablePremiumFeature(this.props.userLocalData) ? 0 : 1
              }), "link" == t && this.makeLink()
            }
          }, {
            key: "getStyleForNote",
            value: function() {
              var t = this.props.settings,
                e = {};
              return Utility.getOptions().forEach((function(l) {
                var o = l.options.filter((function(e) {
                  return e.id == t.value[l.id]
                }))[0].value;
                switch (l.id) {
                  case "fontFamily":
                    e.fontFamily = o;
                    break;
                  case "fontSize":
                    e.fontSize = o + "px"
                }
              })), e
            }
          }, {
            key: "render",
            value: function() {
              var e = this;
              return t("div", {
                className: "editor-wrapper pell-content s".concat(this.props.id)
              }, this.state.loading && t("span", {
                className: "loading-container"
              }, "Loading ..."), t("div", {
                style: this.getStyleForNote(),
                id: this.props.id,
                className: "editor ".concat(this.props.id)
              }), this.state.mounted && t("div", {
                id: "toolbar-" + this.props.id,
                className: "menu  pell-actionbar"
              }, t("button", {
                className: "item help-text ql-bold pell-button",
                onClick: function() {
                  e.itemOnClick("bold")
                }
              }, t("span", {
                className: "text-container"
              }, t("span", {
                class: "text"
              }, "Bold"), t("span", {
                className: "triangle"
              }))), t("button", {
                className: "item help-text ql-italic pell-button",
                onClick: function() {
                  e.itemOnClick("italic")
                }
              }, t("span", {
                className: "text-container"
              }, t("span", {
                class: "text"
              }, "Italic"), t("span", {
                className: "triangle"
              }))), t("button", {
                className: "item help-text ql-underline pell-button",
                onClick: function() {
                  e.itemOnClick("underline")
                }
              }, t("span", {
                className: "text-container"
              }, t("span", {
                class: "text"
              }, "Underline"), t("span", {
                className: "triangle"
              }))), t("button", {
                className: "item help-text ql-strike pell-button",
                onClick: function() {
                  e.itemOnClick("strike")
                }
              }, t("span", {
                className: "text-container"
              }, t("span", {
                class: "text"
              }, "Strike"), t("span", {
                className: "triangle"
              }))), t("button", {
                className: "item help-text ql-list pell-button",
                value: "bullet",
                onClick: function() {
                  e.itemOnClick("list")
                }
              }, t("span", {
                className: "text-container"
              }, t("span", {
                class: "text"
              }, "List"), t("span", {
                className: "triangle"
              }))), t("button", {
                className: "item help-text ql-link pell-button",
                onClick: function() {
                  e.itemOnClick("link")
                }
              }, t("span", {
                className: "text-container"
              }, t("span", {
                class: "text"
              }, "Link"), t("span", {
                className: "triangle"
              }))), t("button", {
                className: "item ql-code-block help-text pell-button"
              }, t("span", {
                className: "text-container right"
              }, t("span", {
                class: "text"
              }, "Code block"), t("span", {
                className: "triangle"
              }))), t("button", {
                className: "item help-text ql-clean pell-button"
              }, t("span", {
                className: "text-container right"
              }, t("span", {
                class: "text"
              }, "Clear Formatting"), t("span", {
                className: "triangle"
              }))), t("span", {
                class: "ql-formats"
              }, t("div", {
                className: "help-text"
              }, t("span", {
                className: "text-container right"
              }, t("span", {
                class: "text"
              }, "Text Color"), t("span", {
                className: "triangle"
              })), t("select", {
                class: "ql-color"
              }, t("option", {
                value: "color1"
              }), t("option", {
                value: "color2"
              }), t("option", {
                value: "color3"
              }), t("option", {
                value: "color4"
              }), t("option", {
                value: "color5"
              }), t("option", {
                value: "color6"
              }), t("option", {
                value: "color7"
              }), t("option", {
                value: "color8"
              }))), t("div", {
                className: "help-text"
              }, t("span", {
                className: "text-container right"
              }, t("span", {
                class: "text"
              }, "Highlighter"), t("span", {
                className: "triangle"
              })), t("select", {
                class: "ql-background"
              }, t("option", {
                value: "color1"
              }), t("option", {
                value: "color2"
              }), t("option", {
                value: "color3"
              }), t("option", {
                value: "color4"
              }), t("option", {
                value: "color5"
              }), t("option", {
                value: "color6"
              }), t("option", {
                value: "color7"
              }), t("option", {
                value: "color8"
              }))))), this.state.linkEditorData && t(u.a, {
                setParentState: this.props.setParentState,
                logToAmplitude: this.props.logToAmplitude,
                onClickUnlink: this.onClickUnlink.bind(this),
                close: this.onCloseLinkEditor.bind(this),
                data: this.state.linkEditorData,
                editLink: this.editLink.bind(this)
              }), this.state.createLinkData && t(f.a, {
                setParentState: this.props.setParentState,
                logToAmplitude: this.props.logToAmplitude,
                data: this.state.createLinkData,
                close: function() {
                  e.setState({
                    createLinkData: null
                  })
                },
                onClickCreateLink: this.onClickCreateLink.bind(this)
              }))
            }
          }]) && i(o.prototype, c), s && i(o, s), Object.defineProperty(o, "prototype", {
            writable: !1
          }), l
        }(p.Component))
    }).call(this, l("2mXy").h)
  },
  "2mXy": function(t, e, l) {
    "use strict";

    function o(t, e) {
      for (var l in e) t[l] = e[l];
      return t
    }

    function n(t) {
      var e = t.parentNode;
      e && e.removeChild(t)
    }

    function i(t, e, l) {
      var o, n, i, a = arguments,
        c = {};
      for (i in e) "key" == i ? o = e[i] : "ref" == i ? n = e[i] : c[i] = e[i];
      if (arguments.length > 3)
        for (l = [l], i = 3; i < arguments.length; i++) l.push(a[i]);
      if (null != l && (c.children = l), "function" == typeof t && null != t.defaultProps)
        for (i in t.defaultProps) void 0 === c[i] && (c[i] = t.defaultProps[i]);
      return r(t, c, o, n, null)
    }

    function r(t, e, l, o, n) {
      var i = {
        type: t,
        props: e,
        key: l,
        ref: o,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: null == n ? ++L.__v : n
      };
      return null != L.vnode && L.vnode(i), i
    }

    function a() {
      return {
        current: null
      }
    }

    function c(t) {
      return t.children
    }

    function s(t, e) {
      this.props = t, this.context = e
    }

    function p(t, e) {
      if (null == e) return t.__ ? p(t.__, t.__.__k.indexOf(t) + 1) : null;
      for (var l; e < t.__k.length; e++)
        if (null != (l = t.__k[e]) && null != l.__e) return l.__e;
      return "function" == typeof t.type ? p(t) : null
    }

    function u(t) {
      var e, l;
      if (null != (t = t.__) && null != t.__c) {
        for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
          if (null != (l = t.__k[e]) && null != l.__e) {
            t.__e = t.__c.base = l.__e;
            break
          } return u(t)
      }
    }

    function f(t) {
      (!t.__d && (t.__d = !0) && D.push(t) && !h.__r++ || I !== L.debounceRendering) && ((I = L.debounceRendering) || P)(h)
    }

    function h() {
      for (var t; h.__r = D.length;) t = D.sort((function(t, e) {
        return t.__v.__b - e.__v.__b
      })), D = [], t.some((function(t) {
        var e, l, n, i, r, a;
        t.__d && (r = (i = (e = t).__v).__e, (a = e.__P) && (l = [], (n = o({}, i)).__v = i.__v + 1, b(a, i, n, e.__n, void 0 !== a.ownerSVGElement, null != i.__h ? [r] : null, l, null == r ? p(i) : r, i.__h), N(l, i), i.__e != r && u(i)))
      }))
    }

    function d(t, e, l, o, n, i, a, s, u, f) {
      var h, d, y, g, C, v, O, N = o && o.__k || B,
        M = N.length;
      for (l.__k = [], h = 0; h < e.length; h++)
        if (null != (g = l.__k[h] = null == (g = e[h]) || "boolean" == typeof g ? null : "string" == typeof g || "number" == typeof g ? r(null, g, null, null, g) : Array.isArray(g) ? r(c, {
            children: g
          }, null, null, null) : g.__b > 0 ? r(g.type, g.props, g.key, null, g.__v) : g)) {
          if (g.__ = l, g.__b = l.__b + 1, null === (y = N[h]) || y && g.key == y.key && g.type === y.type) N[h] = void 0;
          else
            for (d = 0; d < M; d++) {
              if ((y = N[d]) && g.key == y.key && g.type === y.type) {
                N[d] = void 0;
                break
              }
              y = null
            }
          b(t, g, y = y || x, n, i, a, s, u, f), C = g.__e, (d = g.ref) && y.ref != d && (O || (O = []), y.ref && O.push(y.ref, null, g), O.push(d, g.__c || C, g)), null != C ? (null == v && (v = C), "function" == typeof g.type && null != g.__k && g.__k === y.__k ? g.__d = u = F(g, u, t) : u = m(t, g, y, N, C, u), f || "option" !== l.type ? "function" == typeof l.type && (l.__d = u) : t.value = "") : u && y.__e == u && u.parentNode != t && (u = p(y))
        } for (l.__e = v, h = M; h--;) null != N[h] && ("function" == typeof l.type && null != N[h].__e && N[h].__e == l.__d && (l.__d = p(o, h + 1)), T(N[h], N[h]));
      if (O)
        for (h = 0; h < O.length; h++) S(O[h], O[++h], O[++h])
    }

    function F(t, e, l) {
      var o, n;
      for (o = 0; o < t.__k.length; o++)(n = t.__k[o]) && (n.__ = t, e = "function" == typeof n.type ? F(n, e, l) : m(l, n, n, t.__k, n.__e, e));
      return e
    }

    function y(t, e) {
      return e = e || [], null == t || "boolean" == typeof t || (Array.isArray(t) ? t.some((function(t) {
        y(t, e)
      })) : e.push(t)), e
    }

    function m(t, e, l, o, n, i) {
      var r, a, c;
      if (void 0 !== e.__d) r = e.__d, e.__d = void 0;
      else if (null == l || n != i || null == n.parentNode) t: if (null == i || i.parentNode !== t) t.appendChild(n), r = null;
        else {
          for (a = i, c = 0;
            (a = a.nextSibling) && c < o.length; c += 2)
            if (a == n) break t;
          t.insertBefore(n, i), r = i
        } return void 0 !== r ? r : n.nextSibling
    }

    function g(t, e, l) {
      "-" === e[0] ? t.setProperty(e, l) : t[e] = null == l ? "" : "number" != typeof l || j.test(e) ? l : l + "px"
    }

    function C(t, e, l, o, n) {
      var i;
      t: if ("style" === e)
        if ("string" == typeof l) t.style.cssText = l;
        else {
          if ("string" == typeof o && (t.style.cssText = o = ""), o)
            for (e in o) l && e in l || g(t.style, e, "");
          if (l)
            for (e in l) o && l[e] === o[e] || g(t.style, e, l[e])
        }
      else if ("o" === e[0] && "n" === e[1]) i = e !== (e = e.replace(/Capture$/, "")), e = e.toLowerCase() in t ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + i] = l, l ? o || t.addEventListener(e, i ? O : v, i) : t.removeEventListener(e, i ? O : v, i);
      else if ("dangerouslySetInnerHTML" !== e) {
        if (n) e = e.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
        else if ("href" !== e && "list" !== e && "form" !== e && "download" !== e && e in t) try {
          t[e] = null == l ? "" : l;
          break t
        } catch (t) {}
        "function" == typeof l || (null != l && (!1 !== l || "a" === e[0] && "r" === e[1]) ? t.setAttribute(e, l) : t.removeAttribute(e))
      }
    }

    function v(t) {
      this.l[t.type + !1](L.event ? L.event(t) : t)
    }

    function O(t) {
      this.l[t.type + !0](L.event ? L.event(t) : t)
    }

    function b(t, e, l, n, i, r, a, p, u) {
      var f, h, F, y, m, g, C, v, O, b, N, S = e.type;
      if (void 0 !== e.constructor) return null;
      null != l.__h && (u = l.__h, p = e.__e = l.__e, e.__h = null, r = [p]), (f = L.__b) && f(e);
      try {
        t: if ("function" == typeof S) {
          if (v = e.props, O = (f = S.contextType) && n[f.__c], b = f ? O ? O.props.value : f.__ : n, l.__c ? C = (h = e.__c = l.__c).__ = h.__E : ("prototype" in S && S.prototype.render ? e.__c = h = new S(v, b) : (e.__c = h = new s(v, b), h.constructor = S, h.render = _), O && O.sub(h), h.props = v, h.state || (h.state = {}), h.context = b, h.__n = n, F = h.__d = !0, h.__h = []), null == h.__s && (h.__s = h.state), null != S.getDerivedStateFromProps && (h.__s == h.state && (h.__s = o({}, h.__s)), o(h.__s, S.getDerivedStateFromProps(v, h.__s))), y = h.props, m = h.state, F) null == S.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), null != h.componentDidMount && h.__h.push(h.componentDidMount);
          else {
            if (null == S.getDerivedStateFromProps && v !== y && null != h.componentWillReceiveProps && h.componentWillReceiveProps(v, b), !h.__e && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(v, h.__s, b) || e.__v === l.__v) {
              h.props = v, h.state = h.__s, e.__v !== l.__v && (h.__d = !1), h.__v = e, e.__e = l.__e, e.__k = l.__k, h.__h.length && a.push(h);
              break t
            }
            null != h.componentWillUpdate && h.componentWillUpdate(v, h.__s, b), null != h.componentDidUpdate && h.__h.push((function() {
              h.componentDidUpdate(y, m, g)
            }))
          }
          h.context = b, h.props = v, h.state = h.__s, (f = L.__r) && f(e), h.__d = !1, h.__v = e, h.__P = t, f = h.render(h.props, h.state, h.context), h.state = h.__s, null != h.getChildContext && (n = o(o({}, n), h.getChildContext())), F || null == h.getSnapshotBeforeUpdate || (g = h.getSnapshotBeforeUpdate(y, m)), N = null != f && f.type === c && null == f.key ? f.props.children : f, d(t, Array.isArray(N) ? N : [N], e, l, n, i, r, a, p, u), h.base = e.__e, e.__h = null, h.__h.length && a.push(h), C && (h.__E = h.__ = null), h.__e = !1
        } else null == r && e.__v === l.__v ? (e.__k = l.__k, e.__e = l.__e) : e.__e = M(l.__e, e, l, n, i, r, a, u);
        (f = L.diffed) && f(e)
      }
      catch (t) {
        e.__v = null, (u || null != r) && (e.__e = p, e.__h = !!u, r[r.indexOf(p)] = null), L.__e(t, e, l)
      }
    }

    function N(t, e) {
      L.__c && L.__c(e, t), t.some((function(e) {
        try {
          t = e.__h, e.__h = [], t.some((function(t) {
            t.call(e)
          }))
        } catch (t) {
          L.__e(t, e.__v)
        }
      }))
    }

    function M(t, e, l, o, i, r, a, c) {
      var s, p, u, f, h = l.props,
        F = e.props,
        y = e.type,
        m = 0;
      if ("svg" === y && (i = !0), null != r)
        for (; m < r.length; m++)
          if ((s = r[m]) && (s === t || (y ? s.localName == y : 3 == s.nodeType))) {
            t = s, r[m] = null;
            break
          } if (null == t) {
        if (null === y) return document.createTextNode(F);
        t = i ? document.createElementNS("http://www.w3.org/2000/svg", y) : document.createElement(y, F.is && F), r = null, c = !1
      }
      if (null === y) h === F || c && t.data === F || (t.data = F);
      else {
        if (r = r && B.slice.call(t.childNodes), p = (h = l.props || x).dangerouslySetInnerHTML, u = F.dangerouslySetInnerHTML, !c) {
          if (null != r)
            for (h = {}, f = 0; f < t.attributes.length; f++) h[t.attributes[f].name] = t.attributes[f].value;
          (u || p) && (u && (p && u.__html == p.__html || u.__html === t.innerHTML) || (t.innerHTML = u && u.__html || ""))
        }
        if (function(t, e, l, o, n) {
            var i;
            for (i in l) "children" === i || "key" === i || i in e || C(t, i, null, l[i], o);
            for (i in e) n && "function" != typeof e[i] || "children" === i || "key" === i || "value" === i || "checked" === i || l[i] === e[i] || C(t, i, e[i], l[i], o)
          }(t, F, h, i, c), u) e.__k = [];
        else if (m = e.props.children, d(t, Array.isArray(m) ? m : [m], e, l, o, i && "foreignObject" !== y, r, a, t.firstChild, c), null != r)
          for (m = r.length; m--;) null != r[m] && n(r[m]);
        c || ("value" in F && void 0 !== (m = F.value) && (m !== t.value || "progress" === y && !m) && C(t, "value", m, h.value, !1), "checked" in F && void 0 !== (m = F.checked) && m !== t.checked && C(t, "checked", m, h.checked, !1))
      }
      return t
    }

    function S(t, e, l) {
      try {
        "function" == typeof t ? t(e) : t.current = e
      } catch (t) {
        L.__e(t, l)
      }
    }

    function T(t, e, l) {
      var o, i, r;
      if (L.unmount && L.unmount(t), (o = t.ref) && (o.current && o.current !== t.__e || S(o, null, e)), l || "function" == typeof t.type || (l = null != (i = t.__e)), t.__e = t.__d = void 0, null != (o = t.__c)) {
        if (o.componentWillUnmount) try {
          o.componentWillUnmount()
        } catch (t) {
          L.__e(t, e)
        }
        o.base = o.__P = null
      }
      if (o = t.__k)
        for (r = 0; r < o.length; r++) o[r] && T(o[r], e, l);
      null != i && n(i)
    }

    function _(t, e, l) {
      return this.constructor(t, l)
    }

    function w(t, e, l) {
      var o, n, r;
      L.__ && L.__(t, e), n = (o = "function" == typeof l) ? null : l && l.__k || e.__k, r = [], b(e, t = (!o && l || e).__k = i(c, null, [t]), n || x, x, void 0 !== e.ownerSVGElement, !o && l ? [l] : n ? null : e.firstChild ? B.slice.call(e.childNodes) : null, r, !o && l ? l : n ? n.__e : e.firstChild, o), N(r, t)
    }

    function E(t, e) {
      w(t, e, E)
    }

    function k(t, e, l) {
      var n, i, a, c = arguments,
        s = o({}, t.props);
      for (a in e) "key" == a ? n = e[a] : "ref" == a ? i = e[a] : s[a] = e[a];
      if (arguments.length > 3)
        for (l = [l], a = 3; a < arguments.length; a++) l.push(c[a]);
      return null != l && (s.children = l), r(t.type, s, n || t.key, i || t.ref, null)
    }

    function A(t, e) {
      var l = {
        __c: e = "__cC" + R++,
        __: t,
        Consumer: function(t, e) {
          return t.children(e)
        },
        Provider: function(t) {
          var l, o;
          return this.getChildContext || (l = [], (o = {})[e] = this, this.getChildContext = function() {
            return o
          }, this.shouldComponentUpdate = function(t) {
            this.props.value !== t.value && l.some(f)
          }, this.sub = function(t) {
            l.push(t);
            var e = t.componentWillUnmount;
            t.componentWillUnmount = function() {
              l.splice(l.indexOf(t), 1), e && e.call(t)
            }
          }), t.children
        }
      };
      return l.Provider.__ = l.Consumer.contextType = l
    }
    l.r(e), l.d(e, "render", (function() {
      return w
    })), l.d(e, "hydrate", (function() {
      return E
    })), l.d(e, "createElement", (function() {
      return i
    })), l.d(e, "h", (function() {
      return i
    })), l.d(e, "Fragment", (function() {
      return c
    })), l.d(e, "createRef", (function() {
      return a
    })), l.d(e, "isValidElement", (function() {
      return z
    })), l.d(e, "Component", (function() {
      return s
    })), l.d(e, "cloneElement", (function() {
      return k
    })), l.d(e, "createContext", (function() {
      return A
    })), l.d(e, "toChildArray", (function() {
      return y
    })), l.d(e, "options", (function() {
      return L
    }));
    var L, z, D, P, I, R, x = {},
      B = [],
      j = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
    L = {
      __e: function(t, e) {
        for (var l, o, n; e = e.__;)
          if ((l = e.__c) && !l.__) try {
            if ((o = l.constructor) && null != o.getDerivedStateFromError && (l.setState(o.getDerivedStateFromError(t)), n = l.__d), null != l.componentDidCatch && (l.componentDidCatch(t), n = l.__d), n) return l.__E = l
          } catch (e) {
            t = e
          }
        throw t
      },
      __v: 0
    }, z = function(t) {
      return null != t && void 0 === t.constructor
    }, s.prototype.setState = function(t, e) {
      var l;
      l = null != this.__s && this.__s !== this.state ? this.__s : this.__s = o({}, this.state), "function" == typeof t && (t = t(o({}, l), this.props)), t && o(l, t), null != t && this.__v && (e && this.__h.push(e), f(this))
    }, s.prototype.forceUpdate = function(t) {
      this.__v && (this.__e = !0, t && this.__h.push(t), f(this))
    }, s.prototype.render = c, D = [], P = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, h.__r = 0, R = 0
  },
  "4QvU": function() {},
  "5fUf": function() {},
  "5hIn": function() {},
  "63mI": function() {},
  "6Ea2": function() {},
  "9fdY": function() {},
  BVUt: function(t, e, l) {
    "use strict";
    l.r(e);
    var o = l("2mXy"),
      n = o.h,
      i = o.render,
      r = o.hydrate,
      a = function(t) {
        return t && t.default ? t.default : t
      },
      c = function(t) {
        return "/" === t[t.length - 1] ? t : t + "/"
      };
    if ("function" == typeof a(l("QfWi"))) {
      var s = document.getElementById("preact_root") || document.body.firstElementChild;
      0,
      function() {
        var t = a(l("QfWi")),
          e = {},
          o = document.querySelector('[type="__PREACT_CLI_DATA__"]');
        o && (e = JSON.parse(decodeURI(o.innerHTML)).preRenderData || e);
        var p = {
            preRenderData: e
          },
          u = e.url ? c(e.url) : "",
          f = r && u === c(location.pathname);
        s = (f ? r : i)(n(t, {
          CLI_DATA: p
        }), document.body, s)
      }()
    }
  },
  C7V0: function() {},
  DFMV: function() {},
  Dia2: function() {},
  E2F5: function(t, e, l) {
    "use strict";
    (function(t) {
      function o(t) {
        return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, o(t)
      }

      function n(t, e) {
        for (var l = 0; l < e.length; l++) {
          var o = e[l];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
      }

      function i(t, e) {
        return i = Object.setPrototypeOf || function(t, e) {
          return t.__proto__ = e, t
        }, i(t, e)
      }

      function r(t) {
        var e = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (t) {
            return !1
          }
        }();
        return function() {
          var l, o = c(t);
          if (e) {
            var n = c(this).constructor;
            l = Reflect.construct(o, arguments, n)
          } else l = o.apply(this, arguments);
          return a(this, l)
        }
      }

      function a(t, e) {
        if (e && ("object" === o(e) || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        return function(t) {
          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t
        }(t)
      }

      function c(t) {
        return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }, c(t)
      }
      l.d(e, "a", (function() {
        return s
      }));
      l("sZ/9");
      var s = function(e) {
        function l(t) {
          var e;
          return (e = s.call(this, t)).state = {
            showPopup: !1
          }, e
        }! function(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(t, "prototype", {
            writable: !1
          }), e && i(t, e)
        }(l, e);
        var o, a, c, s = r(l);
        return o = l, (a = [{
          key: "onClickPopup",
          value: function() {
            window.localStorage[COMMONCONSTANTS.EMAIL_UNVERIFIED_POPUP_CLICK] = 1, this.props.logToAmplitude(COMMONCONSTANTS.EMAIL_UNVERIFIED_POPUP_CLICK), TRACK({
              category: COMMONCONSTANTS.BEHAVIOUR,
              action: COMMONCONSTANTS.EMAIL_UNVERIFIED_POPUP_CLICK,
              label: COMMONCONSTANTS.RELEASE_VERSION
            }), this.setState({
              showPopup: !1
            }), Utility.isExtension() && chrome.tabs.create({
              url: chrome.runtime.getURL("tab.html")
            })
          }
        }, {
          key: "onClickCross",
          value: function() {
            this.setState({
              showPopup: !1
            })
          }
        }, {
          key: "componentDidMount",
          value: function() {
            var t = this;
            window, setTimeout((function() {
              localStorage[COMMONCONSTANTS.USER_UNVERIFIED] && t.setState({
                showPopup: !0
              })
            }), 4e3)
          }
        }, {
          key: "render",
          value: function() {
            return this.state.showPopup ? t("div", {
              className: "email-unverified-popup-container"
            }, t("div", {
              className: "close-container",
              onClick: this.onClickCross.bind(this)
            }, t("span", {
              className: "lnr lnr-cross-circle"
            })), t("div", {
              onClick: this.onClickPopup.bind(this),
              target: "_blank",
              className: "inner-container"
            }, t("div", {
              className: "heading-container"
            }, "Your email is unverfied"), t("span", {
              className: "verify-now"
            }, "Verify now"))) : null
          }
        }]) && n(o.prototype, a), c && n(o, c), Object.defineProperty(o, "prototype", {
          writable: !1
        }), l
      }(l("2mXy").Component)
    }).call(this, l("2mXy").h)
  },
  EDtS: function() {},
  ELEc: function() {},
  Etil: function() {},
  FP0o: function(t, e, l) {
    "use strict";

    function o(t, e) {
      for (var l = 0; l < e.length; l++) {
        var o = e[l];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
      }
    }
    l.d(e, "a", (function() {
      return n
    }));
    var n = function() {
      function t() {}
      var e, l, n;
      return e = t, n = [{
        key: "fireworksInit",
        value: function(t, e) {
          function l() {
            var t = Math.floor(256 * Math.random()),
              e = Math.floor(256 * Math.random()),
              l = Math.floor(256 * Math.random()),
              o = "rgb($r, $g, $b)";
            return o = (o = (o = o.replace("$r", t)).replace("$g", e)).replace("$b", l)
          }
          var o = document.getElementById("firework-canvas");
          o.width = t, o.height = e;
          var n = o.getContext("2d");
          n.fillStyle = "#000", n.fillRect(0, 0, o.width, o.height);
          for (var i = [], r = [], a = o.width / 2, c = o.height / 2, s = 100, p = 0; p < 10; p++) {
            var u = {
              x: Math.random() * s / 2 - 25 + a,
              y: Math.random() * s * 2 + o.height,
              size: Math.random() + .5,
              fill: "#fd1",
              vx: Math.random() - .5,
              vy: -(Math.random() + 4),
              ax: .02 * Math.random() - .01,
              far: Math.random() * s + (c - s)
            };
            u.base = {
              x: u.x,
              y: u.y,
              vx: u.vx
            }, i.push(u)
          }! function t() {
            requestAnimationFrame(t),
              function() {
                for (var t = 0; t < i.length; t++) {
                  var e = i[t];
                  if (e.y <= e.far) {
                    var o = l();
                    for (t = 0; t < 50; t++)(n = {
                      x: e.x,
                      y: e.y,
                      size: Math.random() + 1.5,
                      fill: o,
                      vx: 5 * Math.random() - 2.5,
                      vy: -5 * Math.random() + 1.5,
                      ay: .05,
                      alpha: 1,
                      life: Math.round(Math.random() * s / 2) + 50
                    }).base = {
                      life: n.life,
                      size: n.size
                    }, r.push(n);
                    e.y = e.base.y, e.x = e.base.x, e.vx = e.base.vx, e.ax = .02 * Math.random() - .01
                  }
                  e.x += e.vx, e.y += e.vy, e.vx += e.ax
                }
                for (t = r.length - 1; t >= 0; t--) {
                  var n;
                  (n = r[t]) && (n.x += n.vx, n.y += n.vy, n.vy += n.ay, n.alpha = n.life / n.base.life, n.size = n.alpha * n.base.size, n.alpha = n.alpha > .6 ? 1 : n.alpha, n.life--, n.life <= 0 && r.splice(t, 1))
                }
              }(),
              function() {
                n.globalCompositeOperation = "source-over", n.globalAlpha = .18, n.fillStyle = "#000", n.fillRect(0, 0, o.width, o.height), n.globalCompositeOperation = "screen", n.globalAlpha = 1;
                for (var t = 0; t < i.length; t++) {
                  var e = i[t];
                  n.beginPath(), n.arc(e.x, e.y, e.size, 0, 2 * Math.PI), n.closePath(), n.fillStyle = e.fill, n.fill()
                }
                for (t = 0; t < r.length; t++) {
                  var l = r[t];
                  n.globalAlpha = l.alpha, n.beginPath(), n.arc(l.x, l.y, l.size, 0, 2 * Math.PI), n.closePath(), n.fillStyle = l.fill, n.fill()
                }
              }()
          }()
        }
      }, {
        key: "birdsInit",
        value: function(t, e) {
          var l = t,
            o = e,
            n = new function() {
              var t, e, n, i, r, a, c, s = 14,
                p = 0,
                u = .2,
                f = 10,
                h = -1,
                d = {
                  current: 1,
                  target: 1
                },
                F = {
                  x: .5,
                  y: .5,
                  z: .5
                },
                y = function() {
                  window.requestAnimationFrame(v)
                },
                m = function(t) {
                  i.moveTo(t[0].x, t[0].y);
                  for (var e = 1; e < t.length; e++) i.lineTo(t[e].x, t[e].y)
                },
                g = function(t, e) {
                  t.lines[2 * h] = e.x, t.lines[2 * h + 1] = e.y
                },
                C = function() {
                  r.forEach((function(t) {
                      ! function(t) {
                        ["x", "y", "z"].forEach((function(e) {
                          Math.abs(t.move[e]) > .003 && (t.move[e] *= .99)
                        })), p % t.ownMove.t == 0 && (t.ownMove.x = (.5 - Math.random()) / 3, t.ownMove.y = (.5 - Math.random()) / 3), t.move.x += u * (F.x - t.pos.x + t.ownMove.x) * t.speed, t.move.y += u * (F.y - t.pos.y + t.ownMove.y) * t.speed, t.move.z += u * (F.z - t.pos.z) * t.speed
                      }(t), t.wing += .1 + .3 * t.wingAdd * u, t.pos.x += t.move.x, t.pos.y += t.move.y, t.pos.z += t.move.z
                    })),
                    function() {
                      for (var l = f; l >= 2; l--) {
                        i.beginPath(), i.lineWidth = l / f * (t + e) / 1e3, i.strokeStyle = "hsla(" + (p + l) % 360 + ", 100%, 50%, " + l / f + ")";
                        var o = (h + l) % f,
                          n = (h + l + f - 1) % f;
                        r.forEach((function(t) {
                          0 !== t.lines[2 * n] && 0 !== t.lines[2 * o] && (i.moveTo(t.lines[2 * o], t.lines[2 * o + 1]), i.lineTo(t.lines[2 * n], t.lines[2 * n + 1]))
                        })), i.stroke()
                      }
                    }(), h = (h + 1) % f, r.forEach((function(l) {
                      ! function(l) {
                        i.fillStyle = "hsl(" + p % 360 + ", 100%, 90%)";
                        var o = l.pos.x * t,
                          n = l.pos.y * e,
                          r = (t + e) / 200 * (1.5 * l.pos.z) * d.current,
                          a = Math.atan2(l.move.y * e, l.move.x * t);
                        i.lineWidth = 1;
                        var c = function(t, e) {
                          return {
                            x: o + Math.cos(a + t * Math.PI * 2) * r * e,
                            y: n + Math.sin(a + t * Math.PI * 2) * r * e
                          }
                        };
                        g(l, c(.5, 1.3)), i.beginPath(), m([c(0, 1.2), c(.01, .9), c(.05, .7), c(.47, .9), c(.45, 1.5), c(.47, 1.2), c(.5, 1.5), c(.52, 1.2), c(.55, 1.5), c(.53, .9), c(-.25, .5), c(-.05, .7), c(-.01, .9), c(0, 1.2)]), i.fill();
                        var s = (Math.sin(l.wing) + 1) / 2;
                        i.beginPath(), m([c(0, .5), c(-.15, s), c(-.25, 3 * s - 1), c(-.4, .5), c(0, 0)]), i.fill()
                      }(l)
                    })), i.fillStyle = "hsla(" + p % 360 + ", 100%, 90%, 0.01)", i.beginPath(), r.forEach((function(l) {
                      i.moveTo(l.pos.x * t, l.pos.y * e), i.arc(l.pos.x * t, l.pos.y * e, l.pos.z * (t + e) / 30, 0, 2 * Math.PI)
                    })), i.fill(), i.closePath(), i.globalCompositeOperation = "source-over"
                },
                v = function() {
                  p++, d.current += (d.target - d.current) / 100, i.clearRect(0, 0, t, e), C(), y()
                };
              this.run = function() {
                setInterval((function() {
                    F.x = Math.random(), F.y = Math.random(), d.target = .5 + Math.random()
                  }), 1e3), n = document.getElementById("birds-canvas"), i = n.getContext("2d"), e = o, n.setAttribute("width", t = l), n.setAttribute("height", e), (a = i.createLinearGradient(0, 0, 0, e / 2)).addColorStop(0, "#000"), a.addColorStop(1, "#110"), (c = i.createLinearGradient(0, e / 2, 0, e)).addColorStop(0, "#000"), c.addColorStop(1, "#001"),
                  function() {
                    r = [];
                    for (var t = 0; t < s; t++) r.push({
                      wing: Math.random(),
                      wingAdd: Math.random(),
                      speed: (.2 + .8 * Math.random()) / 2e3,
                      pos: {
                        x: .25 + .5 * Math.random(),
                        y: .25 + .5 * Math.random(),
                        z: Math.random()
                      },
                      move: {
                        x: (.5 - Math.random()) / 100,
                        y: (.5 - Math.random()) / 100,
                        z: 0
                      },
                      moveCache: {
                        x: 0,
                        y: 0
                      },
                      ownMove: {
                        t: 20 + 100 * Math.random() | 0,
                        x: 0,
                        y: 0
                      },
                      tar: {
                        x: .5,
                        y: .5
                      },
                      lines: new Float32Array(20)
                    })
                  }(), v()
              }
            };
          n.run()
        }
      }], (l = null) && o(e.prototype, l), n && o(e, n), Object.defineProperty(e, "prototype", {
        writable: !1
      }), t
    }()
  },
  FeO9: function(t, e, l) {
    "use strict";
    (function(t) {
      function o(t) {
        return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, o(t)
      }

      function n(t, e) {
        for (var l = 0; l < e.length; l++) {
          var o = e[l];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
      }

      function i(t, e) {
        return i = Object.setPrototypeOf || function(t, e) {
          return t.__proto__ = e, t
        }, i(t, e)
      }

      function r(t) {
        var e = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (t) {
            return !1
          }
        }();
        return function() {
          var l, o = c(t);
          if (e) {
            var n = c(this).constructor;
            l = Reflect.construct(o, arguments, n)
          } else l = o.apply(this, arguments);
          return a(this, l)
        }
      }

      function a(t, e) {
        if (e && ("object" === o(e) || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        return function(t) {
          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t
        }(t)
      }

      function c(t) {
        return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }, c(t)
      }
      l.d(e, "a", (function() {
        return s
      }));
      l("sdxc");
      var s = function(e) {
        function l(t) {
          var e;
          return (e = s.call(this, t)).state = {
            showNotification: !1,
            showFeedbackContainer: !0,
            text: ""
          }, e
        }! function(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(t, "prototype", {
            writable: !1
          }), e && i(t, e)
        }(l, e);
        var o, a, c, s = r(l);
        return o = l, (a = [{
          key: "checkForPopup",
          value: function() {
            var t = window.localStorage,
              e = t[COMMONCONSTANTS.POPUP_OPEN_COUNT],
              l = t[COMMONCONSTANTS.LIKEDISLIKE_NOTIFICATION_CLICK],
              o = t[COMMONCONSTANTS.LIKEDISLIKE_DATA_SENT];
            if (!(l && l.length > 0) && !o && e && e.length > 0) {
              var n = parseInt(e);
              [999, 1999].indexOf(n) > -1 && (this.intCount = n, this.setState({
                showNotification: !0
              }))
            }
          }
        }, {
          key: "onClickButton",
          value: function(t) {
            "like" == t && (this.props.logToAmplitude(COMMONCONSTANTS.LIKE_BUTTON_CLICK, {
              likedislikeClickedOnCount: this.intCount
            }), TRACK({
              category: COMMONCONSTANTS.BEHAVIOUR,
              action: COMMONCONSTANTS.LIKE_BUTTON_CLICK,
              label: COMMONCONSTANTS.RELEASE_VERSION,
              value: this.intCount
            }), this.setState({
              showNotification: !1
            })), "dislike" == t && (this.props.logToAmplitude(COMMONCONSTANTS.DISLIKE_BUTTON_CLICK, {
              likedislikeClickedOnCount: this.intCount
            }), TRACK({
              category: COMMONCONSTANTS.BEHAVIOUR,
              action: COMMONCONSTANTS.DISLIKE_BUTTON_CLICK,
              label: COMMONCONSTANTS.RELEASE_VERSION,
              value: this.intCount
            }), this.setState({
              showFeedbackContainer: !0
            }))
          }
        }, {
          key: "componentDidMount",
          value: function() {
            var t = this;
            setTimeout((function() {
              t.checkForPopup()
            }), 500)
          }
        }, {
          key: "onClickSubmit",
          value: function() {
            this.state.text.length > 0 && MessagePassing.send({
              key: COMMONCONSTANTS.SUBMIT_FEEDBACK,
              value: {
                text: this.state.text,
                previousUser: !1
              }
            }), this.closeFeedback()
          }
        }, {
          key: "closeFeedback",
          value: function() {
            this.setState({
              showFeedbackContainer: !1,
              showNotification: !1
            });
            var t = window.localStorage;
            t[COMMONCONSTANTS.LIKEDISLIKE_NOTIFICATION_CLICK] = 1, t[COMMONCONSTANTS.LIKEDISLIKE_DATA_SENT] = 1
          }
        }, {
          key: "render",
          value: function() {
            var e = this;
            return this.state.showNotification ? t("div", {
              className: "like-dislike-container"
            }, !this.state.showFeedbackContainer && t("div", {
              className: "inner-container"
            }, t("div", {
              className: "question"
            }, "Do you like this App?"), t("div", {
              className: "answer"
            }, t("span", {
              className: "dislike button",
              onClick: this.onClickButton.bind(this, "dislike")
            }, t("i", {
              className: "lnr lnr-thumbs-down"
            }), t("span", {
              className: "text"
            }, "No")), t("span", {
              className: "like button",
              onClick: this.onClickButton.bind(this, "like")
            }, t("i", {
              className: "lnr lnr-thumbs-up"
            }), t("span", {
              className: "text"
            }, "Yes")))), this.state.showFeedbackContainer && t("div", {
              className: "feedback-container"
            }, t("div", {
              className: "close-container",
              onClick: this.closeFeedback.bind(this)
            }, t("span", {
              className: "lnr lnr-cross-circle"
            })), t("div", {
              className: "heading"
            }, "Any suggestion to improve app  ?"), t("textarea", {
              className: "textarea",
              placeholder: "",
              onKeyUp: function(t) {
                e.setState({
                  text: t.target.value
                })
              }
            }), t("div", {
              className: "button-container",
              onClick: this.onClickSubmit.bind(this)
            }, t("span", null, "Submit")))) : null
          }
        }]) && n(o.prototype, a), c && n(o, c), Object.defineProperty(o, "prototype", {
          writable: !1
        }), l
      }(l("2mXy").Component)
    }).call(this, l("2mXy").h)
  },
  "Fnp/": function(t, e, l) {
    "use strict";
    (function(t, o) {
      function n(e) {
        var l = function() {
          e.setParentState({
            notification: {
              actionType: COMMONCONSTANTS.NOTIFICATION_WITH_CROSS,
              showType: "info",
              children: t("p", null, " Trying to resize? ", t("br", null), " ", t("br", null), ' Click on "size" settings from the right sidebar. ')
            }
          })
        };
        return t(o, null, t("div", {
          class: "false-vertical-border-left",
          draggable: !0,
          onDragStart: l
        }), t("div", {
          class: "false-horizontal-border",
          draggable: !0,
          onDragStart: l
        }), t("div", {
          class: "false-vertical-border-right",
          draggable: !0,
          onDragStart: l
        }))
      }
      l.d(e, "a", (function() {
        return n
      }));
      l("rkEp")
    }).call(this, l("2mXy").h, l("2mXy").Fragment)
  },
  Fowd: function() {},
  I7s8: function(t, e, l) {
    "use strict";
    (function(t) {
      function o(t) {
        return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, o(t)
      }

      function n(t, e) {
        var l = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          e && (o = o.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), l.push.apply(l, o)
        }
        return l
      }

      function i(t) {
        for (var e = 1; e < arguments.length; e++) {
          var l = null != arguments[e] ? arguments[e] : {};
          e % 2 ? n(Object(l), !0).forEach((function(e) {
            r(t, e, l[e])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : n(Object(l)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e))
          }))
        }
        return t
      }

      function r(t, e, l) {
        return e in t ? Object.defineProperty(t, e, {
          value: l,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = l, t
      }

      function a(t, e) {
        for (var l = 0; l < e.length; l++) {
          var o = e[l];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
      }

      function c(t, e) {
        return c = Object.setPrototypeOf || function(t, e) {
          return t.__proto__ = e, t
        }, c(t, e)
      }

      function s(t) {
        var e = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (t) {
            return !1
          }
        }();
        return function() {
          var l, o = u(t);
          if (e) {
            var n = u(this).constructor;
            l = Reflect.construct(o, arguments, n)
          } else l = o.apply(this, arguments);
          return p(this, l)
        }
      }

      function p(t, e) {
        if (e && ("object" === o(e) || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        return function(t) {
          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t
        }(t)
      }

      function u(t) {
        return u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }, u(t)
      }
      l.d(e, "a", (function() {
        return f
      }));
      l("5fUf");
      var f = function(e) {
        function l(t) {
          var e;
          return (e = p.call(this, t)).state = {
            html: null,
            id: ""
          }, e.mountedTime = Date.now(), e
        }! function(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(t, "prototype", {
            writable: !1
          }), e && c(t, e)
        }(l, e);
        var o, n, r, p = s(l);
        return o = l, (n = [{
          key: "onClickDefaultBanner",
          value: function() {
            this.props.logToAmplitude(COMMONCONSTANTS.DEFAULT_BANNER)
          }
        }, {
          key: "defaultJSX",
          value: function() {
            return t("div", {
              className: "bottom-banner-container"
            }, t("div", {
              className: "inner-container-content",
              onClick: this.onClickDefaultBanner.bind(this)
            }, t("a", {
              href: "https://getstickynotes.com/special-offer?__offer=we-are-here-with-you",
              target: "_blank"
            }, t("span", {
              className: "label"
            }, "Exclusive Offer"), t("span", {
              className: "hide-on-small"
            }, " Become premium today and "), "Claim this reduced price!", t("span", {
              className: "hide-on-small"
            }, " Click here."))))
          }
        }, {
          key: "onClickLoginButton",
          value: function() {}
        }, {
          key: "onClickSkip",
          value: function() {}
        }, {
          key: "onClickCross",
          value: function() {
            var t, e = (new Date).toDateString(),
              l = Date.now(),
              o = (null === (t = this.props.settings) || void 0 === t ? void 0 : t.value) || {},
              n = l - this.mountedTime,
              r = localStorage[COMMONCONSTANTS.POPUP_OPEN_COUNT],
              a = i(i({}, o), {}, {
                date: e,
                time: l,
                after_mount_time: n,
                popupCount: r,
                ad_id: this.state.id
              });
            this.props.setParentState({
              upgradePopup: {
                text: "Ad-free experience"
              }
            }), this.props.logToAmplitude(COMMONCONSTANTS.AD_CROSS_CLICK, a)
          }
        }, {
          key: "getContentBasedOnFrequency",
          value: function(t) {
            var e = Math.random(),
              l = [],
              o = 0;
            t.forEach((function(t) {
              l.push(o += t.frequency)
            }));
            for (var n = 0; n < l.length; ++n)
              if (e <= l[n]) return t[n];
            return null
          }
        }, {
          key: "track",
          value: function(t, e) {
            var l, o, n = (new Date).toDateString(),
              r = Date.now(),
              a = (null === (l = this.props.settings) || void 0 === l ? void 0 : l.value) || {},
              c = r - this.mountedTime,
              s = localStorage[COMMONCONSTANTS.POPUP_OPEN_COUNT],
              p = i(i({}, a), {}, {
                date: n,
                time: r,
                after_mount_time: c,
                popupCount: s
              });
            switch (t) {
              case "id":
                p.ad_id = e, o = COMMONCONSTANTS.AD_SHOWN;
                break;
              case "click":
                p.ad_id = e, o = COMMONCONSTANTS.AD_CLICK;
                break;
              case "hover":
                p.ad_id = e, o = COMMONCONSTANTS.AD_HOVER;
                break;
              case "json_called":
                o = COMMONCONSTANTS.JSON_CALLED;
                break;
              case "json_loaded":
                o = COMMONCONSTANTS.JSON_LOADED;
                break;
              case "json_error":
                o = COMMONCONSTANTS.JSON_ERROR;
                break;
              case "json_parse_error":
                o = COMMONCONSTANTS.JSON_PARSE_ERROR
            }
            this.props.logToAmplitude(o, p)
          }
        }, {
          key: "setHtmlToShow",
          value: function(t) {
            var e;
            if (null != t && null !== (e = t.content_arr) && void 0 !== e && e.length) {
              var l = this.getContentBasedOnFrequency(t.content_arr);
              if (null != l && l.html)
                if ((null == l ? void 0 : l.based_on_ls_key) === COMMONCONSTANTS.POPUP_OPEN_COUNT) {
                  var o = parseInt(localStorage[COMMONCONSTANTS.POPUP_OPEN_COUNT]),
                    n = !1;
                  if (void 0 !== o) switch (l.ls_value_operator) {
                    case ">":
                      n = o > l.ls_value;
                      break;
                    case "<":
                      n = o < l.ls_value;
                      break;
                    case "==":
                      n = o == l.ls_value
                  }
                  if (n) this.setState({
                    html: l.html,
                    id: l.id
                  }), this.track("id", l.id);
                  else {
                    var i = t.content_arr.filter((function(e) {
                      return e.id === t.default_id
                    }));
                    null != i && i.length && i[0] && i[0].html && (this.setState({
                      html: i[0].html,
                      id: l.id
                    }), this.track("id", i[0].id))
                  }
                } else this.setState({
                  html: l.html,
                  id: l.id
                }), this.track("id", l.id)
            }
          }
        }, {
          key: "onFetchData",
          value: function(t) {
            this.track("json_loaded"), localStorage[COMMONCONSTANTS.DYNAMIC_DATA] = t;
            var e = atob(t);
            if (null != e && e.length) {
              var l = JSON.parse(e);
              if (l) return this.setHtmlToShow(l)
            }
            this.track("json_parse_error")
          }
        }, {
          key: "getDateInfo",
          value: function(t) {
            var e = t.split("-"),
              l = {};
            if (e && e.length) {
              var o = e[0],
                n = e[1],
                i = e[2];
              (o && parseInt(o) || n && parseInt(n) || i && parseInt(i)) && (l = {
                day: parseInt(o),
                month: parseInt(n),
                year: parseInt(i)
              })
            }
            var r = new Date;
            return {
              nextCallInfo: l,
              dateInfo: {
                day: r.getDate(),
                month: r.getMonth() + 1,
                year: r.getFullYear()
              }
            }
          }
        }, {
          key: "makeCall",
          value: function() {
            var t = this;
            this.track("json_called"), fetch(COMMONCONSTANTS.DYNAMIC_DATA_CALL_URL, {
              mode: "cors",
              cache: "no-cache"
            }).then((function(t) {
              return t.json()
            })).then((function(e) {
              var l = e.data;
              null != l && l.length && t.onFetchData(l)
            })).catch((function() {
              t.track("json_error")
            }))
          }
        }, {
          key: "checkForDynamicCall",
          value: function() {
            var t = localStorage[COMMONCONSTANTS.DYNAMIC_DATA];
            if (t && t.length) {
              var e = atob(t),
                l = JSON.parse(e);
              if (l && Object.keys(l)) {
                var o = this.getDateInfo(l.next_call_on),
                  n = o.nextCallInfo,
                  i = o.dateInfo,
                  r = i.year,
                  a = i.month,
                  c = n.year,
                  s = n.month;
                r > c || r === c && a > s || r === c && a === s && i.day > n.day ? this.makeCall() : this.setHtmlToShow(l)
              }
            } else this.makeCall()
          }
        }, {
          key: "componentDidMount",
          value: function() {
            this.checkForDynamicCall()
          }
        }, {
          key: "onHoverAd",
          value: function() {
            this.track("hover", this.state.id)
          }
        }, {
          key: "onClickAd",
          value: function() {
            this.track("click", this.state.id)
          }
        }, {
          key: "render",
          value: function() {
            return t("div", {
              className: "bottom-banner-inner-container"
            }, !this.state.html && this.defaultJSX(), this.state.html && t("div", {
              onClick: this.onClickAd.bind(this),
              onMouseOver: this.onHoverAd.bind(this),
              className: "dynamic-banner-container",
              dangerouslySetInnerHTML: {
                __html: this.state.html
              }
            }), t("span", {
              className: "cross",
              onClick: this.onClickCross.bind(this)
            }, " x "))
          }
        }]) && a(o.prototype, n), r && a(o, r), Object.defineProperty(o, "prototype", {
          writable: !1
        }), l
      }(l("2mXy").Component)
    }).call(this, l("2mXy").h)
  },
  IAL8: function() {},
  Ix2s: function(t, e, l) {
    "use strict";
    (function(t) {
      function o(t) {
        return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, o(t)
      }

      function n(t, e) {
        for (var l = 0; l < e.length; l++) {
          var o = e[l];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
      }

      function i(t, e) {
        return i = Object.setPrototypeOf || function(t, e) {
          return t.__proto__ = e, t
        }, i(t, e)
      }

      function r(t) {
        var e = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (t) {
            return !1
          }
        }();
        return function() {
          var l, o = c(t);
          if (e) {
            var n = c(this).constructor;
            l = Reflect.construct(o, arguments, n)
          } else l = o.apply(this, arguments);
          return a(this, l)
        }
      }

      function a(t, e) {
        if (e && ("object" === o(e) || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        return function(t) {
          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t
        }(t)
      }

      function c(t) {
        return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }, c(t)
      }
      l.d(e, "a", (function() {
        return s
      }));
      var s = function(e) {
        function l(t) {
          var e;
          return (e = s.call(this, t)).state = {
            enterClass: ""
          }, e
        }! function(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(t, "prototype", {
            writable: !1
          }), e && i(t, e)
        }(l, e);
        var o, a, c, s = r(l);
        return o = l, (a = [{
          key: "componentWillMount",
          value: function() {}
        }, {
          key: "componentDidMount",
          value: function() {
            var t = this;
            setTimeout((function() {
              t.setState({
                enterClass: t.props.enterClass || "enter"
              }), t.props.blurTheApp(1)
            }), 0)
          }
        }, {
          key: "render",
          value: function() {
            return t("div", {
              className: (this.props.parentClass || "") + " " + this.state.enterClass
            }, this.props.children)
          }
        }]) && n(o.prototype, a), c && n(o, c), Object.defineProperty(o, "prototype", {
          writable: !1
        }), l
      }(l("2mXy").Component)
    }).call(this, l("2mXy").h)
  },
  JPmK: function(t, e, l) {
    "use strict";
    (function(t) {
      function o(t) {
        return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, o(t)
      }

      function n(t, e) {
        for (var l = 0; l < e.length; l++) {
          var o = e[l];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
      }

      function i(t, e) {
        return i = Object.setPrototypeOf || function(t, e) {
          return t.__proto__ = e, t
        }, i(t, e)
      }

      function r(t) {
        var e = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (t) {
            return !1
          }
        }();
        return function() {
          var l, o = s(t);
          if (e) {
            var n = s(this).constructor;
            l = Reflect.construct(o, arguments, n)
          } else l = o.apply(this, arguments);
          return a(this, l)
        }
      }

      function a(t, e) {
        if (e && ("object" === o(e) || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        return c(t)
      }

      function c(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }

      function s(t) {
        return s = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }, s(t)
      }
      l.d(e, "a", (function() {
        return u
      }));
      var p = l("2mXy"),
        u = (l("XkcL"), l("mdIT"), l("S9Wk"), l("tmKu"), function(e) {
          function l(t) {
            var e;
            return (e = p.call(this, t)).state = {
              gameMode: 0,
              score: 0,
              gameOver: 0,
              gameHighScore: 0
            }, e.callExplode = e.callExplode.bind(c(e)), e.gameOver = e.gameOver.bind(c(e)), e
          }! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                writable: !0,
                configurable: !0
              }
            }), Object.defineProperty(t, "prototype", {
              writable: !1
            }), e && i(t, e)
          }(l, e);
          var o, a, s, p = r(l);
          return o = l, (a = [{
            key: "onClickButton",
            value: function() {
              var t = this;
              this.setState({
                gameMode: !this.state.gameMode
              }, (function() {
                t.resetGameState(), t.state.gameMode || (t.gameOver(), t.props.logToAmplitude("Game", {
                  game: "covid",
                  state: "end",
                  score: t.state.score
                })), t.state.gameOver && (t.setState({
                  gameOver: 0
                }), t.props.logToAmplitude("Game", {
                  game: "covid",
                  state: "start"
                }))
              }))
            }
          }, {
            key: "componentDidMount",
            value: function() {
              this.resetGameState();
              var t = window.localStorage;
              t[COMMONCONSTANTS.THEME_CORONA_HIGHSCORE] && this.setState({
                gameHighScore: t[COMMONCONSTANTS.THEME_CORONA_HIGHSCORE]
              })
            }
          }, {
            key: "checkAndSetHighScore",
            value: function(t) {
              t > this.state.gameHighScore && (window.localStorage[COMMONCONSTANTS.THEME_CORONA_HIGHSCORE] = t)
            }
          }, {
            key: "callExplode",
            value: function() {
              var t = this,
                e = this,
                l = "";
              window.localStorage[COMMONCONSTANTS.THEME_CORONA_HIGHSCORE] && (l = " Lifetime Highscore: " + this.state.gameHighScore), this.setState({
                score: this.state.score + 50
              }, (function() {
                return e.props.notesAlternateAreaDataChange("Game : Kill CoronaVirus  People Recovered: " + t.state.score + l)
              }))
            }
          }, {
            key: "gameOver",
            value: function() {
              var t = this;
              this.setState({
                gameOver: 1
              }, (function() {
                t.props.notesAlternateAreaDataChange("Game Over. Total People Recovered " + t.state.score), t.props.applyInteractionToBody("notesShow"), t.checkAndSetHighScore(t.state.score)
              }))
            }
          }, {
            key: "resetGameState",
            value: function() {
              this.state.gameMode ? (this.props.applyInteractionToBody("notesHide"), this.runGame(this.props.obj.width, this.props.obj.height)) : (this.props.applyInteractionToBody("notesShow"), this.run(this.props.obj.width, this.props.obj.height))
            }
          }, {
            key: "run",
            value: function(t, e) {
              function l(t, e, l, o, n, i, r) {
                var a = Math.atan2(o - e, l - t);
                u.fillStyle = r, u.strokeStyle = r, u.lineCap = "round", u.lineWidth = n, u.beginPath(), u.moveTo(t, e), u.lineTo(l, o), u.stroke(), u.beginPath(), u.moveTo(l, o), u.lineTo(l - i * Math.cos(a - Math.PI / 6), o - i * Math.sin(a - Math.PI / 6)), u.lineTo(l - i * Math.cos(a) / 2, o - i * Math.sin(a) / 2), u.lineTo(l - i * Math.cos(a + Math.PI / 6), o - i * Math.sin(a + Math.PI / 6)), u.closePath(), u.stroke(), u.fill()
              }

              function o(t, e) {
                function l(t, e, l, o, n) {
                  this.name = t, this.x = e, this.y = l, this.w = o, this.h = n, this.armorClr = "#333", this.trackClr = "#5c5c5c", this.healthClr = "#4CAF50", this.turretRadius = 30, this.trackWidth = 30, this.healthHeight = 30, this.gunLength = 60
                }

                function o(t, e, l, o, n, i, r) {
                  t.fillStyle = r, t.beginPath(), t.moveTo(e, l + i), t.lineTo(e, l + n - i), t.quadraticCurveTo(e, l + n, e + i, l + n), t.lineTo(e + o - i, l + n), t.quadraticCurveTo(e + o, l + n, e + o, l + n - i), t.lineTo(e + o, l + i), t.quadraticCurveTo(e + o, l, e + o - i, l), t.lineTo(e + i, l), t.quadraticCurveTo(e, l, e, l + i), t.lineWidth = 0, t.strokeStyle = r, t.fill(), t.stroke()
                }
                var n = "Ukiv";
                l.prototype.appear = function() {
                  ! function(t, e, l, n, i, r, a) {
                    var c = i + 20,
                      s = e + n / 2 - r,
                      p = l - i / 2 - 10 + 2e3;
                    o(t, e - n / 2, p, r, c, 10, a), o(t, s, p, r, c, 10, a)
                  }(u, this.x, this.y, this.w, this.h, this.trackWidth, this.trackClr)
                }, new l(n, t, e - 70, 120, 135).appear()
              }

              function n(t, e, l, o, n, i, r, a) {
                u.globalCompositeOperation = "lighter", u.fillStyle = r, u.globalCompositeOperation = "source-over", u.fillStyle = r + a, u.beginPath(), u.arc(t, e, 16, 0, 2 * Math.PI, 0), u.fill();
                for (var c = t, s = e, p = 0, f = 31, h = !1, d = 1 * Math.PI + p, F = 1.02 * Math.PI + p, y = 26, m = 0; m < f; m++) u.strokeStyle = a ? "#000000" + a : "#008000", u.lineWidth = 3, u.beginPath(), u.arc(c, s, y, d, F, h), u.stroke(), u.closePath(), d += .065 * Math.PI, F += .065 * Math.PI;
                for (p = 0, f = 31, h = !1, d = 1 * Math.PI + p, F = 1.02 * Math.PI + p, y = 24, m = 0; m < f; m++) u.strokeStyle = a ? "#000000" + a : "#008000", u.lineWidth = 3, u.beginPath(), u.arc(c, s, y, d, F, h), u.stroke(), u.closePath(), d += .065 * Math.PI, F += .065 * Math.PI;
                for (p = 0, f = 31, h = !1, d = 1 * Math.PI + p, F = 1.02 * Math.PI + p, y = 22, m = 0; m < f; m++) u.strokeStyle = a ? "#000000" + a : "#008000", u.lineWidth = 3, u.beginPath(), u.arc(c, s, y, d, F, h), u.stroke(), u.closePath(), d += .065 * Math.PI, F += .065 * Math.PI
              }

              function i() {
                this.x = s.w / 2 - 150 * Math.sin(F), this.y = s.h - 150 * Math.cos(F), this.r = F
              }

              function r() {
                this.r = Math.random() * Math.PI / 1.25 - Math.PI / 2.5, this.dis = 1280 * Math.random() + 720, this.x = s.w / 2 - Math.sin(this.r) * this.dis, this.y = s.h - Math.cos(this.r) * this.dis
              }

              function a(t, e, l) {
                this.x = t, this.y = e, this.t = 30, this.ty = l
              }
              var c, s = {
                  w: 1.5 * t,
                  h: 1.5 * e
                },
                p = document.getElementById("birds-canvas");
              c = document.getElementById("birds-canvas"), p.width = s.w, p.height = s.h;
              var u = p.getContext("2d"),
                f = {
                  x: 0,
                  y: 0
                },
                h = ["#1abc9c", "#1abc9c", "#3498db", "#9b59b6", "#34495e", "#16a085", "#27ae60", "#2980b9", "#8e44ad", "#2c3e50", "#f1c40f", "#e67e22", "#e74c3c", "#95a5a6", "#f39c12", "#d35400", "#c0392b", "#bdc3c7", "#7f8c8d"];
              u.clearRect(0, 0, s.w, s.h);
              for (var d = 0; d < 30; d++) {
                var F = Math.random() * Math.PI * 2,
                  y = 250 * Math.random() + 50;
                n(C = 360 + Math.sin(F) * y, v = 360 - Math.cos(F) * y, Math.sin(F), Math.cos(F), 0, 0, "#c0392b")
              }
              var m = new Image;
              for (m.src = c.toDataURL("image/png"), u.clearRect(0, 0, s.w, s.h), d = 0; d < 30; d++) F = Math.random() * Math.PI - Math.PI / 2, y = 400 * Math.random() + 50, l(C = s.w / 2 + Math.sin(F) * y, v = s.h - Math.cos(F) * y, C + y / 6 * Math.sin(F), v - y / 6 * Math.cos(F), y / 30, y / 30, "#2c3e50");
              var g = new Image;
              for (g.src = c.toDataURL("image/png"), u.clearRect(0, 0, s.w, s.h), u.fillStyle = "black", u.fillRect(0, 0, s.w, s.h), d = 0; d < 14; d++) {
                var C, v;
                F = Math.random() * Math.PI / Math.PI * 180, y = 250 * Math.random() + 50, n(C = Math.random() * s.w, v = Math.random() * s.h, Math.sin(F), Math.cos(F), 0, 0, h[Math.floor(Math.random() * h.length)], 60)
              }
              var O = new Image;
              O.src = c.toDataURL("image/png"), F = 0;
              var b = !0,
                N = 0,
                M = 0,
                S = [],
                T = [];
              for (d = 0; d < 4; d++) T.push(new r), T[d].x += 300 * Math.sin(T[d].r), T[d].y += 300 * Math.cos(T[d].r);
              var _ = [],
                w = 0,
                E = [];
              window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                window.setTimeout(t, 1e3 / 60)
              };
              var k, A, L = !1,
                z = 0;
              k = window.innerWidth, A = window.innerHeight, k <= A * s.w / s.h ? (Math.floor(A - k * s.h / s.w), p.style.width = "100%", p.style.height = "100%", p.style.marginTop = "0px") : (Math.floor(k - A * s.w / s.h), p.style.height = "100%", p.style.width = "100%", p.style.marginTop = "0px"),
                function t() {
                  if (requestAnimFrame(t), L) {
                    var e = 60 * Math.random() - 30,
                      l = 60 * Math.random() - 30;
                    u.translate(e, l)
                  }! function() {
                    u.drawImage(O, 0, 0), !b && N < Date.now() - 3e3 && (b = !0), ++M > 5 && (M = 0, S.push(new i));
                    for (var t = 0; t < 0; t++) S[t].x -= 20 * Math.sin(S[t].r), S[t].y -= 20 * Math.cos(S[t].r), e = S[t].x + 50 * Math.sin(S[t].r), l = S[t].y + 50 * Math.cos(S[t].r), c = "#2980b9", u.globalCompositeOperation = "lighter", u.fillStyle = c, u.globalCompositeOperation = "source-over", u.fillStyle = c, u.beginPath(), u.arc(e, l, 10, 0, 2 * Math.PI, 0), u.fill(), (S[t].x < -100 || S[t].x > s.w + 100) && S.splice(t, 1), (S[t].y < -100 || S[t].y > s.h + 100) && S.splice(t, 1);
                    var e, l, c;
                    for (t = 0; t < T.length; t++) {
                      T[t].x += 3 * Math.sin(T[t].r), T[t].y += 3 * Math.cos(T[t].r), n(T[t].x - 100 * Math.sin(T[t].r), T[t].y - 100 * Math.cos(T[t].r), 0, 0, 0, 0, "#c0392b"), T[t].y > s.h && (T[t] = new r, _.push(new a(s.w / 2, s.h, 2)), L = !1, z = 0);
                      for (var p = 0; p < 0; p++)(C = (d = T[t].x - S[p].x) * d + (y = T[t].y - S[p].y) * y) < 2025 && (_.push(new a(T[t].x, T[t].y, 1)), T[t] = new r, S.splice(p, 1))
                    }
                    if (b) {
                      for (var h = 0; h < T.length; h++) {
                        var d = T[h].x - s.w / 2,
                          y = T[h].y - s.h,
                          C = Math.floor(Math.sqrt(d * d + y * y));
                        E[h] = 1e5 + C + "x" + (1e3 + h)
                      }
                      E.sort(), w = parseInt(E[0].slice(8, 11)), parseInt(E[0].slice(1, 6)) < 800 && (F += (T[w].r - F) / 8)
                    } else d = f.x - s.w / 2, y = f.y - s.h, F = Math.atan(d / y * 2.5);
                    o(s.w / 2, s.h, Math.sin(F), Math.cos(F));
                    for (var v = 0; v < 0; v++)
                      if (1 == _[v].ty) {
                        var k = m;
                        u.globalAlpha = 1 - _[v].t / s.h, u.drawImage(k, _[v].x - _[v].t / 2, _[v].y - _[v].t / 2, _[v].t * s.w / s.h, _[v].t), u.globalAlpha = 1
                      } else k = g, u.globalAlpha = 1 - _[v].t / s.h, u.drawImage(k, _[v].x - _[v].t * s.w / s.h / 2, s.h - _[v].t, _[v].t * s.w / s.h, _[v].t), u.globalAlpha = 1;
                    for (v = 0; v < _.length; v++) _[v].t += 20, _[v].t > s.h && _.splice(v, 1)
                  }(), L && (u.translate(-e, -l), ++z > 20 && (z = 0, L = !1))
                }()
            }
          }, {
            key: "runGame",
            value: function(t, e) {
              function l(t, e, l, o, n, i, r) {
                var a = Math.atan2(o - e, l - t);
                d.fillStyle = r, d.strokeStyle = r, d.lineCap = "round", d.lineWidth = n, d.beginPath(), d.moveTo(t, e), d.lineTo(l, o), d.stroke(), d.beginPath(), d.moveTo(l, o), d.lineTo(l - i * Math.cos(a - Math.PI / 6), o - i * Math.sin(a - Math.PI / 6)), d.lineTo(l - i * Math.cos(a) / 2, o - i * Math.sin(a) / 2), d.lineTo(l - i * Math.cos(a + Math.PI / 6), o - i * Math.sin(a + Math.PI / 6)), d.closePath(), d.stroke(), d.fill()
              }

              function o(t, e, l, o, n, i, r) {
                function a(t, e, l, o, n) {
                  this.name = t, this.x = e, this.y = l, this.w = o, this.h = n, this.armorClr = "#333", this.trackClr = "#5c5c5c", this.healthClr = "#4CAF50", this.turretRadius = 30, this.trackWidth = 30, this.healthHeight = 30, this.gunLength = 60
                }

                function c(t, e, l, o, n, i, r) {
                  t.fillStyle = r, t.beginPath(), t.moveTo(e, l + i), t.lineTo(e, l + n - i), t.quadraticCurveTo(e, l + n, e + i, l + n), t.lineTo(e + o - i, l + n), t.quadraticCurveTo(e + o, l + n, e + o, l + n - i), t.lineTo(e + o, l + i), t.quadraticCurveTo(e + o, l, e + o - i, l), t.lineTo(e + i, l), t.quadraticCurveTo(e, l, e, l + i), t.lineWidth = 0, t.strokeStyle = r, t.fill(), t.stroke()
                }
                var s = "Ukiv";
                a.prototype.appear = function() {
                  ! function(t, e, l, o, n, i) {
                    var r = e - o / 2,
                      a = l - n / 2;
                    t.fillStyle = i, t.fillRect(r, a, o, n)
                  }(d, this.x, this.y, this.w, this.h, this.armorClr),
                  function(t, e, l, o, n, i, r) {
                    var a = n + 20,
                      s = e + o / 2 - i,
                      p = l - n / 2 - 10;
                    c(t, e - o / 2, p, i, a, 10, r), c(t, s, p, i, a, 10, r)
                  }(d, this.x, this.y, this.w, this.h, this.trackWidth, this.trackClr),
                  function(t, e, l, o, n, i, r) {
                    var a = o / 2.5;
                    c(t, e - a / 2, l + n / 2 - i + 10, a, i, 10, r)
                  }(d, this.x, this.y, this.w, this.h, this.healthHeight, this.healthClr),
                  function(t, e, l) {
                    t.beginPath(), t.arc(e, l, 30, 0, 2 * Math.PI), t.fillStyle = "rgba(255, 255, 255, 0.2)", t.fill(), t.beginPath(), t.arc(e, l, 20, 0, 2 * Math.PI), t.fillStyle = "rgba(255, 255, 255, 0.3)", t.fill(), t.beginPath(), t.arc(e, l, 10, 0, 2 * Math.PI), t.fillStyle = "rgba(255, 255, 255, 0.5)", t.fill()
                  }(d, this.x, this.y),
                  function(a) {
                    var c = Math.atan2(o - e, l - t);
                    a.fillStyle = r, a.strokeStyle = "color", a.lineCap = "butt", a.lineWidth = n, a.beginPath(), a.moveTo(t, e), a.lineTo(l, o), a.stroke(), a.beginPath(), a.moveTo(l, o), a.lineTo(l - i * Math.cos(c) / 2, o - i * Math.sin(c) / 2)
                  }(d)
                }, new a(s, t, e - 70, 120, 135).appear()
              }

              function n(t, e, l, o, n, i, r, a) {
                d.globalCompositeOperation = "lighter", d.fillStyle = r, d.globalCompositeOperation = "source-over", d.fillStyle = r + a, d.beginPath(), d.arc(t, e, 15, 0, 2 * Math.PI, 0), d.fill();
                for (var c = t, s = e, p = 0, u = 31, f = !1, h = 1 * Math.PI + p, F = 1.02 * Math.PI + p, y = 26, m = 0; m < u; m++) d.strokeStyle = a ? "#000000" + a : "#008000", d.lineWidth = 3, d.beginPath(), d.arc(c, s, y, h, F, f), d.stroke(), d.closePath(), h += .065 * Math.PI, F += .065 * Math.PI;
                for (p = 0, u = 31, f = !1, h = 1 * Math.PI + p, F = 1.02 * Math.PI + p, y = 24, m = 0; m < u; m++) d.strokeStyle = a ? "#000000" + a : "#008000", d.lineWidth = 3, d.beginPath(), d.arc(c, s, y, h, F, f), d.stroke(), d.closePath(), h += .065 * Math.PI, F += .065 * Math.PI;
                for (p = 0, u = 31, f = !1, h = 1 * Math.PI + p, F = 1.02 * Math.PI + p, y = 22, m = 0; m < u; m++) d.strokeStyle = a ? "#000000" + a : "#008000", d.lineWidth = 3, d.beginPath(), d.arc(c, s, y, h, F, f), d.stroke(), d.closePath(), h += .065 * Math.PI, F += .065 * Math.PI
              }

              function i() {
                this.x = f.w / 2 - 150 * Math.sin(b), this.y = f.h - 150 * Math.cos(b), this.r = b
              }

              function r() {
                this.r = Math.random() * Math.PI / 1.25 - Math.PI / 2.5, this.dis = 1280 * Math.random() + 720, this.x = f.w / 2 - Math.sin(this.r) * this.dis, this.y = f.h - Math.cos(this.r) * this.dis
              }

              function a(t, e, l) {
                this.x = t, this.y = e, this.t = 30, this.ty = l
              }

              function c(t) {
                C = (t.pageY - g) * y
              }

              function s(t) {
                C = (t.pageY - g) * y, F.x = (t.pageX - m) * y, F.y = C, E = !1, k = Date.now()
              }
              var p, u = this,
                f = {
                  w: 1.5 * t,
                  h: 1.5 * e
                },
                h = document.getElementById("birds-canvas");
              p = document.getElementById("birds-canvas"), h.width = f.w, h.height = f.h;
              var d = h.getContext("2d"),
                F = {
                  x: 0,
                  y: 0
                },
                y = 1,
                m = 0,
                g = 0,
                C = 0,
                v = ["#1abc9c", "#1abc9c", "#3498db", "#9b59b6", "#34495e", "#16a085", "#27ae60", "#2980b9", "#8e44ad", "#2c3e50", "#f1c40f", "#e67e22", "#e74c3c", "#95a5a6", "#f39c12", "#d35400", "#c0392b", "#bdc3c7", "#7f8c8d"];
              d.clearRect(0, 0, f.w, f.h);
              for (var O = 0; O < 30; O++) {
                var b = Math.random() * Math.PI * 2,
                  N = 250 * Math.random() + 50;
                n(T = 360 + Math.sin(b) * N, _ = 360 - Math.cos(b) * N, Math.sin(b), Math.cos(b), 0, 0, "#c0392b")
              }
              var M = new Image;
              for (M.src = p.toDataURL("image/png"), d.clearRect(0, 0, f.w, f.h), O = 0; O < 30; O++) b = Math.random() * Math.PI - Math.PI / 2, N = 400 * Math.random() + 50, l(T = f.w / 2 + Math.sin(b) * N, _ = f.h - Math.cos(b) * N, T + N / 6 * Math.sin(b), _ - N / 6 * Math.cos(b), N / 30, N / 30, "#2c3e50");
              var S = new Image;
              for (S.src = p.toDataURL("image/png"), d.clearRect(0, 0, f.w, f.h), d.fillStyle = "black", d.fillRect(0, 0, f.w, f.h), O = 0; O < 14; O++) {
                var T, _;
                b = Math.random() * Math.PI / Math.PI * 180, N = 250 * Math.random() + 50, n(T = Math.random() * f.w, _ = Math.random() * f.h, Math.sin(b), Math.cos(b), 0, 0, v[Math.floor(Math.random() * v.length)], 60)
              }
              var w = new Image;
              w.src = p.toDataURL("image/png"), b = 0;
              var E = !0,
                k = 0,
                A = 0,
                L = [],
                z = [];
              for (O = 0; O < 8; O++) z.push(new r), z[O].x += 300 * Math.sin(z[O].r), z[O].y += 300 * Math.cos(z[O].r);
              var D = [],
                P = 0,
                I = [];
              window.addEventListener("mousedown", (function(t) {
                c(t)
              }), !1), window.addEventListener("mousemove", (function(t) {
                s(t)
              }), !1), window.addEventListener("mouseup", (function() {}), !1), window.addEventListener("touchstart", (function(t) {
                t.preventDefault(), c(t.touches[0])
              }), !1), window.addEventListener("touchmove", (function(t) {
                t.preventDefault(), s(t.touches[0])
              }), !1), window.addEventListener("touchend", (function(t) {
                t.preventDefault()
              }), !1), window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(t) {
                window.setTimeout(t, 1e3 / 60)
              };
              var R, x, B = !1,
                j = 0;
              R = window.innerWidth, x = window.innerHeight, R <= x * f.w / f.h ? (y = f.w / R, m = 0, g = Math.floor(x - R * f.h / f.w) / 2, h.style.width = "100%", h.style.height = "100%", h.style.marginTop = "0px") : (y = f.h / x, m = Math.floor(R - x * f.w / f.h) / 2, g = 0, h.style.height = "100%", h.style.width = "100%", h.style.marginTop = "0px"),
                function t() {
                  if (requestAnimFrame(t), B) {
                    var e = 60 * Math.random() - 30,
                      l = 60 * Math.random() - 30;
                    d.translate(e, l)
                  }! function() {
                    if (!u.state.gameOver) {
                      d.drawImage(w, 0, 0), !E && k < Date.now() - 3e3 && (E = !0), ++A > 5 && (A = 0, L.push(new i));
                      for (var t = 0; t < L.length; t++) L[t].x -= 20 * Math.sin(L[t].r), L[t].y -= 20 * Math.cos(L[t].r), e = L[t].x + 50 * Math.sin(L[t].r), l = L[t].y + 50 * Math.cos(L[t].r), c = "#2980b9", d.globalCompositeOperation = "lighter", d.fillStyle = c, d.globalCompositeOperation = "source-over", d.fillStyle = c, d.beginPath(), d.arc(e, l, 10, 0, 2 * Math.PI, 0), d.fill(), (L[t].x < -100 || L[t].x > f.w + 100) && L.splice(t, 1), (L[t].y < -100 || L[t].y > f.h + 100) && L.splice(t, 1);
                      var e, l, c;
                      for (t = 0; t < z.length; t++) {
                        z[t].x += 3 * Math.sin(z[t].r), z[t].y += 3 * Math.cos(z[t].r), n(z[t].x - 100 * Math.sin(z[t].r), z[t].y - 100 * Math.cos(z[t].r), 0, 0, 0, 0, "#c0392b"), z[t].y > f.h && (z[t] = new r, D.push(new a(f.w / 2, f.h, 2)), B = !0, j = 0, u.gameOver());
                        for (var s = 0; s < L.length; s++)(m = (h = z[t].x - L[s].x) * h + (y = z[t].y - L[s].y) * y) < 2025 && (D.push(new a(z[t].x, z[t].y, 1)), u.callExplode(), z[t] = new r, L.splice(s, 1))
                      }
                      if (E) {
                        for (var p = 0; p < z.length; p++) {
                          var h = z[p].x - f.w / 2,
                            y = z[p].y - f.h,
                            m = Math.floor(Math.sqrt(h * h + y * y));
                          I[p] = 1e5 + m + "x" + (1e3 + p)
                        }
                        I.sort(), P = parseInt(I[0].slice(8, 11)), parseInt(I[0].slice(1, 6)) < 800 && (b += (z[P].r - b) / 8)
                      } else h = F.x - f.w / 2, y = F.y - f.h, b = Math.atan(h / y * 2.5);
                      o(f.w / 2, f.h, f.w / 2 - 150 * Math.sin(b), f.h - 150 * Math.cos(b), 30, 20, "#2c3e50");
                      for (var g = 0; g < D.length; g++)
                        if (1 == D[g].ty) {
                          var C = M;
                          d.globalAlpha = 1 - D[g].t / f.h, d.drawImage(C, D[g].x - D[g].t / 2, D[g].y - D[g].t / 2, D[g].t * f.w / f.h, D[g].t), d.globalAlpha = 1
                        } else C = S, d.globalAlpha = 1 - D[g].t / f.h, d.drawImage(C, D[g].x - D[g].t * f.w / f.h / 2, f.h - D[g].t, D[g].t * f.w / f.h, D[g].t), d.globalAlpha = 1;
                      for (g = 0; g < D.length; g++) D[g].t += 20, D[g].t > f.h && D.splice(g, 1)
                    }
                  }(), B && (d.translate(-e, -l), ++j > 20 && (j = 0, B = !1))
                }()
            }
          }, {
            key: "render",
            value: function() {
              var e, l;
              return this.state.gameMode && !this.state.gameOver ? (e = "End Game", l = "top-right top-right-covid-gamemode-on") : this.state.gameOver ? (e = "", l = "top-right top-right-covid-gamemode-over") : (e = "Game", l = "top-right top-right-covid-gamemode-off"), t("div", null, t("div", null, t("div", {
                className: "birds-theme-container"
              }, t("canvas", {
                id: "birds-canvas",
                style: {
                  width: this.props.obj.width,
                  height: this.props.obj.height
                }
              }))), t("div", {
                className: l
              }, this.state.gameOver ? t("span", null, "Game Over. ", t("br", null), "People Recovered ", this.state.score) : t("a", {
                className: "button",
                href: "#",
                onClick: this.onClickButton.bind(this)
              }, e)))
            }
          }]) && n(o.prototype, a), s && n(o, s), Object.defineProperty(o, "prototype", {
            writable: !1
          }), l
        }(p.Component))
    }).call(this, l("2mXy").h)
  },
  JxFh: function() {},
  KQHT: function() {},
  LW0T: function(t, e, l) {
    "use strict";
    (function(t) {
      function o(t) {
        return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, o(t)
      }

      function n(t, e) {
        for (var l = 0; l < e.length; l++) {
          var o = e[l];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
      }

      function i(t, e) {
        return i = Object.setPrototypeOf || function(t, e) {
          return t.__proto__ = e, t
        }, i(t, e)
      }

      function r(t) {
        var e = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (t) {
            return !1
          }
        }();
        return function() {
          var l, o = c(t);
          if (e) {
            var n = c(this).constructor;
            l = Reflect.construct(o, arguments, n)
          } else l = o.apply(this, arguments);
          return a(this, l)
        }
      }

      function a(t, e) {
        if (e && ("object" === o(e) || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        return function(t) {
          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t
        }(t)
      }

      function c(t) {
        return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }, c(t)
      }
      l.d(e, "a", (function() {
        return p
      }));
      var s = l("2mXy"),
        p = (l("pkEa"), l("XkcL"), l("S9Wk"), function(e) {
          function l(t) {
            var e;
            return (e = s.call(this, t)).state = {
              subtheme: "snowfall_subtheme_red"
            }, e
          }! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                writable: !0,
                configurable: !0
              }
            }), Object.defineProperty(t, "prototype", {
              writable: !1
            }), e && i(t, e)
          }(l, e);
          var o, a, c, s = r(l);
          return o = l, (a = [{
            key: "onClickButton",
            value: function(t) {
              this.setState({
                subtheme: t
              }), window.localStorage[COMMONCONSTANTS.THEME_SNOW_SUBTHEME] = t, this.props.changeThemeSubtheme(t)
            }
          }, {
            key: "letItSnow",
            value: function() {
              var t = document.getElementById("snow-canvas"),
                e = t.getContext("2d"),
                l = 0,
                o = window.innerWidth,
                n = window.innerHeight;
              t.width = o, t.height = n;
              for (var i = 250, r = [], a = 0; a < i; a++) r.push({
                x: Math.random() * o,
                y: Math.random() * n,
                radius: 4 * Math.random() + 1,
                density: Math.random() * i
              });
              setInterval((function() {
                e.clearRect(0, 0, o, n), e.fillStyle = "rgba(255, 255, 255, 0.25)", e.beginPath();
                for (var t = 0; t < i; t++) {
                  var a = r[t];
                  e.moveTo(a.x, a.y), e.arc(a.x, a.y, a.radius, 0, 2 * Math.PI, !0)
                }
                e.fill(),
                  function() {
                    l += .01;
                    for (var t = 0; t < i; t++) {
                      var e = r[t];
                      e.y += Math.cos(l + e.density) + 1 + e.radius / 2, e.x += 2 * Math.sin(l), (e.x > o + 5 || e.x < -5 || e.y > n) && (r[t] = t % 3 > 0 ? {
                        x: Math.random() * o,
                        y: -10,
                        radius: e.radius,
                        density: e.density
                      } : Math.sin(l) > 0 ? {
                        x: -5,
                        y: Math.random() * n,
                        radius: e.radius,
                        density: e.density
                      } : {
                        x: o + 5,
                        y: Math.random() * n,
                        radius: e.radius,
                        density: e.density
                      })
                    }
                  }()
              }), 33)
            }
          }, {
            key: "componentDidMount",
            value: function() {
              var t = this;
              this.letItSnow();
              var e = window.localStorage;
              e[COMMONCONSTANTS.THEME_SNOW_SUBTHEME] ? this.setState({
                subtheme: e[COMMONCONSTANTS.THEME_SNOW_SUBTHEME]
              }, (function() {
                t.props.changeThemeSubtheme(e[COMMONCONSTANTS.THEME_SNOW_SUBTHEME])
              })) : this.props.changeThemeSubtheme("snowfall_subtheme_red")
            }
          }, {
            key: "renderSwitchSubtheme",
            value: function(e) {
              switch (e) {
                case "snowfall_subtheme_red":
                  return t("div", {
                    className: "snowfall_subtheme_red_container"
                  }, t("div", {
                    id: "path"
                  }, t("div", {
                    id: "santa"
                  })), t("div", {
                    class: "container"
                  }, t("div", {
                    class: "star"
                  }), t("div", {
                    class: "pressie"
                  }, t("div", {
                    class: "cover"
                  }), t("div", {
                    class: "wrap"
                  }, " "), t("div", {
                    class: "ribbon"
                  })), t("div", {
                    class: "tree"
                  }, t("div", {
                    class: "base"
                  }, " "), t("div", {
                    class: "layer"
                  }, t("div", {
                    class: "line"
                  }, " "), t("div", {
                    class: "bauble one"
                  })), t("div", {
                    class: "layer two"
                  }, t("div", {
                    class: "line two"
                  }, " "), t("div", {
                    class: "bauble two"
                  }), t("div", {
                    class: "socks"
                  }, t("div", {
                    class: "top"
                  }, " "), t("div", {
                    class: "foot"
                  }))), t("div", {
                    class: "layer three"
                  }, t("div", {
                    class: "line three"
                  }, " "), t("div", {
                    class: "bauble three"
                  }), t("div", {
                    class: "socks two"
                  }, t("div", {
                    class: "top"
                  }, " "), t("div", {
                    class: "foot two"
                  })))), t("div", {
                    class: "layer four"
                  }, t("div", {
                    class: "bauble four"
                  }), t("div", {
                    class: "star two"
                  }), t("div", {
                    class: "line four"
                  }, " "))), t("br", null), t("br", null), t("br", null));
                case "snowfall_subtheme_black":
                  return t("div", {
                    class: "container"
                  }, t("div", {
                    class: "mountain"
                  }, t("span", null), t("span", null), t("span", null)), t("div", {
                    class: "mountain-right"
                  }, t("div", {
                    class: "mountain"
                  }, t("span", null), t("span", null), t("span", null))), t("div", {
                    class: "mountain-small"
                  }, t("div", {
                    class: "mountain"
                  }, t("span", null, "   "), t("span", null, "   "), t("span", null, "   "))), t("div", {
                    class: "rock"
                  }, t("span", null), t("span", null), t("span", null), t("span", null)), t("div", {
                    class: "rock rock-right"
                  }, t("span", null, "   "), t("span", null, "   "), t("span", null, "   "), t("span", null, "   ")), t("div", {
                    class: "rock-shadow"
                  }), t("div", {
                    class: "rock-shadow isright"
                  }), t("div", {
                    class: "left"
                  }, t("div", {
                    class: "tree"
                  }, t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "body"
                  })), t("div", {
                    class: "tree"
                  }, t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "body"
                  })), t("div", {
                    class: "tree"
                  }, t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "body"
                  })), t("div", {
                    class: "tree"
                  }, t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "body"
                  })), t("div", {
                    class: "tree"
                  }, t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "body"
                  })), t("div", {
                    class: "tree"
                  }, t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "body"
                  })), t("div", {
                    class: "tree"
                  }, t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "body"
                  })), t("div", {
                    class: "tree"
                  }, t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "body"
                  })), t("div", {
                    class: "tree"
                  }, t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "body"
                  })), t("div", {
                    class: "tree"
                  }, t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "body"
                  }))), t("div", {
                    class: "path"
                  }), t("div", {
                    class: "weak-light"
                  }), t("div", {
                    class: "weak"
                  }), t("div", {
                    class: "bottom"
                  }, t("div", {
                    class: "tree"
                  }, t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "body"
                  })), t("div", {
                    class: "tree"
                  }, t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "body"
                  })), t("div", {
                    class: "tree"
                  }, t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "body"
                  })), t("div", {
                    class: "tree"
                  }, t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "body"
                  })), t("div", {
                    class: "tree"
                  }, t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "body"
                  })), t("div", {
                    class: "tree"
                  }, t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "body"
                  })), t("div", {
                    class: "tree"
                  }, t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "body"
                  })), t("div", {
                    class: "tree"
                  }, t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "body"
                  })), t("div", {
                    class: "tree"
                  }, t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "body"
                  })), t("div", {
                    class: "tree"
                  }, t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "body"
                  })), t("div", {
                    class: "tree"
                  }, t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "body"
                  })), t("div", {
                    class: "tree"
                  }, t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "body"
                  })), t("div", {
                    class: "tree"
                  }, t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "body"
                  })), t("div", {
                    class: "tree"
                  }, t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "body"
                  })), t("div", {
                    class: "tree"
                  }, t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "body"
                  }))), t("div", {
                    class: "path-detail-left"
                  }), t("div", {
                    class: "home"
                  }, t("div", {
                    class: "roof"
                  }), t("div", {
                    class: "left-wall"
                  }), t("div", {
                    class: "wall"
                  }), t("div", {
                    class: "window"
                  })), t("div", {
                    class: "right"
                  }, t("div", {
                    class: "tree"
                  }, t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "body"
                  })), t("div", {
                    class: "tree"
                  }, t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "body"
                  })), t("div", {
                    class: "tree"
                  }, t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "body"
                  })), t("div", {
                    class: "tree"
                  }, t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "body"
                  })), t("div", {
                    class: "tree"
                  }, t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "body"
                  })), t("div", {
                    class: "tree"
                  }, t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "body"
                  })), t("div", {
                    class: "tree"
                  }, t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "bough"
                  }), t("div", {
                    class: "body"
                  }))), t("div", {
                    class: "stars"
                  }, t("div", {
                    class: "star"
                  }), t("div", {
                    class: "star"
                  }), t("div", {
                    class: "star"
                  }), t("div", {
                    class: "star"
                  }), t("div", {
                    class: "star"
                  }), t("div", {
                    class: "star"
                  }), t("div", {
                    class: "star"
                  }), t("div", {
                    class: "star"
                  }), t("div", {
                    class: "star"
                  }), t("div", {
                    class: "star"
                  }), t("div", {
                    class: "star"
                  }), t("div", {
                    class: "star"
                  }), t("div", {
                    class: "star"
                  }), t("div", {
                    class: "star"
                  }), t("div", {
                    class: "star"
                  }), t("div", {
                    class: "star"
                  }), t("div", {
                    class: "star"
                  }), t("div", {
                    class: "star"
                  }), t("div", {
                    class: "star"
                  }), t("div", {
                    class: "star"
                  }), t("div", {
                    class: "star"
                  }), t("div", {
                    class: "star"
                  }), t("div", {
                    class: "star"
                  }), t("div", {
                    class: "star"
                  }), t("div", {
                    class: "star"
                  }), t("div", {
                    class: "star"
                  }), t("div", {
                    class: "star"
                  }), t("div", {
                    class: "star"
                  }), t("div", {
                    class: "star"
                  }), t("div", {
                    class: "star"
                  }), t("div", {
                    class: "star"
                  }), t("div", {
                    class: "star"
                  })), t("span", {
                    class: "falling-star"
                  }), t("span", {
                    class: "falling-star"
                  }), t("span", {
                    class: "falling-star"
                  }));
                case "snowfall_subtheme_blue":
                  return t("div", {
                    class: "i-am-in-snowfall-theme"
                  }, t("div", {
                    class: "bg"
                  }, t("div", {
                    class: "mountain"
                  }, t("div", {
                    class: "mountain-top"
                  }, t("div", {
                    class: "mountain-cap-1"
                  }), t("div", {
                    class: "mountain-cap-2"
                  }), t("div", {
                    class: "mountain-cap-3"
                  }))), t("div", {
                    class: "mountain-two"
                  }, t("div", {
                    class: "mountain-top"
                  }, t("div", {
                    class: "mountain-cap-1"
                  }), t("div", {
                    class: "mountain-cap-2"
                  }), t("div", {
                    class: "mountain-cap-3"
                  }))), t("div", {
                    class: "mountain-three"
                  }, t("div", {
                    class: "mountain-top"
                  }, t("div", {
                    class: "mountain-cap-1"
                  }), t("div", {
                    class: "mountain-cap-2"
                  }), t("div", {
                    class: "mountain-cap-3"
                  }))), t("div", {
                    class: "cloud"
                  })))
              }
            }
          }, {
            key: "render",
            value: function() {
              return t("div", null, t("div", null, t("div", {
                className: "snowfall-theme-container"
              }, this.renderSwitchSubtheme(this.state.subtheme), t("canvas", {
                id: "snow-canvas"
              }))), t("div", null, t("div", {
                className: "top-right top-right-snowfall"
              }, t("span", {
                className: "label"
              }, t("b", null, " Select: ")), t("a", {
                className: "button red " + ("snowfall_subtheme_red" == this.state.subtheme ? "active" : ""),
                href: "#",
                onClick: this.onClickButton.bind(this, "snowfall_subtheme_red")
              }), t("a", {
                className: "button black " + ("snowfall_subtheme_black" == this.state.subtheme ? "active" : ""),
                href: "#",
                onClick: this.onClickButton.bind(this, "snowfall_subtheme_black")
              }), t("a", {
                className: "button blue " + ("snowfall_subtheme_blue" == this.state.subtheme ? "active" : ""),
                href: "#",
                onClick: this.onClickButton.bind(this, "snowfall_subtheme_blue")
              }))))
            }
          }]) && n(o.prototype, a), c && n(o, c), Object.defineProperty(o, "prototype", {
            writable: !1
          }), l
        }(s.Component))
    }).call(this, l("2mXy").h)
  },
  Lpdv: function(t, e, l) {
    "use strict";
    (function(t) {
      function o(t) {
        return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, o(t)
      }

      function n(t, e) {
        for (var l = 0; l < e.length; l++) {
          var o = e[l];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
      }

      function i(t, e) {
        return i = Object.setPrototypeOf || function(t, e) {
          return t.__proto__ = e, t
        }, i(t, e)
      }

      function r(t) {
        var e = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (t) {
            return !1
          }
        }();
        return function() {
          var l, o = c(t);
          if (e) {
            var n = c(this).constructor;
            l = Reflect.construct(o, arguments, n)
          } else l = o.apply(this, arguments);
          return a(this, l)
        }
      }

      function a(t, e) {
        if (e && ("object" === o(e) || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        return function(t) {
          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t
        }(t)
      }

      function c(t) {
        return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }, c(t)
      }
      l.d(e, "a", (function() {
        return f
      }));
      l("MOu9");
      var s = l("2mXy"),
        p = l("nCbn"),
        u = l("Vk77"),
        f = function(e) {
          function l(t) {
            return s.call(this, t)
          }! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                writable: !0,
                configurable: !0
              }
            }), Object.defineProperty(t, "prototype", {
              writable: !1
            }), e && i(t, e)
          }(l, e);
          var o, a, c, s = r(l);
          return o = l, (a = [{
            key: "render",
            value: function() {
              var e = this.props.data,
                l = e.text || "",
                o = !e.blocked;
              return Utility.isExtension(), t("div", {
                className: "upgrade-container"
              }, t("div", {
                className: "inner-container"
              }, o && t("div", {
                className: "close-container",
                onClick: this.props.close
              }, t("span", {
                className: "lnr lnr-cross-circle"
              })), t("div", {
                className: "heading"
              }, t("span", {
                className: "text"
              }, "Unlock ", l, "!")), t("div", {
                className: "content"
              }, t("div", {
                className: "content-text"
              }, "Upgrade now to unlock this & many more: ", t("span", {
                className: "feature"
              })), t(p.a, null), t("div", {
                className: "all-features-text"
              }, "All premium features")), t(u.a, {
                logToAmplitude: this.props.logToAmplitude,
                source: "modal"
              })))
            }
          }]) && n(o.prototype, a), c && n(o, c), Object.defineProperty(o, "prototype", {
            writable: !1
          }), l
        }(s.Component)
    }).call(this, l("2mXy").h)
  },
  MOu9: function() {},
  MOxe: function(t, e, l) {
    "use strict";

    function o(t, e) {
      y.options.__h && y.options.__h(d, t, m || e), m = 0;
      var l = d.__H || (d.__H = {
        __: [],
        __h: []
      });
      return t >= l.__.length && l.__.push({}), l.__[t]
    }

    function n(t) {
      return m = 1,
        function(t, e, l) {
          var n = o(h++, 2);
          return n.t = t, n.__c || (n.__ = [l ? l(e) : f(void 0, e), function(t) {
            var e = n.t(n.__[0], t);
            n.__[0] !== e && (n.__ = [e, n.__[1]], n.__c.setState({}))
          }], n.__c = d), n.__
        }(f, t)
    }

    function i(t, e) {
      var l = o(h++, 3);
      !y.options.__s && u(l.__H, e) && (l.__ = t, l.__H = e, d.__H.__h.push(l))
    }

    function r(t) {
      return m = 5, a((function() {
        return {
          current: t
        }
      }), [])
    }

    function a(t, e) {
      var l = o(h++, 7);
      return u(l.__H, e) && (l.__ = t(), l.__H = e, l.__h = t), l.__
    }

    function c() {
      g.forEach((function(t) {
        if (t.__P) try {
          t.__H.__h.forEach(s), t.__H.__h.forEach(p), t.__H.__h = []
        } catch (e) {
          t.__H.__h = [], y.options.__e(e, t.__v)
        }
      })), g = []
    }

    function s(t) {
      var e = d;
      "function" == typeof t.__c && t.__c(), d = e
    }

    function p(t) {
      var e = d;
      t.__c = t.__(), d = e
    }

    function u(t, e) {
      return !t || t.length !== e.length || e.some((function(e, l) {
        return e !== t[l]
      }))
    }

    function f(t, e) {
      return "function" == typeof e ? e(t) : e
    }
    l.d(e, "c", (function() {
      return n
    })), l.d(e, "a", (function() {
      return i
    })), l.d(e, "b", (function() {
      return r
    }));
    var h, d, F, y = l("2mXy"),
      m = 0,
      g = [],
      C = y.options.__b,
      v = y.options.__r,
      O = y.options.diffed,
      b = y.options.__c,
      N = y.options.unmount;
    y.options.__b = function(t) {
      d = null, C && C(t)
    }, y.options.__r = function(t) {
      v && v(t), h = 0;
      var e = (d = t.__c).__H;
      e && (e.__h.forEach(s), e.__h.forEach(p), e.__h = [])
    }, y.options.diffed = function(t) {
      O && O(t);
      var e = t.__c;
      e && e.__H && e.__H.__h.length && (1 !== g.push(e) && F === y.options.requestAnimationFrame || ((F = y.options.requestAnimationFrame) || function(t) {
        var e, l = function() {
            clearTimeout(o), M && cancelAnimationFrame(e), setTimeout(t)
          },
          o = setTimeout(l, 100);
        M && (e = requestAnimationFrame(l))
      })(c)), d = void 0
    }, y.options.__c = function(t, e) {
      e.some((function(t) {
        try {
          t.__h.forEach(s), t.__h = t.__h.filter((function(t) {
            return !t.__ || p(t)
          }))
        } catch (l) {
          e.some((function(t) {
            t.__h && (t.__h = [])
          })), e = [], y.options.__e(l, t.__v)
        }
      })), b && b(t, e)
    }, y.options.unmount = function(t) {
      N && N(t);
      var e = t.__c;
      if (e && e.__H) try {
        e.__H.__.forEach(s)
      } catch (t) {
        y.options.__e(t, e.__v)
      }
    };
    var M = "function" == typeof requestAnimationFrame
  },
  My6w: function(t, e, l) {
    "use strict";
    (function(t) {
      function o(t) {
        return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, o(t)
      }

      function n(t, e) {
        for (var l = 0; l < e.length; l++) {
          var o = e[l];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
      }

      function i(t, e) {
        return i = Object.setPrototypeOf || function(t, e) {
          return t.__proto__ = e, t
        }, i(t, e)
      }

      function r(t) {
        var e = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (t) {
            return !1
          }
        }();
        return function() {
          var l, o = c(t);
          if (e) {
            var n = c(this).constructor;
            l = Reflect.construct(o, arguments, n)
          } else l = o.apply(this, arguments);
          return a(this, l)
        }
      }

      function a(t, e) {
        if (e && ("object" === o(e) || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        return function(t) {
          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t
        }(t)
      }

      function c(t) {
        return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }, c(t)
      }
      l.d(e, "a", (function() {
        return d
      }));
      l("4QvU"), l("RRfL"), l("KQHT");
      var s = l("2mXy"),
        p = (l("xmE+"), l("FP0o")),
        u = l("JPmK"),
        f = l("Xfpc"),
        h = l("LW0T"),
        d = function(e) {
          function l(t) {
            return s.call(this, t)
          }! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                writable: !0,
                configurable: !0
              }
            }), Object.defineProperty(t, "prototype", {
              writable: !1
            }), e && i(t, e)
          }(l, e);
          var o, a, c, s = r(l);
          return o = l, (a = [{
            key: "componentDidMount",
            value: function() {
              var t = this.props.settings.value.theme,
                e = this.getThemeObj();
              switch (t) {
                case "fireworks":
                  p.a.init(e.value.width, 100);
                  break;
                case "birds":
                  p.a.birdsInit(e.value.width, e.value.height)
              }
            }
          }, {
            key: "getThemeObj",
            value: function() {
              var t = Utility.getNotesSizeId(this.props.settings);
              return Utility.getOptions().filter((function(t) {
                return "notesSize" == t.id
              }))[0].options.filter((function(e) {
                return e.id == t
              }))[0]
            }
          }, {
            key: "componentWillUnmount",
            value: function() {}
          }, {
            key: "getTheme",
            value: function() {
              var e = this.props.settings.value.theme,
                l = Utility.isExtension(),
                o = this.getThemeObj();
              switch (e) {
                case "emoji":
                  return t("div", {
                    className: "emoji-theme-container"
                  }, t("div", {
                    className: "emojis"
                  }, t("div", {
                    className: "emoji emoji-1",
                    style: l ? {
                      backgroundImage: "url(images/emojiTheme/chicken.png)"
                    } : null
                  }), t("div", {
                    className: "emoji emoji-2",
                    style: l ? {
                      backgroundImage: "url(images/emojiTheme/blush.png)"
                    } : null
                  }), t("div", {
                    className: "emoji emoji-3",
                    style: l ? {
                      backgroundImage: "url(images/emojiTheme/cool.png)"
                    } : null
                  }), t("div", {
                    className: "emoji emoji-4",
                    style: l ? {
                      backgroundImage: "url(images/emojiTheme/guitar.png)"
                    } : null
                  }), t("div", {
                    className: "emoji emoji-5",
                    style: l ? {
                      backgroundImage: "url(images/emojiTheme/cry.png)"
                    } : null
                  }), t("div", {
                    className: "emoji emoji-6",
                    style: l ? {
                      backgroundImage: "url(images/emojiTheme/nerd.png)"
                    } : null
                  }), t("div", {
                    className: "emoji emoji-7",
                    style: l ? {
                      backgroundImage: "url(images/emojiTheme/party.png)"
                    } : null
                  }), t("div", {
                    className: "emoji emoji-8",
                    style: l ? {
                      backgroundImage: "url(images/emojiTheme/rock.png)"
                    } : null
                  })));
                case "fireworks":
                  return t("div", {
                    className: "fireworks-theme-container"
                  }, t("canvas", {
                    id: "firework-canvas"
                  }));
                case "covid":
                  return t(u.a, {
                    notesAlternateAreaDataChange: this.props.notesAlternateAreaDataChange,
                    applyInteractionToBody: this.props.applyInteractionToBody,
                    logToAmplitude: this.props.logToAmplitude,
                    obj: {
                      width: o.value.width,
                      height: o.value.height
                    }
                  });
                case "horror":
                  return console.log("HORROR"), t(f.a, {
                    notesAlternateAreaDataChange: this.props.notesAlternateAreaDataChange,
                    applyInteractionToBody: this.props.applyInteractionToBody,
                    obj: {
                      width: o.value.width,
                      height: o.value.height
                    }
                  });
                case "birds":
                  return t("div", {
                    className: "birds-theme-container"
                  }, t("canvas", {
                    id: "birds-canvas",
                    style: {
                      width: o.value.width,
                      height: o.value.height
                    }
                  }));
                case "solar_system":
                  return t("div", {
                    className: "solar-system-theme-container"
                  }, t("div", {
                    class: "solar-system"
                  }, t("div", {
                    class: "sun"
                  }), t("div", {
                    class: "mercury"
                  }), t("div", {
                    class: "venus"
                  }), t("div", {
                    class: "earth"
                  }), t("div", {
                    class: "mars"
                  }), t("div", {
                    class: "jupiter"
                  }), t("div", {
                    class: "saturn"
                  }), t("div", {
                    class: "uranus"
                  }), t("div", {
                    class: "neptune"
                  }), t("div", {
                    class: "pluto"
                  }), t("div", {
                    class: "asteroids-belt"
                  })));
                case "food":
                  return t("div", {
                    className: "food-theme-container"
                  }, t("div", {
                    class: "food-items"
                  }, t("div", {
                    class: "food-item  show item-1",
                    style: l ? {
                      backgroundImage: "images/foodTheme/french-fries.png"
                    } : null
                  }), t("div", {
                    class: "food-item  show item-2",
                    style: l ? {
                      backgroundImage: "images/foodTheme/beer-10.png"
                    } : null
                  }), t("div", {
                    class: "food-item  show item-3",
                    style: l ? {
                      backgroundImage: "images/foodTheme/coffee-container.png"
                    } : null
                  }), t("div", {
                    class: "food-item  show item-4",
                    style: l ? {
                      backgroundImage: "images/foodTheme/coffee-mug.png"
                    } : null
                  }), t("div", {
                    class: "food-item  show item-5",
                    style: l ? {
                      backgroundImage: "images/foodTheme/cupcake.png"
                    } : null
                  }), t("div", {
                    class: "food-item  show item-6",
                    style: l ? {
                      backgroundImage: "images/foodTheme/salad.png"
                    } : null
                  }), t("div", {
                    class: "food-item  show item-7",
                    style: l ? {
                      backgroundImage: "images/foodTheme/rice.png"
                    } : null
                  }), t("div", {
                    class: "food-item  show item-8",
                    style: l ? {
                      backgroundImage: "images/foodTheme/club-sandwich.png"
                    } : null
                  }), t("div", {
                    class: "food-item  show item-9",
                    style: l ? {
                      backgroundImage: "images/foodTheme/martini-glass.png"
                    } : null
                  }), t("div", {
                    class: "food-item  show item-10",
                    style: l ? {
                      backgroundImage: "images/foodTheme/whiskey-on-rocks.png"
                    } : null
                  }), t("div", {
                    class: "food-item  show item-11",
                    style: l ? {
                      backgroundImage: "images/foodTheme/tequila.png"
                    } : null
                  }), t("div", {
                    class: "food-item  show item-12",
                    style: l ? {
                      backgroundImage: "images/foodTheme/champagne.png"
                    } : null
                  }), t("div", {
                    class: "food-item  show item-13",
                    style: l ? {
                      backgroundImage: "images/foodTheme/18.png"
                    } : null
                  }), t("div", {
                    class: "food-item  show item-14",
                    style: l ? {
                      backgroundImage: "images/foodTheme/asian-noodles.png"
                    } : null
                  })));
                case "valentine":
                  return console.log("VALL"), t("div", {
                    className: "valentines-theme-container"
                  }, t("div", {
                    class: "bubbles"
                  }, t("div", {
                    class: "bubble"
                  }, t("svg", {
                    class: "heart",
                    viewBox: "0 0 32 32"
                  }, t("title", null, "heart22"), t("path", {
                    d: "M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"
                  }))), t("div", {
                    class: "bubble"
                  }, t("svg", {
                    class: "heart",
                    viewBox: "0 0 32 32"
                  }, t("title", null, "heart22"), t("path", {
                    d: "M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"
                  }))), t("div", {
                    class: "bubble"
                  }, t("svg", {
                    class: "heart",
                    viewBox: "0 0 32 32"
                  }, t("title", null, "heart22"), t("path", {
                    d: "M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"
                  }))), t("div", {
                    class: "bubble"
                  }, t("svg", {
                    class: "heart",
                    viewBox: "0 0 32 32"
                  }, t("title", null, "heart22"), t("path", {
                    d: "M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"
                  }))), t("div", {
                    class: "bubble"
                  }, t("svg", {
                    class: "heart",
                    viewBox: "0 0 32 32"
                  }, t("title", null, "heart22"), t("path", {
                    d: "M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"
                  }))), t("div", {
                    class: "bubble"
                  }, t("svg", {
                    class: "heart",
                    viewBox: "0 0 32 32"
                  }, t("title", null, "heart22"), t("path", {
                    d: "M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"
                  }))), t("div", {
                    class: "bubble"
                  }, t("svg", {
                    class: "heart",
                    viewBox: "0 0 32 32"
                  }, t("title", null, "heart22"), t("path", {
                    d: "M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"
                  }))), t("div", {
                    class: "bubble"
                  }, t("svg", {
                    class: "heart",
                    viewBox: "0 0 32 32"
                  }, t("title", null, "heart22"), t("path", {
                    d: "M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"
                  }))), t("div", {
                    class: "bubble"
                  }, t("svg", {
                    class: "heart",
                    viewBox: "0 0 32 32"
                  }, t("title", null, "heart22"), t("path", {
                    d: "M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"
                  }))), t("div", {
                    class: "bubble"
                  }, t("svg", {
                    class: "heart",
                    viewBox: "0 0 32 32"
                  }, t("title", null, "heart22"), t("path", {
                    d: "M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"
                  }))), t("div", {
                    class: "bubble"
                  }, t("svg", {
                    class: "heart",
                    viewBox: "0 0 32 32"
                  }, t("title", null, "heart22"), t("path", {
                    d: "M23.6 2c-3.363 0-6.258 2.736-7.599 5.594-1.342-2.858-4.237-5.594-7.601-5.594-4.637 0-8.4 3.764-8.4 8.401 0 9.433 9.516 11.906 16.001 21.232 6.13-9.268 15.999-12.1 15.999-21.232 0-4.637-3.763-8.401-8.4-8.401z"
                  })))));
                case "snowfall":
                  return t(h.a, {
                    changeThemeSubtheme: this.props.changeThemeSubtheme,
                    notesAlternateAreaDataChange: this.props.notesAlternateAreaDataChange,
                    applyInteractionToBody: this.props.applyInteractionToBody,
                    obj: {
                      width: o.value.width,
                      height: o.value.height
                    }
                  });
                case "travel":
                  return t("div", {
                    className: "travel-theme-container"
                  }, t("svg", {
                    className: "travel-theme-container-svg",
                    version: "1.1",
                    id: "Layer_1",
                    x: "0px",
                    y: "0px",
                    viewBox: "0 0 400 400",
                    "enable-background": "new 0 0 400 400"
                  }, t("g", {
                    id: "jjperezaguinaga"
                  }, t("g", {
                    id: "countryObjects"
                  }, t("path", {
                    fill: "#F15C27",
                    d: "M124.467,134.068c-2.028,2.304-3.916,4.723-5.74,7.187c-0.104,0.155-0.359,0.16-0.568,0.012l-14.95-10.734 c-0.208-0.149-0.431-0.462-0.492-0.699c-0.699-2.659-1.231-5.311-1.771-8.085c-0.046-0.243,0.114-0.458,0.359-0.476 c2.819-0.201,5.698-0.233,8.443-0.247c0.239,0,0.59,0.138,0.781,0.308l13.809,12.168 C124.531,133.671,124.588,133.925,124.467,134.068z"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "109.465,128.355 107.582,126.629 109.685,128.071 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "109.95,127.335 107.582,126.629 109.983,126.959 \t\t"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M109.84,126.14c-0.774,0.136-1.513,0.311-2.258,0.489l2.092-0.86L109.84,126.14z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M109.129,125.058l-1.547,1.571c0.38-0.634,0.787-1.249,1.219-1.843L109.129,125.058z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M107.994,124.383c-0.166,0.732-0.298,1.487-0.412,2.246c-0.016-0.782-0.027-1.573,0.005-2.34 L107.994,124.383z"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "106.726,124.312 107.582,126.629 106.356,124.43 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "105.703,124.895 107.582,126.629 105.475,125.193 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "105.189,125.95 107.582,126.629 105.159,126.337 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "105.323,127.175 107.582,126.629 105.502,127.547 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "106.073,128.24 107.582,126.629 106.412,128.5 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "107.229,128.873 107.582,126.629 107.632,128.954 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "108.472,128.915 107.582,126.629 108.83,128.797 \t\t"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M105.982,128.708c1.341,1.008,3.124,0.926,3.979-0.188c0.83-1.134,0.584-2.828-0.718-3.921 c-1.27-1.063-3.153-1.063-4.039,0.14C104.294,125.922,104.642,127.698,105.982,128.708z M106.258,128.35 c-1.105-0.844-1.393-2.31-0.646-3.286c0.733-0.989,2.273-1.002,3.336-0.122c1.074,0.896,1.294,2.308,0.603,3.251 C108.838,129.121,107.366,129.189,106.258,128.35z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M110.884,132.913c-0.336-0.255-0.778-0.236-0.989,0.036c-0.212,0.272-0.109,0.695,0.229,0.944l2.261,1.664 l0.741-0.955L110.884,132.913z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M113.064,130.075c-0.327-0.264-0.762-0.255-0.971,0.02c-0.21,0.273-0.113,0.707,0.218,0.965l2.205,1.735 l0.734-0.96L113.064,130.075z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M115.377,127.342c-0.318-0.273-0.757-0.282-0.981-0.02c-0.224,0.264-0.146,0.695,0.176,0.965l2.147,1.807 l0.785-0.922L115.377,127.342z"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M115.571,136.443c-0.335-0.253-0.77-0.248-0.971,0.01c-0.201,0.259-0.089,0.67,0.25,0.92l2.26,1.663 l0.702-0.902L115.571,136.443z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M117.635,133.756c-0.327-0.264-0.753-0.267-0.951-0.006c-0.199,0.26-0.092,0.681,0.238,0.94l2.205,1.736 l0.693-0.908L117.635,133.756z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M119.826,131.17c-0.318-0.273-0.748-0.294-0.96-0.045c-0.213,0.249-0.124,0.669,0.198,0.94l2.147,1.806 l0.741-0.87L119.826,131.17z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M104.14,122.559c-0.496-0.403-1.187-0.355-1.542,0.106s-0.235,1.156,0.27,1.547l0.763,0.596l1.261-1.642 L104.14,122.559z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M106.461,275.036c-0.349,0.277-0.433,0.754-0.188,1.066c2.043,2.535,4.219,4.961,6.444,7.338 c0.278,0.279,0.764,0.256,1.084-0.055l4.005-3.871c-2.444-2.554-4.806-5.189-6.999-7.963L106.461,275.036z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M110.794,271.563c2.193,2.774,4.557,5.41,7.001,7.961l5.168-4.996c-2.289-2.391-4.504-4.859-6.56-7.459 L110.794,271.563z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M106.249,265.622c1.323,1.861,2.651,3.722,4.097,5.492l5.635-4.465c-1.355-1.656-2.597-3.404-3.841-5.146 L106.249,265.622z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M94.775,273.646c-0.244,0.172-0.312,0.498-0.153,0.729l0.438,0.625c0.168,0.228,0.499,0.269,0.74,0.095 l1.094-0.787c0.241-0.174,0.57-0.136,0.734,0.086l1.831,2.479c0.16,0.226,0.114,0.543-0.123,0.726l-1.068,0.821 c-0.236,0.183-0.285,0.509-0.108,0.728l0.475,0.6c0.176,0.222,0.506,0.248,0.74,0.062l10.986-8.703 c-1.443-1.771-2.771-3.633-4.097-5.49L94.775,273.646z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M103.539,281.53c1.147,1.35,2.296,2.699,3.517,3.986l4.103-3.771c-1.167-1.227-2.265-2.518-3.361-3.809 L103.539,281.53z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M107.03,285.444c-3.688,2.236-7.458,4.43-11.241,6.52c2.566-3.51,5.191-6.954,7.873-10.336 C104.76,282.923,105.861,284.214,107.03,285.444z"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "118.952,271.771 116.99,273.282 118.739,271.521 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "118.13,271.157 116.99,273.282 117.789,271.077 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "116.993,271.104 116.99,273.282 116.614,271.21 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "115.846,271.622 116.99,273.282 115.531,271.892 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "115.003,272.583 116.99,273.282 114.842,272.946 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "114.703,273.739 116.99,273.282 114.739,274.101 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "115.024,274.788 116.99,273.282 115.246,275.048 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "115.889,275.419 116.99,273.282 116.243,275.497 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "117.052,275.454 116.99,273.282 117.432,275.339 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "118.186,274.903 116.99,273.282 118.492,274.624 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "118.995,273.915 116.99,273.282 119.147,273.552 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "119.272,272.769 116.99,273.282 119.233,272.423 \t\t"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M118.603,275.048c1.199-1.112,1.449-2.76,0.603-3.719c-0.83-0.975-2.519-0.912-3.769,0.133 c-1.25,1.048-1.543,2.734-0.66,3.771C115.679,276.253,117.412,276.153,118.603,275.048z M118.323,274.745 c-0.989,0.908-2.424,0.996-3.165,0.154c-0.727-0.857-0.483-2.25,0.546-3.123c1.03-0.871,2.427-0.922,3.118-0.111 C119.524,272.469,119.32,273.825,118.323,274.745z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M101.849,273.831c-0.39,0.293-0.494,0.816-0.231,1.172c0.258,0.361,0.802,0.392,1.186,0.097l4.284-3.31 l-0.912-1.209L101.849,273.831z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M100.407,271.882c-0.396,0.283-0.504,0.802-0.241,1.156c0.263,0.355,0.792,0.408,1.184,0.117l4.35-3.221 l-0.902-1.22L100.407,271.882z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M106.376,282.931c-0.23,0.203-0.263,0.549-0.061,0.764c0.201,0.217,0.546,0.227,0.774,0.02l2.529-2.274 l-0.695-0.764L106.376,282.931z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M105.322,281.696c-0.232,0.199-0.266,0.543-0.073,0.768c0.191,0.226,0.532,0.242,0.764,0.041l2.558-2.243 l-0.671-0.787L105.322,281.696z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M112.992,280.753c-0.357,0.332-0.413,0.853-0.124,1.168c0.289,0.314,0.808,0.298,1.16-0.039l2.358-2.243 l-1.008-1.099L112.992,280.753z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M110.485,277.969c-0.367,0.317-0.44,0.84-0.164,1.165c0.273,0.328,0.808,0.314,1.169-0.01l2.428-2.166 l-0.979-1.127L110.485,277.969z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M108.065,275.104c-0.376,0.309-0.472,0.832-0.199,1.158c0.278,0.325,0.806,0.336,1.18,0.021l2.494-2.088 l-0.952-1.15L108.065,275.104z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M121.234,267.339l-0.083,0.072l0.007,0.006l-0.288,0.41c-0.441,0.892-0.27,2.26-0.27,2.262 c-0.01,0.011,1.33,0.349,2.273,0.019l0.443-0.236l0.008,0.008l0.079-0.071l0.747-0.681l1.736-1.58l-0.336-0.362l-2.271,2.047 c-0.35,0.313-0.776,0.418-0.953,0.227c-0.181-0.188-0.031-0.602,0.323-0.916l2.29-2.024l-0.224-0.267l-2.297,2.021 c-0.354,0.311-0.777,0.404-0.947,0.205c-0.168-0.197-0.015-0.607,0.342-0.916l2.314-1.998l-0.343-0.402l-1.829,1.562 L121.234,267.339z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M127.929,269.729c-0.619-0.597-1.168-1.26-1.76-1.885l-2.82,2.59l-0.093,0.086l-0.007-0.008 c-1.025,0.789-3.277,0.161-3.263,0.141c-0.003-0.004-0.368-2.297,0.548-3.217l-0.008-0.011l0.097-0.079l2.92-2.476 c-0.608-0.686-1.188-1.396-1.749-2.123l-5.399,4.326c2.056,2.604,4.271,5.07,6.561,7.463L127.929,269.729z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M116.292,260.702l-0.082,0.06l0.004,0.006l-0.318,0.334c-0.537,0.711-0.653,1.739-0.653,1.739 s1.018,0.191,1.854-0.116l0.412-0.205l0.003,0.006l0.08-0.062l0.753-0.567l1.744-1.32l-0.195-0.266l-2.276,1.711 c-0.354,0.266-0.723,0.367-0.825,0.229c-0.104-0.139,0.101-0.465,0.456-0.727l2.289-1.699l-0.139-0.188l-2.292,1.692 c-0.354,0.262-0.726,0.363-0.829,0.224c-0.103-0.14,0.104-0.462,0.458-0.724l2.305-1.678l-0.211-0.285l-1.814,1.314 L116.292,260.702z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M112.188,261.472c1.243,1.737,2.484,3.483,3.839,5.143l5.424-4.299l-1.199-1.521l-2.84,2.16l-0.094,0.072 l-0.005-0.008c-1.006,0.674-2.688,0.297-2.689,0.295c-0.001-0.002,0.132-1.726,1.068-2.49l-0.005-0.008l0.096-0.068l2.896-2.086 l-0.82-1.158L112.188,261.472z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M111.109,266.483c-0.391,0.291-0.515,0.787-0.278,1.109c0.237,0.321,0.74,0.344,1.13,0.045l2.581-1.98 l-0.825-1.123L111.109,266.483z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M109.871,264.81c-0.396,0.283-0.523,0.772-0.286,1.094c0.237,0.322,0.749,0.35,1.14,0.059l2.619-1.934 l-0.828-1.119L109.871,264.81z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M109.154,266.923c0.301-0.221,0.69-0.198,0.872,0.048c0.183,0.245,0.087,0.627-0.21,0.85 c-0.298,0.225-0.688,0.203-0.871-0.047C108.76,267.524,108.854,267.144,109.154,266.923z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M118.194,280.028c1.581,1.65,3.253,3.201,4.918,4.762l4.829-5.326c-1.558-1.463-3.126-2.916-4.605-4.461 L118.194,280.028z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M108.184,289.817c-0.213,0.207-0.225,0.539-0.026,0.74l0.537,0.541c0.197,0.198,0.528,0.19,0.738-0.021 l0.95-0.955c0.211-0.211,0.538-0.223,0.73-0.026c0.709,0.743,1.484,1.42,2.226,2.131c0.201,0.188,0.199,0.518-0.004,0.735 l-0.919,0.984c-0.203,0.219-0.201,0.553,0.004,0.744l0.556,0.522c0.205,0.191,0.533,0.168,0.733-0.051l9.416-10.387 c-1.665-1.56-3.337-3.111-4.917-4.76L108.184,289.817z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M115.188,288.845c-0.336,0.354-0.349,0.883-0.026,1.186c0.321,0.303,0.852,0.258,1.184-0.1l3.686-3.961 l-1.104-1.037L115.188,288.845z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M113.452,287.155c-0.345,0.346-0.371,0.879-0.061,1.193c0.306,0.317,0.85,0.272,1.186-0.076l3.764-3.89 l-1.075-1.067L113.452,287.155z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M127.295,273.536l-0.071,0.072l0.004,0.004l-0.261,0.383c-0.422,0.797-0.377,1.838-0.37,1.83 c0.001,0,1.045,0.012,1.823-0.432l0.373-0.273l0.005,0.004l0.069-0.071l0.649-0.685l1.505-1.588l-0.241-0.225l-1.967,2.061 c-0.304,0.318-0.653,0.482-0.779,0.365s0.02-0.472,0.326-0.787l1.98-2.051l-0.169-0.156l-1.984,2.045 c-0.306,0.314-0.664,0.482-0.782,0.357c-0.121-0.125,0.031-0.479,0.342-0.795l1.997-2.033l-0.247-0.25l-1.575,1.594 L127.295,273.536z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M123.377,274.964c1.479,1.541,3.046,2.994,4.604,4.457l4.647-5.125l-1.407-1.327l-2.449,2.598l-0.08,0.084 l-0.006-0.006c-0.883,0.832-2.621,0.756-2.624,0.754c-0.014,0.008-0.138-1.734,0.664-2.646l-0.005-0.004l0.082-0.084l2.517-2.531 l-0.995-1.006L123.377,274.964z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M123.12,280.089c-0.338,0.353-0.376,0.857-0.084,1.13c0.291,0.272,0.796,0.206,1.128-0.15l2.224-2.375 l-1.014-0.951L123.12,280.089z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M121.637,278.63c-0.343,0.347-0.396,0.855-0.116,1.142c0.279,0.285,0.784,0.229,1.126-0.123l2.269-2.336 l-0.979-0.986L121.637,278.63z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M121.253,280.854c0.259-0.267,0.651-0.314,0.874-0.105s0.194,0.597-0.062,0.865 c-0.257,0.271-0.646,0.316-0.874,0.105C120.965,281.51,120.992,281.122,121.253,280.854z"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M41.903,198.584l-0.006,0.608c-0.005,0.535,0.365,0.984,0.825,1.005 c7.396,0.355,14.521,1.205,21.257,2.297c0.456,0.076,0.816-0.233,0.806-0.688c-0.041-1.834,0.022-3.669,0.031-5.503 c0.002-0.458-0.336-0.771-0.798-0.703c-6.737,0.995-13.85,1.744-21.267,1.99C42.29,197.606,41.909,198.048,41.903,198.584z"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M99.486,192.356l0.25,0.026c0.139,0.016,0.274-0.242,0.304-0.58c0.098-1.289,0.216-2.576,0.396-3.856 c0.042-0.335-0.256-0.5-0.666-0.372c-5.291,1.642-11.348,3.272-18.204,4.779c-0.442,0.096-0.815,0.502-0.835,0.903 c-0.257,3.937-0.219,7.881-0.1,11.82c0.015,0.404,0.404,0.812,0.846,0.918c6.792,1.611,12.883,3.322,18.113,5.045 c0.406,0.136,0.708-0.026,0.676-0.362c-0.112-1.287-0.289-2.57-0.338-3.863c-0.021-0.336-0.149-0.599-0.288-0.586l-0.251,0.024 c-5.836,0.439-10.819-2.705-10.773-7.025C88.631,194.903,93.665,191.833,99.486,192.356z"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M67.169,195.928c-0.018,2.095-0.098,4.189-0.031,6.285c0.011,0.449,0.388,0.877,0.842,0.957 c3.48,0.636,6.827,1.324,10.03,2.043c0.446,0.099,0.794-0.151,0.785-0.559c-0.105-3.666-0.148-7.337,0.09-11 c0.019-0.408-0.325-0.662-0.772-0.57c-3.222,0.672-6.584,1.314-10.079,1.896C67.578,195.055,67.191,195.478,67.169,195.928z"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M41.474,197.614l-0.027,2.545c-0.005,0.533-0.355,0.971-0.785,0.976c-0.431,0.004-0.775-0.435-0.771-0.976 l0.027-2.569c0.007-0.542,0.36-0.974,0.791-0.963C41.137,196.637,41.48,197.079,41.474,197.614z"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M38.765,200.782c0.427,0.197,0.811-0.207,0.814-0.75l0.024-2.321c0.006-0.542-0.368-0.954-0.799-0.764 c-0.795,0.353-1.344,1.07-1.353,1.909C37.444,199.696,37.977,200.421,38.765,200.782z"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M37.364,199.745l-7.718-0.854c-0.46-0.055-0.459-0.136,0.002-0.182l7.735-0.743 c0.46-0.042,0.829,0.358,0.823,0.895C38.2,199.396,37.824,199.794,37.364,199.745z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M80.706,166.266c-1.572,5.52-2.765,11.145-3.562,16.823l3.004,0.417c0.777-5.539,1.94-11.024,3.475-16.411 L80.706,166.266z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M89.963,185.023l10.649,1.465c0.145-1.125,0.36-2.242,0.528-3.366l-10.594-1.83 C90.359,182.537,90.124,183.774,89.963,185.023z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M92.115,173.806l10.443,2.554c0.267-1.228,0.624-2.433,0.963-3.644l-10.34-2.94 C92.805,171.115,92.413,172.45,92.115,173.806z"
                  }), t("polygon", {
                    fill: "#F15C27",
                    points: "90.652,180.642 101.234,182.534 101.467,181.352 90.907,179.333 \t\t"
                  }), t("polygon", {
                    fill: "#F15C27",
                    points: "91.647,175.745 102.135,178.113 102.418,176.942 91.961,174.449 \t\t"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M85.068,167.467c-1.533,5.386-2.692,10.869-3.46,16.405l7.864,1.082c0.161-1.253,0.398-2.496,0.587-3.746 l-0.73-0.127c-2.584-0.428-4.335-2.561-3.879-4.756c0.423-2.201,2.966-3.439,5.463-2.812l0.72,0.176 c0.3-1.361,0.692-2.704,1.072-4.048L85.068,167.467z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M91.083,174.239c-2.15-0.521-4.405,0.419-4.752,2.271c-0.354,1.848,1.207,3.586,3.433,3.974l0.4,0.072 l0.257-1.314l-0.399-0.077c-0.694-0.132-1.271-0.466-1.645-0.894c-0.373-0.428-0.537-0.933-0.438-1.427 c0.101-0.496,0.442-0.894,0.951-1.136c0.521-0.239,1.189-0.315,1.878-0.159l0.397,0.089l0.313-1.303L91.083,174.239z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M83.365,165.575c-1.87,6.332-3.229,12.807-4.052,19.348l1.722-1.128 c0.771-5.563,1.936-11.075,3.477-16.484L83.365,165.575z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M82.592,165.367c-1.879,6.364-3.243,12.87-4.072,19.444l0.809,0.103 c0.822-6.531,2.179-12.994,4.045-19.315L82.592,165.367z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M88.863,181.877l-0.316,1.951c-0.02,0.111-0.144,0.186-0.279,0.165l-2.375-0.343 c-0.134-0.021-0.229-0.128-0.21-0.243l0.325-2c0.018-0.115,0.143-0.19,0.276-0.167l2.366,0.396 C88.786,181.657,88.88,181.766,88.863,181.877z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M98.899,183.531l-0.29,1.773c-0.017,0.101-0.14,0.168-0.274,0.146l-7.203-1.044 c-0.136-0.019-0.231-0.123-0.213-0.232l0.311-1.908c0.019-0.109,0.142-0.179,0.276-0.156l7.178,1.197 C98.819,183.329,98.916,183.43,98.899,183.531z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M91.367,170.427c-0.171,0.637-0.379,1.265-0.518,1.909c-0.025,0.11-0.155,0.172-0.288,0.14l-2.326-0.589 c-0.131-0.033-0.217-0.152-0.189-0.265c0.143-0.663,0.354-1.306,0.53-1.96c0.03-0.113,0.162-0.173,0.294-0.136l2.312,0.636 C91.315,170.199,91.397,170.318,91.367,170.427z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M101.178,173.113c-0.154,0.58-0.347,1.151-0.471,1.738c-0.024,0.101-0.15,0.154-0.283,0.121l-7.055-1.787 c-0.134-0.034-0.221-0.148-0.194-0.255c0.135-0.632,0.339-1.247,0.506-1.871c0.03-0.108,0.161-0.163,0.293-0.128l7.015,1.934 C101.123,172.903,101.206,173.013,101.178,173.113z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M89.136,235.317c-0.405,0.127-0.643,0.514-0.529,0.859c0.443,1.426,0.94,2.831,1.468,4.229 c0.126,0.344,0.549,0.5,0.946,0.352l15.057-5.646l-0.354-0.967l-0.061,0.022c-1.662,0.609-3.24,0.468-3.531-0.315 c-0.265-0.791,0.896-1.883,2.575-2.435l0.062-0.021l-0.318-0.978L89.136,235.317z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M89.951,240.964c-1.441-0.432-2.894-0.891-4.355-1.373c0.84-1.28,1.707-2.543,2.57-3.772 C88.706,237.552,89.31,239.263,89.951,240.964z"
                  }), t("path", {
                    fill: "#69C8C3",
                    d: "M86.757,239.19c0.086,0.231,0.878,0.184,2.007-0.08l-0.386-1.105 C87.329,238.499,86.67,238.956,86.757,239.19z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M88.074,236.606l0.156,0.483c0.021,0.062-0.021,0.134-0.094,0.158l-2.143,0.715 c-0.072,0.023-0.147-0.008-0.168-0.071l-0.16-0.494c-0.021-0.062,0.021-0.133,0.093-0.156l2.146-0.705 C87.979,236.515,88.054,236.544,88.074,236.606z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M95.016,237.544l0.238,0.65c0.032,0.088-0.029,0.188-0.137,0.229l-3.633,1.334 c-0.106,0.039-0.22-0.004-0.254-0.092l-0.247-0.676c-0.033-0.092,0.027-0.195,0.135-0.234l3.645-1.301 C94.869,237.417,94.984,237.458,95.016,237.544z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M94.487,236.079l0.229,0.652c0.032,0.088-0.029,0.188-0.136,0.227l-3.651,1.283 c-0.108,0.039-0.222-0.004-0.256-0.094l-0.237-0.68c-0.03-0.091,0.034-0.195,0.142-0.234l3.662-1.248 C94.347,235.948,94.459,235.989,94.487,236.079z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M94.007,234.597l0.214,0.657c0.028,0.089-0.037,0.189-0.145,0.228l-3.668,1.231 c-0.108,0.037-0.221-0.01-0.25-0.1l-0.223-0.684c-0.03-0.093,0.034-0.197,0.143-0.23l3.679-1.201 C93.866,234.466,93.978,234.507,94.007,234.597z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M100.199,235.687l0.227,0.617c0.03,0.082-0.032,0.182-0.139,0.221l-3.634,1.334 c-0.107,0.041-0.221,0.002-0.252-0.084l-0.234-0.646c-0.032-0.086,0.028-0.188,0.137-0.225l3.646-1.301 C100.057,235.565,100.169,235.603,100.199,235.687z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M99.697,234.292l0.218,0.619c0.03,0.084-0.031,0.185-0.14,0.219l-3.65,1.285 c-0.108,0.037-0.222-0.002-0.253-0.09l-0.227-0.643c-0.028-0.088,0.036-0.189,0.145-0.228l3.663-1.252 C99.559,234.169,99.67,234.206,99.697,234.292z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M99.24,232.882l0.203,0.625c0.027,0.084-0.038,0.183-0.146,0.22l-3.667,1.233 c-0.109,0.035-0.22-0.006-0.249-0.094l-0.211-0.65c-0.029-0.088,0.037-0.188,0.146-0.225l3.68-1.199 C99.103,232.757,99.212,232.798,99.24,232.882z"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M90.992,224.729c-0.494,0.11-0.812,0.526-0.709,0.928c0.531,2.262,1.137,4.502,1.801,6.728 c0.107,0.397,0.6,0.6,1.083,0.448l2.83-0.873c-0.793-2.606-1.495-5.239-2.117-7.891L90.992,224.729z"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M89.848,232.829l1.927,0.531c0.167,0.051,0.265-0.025,0.215-0.17c-0.82-2.697-1.546-5.42-2.19-8.162 c-0.03-0.152-0.152-0.17-0.271-0.041l-1.398,1.422c-0.114,0.129-0.175,0.359-0.138,0.512c0.436,1.859,0.935,3.703,1.481,5.533 C89.517,232.604,89.684,232.772,89.848,232.829z"
                  }), t("path", {
                    fill: "#E64534",
                    d: "M93.882,224.069c0.621,2.65,1.322,5.283,2.116,7.889l8.132-2.51c-0.397-1.383-0.814-2.762-1.179-4.154 l-2.714,0.711c-0.749,0.197-1.469-0.108-1.611-0.688c-0.144-0.576,0.351-1.188,1.103-1.365l2.728-0.656l-0.277-1.121 L93.882,224.069z"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "94.957,230.827 95.075,231.243 93.177,231.812 93.056,231.388 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "94.767,230.165 94.886,230.577 92.984,231.136 92.863,230.712 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "94.24,228.337 94.36,228.751 92.449,229.274 92.327,228.853 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "94.067,227.669 94.171,228.087 92.257,228.597 92.152,228.171 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "93.612,225.823 93.716,226.243 91.793,226.72 91.687,226.294 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "93.444,225.153 93.549,225.573 91.624,226.036 91.517,225.61 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "98.16,229.885 98.274,230.286 96.376,230.854 96.259,230.444 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "97.976,229.239 98.091,229.642 96.189,230.198 96.071,229.788 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "97.465,227.469 97.582,227.872 95.67,228.394 95.551,227.983 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "97.298,226.821 97.398,227.228 95.482,227.737 95.381,227.321 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "96.856,225.032 96.958,225.438 95.035,225.915 94.932,225.503 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "96.694,224.382 96.795,224.788 94.869,225.255 94.766,224.839 \t\t"
                  }), t("path", {
                    fill: "#69C8C3",
                    d: "M85.183,214.507c-0.254,0.033-0.435,0.234-0.406,0.447c0.4,3.129,0.932,6.244,1.609,9.326 c0.045,0.213,0.283,0.342,0.533,0.287l14.81-3.236c-0.641-2.887-1.136-5.807-1.509-8.735L85.183,214.507z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M78.142,220.901c0.434,2.734,3.943,4.313,7.835,3.795c-0.729-3.305-1.298-6.641-1.726-9.996 C80.414,215.515,77.628,218.181,78.142,220.901z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M80.478,221.567c-3.156,0.215-6.317,0.404-9.483,0.565c3.036-0.905,6.078-1.786,9.125-2.643 L80.478,221.567z"
                  }), t("polygon", {
                    fill: "#E2324B",
                    points: "76.847,219.614 77.355,222.548 79.974,222.063 79.477,219.192 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "96.847,219.974 96.992,219.944 96.844,219.96 \t\t"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M96.225,215.485c0.618-0.092,1.209-0.021,1.71,0.172l2.836-0.438l-0.053-0.41L96.225,215.485z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M98.609,219.159c-0.426,0.373-0.971,0.658-1.616,0.785l4.458-0.869l-0.089-0.438L98.609,219.159z"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "96.08,215.519 96.225,215.485 96.078,215.51 \t\t"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M94.508,218.058c0-0.002,0.665-1.392,1.652-1.978l-0.081-0.562c-1.522,0.352-2.527,2.717-2.535,2.725 c0.008,0.006,1.756,1.896,3.3,1.717l-0.115-0.596C95.601,219.142,94.509,218.06,94.508,218.058z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M96.16,216.081c0.171-0.104,0.353-0.178,0.542-0.225l-0.001-0.01l0.125-0.019l1.107-0.172 c-0.5-0.191-1.092-0.264-1.71-0.172l-0.145,0.033L96.16,216.081z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M97.441,219.38l-0.125,0.025l-0.002-0.012c-0.192,0.021-0.389,0.01-0.585-0.029l0.115,0.596l0.148-0.016 c0.646-0.127,1.19-0.412,1.616-0.785L97.441,219.38z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M97.524,217.757c-0.548,0.095-0.953,0.398-0.904,0.681c0.048,0.281,0.529,0.428,1.076,0.328l3.65-0.677 l-0.167-0.971L97.524,217.757z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M97.281,216.362c-0.55,0.086-0.953,0.385-0.904,0.668c0.049,0.281,0.533,0.434,1.081,0.34l3.659-0.625 l-0.171-0.973L97.281,216.362z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M92.725,222.239c-0.252-1.125-0.473-2.254-0.652-3.393l-2.438,0.43c-1.203,0.213-2.034,1.053-1.846,2.152 c0.235,1.09,1.314,1.563,2.512,1.313L92.725,222.239z M90.246,222.478c-0.988,0.203-1.927-0.15-2.131-1.111 c-0.169-0.971,0.574-1.646,1.566-1.822l2.112-0.377c0.15,0.968,0.339,1.924,0.553,2.879L90.246,222.478z"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M89.856,221.265c-0.29,0.057-0.482,0.293-0.432,0.528c0.05,0.24,0.325,0.384,0.614,0.326l1.924-0.391 l-0.178-0.84L89.856,221.265z"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M89.621,219.954c-0.29,0.053-0.492,0.287-0.451,0.527s0.309,0.389,0.598,0.334l1.93-0.367l-0.145-0.846 L89.621,219.954z"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M88.785,220.894c0.221-0.041,0.423,0.074,0.458,0.256c0.037,0.18-0.109,0.363-0.33,0.406 c-0.222,0.043-0.432-0.07-0.471-0.254C88.409,221.118,88.564,220.935,88.785,220.894z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M91.941,218.081c-0.216-1.131-0.372-2.27-0.519-3.412l-2.453,0.334c-1.211,0.164-2.069,0.974-1.925,2.078 c0.176,1.101,1.253,1.613,2.455,1.41L91.941,218.081z M89.453,218.226c-0.99,0.164-1.93-0.226-2.081-1.195 c-0.129-0.975,0.635-1.621,1.634-1.758l2.125-0.295c0.126,0.969,0.254,1.938,0.438,2.896L89.453,218.226z"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M89.107,216.999c-0.292,0.045-0.493,0.273-0.451,0.515c0.042,0.237,0.312,0.395,0.603,0.348l1.938-0.316 l-0.146-0.846L89.107,216.999z"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M88.93,215.677c-0.291,0.043-0.501,0.271-0.469,0.514c0.032,0.238,0.294,0.397,0.585,0.354l1.942-0.293 l-0.113-0.852L88.93,215.677z"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M88.061,216.585c0.224-0.032,0.423,0.09,0.447,0.273c0.021,0.184-0.134,0.358-0.354,0.395 c-0.224,0.033-0.428-0.086-0.449-0.272C87.679,216.796,87.839,216.618,88.061,216.585z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M81.818,222.628c0.108,0.511,0.697,0.832,1.373,0.783l-0.391-2.02 C82.156,221.597,81.723,222.116,81.818,222.628z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M81.42,220.337c0.089,0.513,0.664,0.849,1.338,0.812l-0.351-2.027 C81.761,219.315,81.331,219.823,81.42,220.337z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M81.029,218.042c0.073,0.517,0.663,0.859,1.336,0.836c-0.129-0.674-0.216-1.354-0.306-2.032 C81.407,217.024,80.959,217.526,81.029,218.042z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M79.816,221.812c0.09,0.52,0.665,0.856,1.339,0.815l-0.354-2.059 C80.154,220.769,79.727,221.29,79.816,221.812z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M79.415,219.485c0.09,0.52,0.667,0.865,1.343,0.838l-0.355-2.059 C79.748,218.454,79.325,218.962,79.415,219.485z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M83.854,223.403c0.106,0.502,0.692,0.812,1.365,0.756l-0.418-1.981 C84.159,222.388,83.749,222.899,83.854,223.403z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M83.419,221.153c0.086,0.506,0.659,0.828,1.331,0.787l-0.343-1.998 C83.762,220.142,83.332,220.647,83.419,221.153z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M83.029,218.896c0.088,0.506,0.662,0.838,1.339,0.809l-0.346-1.996 C83.367,217.894,82.941,218.39,83.029,218.896z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M82.687,216.63c0.068,0.511,0.629,0.854,1.303,0.839l-0.271-2.009 C83.066,215.635,82.618,216.122,82.687,216.63z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M98.192,265.872c-3.744-5.811-7.009-11.932-9.741-18.283c1.497-2.094,3.021-4.118,4.569-6.073 c3.167,8.053,7.182,15.787,12.061,22.934L98.192,265.872z"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M114.332,252.128c0.981,1.519,1.905,3.07,2.957,4.539l-11.94,8.174c-2.357,0.396-4.777,0.761-7.156,1.031 c1.229-2.127,2.486-4.203,3.778-6.229L114.332,252.128z"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M111.69,247.472c0.825,1.608,1.78,3.145,2.679,4.715l-12.357,7.524c-2.366,0.263-4.759,0.476-7.184,0.64 c1.305-2.041,2.708-4.066,4.118-6.027L111.69,247.472z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M94.036,241.219c-0.232,0.092-0.355,0.319-0.277,0.514c1.531,3.957,3.354,7.799,5.315,11.561 c0.099,0.183,0.355,0.236,0.575,0.119l11.837-6.301c-1.847-3.492-3.527-7.078-4.957-10.764L94.036,241.219z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M100.938,255.989c-0.434,0.246-0.624,0.721-0.423,1.061c0.2,0.343,0.712,0.419,1.143,0.164l2.879-1.672 l-0.699-1.19L100.938,255.989z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M106.239,252.993c-0.434,0.246-0.632,0.705-0.441,1.029c0.189,0.324,0.691,0.383,1.124,0.133l2.878-1.678 l-0.66-1.121L106.239,252.993z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M104.045,261.14c-0.42,0.266-0.59,0.754-0.378,1.09c0.212,0.334,0.722,0.385,1.138,0.11l2.787-1.823 l-0.736-1.166L104.045,261.14z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M109.182,257.868c-0.42,0.267-0.6,0.742-0.398,1.06c0.2,0.316,0.699,0.352,1.116,0.079l2.787-1.823 l-0.695-1.103L109.182,257.868z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M100.392,249.925c0.221,0.451,0.899,0.562,1.516,0.244l4.5-2.303l-0.393-0.801l-5.639,2.824 L100.392,249.925z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M100.242,249.618c-0.224-0.451,0.103-1.061,0.725-1.361l4.543-2.217l0.395,0.801l-5.646,2.812 L100.242,249.618z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M98.718,246.44c0.205,0.457,0.877,0.592,1.504,0.297l4.576-2.148l-0.363-0.813l-5.732,2.631L98.718,246.44 z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M98.578,246.128c-0.206-0.459,0.141-1.055,0.772-1.338l4.617-2.059l0.365,0.815l-5.739,2.617 L98.578,246.128z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M97.164,242.899c0.188,0.467,0.855,0.621,1.491,0.346l4.647-1.983l-0.333-0.828l-5.821,2.432 L97.164,242.899z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M97.035,242.583c-0.188-0.465,0.179-1.053,0.819-1.311l4.687-1.898l0.335,0.828l-5.826,2.416 L97.035,242.583z"
                  }), t("path", {
                    fill: "#A0BF3B",
                    d: "M106.783,243.644c0.578,1.19,2.098,1.653,3.487,1.123c-0.758-1.484-1.454-2.996-2.123-4.523 C106.849,240.974,106.245,242.431,106.783,243.644z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M107.914,248.618c0.916,1.74,3.168,2.312,5.175,1.398c-1.22-2.107-2.354-4.267-3.413-6.461 C107.832,244.681,106.971,246.894,107.914,248.618z"
                  }), t("path", {
                    fill: "#A0BF3B",
                    d: "M103.476,235.714c0.437,1.25,1.936,1.828,3.369,1.414c-0.654-1.532-1.167-3.121-1.75-4.68 C103.72,233.077,103.028,234.466,103.476,235.714z"
                  }), t("path", {
                    fill: "#A0BF3B",
                    d: "M106.763,236.923c-1.002,0.744-1.447,1.974-1.018,3.035c0.454,1.058,1.667,1.578,2.895,1.375 C107.961,239.888,107.355,238.407,106.763,236.923z"
                  }), t("g", {
                    id: "pisa"
                  }, t("path", {
                    fill: "#69C8C3",
                    d: "M98.803,70.664c-0.266-0.447-0.863-0.557-1.337-0.239c-4.167,2.75-8.183,5.753-12.088,8.916 c-0.444,0.367-0.553,1.005-0.243,1.426l4.449,5.97l1.038-0.847L87.4,81.504l0.305-0.248l-0.323-0.444 c-0.333-0.46-0.295-1.086,0.083-1.396l0.076-0.062c0.379-0.312,0.951-0.186,1.28,0.282l0.317,0.447l0.305-0.244l3.152,4.438 l0.898-0.7l-3.109-4.444l0.312-0.234l-0.31-0.45c-0.322-0.467-0.264-1.085,0.129-1.376l0.076-0.06 c0.393-0.295,0.966-0.148,1.283,0.322l0.306,0.457l0.313-0.234l3.042,4.502l0.911-0.677l-3.012-4.526l0.312-0.232l-0.301-0.458 c-0.312-0.475-0.245-1.096,0.146-1.387l0.079-0.058c0.392-0.291,0.957-0.136,1.264,0.342l0.296,0.464l0.313-0.23l2.946,4.58 l0.92-0.661l-2.9-4.583l0.324-0.218l-0.29-0.465c-0.301-0.479-0.215-1.093,0.189-1.367l0.08-0.053 c0.404-0.273,0.971-0.1,1.265,0.386l0.283,0.468l0.322-0.217l2.833,4.635l1.106-0.738L98.803,70.664z"
                  }), t("path", {
                    fill: "#69C8C3",
                    d: "M99.231,69.736c0.157,0.271,0.058,0.642-0.225,0.829c-4.829,3.195-9.551,6.62-14.031,10.371 c-0.264,0.217-0.628,0.189-0.814-0.061l-0.031-0.042c-0.187-0.25-0.122-0.632,0.145-0.852c4.515-3.774,9.271-7.222,14.134-10.439 c0.282-0.188,0.641-0.124,0.798,0.147L99.231,69.736z"
                  }), t("path", {
                    fill: "#69C8C3",
                    d: "M104.246,77.101c-0.321-0.541-1.021-0.687-1.563-0.325c-4.788,3.113-9.364,6.583-13.794,10.266 c-0.51,0.418-0.61,1.162-0.226,1.656l6.178,7.842l1.166-0.953l-4.637-5.985l0.346-0.283l-0.398-0.523 c-0.414-0.543-0.395-1.272,0.04-1.627l0.085-0.07c0.436-0.355,1.115-0.194,1.521,0.354l0.392,0.53l0.347-0.281l4.53,6.084 l0.994-0.802l-4.483-6.127l0.345-0.279l-0.384-0.537c-0.403-0.561-0.36-1.28,0.091-1.616l0.087-0.065 c0.451-0.333,1.128-0.15,1.519,0.412l0.375,0.538l0.358-0.265l4.351,6.194l1.027-0.753l-4.301-6.237l0.356-0.263l-0.367-0.547 c-0.384-0.565-0.328-1.294,0.12-1.626l0.09-0.065c0.449-0.331,1.115-0.132,1.49,0.44l0.361,0.551l0.357-0.263l4.19,6.331 l1.026-0.747l-4.13-6.357l0.369-0.247l-0.354-0.555c-0.366-0.575-0.286-1.293,0.177-1.604l0.093-0.062 c0.464-0.308,1.128-0.087,1.484,0.494l0.347,0.56l0.367-0.245l4.004,6.431l1.244-0.82L104.246,77.101z"
                  }), t("path", {
                    fill: "#69C8C3",
                    d: "M104.719,76.015c0.19,0.325,0.083,0.761-0.238,0.974c-5.568,3.579-10.867,7.609-15.999,11.904 c-0.302,0.25-0.733,0.212-0.967-0.081l-0.039-0.052c-0.23-0.295-0.171-0.738,0.134-0.989c5.168-4.342,10.532-8.392,16.144-12.009 c0.326-0.215,0.742-0.126,0.933,0.197L104.719,76.015z"
                  }), t("path", {
                    fill: "#69C8C3",
                    d: "M109.448,85.681c-0.329-0.536-1.008-0.696-1.519-0.359c-4.476,2.933-8.747,6.203-12.913,9.643 c-0.479,0.393-0.555,1.103-0.158,1.595l6.323,7.762l1.059-0.917l-4.723-5.9l0.325-0.263l-0.406-0.518 c-0.421-0.534-0.43-1.239-0.021-1.569l0.081-0.064c0.408-0.332,1.073-0.157,1.486,0.387l0.4,0.521l0.325-0.262l4.618,6.001 l0.93-0.743l-4.57-6.044l0.324-0.262l-0.394-0.529c-0.406-0.547-0.404-1.26,0.003-1.587l0.081-0.065 c0.413-0.322,1.084-0.117,1.479,0.434l0.384,0.532l0.335-0.245l4.439,6.114l0.964-0.696l-4.391-6.159l0.335-0.245l-0.376-0.538 c-0.393-0.56-0.366-1.262,0.056-1.572l0.085-0.059c0.422-0.311,1.073-0.099,1.456,0.465l0.37,0.546l0.336-0.245l4.282,6.253 l0.96-0.691l-4.233-6.294l0.335-0.243l-0.363-0.552c-0.381-0.575-0.332-1.271,0.105-1.559l0.086-0.058 c0.436-0.288,1.085-0.054,1.451,0.521l0.354,0.555l0.347-0.229l4.096,6.355l1.165-0.756L109.448,85.681z"
                  }), t("path", {
                    fill: "#69C8C3",
                    d: "M109.865,84.638c0.194,0.32,0.107,0.741-0.194,0.94c-5.235,3.329-10.146,7.169-14.973,11.173 c-0.273,0.245-0.688,0.205-0.924-0.088l-0.041-0.048c-0.235-0.292-0.204-0.728,0.072-0.974c4.88-4.035,9.832-7.918,15.121-11.275 c0.305-0.202,0.71-0.104,0.906,0.216L109.865,84.638z"
                  }), t("path", {
                    fill: "#69C8C3",
                    d: "M121.044,103.783c-0.344-0.519-0.982-0.715-1.425-0.432c-3.779,2.575-7.482,5.318-11.017,8.305 c-0.397,0.348-0.393,1.015,0.017,1.488l7.383,8.443l0.893-0.76l-5.744-6.679l0.27-0.232l-0.423-0.504 c-0.438-0.518-0.527-1.188-0.176-1.471l0.069-0.055c0.355-0.278,0.99-0.076,1.419,0.452l0.415,0.507l0.282-0.221l5.595,6.771 l0.792-0.606l-5.542-6.823l0.28-0.217l-0.41-0.514c-0.424-0.533-0.48-1.19-0.128-1.465l0.071-0.056 c0.353-0.276,0.974-0.062,1.391,0.479l0.403,0.52l0.279-0.218l5.423,6.941l0.784-0.604l-5.367-6.994l0.281-0.214l-0.393-0.523 c-0.408-0.542-0.44-1.192-0.076-1.45l0.072-0.052c0.366-0.26,0.983-0.021,1.386,0.527l0.387,0.531l0.29-0.203l5.214,7.074 l0.816-0.564l-5.159-7.125l0.287-0.203l-0.38-0.536c-0.393-0.557-0.417-1.218-0.053-1.474l0.071-0.05 c0.363-0.258,0.969-0.009,1.354,0.553l0.374,0.542l0.287-0.201l5.034,7.233l0.949-0.658L121.044,103.783z"
                  }), t("path", {
                    fill: "#69C8C3",
                    d: "M121.343,102.837c0.204,0.312,0.16,0.701-0.102,0.868c-4.417,2.913-8.716,6.088-12.757,9.606 c-0.235,0.205-0.628,0.143-0.874-0.141l-0.042-0.048c-0.246-0.282-0.251-0.681-0.01-0.89c4.089-3.553,8.428-6.773,12.9-9.712 c0.264-0.169,0.644-0.052,0.848,0.261L121.343,102.837z"
                  }), t("path", {
                    fill: "#69C8C3",
                    d: "M115.042,94.58c-0.337-0.526-0.996-0.707-1.475-0.395c-4.146,2.747-8.11,5.791-11.998,8.979 c-0.43,0.379-0.455,1.079-0.054,1.562l6.439,7.643l0.978-0.848l-4.839-5.838l0.302-0.247l-0.414-0.509 c-0.429-0.527-0.465-1.203-0.083-1.508l0.075-0.061c0.383-0.305,1.033-0.118,1.453,0.417l0.409,0.516l0.303-0.24l4.709,5.913 l0.865-0.681l-4.661-5.958l0.302-0.242l-0.399-0.521c-0.416-0.539-0.443-1.227-0.062-1.529l0.075-0.059 c0.381-0.304,1.02-0.104,1.427,0.442l0.396,0.528l0.302-0.239l4.556,6.059l0.865-0.672l-4.484-6.074l0.314-0.226l-0.386-0.531 c-0.399-0.553-0.402-1.229-0.007-1.514l0.077-0.057c0.396-0.284,1.03-0.062,1.421,0.497l0.38,0.538l0.312-0.228l4.377,6.172 l0.894-0.633l-4.328-6.213l0.312-0.223l-0.372-0.543c-0.385-0.563-0.377-1.25,0.017-1.532l0.077-0.056 c0.393-0.282,1.034-0.023,1.407,0.54l0.362,0.547l0.323-0.208l4.192,6.275l1.083-0.69L115.042,94.58z"
                  }), t("path", {
                    fill: "#69C8C3",
                    d: "M115.4,93.584c0.2,0.317,0.134,0.722-0.148,0.905c-4.839,3.123-9.447,6.641-13.882,10.418 c-0.256,0.224-0.658,0.173-0.899-0.115l-0.042-0.048c-0.241-0.287-0.227-0.706,0.031-0.934 c4.487-3.809,9.136-7.369,14.028-10.521c0.285-0.184,0.679-0.078,0.879,0.239L115.4,93.584z"
                  }), t("path", {
                    fill: "#69C8C3",
                    d: "M127.997,112.859c-0.384-0.563-1.061-0.806-1.496-0.521c-3.751,2.579-7.508,5.254-10.983,8.29 c-0.401,0.345-0.357,1.035,0.101,1.542c3.25,3.621,6.537,7.2,9.863,10.734l0.773-0.816c-2.662-2.895-5.299-5.819-7.91-8.771 l0.271-0.228l-0.477-0.538c-0.493-0.56-0.615-1.248-0.273-1.537l0.066-0.058c0.341-0.291,1.007-0.063,1.491,0.504l0.469,0.547 l0.27-0.229c2.495,2.942,5.016,5.858,7.561,8.748l0.652-0.701c-2.499-2.89-4.94-5.775-7.375-8.702l0.28-0.213l-0.458-0.553 c-0.475-0.571-0.569-1.256-0.216-1.527l0.071-0.055c0.354-0.271,1.018-0.021,1.483,0.561l0.45,0.562l0.279-0.215l7.023,8.653 l0.688-0.665l-6.872-8.632l0.279-0.213l-0.443-0.565c-0.457-0.587-0.55-1.292-0.188-1.552l0.073-0.049 c0.366-0.254,1.025,0.025,1.473,0.617l0.432,0.573l0.29-0.198l6.499,8.534l0.726-0.627l-6.353-8.506l0.289-0.198l-0.423-0.58 c-0.44-0.603-0.5-1.294-0.136-1.545l0.071-0.051c0.365-0.253,1.007,0.038,1.437,0.646l0.416,0.586l0.288-0.197l6.025,8.436 l0.843-0.746C132.835,119.901,130.399,116.394,127.997,112.859z"
                  }), t("path", {
                    fill: "#69C8C3",
                    d: "M131.418,117.836c-4.022,2.703-8.032,5.552-11.733,8.809l5.796,6.259c3.078-3.363,6.362-6.537,9.84-9.497 L131.418,117.836z"
                  })), t("path", {
                    fill: "#62381B",
                    d: "M148.952,82.071c0.542,1.335,0.438,1.641-0.765,2.231c-0.282,0.14-0.284,0.135,0.004,0.011 c1.23-0.529,1.52-0.407,2.119,0.902c0.142,0.308,0.136,0.311,0.009-0.003c-0.544-1.337-0.435-1.63,0.792-2.164 c0.29-0.126,0.291-0.12-0.003-0.01c-1.254,0.471-1.548,0.333-2.148-0.973C148.819,81.758,148.824,81.756,148.952,82.071z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M123.29,96.888c0.837,1.185,0.778,1.471-0.258,2.313c-0.242,0.202-0.245,0.2,0.007,0.009 c1.081-0.791,1.415-0.701,2.292,0.429c0.208,0.269,0.204,0.271,0.007-0.005c-0.833-1.177-0.795-1.488,0.271-2.298 c0.252-0.188,0.253-0.187-0.006-0.01c-1.105,0.753-1.421,0.692-2.306-0.446C123.09,96.613,123.094,96.61,123.29,96.888z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M127.104,74.512c1.25,2.292,1.081,2.875-1.228,4.295c-0.543,0.335-0.547,0.327,0.011,0.017 c2.376-1.315,2.967-1.168,4.329,1.058c0.321,0.523,0.312,0.528,0.017-0.012c-1.253-2.285-1.089-2.876,1.232-4.286 c0.56-0.307,0.563-0.3-0.009-0.017c-2.379,1.297-2.967,1.16-4.333-1.065C126.801,73.979,126.811,73.974,127.104,74.512z"
                  }), t("path", {
                    fill: "#54777B",
                    d: "M129.942,83.312c0.181,0.311,0.628,0.57,0.896,0.625l1.358-0.79l-2.345-4.051 C130.783,81.102,129.154,81.944,129.942,83.312z"
                  }), t("path", {
                    fill: "#54777B",
                    d: "M133.455,81.27c0.181,0.311,0.162,0.817,0.097,1.087l-1.359,0.791l-2.344-4.05 C131.089,80.948,132.661,79.904,133.455,81.27z"
                  }), t("polygon", {
                    fill: "#62381B",
                    points: "135.036,85.273 132.625,86.675 131.203,84.277 133.665,82.845 \t\t"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M145.096,89.116c-2.125-4.443-7.497-6.428-11.72-3.926c-4.288,2.391-5.217,8.078-2.43,12.126l1.998,2.979 c4.396-2.957,9.014-5.571,13.74-7.963L145.096,89.116z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M144.687,93.445l-1.679-3.243c-1.128-2.187-2.74-3.856-4.466-4.762c-1.739-0.929-3.528-1.008-4.958-0.167 c-1.426,0.845-2.273,2.4-2.341,4.365c-0.077,1.953,0.566,4.188,1.896,6.259l1.934,3.021l-0.283,0.186l-1.942-3.017 c-1.368-2.121-2.04-4.409-1.964-6.447c0.054-2.062,0.957-3.737,2.525-4.673c1.569-0.935,3.51-0.809,5.312,0.159 c1.8,0.945,3.444,2.668,4.597,4.914l1.67,3.248l0,0L144.687,93.445z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M142.572,94.543l-1.743-3.21c-1.762-3.268-4.111-5.633-5.87-6.097c-0.585-0.162-1.089-0.127-1.494,0.107 c-0.402,0.234-0.685,0.656-0.833,1.248c-0.149,0.589-0.162,1.34-0.031,2.189c0.256,1.705,1.083,3.811,2.383,5.921l1.88,3.054 l-0.261,0.169l-1.888-3.049c-1.994-3.215-2.915-6.438-2.419-8.381c0.164-0.648,0.491-1.166,0.993-1.458s1.111-0.321,1.754-0.141 c0.645,0.179,1.332,0.565,2.029,1.122c1.409,1.137,2.851,2.957,4.042,5.167l1.735,3.214h0.001L142.572,94.543z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M140.855,95.504l-1.794-3.179c-1.066-1.894-2.16-3.563-3.118-4.797c-0.95-1.234-1.799-2.034-2.243-2.176 c-0.127-0.043-0.196-0.032-0.235-0.009c-0.038,0.021-0.082,0.075-0.107,0.208c-0.025,0.128-0.025,0.314,0.004,0.55 c0.062,0.469,0.243,1.117,0.53,1.885c0.574,1.537,1.573,3.558,2.841,5.693l1.83,3.084l-0.27,0.156l-1.838-3.08 c-1.122-1.88-2.037-3.669-2.644-5.136c-0.603-1.472-0.911-2.592-0.796-3.229c0.035-0.183,0.117-0.349,0.271-0.438 c0.154-0.088,0.337-0.079,0.513-0.019c0.179,0.062,0.366,0.174,0.573,0.332c0.411,0.312,0.893,0.809,1.423,1.454 c1.062,1.288,2.318,3.176,3.542,5.358l1.786,3.186v-0.001L140.855,95.504z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M148.224,95.641c-4.531,2.296-8.959,4.803-13.176,7.638l-1.792-2.678c4.332-2.915,8.881-5.49,13.538-7.849 L148.224,95.641z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M137.793,102.078l-1.062,0.688l-1.109-1.71c-0.224-0.346-0.161-0.782,0.139-0.978 c0.3-0.194,0.723-0.071,0.942,0.275L137.793,102.078z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M140.791,100.246l-1.095,0.636l-1.057-1.743c-0.214-0.352-0.135-0.782,0.174-0.961 c0.31-0.18,0.729-0.038,0.938,0.315L140.791,100.246z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M143.826,98.477l-1.092,0.638l-1.005-1.775c-0.202-0.357-0.115-0.793,0.193-0.974s0.721-0.036,0.918,0.325 L143.826,98.477z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M146.945,96.854l-1.123,0.583l-0.95-1.805c-0.191-0.36-0.09-0.791,0.229-0.955 c0.317-0.166,0.727-0.001,0.914,0.361L146.945,96.854z"
                  }), t("path", {
                    fill: "#54777B",
                    d: "M151.333,96.312c2.062-0.99,4.158-1.904,6.294-2.722l2.092,5.26c-2.032,0.776-4.024,1.646-5.985,2.588 L151.333,96.312z"
                  }), t("path", {
                    fill: "#54777B",
                    d: "M150.02,86.745c0.063,0.151,0.242,0.295,0.353,0.337l0.596-0.274l-0.849-1.963 C150.444,85.802,149.739,86.081,150.02,86.745z"
                  }), t("path", {
                    fill: "#54777B",
                    d: "M151.569,86.072c0.066,0.151,0.041,0.374,0.003,0.487l-0.606,0.248l-0.849-1.963 C150.573,85.748,151.278,85.415,151.569,86.072z"
                  }), t("polygon", {
                    fill: "#62381B",
                    points: "152.103,87.953 151.024,88.423 150.513,87.256 151.604,86.782 \t\t"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M156.342,90.243c-0.829-2.119-3.045-3.219-4.947-2.447c-1.863,0.862-2.583,3.225-1.604,5.281l0.694,1.482 c2.117-1.016,4.27-1.952,6.462-2.792L156.342,90.243z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M156.019,92.173l-0.628-1.546c-0.424-1.04-1.073-1.875-1.785-2.375c-0.713-0.501-1.479-0.667-2.127-0.406 c-0.633,0.293-1.039,0.965-1.162,1.827c-0.123,0.86,0.039,1.905,0.507,2.929l0.682,1.49l-0.136,0.062l-0.684-1.488 c-0.48-1.046-0.65-2.12-0.522-3.017c0.126-0.897,0.556-1.627,1.252-1.948c0.712-0.288,1.537-0.1,2.275,0.423 c0.742,0.522,1.405,1.381,1.839,2.45l0.627,1.545L156.019,92.173z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M155.04,92.567l-0.645-1.539c-0.648-1.564-1.581-2.755-2.323-3.098c-0.245-0.114-0.466-0.141-0.646-0.062 c-0.179,0.083-0.312,0.255-0.397,0.516c-0.085,0.256-0.118,0.595-0.098,0.988c0.042,0.787,0.302,1.792,0.763,2.824l0.668,1.494 l-0.125,0.06l-0.671-1.496c-0.704-1.571-0.955-3.083-0.676-3.934c0.093-0.286,0.25-0.499,0.471-0.601 c0.225-0.097,0.488-0.061,0.76,0.066c0.27,0.125,0.554,0.348,0.836,0.643c0.564,0.593,1.127,1.485,1.567,2.545l0.643,1.54 L155.04,92.567z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M154.23,92.892l-0.653-1.534c-0.391-0.914-0.8-1.73-1.166-2.343c-0.365-0.615-0.698-1.031-0.886-1.127 l-0.099-0.019l-0.052,0.086c-0.017,0.058-0.023,0.142-0.02,0.25c0.009,0.215,0.062,0.519,0.156,0.882 c0.186,0.729,0.531,1.699,0.987,2.739l0.657,1.499l-0.125,0.061l-0.659-1.5c-0.403-0.917-0.721-1.779-0.92-2.479 c-0.199-0.7-0.288-1.224-0.218-1.506c0.021-0.081,0.062-0.149,0.129-0.182c0.067-0.033,0.147-0.013,0.22,0.026l0.233,0.188 c0.166,0.17,0.354,0.424,0.56,0.748c0.411,0.646,0.884,1.569,1.332,2.623l0.651,1.532L154.23,92.892z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M157.525,93.329c-2.137,0.82-4.233,1.734-6.299,2.725l-0.624-1.334c2.091-1.004,4.214-1.928,6.379-2.759 L157.525,93.329z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M152.53,95.695l-0.519,0.239l-0.39-0.847c-0.078-0.17-0.025-0.362,0.12-0.43 c0.145-0.067,0.325,0.019,0.402,0.188L152.53,95.695z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M153.97,95.029l-0.518,0.24l-0.379-0.851c-0.076-0.172-0.021-0.364,0.125-0.432s0.323,0.018,0.398,0.189 L153.97,95.029z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M155.43,94.412l-0.53,0.212l-0.365-0.856c-0.074-0.173-0.014-0.361,0.135-0.421 c0.147-0.06,0.327,0.032,0.398,0.207L155.43,94.412z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M156.902,93.818l-0.528,0.214l-0.354-0.861c-0.071-0.174-0.009-0.363,0.14-0.422 c0.146-0.061,0.324,0.033,0.395,0.206L156.902,93.818z"
                  }), t("path", {
                    fill: "#54777B",
                    d: "M134.375,106.078c-1.833,1.334-3.713,2.606-5.454,4.059l3.503,4.446c1.654-1.382,3.443-2.59,5.185-3.857 L134.375,106.078z"
                  }), t("path", {
                    fill: "#54777B",
                    d: "M126.816,100.135c0.099,0.13,0.135,0.356,0.115,0.475l-0.533,0.381l-1.273-1.719 C125.789,100.034,126.381,99.559,126.816,100.135z"
                  }), t("path", {
                    fill: "#54777B",
                    d: "M125.442,101.118c0.098,0.134,0.306,0.227,0.425,0.255l0.532-0.383l-1.271-1.718 C125.682,100.122,125.019,100.536,125.442,101.118z"
                  }), t("polygon", {
                    fill: "#62381B",
                    points: "126.807,102.53 127.765,101.846 127.011,100.818 126.044,101.512 \t\t"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M126.668,107.347c-1.404-1.761-1.304-4.304,0.372-5.49c1.669-1.195,4.063-0.646,5.354,1.23l0.936,1.345 c-1.898,1.379-3.843,2.698-5.646,4.2L126.668,107.347z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M128.493,108.028l-1.021-1.319c-0.688-0.89-1.087-1.872-1.167-2.742c-0.086-0.879,0.164-1.612,0.736-2.014 c0.565-0.407,1.348-0.425,2.152-0.101c0.805,0.32,1.626,0.982,2.275,1.899l0.947,1.336l0.122-0.088l-0.945-1.336 c-0.666-0.94-1.507-1.625-2.344-1.961c-0.836-0.336-1.681-0.326-2.305,0.122c-0.631,0.438-0.887,1.241-0.795,2.154 c0.083,0.906,0.497,1.914,1.203,2.824l1.023,1.317l0,0L128.493,108.028z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M129.318,107.369l-1.009-1.327c-1.027-1.345-1.6-2.759-1.504-3.547c0.028-0.265,0.123-0.458,0.283-0.572 s0.376-0.146,0.642-0.09c0.264,0.054,0.573,0.193,0.902,0.408c0.659,0.428,1.397,1.156,2.059,2.071l0.958,1.329l0.113-0.081 l-0.957-1.329c-1.007-1.397-2.187-2.369-3.061-2.55c-0.292-0.062-0.555-0.032-0.751,0.111c-0.199,0.141-0.309,0.376-0.339,0.668 s0.011,0.639,0.126,1.031c0.23,0.788,0.725,1.724,1.421,2.636l1.01,1.328L129.318,107.369z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M130.016,106.847l-1-1.335c-0.595-0.797-1.094-1.558-1.438-2.18c-0.348-0.62-0.536-1.111-0.522-1.316 l0.033-0.095l0.102-0.002l0.225,0.109c0.181,0.114,0.416,0.312,0.684,0.574c0.536,0.523,1.204,1.31,1.875,2.225l0.967,1.322 l0.112-0.081l-0.966-1.321c-0.59-0.807-1.177-1.513-1.682-2.038c-0.506-0.521-0.912-0.859-1.19-0.939 c-0.081-0.021-0.16-0.021-0.222,0.022s-0.086,0.119-0.09,0.201l0.043,0.291c0.062,0.226,0.186,0.513,0.36,0.853 c0.351,0.674,0.912,1.543,1.597,2.458l1,1.333L130.016,106.847z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M128.745,109.918c1.757-1.465,3.653-2.749,5.503-4.093l-0.841-1.21c-1.874,1.362-3.794,2.663-5.573,4.146 L128.745,109.918z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M133.293,106.783l0.463-0.333l-0.537-0.761c-0.108-0.155-0.301-0.203-0.43-0.11 c-0.129,0.094-0.146,0.294-0.038,0.446L133.293,106.783z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M132.005,107.707l0.464-0.333l-0.548-0.752c-0.11-0.151-0.305-0.2-0.435-0.107 c-0.13,0.094-0.144,0.292-0.034,0.441L132.005,107.707z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M130.716,108.629l0.463-0.332l-0.558-0.747c-0.112-0.148-0.31-0.196-0.438-0.104 c-0.129,0.092-0.143,0.288-0.029,0.44L130.716,108.629z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M129.477,109.617l0.446-0.354l-0.568-0.737c-0.113-0.149-0.308-0.19-0.433-0.09 c-0.125,0.099-0.131,0.299-0.018,0.446L129.477,109.617z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M155.228,100.771c-6.66,3.003-13.02,6.671-18.947,10.933l-4.127-5.743 c6.312-4.537,13.081-8.442,20.17-11.638L155.228,100.771z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M144.869,99.332c-0.798-1.488-3.788-1.011-4.337-1.804l-0.003-0.002v0.001l0,0l0.001,0.001 c0.409,0.864-1.473,3.257-0.601,4.656l3.075,5.021l4.686-2.706L144.869,99.332z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M144.04,99.309c-0.456-0.293-1.241-0.433-1.86-0.537c-0.374-0.062-0.729-0.122-1.049-0.21 c-0.081,0.321-0.206,0.661-0.338,1.019c-0.255,0.695-0.583,1.616-0.414,2.154C141.127,100.382,142.526,99.511,144.04,99.309z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M145.305,101.647c-0.591-1.073-1.886-1.464-2.896-0.875c-1.011,0.589-1.314,1.91-0.679,2.958l1.886,3.124 l3.457-2.015L145.305,101.647z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M149.687,99.901c-0.389-0.782-1.299-1.108-2.032-0.729c-0.731,0.383-0.99,1.315-0.576,2.084l1.492,2.793 l2.537-1.318L149.687,99.901z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M149.708,100.054c0.146-0.088,0.226-0.293,0.089-0.503c-0.121-0.219-0.356-0.227-0.462-0.087 C149.5,99.622,149.585,99.815,149.708,100.054z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M149.331,99.47c0.121-0.14,0.087-0.4-0.108-0.528c-0.187-0.132-0.384-0.023-0.416,0.162 C148.998,99.19,149.187,99.302,149.331,99.47z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M148.805,99.112c0.044-0.205-0.088-0.409-0.297-0.458c-0.205-0.019-0.339,0.146-0.301,0.347 C148.408,99.004,148.611,99.031,148.805,99.112z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M148.207,99.01c-0.03-0.207-0.219-0.355-0.416-0.317c-0.185,0.071-0.25,0.278-0.151,0.466 C147.82,99.076,148.008,99.026,148.207,99.01z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M147.644,99.167c-0.096-0.19-0.309-0.262-0.474-0.148c-0.14,0.144-0.132,0.372,0.02,0.521 C147.318,99.385,147.472,99.263,147.644,99.167z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M147.195,99.543c-0.144-0.148-0.363-0.139-0.462,0.047c-0.082,0.196,0.012,0.418,0.199,0.5 C146.98,99.886,147.079,99.705,147.195,99.543z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M146.939,100.095c-0.171-0.083-0.381,0.015-0.376,0.25c-0.009,0.229,0.188,0.404,0.364,0.388 C146.875,100.517,146.895,100.296,146.939,100.095z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M146.935,100.732c-0.181,0.006-0.307,0.206-0.197,0.432c0.093,0.228,0.301,0.282,0.456,0.218 C147.071,101.141,146.966,100.955,146.935,100.732z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M149.321,100.092c-0.269-0.531-0.911-0.742-1.436-0.472c-0.523,0.271-0.722,0.921-0.441,1.448l0.082,0.155 l1.874-0.977L149.321,100.092z"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "147.617,101.395 148.93,103.872 150.755,102.924 149.488,100.422 \t\t"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M153.064,98.293c-0.362-0.796-1.267-1.161-2.018-0.816c-0.752,0.341-1.043,1.261-0.65,2.054l1.399,2.841 l2.593-1.202L153.064,98.293z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M153.081,98.445c0.148-0.08,0.236-0.281,0.106-0.494c-0.111-0.222-0.349-0.241-0.461-0.106 C152.886,98.006,152.965,98.202,153.081,98.445z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M152.722,97.848c0.126-0.133,0.103-0.394-0.09-0.529c-0.185-0.141-0.385-0.041-0.425,0.14 C152.397,97.555,152.583,97.675,152.722,97.848z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M152.206,97.467c0.052-0.199-0.074-0.408-0.283-0.468c-0.204-0.028-0.345,0.13-0.315,0.331 C151.811,97.341,152.013,97.378,152.206,97.467z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M151.609,97.338c-0.023-0.206-0.208-0.36-0.407-0.333c-0.187,0.063-0.262,0.266-0.167,0.458 C151.215,97.387,151.408,97.345,151.609,97.338z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M151.037,97.469c-0.091-0.196-0.303-0.275-0.472-0.173c-0.145,0.137-0.146,0.364,0,0.519 C150.701,97.669,150.86,97.555,151.037,97.469z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M150.571,97.822c-0.139-0.155-0.36-0.155-0.467,0.024c-0.088,0.188-0.003,0.417,0.184,0.506 C150.342,98.151,150.448,97.977,150.571,97.822z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M150.293,98.356c-0.171-0.095-0.38,0.005-0.38,0.245c-0.015,0.233,0.173,0.412,0.349,0.396 C150.215,98.775,150.241,98.553,150.293,98.356z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M150.269,98.995c-0.179,0.005-0.307,0.208-0.205,0.438c0.084,0.229,0.288,0.287,0.443,0.221 C150.394,99.413,150.295,99.22,150.269,98.995z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M152.689,98.466c-0.25-0.542-0.89-0.781-1.426-0.534c-0.536,0.245-0.759,0.88-0.497,1.416l0.077,0.156 l1.921-0.879L152.689,98.466z"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "150.928,99.677 152.158,102.198 154.028,101.342 152.845,98.8 \t\t"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M137.63,106.914c-0.479-0.722-1.45-0.972-2.124-0.496c-0.668,0.484-0.801,1.454-0.295,2.167l1.826,2.586 c0.771-0.559,1.537-1.127,2.35-1.624L137.63,106.914z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M137.669,107.061c0.137-0.101,0.193-0.311,0.031-0.5c-0.146-0.202-0.385-0.188-0.476-0.039 C137.41,106.657,137.517,106.838,137.669,107.061z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M137.221,106.526c0.106-0.147,0.042-0.4-0.169-0.506c-0.204-0.11-0.39,0.015-0.401,0.199 C136.853,106.285,137.056,106.376,137.221,106.526z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M136.649,106.227c0.021-0.203-0.136-0.393-0.353-0.419c-0.208,0.002-0.324,0.177-0.263,0.372 C136.236,106.161,136.444,106.167,136.649,106.227z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M136.035,106.187c-0.056-0.2-0.262-0.326-0.457-0.271c-0.17,0.099-0.209,0.314-0.087,0.489 C135.655,106.297,135.834,106.219,136.035,106.187z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M135.496,106.412c-0.119-0.178-0.337-0.218-0.483-0.083c-0.12,0.163-0.083,0.392,0.085,0.519 C135.205,106.675,135.34,106.533,135.496,106.412z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M135.104,106.852c-0.161-0.13-0.375-0.088-0.446,0.109c-0.056,0.208,0.064,0.419,0.259,0.475 C134.938,107.224,135.011,107.03,135.104,106.852z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M134.925,107.438c-0.179-0.059-0.372,0.069-0.336,0.303c0.021,0.231,0.235,0.379,0.408,0.339 C134.917,107.87,134.908,107.646,134.925,107.438z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M135.004,108.079c-0.178,0.031-0.275,0.249-0.14,0.46c0.12,0.212,0.331,0.239,0.476,0.153 C135.19,108.469,135.063,108.296,135.004,108.079z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M137.283,107.136c-0.326-0.487-1.016-0.655-1.491-0.304c-0.479,0.346-0.588,1.022-0.246,1.511l0.101,0.144 c0.573-0.408,1.132-0.837,1.734-1.204L137.283,107.136z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M135.758,108.645l1.609,2.296c0.558-0.396,1.102-0.814,1.688-1.172l-1.566-2.327 C136.888,107.808,136.33,108.238,135.758,108.645z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M140.769,104.879c-0.459-0.745-1.394-0.982-2.085-0.534c-0.691,0.449-0.863,1.405-0.381,2.135l1.74,2.646 l2.396-1.556L140.769,104.879z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M140.804,105.029c0.136-0.101,0.196-0.315,0.041-0.51c-0.138-0.206-0.374-0.192-0.465-0.043 C140.558,104.617,140.66,104.802,140.804,105.029z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M140.375,104.48c0.107-0.149,0.05-0.407-0.155-0.516c-0.199-0.113-0.384,0.014-0.399,0.201 C140.019,104.234,140.216,104.328,140.375,104.48z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M139.819,104.174c0.026-0.208-0.125-0.398-0.337-0.428c-0.204,0-0.321,0.177-0.267,0.375 C139.416,104.104,139.619,104.112,139.819,104.174z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M139.217,104.128c-0.05-0.203-0.25-0.332-0.442-0.275c-0.176,0.089-0.223,0.302-0.105,0.479 C138.838,104.233,139.021,104.164,139.217,104.128z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M138.672,104.339c-0.112-0.182-0.33-0.231-0.483-0.104c-0.126,0.155-0.098,0.383,0.066,0.517 C138.369,104.587,138.51,104.452,138.672,104.339z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M138.262,104.757c-0.157-0.135-0.375-0.104-0.456,0.091c-0.062,0.204,0.051,0.418,0.245,0.48 C138.08,105.12,138.16,104.93,138.262,104.757z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M138.058,105.33c-0.178-0.065-0.377,0.053-0.35,0.286c0.012,0.231,0.221,0.387,0.396,0.354 C138.033,105.76,138.032,105.537,138.058,105.33z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M138.112,105.969c-0.179,0.022-0.285,0.233-0.155,0.449c0.11,0.217,0.324,0.251,0.472,0.172 C138.286,106.363,138.164,106.188,138.112,105.969z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M140.423,105.104c-0.315-0.506-0.974-0.655-1.468-0.335c-0.495,0.32-0.633,0.987-0.306,1.486l0.097,0.146 l1.771-1.149L140.423,105.104z"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "138.85,106.565 140.383,108.914 142.106,107.793 140.619,105.416 \t\t"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M162.99,106.831c-9.1,3.6-17.7,8.53-25.347,14.622l-5.038-6.375c8.267-6.582,17.557-11.911,27.39-15.798 L162.99,106.831z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M149.078,106.736c-0.792-1.473-2.485-2.048-3.779-1.284c-1.298,0.756-1.652,2.504-0.786,3.91l3.114,5.104 c1.443-0.813,2.854-1.684,4.309-2.479L149.078,106.736z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M149.46,108.612c-0.621-1.134-1.924-1.579-2.917-1.002c-0.992,0.579-1.254,1.938-0.583,3.044l2.136,3.544 l3.362-1.962L149.46,108.612z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M148.996,108.885c-0.438-0.788-1.379-1.088-2.102-0.666c-0.722,0.421-0.932,1.391-0.468,2.165l2.118,3.556 l2.467-1.44L148.996,108.885z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M149.903,112.118l-1.604-2.824c-0.136-0.238-0.54-0.359-0.877-0.163c-0.338,0.197-0.436,0.61-0.296,0.849 l2.091,3.57l1.127-0.657L149.903,112.118z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M139.279,114.899c-0.646-0.915-1.746-1.241-2.461-0.731c-0.712,0.514-0.748,1.643-0.063,2.541l2.614,3.458 l2.422-1.732L139.279,114.899z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M141.302,118.639l-1.585,1.13l-2.176-2.908c-0.439-0.583-0.421-1.325,0.039-1.654 c0.46-0.328,1.179-0.112,1.604,0.481L141.302,118.639z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M143.442,112.088c-0.602-0.944-1.687-1.32-2.424-0.846c-0.735,0.478-0.826,1.603-0.186,2.534l2.445,3.579 l2.503-1.617L143.442,112.088z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M145.283,115.92l-1.639,1.056l-2.034-3.011c-0.41-0.604-0.355-1.344,0.118-1.648 c0.476-0.306,1.184-0.058,1.579,0.557L145.283,115.92z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M154.832,105.734c-0.475-0.998-1.532-1.565-2.304-1.143c-0.776,0.408-0.99,1.541-0.476,2.536l1.984,3.854 c0.885-0.451,1.748-0.949,2.665-1.335L154.832,105.734z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M156.18,109.754c-0.599,0.255-1.156,0.595-1.738,0.885l-1.645-3.238c-0.333-0.652-0.196-1.395,0.305-1.655 c0.495-0.273,1.178,0.083,1.495,0.739L156.18,109.754z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M159.417,103.675c-0.425-1.019-1.455-1.635-2.246-1.251c-0.796,0.371-1.063,1.494-0.596,2.511l1.798,3.945 c0.904-0.407,1.791-0.863,2.725-1.208L159.417,103.675z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M160.571,107.755c-0.609,0.226-1.183,0.538-1.776,0.801l-1.489-3.314 c-0.302-0.666-0.128-1.397,0.384-1.637c0.508-0.25,1.172,0.139,1.457,0.811L160.571,107.755z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M150.134,68.807c-0.116-3.428-0.138-6.822-0.099-10.273c2.195,2.66,4.32,5.349,6.374,8.062 C154.317,67.332,152.213,68.038,150.134,68.807z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M157.563,65.545c-2.983,0.987-5.975,1.977-8.891,3.148l0.749,1.918c2.874-1.156,5.821-2.13,8.761-3.102 L157.563,65.545z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M159.116,72.853c-2.333,0.816-4.686,1.589-6.991,2.478l11.946,31.14c1.732-0.671,3.505-1.235,5.251-1.866 L159.116,72.853z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M157.467,67.725c-2.427,0.848-4.872,1.652-7.272,2.576l1.842,4.797c2.31-0.893,4.667-1.664,7.003-2.484 L157.467,67.725z"
                  }), t("polygon", {
                    fill: "#F15C27",
                    points: "158.126,71.753 152.269,73.81 151.062,70.613 157.066,68.506 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "156.903,71.516 153.09,72.848 152.325,70.772 156.2,69.417 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "160.261,78.269 154.7,80.221 153.492,77.026 159.2,75.022 \t\t"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M160.369,71.812c-3.29,1.031-6.566,2.134-9.761,3.438l0.758,1.916c3.144-1.285,6.37-2.372,9.61-3.387 L160.369,71.812z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M156.071,79.267l-0.945,0.33l-0.579-1.555c-0.104-0.274,0.03-0.574,0.296-0.668 c0.265-0.09,0.562,0.058,0.663,0.334L156.071,79.267z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M157.805,78.661l-0.946,0.331l-0.557-1.562c-0.1-0.278,0.037-0.577,0.303-0.67s0.56,0.058,0.655,0.336 L157.805,78.661z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M159.539,78.056l-0.947,0.331l-0.534-1.57c-0.095-0.278,0.044-0.579,0.312-0.672 c0.265-0.094,0.557,0.058,0.648,0.336L159.539,78.056z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M155.904,80.94c-0.058-0.154-0.238-0.234-0.402-0.177c-0.165,0.058-0.251,0.229-0.193,0.385l9.411,25.045 l0.471-0.16L155.904,80.94z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M157.393,80.422c-0.055-0.156-0.234-0.236-0.398-0.178c-0.165,0.058-0.253,0.229-0.197,0.385l9.101,25.161 l0.472-0.163L157.393,80.422z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M158.882,79.902c-0.054-0.157-0.23-0.238-0.396-0.18c-0.164,0.057-0.254,0.23-0.199,0.386l8.788,25.271 l0.471-0.165L158.882,79.902z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M160.371,79.379c-0.053-0.156-0.229-0.236-0.393-0.179c-0.165,0.057-0.256,0.231-0.204,0.387l8.476,25.378 l0.47-0.167L160.371,79.379z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M184.239,86.84c-0.096-0.684,0.296-1.307,0.875-1.391c3.254-0.392,6.52-0.738,9.797-0.834 c0.584-0.026,1.075,0.511,1.099,1.201l0.192,5.622c-3.74,0.137-7.479,0.428-11.187,0.974L184.239,86.84z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M196.222,92.079l0.268,7.807c-3.444,0.128-6.893,0.393-10.31,0.897l-1.076-7.735 C188.788,92.504,192.505,92.215,196.222,92.079z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M194.133,81.516l1.784,2.255c0.147,0.188,0.09,0.353-0.127,0.362c-3.979,0.146-7.957,0.464-11.898,1.049 c-0.214,0.03-0.3-0.118-0.187-0.332l1.361-2.56c0.117-0.214,0.392-0.417,0.613-0.449c2.59-0.212,5.171-0.59,7.771-0.65 C193.675,81.181,193.98,81.326,194.133,81.516z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M193.753,82.685c0.438-0.021,0.841,0.376,1.08,0.987l-2.053,0.093 C192.957,83.135,193.316,82.703,193.753,82.685z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M191.737,82.772c0.438-0.019,0.85,0.378,1.102,0.99c-0.687,0.018-1.37,0.062-2.051,0.143 C190.951,83.265,191.301,82.812,191.737,82.772z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M189.728,82.963c0.438-0.04,0.854,0.336,1.114,0.938l-2.045,0.196 C188.949,83.457,189.292,83.007,189.728,82.963z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M187.649,83.162c0.437-0.042,0.86,0.336,1.131,0.936l-2.045,0.19 C186.877,83.65,187.214,83.203,187.649,83.162z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M185.642,83.37c0.434-0.073,0.865,0.319,1.148,0.914c-0.685,0.046-1.359,0.17-2.038,0.264 C184.882,83.9,185.209,83.433,185.642,83.37z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M187.785,93.29c0.656-0.06,1.261,0.591,1.348,1.454l0.573,5.561l-1.155,0.105l-0.817-7.115L187.785,93.29z "
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M187.336,93.331c-0.655,0.084-1.092,0.87-0.979,1.728l0.721,5.545l1.148-0.165l-0.84-7.111L187.336,93.331 z"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "192.939,90.333 195.292,90.229 195.119,86.112 192.675,86.221 \t\t"
                  }), t("rect", {
                    x: "193.984",
                    y: "86.443",
                    transform: "matrix(0.999 -0.0448 0.0448 0.999 -3.6844 8.7999)",
                    fill: "#69C8C3",
                    width: "0.893",
                    height: "0.267"
                  }), t("rect", {
                    x: "193.997",
                    y: "86.844",
                    transform: "matrix(0.9989 -0.0459 0.0459 0.9989 -3.7876 9.0173)",
                    fill: "#69C8C3",
                    width: "0.894",
                    height: "0.267"
                  }), t("rect", {
                    x: "194.012",
                    y: "87.255",
                    transform: "matrix(0.9989 -0.0461 0.0461 0.9989 -3.8223 9.0583)",
                    fill: "#69C8C3",
                    width: "0.89",
                    height: "0.268"
                  }), t("rect", {
                    x: "194.042",
                    y: "87.651",
                    transform: "matrix(0.999 -0.0452 0.0452 0.999 -3.7657 8.8721)",
                    fill: "#69C8C3",
                    width: "0.887",
                    height: "0.266"
                  }), t("rect", {
                    x: "194.073",
                    y: "88.068",
                    transform: "matrix(0.9989 -0.0465 0.0465 0.9989 -3.892 9.1428)",
                    fill: "#69C8C3",
                    width: "0.882",
                    height: "0.267"
                  }), t("rect", {
                    x: "194.096",
                    y: "88.46",
                    transform: "matrix(0.9989 -0.0467 0.0467 0.9989 -3.9225 9.175)",
                    fill: "#69C8C3",
                    width: "0.879",
                    height: "0.266"
                  }), t("rect", {
                    x: "194.109",
                    y: "88.861",
                    transform: "matrix(0.999 -0.0445 0.0445 0.999 -3.7715 8.7552)",
                    fill: "#69C8C3",
                    width: "0.877",
                    height: "0.267"
                  }), t("rect", {
                    x: "194.138",
                    y: "89.27",
                    transform: "matrix(0.999 -0.0437 0.0437 0.999 -3.7195 8.5844)",
                    fill: "#69C8C3",
                    width: "0.872",
                    height: "0.268"
                  }), t("rect", {
                    x: "194.149",
                    y: "89.667",
                    transform: "matrix(0.999 -0.0449 0.0449 0.999 -3.8356 8.8271)",
                    fill: "#69C8C3",
                    width: "0.87",
                    height: "0.265"
                  }), t("polygon", {
                    fill: "#69C8C3",
                    points: "192.925,86.78 193.818,86.741 193.803,86.475 192.908,86.514 \t\t"
                  }), t("polygon", {
                    fill: "#69C8C3",
                    points: "192.949,87.182 193.839,87.143 193.826,86.876 192.932,86.916 \t\t"
                  }), t("polygon", {
                    fill: "#69C8C3",
                    points: "192.974,87.583 193.861,87.544 193.847,87.279 192.958,87.317 \t\t"
                  }), t("polygon", {
                    fill: "#69C8C3",
                    points: "192.999,87.985 193.884,87.947 193.869,87.681 192.982,87.719 \t\t"
                  }), t("polygon", {
                    fill: "#69C8C3",
                    points: "193.024,88.388 193.905,88.35 193.89,88.083 193.007,88.122 \t\t"
                  }), t("polygon", {
                    fill: "#69C8C3",
                    points: "193.048,88.791 193.926,88.752 193.913,88.487 193.031,88.524 \t\t"
                  }), t("polygon", {
                    fill: "#69C8C3",
                    points: "193.074,89.192 193.949,89.154 193.934,88.889 193.057,88.927 \t\t"
                  }), t("polygon", {
                    fill: "#69C8C3",
                    points: "193.099,89.595 193.97,89.556 193.956,89.29 193.082,89.328 \t\t"
                  }), t("polygon", {
                    fill: "#69C8C3",
                    points: "193.124,89.996 193.992,89.958 193.978,89.693 193.107,89.73 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "189.402,90.637 191.748,90.411 191.441,86.302 189.006,86.536 \t\t"
                  }), t("polygon", {
                    fill: "#69C8C3",
                    points: "190.333,86.982 191.224,86.895 191.204,86.63 190.31,86.716 \t\t"
                  }), t("polygon", {
                    fill: "#69C8C3",
                    points: "190.367,87.383 191.255,87.297 191.234,87.031 190.344,87.118 \t\t"
                  }), t("polygon", {
                    fill: "#69C8C3",
                    points: "190.402,87.785 191.287,87.699 191.265,87.432 190.378,87.519 \t\t"
                  }), t("polygon", {
                    fill: "#69C8C3",
                    points: "190.435,88.185 191.317,88.1 191.296,87.835 190.414,87.919 \t\t"
                  }), t("polygon", {
                    fill: "#69C8C3",
                    points: "190.47,88.588 191.348,88.502 191.328,88.234 190.447,88.32 \t\t"
                  }), t("polygon", {
                    fill: "#69C8C3",
                    points: "190.503,88.988 191.378,88.902 191.359,88.637 190.482,88.722 \t\t"
                  }), t("polygon", {
                    fill: "#69C8C3",
                    points: "190.538,89.389 191.41,89.306 191.39,89.039 190.515,89.124 \t\t"
                  }), t("polygon", {
                    fill: "#69C8C3",
                    points: "190.572,89.791 191.441,89.708 191.42,89.439 190.55,89.525 \t\t"
                  }), t("polygon", {
                    fill: "#69C8C3",
                    points: "190.607,90.192 191.472,90.108 191.452,89.842 190.583,89.927 \t\t"
                  }), t("rect", {
                    x: "189.258",
                    y: "86.765",
                    transform: "matrix(0.9954 -0.0959 0.0959 0.9954 -7.462 18.6014)",
                    fill: "#69C8C3",
                    width: "0.896",
                    height: "0.266"
                  }), t("rect", {
                    x: "189.298",
                    y: "87.175",
                    transform: "matrix(0.9957 -0.0931 0.0931 0.9957 -7.3047 18.045)",
                    fill: "#69C8C3",
                    width: "0.892",
                    height: "0.269"
                  }), t("rect", {
                    x: "189.339",
                    y: "87.573",
                    transform: "matrix(0.9953 -0.0968 0.0968 0.9953 -7.5974 18.7791)",
                    fill: "#69C8C3",
                    width: "0.888",
                    height: "0.266"
                  }), t("rect", {
                    x: "189.37",
                    y: "87.977",
                    transform: "matrix(0.9954 -0.0959 0.0959 0.9954 -7.575 18.6095)",
                    fill: "#69C8C3",
                    width: "0.886",
                    height: "0.266"
                  }), t("rect", {
                    x: "189.402",
                    y: "88.38",
                    transform: "matrix(0.9956 -0.0941 0.0941 0.9956 -7.4888 18.2629)",
                    fill: "#69C8C3",
                    width: "0.882",
                    height: "0.267"
                  }), t("rect", {
                    x: "189.459",
                    y: "88.777",
                    transform: "matrix(0.9956 -0.0932 0.0932 0.9956 -7.4626 18.093)",
                    fill: "#69C8C3",
                    width: "0.88",
                    height: "0.266"
                  }), t("rect", {
                    x: "189.478",
                    y: "89.176",
                    transform: "matrix(0.9955 -0.0947 0.0947 0.9955 -7.6007 18.3768)",
                    fill: "#69C8C3",
                    width: "0.877",
                    height: "0.267"
                  }), t("rect", {
                    x: "189.526",
                    y: "89.589",
                    transform: "matrix(0.9955 -0.095 0.095 0.9955 -7.6621 18.4457)",
                    fill: "#69C8C3",
                    width: "0.874",
                    height: "0.268"
                  }), t("rect", {
                    x: "189.568",
                    y: "89.988",
                    transform: "matrix(0.9955 -0.0944 0.0944 0.9955 -7.658 18.3357)",
                    fill: "#69C8C3",
                    width: "0.869",
                    height: "0.268"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M185.874,91.024c0.774-0.132,1.557-0.211,2.34-0.275l-0.441-4.097c-0.812,0.067-1.623,0.15-2.428,0.284 L185.874,91.024z"
                  }), t("polygon", {
                    fill: "#69C8C3",
                    points: "186.683,87.323 187.574,87.241 187.545,86.977 186.652,87.059 \t\t"
                  }), t("polygon", {
                    fill: "#69C8C3",
                    points: "186.73,87.724 187.618,87.643 187.589,87.378 186.7,87.459 \t\t"
                  }), t("polygon", {
                    fill: "#69C8C3",
                    points: "186.777,88.125 187.663,88.042 187.634,87.778 186.747,87.859 \t\t"
                  }), t("polygon", {
                    fill: "#69C8C3",
                    points: "186.825,88.524 187.707,88.442 187.678,88.179 186.793,88.26 \t\t"
                  }), t("polygon", {
                    fill: "#69C8C3",
                    points: "186.871,88.924 187.75,88.844 187.721,88.578 186.841,88.659 \t\t"
                  }), t("polygon", {
                    fill: "#69C8C3",
                    points: "186.919,89.323 187.795,89.245 187.766,88.979 186.888,89.059 \t\t"
                  }), t("polygon", {
                    fill: "#69C8C3",
                    points: "186.966,89.724 187.839,89.645 187.809,89.379 186.935,89.46 \t\t"
                  }), t("polygon", {
                    fill: "#69C8C3",
                    points: "187.014,90.124 187.883,90.046 187.854,89.781 186.982,89.859 \t\t"
                  }), t("polygon", {
                    fill: "#69C8C3",
                    points: "187.061,90.524 187.927,90.445 187.897,90.181 187.029,90.26 \t\t"
                  }), t("polygon", {
                    fill: "#69C8C3",
                    points: "185.627,87.47 186.512,87.34 186.481,87.075 185.594,87.206 \t\t"
                  }), t("polygon", {
                    fill: "#69C8C3",
                    points: "185.678,87.871 186.562,87.739 186.529,87.474 185.644,87.605 \t\t"
                  }), t("polygon", {
                    fill: "#69C8C3",
                    points: "185.729,88.27 186.608,88.138 186.577,87.875 185.695,88.004 \t\t"
                  }), t("polygon", {
                    fill: "#69C8C3",
                    points: "185.78,88.669 186.656,88.54 186.625,88.274 185.747,88.404 \t\t"
                  }), t("polygon", {
                    fill: "#69C8C3",
                    points: "185.831,89.069 186.704,88.939 186.673,88.674 185.797,88.803 \t\t"
                  }), t("polygon", {
                    fill: "#69C8C3",
                    points: "185.882,89.467 186.752,89.338 186.72,89.076 185.848,89.205 \t\t"
                  }), t("polygon", {
                    fill: "#69C8C3",
                    points: "185.934,89.867 186.8,89.74 186.768,89.475 185.899,89.604 \t\t"
                  }), t("polygon", {
                    fill: "#69C8C3",
                    points: "185.984,90.268 186.848,90.14 186.816,89.874 185.951,90.002 \t\t"
                  }), t("polygon", {
                    fill: "#69C8C3",
                    points: "186.035,90.667 186.896,90.539 186.864,90.276 186.001,90.402 \t\t"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M191.726,97.555c0.729-0.089,1.461-0.129,2.195-0.149l-0.241-4.113c-0.763,0.021-1.525,0.064-2.285,0.155 L191.726,97.555z"
                  }), t("polygon", {
                    fill: "#54777B",
                    points: "192.906,97.146 193.627,97.117 193.416,93.684 192.671,93.715 \t\t"
                  }), t("polygon", {
                    fill: "#54777B",
                    points: "191.923,97.233 192.642,97.16 192.398,93.73 191.656,93.803 \t\t"
                  }), t("polygon", {
                    fill: "#69C8C3",
                    points: "191.052,98.12 191.717,97.554 191.39,93.495 190.593,92.854 \t\t"
                  }), t("polygon", {
                    fill: "#69C8C3",
                    points: "194.669,97.87 193.935,97.402 193.697,93.337 194.398,92.592 \t\t"
                  }), t("path", {
                    fill: "#54777B",
                    d: "M169.495,79.902c4.008-1.021,8.066-1.86,12.161-2.446l0.816,5.453c-3.912,0.562-7.791,1.362-11.621,2.337 L169.495,79.902z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M179.223,73.067l2.211,4.015c-4.039,0.59-8.047,1.413-12.002,2.422l0.486-4.533 C172.98,74.157,176.112,73.645,179.223,73.067z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M179.37,79.81c-0.065-0.383,0.156-0.756,0.505-0.799c0.346-0.05,0.677,0.221,0.738,0.604l0.413,2.566 l-1.217,0.187L179.37,79.81z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M177.304,80.212c-0.073-0.382,0.146-0.746,0.489-0.812c0.344-0.067,0.678,0.188,0.746,0.572l0.458,2.558 l-1.209,0.236L177.304,80.212z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M175.237,80.612c-0.08-0.38,0.136-0.743,0.479-0.809c0.344-0.066,0.683,0.188,0.758,0.57l0.502,2.549 l-1.21,0.235L175.237,80.612z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M173.178,81.047c-0.086-0.38,0.121-0.754,0.46-0.837c0.343-0.075,0.688,0.186,0.769,0.563l0.547,2.542 l-1.203,0.268L173.178,81.047z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M171.133,81.549c-0.092-0.376,0.108-0.75,0.449-0.834c0.34-0.083,0.687,0.155,0.773,0.535l0.59,2.532 l-1.196,0.293L171.133,81.549z"
                  }), t("path", {
                    fill: "#54777B",
                    d: "M170.99,85.789c3.812-0.97,7.673-1.769,11.565-2.324l0.816,5.451c-3.709,0.53-7.39,1.291-11.023,2.219 L170.99,85.789z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M180.397,85.793c-0.065-0.38,0.145-0.752,0.475-0.793c0.329-0.045,0.646,0.229,0.708,0.613l0.414,2.566 l-1.155,0.179L180.397,85.793z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M178.435,86.179c-0.073-0.382,0.133-0.744,0.458-0.808c0.327-0.062,0.646,0.196,0.716,0.579l0.457,2.561 l-1.146,0.224L178.435,86.179z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M176.471,86.559c-0.08-0.38,0.121-0.74,0.447-0.805c0.327-0.062,0.651,0.196,0.727,0.578l0.503,2.55 L177,89.106L176.471,86.559z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M174.515,86.972c-0.086-0.379,0.107-0.753,0.429-0.833c0.325-0.07,0.658,0.192,0.738,0.57l0.547,2.543 l-1.141,0.254L174.515,86.972z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M172.572,87.45c-0.092-0.378,0.095-0.75,0.418-0.828c0.323-0.08,0.656,0.165,0.744,0.542l0.591,2.533 l-1.137,0.279L172.572,87.45z"
                  }), t("path", {
                    fill: "#54777B",
                    d: "M172.486,91.675c3.616-0.92,7.277-1.678,10.97-2.204l0.814,5.451c-3.509,0.499-6.989,1.221-10.427,2.098 L172.486,91.675z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M181.425,91.782c-0.065-0.382,0.129-0.75,0.443-0.789c0.312-0.044,0.614,0.232,0.676,0.615l0.414,2.566 l-1.092,0.169L181.425,91.782z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M179.566,92.147c-0.071-0.382,0.119-0.741,0.429-0.801c0.311-0.062,0.616,0.2,0.684,0.583l0.458,2.56 l-1.085,0.214L179.566,92.147z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M177.706,92.507c-0.08-0.381,0.106-0.737,0.417-0.797c0.309-0.061,0.621,0.201,0.694,0.582l0.501,2.553 l-1.086,0.21L177.706,92.507z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M175.852,92.897c-0.086-0.38,0.093-0.749,0.398-0.825c0.309-0.067,0.627,0.2,0.708,0.577l0.546,2.542 l-1.08,0.241L175.852,92.897z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M174.011,93.351c-0.092-0.378,0.082-0.745,0.388-0.819c0.308-0.077,0.625,0.17,0.713,0.549l0.591,2.532 l-1.075,0.265L174.011,93.351z"
                  }), t("path", {
                    fill: "#54777B",
                    d: "M173.981,97.563c3.42-0.872,6.882-1.589,10.372-2.084l0.815,5.451c-3.308,0.469-6.588,1.149-9.829,1.976 L173.981,97.563z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M182.454,97.767c-0.066-0.381,0.115-0.748,0.412-0.783c0.294-0.04,0.582,0.238,0.646,0.622l0.413,2.566 l-1.031,0.158L182.454,97.767z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M180.697,98.115c-0.071-0.383,0.105-0.738,0.398-0.794c0.292-0.058,0.584,0.205,0.653,0.589l0.458,2.559 l-1.023,0.203L180.697,98.115z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M178.939,98.455c-0.08-0.382,0.095-0.735,0.388-0.791c0.292-0.057,0.59,0.207,0.664,0.588l0.503,2.553 L179.468,101L178.939,98.455z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M177.188,98.822c-0.086-0.38,0.079-0.745,0.368-0.817c0.292-0.063,0.596,0.205,0.677,0.583l0.546,2.542 l-1.018,0.229L177.188,98.822z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M175.45,99.253c-0.093-0.379,0.067-0.742,0.355-0.812c0.29-0.071,0.595,0.177,0.684,0.557l0.591,2.532 l-1.015,0.251L175.45,99.253z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M179.046,76.01c0.427-0.062,0.863,0.263,1.162,0.798c-0.671,0.086-1.337,0.195-1.998,0.336 C178.316,76.542,178.623,76.091,179.046,76.01z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M177.095,76.391c0.424-0.082,0.862,0.221,1.168,0.744l-1.99,0.388 C176.372,76.92,176.671,76.473,177.095,76.391z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M175.144,76.77c0.422-0.082,0.867,0.22,1.184,0.743l-1.989,0.385 C174.426,77.296,174.72,76.852,175.144,76.77z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M173.124,77.16c0.422-0.081,0.874,0.219,1.198,0.74c-0.666,0.119-1.326,0.258-1.979,0.433 C172.421,77.725,172.703,77.257,173.124,77.16z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M171.191,77.631c0.419-0.103,0.873,0.181,1.204,0.688l-1.97,0.483 C170.495,78.196,170.773,77.733,171.191,77.631z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M177.833,74.558c0.429-0.082,0.868,0.214,1.174,0.748l-2.018,0.388 C177.096,75.089,177.403,74.641,177.833,74.558z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M175.854,74.941c0.431-0.083,0.876,0.219,1.189,0.742l-2.018,0.392 C175.125,75.472,175.426,75.025,175.854,74.941z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M173.877,75.326c0.429-0.083,0.882,0.217,1.205,0.738l-2.018,0.392 C173.152,75.854,173.448,75.408,173.877,75.326z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M171.841,75.765c0.425-0.102,0.878,0.169,1.21,0.691l-1.997,0.482 C171.13,76.333,171.417,75.869,171.841,75.765z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M169.085,92.838c0.099,0.01,0.208-0.021,0.298-0.072l3.088,10.816l-0.263,0.078L169.085,92.838z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M168.395,95.118l0.05,0.199c0.144,0.48,0.471,1.014,0.857,1.129c0.092,0.029,0.17,0.029,0.238,0.008 c0.252-0.066,0.407-0.471,0.328-0.864c-0.021-0.101,0.028-0.192,0.11-0.207c0.081-0.013,0.164,0.059,0.184,0.16 c0.106,0.553-0.084,1.134-0.518,1.271l0,0c-0.115,0.034-0.245,0.033-0.383-0.011c-0.565-0.188-0.934-0.848-1.104-1.401 l-0.054-0.204L168.395,95.118z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M169.973,95.386c0.076-0.034,0.167,0.017,0.203,0.111c0.14,0.375,0.485,0.63,0.733,0.548 c0.067-0.021,0.134-0.062,0.195-0.139c0.267-0.308,0.258-0.938,0.125-1.421l-0.08-0.241l-0.008-0.021h0.002 c0.092-0.005,0.206-0.019,0.293-0.067l0.08,0.248c0.148,0.557,0.186,1.314-0.191,1.783c-0.093,0.111-0.201,0.187-0.316,0.22 h-0.001c-0.437,0.124-0.903-0.259-1.106-0.785C169.866,95.525,169.896,95.42,169.973,95.386z"
                  }), t("polygon", {
                    fill: "#E8D320",
                    points: "167.888,93.281 168.303,95.023 168.098,95.084 167.48,93.401 \t\t"
                  }), t("polygon", {
                    fill: "#E8D320",
                    points: "167.378,93.432 167.999,95.114 167.811,95.17 167.139,93.502 \t\t"
                  }), t("polygon", {
                    fill: "#E8D320",
                    points: "168.288,93.164 168.652,94.921 168.408,94.993 167.997,93.249 \t\t"
                  }), t("polygon", {
                    fill: "#62381B",
                    points: "168.149,92.719 168.503,93.113 166.931,93.579 167.007,93.058 \t\t"
                  }), t("rect", {
                    x: "167.599",
                    y: "94.958",
                    transform: "matrix(0.9589 -0.2837 0.2837 0.9589 -20.06 51.6432)",
                    fill: "#62381B",
                    width: "1.27",
                    height: "0.215"
                  }), t("polygon", {
                    fill: "#E8D320",
                    points: "171.009,92.355 171.374,94.108 171.168,94.169 170.601,92.473 \t\t"
                  }), t("polygon", {
                    fill: "#E8D320",
                    points: "170.499,92.503 171.07,94.2 170.881,94.257 170.259,92.575 \t\t"
                  }), t("polygon", {
                    fill: "#E8D320",
                    points: "171.415,92.258 171.728,94.022 171.48,94.083 171.12,92.33 \t\t"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M171.29,91.811l0.342,0.41c-0.533,0.117-1.059,0.268-1.58,0.431l0.088-0.527L171.29,91.811z"
                  }), t("rect", {
                    x: "170.679",
                    y: "94.064",
                    transform: "matrix(0.9646 -0.2638 0.2638 0.9646 -18.7758 48.5349)",
                    fill: "#62381B",
                    width: "1.27",
                    height: "0.217"
                  }), t("polygon", {
                    fill: "#E8D320",
                    points: "168.934,90.984 169.323,92.734 169.113,92.797 168.52,91.107 \t\t"
                  }), t("polygon", {
                    fill: "#E8D320",
                    points: "168.417,91.137 169.014,92.828 168.822,92.883 168.173,91.211 \t\t"
                  }), t("polygon", {
                    fill: "#E8D320",
                    points: "169.34,90.862 169.678,92.629 169.43,92.703 169.046,90.951 \t\t"
                  }), t("polygon", {
                    fill: "#62381B",
                    points: "169.209,90.417 169.56,90.812 167.962,91.289 168.048,90.764 \t\t"
                  }), t("rect", {
                    x: "168.601",
                    y: "92.668",
                    transform: "matrix(0.9585 -0.2852 0.2852 0.9585 -19.4302 52.1213)",
                    fill: "#62381B",
                    width: "1.291",
                    height: "0.215"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M171.314,101.997c-0.109-0.374,0.03-0.744,0.312-0.829c0.281-0.083,0.595,0.152,0.7,0.526l0.525,1.87 l-0.992,0.297L171.314,101.997z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M87.329,165.424c0.041,0.01-1.955-1.37-1.021-6.473c0.678-3.402-0.723-3.957-1.083-6.165 c-0.372-2.236,2.139-0.417,2.139-0.419l3.359,3.428c0.168,3.54,0.332,6.962,0.774,10.361L87.329,165.424z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M85.931,144.824c-0.858,1.66-1.335,3.583-1.241,5.313c0.105,1.853,0.622,3.27,1.372,4.96 c1.392,2.261,1.188,4.596,1.626,6.928c0.189,0.755,0.58,1.353,1.104,1.834c2.938-2.25,6.255-7.221,9.157-13.234 c4.136-8.604,5.977-16.876,3.008-19.05C97.986,129.39,90.667,135.018,85.931,144.824z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M102.019,138.396c2.656,1.749,1.299,8.33-1.889,15.332c-3.231,6.979-7.444,12.291-10.49,11.391 c-2.989-0.864-3.463-8.329,0.156-16.169C93.389,141.096,99.431,136.677,102.019,138.396z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M101.628,140.482c2.565,1.625,1.646,7.927-1.332,14.452c-2.989,6.529-6.999,11.468-9.977,10.588 c-2.914-0.842-3.491-7.836-0.156-15.157C93.507,143.054,99.014,138.818,101.628,140.482z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M102.963,143.604c2.265,1.371,1.471,6.816-1.079,12.535c-2.589,5.701-6.09,9.982-8.615,9.205 c-2.48-0.75-2.893-6.768-0.042-13.065C96.048,145.963,100.753,142.26,102.963,143.604z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M102.449,146.106c1.987,1.138,1.402,5.951-0.771,11.021c-2.228,5.043-5.362,8.782-7.57,8.09 c-2.197-0.678-2.519-5.914-0.092-11.425C96.396,148.26,100.436,144.948,102.449,146.106z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M108.539,157.399c-0.345-2.246,1.057-2.241-1.74-3.623c-2.408-1.193-0.054-2.818,0.801-5.087 c0.823-2.591,0.479-6.468-2.197-9.057c-1.476-1.408-2.686,4.764-6.002,11.609c-3.965,8.011-8.564,14.359-12.116,14.185 c-0.001,0.002,14.696,4.594,14.886,4.647c3.062,0.893,6.963-3.17,10.246-8.843C110.478,160.18,108.797,158.894,108.539,157.399z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M86.488,149.198c-0.354-0.139-0.732,0.005-0.846,0.322c-0.111,0.318,0.093,0.68,0.452,0.808l2.291,0.837 l0.374-1.064L86.488,149.198z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M87.943,145.877c-0.34-0.169-0.746-0.063-0.892,0.24c-0.147,0.304,0.015,0.678,0.363,0.835l2.215,1.024 l0.501-1.008L87.943,145.877z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M89.708,142.702c-0.324-0.205-0.731-0.135-0.902,0.158c-0.171,0.292-0.045,0.682,0.289,0.873l2.111,1.226 l0.574-0.955L89.708,142.702z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M91.935,139.794c-0.293-0.241-0.712-0.227-0.937,0.036c-0.229,0.262-0.148,0.667,0.156,0.893l1.947,1.456 l0.713-0.835L91.935,139.794z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M94.646,137.281c-0.235-0.29-0.666-0.354-0.96-0.144c-0.291,0.216-0.27,0.638-0.01,0.905l1.689,1.749 l0.819-0.665L94.646,137.281z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M98.134,135.625c-0.128-0.34-0.533-0.528-0.907-0.413c-0.377,0.109-0.499,0.518-0.325,0.831l1.128,2.062 c0.312-0.144,0.638-0.217,0.953-0.319L98.134,135.625z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M89.186,157.786c-0.276-0.066-0.539,0.081-0.584,0.329c-0.045,0.249,0.147,0.499,0.425,0.56l1.781,0.4 l0.151-0.852L89.186,157.786z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M89.796,155.12c-0.274-0.086-0.554,0.043-0.626,0.283c-0.074,0.24,0.117,0.508,0.386,0.583l1.751,0.509 l0.239-0.827L89.796,155.12z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M90.651,152.521c-0.268-0.104-0.552,0.01-0.638,0.249c-0.086,0.237,0.068,0.509,0.337,0.604l1.722,0.623 l0.288-0.812L90.651,152.521z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M91.67,149.973c-0.261-0.124-0.556-0.034-0.654,0.2c-0.104,0.232,0.035,0.52,0.295,0.633l1.673,0.744 l0.342-0.788L91.67,149.973z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M93.014,147.57c-0.246-0.144-0.554-0.084-0.688,0.134c-0.135,0.22-0.027,0.512,0.223,0.648l1.602,0.88 l0.441-0.729L93.014,147.57z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M94.604,145.312c-0.227-0.173-0.545-0.15-0.705,0.053c-0.152,0.208-0.086,0.51,0.149,0.672l1.502,1.043 l0.514-0.662L94.604,145.312z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M96.631,143.363c-0.192-0.203-0.524-0.237-0.733-0.068c-0.198,0.178-0.19,0.478,0.016,0.669l1.317,1.229 l0.643-0.528L96.631,143.363z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M99.114,141.901c-0.136-0.239-0.455-0.344-0.717-0.23c-0.261,0.111-0.313,0.418-0.155,0.641l1.022,1.448 l0.734-0.34L99.114,141.901z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M92.841,164.849c-0.502-0.162-1.011,0.026-1.134,0.421c-0.125,0.394,0.182,0.846,0.685,1.01l3.209,1.065 l0.459-1.441L92.841,164.849z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M95.657,162.166c-0.498-0.177-1.016-0.011-1.155,0.37c-0.139,0.383,0.15,0.837,0.646,1.018l3.176,1.159 l0.517-1.395L95.657,162.166z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M97.684,159.059c-0.491-0.193-1.001-0.042-1.138,0.338c-0.136,0.381,0.149,0.847,0.641,1.041l3.14,1.264 l0.504-1.389L97.684,159.059z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M99.467,155.833c-0.485-0.21-1.004-0.078-1.16,0.292s0.11,0.844,0.593,1.053l3.095,1.363l0.575-1.351 L99.467,155.833z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M101.074,152.523c-0.479-0.228-1.008-0.117-1.184,0.245c-0.175,0.36,0.069,0.837,0.545,1.064l3.046,1.465 l0.647-1.314L101.074,152.523z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M102.575,149.163c-0.471-0.241-0.991-0.143-1.165,0.22c-0.174,0.363,0.066,0.854,0.534,1.096l2.998,1.568 l0.639-1.321L102.575,149.163z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M104.105,145.836c-0.461-0.256-0.992-0.178-1.184,0.175c-0.193,0.353,0.022,0.849,0.482,1.107l2.943,1.667 l0.709-1.287L104.105,145.836z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M99.553,165.806c-0.611-0.204-1.222-0.001-1.365,0.454c-0.142,0.458,0.239,0.992,0.852,1.195l3.915,1.331 l0.52-1.646L99.553,165.806z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M102.963,162.819c-0.604-0.229-1.224-0.056-1.382,0.384c-0.158,0.44,0.202,0.98,0.806,1.208l3.861,1.475 l0.583-1.588L102.963,162.819z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M105.461,159.365c-0.595-0.251-1.224-0.111-1.403,0.315c-0.179,0.426,0.155,0.974,0.75,1.225l3.8,1.621 l0.659-1.531L105.461,159.365z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M107.58,155.736c-0.583-0.276-1.221-0.165-1.42,0.248c-0.205,0.412,0.111,0.973,0.701,1.251l3.734,1.772 l0.722-1.489L107.58,155.736z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M109.54,152.03c-0.566-0.296-1.234-0.228-1.421,0.191c-0.196,0.417,0.106,0.994,0.68,1.293l3.658,1.926 c0.246-0.494,0.46-1.005,0.744-1.479L109.54,152.03z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M111.436,148.293c-0.56-0.322-1.188-0.258-1.408,0.146c-0.219,0.404,0.058,0.992,0.617,1.313l3.576,2.073 l0.792-1.452L111.436,148.293z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M113.337,144.571c-0.545-0.344-1.184-0.304-1.422,0.087c-0.24,0.394,0.008,0.991,0.553,1.335l3.488,2.218 l0.871-1.412L113.337,144.571z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M100.665,131.367c1.212,1.364,0.522,4.153,0.421,7.864c-0.082,1.827,1.06,3.467,2.637,4.837 c2.79,2.426,1.43,2.09,0.484,4.729c-0.815,2.388,0.197,3.799,2.592,4.979c2.797,1.382,1.396,1.377,1.74,3.623 c0.258,1.495,1.938,2.781,3.877,3.832c0.496-0.954,1.033-1.929,1.553-2.943c3.491-7.247,4.877-14.314,1.909-16.486 C115.718,141.686,100.667,131.365,100.665,131.367z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M104.333,140.488c-0.45-0.277-0.989-0.217-1.205,0.134c-0.214,0.351-0.025,0.86,0.424,1.136l2.867,1.793 l0.792-1.277L104.333,140.488z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M105.208,136.241c-0.44-0.293-0.989-0.253-1.225,0.091c-0.244,0.338-0.055,0.873,0.381,1.166l2.804,1.897 c0.254-0.442,0.568-0.844,0.851-1.269L105.208,136.241z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M110.574,150.152c-0.565-0.312-1.202-0.236-1.423,0.166c-0.22,0.403,0.061,0.979,0.625,1.29l3.616,2.001 l0.8-1.445L110.574,150.152z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M111.728,145.743c-0.552-0.335-1.195-0.287-1.439,0.107c-0.243,0.394,0.006,0.983,0.559,1.319l3.524,2.154 l0.886-1.418L111.728,145.743z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M112.228,140.982c-0.539-0.357-1.191-0.331-1.46,0.057c-0.266,0.394-0.014,1.021,0.521,1.375l3.435,2.301 c0.285-0.494,0.614-0.959,0.942-1.425L112.228,140.982z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M283.931,118.51c0.291-0.284,0.332-0.721,0.088-0.974c-3.11-3.241-6.492-6.204-9.931-9.089 c-0.277-0.216-0.711-0.129-0.965,0.19l-6.271,7.822c3.441,2.833,6.808,5.776,9.872,9.023L283.931,118.51z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M286.081,114.767c0.246-0.241,0.271-0.615,0.059-0.836c-2.772-2.765-5.668-5.406-8.682-7.903 c-0.234-0.2-0.601-0.146-0.816,0.12l-2.802,3.426c3.15,2.632,6.218,5.368,9.093,8.304L286.081,114.767z"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M278.819,104.171c-0.752,0.168-1.483,0.321-2.243,0.521c3.813,3.151,7.538,6.424,10.952,10.013 l0.373-2.256C285.009,109.544,281.974,106.789,278.819,104.171z"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M287.989,103.179c-2.547-2.313-6.473-1.986-8.87,0.498c3.192,2.651,6.272,5.439,9.198,8.386 C290.62,109.385,290.505,105.528,287.989,103.179z"
                  }), t("polygon", {
                    fill: "#2D948D",
                    points: "297.526,92.737 289.062,100.857 290.187,101.913 \t\t"
                  }), t("polygon", {
                    fill: "#2D948D",
                    points: "288.077,105.292 285.897,103.267 288.853,99.945 291.108,102.04 \t\t"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M276.132,109.744l-0.295-0.252c-0.128-0.109-0.134-0.315-0.012-0.462l1.473-1.764 c0.125-0.148,0.328-0.177,0.461-0.063l0.303,0.259c0.131,0.111,0.137,0.32,0.015,0.467l-1.486,1.751 C276.464,109.825,276.261,109.853,276.132,109.744z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M277.862,111.215l-0.297-0.251c-0.127-0.108-0.129-0.313-0.004-0.459l1.506-1.733 c0.125-0.145,0.332-0.17,0.466-0.059l0.303,0.259c0.131,0.11,0.137,0.317,0.01,0.461l-1.521,1.723 C278.196,111.298,277.991,111.324,277.862,111.215z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M279.554,112.733l-0.283-0.269c-0.125-0.114-0.119-0.323,0.01-0.465l1.539-1.705 c0.13-0.142,0.332-0.162,0.459-0.042l0.289,0.274c0.127,0.117,0.125,0.329-0.006,0.469l-1.555,1.691 C279.88,112.829,279.675,112.848,279.554,112.733z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M281.208,114.29l-0.285-0.266c-0.121-0.116-0.117-0.321,0.014-0.461l1.574-1.677 c0.131-0.14,0.338-0.155,0.465-0.037l0.289,0.272c0.127,0.117,0.121,0.325-0.01,0.463l-1.588,1.663 C281.534,114.387,281.329,114.404,281.208,114.29z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M282.864,115.844l-0.284-0.268c-0.121-0.115-0.113-0.318,0.02-0.454l1.605-1.645 c0.133-0.138,0.344-0.153,0.469-0.035l0.293,0.273c0.119,0.124,0.104,0.334-0.027,0.471l-1.621,1.631 C283.185,115.955,282.981,115.965,282.864,115.844z"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "269.318,116.844 268.594,116.222 273.729,109.962 274.508,110.628 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "270.865,118.163 270.139,117.544 275.393,111.382 276.173,112.045 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "272.404,119.492 271.689,118.86 277.06,112.798 277.825,113.478 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "273.883,120.889 273.188,120.235 278.671,114.274 279.417,114.978 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "275.367,122.28 274.67,121.628 280.263,115.772 281.013,116.475 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "276.806,123.716 276.146,123.028 281.849,117.281 282.56,118.019 \t\t"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M285.558,74.606c-1.596,0.349-3.135,0.659-4.717,1.084c1.801,1.157,3.535,2.418,5.301,3.628 L285.558,74.606z"
                  }), t("polygon", {
                    fill: "#62381B",
                    points: "291.069,66.427 283.737,75.603 285.163,76.589 \t\t"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M280.524,75.962l-5.909,9.106c1.729,1.101,3.383,2.316,5.073,3.472l6.316-8.831 C284.179,78.458,282.392,77.152,280.524,75.962z"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M259.082,119.146c-1.836-1.196-3.547-2.577-5.447-3.671l17.441-27.5c2.508,1.478,4.812,3.266,7.229,4.885 L259.082,119.146z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M255.939,115.542l-0.483-0.319c-0.078-0.049-0.076-0.187,0.004-0.309l15.518-23.812 c0.08-0.123,0.228-0.172,0.324-0.109l0.625,0.412c0.098,0.067,0.109,0.22,0.027,0.342l-15.732,23.67 C256.139,115.54,256.014,115.596,255.939,115.542z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M257.311,116.502l-0.477-0.333c-0.074-0.05-0.068-0.191,0.012-0.312l15.912-23.55 c0.082-0.121,0.229-0.166,0.324-0.1l0.614,0.425c0.097,0.069,0.107,0.221,0.023,0.341l-16.125,23.405 C257.512,116.499,257.385,116.553,257.311,116.502z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M258.686,117.454l-0.479-0.33c-0.074-0.052-0.068-0.19,0.016-0.309l16.303-23.282 c0.084-0.122,0.23-0.163,0.328-0.096l0.613,0.427c0.098,0.067,0.107,0.217,0.021,0.337l-16.514,23.132 C258.891,117.452,258.762,117.506,258.686,117.454z"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M279.286,91.76c-2.513-1.705-4.93-3.556-7.546-5.102l5.996-9.478c2.832,1.683,5.462,3.678,8.181,5.534 L279.286,91.76z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M277.405,79.762l-0.266-0.167c-0.117-0.071-0.162-0.206-0.102-0.302l0.729-1.139 c0.062-0.096,0.203-0.114,0.32-0.041l0.271,0.169c0.115,0.072,0.162,0.208,0.101,0.302l-0.734,1.138 C277.665,79.817,277.521,79.835,277.405,79.762z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M278.515,80.456l-0.266-0.166c-0.115-0.073-0.16-0.208-0.099-0.301l0.738-1.135 c0.062-0.093,0.203-0.111,0.32-0.038l0.27,0.169c0.119,0.071,0.158,0.215,0.099,0.307l-0.746,1.13 C278.769,80.518,278.632,80.525,278.515,80.456z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M279.595,81.196l-0.26-0.178c-0.111-0.079-0.152-0.216-0.092-0.31l0.75-1.128 c0.062-0.093,0.204-0.104,0.317-0.025l0.262,0.181c0.113,0.078,0.154,0.217,0.093,0.31l-0.754,1.123 C279.847,81.262,279.706,81.275,279.595,81.196z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M280.671,81.941l-0.258-0.179c-0.113-0.077-0.152-0.215-0.091-0.309l0.761-1.12 c0.062-0.092,0.205-0.104,0.317-0.025l0.263,0.182c0.11,0.078,0.153,0.217,0.09,0.309l-0.767,1.116 C280.925,82.007,280.782,82.019,280.671,81.941z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M281.747,82.687l-0.261-0.18c-0.11-0.077-0.149-0.214-0.088-0.307l0.771-1.112 c0.062-0.092,0.205-0.104,0.317-0.024l0.263,0.182c0.112,0.078,0.151,0.216,0.088,0.31l-0.773,1.108 C282.001,82.754,281.856,82.764,281.747,82.687z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M282.821,83.434l-0.26-0.18c-0.11-0.076-0.147-0.214-0.084-0.306l0.777-1.105 c0.065-0.093,0.209-0.103,0.324-0.024l0.26,0.182c0.113,0.079,0.152,0.218,0.088,0.31l-0.787,1.101 C283.075,83.5,282.931,83.512,282.821,83.434z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M283.896,84.183l-0.26-0.182c-0.111-0.077-0.148-0.214-0.082-0.304l0.787-1.099 c0.068-0.093,0.211-0.102,0.324-0.021l0.262,0.183c0.113,0.077,0.152,0.214,0.084,0.305l-0.795,1.095 C284.151,84.25,284.007,84.26,283.896,84.183z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M278.052,94.946c-2.88-2.078-5.767-4.161-8.819-5.988c-0.215-0.136-0.276-0.428-0.137-0.652l5.576-9.021 c0.141-0.226,0.442-0.291,0.68-0.143c3.319,1.994,6.47,4.255,9.604,6.521c0.221,0.169,0.27,0.48,0.108,0.692l-6.356,8.49 C278.548,95.057,278.255,95.102,278.052,94.946z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M278.089,92.934c-2.271-1.53-4.45-3.199-6.8-4.61c-0.207-0.13-0.269-0.409-0.134-0.622l4.314-6.812 c0.137-0.213,0.425-0.274,0.649-0.137c2.506,1.513,4.842,3.287,7.264,4.928c0.215,0.146,0.258,0.45,0.109,0.652l-4.775,6.497 C278.565,93.036,278.292,93.071,278.089,92.934z"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M280.562,89.232c-1.365,1.853-3.955,2.326-5.786,1.057c-1.807-1.303-2.373-3.794-1.143-5.749 c1.221-1.939,3.89-2.534,5.839-1.14C281.438,84.767,281.925,87.378,280.562,89.232z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M279.394,88.42c-0.887,1.234-2.596,1.546-3.818,0.697c-1.218-0.854-1.55-2.562-0.734-3.824 c0.836-1.29,2.554-1.616,3.833-0.722C279.956,85.463,280.278,87.186,279.394,88.42z"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M277.571,87.243c-0.18,0.264-0.538,0.33-0.801,0.148c-0.264-0.183-0.33-0.543-0.151-0.81 c0.178-0.264,0.536-0.331,0.803-0.146C277.685,86.617,277.753,86.981,277.571,87.243z"
                  }), t("polygon", {
                    fill: "#2D948D",
                    points: "277.161,86.991 276.858,86.782 278.202,84.803 278.511,85.017 \t\t"
                  }), t("rect", {
                    x: "277.22",
                    y: "86.777",
                    transform: "matrix(0.9294 -0.3691 0.3691 0.9294 -12.8831 108.6015)",
                    fill: "#2D948D",
                    width: "0.368",
                    height: "2.391"
                  }), t("path", {
                    fill: "#69C8C3",
                    d: "M265.844,113.257c-0.314-0.241-0.807-0.115-1.104,0.279l-4.549,6.069l1.076,0.831 c1.555-1.818,4.504-2.064,6.51-0.279c2.08,1.697,2.318,4.639,0.771,6.472l0.604,0.565c1.763-1.671,4.675-1.562,6.506,0.403 c1.915,1.886,1.801,4.887,0.099,6.521l0.546,0.622c0.705-0.533,1.537-0.823,2.396-0.875l4.683-3.919 C278.159,123.76,272.271,118.151,265.844,113.257z"
                  }), t("polygon", {
                    fill: "#2D948D",
                    points: "256.67,92.767 254.25,97.355 259.162,100.097 261.803,95.632 \t\t"
                  }), t("polygon", {
                    fill: "#2D948D",
                    points: "253.797,98.21 251.377,102.799 256.027,105.396 258.668,100.931 \t\t"
                  }), t("polygon", {
                    fill: "#62381B",
                    points: "251.123,103.279 248.701,107.868 253.109,110.327 255.752,105.863 \t\t"
                  }), t("polygon", {
                    fill: "#2D948D",
                    points: "261.326,90.539 257.902,93.48 260.555,94.953 \t\t"
                  }), t("polygon", {
                    fill: "#2D948D",
                    points: "258.34,91.165 256.66,92.792 257.877,93.471 \t\t"
                  }), t("polygon", {
                    fill: "#2D948D",
                    points: "262.328,93.379 260.576,94.969 261.787,95.655 \t\t"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M258.586,96.507c0.174-0.309,0.098-0.679-0.176-0.828c-0.271-0.151-0.63-0.022-0.8,0.286l-0.819,1.483 l0.961,0.534L258.586,96.507z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M255.639,101.719c0.174-0.309,0.107-0.674-0.15-0.816c-0.256-0.143-0.604-0.007-0.776,0.304l-0.818,1.482 l0.912,0.506L255.639,101.719z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M252.912,106.54c0.176-0.309,0.116-0.667-0.127-0.804c-0.246-0.136-0.582,0.005-0.755,0.316l-0.817,1.479 l0.867,0.481L252.912,106.54z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M248.078,107.288l-1.982,3.828c1.893,1.051,3.822,2.044,5.658,3.188l2.229-3.692 C252.064,109.419,250.053,108.382,248.078,107.288z"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M200.871,73.372l-0.042,5.188c1.962-0.034,3.921,0.072,5.878,0.189L207,73.571 C204.959,73.45,202.918,73.338,200.871,73.372z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M200.826,79.102l-0.041,5.188c1.867-0.034,3.732,0.071,5.596,0.183l0.295-5.181 C204.729,79.177,202.777,79.067,200.826,79.102z"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M200.781,84.833l-0.042,5.188c1.777-0.035,3.547,0.066,5.318,0.172l0.293-5.18 C204.496,84.902,202.641,84.798,200.781,84.833z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M200.736,90.564l-0.042,5.188c1.682-0.037,3.361,0.063,5.039,0.164l0.293-5.181 C204.264,90.629,202.502,90.527,200.736,90.564z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M199.957,95.416l-0.004,4.312c2.167-0.044,4.328,0.082,6.49,0.208l0.285-4.304 C204.473,95.501,202.217,95.371,199.957,95.416z"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M204.111,69.201c-0.602,1.37-1.188,2.794-1.758,4.202c1.058-0.021,2.111,0.061,3.162,0.114L204.111,69.201 z"
                  }), t("polygon", {
                    fill: "#2D948D",
                    points: "204.146,67.22 203.66,71.018 204.367,71.054 \t\t"
                  }), t("polygon", {
                    fill: "#2D948D",
                    points: "201.648,71.162 200.873,73.399 202.328,73.404 \t\t"
                  }), t("polygon", {
                    fill: "#2D948D",
                    points: "206.402,71.323 205.545,73.521 206.996,73.598 \t\t"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M204.443,75.775c0.015-0.355-0.235-0.655-0.561-0.673c-0.324-0.02-0.592,0.256-0.603,0.613l-0.047,1.694 l1.148,0.057L204.443,75.775z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M204.238,81.31c0.017-0.354-0.225-0.654-0.532-0.671c-0.31-0.02-0.568,0.256-0.578,0.613l-0.047,1.694 l1.098,0.056L204.238,81.31z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M204.025,87.059c0.015-0.354-0.213-0.651-0.508-0.669c-0.295-0.019-0.539,0.258-0.549,0.615l-0.047,1.693 l1.041,0.055L204.025,87.059z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M203.82,92.595c0.015-0.354-0.2-0.652-0.479-0.669c-0.279-0.019-0.514,0.259-0.523,0.615l-0.047,1.693 l0.988,0.053L203.82,92.595z"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M225.625,76.036l-1.062,5.078c1.933,0.359,3.838,0.823,5.73,1.344l1.305-5.021 C229.625,76.895,227.639,76.412,225.625,76.036z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M224.455,81.645l-1.062,5.08c1.84,0.34,3.658,0.781,5.461,1.279l1.306-5.021 C228.273,82.463,226.377,82.002,224.455,81.645z"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M223.283,87.254l-1.062,5.079c1.75,0.321,3.477,0.744,5.193,1.219l1.305-5.021 C226.922,88.033,225.113,87.592,223.283,87.254z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M222.111,92.863l-1.061,5.08c1.656,0.302,3.293,0.704,4.922,1.153l1.303-5.021 C225.568,93.604,223.85,93.184,222.111,92.863z"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M229.627,72.574l-2.553,3.786c1.038,0.192,2.062,0.45,3.081,0.727L229.627,72.574z"
                  }), t("polygon", {
                    fill: "#2D948D",
                    points: "230.049,70.639 228.826,74.273 229.512,74.442 \t\t"
                  }), t("polygon", {
                    fill: "#2D948D",
                    points: "226.824,74.023 225.623,76.062 227.047,76.356 \t\t"
                  }), t("polygon", {
                    fill: "#2D948D",
                    points: "231.455,75.111 230.182,77.096 231.59,77.46 \t\t"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M228.66,79.086c0.082-0.345-0.104-0.688-0.418-0.771c-0.312-0.083-0.638,0.155-0.716,0.498l-0.379,1.65 l1.117,0.27L228.66,79.086z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M227.373,84.472c0.082-0.343-0.095-0.686-0.396-0.764c-0.299-0.08-0.61,0.162-0.688,0.503l-0.379,1.651 l1.067,0.259L227.373,84.472z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M226.033,90.071c0.081-0.346-0.08-0.686-0.367-0.76c-0.285-0.076-0.586,0.169-0.662,0.51l-0.381,1.65 l1.018,0.245L226.033,90.071z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M224.744,95.457c0.082-0.344-0.07-0.681-0.343-0.753c-0.271-0.074-0.561,0.174-0.639,0.516l-0.379,1.65 l0.965,0.233L224.744,95.457z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M220.289,97.555l-0.851,4.227c2.135,0.393,4.244,0.907,6.34,1.485l1.121-4.164 C224.713,98.502,222.514,97.966,220.289,97.555z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M222.227,94.549c-5.447-1.216-10.996-1.904-16.555-2.202l0.057-1.075 c5.617,0.302,11.222,0.998,16.724,2.226L222.227,94.549z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M224.729,82.824c-6.055-1.346-12.223-2.118-18.406-2.45l0.06-1.074c6.24,0.336,12.465,1.115,18.572,2.474 L224.729,82.824z"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M226.566,96.067l3.383-13.113l0.255,1.218c0.854,4.009,2.961,8.074,6.114,11.022l-0.192,0.263 l-0.191,0.264c-2.945-2.735-4.994-6.473-6.041-10.227l-2.646,10.06c7.899,2.077,15.596,5.036,22.825,8.783l2.824-5.405 c-3.688,1.937-7.746,1.964-11.521,0.426c-1.885-0.814-3.76-1.915-5.441-3.637l0.191-0.264l0.192-0.263 c1.644,1.677,3.478,2.748,5.312,3.545c3.953,1.611,8.199,1.439,11.858-0.825l0.851-0.51l-4.117,7.784 C242.766,101.224,234.76,98.199,226.566,96.067z"
                  }), t("polygon", {
                    fill: "#2D948D",
                    points: "228.467,96.098 230.76,87.796 231.324,87.94 228.99,96.23 \t\t"
                  }), t("polygon", {
                    fill: "#2D948D",
                    points: "230.49,96.677 232.229,90.816 232.773,90.99 231.004,96.84 \t\t"
                  }), t("polygon", {
                    fill: "#2D948D",
                    points: "232.498,97.31 233.818,93.156 234.354,93.323 233.014,97.472 \t\t"
                  }), t("polygon", {
                    fill: "#2D948D",
                    points: "234.508,97.937 235.508,94.993 236.033,95.17 235.02,98.109 \t\t"
                  }), t("polygon", {
                    fill: "#2D948D",
                    points: "236.486,98.658 237.314,96.364 237.832,96.556 236.992,98.846 \t\t"
                  }), t("polygon", {
                    fill: "#2D948D",
                    points: "238.461,99.391 239.006,97.966 239.52,98.155 238.969,99.578 \t\t"
                  }), t("polygon", {
                    fill: "#2D948D",
                    points: "240.428,100.139 241,98.725 241.502,98.942 240.924,100.355 \t\t"
                  }), t("polygon", {
                    fill: "#2D948D",
                    points: "242.357,100.974 242.973,99.534 243.475,99.75 242.854,101.186 \t\t"
                  }), t("polygon", {
                    fill: "#2D948D",
                    points: "244.289,101.8 245.104,99.992 245.609,100.207 244.785,102.012 \t\t"
                  }), t("polygon", {
                    fill: "#2D948D",
                    points: "246.193,102.688 247.508,99.917 248.002,100.16 246.676,102.925 \t\t"
                  }), t("polygon", {
                    fill: "#2D948D",
                    points: "248.078,103.614 250.094,99.562 250.598,99.809 248.561,103.851 \t\t"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M297.735,159.149l1.947-0.815c1.814-0.748,2.83-2.59,2.123-4.047l-0.529-1.146l-8.881,4.991 c0.424,0.905,0.855,1.809,1.205,2.748l2.146-0.896c-0.168-0.421,0.141-0.953,0.688-1.188 C296.979,158.561,297.562,158.719,297.735,159.149z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M296.433,158.795c0.547-0.233,1.129-0.076,1.303,0.354l-1.989,0.833 C295.577,159.561,295.886,159.029,296.433,158.795z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M291.202,154.012c1.02-0.518,2.221-0.319,2.588,0.486c0.369,0.81-0.181,1.854-1.229,2.34 c-1.047,0.484-2.182,0.256-2.531-0.516C289.681,155.555,290.163,154.539,291.202,154.012z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M307.587,151.399c1.795-0.802,2.651-2.75,1.916-4.354c-4.027-8.381-9.082-16.254-14.892-23.502 c-1.073-1.398-3.229-1.433-4.729-0.147l-12.662,10.757c1.193,1.341,2.242,2.806,3.389,4.191l0.515-0.464 c1.467-1.128,3.332-1.104,4.151,0.062c0.83,1.16,0.281,2.933-1.229,3.964l-0.603,0.349c2.433,3.65,4.796,7.364,6.742,11.307 l0.59-0.367c1.613-0.84,3.498-0.515,4.119,0.77c0.59,1.299-0.278,2.958-1.949,3.709l-0.649,0.237l0.147,0.326L307.587,151.399z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M281.681,138.615c0.924-0.695,2.086-0.672,2.604,0.049c0.516,0.721,0.17,1.838-0.777,2.499 c-0.945,0.66-2.115,0.643-2.607-0.045C280.409,140.432,280.761,139.309,281.681,138.615z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M302.581,146.335c0.606,1.203,1.309,2.36,1.848,3.598c0.133,0.291,0.518,0.396,0.857,0.235l2.387-1.131 c0.34-0.159,0.504-0.534,0.364-0.835c-0.469-1.094-1.065-2.127-1.602-3.188c-0.154-0.294-0.547-0.392-0.881-0.216L302.581,146.335 z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M299.653,141.063c0.673,1.167,1.396,2.307,2.037,3.493c0.146,0.283,0.535,0.372,0.867,0.192l2.324-1.251 c0.33-0.178,0.477-0.562,0.324-0.855c-0.55-1.056-1.187-2.062-1.773-3.097c-0.166-0.285-0.562-0.363-0.887-0.172L299.653,141.063z "
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M296.46,135.95l2.221,3.379c0.158,0.277,0.551,0.344,0.873,0.148l2.256-1.37 c0.322-0.194,0.449-0.585,0.283-0.872l-1.939-2.997c-0.182-0.278-0.579-0.333-0.893-0.126L296.46,135.95z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M293.007,131.01l2.381,3.267c0.191,0.256,0.584,0.302,0.896,0.091l2.184-1.482 c0.312-0.214,0.42-0.61,0.223-0.875l-2.082-2.896c-0.192-0.27-0.596-0.306-0.897-0.083L293.007,131.01z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M289.306,126.253l2.531,3.149c0.201,0.249,0.604,0.268,0.906,0.04l2.104-1.595 c0.299-0.228,0.377-0.622,0.17-0.881l-2.219-2.795c-0.205-0.259-0.607-0.275-0.898-0.035L289.306,126.253z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M296.007,149.77c0.568,1.125,1.229,2.207,1.729,3.367c0.125,0.271,0.502,0.363,0.845,0.201l2.387-1.129 c0.34-0.161,0.512-0.521,0.383-0.803c-0.438-1.028-1.002-1.995-1.506-2.992c-0.143-0.274-0.529-0.357-0.865-0.184L296.007,149.77z "
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M293.267,144.833c0.629,1.096,1.31,2.159,1.908,3.271c0.137,0.266,0.518,0.337,0.85,0.159l2.326-1.251 c0.33-0.179,0.484-0.548,0.342-0.823c-0.516-0.991-1.114-1.935-1.666-2.906c-0.155-0.268-0.545-0.331-0.871-0.139L293.267,144.833 z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M290.276,140.046l2.08,3.164c0.148,0.26,0.531,0.31,0.855,0.115l2.256-1.369 c0.322-0.195,0.459-0.571,0.303-0.841l-1.821-2.81c-0.169-0.264-0.562-0.307-0.873-0.099L290.276,140.046z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M287.044,135.418l2.229,3.058c0.181,0.239,0.564,0.271,0.875,0.062l2.183-1.482 c0.313-0.214,0.43-0.597,0.244-0.847l-1.957-2.718c-0.181-0.251-0.572-0.276-0.875-0.051L287.044,135.418z"
                  }), t("polygon", {
                    fill: "#62381B",
                    points: "286.702,128.504 288.526,130.809 279.954,137.489 278.306,135.406 \t\t"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M287.86,127.386c5.896,7.276,11.074,15.188,15.045,23.693l0.478-0.227 c-3.988-8.545-9.187-16.493-15.111-23.804L287.86,127.386z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M237.074,99.483l2.895-7.84l-0.682-0.253l1.571-4.338c0.072-0.199,0.271-0.308,0.447-0.243 c0.176,0.065,0.26,0.277,0.187,0.478l-1.33,3.609l0.688,0.255l-3.209,8.541c-0.074,0.199-0.262,0.313-0.418,0.255 C237.066,99.89,237.002,99.681,237.074,99.483z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M243.777,99.071c0.355-0.819,0.099-1.717-0.573-2.007c-1.103-0.5-2.224-0.954-3.367-1.351 c-0.688-0.254-1.496,0.219-1.806,1.057l-2.872,7.793c-0.31,0.838-0.06,1.703,0.559,1.929c1.031,0.354,2.035,0.761,3.022,1.211 c0.601,0.26,1.378-0.192,1.732-1.012L243.777,99.071z"
                  }), t("path", {
                    fill: "#69C8C3",
                    d: "M240.725,92.645l-0.428,1.128c-0.314,0.837-0.014,1.719,0.676,1.973l1.389,0.559 c0.673,0.292,1.498-0.141,1.849-0.964l0.469-1.11C243.385,93.644,242.068,93.111,240.725,92.645z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M247.867,86.675c0.35-0.821,0.022-1.751-0.729-2.073l-1.543-0.62c-0.768-0.285-1.646,0.163-1.961,0.998 l-2.783,7.334c1.349,0.469,2.668,1.003,3.965,1.59L247.867,86.675z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M241.369,97.605c-0.08,0.197-0.271,0.301-0.429,0.232c-0.16-0.062-0.229-0.268-0.149-0.466 c0.078-0.195,0.274-0.312,0.436-0.248C241.385,97.194,241.449,97.41,241.369,97.605z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M240.803,99.01c-0.08,0.196-0.271,0.302-0.426,0.234c-0.158-0.062-0.226-0.267-0.146-0.466 c0.078-0.196,0.271-0.312,0.431-0.249C240.818,98.599,240.881,98.813,240.803,99.01z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M240.234,100.414c-0.078,0.199-0.268,0.306-0.422,0.237c-0.153-0.062-0.219-0.265-0.141-0.464 c0.078-0.196,0.271-0.312,0.428-0.249C240.252,100.005,240.314,100.219,240.234,100.414z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M239.668,101.82c-0.08,0.197-0.269,0.303-0.418,0.237c-0.152-0.062-0.217-0.264-0.138-0.462 c0.078-0.197,0.269-0.314,0.423-0.254C239.688,101.41,239.746,101.623,239.668,101.82z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M239.1,103.225c-0.08,0.196-0.264,0.304-0.414,0.238c-0.149-0.061-0.211-0.262-0.133-0.461 c0.078-0.194,0.268-0.313,0.42-0.252C239.123,102.816,239.18,103.028,239.1,103.225z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M238.533,104.63c-0.08,0.197-0.265,0.305-0.41,0.24c-0.148-0.06-0.209-0.26-0.129-0.459 c0.077-0.197,0.266-0.313,0.416-0.255C238.557,104.22,238.613,104.432,238.533,104.63z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M237.967,106.034c-0.082,0.198-0.262,0.305-0.406,0.242c-0.146-0.061-0.205-0.259-0.127-0.458 c0.08-0.195,0.267-0.314,0.412-0.255C237.992,105.625,238.045,105.836,237.967,106.034z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M328.022,199.462l-0.279-0.241l-0.395-0.334l-0.016,3.687l0.307-0.256l0.283-0.236l0.27,0.258l1.445,1.406 c1.498-0.906,2.985-1.846,4.481-2.82c-1.522-1.004-3.049-1.974-4.575-2.909l-1.248,1.19L328.022,199.462z"
                  }), t("polygon", {
                    fill: "#62381B",
                    points: "327.349,198.886 327.308,198.851 327.294,202.606 327.332,202.573 \t\t"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M300.239,205.969l-0.387,0.463l0.158-2.922l0.66,0.043c3.26,0.131,5.305-1.117,5.287-2.755 c0.004-1.638-1.988-2.917-5.228-2.835l-0.662,0.032l-0.139-2.923c8.17,0.313,16.352,0.801,24.537,1.466 c0.987,0.754,1.905,1.526,2.84,2.313l-0.015,3.755c-1.125,0.951-2.346,1.873-3.53,2.771c-6.08,0.42-12.154,0.738-18.223,0.955 c-0.457-0.748-1.236-1.301-2.142-1.342C302.253,204.938,300.731,205.202,300.239,205.969z M324.94,202.237 c0.781,0.016,1.416-0.561,1.418-1.285c0.002-0.724-0.627-1.309-1.408-1.305c-0.778,0.004-1.416,0.578-1.418,1.283 S324.16,202.222,324.94,202.237z"
                  }), t("g", {
                    id: "windmill"
                  }, t("path", {
                    fill: "#62381B",
                    d: "M342.354,213.683l0.406-0.349c-3.592-4.551-7.33-8.772-11.354-12.639l-0.369,0.35 C335.033,204.913,338.798,209.136,342.354,213.683z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M333.246,204.233c0.527-0.461,1.005-0.93,1.5-1.404c3.168,3.004,6.275,6.23,9.248,9.654l-2.549,2.195 C338.903,210.997,336.048,207.507,333.246,204.233z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M319.487,190.436l-0.336,0.35c4.137,3.119,8.25,6.587,12.096,10.396l0.369-0.351 C327.765,197.021,323.642,193.552,319.487,190.436z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M329.489,197.536l-1.477,1.406c-3.234-2.766-6.695-5.312-10.066-7.646l2.109-2.202 C323.358,191.683,326.36,194.505,329.489,197.536z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M318.69,210.899l0.332,0.354c4.23-3.043,8.381-6.444,12.289-10.188l-0.365-0.357 C327.063,204.45,322.89,207.853,318.69,210.899z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M327.908,202.601c0.48,0.469,0.992,0.942,1.449,1.422c-3.15,2.99-6.213,5.771-9.533,8.317l-2.092-2.229 C321.187,207.829,324.58,205.321,327.908,202.601z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M342.728,188.82l-0.4-0.354c-3.602,4.409-7.317,8.497-11.307,12.24l0.367,0.355 C335.378,197.318,339.108,193.232,342.728,188.82z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M334.851,198.974l-1.465-1.427c2.826-3.232,5.762-6.692,8.34-10.341l2.529,2.232 C341.164,192.829,338.138,196.006,334.851,198.974z"
                  })), t("path", {
                    fill: "#62381B",
                    d: "M324.942,201.685c-0.449-0.006-0.811-0.345-0.807-0.748c0-0.408,0.364-0.738,0.812-0.738 c0.449,0,0.81,0.336,0.81,0.75C325.755,201.36,325.392,201.692,324.942,201.685z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M314.328,164.747c-1.006-3.182-2.063-6.356-3.36-9.436l0.668-0.27c1.305,3.098,2.369,6.291,3.383,9.491 L314.328,164.747z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M314.091,163.798c1.155-1.294,2.217-2.59,3.312-3.931l2.262-0.773l-0.967-2.771l-2.244,0.826 c-1.655-0.365-3.393-0.665-5.084-0.947C312.414,158.683,313.21,161.26,314.091,163.798z"
                  }), t("path", {
                    fill: "#EE7D8F",
                    d: "M313.642,163.831c-0.867-2.433-1.648-4.902-2.654-7.283c1.781,0.292,3.574,0.616,5.316,1l0.141,0.029 l0.144-0.053l1.807-0.658l0.697,1.994l-1.818,0.629l-0.145,0.05l-0.091,0.113C315.912,161.08,314.817,162.462,313.642,163.831z"
                  }), t("path", {
                    fill: "#EE7D8F",
                    d: "M295.681,170.51c-0.846-2.663-1.723-5.326-2.818-7.903l18.396-7.412c1.299,3.086,2.36,6.27,3.369,9.46 L295.681,170.51z"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "310.462,162.079 309.673,159.814 313.56,158.389 314.378,160.732 \t\t"
                  }), t("polygon", {
                    fill: "#62381B",
                    points: "310.757,161.686 310.144,159.935 313.285,158.79 313.912,160.591 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "310.269,161.012 310.185,160.767 313.731,159.501 313.821,159.755 \t\t"
                  }), t("rect", {
                    x: "311.571",
                    y: "159.894",
                    transform: "matrix(-0.3292 -0.9443 0.9443 -0.3292 264.4806 507.955)",
                    fill: "#FFFFFF",
                    width: "2.183",
                    height: "0.283"
                  }), t("rect", {
                    x: "310.533",
                    y: "160.266",
                    transform: "matrix(-0.3297 -0.9441 0.9441 -0.3297 262.9308 507.4868)",
                    fill: "#FFFFFF",
                    width: "2.162",
                    height: "0.284"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "304.632,160.724 304.03,159.245 306.714,158.192 307.326,159.711 \t\t"
                  }), t("polygon", {
                    fill: "#62381B",
                    points: "304.831,160.454 304.364,159.311 306.53,158.465 307.005,159.632 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "304.476,160.022 304.409,159.861 306.856,158.92 306.923,159.084 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "305.573,163.44 305.048,161.933 307.757,160.95 308.296,162.495 \t\t"
                  }), t("polygon", {
                    fill: "#62381B",
                    points: "305.78,163.174 305.374,162.01 307.562,161.219 307.976,162.408 \t\t"
                  }), t("rect", {
                    x: "306.565",
                    y: "160.892",
                    transform: "matrix(-0.3381 -0.9411 0.9411 -0.3381 257.6869 505.6384)",
                    fill: "#FFFFFF",
                    width: "0.173",
                    height: "2.623"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M306.507,166.158c-0.138-0.514-0.343-1.008-0.51-1.512l2.729-0.914c0.174,0.517,0.383,1.022,0.523,1.551 L306.507,166.158z"
                  }), t("polygon", {
                    fill: "#62381B",
                    points: "306.724,165.896 306.324,164.729 308.531,163.995 308.938,165.187 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "306.405,165.444 306.347,165.279 308.837,164.464 308.896,164.632 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "300.192,162.392 299.618,160.976 302.3,159.923 302.892,161.378 \t\t"
                  }), t("polygon", {
                    fill: "#62381B",
                    points: "300.396,162.129 299.948,161.035 302.114,160.188 302.569,161.308 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "300.048,161.717 299.985,161.565 302.431,160.623 302.495,160.781 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "301.095,164.993 300.593,163.55 303.3,162.567 303.815,164.049 \t\t"
                  }), t("polygon", {
                    fill: "#62381B",
                    points: "301.304,164.735 300.915,163.619 303.104,162.829 303.501,163.969 \t\t"
                  }), t("rect", {
                    x: "302.121",
                    y: "162.477",
                    transform: "matrix(-0.3322 -0.9432 0.9432 -0.3322 248.1099 503.2378)",
                    fill: "#FFFFFF",
                    width: "0.165",
                    height: "2.619"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M301.989,167.597c-0.129-0.492-0.327-0.966-0.487-1.448l2.731-0.914c0.164,0.495,0.367,0.979,0.5,1.487 L301.989,167.597z"
                  }), t("polygon", {
                    fill: "#62381B",
                    points: "302.21,167.344 301.829,166.225 304.034,165.489 304.425,166.633 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "301.896,166.911 301.841,166.754 304.331,165.939 304.388,166.1 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "295.757,164.063 295.206,162.708 298.124,161.564 298.69,162.96 \t\t"
                  }), t("polygon", {
                    fill: "#62381B",
                    points: "295.96,163.807 295.532,162.76 297.122,162.139 297.556,163.203 \t\t"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M298.269,162.315c-0.117-0.284-0.545-0.388-0.99-0.262l0.453,1.108 C298.147,162.959,298.386,162.599,298.269,162.315z"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "295.622,163.417 295.562,163.27 298.347,162.197 298.409,162.349 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "296.616,166.552 296.136,165.17 299.085,164.101 299.577,165.522 \t\t"
                  }), t("polygon", {
                    fill: "#62381B",
                    points: "296.829,166.299 296.458,165.232 298.063,164.652 298.44,165.737 \t\t"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M299.19,164.861c-0.102-0.289-0.52-0.408-0.969-0.29l0.393,1.129 C299.038,165.507,299.29,165.151,299.19,164.861z"
                  }), t("rect", {
                    x: "297.819",
                    y: "163.844",
                    transform: "matrix(-0.3162 -0.9487 0.9487 -0.3162 235.2531 500.2312)",
                    fill: "#FFFFFF",
                    width: "0.161",
                    height: "2.983"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M297.472,169.04c-0.121-0.473-0.312-0.922-0.467-1.385l2.973-0.993c0.16,0.476,0.355,0.939,0.482,1.426 L297.472,169.04z"
                  }), t("polygon", {
                    fill: "#62381B",
                    points: "297.696,168.792 297.329,167.723 298.95,167.185 299.321,168.272 \t\t"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M300.087,167.417c-0.103-0.29-0.523-0.414-0.979-0.309l0.388,1.132 C299.925,168.057,300.196,167.706,300.087,167.417z"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "297.388,168.381 297.335,168.232 300.171,167.303 300.228,167.458 \t\t"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M324.662,182.656l0.179-0.068c1.116-0.468,1.813-1.754,1.612-3.145c-0.219-1.498-1.5-2.526-2.809-2.472 c-0.631-0.05-2.057-0.326-2.09-1.986l-1.906,0.394c-0.061,0.034,0.299,1.304,0.564,2.205l-0.06,0.011 c0.402,1.853,0.644,3.731,0.914,5.606l0.062-0.009c0.047,0.937,0.125,2.263,0.192,2.272l1.933-0.232 C322.714,183.572,324.132,182.863,324.662,182.656z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M321.789,184.915l0.812-0.101c-0.199-1.683,1.367-2.43,1.854-2.623l0.021-0.008l0.014-0.004l0.131-0.049 h-0.002c0.91-0.386,1.453-1.48,1.291-2.598c-0.164-1.221-1.203-2.096-2.256-2.056h-0.033l-0.034-0.001 c-1.339-0.105-2.271-0.802-2.515-1.885l-1.711,0.348c0.644,3.007,1.084,6.047,1.506,9.092L321.789,184.915z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M321.265,185.472c-0.465-3.375-0.959-6.746-1.672-10.08l0.881-0.182c0.719,3.358,1.217,6.752,1.686,10.152 L321.265,185.472z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M299.456,188.101c-0.39-2.766-0.785-5.528-1.375-8.263l21.745-4.493c0.711,3.341,1.211,6.716,1.677,10.099 L299.456,188.101z"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "315.041,179.227 314.685,177.395 318.158,176.707 318.526,178.594 \t\t"
                  }), t("polygon", {
                    fill: "#69C8C3",
                    points: "315.343,178.954 315.067,177.538 317.873,176.985 318.156,178.438 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "315.024,178.383 314.985,178.184 318.151,177.58 318.192,177.785 \t\t"
                  }), t("rect", {
                    x: "316.338",
                    y: "177.751",
                    transform: "matrix(-0.1915 -0.9815 0.9815 -0.1915 203.3279 523.2456)",
                    fill: "#FFFFFF",
                    width: "1.693",
                    height: "0.246"
                  }), t("rect", {
                    x: "315.401",
                    y: "177.92",
                    transform: "matrix(-0.1919 -0.9814 0.9814 -0.1919 202.1822 522.5669)",
                    fill: "#FFFFFF",
                    width: "1.68",
                    height: "0.243"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "315.541,182.225 315.269,180.38 318.761,179.783 319.044,181.684 \t\t"
                  }), t("polygon", {
                    fill: "#69C8C3",
                    points: "315.856,181.96 315.653,180.532 318.472,180.054 318.683,181.518 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "315.567,181.38 315.539,181.179 318.72,180.657 318.751,180.863 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "317.746,181.784 317.503,180.108 317.74,180.067 317.987,181.746 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "316.789,181.933 316.548,180.271 316.785,180.23 317.03,181.896 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "315.978,185.235 315.71,183.39 319.216,182.883 319.49,184.786 \t\t"
                  }), t("polygon", {
                    fill: "#69C8C3",
                    points: "316.291,184.979 316.085,183.552 318.916,183.147 319.13,184.612 \t\t"
                  }), t("rect", {
                    x: "317.485",
                    y: "182.47",
                    transform: "matrix(-0.1347 -0.9909 0.9909 -0.1347 177.9563 523.566)",
                    fill: "#FFFFFF",
                    width: "0.203",
                    height: "3.221"
                  }), t("rect", {
                    x: "317.348",
                    y: "183.869",
                    transform: "matrix(-0.143 -0.9897 0.9897 -0.143 181.5811 525.2192)",
                    fill: "#FFFFFF",
                    width: "1.694",
                    height: "0.243"
                  }), t("rect", {
                    x: "316.397",
                    y: "184.013",
                    transform: "matrix(-0.1438 -0.9896 0.9896 -0.1438 180.6289 524.5483)",
                    fill: "#FFFFFF",
                    width: "1.678",
                    height: "0.242"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "308.606,180.394 308.269,178.667 311.742,177.978 312.093,179.763 \t\t"
                  }), t("polygon", {
                    fill: "#69C8C3",
                    points: "308.908,180.135 308.649,178.797 311.455,178.247 311.722,179.618 \t\t"
                  }), t("rect", {
                    x: "310.078",
                    y: "177.608",
                    transform: "matrix(-0.1951 -0.9808 0.9808 -0.1951 194.9222 518.4012)",
                    fill: "#FFFFFF",
                    width: "0.19",
                    height: "3.223"
                  }), t("rect", {
                    x: "309.968",
                    y: "178.977",
                    transform: "matrix(-0.1905 -0.9817 0.9817 -0.1905 194.1427 518.2908)",
                    fill: "#FFFFFF",
                    width: "1.6",
                    height: "0.243"
                  }), t("rect", {
                    x: "309.026",
                    y: "179.156",
                    transform: "matrix(-0.1921 -0.9814 0.9814 -0.1921 193.3924 517.7649)",
                    fill: "#FFFFFF",
                    width: "1.586",
                    height: "0.244"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "309.078,183.226 308.821,181.483 312.313,180.887 312.578,182.683 \t\t"
                  }), t("polygon", {
                    fill: "#69C8C3",
                    points: "309.394,182.971 309.203,181.624 312.024,181.146 312.22,182.529 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "309.112,182.427 309.085,182.236 312.267,181.715 312.294,181.91 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "311.283,182.79 311.056,181.205 311.294,181.165 311.524,182.752 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "310.326,182.938 310.099,181.368 310.339,181.328 310.567,182.9 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "309.49,186.066 309.235,184.324 312.742,183.818 313.005,185.617 \t\t"
                  }), t("polygon", {
                    fill: "#69C8C3",
                    points: "309.808,185.823 309.61,184.475 312.442,184.071 312.642,185.454 \t\t"
                  }), t("rect", {
                    x: "311.001",
                    y: "183.323",
                    transform: "matrix(-0.1436 -0.9896 0.9896 -0.1436 172.7431 519.359)",
                    fill: "#FFFFFF",
                    width: "0.19",
                    height: "3.222"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "311.703,185.688 311.472,184.104 311.714,184.07 311.944,185.659 \t\t"
                  }), t("rect", {
                    x: "309.952",
                    y: "184.886",
                    transform: "matrix(-0.1446 -0.9895 0.9895 -0.1446 172.6188 519.2413)",
                    fill: "#FFFFFF",
                    width: "1.587",
                    height: "0.245"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "301.546,181.678 301.231,180.06 304.706,179.371 305.032,181.044 \t\t"
                  }), t("polygon", {
                    fill: "#E8D320",
                    points: "301.853,181.429 301.608,180.178 304.415,179.628 304.665,180.913 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "301.548,180.928 301.513,180.753 304.679,180.149 304.714,180.331 \t\t"
                  }), t("rect", {
                    x: "302.97",
                    y: "180.327",
                    transform: "matrix(-0.1917 -0.9814 0.9814 -0.1917 184.8485 513.1296)",
                    fill: "#FFFFFF",
                    width: "1.498",
                    height: "0.243"
                  }), t("rect", {
                    x: "302.034",
                    y: "180.491",
                    transform: "matrix(-0.1908 -0.9816 0.9816 -0.1908 183.2516 512.2876)",
                    fill: "#FFFFFF",
                    width: "1.484",
                    height: "0.243"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "301.989,184.323 301.749,182.694 305.239,182.096 305.489,183.781 \t\t"
                  }), t("polygon", {
                    fill: "#E8D320",
                    points: "302.308,184.083 302.13,182.821 304.95,182.344 305.132,183.64 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "302.028,183.573 302.003,183.396 305.187,182.875 305.21,183.058 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "304.194,183.892 303.981,182.41 304.222,182.37 304.435,183.854 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "303.237,184.042 303.026,182.572 303.265,182.531 303.476,184.004 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "302.374,186.979 302.136,185.351 305.642,184.844 305.888,186.529 \t\t"
                  }), t("polygon", {
                    fill: "#E8D320",
                    points: "302.692,186.747 302.507,185.488 305.339,185.083 305.528,186.379 \t\t"
                  }), t("rect", {
                    x: "303.896",
                    y: "184.303",
                    transform: "matrix(-0.1314 -0.9913 0.9913 -0.1314 159.6426 511.6995)",
                    fill: "#FFFFFF",
                    width: "0.178",
                    height: "3.221"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "304.587,186.607 304.37,185.125 304.612,185.09 304.829,186.576 \t\t"
                  }), t("rect", {
                    x: "302.895",
                    y: "185.866",
                    transform: "matrix(-0.1447 -0.9895 0.9895 -0.1447 163.5552 513.3475)",
                    fill: "#FFFFFF",
                    width: "1.484",
                    height: "0.244"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "320.896,181.397 320.63,179.575 323.646,179.062 323.919,180.93 \t\t"
                  }), t("polygon", {
                    fill: "#E8D320",
                    points: "321.164,181.142 320.962,179.733 323.397,179.323 323.603,180.761 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "320.903,180.565 320.876,180.368 323.621,179.919 323.651,180.121 \t\t"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M299.942,178.809c-0.639-2.778-1.285-5.559-2.147-8.279l20.352-6.152c1.037,3.287,1.834,6.641,2.594,9.998 L299.942,178.809z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M319.888,173.483c1.158-1.182,2.307-2.396,3.447-3.64l1.622-0.397l-0.709-2.898l-1.612,0.437 c-1.619-0.532-3.236-1.032-4.84-1.503C318.642,168.108,319.21,170.811,319.888,173.483z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M319.449,173.473c-0.67-2.566-1.221-5.162-2.051-7.683c1.674,0.495,3.396,1.014,5.059,1.582l0.134,0.047 l0.143-0.038l1.183-0.313l0.51,2.086l-1.188,0.295l-0.141,0.034l-0.098,0.104C321.824,170.916,320.644,172.211,319.449,173.473z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M297.897,179.244c-0.625-2.719-1.258-5.441-2.104-8.108l21.979-6.645c1.031,3.277,1.826,6.62,2.584,9.965 L297.897,179.244z"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "313.037,169.08 312.528,167.37 315.737,166.437 316.261,168.196 \t\t"
                  }), t("polygon", {
                    fill: "#62381B",
                    points: "313.271,168.803 312.878,167.482 314.626,166.978 315.024,168.319 \t\t"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M315.845,167.36c-0.105-0.359-0.558-0.546-1.047-0.461l0.416,1.396 C315.673,168.114,315.951,167.719,315.845,167.36z"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "312.933,168.284 312.878,168.099 315.937,167.23 315.994,167.421 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "313.737,171.861 313.315,170.129 316.546,169.275 316.981,171.056 \t\t"
                  }), t("polygon", {
                    fill: "#62381B",
                    points: "313.981,171.59 313.655,170.25 315.414,169.788 315.746,171.148 \t\t"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M316.608,170.204c-0.088-0.362-0.527-0.562-1.018-0.49l0.346,1.415 C316.403,170.958,316.696,170.568,316.608,170.204z"
                  }), t("rect", {
                    x: "315.088",
                    y: "168.97",
                    transform: "matrix(-0.2402 -0.9707 0.9707 -0.2402 225.3193 517.4843)",
                    fill: "#FFFFFF",
                    width: "0.195",
                    height: "3.179"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "314.423,174.646 313.996,172.916 317.244,172.14 317.685,173.92 \t\t"
                  }), t("polygon", {
                    fill: "#62381B",
                    points: "314.669,174.382 314.339,173.044 316.11,172.625 316.444,173.984 \t\t"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M317.31,173.067c-0.09-0.364-0.531-0.574-1.023-0.513l0.349,1.416 C317.103,173.811,317.399,173.429,317.31,173.067z"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "314.356,173.847 314.31,173.658 317.406,172.942 317.453,173.135 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "307.108,170.707 306.621,169.087 309.832,168.155 310.328,169.822 \t\t"
                  }), t("polygon", {
                    fill: "#62381B",
                    points: "307.343,170.442 306.97,169.19 308.718,168.683 309.099,169.957 \t\t"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M309.927,169.032c-0.103-0.34-0.549-0.513-1.037-0.424l0.396,1.324 C309.746,169.751,310.028,169.373,309.927,169.032z"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "307.015,169.952 306.96,169.776 310.021,168.908 310.073,169.088 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "307.769,173.344 307.369,171.702 310.601,170.847 311.013,172.538 \t\t"
                  }), t("polygon", {
                    fill: "#62381B",
                    points: "308.017,173.083 307.707,171.812 309.47,171.351 309.781,172.64 \t\t"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M310.651,171.731c-0.084-0.345-0.52-0.53-1.008-0.453l0.326,1.343 C310.437,172.453,310.735,172.077,310.651,171.731z"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "307.714,172.58 307.671,172.403 310.751,171.609 310.794,171.792 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "308.421,175.982 308.015,174.344 311.265,173.567 311.683,175.256 \t\t"
                  }), t("polygon", {
                    fill: "#62381B",
                    points: "308.669,175.729 308.354,174.461 310.126,174.042 310.444,175.331 \t\t"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M311.317,174.449c-0.084-0.345-0.522-0.541-1.016-0.476l0.33,1.343 C311.103,175.159,311.403,174.792,311.317,174.449z"
                  }), t("rect", {
                    x: "309.8",
                    y: "173.198",
                    transform: "matrix(-0.2326 -0.9726 0.9726 -0.2326 211.9697 516.8352)",
                    fill: "#FFFFFF",
                    width: "0.185",
                    height: "3.181"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M299.429,173.81c-0.178-0.827-0.473-1.624-0.697-2.438l5.193-1.509c0.238,0.855,0.543,1.693,0.731,2.562 L299.429,173.81z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M299.833,173.4c-0.156-0.634-0.371-1.253-0.551-1.883l2.829-0.815c0.187,0.647,0.404,1.285,0.566,1.938 L299.833,173.4z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M304.058,171.21c-0.156-0.521-0.875-0.779-1.662-0.63c0.191,0.673,0.422,1.338,0.586,2.021 C303.741,172.319,304.222,171.729,304.058,171.21z"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "299.331,172.665 299.251,172.401 304.212,171.017 304.296,171.293 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "300.399,177.768 299.79,175.309 305.04,174.004 305.679,176.594 \t\t"
                  }), t("polygon", {
                    fill: "#E2324B",
                    points: "300.804,177.38 300.333,175.475 303.194,174.772 303.679,176.732 \t\t"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M305.106,175.359c-0.129-0.528-0.832-0.815-1.627-0.699l0.506,2.044 C304.745,176.455,305.237,175.887,305.106,175.359z"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "300.323,176.626 300.259,176.359 305.271,175.171 305.341,175.452 \t\t"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M320.953,169.015c-0.231-0.949-1.34-1.478-2.586-1.276c0.33,1.21,0.603,2.433,0.908,3.648 C320.448,170.966,321.187,169.964,320.953,169.015z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M319.526,170.903l-0.705-2.887c0.814,0.072,1.457,0.5,1.609,1.122 C320.582,169.757,320.21,170.443,319.526,170.903z"
                  }), t("polygon", {
                    fill: "#E8D320",
                    points: "299.991,189.862 300.005,189.986 304.778,189.503 304.767,189.374 \t\t"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M305.69,189.814c0.535-0.051,0.977-0.289,1.164-0.591c-0.24-0.259-0.717-0.4-1.252-0.346 c-0.535,0.059-0.977,0.297-1.162,0.593C304.677,189.719,305.155,189.867,305.69,189.814z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M305.388,190.163c0.512,0.11,1.026,0.021,1.34-0.205c-0.094-0.314-0.457-0.599-0.967-0.705 c-0.51-0.104-1.025-0.01-1.338,0.218C304.515,189.776,304.876,190.053,305.388,190.163z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M305.241,188.597c0.479-0.211,1.003-0.228,1.352-0.067c-0.031,0.327-0.336,0.679-0.816,0.886 c-0.481,0.206-1.004,0.215-1.352,0.058C304.458,189.153,304.761,188.808,305.241,188.597z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M302.89,189.432c0.58-0.242,0.91-0.521,1.176-0.756c-0.422,0.041-0.858,0.109-1.438,0.355 c-0.578,0.244-1.023,0.531-1.176,0.743C301.757,189.797,302.31,189.675,302.89,189.432z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M302.206,190.188c0.455,0.101,1.172,0.176,1.43,0.134c-0.172-0.148-0.824-0.364-1.279-0.464 c-0.455-0.102-0.877-0.118-1.102-0.062C301.392,189.932,301.751,190.084,302.206,190.188z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M305.784,189.342c0.444,0.095,0.778,0.316,0.93,0.577c-0.109-0.299-0.466-0.562-0.953-0.667 c-0.51-0.104-1.025-0.01-1.338,0.218l0.024,0.066C304.771,189.324,305.278,189.238,305.784,189.342z"
                  }), t("polygon", {
                    fill: "#E8D320",
                    points: "300.21,192.135 300.224,192.255 305.009,191.883 304.995,191.754 \t\t"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M305.923,192.213c0.537-0.039,0.979-0.265,1.164-0.562c-0.24-0.263-0.72-0.417-1.256-0.372 c-0.537,0.045-0.979,0.273-1.162,0.562C304.907,192.098,305.386,192.254,305.923,192.213z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M305.622,192.555c0.512,0.121,1.028,0.044,1.34-0.177c-0.095-0.314-0.459-0.604-0.971-0.725 c-0.513-0.117-1.027-0.03-1.341,0.187C304.745,192.15,305.11,192.434,305.622,192.555z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M305.468,190.991c0.479-0.199,1.004-0.205,1.354-0.037c-0.033,0.327-0.336,0.67-0.815,0.866 c-0.48,0.194-1.004,0.191-1.355,0.025C304.683,191.527,304.987,191.191,305.468,190.991z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M303.112,191.77c0.58-0.229,0.912-0.497,1.177-0.728c-0.422,0.031-0.859,0.09-1.441,0.321 c-0.58,0.231-1.023,0.508-1.174,0.716C301.981,192.109,302.534,191.999,303.112,191.77z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M302.431,192.508c0.459,0.11,1.178,0.2,1.438,0.166c-0.177-0.151-0.83-0.382-1.287-0.491 s-0.879-0.138-1.104-0.084C301.612,192.237,301.976,192.396,302.431,192.508z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M306.015,191.747c0.445,0.104,0.783,0.332,0.936,0.597c-0.11-0.303-0.467-0.572-0.958-0.688 c-0.513-0.117-1.027-0.03-1.341,0.187l0.025,0.067C304.999,191.706,305.509,191.629,306.015,191.747z"
                  }), t("polygon", {
                    fill: "#E8D320",
                    points: "300.356,194.41 300.36,194.533 305.153,194.269 305.147,194.14 \t\t"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M306.048,194.622c0.539-0.026,0.989-0.244,1.19-0.536c-0.225-0.269-0.692-0.435-1.231-0.401 c-0.535,0.033-0.99,0.251-1.191,0.537C305.04,194.482,305.511,194.65,306.048,194.622z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M305.728,194.955c0.506,0.135,1.025,0.069,1.35-0.144c-0.077-0.318-0.428-0.616-0.93-0.746 c-0.504-0.131-1.022-0.058-1.348,0.153C304.876,194.53,305.224,194.823,305.728,194.955z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M305.661,193.386c0.489-0.188,1.012-0.184,1.354-0.008c-0.051,0.327-0.371,0.664-0.861,0.85 c-0.489,0.185-1.014,0.169-1.354-0.004C304.849,193.907,305.171,193.576,305.661,193.386z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M303.271,194.113c0.59-0.216,0.937-0.478,1.211-0.701c-0.422,0.021-0.86,0.071-1.453,0.29 c-0.592,0.216-1.049,0.484-1.213,0.688C302.122,194.425,302.679,194.329,303.271,194.113z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M302.552,194.834c0.447,0.123,1.16,0.229,1.42,0.199c-0.166-0.154-0.807-0.398-1.254-0.521 c-0.451-0.121-0.871-0.156-1.098-0.109C301.749,194.543,302.101,194.713,302.552,194.834z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M306.164,194.155c0.438,0.113,0.765,0.351,0.898,0.619c-0.092-0.304-0.434-0.585-0.916-0.709 c-0.504-0.131-1.022-0.058-1.348,0.153l0.021,0.066C305.153,194.091,305.667,194.027,306.164,194.155z"
                  }), t("polygon", {
                    fill: "#E8D320",
                    points: "300.46,196.687 300.468,196.811 305.263,196.658 305.257,196.528 \t\t"
                  }), t("path", {
                    fill: "#EE7D8F",
                    d: "M306.16,197.03c0.539-0.015,0.99-0.222,1.189-0.51c-0.228-0.272-0.697-0.448-1.234-0.428 c-0.538,0.021-0.991,0.228-1.19,0.508C305.151,196.867,305.624,197.044,306.16,197.03z"
                  }), t("path", {
                    fill: "#EE7D8F",
                    d: "M305.845,197.356c0.504,0.146,1.024,0.092,1.348-0.113c-0.08-0.319-0.43-0.626-0.936-0.768 s-1.025-0.078-1.348,0.123C304.987,196.911,305.339,197.211,305.845,197.356z"
                  }), t("path", {
                    fill: "#EE7D8F",
                    d: "M305.767,195.787c0.49-0.177,1.014-0.156,1.354,0.024c-0.049,0.326-0.366,0.653-0.856,0.827 c-0.49,0.175-1.014,0.146-1.354-0.034C304.958,196.288,305.276,195.965,305.767,195.787z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M303.378,196.458c0.59-0.202,0.934-0.455,1.209-0.672c-0.424,0.012-0.865,0.05-1.455,0.256 c-0.59,0.204-1.049,0.461-1.209,0.659C302.229,196.744,302.786,196.659,303.378,196.458z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M302.659,197.164c0.45,0.132,1.166,0.255,1.426,0.23c-0.166-0.16-0.81-0.417-1.26-0.548 c-0.449-0.134-0.871-0.179-1.099-0.138C301.856,196.856,302.21,197.03,302.659,197.164z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M306.274,196.567c0.441,0.121,0.768,0.368,0.904,0.639c-0.094-0.308-0.437-0.595-0.922-0.729 c-0.506-0.142-1.025-0.078-1.348,0.123l0.021,0.068C305.263,196.479,305.774,196.427,306.274,196.567z"
                  }), t("path", {
                    fill: "#A0BF3B",
                    d: "M301.708,195.811c-0.088-1.482-0.761-2.76-1.916-3.458c0.129,2.35,0.315,4.705,0.278,7.062 C301.146,198.623,301.806,197.293,301.708,195.811z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M302.089,191.809c-0.164-1.633-1.213-2.981-2.693-3.646c0.224,2.559,0.533,5.109,0.586,7.677 C301.323,194.949,302.282,193.442,302.089,191.809z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M302.573,209.591c1.734,0.171,3.349-0.795,3.402-2.176c0.066-1.379-1.303-2.557-3.063-2.633 c-1.765-0.074-3.254,0.902-3.314,2.184C299.55,208.247,300.794,209.415,302.573,209.591z M302.606,209.278 c-1.549-0.15-2.617-1.164-2.594-2.285c0.057-1.117,1.35-1.965,2.881-1.896c1.533,0.073,2.721,1.096,2.664,2.289 C305.522,208.581,304.114,209.419,302.606,209.278z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M301.56,217.319c1.738,0.305,3.312-0.553,3.527-1.918c0.225-1.363-1.043-2.644-2.816-2.854 c-1.731-0.207-3.297,0.652-3.51,1.918C298.563,215.735,299.819,217.013,301.56,217.319z M301.606,217.01 c-1.512-0.265-2.602-1.373-2.432-2.482c0.174-1.107,1.563-1.85,3.065-1.664c1.546,0.191,2.609,1.295,2.433,2.477 C304.487,216.522,303.118,217.267,301.606,217.01z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M305.456,208.142c1.374,0.631,2.825,1.344,3.085,1.504c0.104,0.063,0.14,0.156,0.128,0.305 c-0.025,0.266-0.261,0.617-0.375,0.766l-0.062,0.078l0.269,0.15c0.004-0.008,0.432-0.498,0.487-0.965 c0.021-0.188-0.033-0.4-0.256-0.537c-0.307-0.182-1.717-0.879-3.129-1.516c-1.406-0.638-2.742-1.203-2.742-1.203l-0.146,0.209 C302.718,206.935,304.05,207.501,305.456,208.142z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M301.786,212.245l-0.013,0.535c-0.01,1.715-0.053,2.271-0.047,2.273l-0.01,0.211 c1.518-0.531,3.043-1.095,4.569-1.687l-0.161-0.229c-1.342,0.534-2.722,1.037-4.072,1.52c0.004-0.295,0.043-0.928,0.037-2.074 l0.014-0.512c0.078-0.752,0.39-1.191,0.82-1.494c0.432-0.305,1-0.473,1.602-0.633c1.396-0.371,2.377-1.502,2.389-1.51 l-0.266-0.146c0,0.002-0.057,0.068-0.168,0.174c-0.106,0.107-0.271,0.257-0.473,0.412c-0.402,0.316-0.967,0.67-1.6,0.838 c-0.604,0.164-1.222,0.341-1.707,0.683c-0.49,0.342-0.836,0.846-0.914,1.631L301.786,212.245z"
                  }), t("polygon", {
                    fill: "#E2324B",
                    points: "306.444,213.737 306.601,213.524 302.103,211.397 301.952,211.603 \t\t"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M303.659,212.171c-0.003-0.02,0.045-0.116,0.145-0.233c0.098-0.115,0.24-0.26,0.42-0.414 c0.357-0.31,0.855-0.666,1.424-0.963c1.205-0.633,1.688-1.715,1.693-1.726l-0.3-0.09c-0.002,0-0.028,0.062-0.092,0.164 c-0.059,0.107-0.151,0.254-0.28,0.418c-0.257,0.33-0.654,0.736-1.209,1.023c-0.89,0.467-1.604,1.057-1.931,1.444 c-0.104,0.132-0.176,0.23-0.188,0.338L303.659,212.171z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M307.005,212.907c0.098,0.662,0.135,1.32,0.176,1.98l-0.883-0.183c0.125-0.713,0.223-1.43,0.278-2.149 L307.005,212.907z"
                  }), t("polygon", {
                    fill: "#E2324B",
                    points: "308.476,211.28 309.03,210.286 308.544,210.101 307.987,211.091 \t\t"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M310.621,253.331l-5.128-2.461c0.153,0.23,0.225,0.457,0.045,0.601c-0.22,0.17-0.771-0.082-1.017-0.177 c0.474,0.365,1.013,1.021,0.513,1.482c-0.324,0.299-0.861,0.137-1.293,0.045c0.987,0.82,0.59,1.877-0.646,1.617 c0.623,0.387,0.67,0.916,0.223,1.035l4.902,2.621C309.108,256.554,309.812,254.915,310.621,253.331z"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M303.097,254.438c1.234,0.26,1.633-0.797,0.646-1.617c0.432,0.092,0.969,0.254,1.293-0.045 c0.5-0.463-0.039-1.117-0.513-1.482c0.246,0.095,0.797,0.347,1.017,0.177c0.18-0.144,0.108-0.369-0.045-0.601l-1.285-0.617 c-0.765,1.49-1.424,3.039-2.263,4.486l1.373,0.734C303.767,255.354,303.72,254.825,303.097,254.438z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M314.464,253.751c0.336,0.482,0.676,0.9,1.018,1.236l0.646-0.494c-0.304-0.393-0.584-0.844-0.869-1.332 L314.464,253.751z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M313.119,254.249l0.716-0.658l-0.544-0.823l-0.125-0.215c-0.297,0.288-0.557,0.577-0.782,0.854 L313.119,254.249z"
                  }), t("polygon", {
                    fill: "#2D948D",
                    points: "313.696,252.565 314.169,253.313 314.974,252.665 314.593,251.976 314.267,251.476 313.485,252.233 \t\t"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M320.013,253.731l-0.06,0.113l-0.157,0.248c0.604,0.038,1.272,0.172,2.02,0.44l0.107,0.047l-0.045-0.026 l0.049,0.02l-0.084-0.039c-0.67-0.377-1.199-0.779-1.627-1.197l-0.195,0.388L320.013,253.731z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M312.573,250.411l-0.205,0.283c0.263,0.326,0.531,0.684,0.802,1.07l0.752-0.75l0.008-0.009l0.004-0.004 c-0.31-0.414-0.627-0.784-0.945-1.112l-0.408,0.516L312.573,250.411z"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M317.337,253.427l-0.666-1.188l-0.009-0.014l-0.116-0.207l-0.104,0.108l-0.008,0.006l-0.551,0.531 l-0.289,0.23c0.281,0.518,0.539,0.985,0.799,1.391l0.736-0.633L317.337,253.427z"
                  }), t("polygon", {
                    fill: "#E8D320",
                    points: "317.556,254.044 316.974,254.538 317.869,254.274 317.647,253.942 \t\t"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M318.397,252.997l-0.008,0.008l-0.506,0.673l0.305,0.524l0.926-0.117l0.336-0.526l0.035-0.064l0.006-0.008 l0.312-0.588l-0.099-0.117c-0.209-0.139-0.485-0.35-0.805-0.643L318.397,252.997z"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M313.435,254.567c0.334,0.32,0.658,0.592,0.971,0.783l0.015,0.006l0.821-0.201 c-0.375-0.305-0.748-0.703-1.104-1.156L313.435,254.567z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M314.028,255.401c-0.281-0.154-0.565-0.359-0.854-0.6l-0.451,0.454 C313.185,255.394,313.61,255.431,314.028,255.401z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M317.294,252.519l0.303,0.604l0.271-0.352l0.006-0.006c0.24-0.326,0.451-0.662,0.632-1 c-0.293-0.295-0.599-0.656-0.927-1.037c-0.215,0.315-0.454,0.637-0.725,0.947l0.432,0.825L317.294,252.519z"
                  }), t("polygon", {
                    fill: "#2D948D",
                    points: "316.319,249.37 315.712,250.052 316.341,250.815 316.565,251.175 317.251,250.349 \t\t"
                  }), t("polygon", {
                    fill: "#E8D320",
                    points: "315.412,250.364 314.587,251.177 314.712,251.356 314.722,251.37 314.987,251.772 315.315,252.386 315.483,252.251 315.878,251.886 315.886,251.878 316.253,251.513 315.964,251.052 \t\t"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M314.681,248.235l-0.621,0.514c0.436,0.248,0.873,0.562,1.283,0.941l0.643-0.619 C315.558,248.716,315.115,248.442,314.681,248.235z"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M314.239,250.722l0.806-0.744c-0.402-0.392-0.822-0.722-1.244-0.99l-0.601,0.645 C313.554,249.944,313.905,250.312,314.239,250.722z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M311.71,250.349l-0.548,1.246l0.062,0.114c0.176-0.375,0.356-0.785,0.611-1.186L311.71,250.349z"
                  }), t("polygon", {
                    fill: "#2D948D",
                    points: "312.062,250.175 312.571,249.487 312.21,249.181 311.835,250.054 311.865,250.087 311.88,250.104 312.007,250.253 312.056,250.181 \t\t"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M312.101,253.056c0.221-0.32,0.488-0.64,0.779-0.963c-0.25-0.39-0.492-0.757-0.724-1.097 c-0.268,0.4-0.496,0.787-0.688,1.142c0.174,0.295,0.379,0.592,0.61,0.891L312.101,253.056z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M312.558,248.372l-0.248,0.582l0.449,0.312l0.547-0.564C313.05,248.565,312.8,248.456,312.558,248.372z"
                  }), t("polygon", {
                    fill: "#E8D320",
                    points: "319.416,252.397 319.056,251.821 319.005,251.935 \t\t"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M310.912,252.706l0.121-0.496l-0.088-0.174l-0.537,1.092c0.146,0.326,0.427,0.777,0.781,1.177 C311.158,254.229,310.726,253.655,310.912,252.706z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M311.853,253.442l-0.146-0.176l-0.45-0.662l-0.068,0.178c-0.307,0.848-0.008,1.453,0.002,1.521 l0.207,0.213l0.068-0.226C311.55,254.019,311.683,253.733,311.853,253.442z"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M312.364,255.135l0.492-0.611l-0.74-0.764c-0.153,0.219-0.285,0.436-0.385,0.646l-0.131,0.293 c0.156,0.127,0.32,0.238,0.49,0.316L312.364,255.135z"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M316.294,248.769l0.506-0.506l-0.373-0.216l-0.865-0.407l-0.541,0.35 C315.451,248.187,315.888,248.442,316.294,248.769z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M317.498,250.003l0.453-0.707l-0.139-0.295l-0.736-0.559l-0.475,0.592 C316.946,249.354,317.239,249.683,317.498,250.003z"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M318.642,251.507l0.121-0.26c-0.236-0.508-0.42-1.004-0.611-1.479l-0.35,0.621 C318.11,250.792,318.38,251.177,318.642,251.507z"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M315.94,247.085l-0.234-0.106c-0.698-0.297-1.731-0.246-2.35-0.066c0.535-0.006,1.312,0.045,2.197,0.334 L315.94,247.085z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M315.093,247.462c-0.797-0.27-1.498-0.389-1.953-0.44l-0.183,0.422c0.453,0.031,0.994,0.139,1.562,0.34 L315.093,247.462z"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M314.164,248.011c-0.463-0.177-0.907-0.287-1.301-0.355l-0.213,0.5c0.287,0.074,0.588,0.187,0.898,0.33 L314.164,248.011z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M316.617,247.696l0.461,0.283l0.033-0.035c-0.233-0.256-0.516-0.49-0.863-0.695l-0.276,0.148 L316.617,247.696z"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M314.522,263.388c-0.189,0.342-0.586,0.521-1.113,0.521c0.213,0.566,0.188,1.146-0.08,1.631 c-0.303,0.535-0.844,0.877-1.536,0.931c0.262,0.62,0.235,1.271-0.089,1.791c-0.291,0.469-0.778,0.768-1.371,0.856 c0.255,0.453,0.289,0.881,0.091,1.199c-0.158,0.254-0.438,0.397-0.797,0.436l3.448,1.826c1.672-2.615,3.275-5.266,4.732-8.006 l-3.31-2.176C314.66,262.755,314.683,263.103,314.522,263.388z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M312.179,264.854c0.231-0.418-0.074-1.053-0.668-1.387l-0.045-0.027l-0.843,1.52l0.046,0.025 C311.259,265.331,311.949,265.271,312.179,264.854z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M313.351,262.743c0.143-0.254-0.244-0.744-0.842-1.072l-0.049-0.022l-0.515,0.926l0.045,0.025 C312.587,262.931,313.21,262.997,313.351,262.743z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M309.272,269.638c0.152-0.248-0.205-0.763-0.781-1.125l-0.047-0.027l-0.559,0.898l0.045,0.028 C308.505,269.78,309.117,269.886,309.272,269.638z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M310.574,267.546c0.25-0.403-0.03-1.041-0.617-1.391l-0.045-0.029l-0.916,1.474l0.043,0.026 C309.621,267.987,310.323,267.95,310.574,267.546z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M310.271,263.51c0.26-0.468-0.025-1.146-0.619-1.48l-0.047-0.025l-0.945,1.705l0.045,0.025 C309.294,264.079,310.013,263.976,310.271,263.51z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M311.585,261.142c0.157-0.287-0.218-0.802-0.816-1.125l-0.047-0.025l-0.578,1.039l0.047,0.027 C310.785,261.386,311.427,261.427,311.585,261.142z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M307.009,268.878c0.174-0.274-0.17-0.817-0.746-1.184l-0.045-0.029l-0.627,1.008l0.045,0.031 C306.205,269.077,306.837,269.157,307.009,268.878z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M308.47,266.53c0.283-0.453,0.026-1.135-0.56-1.484l-0.047-0.026l-1.028,1.653l0.045,0.029 C307.46,267.063,308.188,266.983,308.47,266.53z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M310.444,259.651l0.4,0.178c0.797,0.428,1.262,1.105,1.035,1.512c-0.191,0.345-0.81,0.382-1.472,0.121 c0.188,0.16,0.347,0.336,0.472,0.529c0.696,0.146,1.28,0.027,1.496-0.359c0.325-0.59-0.339-1.562-1.486-2.174l-0.57-0.254 l-0.942,1.701l0.311,0.111L310.444,259.651z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M308.259,264.181l-0.574-0.259l1.521-2.713l0.523,0.34c0.391,0.22,0.787,0.365,1.15,0.441 c0.424,0.635,0.512,1.414,0.159,2.049c-0.375,0.672-1.127,1.002-1.952,0.9C308.882,264.647,308.603,264.385,308.259,264.181z M308.462,264.116c0.784,0.465,1.717,0.289,2.092-0.385c0.373-0.674,0.035-1.576-0.756-2.019l-0.404-0.172l-1.279,2.312 L308.462,264.116z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M310.88,261.991c-0.125-0.193-0.283-0.369-0.472-0.529l-0.375-0.176l-0.364-0.235l0.018-0.033 l-0.311-0.111l-0.171,0.305l0.523,0.341C310.119,261.769,310.517,261.915,310.88,261.991z"
                  }), t("polygon", {
                    fill: "#E2324B",
                    points: "309.687,261.017 309.669,261.05 310.033,261.286 310.408,261.462 309.953,261.144 \t\t"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M306.421,267.132l-0.551-0.297l1.645-2.641l0.5,0.379c0.342,0.203,0.709,0.324,1.072,0.367 c0.463,0.66,0.543,1.488,0.137,2.141c-0.383,0.613-1.101,0.914-1.855,0.853C307.121,267.647,306.802,267.37,306.421,267.132z M306.621,267.071c0.767,0.48,1.718,0.344,2.125-0.314c0.408-0.651,0.107-1.559-0.672-2.02l-0.399-0.182l-1.396,2.239 L306.621,267.071z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M309.087,264.94c-0.205-0.293-0.484-0.558-0.828-0.76l-0.574-0.259l-0.17,0.271l0.5,0.379 C308.356,264.776,308.724,264.897,309.087,264.94z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M307.791,269.382c0.224-0.36,0.039-0.918-0.424-1.448l-0.58-0.119c0.486,0.438,0.718,0.94,0.527,1.246 c-0.238,0.383-1.047,0.291-1.805-0.203l-0.35-0.262l0.772-1.246l-0.248-0.222l-0.983,1.586l0.5,0.377 C306.289,269.804,307.448,269.933,307.791,269.382z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M305.978,267.28l0.383,0.211l0.428,0.322l0.58,0.119c-0.246-0.285-0.565-0.562-0.946-0.802l-0.551-0.297 l-0.185,0.293l0.248,0.222L305.978,267.28z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M312.224,261.288l0.395,0.185c0.797,0.432,1.275,1.075,1.074,1.442c-0.17,0.306-0.768,0.31-1.422,0.039 c0.188,0.154,0.35,0.324,0.48,0.506c0.684,0.168,1.245,0.088,1.438-0.256c0.293-0.526-0.398-1.453-1.541-2.067l-0.568-0.263 l-0.514,0.951l-0.959-0.102c0.064,0.02,0.25,0.653,0.496,0.877c0.154,0.137,0.406-0.107,0.443-0.093L312.224,261.288z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M310.3,265.349c-0.188-0.111-0.843-0.412-1.035-0.479l1.035-0.733l0.789-1.474l0.524,0.336 c0.387,0.22,0.777,0.377,1.137,0.461c0.443,0.604,0.562,1.324,0.248,1.892c-0.334,0.6-1.053,0.867-1.856,0.733 C310.927,265.806,310.642,265.548,310.3,265.349z M310.492,265.296c0.785,0.466,1.683,0.349,2.019-0.252 c0.334-0.602-0.035-1.446-0.826-1.891l-0.4-0.174l-1.141,2.059L310.492,265.296z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M312.751,263.46c-0.132-0.182-0.294-0.352-0.48-0.506l-0.375-0.182l-0.365-0.234l0.017-0.029l-0.31-0.116 l-0.147,0.271l0.524,0.336C312.001,263.219,312.392,263.376,312.751,263.46z"
                  }), t("polygon", {
                    fill: "#E2324B",
                    points: "311.546,262.51 311.53,262.538 311.896,262.772 312.271,262.954 311.813,262.64 \t\t"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M308.658,267.981l-0.547-0.299c-0.002,0.002,1.224-1.347,1.086-2.533c-0.008-0.08,0.697,0.436,0.883,0.547 c0.345,0.203,0.705,0.334,1.062,0.389c0.481,0.631,0.6,1.396,0.238,1.979c-0.343,0.547-1.023,0.791-1.761,0.697 C309.369,268.489,309.041,268.22,308.658,267.981z M308.853,267.933c0.768,0.479,1.684,0.395,2.047-0.189s0.029-1.432-0.752-1.893 l-0.396-0.185l-1.244,1.998L308.853,267.933z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M311.142,266.085c-0.215-0.278-0.5-0.537-0.842-0.735c-0.187-0.111-1.166-0.765-1.359-0.83l0.127,0.744 c0.15,0.137,0.828,0.323,1.014,0.434C310.425,265.899,310.785,266.03,311.142,266.085z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M310.103,270.112c0.197-0.318-0.008-0.84-0.482-1.352l-0.569-0.136c0.494,0.424,0.739,0.896,0.574,1.17 c-0.214,0.341-1.003,0.224-1.765-0.271l-0.352-0.258l0.918-1.476c-0.088-0.067-0.662,0.082-1.342-0.295 c0.002-0.002,0.911,1.156-0.017,1.859c-0.076,0.059,0.322,0.254,0.504,0.371C308.664,270.433,309.794,270.606,310.103,270.112z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M308.235,268.097l0.383,0.209l0.433,0.319l0.569,0.136c-0.25-0.271-0.578-0.541-0.961-0.779l-0.547-0.299 l-0.164,0.262l0.25,0.215L308.235,268.097z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M304.964,268.747c1.854-2.928,3.674-5.879,5.299-8.946l-22.312-12.052 c-1.291,2.447-2.746,4.795-4.218,7.133L304.964,268.747z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M295.155,245.208c0.931-1.699,1.662-3.498,2.523-5.237l2.75,1.12c0.357-0.786,0.596-1.622,0.9-2.432 l-7.859-2.988c-0.863,2.445-1.965,4.787-3.018,7.144L295.155,245.208z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M321.49,255.282c-0.397-0.182-0.584-0.643-0.416-1.029c0.166-0.391,0.625-0.563,1.025-0.389 c0.397,0.174,0.584,0.637,0.414,1.031C322.347,255.288,321.886,255.462,321.49,255.282z"
                  }), t("polygon", {
                    fill: "#E8D320",
                    points: "327.53,257.284 322.214,254.497 321.876,254.872 \t\t"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M307.651,276.597c-0.354-0.257-0.447-0.738-0.207-1.082c0.238-0.347,0.719-0.425,1.078-0.177 s0.455,0.732,0.211,1.08C308.49,276.771,308.005,276.847,307.651,276.597z"
                  }), t("polygon", {
                    fill: "#E8D320",
                    points: "313.199,279.722 308.515,275.974 308.11,276.271 \t\t"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M318.044,260.46c-0.199-0.102-0.285-0.338-0.188-0.53c0.092-0.195,0.332-0.269,0.531-0.168 c0.199,0.098,0.281,0.336,0.186,0.53C318.478,260.487,318.24,260.562,318.044,260.46z"
                  }), t("polygon", {
                    fill: "#E2324B",
                    points: "321.069,261.635 318.431,260.083 318.246,260.263 \t\t"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M305.642,242.149c-0.205-0.082-0.32-0.291-0.258-0.465c0.063-0.174,0.285-0.248,0.49-0.168 c0.206,0.082,0.325,0.289,0.26,0.465S305.849,242.231,305.642,242.149z"
                  }), t("polygon", {
                    fill: "#E2324B",
                    points: "308.746,243.073 305.962,241.8 305.813,241.969 \t\t"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M317.819,259.913c-2.309-1.43-2.551-3.08-3.09-4.459c-0.891,0.24-2.727,0.354-4.092-1.477l-0.881,1.852 L317.819,259.913z"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M309.785,259.88c-0.61-0.321-1.116-1.127-1.299-1.6c0.467-0.797,0.873-1.625,1.273-2.457l8.062,4.08 C313.914,258.237,312.511,261.312,309.785,259.88z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M307.63,275.54c-0.67-0.641-1.064-1.274-1.314-1.891l-0.086-0.229c-0.512-0.477-1.321-1.186-2.291-1.891 c-0.981-0.742-1.938-1.283-2.557-1.604l-0.572,0.825c0.734,0.438,2.039,1.234,3.465,2.23 C305.755,274.019,306.987,275.005,307.63,275.54z"
                  }), t("path", {
                    fill: "#A0BF3B",
                    d: "M304.206,271.175c-1.025-0.762-2.056-1.17-2.729-1.385l0.566-0.815c0.662,0.184,1.639,0.53,2.565,1.223 c0.427,0.307,0.795,0.639,1.107,0.965l0.195,1.033l0.028,0.154l0.137,0.596C305.647,272.417,305.024,271.767,304.206,271.175z M302.634,273.595c-1.082-0.699-1.953-1.449-2.465-1.918l0.569-0.822c0.66,0.543,1.855,1.498,3.277,2.498 c1.379,0.973,2.647,1.752,3.396,2.192c-0.776-0.379-1.462-0.518-2.09-0.539h-0.301 C304.401,274.683,303.54,274.202,302.634,273.595z M300.253,274.745c-0.351-0.254-0.631-0.692-0.812-1.1 c-0.104-0.23-0.176-0.453-0.217-0.627l0.209-0.279c0.293,0.639,0.84,1.576,1.947,2.338l0.459,0.273l-0.107-0.013 C301.253,275.282,300.767,275.114,300.253,274.745z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M304.88,269.841c-1.01-0.723-2.019-0.954-2.721-1.032l0.155-0.226c0.17-0.032,0.398-0.039,0.648-0.021 c0.459,0.041,0.99,0.172,1.352,0.42c0.529,0.361,0.854,0.76,1.068,1.188l0.066,0.146L304.88,269.841z M301.638,274.712 c-1.041-0.688-1.713-1.549-2.104-2.114l0.551-0.795c0.387,0.508,1.039,1.258,1.975,1.938l0.004,0.004l0.336,0.229 c0.742,0.5,1.474,0.844,2.084,1.071l-0.514,0.072l-0.16,0.027l-1.084,0.186C302.37,275.163,302.003,274.96,301.638,274.712z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M330.354,275.181c-0.254-0.152-0.686-0.136-0.91-0.052l-0.715,1.25l3.328,1.968 C330.606,277.28,331.468,275.849,330.354,275.181z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M328.455,278.374c-0.256-0.147-0.432-0.537-0.481-0.772l0.756-1.226l3.328,1.97 C330.408,277.522,329.585,279.032,328.455,278.374z"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M325.729,276.103c0.451-0.729,0.912-1.447,1.316-2.205l1.993,1.156c-0.411,0.768-0.881,1.5-1.34,2.239 L325.729,276.103z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M298.263,272.495l3.225-4.615c0.056-0.077,0.171-0.094,0.257-0.036l0.434,0.288 c0.088,0.06,0.115,0.169,0.061,0.248l-3.25,4.648c-0.059,0.078-0.174,0.088-0.26,0.023l-0.418-0.31 C298.226,272.681,298.204,272.569,298.263,272.495z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M309.251,253.032c1.125-2.154,2.004-4.424,2.983-6.646l0.883,0.364c-0.987,2.24-1.873,4.525-3.008,6.699 L309.251,253.032z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M289.788,267.989c1.647-2.08,3.084-4.313,4.582-6.502c0.092-0.148,0.309-0.176,0.487-0.062l0.84,0.544 c0.181,0.114,0.248,0.329,0.154,0.481c-1.52,2.221-2.981,4.492-4.654,6.604c-0.106,0.143-0.331,0.151-0.502,0.022l-0.797-0.606 C289.729,268.344,289.683,268.128,289.788,267.989z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M313.026,273.204c1.916-2.985,3.734-6.022,5.4-9.153l0.844,0.454c-1.678,3.15-3.51,6.216-5.438,9.218 L313.026,273.204z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M303.646,248.716c0.679-1.383,1.229-2.823,1.855-4.229l6.157,2.586c-0.662,1.488-1.248,3.012-1.963,4.475 L303.646,248.716z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M302.841,249.681c1.01-1.916,1.772-3.951,2.656-5.933l-13.078-5.399c-0.783,1.731-1.439,3.524-2.332,5.2 L302.841,249.681z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M300.579,256.272c1.328-2.267,2.455-4.646,3.612-7.004l-13.733-6.465 c-1.013,2.049-1.982,4.116-3.142,6.082L300.579,256.272z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M289.642,267.614c1.549-1.967,2.902-4.082,4.328-6.139l-10.201-6.652 c-1.276,1.826-2.475,3.715-3.856,5.467L289.642,267.614z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M292.03,269.458l-0.418-0.354c1.584-2.015,2.972-4.176,4.431-6.281l0.473,0.273 c0.951,0.616,1.545,1.459,1.271,1.838c-0.177,0.25-0.662,0.246-1.24,0.037c0.356,0.528,0.436,1.116,0.145,1.532 c-0.303,0.438-0.932,0.566-1.598,0.384c0.4,0.563,0.502,1.202,0.195,1.641c-0.287,0.412-0.853,0.549-1.478,0.391 c0.392,0.461,0.551,0.902,0.371,1.136C293.903,270.411,292.938,270.144,292.03,269.458z M295.548,264.077l0.223,0.133l0.381,0.306 c0.554,0.291,1.062,0.354,1.22,0.131c0.188-0.262-0.216-0.842-0.879-1.277l-0.33-0.19L295.548,264.077z M294.554,266.177 c0.648,0.457,1.424,0.467,1.73,0.026c0.305-0.438,0.02-1.156-0.642-1.6l-0.336-0.185l-1.049,1.509L294.554,266.177z M293.175,268.169c0.641,0.472,1.406,0.492,1.713,0.054c0.303-0.443,0.025-1.17-0.625-1.627l-0.334-0.189l-1.041,1.51 L293.175,268.169z M292.284,269.331c0.635,0.478,1.305,0.662,1.497,0.414c0.15-0.197-0.049-0.606-0.452-0.998l-0.361-0.303 l-0.318-0.209l-0.657,0.85L292.284,269.331z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M302.069,255.026l-0.42-0.246c0.902-1.535,1.595-3.182,2.406-4.762l0.449,0.188 c0.916,0.439,1.547,1.029,1.401,1.322c-0.094,0.191-0.493,0.203-1.016,0.059c0.402,0.384,0.588,0.816,0.432,1.132 c-0.161,0.332-0.653,0.44-1.245,0.323c0.448,0.408,0.659,0.875,0.495,1.207c-0.151,0.312-0.598,0.427-1.149,0.324 c0.418,0.33,0.645,0.652,0.545,0.828C303.813,255.677,302.964,255.507,302.069,255.026z M303.884,250.95l0.211,0.096l0.377,0.213 c0.516,0.201,0.951,0.238,1.037,0.068c0.098-0.201-0.34-0.617-0.98-0.922l-0.312-0.133L303.884,250.95z M303.485,252.53 c0.636,0.32,1.279,0.311,1.441-0.023c0.164-0.329-0.221-0.854-0.857-1.166l-0.313-0.129l-0.562,1.146L303.485,252.53z M302.745,254.04c0.633,0.332,1.272,0.326,1.438-0.006c0.16-0.334-0.219-0.865-0.854-1.186l-0.312-0.134l-0.561,1.144 L302.745,254.04z M302.249,254.925c0.627,0.335,1.221,0.453,1.326,0.265c0.084-0.15-0.169-0.449-0.589-0.729l-0.358-0.215 l-0.308-0.145l-0.362,0.651L302.249,254.925z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M298.778,263.356l2.435-3.937l-7.117-4.159l-0.211,0.366l0.375,0.218c2.783,1.639,4.828,3.303,4.568,3.721 c-0.263,0.418-2.705-0.613-5.459-2.301l-0.367-0.229l-0.144,0.229l0.371,0.227c2.752,1.684,4.775,3.391,4.515,3.809 c-0.259,0.416-2.677-0.651-5.398-2.391l-0.365-0.231l-0.147,0.239L298.778,263.356z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M300.735,250.794c0.521,0.261,1.105,0.14,1.306-0.27c0.2-0.41-0.06-0.947-0.584-1.201l-5.461-2.643 l-0.685,1.391L300.735,250.794z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M299.692,252.874c0.511,0.271,1.127,0.181,1.314-0.235c0.201-0.41-0.058-0.957-0.576-1.222l-5.406-2.756 c-0.231,0.461-0.434,0.939-0.698,1.381L299.692,252.874z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M309.151,248.333c0.312,0.14,0.654,0.041,0.766-0.221c0.111-0.258-0.053-0.576-0.366-0.711l-3.271-1.41 l-0.389,0.906L309.151,248.333z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M308.58,249.663c0.312,0.144,0.65,0.047,0.765-0.211c0.108-0.262-0.054-0.582-0.363-0.721l-3.254-1.449 l-0.387,0.906L308.58,249.663z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M288.942,261.856c0.584,0.408,1.373,0.281,1.767-0.277c0.391-0.563,0.227-1.332-0.371-1.727l-6.881-4.543 l-0.31,0.44l6.855,4.582c0.27,0.179,0.324,0.568,0.127,0.853c-0.199,0.287-0.588,0.375-0.854,0.19l-6.803-4.664l-0.309,0.443 L288.942,261.856z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M286.868,264.774c0.562,0.422,1.387,0.346,1.774-0.219c0.39-0.562,0.232-1.349-0.35-1.763l-6.728-4.771 l-0.307,0.445l6.699,4.809c0.264,0.188,0.315,0.584,0.119,0.869c-0.189,0.291-0.595,0.356-0.854,0.166l-6.641-4.888l-0.334,0.427 L286.868,264.774z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M297.005,266.72c-0.273,0.389-0.746,0.6-1.308,0.592c0.199,0.526,0.169,1.049-0.102,1.438 c-0.221,0.32-0.576,0.517-1,0.57l3.777,2.762l2.731-3.94l-3.94-2.652C297.292,265.942,297.241,266.378,297.005,266.72z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M304.274,264.011l0.008,0.014c0.242,0.361,0.479,0.672,0.757,0.893l0.032,0.025 c0.47,0.066,0.982,0.221,1.551,0.514l0.068,0.041l-0.027-0.021l0.031,0.016l-0.055-0.033c-1.092-0.821-1.51-1.678-1.75-2.487 l-0.023-0.017c-0.559-0.373-1.182-1.117-1.961-1.686c-0.661-0.496-1.35-0.722-1.928-0.814l-0.238,0.379 c0.769,0.201,1.668,0.695,2.367,1.488C303.593,262.915,303.938,263.511,304.274,264.011z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M303.089,261.024c0.777,0.576,1.264,1.229,1.725,1.668c-0.121-0.473-0.188-0.918-0.342-1.353 c-0.367-0.319-0.893-0.682-1.539-0.948c-0.611-0.261-1.184-0.367-1.654-0.42l-0.182,0.293 C301.702,260.331,302.431,260.556,303.089,261.024z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M304.323,260.97c-0.209-0.466-0.526-0.877-1.098-1.22c-0.496-0.297-1.305-0.323-1.705-0.203l-0.143,0.259 c0.453-0.002,1.021,0.065,1.646,0.323C303.571,260.358,304.001,260.665,304.323,260.97z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M301.388,265.435c-0.389-0.25-0.793-0.586-1.176-0.979c-0.422-0.438-0.713-0.897-0.91-1.313l-0.275,0.444 c0.121,0.414,0.49,1.129,0.979,1.438C300.497,265.333,300.948,265.437,301.388,265.435z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M301.767,265.407l0.729-0.145c-0.438-0.328-0.884-0.791-1.287-1.316c-0.5-0.648-0.978-1.229-1.361-1.682 l-0.406,0.653c0.236,0.418,0.558,0.886,0.992,1.33C300.888,264.719,301.349,265.128,301.767,265.407z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M303.663,264.985c0.346-0.062,0.711-0.098,1.108-0.07c-0.369-0.297-0.699-0.744-1.045-1.229l-0.008-0.017 l-0.848-1.153c-0.681-0.771-1.515-1.281-2.238-1.515l-0.26,0.418c0.412,0.23,0.858,0.564,1.287,0.99l0.02,0.021l0.582,0.664 C302.774,263.844,303.208,264.522,303.663,264.985z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M302.757,265.194l0.658-0.162c-0.482-0.445-0.951-1.098-1.4-1.756c-0.562-0.734-1.184-1.322-1.738-1.701 l-0.33,0.529c0.445,0.42,0.986,0.985,1.507,1.66C301.894,264.339,302.335,264.841,302.757,265.194z"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M301.421,239.179l0.062-0.175c0.283,0,0.646,0.023,1.045,0.127c0.418,0.107,0.777,0.271,1.039,0.421 l0.394,0.713c-0.336-0.209-0.717-0.533-1.258-0.8C302.247,239.251,301.784,239.175,301.421,239.179z M302.548,238.987 c-0.406-0.102-0.756-0.107-1.027-0.078l0.056-0.146c0.229-0.089,0.715-0.121,1.049,0.01c0.383,0.149,0.627,0.354,0.811,0.59 C303.202,239.219,302.905,239.077,302.548,238.987z M302.907,240.171c-0.529-0.387-1.132-0.6-1.609-0.657l0.082-0.224 c0.354,0.013,0.789,0.092,1.25,0.318c0.541,0.262,1.02,0.627,1.402,0.795l0.016,0.008c0.262,0.424,0.633,0.857,1.399,1.234 l0.035,0.012l-0.022-0.006l0.021,0.01l-0.043-0.016c-0.379-0.123-0.701-0.174-0.985-0.179l-0.023-0.012 c-0.197-0.104-0.383-0.258-0.58-0.438l-0.008-0.009C303.571,240.765,303.278,240.462,302.907,240.171z M302.151,241.067 c-0.401-0.33-0.807-0.603-1.131-0.803l0.115-0.312c0.385,0.168,0.836,0.449,1.271,0.81c0.363,0.33,0.74,0.651,1.087,0.856 l-0.378,0.127C302.819,241.587,302.489,241.345,302.151,241.067z M302.53,240.649l-0.442-0.324l-0.017-0.008 c-0.313-0.205-0.627-0.359-0.899-0.457l0.09-0.246c0.459,0.08,1.025,0.305,1.535,0.678l0.672,0.572l0.006,0.008 c0.277,0.24,0.537,0.461,0.797,0.601c-0.235,0.008-0.444,0.053-0.637,0.106C303.3,241.36,302.942,241.021,302.53,240.649z M301.599,241.39c-0.318-0.209-0.57-0.438-0.764-0.648l0.153-0.383c0.291,0.223,0.66,0.508,1.039,0.82 c0.312,0.256,0.636,0.475,0.939,0.621l-0.418,0.122C302.261,241.8,301.933,241.612,301.599,241.39z M301.438,241.829 c-0.332-0.131-0.645-0.49-0.771-0.705l0.11-0.254c0.173,0.209,0.406,0.437,0.716,0.646c0.28,0.184,0.565,0.34,0.832,0.444 C302.06,241.989,301.774,241.964,301.438,241.829z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M319.384,265.608l0.373,0.174c0.748,0.408,1.192,1.031,0.993,1.394c-0.168,0.305-0.737,0.319-1.354,0.067 c0.176,0.146,0.322,0.312,0.445,0.486c0.647,0.147,1.186,0.062,1.377-0.279c0.287-0.52-0.351-1.416-1.427-1.998l-0.532-0.246 l-0.836,1.506l0.289,0.107L319.384,265.608z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M317.457,269.626l-0.536-0.241l1.354-2.404l0.492,0.322c0.365,0.207,0.734,0.348,1.074,0.428 c0.403,0.582,0.508,1.285,0.194,1.844c-0.33,0.596-1.024,0.869-1.789,0.76C318.048,270.06,317.781,269.817,317.457,269.626z M317.646,269.573c0.742,0.439,1.6,0.305,1.934-0.289c0.328-0.596-0.004-1.414-0.748-1.836l-0.377-0.162l-1.139,2.041 L317.646,269.573z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M319.841,267.729c-0.123-0.176-0.271-0.34-0.445-0.486l-0.355-0.172l-0.342-0.223l0.015-0.029 l-0.289-0.107l-0.148,0.269l0.492,0.322C319.132,267.51,319.501,267.649,319.841,267.729z"
                  }), t("polygon", {
                    fill: "#E2324B",
                    points: "318.712,266.819 318.698,266.849 319.039,267.071 319.396,267.243 318.964,266.942 \t\t"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M315.832,272.241l-0.518-0.279l1.457-2.342l0.471,0.355c0.322,0.192,0.666,0.311,1.004,0.356 c0.445,0.604,0.541,1.353,0.185,1.929c-0.34,0.543-0.994,0.795-1.697,0.723C316.496,272.72,316.192,272.464,315.832,272.241z M316.017,272.19c0.725,0.449,1.604,0.346,1.965-0.232c0.357-0.578,0.055-1.397-0.68-1.834l-0.373-0.174l-1.236,1.988 L316.017,272.19z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M318.246,270.333c-0.198-0.272-0.465-0.516-0.789-0.707l-0.536-0.241l-0.148,0.235l0.471,0.355 C317.565,270.169,317.908,270.286,318.246,270.333z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M317.164,274.292c0.199-0.317,0.013-0.821-0.432-1.309l-0.541-0.119c0.463,0.4,0.689,0.857,0.523,1.125 c-0.211,0.338-0.963,0.24-1.683-0.221l-0.332-0.242l0.687-1.1l-0.234-0.203l-0.873,1.401l0.476,0.349 C315.781,274.636,316.862,274.78,317.164,274.292z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M315.425,272.366l0.36,0.195l0.406,0.303l0.541,0.119c-0.236-0.264-0.541-0.521-0.9-0.742l-0.518-0.279 l-0.162,0.263l0.234,0.203L315.425,272.366z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M319.248,269.095c0.224-0.398-0.055-1.002-0.602-1.312l-0.025-0.014l-0.811,1.461l0.021,0.014 C318.38,269.562,319.024,269.495,319.248,269.095z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M317.655,271.761c0.242-0.388-0.012-0.99-0.553-1.314l-0.023-0.014l-0.883,1.42l0.021,0.014 C316.755,272.198,317.412,272.149,317.655,271.761z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M316.376,273.817c0.092-0.15-0.281-0.562-0.812-0.896l-0.023-0.014l-0.342,0.547l0.021,0.019 C315.753,273.81,316.281,273.966,316.376,273.817z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M320.388,267.04c0.088-0.153-0.308-0.543-0.859-0.848l-0.022-0.012l-0.312,0.563l0.023,0.012 C319.767,267.065,320.304,267.194,320.388,267.04z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M320.49,268.183c0.172,0.545,0.136,1.114-0.127,1.582c-0.295,0.526-0.817,0.875-1.473,0.948 c0.225,0.599,0.182,1.229-0.137,1.744c-0.285,0.459-0.75,0.765-1.304,0.875c0.146,0.289,0.201,0.566,0.16,0.816 c2.586,0.643,5.193,1.244,7.826,1.809c0.471-0.76,0.947-1.514,1.367-2.299c-1.746-2.018-3.519-3.996-5.312-5.934 C321.289,268.007,320.938,268.165,320.49,268.183z"
                  }), t("polygon", {
                    fill: "#F15C27",
                    points: "309.83,223.392 310.19,221.651 313.115,222.231 312.748,224.017 \t\t"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M295.38,232.085c1.473-4.487,2.684-9.043,3.561-13.655l11.287,2.118c0.484,2.769,1.002,5.613,1.262,8.48 c-1.608,2.346-3.475,4.551-5.221,6.715L295.38,232.085z"
                  }), t("polygon", {
                    fill: "#F15C27",
                    points: "312.835,224.347 313.323,221.978 314.46,222.2 313.964,224.591 \t\t"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M308.052,233.142c1.004-3.185,1.844-6.418,2.518-9.683l-0.254-0.604 c-0.729,3.631-1.649,7.229-2.801,10.758L308.052,233.142z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M307.515,233.614c1.149-3.527,2.072-7.127,2.801-10.758l-1.113-2.592l-0.491-0.091 c-0.974,5.142-2.324,10.209-3.963,15.199l0.537,0.181L307.515,233.614z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M312.001,227.094c-0.294-0.896-0.64-1.794-1.007-2.685l-0.477-0.104c-0.615,2.748-1.312,5.483-2.133,8.184 c0.916-0.582,1.83-1.18,2.686-1.809L312.001,227.094z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M297.187,232.823c1.523-4.637,2.779-9.344,3.683-14.115l-0.363-0.067 c-0.898,4.754-2.15,9.444-3.668,14.065L297.187,232.823z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M300.505,218.64l-2.084-0.39c-0.881,4.654-2.107,9.248-3.592,13.777l2.008,0.678 C298.354,228.085,299.606,223.394,300.505,218.64z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M295.753,233.228c-0.666-0.232-1.051-0.836-0.902-1.361c0.162-0.522,0.842-0.771,1.519-0.553 c0.676,0.218,1.09,0.832,0.922,1.369C297.136,233.226,296.429,233.462,295.753,233.228z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M296.294,231.552c-0.506-0.164-1.017,0.021-1.137,0.413c-0.119,0.396,0.188,0.855,0.684,1.025 c0.512,0.178,1.021-0.008,1.145-0.412C297.11,232.179,296.8,231.719,296.294,231.552z M296.261,231.663 c0.428,0.142,0.691,0.531,0.586,0.871c-0.104,0.342-0.535,0.498-0.963,0.351c-0.428-0.146-0.689-0.533-0.588-0.871 C295.401,231.679,295.831,231.522,296.261,231.663z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M296.208,231.831c-0.312-0.104-0.623,0.013-0.697,0.254c-0.076,0.242,0.115,0.525,0.424,0.631 c0.312,0.105,0.621-0.006,0.697-0.254C296.708,232.216,296.517,231.933,296.208,231.831z M296.173,231.94 c0.234,0.078,0.377,0.291,0.318,0.475c-0.056,0.185-0.289,0.271-0.523,0.191c-0.229-0.08-0.375-0.291-0.318-0.476 C295.706,231.95,295.942,231.866,296.173,231.94z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M299.431,219.573c-0.695-0.139-1.172-0.684-1.059-1.217c0.121-0.533,0.766-0.865,1.457-0.744 c0.709,0.123,1.194,0.672,1.071,1.219C300.784,219.38,300.128,219.714,299.431,219.573z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M299.792,217.86c-0.523-0.096-1.021,0.152-1.103,0.555c-0.088,0.402,0.269,0.812,0.791,0.914 c0.521,0.103,1.017-0.146,1.104-0.557C300.671,218.362,300.315,217.952,299.792,217.86z M299.769,217.97 c0.445,0.082,0.744,0.428,0.672,0.774c-0.073,0.349-0.489,0.558-0.936,0.471c-0.443-0.086-0.744-0.432-0.672-0.771 C298.905,218.103,299.325,217.892,299.769,217.97z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M299.731,218.142c-0.319-0.058-0.625,0.096-0.676,0.344c-0.053,0.248,0.166,0.498,0.484,0.559 c0.319,0.062,0.623-0.09,0.676-0.34C300.271,218.454,300.054,218.202,299.731,218.142z M299.708,218.255 c0.242,0.043,0.405,0.232,0.364,0.42c-0.04,0.189-0.268,0.306-0.51,0.259c-0.237-0.047-0.403-0.234-0.365-0.422 C299.239,218.325,299.468,218.21,299.708,218.255z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M299.663,233.659c1.561-4.752,2.85-9.58,3.774-14.471l-0.365-0.068c-0.922,4.875-2.204,9.685-3.76,14.42 L299.663,233.659z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M303.073,219.12l-2.084-0.389c-0.901,4.774-2.161,9.488-3.686,14.131l2.01,0.678 C300.868,228.804,302.151,223.995,303.073,219.12z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M298.224,234.083c-0.67-0.231-1.049-0.846-0.895-1.387c0.166-0.535,0.85-0.793,1.524-0.576 c0.676,0.219,1.082,0.842,0.912,1.396C299.606,234.071,298.897,234.319,298.224,234.083z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M298.776,232.366c-0.504-0.164-1.018,0.029-1.143,0.432c-0.123,0.404,0.184,0.871,0.68,1.043 c0.51,0.177,1.023-0.018,1.148-0.43C299.591,233.001,299.282,232.532,298.776,232.366z M298.743,232.479 c0.43,0.141,0.688,0.535,0.579,0.887c-0.108,0.348-0.54,0.512-0.969,0.365c-0.426-0.146-0.688-0.543-0.582-0.887 C297.878,232.5,298.313,232.339,298.743,232.479z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M298.688,232.651c-0.309-0.103-0.625,0.018-0.701,0.266c-0.077,0.248,0.113,0.535,0.423,0.642 c0.309,0.105,0.62-0.013,0.698-0.265S298.999,232.753,298.688,232.651z M298.653,232.765c0.234,0.075,0.375,0.295,0.316,0.481 c-0.057,0.189-0.295,0.277-0.527,0.199c-0.231-0.08-0.375-0.297-0.313-0.484C298.185,232.776,298.419,232.687,298.653,232.765z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M301.993,220.081c-0.697-0.139-1.168-0.694-1.054-1.242c0.123-0.547,0.771-0.893,1.461-0.77 c0.707,0.123,1.193,0.682,1.064,1.246C303.349,219.876,302.688,220.222,301.993,220.081z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M302.364,218.321c-0.522-0.092-1.021,0.164-1.108,0.576c-0.086,0.412,0.27,0.83,0.791,0.934 c0.521,0.103,1.018-0.153,1.106-0.576C303.241,218.833,302.888,218.415,302.364,218.321z M302.339,218.437 c0.445,0.082,0.742,0.434,0.67,0.791c-0.078,0.354-0.494,0.576-0.939,0.487c-0.44-0.088-0.741-0.438-0.67-0.788 C301.474,218.575,301.896,218.358,302.339,218.437z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M302.302,218.616c-0.32-0.061-0.625,0.098-0.68,0.353c-0.056,0.254,0.164,0.51,0.483,0.569 c0.32,0.062,0.625-0.094,0.679-0.352C302.841,218.929,302.624,218.673,302.302,218.616z M302.276,218.729 c0.242,0.045,0.406,0.235,0.365,0.43c-0.041,0.191-0.27,0.312-0.512,0.266c-0.242-0.049-0.402-0.237-0.363-0.432 C301.808,218.806,302.036,218.685,302.276,218.729z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M302.142,234.495c1.598-4.869,2.916-9.812,3.865-14.826l-0.365-0.067 c-0.945,4.996-2.26,9.924-3.852,14.774L302.142,234.495z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M305.642,219.601l-2.084-0.39c-0.926,4.896-2.215,9.729-3.774,14.486l2.008,0.678 C303.382,229.524,304.696,224.597,305.642,219.601z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M300.69,234.937c-0.666-0.232-1.045-0.855-0.885-1.408c0.17-0.553,0.859-0.816,1.533-0.6 c0.676,0.217,1.08,0.854,0.904,1.416C302.079,234.915,301.364,235.175,300.69,234.937z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M301.261,233.181c-0.506-0.166-1.021,0.034-1.15,0.448c-0.127,0.412,0.179,0.89,0.677,1.062 c0.508,0.176,1.022-0.023,1.151-0.447C302.069,233.819,301.767,233.345,301.261,233.181z M301.224,233.294 c0.432,0.144,0.687,0.545,0.578,0.902c-0.113,0.357-0.547,0.529-0.975,0.383c-0.427-0.146-0.687-0.551-0.576-0.904 C300.36,233.325,300.796,233.155,301.224,233.294z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M301.169,233.472c-0.312-0.103-0.627,0.02-0.705,0.274s0.109,0.549,0.418,0.652 c0.307,0.104,0.625-0.019,0.705-0.275S301.479,233.575,301.169,233.472z M301.134,233.587c0.232,0.078,0.373,0.3,0.312,0.492 c-0.059,0.193-0.295,0.285-0.528,0.207c-0.232-0.08-0.373-0.299-0.312-0.492C300.663,233.604,300.899,233.51,301.134,233.587z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M304.556,220.589c-0.695-0.139-1.166-0.704-1.049-1.268c0.127-0.559,0.777-0.916,1.469-0.795 c0.707,0.123,1.188,0.693,1.062,1.271C305.913,220.374,305.253,220.729,304.556,220.589z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M304.935,218.786c-0.521-0.094-1.021,0.174-1.11,0.594c-0.089,0.425,0.264,0.851,0.786,0.953 c0.521,0.103,1.021-0.164,1.109-0.596C305.81,219.308,305.46,218.88,304.935,218.786z M304.911,218.905 c0.444,0.08,0.739,0.438,0.664,0.805c-0.078,0.365-0.496,0.59-0.939,0.502c-0.443-0.086-0.742-0.444-0.668-0.803 C304.046,219.05,304.468,218.825,304.911,218.905z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M304.872,219.085c-0.322-0.059-0.627,0.105-0.683,0.365c-0.055,0.26,0.16,0.521,0.482,0.582 c0.32,0.062,0.625-0.1,0.682-0.363C305.409,219.405,305.192,219.144,304.872,219.085z M304.847,219.202 c0.242,0.045,0.404,0.242,0.363,0.439c-0.041,0.196-0.271,0.319-0.515,0.274c-0.239-0.049-0.401-0.242-0.36-0.438 C304.376,219.282,304.604,219.159,304.847,219.202z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M304.614,235.329c1.638-4.981,2.988-10.047,3.959-15.18l-0.362-0.068 c-0.968,5.117-2.312,10.164-3.943,15.129L304.614,235.329z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M308.21,220.081l-2.085-0.391c-0.948,5.021-2.27,9.969-3.868,14.842l2.01,0.678 C305.897,230.245,307.242,225.198,308.21,220.081z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M303.159,235.792c-0.666-0.231-1.041-0.864-0.875-1.434c0.174-0.562,0.862-0.842,1.536-0.623 c0.679,0.219,1.078,0.863,0.9,1.438C304.552,235.76,303.833,236.028,303.159,235.792z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M303.743,233.991c-0.507-0.166-1.023,0.043-1.156,0.471c-0.129,0.425,0.17,0.906,0.67,1.078 c0.51,0.176,1.027-0.033,1.16-0.465C304.552,234.642,304.249,234.155,303.743,233.991z M303.708,234.112 c0.428,0.139,0.684,0.551,0.569,0.914c-0.114,0.367-0.553,0.545-0.979,0.396c-0.428-0.145-0.687-0.555-0.572-0.916 C302.839,234.147,303.278,233.972,303.708,234.112z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M303.649,234.292c-0.309-0.102-0.627,0.027-0.709,0.287c-0.08,0.262,0.105,0.56,0.414,0.664 c0.31,0.104,0.625-0.022,0.707-0.287C304.144,234.69,303.96,234.394,303.649,234.292z M303.614,234.411 c0.234,0.076,0.371,0.301,0.312,0.496c-0.062,0.199-0.299,0.297-0.533,0.219c-0.233-0.082-0.371-0.303-0.309-0.5 C303.142,234.429,303.378,234.331,303.614,234.411z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M307.117,221.097c-0.694-0.14-1.163-0.718-1.043-1.291c0.131-0.576,0.781-0.945,1.472-0.822 c0.709,0.125,1.188,0.705,1.059,1.297C308.479,220.87,307.815,221.237,307.117,221.097z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M307.507,219.249c-0.525-0.094-1.023,0.183-1.115,0.613c-0.09,0.434,0.258,0.867,0.783,0.971 c0.521,0.104,1.02-0.172,1.112-0.612C308.38,219.778,308.03,219.344,307.507,219.249z M307.481,219.37 c0.443,0.082,0.74,0.447,0.662,0.822s-0.502,0.606-0.945,0.52c-0.44-0.088-0.74-0.452-0.662-0.819 C306.612,219.522,307.035,219.292,307.481,219.37z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M307.442,219.556c-0.32-0.058-0.627,0.11-0.684,0.377c-0.058,0.268,0.16,0.53,0.479,0.596 c0.318,0.061,0.623-0.107,0.683-0.377C307.976,219.88,307.763,219.614,307.442,219.556z M307.419,219.677 c0.239,0.045,0.399,0.243,0.358,0.446c-0.043,0.205-0.272,0.328-0.514,0.281c-0.244-0.045-0.402-0.244-0.361-0.445 C306.944,219.76,307.175,219.632,307.419,219.677z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M309.239,217.454c-0.141-0.397-0.627-0.639-1.084-0.539c-0.334,0.072-0.562,0.304-0.604,0.576 c-0.017,0.103-0.004,0.207,0.035,0.312c1.479,3.491,2.887,7.17,3.979,10.954l1.365-1.338 C311.813,223.974,310.673,220.659,309.239,217.454z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M312.574,232.216c0.074,0.431,0.519,0.742,0.99,0.691c0.486-0.049,0.795-0.453,0.697-0.895l-0.637-2.234 l-1.365,1.336L312.574,232.216z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M315.007,226.808c-0.382-0.277-0.929-0.226-1.224,0.108c-3.608,3.638-7.297,6.967-11.167,9.929 c-0.316,0.276-0.287,0.748,0.062,1.059c0.354,0.309,0.895,0.336,1.215,0.057c3.918-2.989,7.641-6.36,11.264-10.039l0.16-0.299 C315.394,227.331,315.283,227.01,315.007,226.808z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M299.673,231.26c0.406-1.306,0.856-2.601,1.162-3.933l4.387,1.193c-0.318,1.389-0.785,2.737-1.211,4.102 L299.673,231.26z"
                  }), t("polygon", {
                    fill: "#E8D320",
                    points: "300.86,227.222 300.288,225.606 306.554,227.21 305.249,228.411 \t\t"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M300.821,229.313c0.171-0.486,0.271-0.99,0.404-1.484l3.527,0.974c-0.14,0.512-0.246,1.03-0.422,1.532 L300.821,229.313z"
                  }), t("polygon", {
                    fill: "#62381B",
                    points: "303.763,232.13 304.245,230.61 303.354,230.349 302.876,231.856 \t\t"
                  }), t("polygon", {
                    fill: "#62381B",
                    points: "303.083,230.269 300.735,229.579 300.269,231.046 302.604,231.772 \t\t"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M305.396,228.644c0.066,0.752,0.168,1.518,0.183,2.266l-1.39,1.812 C304.606,231.366,305.077,230.024,305.396,228.644z"
                  }), t("polygon", {
                    fill: "#62381B",
                    points: "256.457,282.702 258.268,281.39 268.365,295.501 266.24,297.032 \t\t"
                  }), t("polygon", {
                    fill: "#62381B",
                    points: "252.484,285.274 254.357,284.054 263.779,298.622 261.584,300.05 \t\t"
                  }), t("polygon", {
                    fill: "#62381B",
                    points: "248.395,287.659 250.324,286.528 259.055,301.524 256.791,302.847 \t\t"
                  }), t("polygon", {
                    fill: "#62381B",
                    points: "244.197,289.853 246.178,288.815 254.193,304.202 251.871,305.413 \t\t"
                  }), t("polygon", {
                    fill: "#62381B",
                    points: "239.902,291.844 241.93,290.903 249.217,306.649 246.838,307.749 \t\t"
                  }), t("polygon", {
                    fill: "#62381B",
                    points: "235.518,293.632 237.588,292.788 244.127,308.862 241.701,309.845 \t\t"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M240.68,309.388c9.885-3.763,19.33-8.74,27.863-14.992l2.803,3.856 c-8.885,6.509-18.711,11.689-28.998,15.603L240.68,309.388z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M240.656,314.022c11.375-4.043,22.104-9.861,31.796-17.049l2.194,1.168 c-10.383,7.809-21.932,14.129-34.233,18.35L240.656,314.022z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M242.426,316.29c11.016-4.055,21.471-9.645,30.924-16.608l0.783,1.065 c-9.553,7.039-20.119,12.689-31.252,16.787L242.426,316.29z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M244.539,316.772c9.907-3.863,19.407-8.836,28.035-15.072l0.77,1.078 c-8.717,6.301-18.318,11.33-28.33,15.232L244.539,316.772z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M246.83,317.101c8.705-3.508,17.061-7.922,24.778-13.271l0.752,1.088 c-7.799,5.408-16.243,9.867-25.036,13.416L246.83,317.101z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M250.008,317.056c6.887-2.968,13.514-6.533,19.779-10.648l0.727,1.107 c-6.332,4.157-13.025,7.762-19.984,10.758L250.008,317.056z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M264.803,312.54c-0.258-0.444-0.127-1.004,0.293-1.246c0.42-0.246,0.973-0.084,1.236,0.357l1.051,1.766 c0.262,0.441,0.125,1.004-0.307,1.254c-0.437,0.254-0.994,0.097-1.248-0.35L264.803,312.54z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M261.984,314.405c-0.309-0.57-0.11-1.234,0.412-1.541c0.523-0.307,1.205-0.102,1.521,0.457l1.264,2.238 c0.316,0.561,0.131,1.27-0.416,1.586c-0.543,0.315-1.256,0.076-1.557-0.48L261.984,314.405z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M259.119,315.892c-0.289-0.57-0.091-1.261,0.446-1.541c0.537-0.277,1.22-0.047,1.521,0.52l1.209,2.271 c0.301,0.565,0.092,1.26-0.467,1.551c-0.56,0.289-1.248,0.061-1.541-0.508L259.119,315.892z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M256.473,316.974c-0.227-0.468-0.041-0.99,0.387-1.215c0.433-0.226,0.968-0.035,1.197,0.426l0.92,1.836 c0.23,0.461,0.058,1.02-0.389,1.25c-0.441,0.231-1,0.01-1.221-0.445L256.473,316.974z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M263.367,320.073c-0.234-0.441-0.066-0.986,0.37-1.213c0.438-0.229,0.988-0.059,1.228,0.381 c0.24,0.439,0.074,0.982-0.371,1.213C264.148,320.687,263.6,320.515,263.367,320.073z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M264.75,319.976c1.059,1.19,2.28,1.297,2.192,0.774c-0.254-0.731-1.606-3.67-2.35-1.285L264.75,319.976z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M264.084,320.321c0.401,1.531-0.193,2.59-0.574,2.242c-0.459-0.599-1.984-3.365,0.234-2.658 L264.084,320.321z"
                  }), t("polygon", {
                    fill: "#62381B",
                    points: "260.064,312.548 260.588,312.276 264.361,319.26 263.805,319.548 \t\t"
                  }), t("polygon", {
                    fill: "#62381B",
                    points: "233.055,294.507 234.527,293.999 237.809,302.88 236.197,303.438 \t\t"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M229.93,295.571c0.502-0.133,0.992-0.307,1.48-0.486l2.987,8.984c-0.535,0.195-1.069,0.383-1.619,0.531 L229.93,295.571z"
                  }), t("polygon", {
                    fill: "#62381B",
                    points: "226.764,296.51 228.258,296.062 230.949,305.138 229.314,305.626 \t\t"
                  }), t("polygon", {
                    fill: "#62381B",
                    points: "223.57,297.329 225.084,296.962 227.477,306.122 225.82,306.524 \t\t"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M224.857,306.153c4.81-1.057,9.484-2.643,14.104-4.34l0.719,1.869c-4.701,1.731-9.465,3.346-14.361,4.424 L224.857,306.153z"
                  }), t("polygon", {
                    fill: "#62381B",
                    points: "260.309,279.937 259.037,280.839 264.621,288.485 266.01,287.493 \t\t"
                  }), t("polygon", {
                    fill: "#62381B",
                    points: "262.891,277.882 261.67,278.849 267.5,286.308 268.834,285.249 \t\t"
                  }), t("polygon", {
                    fill: "#62381B",
                    points: "265.42,275.769 264.254,276.798 270.326,284.062 271.605,282.937 \t\t"
                  }), t("polygon", {
                    fill: "#62381B",
                    points: "267.898,273.597 266.73,274.624 273.037,281.683 274.316,280.556 \t\t"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M274.525,279.532c-3.623,3.322-7.375,6.525-11.43,9.322l1.16,1.635c4.129-2.85,7.951-6.111,11.638-9.492 L274.525,279.532z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M191.651,320.339c11.527,0.802,23.154-0.104,34.443-2.6l-0.756,2.109 c-10.709,2.246-21.703,3.145-32.623,2.453L191.651,320.339z"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M193.06,299.966c9.56,0.664,19.198-0.092,28.577-2.157l4.35,19.453 c-11.241,2.483-22.819,3.387-34.301,2.59L193.06,299.966z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M201.93,324.435l0.025,1.559c2.295,1.443,4.668,2.797,7.123,4.183l0.614,0.317l0.562-0.426 c2.25-1.744,4.432-3.359,6.5-5.228l-0.209-1.538c-2.209,2.02-4.547,3.747-6.965,5.641 C206.938,327.497,204.385,325.983,201.93,324.435z"
                  }), t("path", {
                    fill: "#69C8C3",
                    d: "M201.514,300.198c3.938-0.107,7.875-0.35,11.781-0.914l3.149,23.166c-2.194,2.021-4.522,3.752-6.93,5.648 c-2.633-1.451-5.176-2.968-7.621-4.523L201.514,300.198z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M224.012,308.358l-0.201-0.906c-10.313,2.279-20.926,3.105-31.45,2.375l-0.062,0.926 C202.91,311.491,213.613,310.655,224.012,308.358z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M209.867,322.003c0.096,1.216,1.254,2.097,2.586,1.97s2.293-1.201,2.139-2.429l-0.367-3.02l-4.606,0.447 L209.867,322.003z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M210.465,319.642l3.065-0.291l0.263,2.278c0.094,0.802-0.541,1.517-1.416,1.599 c-0.873,0.082-1.642-0.5-1.709-1.304L210.465,319.642z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M203.701,322.354c0.034,1.219,1.146,2.156,2.483,2.094c1.34-0.061,2.351-1.092,2.26-2.311l-0.215-3.031 l-4.623,0.211L203.701,322.354z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M204.418,320.026l3.076-0.139l0.146,2.284c0.055,0.808-0.617,1.49-1.492,1.529 c-0.879,0.039-1.612-0.58-1.643-1.387L204.418,320.026z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M209.336,315.544c0.096,1.213,1.197,2.103,2.459,1.98c1.266-0.119,2.166-1.188,2.014-2.414l-0.367-3.021 l-4.354,0.423L209.336,315.544z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M209.889,313.187l2.902-0.271l0.262,2.277c0.094,0.801-0.504,1.51-1.334,1.588 c-0.826,0.08-1.557-0.508-1.625-1.309L209.889,313.187z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M203.5,315.878c0.033,1.22,1.088,2.156,2.354,2.099c1.271-0.056,2.226-1.082,2.135-2.302l-0.215-3.032 l-4.373,0.196L203.5,315.878z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M204.174,313.55l2.908-0.129l0.146,2.287c0.053,0.806-0.58,1.484-1.41,1.523 c-0.832,0.037-1.528-0.586-1.559-1.392L204.174,313.55z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M216.045,303.985c0.289,1.9,1.69,3.344,3.104,3.035c1.416-0.281,2.242-2.037,1.845-3.935l-1.019-4.938 c-1.572,0.27-3.121,0.682-4.709,0.854L216.045,303.985z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M217.008,303.849c0.193,1.184,1.045,2.014,1.897,1.836c0.855-0.168,1.363-1.25,1.132-2.414l-0.972-4.949 c-0.963,0.178-1.918,0.396-2.885,0.553L217.008,303.849z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M208.146,304.921c0.146,1.933,1.426,3.384,2.863,3.25c1.438-0.108,2.393-1.836,2.137-3.768l-0.641-5.002 c-1.578,0.238-3.172,0.309-4.758,0.49L208.146,304.921z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M209.115,304.825c0.103,1.185,0.89,2.078,1.755,1.996c0.866-0.078,1.457-1.102,1.313-2.279l-0.594-5.01 l-2.92,0.271L209.115,304.825z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M202.385,305.233c0.037,1.936,1.236,3.449,2.676,3.383c1.441-0.072,2.49-1.666,2.342-3.621l-0.36-5.029 l-4.775,0.226L202.385,305.233z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M203.354,305.185c0.037,1.186,0.773,2.117,1.642,2.078c0.871-0.041,1.516-1.031,1.438-2.218l-0.315-5.034 l-2.929,0.133L203.354,305.185z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M194.623,305.097c-0.105,1.93,0.975,3.577,2.414,3.637c1.442,0,2.608-1.566,2.604-3.502l0.013-5.045 c-1.593,0.02-3.187-0.004-4.775-0.127L194.623,305.097z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M195.592,305.151c-0.052,1.18,0.612,2.199,1.48,2.229c0.87-0.002,1.589-0.965,1.599-2.151l0.06-5.043 c-0.978,0.01-1.955,0.006-2.931-0.074L195.592,305.151z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M224.166,314.323l-0.599-2.795l-0.832,0.16l0.781,3.795C223.99,315.351,224.279,314.851,224.166,314.323z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M222.232,314.696l-0.549-2.805l0.832-0.16l0.773,3.795C222.801,315.581,222.336,315.226,222.232,314.696z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M221.369,314.864l-0.527-2.809l-0.832,0.162l0.689,3.813C221.172,315.897,221.471,315.396,221.369,314.864 z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M219.438,315.243l-0.479-2.815l0.832-0.164l0.68,3.815C219.982,316.13,219.527,315.774,219.438,315.243z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M218.57,315.374l-0.461-2.819l-0.84,0.12l0.596,3.828C218.344,316.392,218.656,315.907,218.57,315.374z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M216.621,315.653l-0.412-2.828l0.84-0.121l0.586,3.832C217.145,316.563,216.699,316.188,216.621,315.653z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M200.457,316.868l-0.016-2.856l-0.847-0.005l-0.01,3.875C200.076,317.844,200.458,317.407,200.457,316.868 z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M198.489,316.862l0.036-2.859l0.847,0.002l-0.019,3.875C198.863,317.837,198.483,317.399,198.489,316.862z "
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M197.612,316.86l0.057-2.859h-0.848l-0.105,3.873C197.207,317.833,197.601,317.397,197.612,316.86z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M195.645,316.804l0.104-2.855l0.848,0.047l-0.114,3.875C195.995,317.8,195.626,317.341,195.645,316.804z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M194.769,316.755l0.125-2.854l-0.846-0.047l-0.199,3.871C194.341,317.71,194.746,317.294,194.769,316.755z "
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M192.804,316.651l0.176-2.855l0.847,0.048l-0.209,3.87C193.13,317.646,192.771,317.188,192.804,316.651z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M208.525,326.079c-0.039-0.549,0.343-1.028,0.849-1.082c0.506-0.049,0.955,0.361,1,0.912 c0.049,0.555-0.332,1.041-0.849,1.092C209.009,327.052,208.561,326.64,208.525,326.079z"
                  }), t("path", {
                    fill: "#A0BF3B",
                    d: "M286.642,272.946c-0.858-0.729-1.041-1.92-0.406-2.66c0.615-0.76,1.8-0.838,2.693-0.141 c0.879,0.688,1.111,1.922,0.469,2.711C288.733,273.635,287.501,273.673,286.642,272.946z"
                  }), t("path", {
                    fill: "#A0BF3B",
                    d: "M287.226,270.46c-0.707-0.575-0.922-1.516-0.473-2.1c0.447-0.584,1.397-0.605,2.123-0.055 c0.727,0.555,0.938,1.493,0.473,2.098C288.886,271.01,287.937,271.034,287.226,270.46z"
                  }), t("path", {
                    fill: "#A0BF3B",
                    d: "M284.915,269.829c-0.713-0.588-0.875-1.479-0.451-2.063c0.438-0.572,1.379-0.582,2.098-0.021 c0.722,0.56,0.937,1.496,0.482,2.088C286.603,270.435,285.61,270.403,284.915,269.829z"
                  }), t("path", {
                    fill: "#A0BF3B",
                    d: "M283.812,271.118c0.693,0.592,1.65,0.609,2.138,0.043c0.487-0.565,0.303-1.492-0.419-2.07 c-0.702-0.565-1.653-0.581-2.129-0.036C282.933,269.603,283.116,270.526,283.812,271.118z"
                  }), t("path", {
                    fill: "#A0BF3B",
                    d: "M284.837,273.274c0.688,0.598,1.649,0.611,2.145,0.031c0.492-0.578,0.322-1.519-0.383-2.097 c-0.707-0.576-1.668-0.592-2.145-0.03C283.976,271.737,284.147,272.677,284.837,273.274z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M278.921,265.038c-0.396-0.326-0.56-0.774-0.363-1.002c0.203-0.225,0.662-0.166,1.066,0.158 c0.414,0.313,6.756,6.191,6.739,6.193C286.356,270.399,279.31,265.376,278.921,265.038z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M279.944,271.298c-0.573-0.516-0.729-1.305-0.346-1.762l1.266-1.485c0.388-0.453,1.188-0.423,1.785,0.067 l1.949,1.604c0.598,0.489,0.748,1.274,0.34,1.754l-1.33,1.562c-0.405,0.482-1.203,0.455-1.778-0.061L279.944,271.298z"
                  }), t("path", {
                    fill: "#A0BF3B",
                    d: "M276.354,266.118c-0.348-0.299-0.485-0.709-0.311-0.912c0.172-0.205,0.598-0.133,0.944,0.164 c0.357,0.287,5.863,5.656,5.857,5.664S276.692,266.425,276.354,266.118z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M277.116,267.937c0.733-0.865,0.479-2.308-0.554-3.342c-0.939,1.075-1.812,2.211-2.827,3.221 C274.881,268.696,276.405,268.825,277.116,267.937z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M280.79,265.472c1.02-1.341,0.553-3.437-1.035-4.865c-1.244,1.678-2.553,3.305-3.941,4.869 C277.542,266.728,279.694,266.753,280.79,265.472z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M272.041,273.284c0.83-0.777,0.68-2.234-0.289-3.354c-0.98,1.041-2.056,1.989-3.066,2.998 C269.773,273.901,271.221,274.071,272.041,273.284z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M271.623,270.069c1.037,0.625,2.221,0.613,2.896-0.105c0.674-0.717,0.613-1.897-0.076-2.893 L271.623,270.069z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M283.985,278.915c-0.907-0.86-1.032-2.207-0.274-3.008c0.77-0.791,2.069-0.846,3.026-0.012 c0.933,0.807,1.136,2.225,0.328,3.053C286.272,279.788,284.896,279.774,283.985,278.915z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M284.813,276.159c-0.742-0.67-0.922-1.738-0.385-2.369c0.537-0.635,1.6-0.614,2.375,0.041 c0.773,0.654,0.947,1.717,0.389,2.373C286.634,276.858,285.575,276.849,284.813,276.159z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M282.267,275.331c-0.75-0.69-0.887-1.711-0.35-2.319c0.522-0.619,1.571-0.584,2.34,0.075 c0.766,0.662,0.945,1.722,0.399,2.365C284.099,276.085,283.009,276.013,282.267,275.331z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M280.956,276.724c0.731,0.698,1.797,0.768,2.375,0.149c0.58-0.61,0.438-1.655-0.318-2.33 c-0.756-0.676-1.822-0.746-2.379-0.155C280.077,274.978,280.222,276.024,280.956,276.724z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M281.954,279.196c0.727,0.707,1.795,0.77,2.385,0.141c0.59-0.627,0.463-1.688-0.285-2.371 c-0.75-0.684-1.82-0.747-2.389-0.145C281.099,277.427,281.228,278.491,281.954,279.196z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M282.614,277.626c-0.909-0.858-1.043-2.196-0.299-2.983c0.756-0.775,2.049-0.818,3.006,0.014 c0.931,0.809,1.144,2.213,0.351,3.029C284.89,278.511,283.522,278.485,282.614,277.626z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M283.413,274.901c-0.742-0.67-0.931-1.729-0.402-2.353c0.527-0.62,1.584-0.594,2.357,0.062 c0.772,0.655,0.954,1.707,0.405,2.354C285.226,275.612,284.175,275.589,283.413,274.901z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M280.878,274.058c-0.75-0.689-0.896-1.701-0.367-2.299c0.514-0.609,1.555-0.566,2.322,0.096 c0.766,0.662,0.953,1.711,0.418,2.346C282.702,274.821,281.62,274.741,280.878,274.058z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M279.589,275.429c0.733,0.698,1.789,0.774,2.358,0.17c0.568-0.604,0.421-1.64-0.336-2.312 c-0.758-0.676-1.815-0.754-2.362-0.174S278.856,274.729,279.589,275.429z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M280.601,277.89c0.728,0.705,1.787,0.774,2.367,0.157c0.582-0.618,0.445-1.672-0.303-2.354 c-0.75-0.684-1.812-0.756-2.371-0.162C279.735,276.128,279.874,277.183,280.601,277.89z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M274.52,268.388c-0.42-0.386-0.578-0.894-0.352-1.132c0.229-0.237,0.756-0.122,1.184,0.257 c0.437,0.368,7.11,7.239,7.102,7.252C282.44,274.778,274.928,268.788,274.52,268.388z"
                  }), t("path", {
                    fill: "#69C8C3",
                    d: "M142.007,293.796c0.827,0.281,1.585,0.707,2.373,1.074c0.847,0.424,1.715,0.834,2.506,1.357 c0.407,0.27,0.795,0.549,1.211,0.778c-0.336,0.304-0.661,0.689-0.871,0.939l-0.144,0.168c-0.188,0.223-0.405,0.609-0.638,1.02 c-0.554,0.984-1.178,2.104-2.221,2.369c-0.527,0.133-1.012,0.08-1.43-0.151c-1.146-0.644-1.217-2.308-1.234-3.306l-0.004-0.233 c-0.032-1.646-0.129-3.177-1.161-4.109C140.943,293.597,141.439,293.594,142.007,293.796z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M140.415,292.788c1.729,1.082,1.824,3.121,1.896,5.01c0.027,0.964,0.004,3.4,1.701,2.979 c1.121-0.285,1.809-2.344,2.515-3.152c0.586-0.676,1.617-2.014,2.632-1.785c-2.024-0.872-3.769-1.809-5.345-3.409 c-1.3-1.349-2.265-3.636-4.644-2.089C139.544,291.198,139.994,291.964,140.415,292.788z"
                  }), t("path", {
                    fill: "#69C8C3",
                    d: "M143.357,294.499c-0.702-0.172-1.379-0.18-2.051-0.022l-0.655,0.155c-1.588,0.371-3.695,0.902-5.146-0.17 c-0.788-0.553-1.311-1.436-1.527-2.608c-0.209-1.146,0.082-2.328,0.399-3.5c0.56-2.066,0.872-3.383-0.267-4.412l0.097-0.033 c0.354-0.156,0.71-0.27,1.061-0.342c0.02,0.145,0.092,0.272,0.241,0.348c1.885,0.984,3.317,2.502,4.538,4.33 C140.878,290.491,141.837,292.735,143.357,294.499z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M142.677,293.64c-0.499-0.039-1.01-0.006-1.535,0.112c-2.344,0.595-5.758,1.625-6.428-2.026 c-0.476-2.545,2.059-5.854,0.16-8.062l0.393-0.096c0.02,0.145,0.093,0.271,0.241,0.346c1.896,0.978,3.236,1.709,4.444,3.517 C140.609,289.353,141.542,292.011,142.677,293.64z"
                  }), t("path", {
                    fill: "#A0BF3B",
                    d: "M139.897,286.624c0.768,0.621,1.298,1.57,1.914,2.355c1.242,1.623,2.381,3.463,4.035,4.711 c1.613,1.27,3.73,2.545,5.998,2.604l-0.546,1.123c-1.119,0.308-3.387,0.609-5.744-0.76c-1.375-0.744-2.613-1.908-3.589-3.496 c-1.645-2.504-2.187-4.465-2.542-5.924c-0.109-0.412-0.201-0.766-0.294-1.072C139.406,286.284,139.666,286.431,139.897,286.624z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M140.743,286.515c1.064,2.567,2.42,5.133,5.007,6.678c0.404,0.225,0.832,0.416,1.266,0.568 c2.124,0.795,4.763,0.096,6.728-1.279l-1.997,4.016c0.064,0.043-5.146,2.338-9.17-3.742c-3.843-6.034-1.533-8.502-5.713-9.62 c-2.745-0.851-1.038-1.476,0.738-1.89c0.959,1.426,1.707,2.984,2.835,4.812L140.743,286.515z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M138.784,286.048c0.701,0.222,1.355,0.404,1.971,0.56l0.449,0.889c-0.792-0.19-1.654-0.42-2.609-0.729 c-1.594-0.48-2.973-1.205-4.094-2.111c-1.276-0.996-1.833-1.807-2.105-2.26l-0.024-1.637l0.483,0.5 C132.831,281.243,134.076,284.47,138.784,286.048z"
                  }), t("polygon", {
                    fill: "#E2324B",
                    points: "134.181,282.228 136.369,279.425 136.405,279.446 \t\t"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M135.858,278.985c2.089,1.623,3.185,4.297,4.61,7.043l0.048,0.1l0.238,0.479 c-0.615-0.154-1.27-0.338-1.971-0.56c-4.708-1.567-5.967-4.403-5.964-4.364l-0.448-0.896l0.152-4.562 C132.713,276.337,135.664,278.886,135.858,278.985z"
                  }), t("path", {
                    fill: "#A0BF3B",
                    d: "M147.281,293.077c-6.068-2.371-5.554-12.186-14.756-17.799c0.172-0.213,0.006-0.717,0.168-0.902 c6.889,6.103,14.495,11.402,22.81,15.412C153.999,292.231,150.03,294.142,147.281,293.077z"
                  }), t("polygon", {
                    fill: "#2D948D",
                    points: "147.337,292.45 147.315,291.167 148.499,291.31 148.542,292.515 \t\t"
                  }), t("polygon", {
                    fill: "#2D948D",
                    points: "148.893,292.349 148.993,291.495 150.108,291.788 \t\t"
                  }), t("polygon", {
                    fill: "#EE7D8F",
                    points: "148.762,291.094 147.64,290.802 147.57,289.735 149.12,289.899 \t\t"
                  }), t("polygon", {
                    fill: "#E8D320",
                    points: "149.485,290.558 149.753,289.071 151.858,289.616 151.246,290.972 \t\t"
                  }), t("polygon", {
                    fill: "#E2324B",
                    points: "146.523,289.321 147.682,289.345 147.533,287.862 146.574,288.946 \t\t"
                  }), t("polygon", {
                    fill: "#E2324B",
                    points: "148.084,289.386 147.978,288.45 149.927,288.563 149.061,289.655 \t\t"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M147.102,290.837l-0.595-0.659l-0.845,0.102C146.126,290.493,146.619,290.657,147.102,290.837z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M146.943,291.112c-0.407-0.164-0.833-0.297-1.227-0.488l-0.04,0.906l1.094,0.787L146.943,291.112z"
                  }), t("polygon", {
                    fill: "#EE7D8F",
                    points: "145.32,289.78 144.665,288.896 145.11,287.989 146.227,288.567 146.3,289.649 \t\t"
                  }), t("polygon", {
                    fill: "#E2324B",
                    points: "149.746,291.427 149.859,291.06 151.7,291.478 151.372,292.368 \t\t"
                  }), t("polygon", {
                    fill: "#EE7D8F",
                    points: "150.227,292.013 150.888,292.368 150.075,292.751 149.31,292.544 \t\t"
                  }), t("polygon", {
                    fill: "#2D948D",
                    points: "142.667,284.835 143.297,284.562 142.998,283.731 142.175,283.491 \t\t"
                  }), t("polygon", {
                    fill: "#E8D320",
                    points: "142.935,285.104 142.248,285.536 142.902,286.298 143.811,286.036 \t\t"
                  }), t("polygon", {
                    fill: "#E2324B",
                    points: "144.253,284.624 143.193,285.067 144.769,285.521 \t\t"
                  }), t("polygon", {
                    fill: "#2D948D",
                    points: "143.607,285.399 144.544,285.712 144.791,286.269 144.343,286.413 143.652,285.466 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "142.25,284.181 142.66,285.159 142.008,285.415 141.605,284.521 \t\t"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M141.993,286.188l0.271-0.17c0.302,0.377,0.642,0.703,0.966,1.051l-0.613,0.309L141.993,286.188z"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "144.834,285.802 145.109,286.487 145.727,286.401 145.194,285.554 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "143.705,299.181 143.078,299.028 142.781,299.724 143.234,300.312 \t\t"
                  }), t("polygon", {
                    fill: "#EE7D8F",
                    points: "143.677,298.866 144.438,298.942 144.453,298.116 143.675,297.808 \t\t"
                  }), t("polygon", {
                    fill: "#2D948D",
                    points: "142.448,298.479 143.466,298.757 142.689,297.628 \t\t"
                  }), t("polygon", {
                    fill: "#E2324B",
                    points: "143.395,298.323 142.967,297.624 143.167,297.14 143.562,297.284 143.408,298.26 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "143.604,299.819 143.909,298.976 144.536,299.14 144.279,299.931 \t\t"
                  }), t("polygon", {
                    fill: "#A0BF3B",
                    points: "145.02,298.653 144.723,298.624 144.734,297.448 145.339,297.569 \t\t"
                  }), t("polygon", {
                    fill: "#E8D320",
                    points: "142.832,297.409 143.097,296.833 142.623,296.556 142.423,297.378 \t\t"
                  }), t("polygon", {
                    fill: "#E2324B",
                    points: "143.924,296.917 144.47,297.331 145.535,297.317 144.713,296.61 \t\t"
                  }), t("polygon", {
                    fill: "#E2324B",
                    points: "136.967,290.31 137.877,289.874 138.25,291.26 \t\t"
                  }), t("polygon", {
                    fill: "#EE7D8F",
                    points: "135.799,289.28 136.089,288.358 136.952,288.278 136.741,289.56 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "136.323,290.22 135.437,289.827 135.156,291.052 136.003,291.815 \t\t"
                  }), t("polygon", {
                    fill: "#E8D320",
                    points: "137.658,291.247 136.538,290.46 137.131,292.456 \t\t"
                  }), t("polygon", {
                    fill: "#E2324B",
                    points: "136.492,291.136 136.799,292.356 136.423,293.024 135.987,292.649 136.457,291.233 \t\t"
                  }), t("polygon", {
                    fill: "#A0BF3B",
                    points: "136.902,292.735 136.425,293.521 136.925,294.13 137.379,292.938 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "151.741,290.819 152.134,290.075 153.831,290.495 153.074,291.216 \t\t"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M134.513,282.405l0.601,1.053l0.688-0.608c0.046-0.062-0.35-1.088-0.348-1.084L134.513,282.405z"
                  }), t("polygon", {
                    fill: "#E2324B",
                    points: "135.53,283.88 135.937,283.349 136.787,284.405 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "136.21,282.874 136.788,282.278 137.156,283.548 136.799,284.022 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "136.103,282.3 136.824,281.294 136.379,280.589 135.875,281.927 \t\t"
                  }), t("polygon", {
                    fill: "#A0BF3B",
                    points: "136.929,281.897 137.451,281.26 138.331,283.261 137.677,283.86 \t\t"
                  }), t("path", {
                    fill: "#69C8C3",
                    d: "M137.044,284.347l0.263-0.517c0.295,0.469,0.628,0.89,0.952,1.326l-0.554,0.432L137.044,284.347z"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "137.986,284.091 138.468,283.638 139.1,284.737 \t\t"
                  }), t("polygon", {
                    fill: "#E2324B",
                    points: "138.83,285.868 139.169,285.224 138.576,284.845 \t\t"
                  }), t("polygon", {
                    fill: "#E2324B",
                    points: "149.96,296.323 150.357,295.47 151.464,295.226 151.221,296.47 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "149.409,296.63 149.751,295.724 148.382,296.05 \t\t"
                  }), t("polygon", {
                    fill: "#E8D320",
                    points: "150.138,295.024 150.455,294.499 151.22,294.374 151.097,294.862 \t\t"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M159.236,314.491c15.361,5.441,28.903,1.947,29.204-3.631c0.323-5.516-9.839-12.074-22.067-16.475 c-3.348-1.185-6.549-2.201-9.565-2.941l-8.295,17.678C151.563,311.161,155.191,313.062,159.236,314.491z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M186.344,331.224l2.123-20.386c-12.729,7.078-28.412,5.271-39.101-3.534l-8.706,18.551 C153.425,335.644,171.398,338.073,186.344,331.224z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M182.38,329.782c-0.094,0.674,0.429,1.049,1.16,0.742c0.731-0.31,1.378-1.129,1.457-1.812 c0.246-2.108,0.367-3.164,0.614-5.272c-0.992,0.477-1.5,0.725-2.517,1.084C182.809,326.628,182.666,327.679,182.38,329.782z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M178.565,330.933c-0.112,0.682,0.422,1.071,1.184,0.856c0.761-0.219,1.446-0.963,1.544-1.645 c0.303-2.103,0.455-3.152,0.757-5.254c-1.037,0.35-1.562,0.51-2.625,0.805C179.081,327.79,178.909,328.839,178.565,330.933z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M174.626,331.719c-0.131,0.678,0.401,1.141,1.183,1.018c0.782-0.129,1.51-0.85,1.624-1.523 c0.36-2.09,0.541-3.137,0.902-5.229c-1.078,0.283-1.614,0.359-2.702,0.522C175.231,328.591,175.029,329.635,174.626,331.719z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M170.603,332.114c-0.15,0.67,0.38,1.178,1.182,1.109c0.8-0.066,1.553-0.687,1.688-1.359 c0.42-2.084,0.629-3.125,1.049-5.205c-1.098,0.137-1.65,0.191-2.762,0.273C171.296,329.005,171.065,330.042,170.603,332.114z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M166.543,332.099c-0.171,0.666,0.344,1.244,1.147,1.271c0.805,0.023,1.576-0.514,1.732-1.197 c0.479-2.065,0.72-3.1,1.199-5.168c-1.109,0.017-1.662-0.004-2.775-0.053C167.326,329.013,167.065,330.04,166.543,332.099z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M162.467,331.741c-0.189,0.662,0.312,1.281,1.121,1.361c0.809,0.08,1.603-0.414,1.775-1.08 c0.54-2.053,0.81-3.078,1.349-5.133c-1.115-0.074-1.675-0.125-2.79-0.254C163.34,328.677,163.05,329.7,162.467,331.741z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M158.453,330.935c-0.208,0.655,0.264,1.344,1.058,1.514c0.795,0.17,1.596-0.242,1.79-0.904 c0.599-2.036,0.897-3.057,1.498-5.092c-1.099-0.205-1.648-0.32-2.741-0.576C159.415,327.897,159.095,328.911,158.453,330.935z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M154.503,329.812c-0.226,0.641,0.199,1.43,0.988,1.637c0.784,0.223,1.597-0.145,1.809-0.801 c0.658-2.019,0.987-3.027,1.646-5.045c-1.085-0.291-1.641-0.4-2.691-0.801C155.554,326.808,155.204,327.808,154.503,329.812z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M150.688,328.29c-0.248,0.646,0.156,1.431,0.91,1.736c0.754,0.311,1.56,0.02,1.791-0.629 c0.716-2,1.075-2.998,1.793-4.996c-1.049-0.402-1.568-0.617-2.596-1.066C151.827,325.317,151.448,326.31,150.688,328.29z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M147.029,326.444c-0.266,0.635,0.088,1.479,0.803,1.873c0.712,0.396,1.526,0.119,1.773-0.512 c0.776-1.978,1.165-2.966,1.94-4.941c-1.023-0.453-1.503-0.758-2.475-1.318C148.254,323.505,147.846,324.485,147.029,326.444z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M143.563,324.276c-0.284,0.627,0.026,1.502,0.709,1.936c0.684,0.437,1.467,0.263,1.735-0.373 c0.834-1.952,1.25-2.93,2.085-4.881c-0.954-0.588-1.423-0.891-2.343-1.52C144.875,321.374,144.437,322.341,143.563,324.276z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M183.413,322.19c-0.094,0.674,0.396,1.043,1.088,0.731c0.691-0.312,1.306-1.137,1.385-1.821 c0.246-2.107,0.368-3.164,0.615-5.271c-0.936,0.482-1.414,0.732-2.372,1.101C183.843,319.034,183.699,320.085,183.413,322.19z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M179.805,323.372c-0.112,0.681,0.39,1.066,1.11,0.847c0.719-0.224,1.373-0.976,1.47-1.656 c0.302-2.103,0.454-3.152,0.757-5.254c-0.978,0.358-1.473,0.522-2.476,0.826C180.321,320.229,180.149,321.278,179.805,323.372z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M176.079,324.196c-0.132,0.676,0.366,1.133,1.106,1c0.741-0.135,1.436-0.861,1.55-1.533 c0.36-2.092,0.54-3.137,0.901-5.229c-1.018,0.293-1.524,0.377-2.551,0.553C176.683,321.069,176.481,322.11,176.079,324.196z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M172.271,324.636c-0.15,0.672,0.347,1.172,1.104,1.094c0.758-0.076,1.477-0.703,1.61-1.379 c0.421-2.08,0.629-3.119,1.05-5.201c-1.037,0.149-1.561,0.209-2.609,0.305C172.963,321.526,172.733,322.563,172.271,324.636z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M168.426,324.671c-0.17,0.668,0.311,1.238,1.073,1.252c0.76,0.017,1.499-0.53,1.654-1.213 c0.479-2.067,0.72-3.104,1.198-5.172c-1.047,0.035-1.57,0.021-2.622-0.014C169.209,321.585,168.948,322.612,168.426,324.671z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M164.566,324.374c-0.189,0.66,0.278,1.269,1.043,1.338c0.767,0.068,1.526-0.434,1.7-1.1 c0.54-2.053,0.81-3.082,1.348-5.133c-1.054-0.06-1.582-0.103-2.635-0.213C165.44,321.31,165.149,322.329,164.566,324.374z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M160.769,323.63c-0.209,0.658,0.229,1.332,0.981,1.49c0.753,0.158,1.52-0.266,1.713-0.928 c0.6-2.037,0.898-3.057,1.499-5.092c-1.039-0.187-1.558-0.291-2.589-0.529C161.73,320.597,161.41,321.606,160.769,323.63z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M157.031,322.579c-0.225,0.64,0.165,1.416,0.912,1.611c0.743,0.207,1.521-0.172,1.732-0.826 c0.659-2.02,0.987-3.025,1.646-5.047c-1.023-0.271-1.549-0.369-2.54-0.748C158.083,319.573,157.732,320.575,157.031,322.579z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M153.429,321.135c-0.248,0.645,0.123,1.418,0.835,1.709c0.712,0.295,1.484-0.009,1.715-0.658 c0.718-1.994,1.076-2.996,1.794-4.994c-0.987-0.381-1.478-0.584-2.445-1.012C154.567,318.161,154.187,319.153,153.429,321.135z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M149.978,319.372c-0.267,0.635,0.054,1.467,0.728,1.842c0.672,0.382,1.455,0.093,1.7-0.538 c0.776-1.979,1.164-2.968,1.94-4.943c-0.964-0.43-1.414-0.721-2.325-1.26C151.204,316.433,150.794,317.413,149.978,319.372z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M146.719,317.294c-0.285,0.627-0.006,1.486,0.636,1.902c0.643,0.418,1.393,0.23,1.662-0.404 c0.833-1.95,1.251-2.93,2.084-4.881c-0.895-0.561-1.335-0.854-2.196-1.455C148.03,314.392,147.593,315.358,146.719,317.294z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M159.454,305.04c2.394-0.805,4.666-1.502,6.95-2.475c-0.384-2.142-1.746-4.101-3.824-4.873 c-2.373-0.803-4.932-0.221-6.725,1.67C156.996,301.231,158.147,303.235,159.454,305.04z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M154.561,314.491l0.188-0.375c0.437-1.113-0.016-2.32-0.982-2.76c-0.973-0.42-2.151,0.137-2.632,1.238 l-0.132,0.397C152.19,313.489,153.353,314.046,154.561,314.491z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M152.102,315.388c0.888,0.397,1.921-0.011,2.458-0.896c-1.208-0.445-2.37-1.002-3.558-1.498 C150.764,313.983,151.209,315.001,152.102,315.388z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M149.39,312.219c0.198-0.437,1.896-0.132,3.788,0.688c1.885,0.84,3.354,1.695,3.176,2.172 c-0.156,0.424-1.922,0.287-3.839-0.565C150.591,313.681,149.191,312.655,149.39,312.219z"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M156.037,304.815c-0.377,0.467-0.417,1.117-0.084,1.461c0.333,0.34,0.907,0.236,1.275-0.232l3.508-4.614 l-1.574-0.589L156.037,304.815z"
                  }), t("polygon", {
                    fill: "#EE7D8F",
                    points: "160.737,301.429 162.788,298.618 162.89,298.45 161.375,297.894 159.163,300.841 \t\t"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M162.89,298.45c0.249-0.457,0.242-1.002-0.033-1.271c-0.308-0.308-0.841-0.158-1.197,0.327l-0.284,0.388 L162.89,298.45z"
                  }), t("polygon", {
                    fill: "#EE7D8F",
                    points: "155.784,299.38 157.326,300.042 157.837,296.409 156.356,295.774 156.312,295.964 \t\t"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M155.024,305.087c-0.072,0.599,0.254,1.093,0.726,1.101s0.9-0.476,0.966-1.078l0.611-5.066l-1.542-0.662 L155.024,305.087z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M157.837,296.409l0.071-0.473c0.088-0.592-0.189-1.062-0.627-1.056c-0.39,0.011-0.777,0.396-0.926,0.894 L157.837,296.409z"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M158.72,305.042c0.125-0.319,0.442-0.498,0.707-0.401c0.266,0.1,0.383,0.438,0.26,0.76l-2.138,5.617 c-0.123,0.321-0.45,0.496-0.733,0.391c-0.282-0.104-0.41-0.445-0.285-0.768L158.72,305.042z"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M153.635,302.905c0.141-0.314,0.464-0.479,0.724-0.365c0.26,0.109,0.358,0.455,0.222,0.771l-2.407,5.506 c-0.138,0.313-0.473,0.473-0.749,0.354c-0.277-0.118-0.387-0.469-0.247-0.782L153.635,302.905z"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M151.83,308.567c0.528,0.543,0.67,1.387,0.429,2.154l0.12,0.057l2.529,1.092 c0.371-0.715,1.074-1.223,1.842-1.248c0.316-0.012,0.608,0.062,0.862,0.201c0.139-0.402,0.188-0.887,0.135-1.438l-0.268-3.041 c-0.153-2.023-1.414-2.601-2.958-1.263l-2.351,1.994c-0.425,0.355-0.731,0.73-0.919,1.107 C151.462,308.267,151.659,308.392,151.83,308.567z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M156.749,310.622c-0.768,0.025-1.471,0.533-1.843,1.248l0.06,0.023c1.281,0.475,2.283,0.006,2.646-1.07 C157.357,310.685,157.065,310.61,156.749,310.622z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M152.258,310.722c0.241-0.769,0.101-1.611-0.429-2.154c-0.17-0.176-0.367-0.301-0.579-0.385 C150.753,309.173,151.095,310.167,152.258,310.722z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M171.02,317.231c4.589,1.19,13.223-1.644,17.727-10.09c-5.387-0.545-10.738-1.498-15.982-2.918 C167.64,310.481,166.368,316.022,171.02,317.231z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M172.451,300.368c0.135,1.953,0.303,3.92,0.504,5.894l1.254,0.329c-0.217-1.989-0.4-3.971-0.551-5.938 L172.451,300.368z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M190.755,303.757c-0.999,1.765-2.042,3.527-3.131,5.285l-1.289-0.131c1.109-1.766,2.174-3.537,3.192-5.309 L190.755,303.757z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M187.78,304.72c-1.062,1.778-2.163,3.51-3.307,5.196l-1.294-0.201c1.164-1.713,2.284-3.428,3.359-5.147 L187.78,304.72z"
                  }), t("polygon", {
                    fill: "#62381B",
                    points: "170.833,302.247 171.167,306.481 172.079,306.719 171.723,302.452 \t\t"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M167.957,312.575c3.053,0.859,9.07-1.055,13.373-4.611c-3.745-0.659-7.454-1.52-11.13-2.526 C166.159,308.614,164.911,311.63,167.957,312.575z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M167.22,305.974c0.333-1.07,1.188-1.756,1.907-1.525c2.122,0.641,4.281,1.139,6.421,1.705 c0.738,0.148,1.145,1.162,0.909,2.258c-0.236,1.099-1.053,1.857-1.822,1.701c-2.22-0.584-4.458-1.104-6.659-1.766 C167.225,308.106,166.886,307.046,167.22,305.974z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M167.404,305.519l0.276-0.398c-0.09-0.311-0.088-0.694,0.032-1.082c0.246-0.789,0.869-1.295,1.393-1.127 c0.524,0.166,0.763,0.943,0.534,1.74c-0.141,0.484-0.429,0.861-0.756,1.041c0.008,0.172-0.002,0.34-0.044,0.494 c0.48-0.207,0.913-0.736,1.113-1.438c0.3-1.055-0.017-2.084-0.706-2.305c-0.691-0.219-1.519,0.451-1.847,1.494 C167.219,304.515,167.234,305.083,167.404,305.519z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M171.696,312.446c-0.308-0.133-0.571-0.336-0.776-0.586c-0.362-0.438-0.642-1.012-0.86-1.023 c-0.22-0.012-0.5,0.802-0.15,1.509c0.323,0.653,0.896,1.207,1.533,1.477c1.255,0.545,2.64-0.172,3.074-1.604 c0.205-0.664,0.169-1.353-0.048-1.937c-0.279-0.773-0.428-0.816-0.281-0.195c0.094,0.394,0.091,0.808-0.034,1.207 C173.819,312.368,172.715,312.88,171.696,312.446z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M166.146,310.37c0.33,0.051,0.658,0.019,0.96-0.084c0.534-0.184,1.067-0.522,1.261-0.418 c0.191,0.107,0.01,0.947-0.651,1.367c-0.613,0.387-1.381,0.549-2.063,0.441c-1.342-0.214-2.149-1.546-1.789-2.974 c0.166-0.672,0.556-1.246,1.05-1.649c0.639-0.521,0.782-0.472,0.34-0.021c-0.281,0.285-0.494,0.644-0.594,1.049 C164.388,309.171,165.058,310.194,166.146,310.37z"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M103.524,221.349c4.369,19.85,15.129,38.293,30.151,51.895l5.126-5.664 c-13.846-12.537-23.794-29.576-27.823-47.893L103.524,221.349z"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "128.096,261.444 127.298,260.521 126.83,260.911 127.632,261.841 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "122.145,253.696 121.452,252.688 120.946,253.028 121.643,254.042 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "135.275,269.81 136.087,270.577 136.495,270.128 135.689,269.362 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "120.774,251.671 120.123,250.636 119.608,250.96 120.265,252.003 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "134.8,268.528 133.912,267.694 133.487,268.13 134.38,268.97 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "119.466,249.603 118.834,248.556 118.312,248.866 118.947,249.921 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "126.496,259.526 125.736,258.569 125.257,258.948 126.023,259.909 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "124.972,257.62 124.249,256.63 123.761,256.995 124.489,257.987 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "123.522,255.649 122.801,254.663 122.304,255.015 123.03,256.007 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "129.697,263.288 128.887,262.372 128.429,262.774 129.245,263.694 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "131.349,265.083 130.525,264.183 130.078,264.597 130.907,265.501 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "133.057,266.823 132.199,265.958 131.762,266.382 132.626,267.253 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "108.153,222.636 107.854,221.45 107.262,221.589 107.562,222.782 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "110.189,229.677 109.81,228.517 109.229,228.7 109.612,229.87 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "109.436,227.351 109.103,226.175 108.518,226.345 108.854,227.528 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "110.99,231.989 110.564,230.844 109.989,231.042 110.418,232.196 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "111.838,234.284 111.409,233.14 110.84,233.353 111.271,234.507 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "108.764,224.999 108.444,223.821 107.855,223.978 108.178,225.161 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "114.776,241.015 114.244,239.911 113.692,240.167 114.227,241.278 \t\t"
                  }), t("rect", {
                    x: "115.843",
                    y: "244.658",
                    transform: "matrix(-0.4725 -0.8813 0.8813 -0.4725 -44.4054 463.3495)",
                    fill: "#FFFFFF",
                    width: "1.226",
                    height: "0.61"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "112.762,236.552 112.303,235.415 111.738,235.646 112.201,236.786 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "115.854,243.21 115.318,242.112 114.772,242.382 115.312,243.489 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "113.746,238.794 113.242,237.677 112.685,237.921 113.191,239.042 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "118.218,247.497 117.597,246.442 117.067,246.741 117.692,247.804 \t\t"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M103.524,221.349l7.455-1.662c-4.15-18.658-2.316-38.432,5.498-56.104l-7.005-3.047 C101.025,179.642,99.016,201.126,103.524,221.349z"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "105.655,207.347 105.583,206.128 104.977,206.169 105.048,207.394 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "105.402,197.611 105.45,196.393 104.842,196.37 104.794,197.594 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "107.412,219.405 107.157,218.21 106.56,218.329 106.816,219.532 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "105.51,195.177 105.565,193.962 104.957,193.921 104.902,195.147 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "106.931,217.013 106.725,215.812 106.125,215.913 106.333,217.122 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "105.665,192.749 105.769,191.536 105.164,191.478 105.058,192.702 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "105.503,204.858 105.444,203.642 104.835,203.665 104.895,204.89 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "105.416,202.427 105.382,201.208 104.773,201.216 104.807,202.44 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "105.377,199.991 105.393,198.774 104.784,198.765 104.769,199.991 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "105.892,209.771 105.771,208.558 105.166,208.614 105.287,209.835 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "106.178,212.192 106.008,210.983 105.403,211.056 105.574,212.271 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "106.513,214.608 106.342,213.401 105.739,213.487 105.912,214.704 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "112.424,164.292 112.913,163.17 112.352,162.932 111.86,164.063 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "109.915,171.221 110.29,170.05 109.712,169.855 109.335,171.035 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "110.689,168.888 111.122,167.738 110.55,167.531 110.114,168.688 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "109.187,173.567 109.536,172.391 108.955,172.211 108.603,173.397 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "108.524,175.929 108.858,174.748 108.272,174.586 107.935,175.771 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "111.549,166.586 111.972,165.433 111.404,165.21 110.98,166.371 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "106.915,183.083 107.16,181.887 106.562,181.769 106.316,182.974 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "106.172,187.904 106.321,186.694 105.718,186.607 105.567,187.824 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "107.939,178.305 108.223,177.115 107.632,176.966 107.347,178.164 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "106.521,185.49 106.714,184.286 106.114,184.184 105.919,185.396 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "107.398,180.69 107.65,179.494 107.056,179.361 106.803,180.564 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "105.868,190.322 106.022,189.113 105.417,189.042 105.263,190.258 \t\t"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M109.472,160.535l7.005,3.047c7.572-17.569,20.779-32.464,37.387-42.098l-3.857-6.592 C132.023,125.322,117.676,141.493,109.472,160.535z"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "119.441,150.464 120.085,149.43 119.571,149.104 118.924,150.145 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "124.962,142.447 125.703,141.479 125.226,141.102 124.479,142.075 \t\t"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M113.739,161.24c0.167-0.372,0.3-0.76,0.492-1.119l-0.553-0.256c-0.193,0.361-0.327,0.752-0.495,1.128 L113.739,161.24z"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "126.439,140.51 127.236,139.587 126.768,139.198 125.967,140.127 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "114.775,159.026 115.314,157.931 114.769,157.661 114.226,158.763 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "128.027,138.663 128.814,137.732 128.356,137.332 127.564,138.268 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "120.753,148.345 121.432,147.334 120.926,146.996 120.243,148.013 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "122.129,146.337 122.822,145.335 122.326,144.984 121.628,145.991 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "123.511,144.331 124.25,143.365 123.763,143 123.018,143.972 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "118.179,152.547 118.793,151.495 118.271,151.184 117.652,152.242 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "117,154.68 117.591,153.614 117.061,153.317 116.464,154.39 \t\t"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M115.849,156.832c0.18-0.365,0.342-0.74,0.553-1.087l-0.538-0.284c-0.213,0.351-0.375,0.729-0.557,1.096 L115.849,156.832z"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "150.171,119.661 151.226,119.041 150.913,118.519 149.851,119.143 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "144.098,123.776 145.092,123.063 144.739,122.567 143.739,123.284 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "146.082,122.345 147.092,121.658 146.752,121.153 145.735,121.845 \t\t"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M142.138,125.235c0.323-0.249,0.623-0.527,0.963-0.752l-0.365-0.486c-0.344,0.226-0.645,0.507-0.97,0.756 L142.138,125.235z"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "140.225,126.753 141.183,125.997 140.805,125.519 139.841,126.282 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "148.122,120.998 149.148,120.332 148.822,119.819 147.789,120.487 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "134.73,131.589 135.603,130.739 135.189,130.292 134.311,131.148 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "131.285,135.041 132.117,134.149 131.681,133.725 130.844,134.623 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "138.351,128.319 139.264,127.507 138.874,127.041 137.955,127.856 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "132.971,133.281 133.853,132.438 133.428,132.001 132.54,132.85 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "136.512,129.925 137.434,129.125 137.032,128.667 136.105,129.472 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "129.61,136.812 130.451,135.927 130.003,135.516 129.158,136.404 \t\t"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M150.006,114.892l3.857,6.592c16.525-9.747,36.114-14.067,55.047-12.071l0.764-7.599 C189.13,99.652,167.901,104.338,150.006,114.892z"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "164.028,112.624 165.163,112.166 164.938,111.601 163.797,112.061 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "173.253,109.378 174.424,109.029 174.26,108.442 173.082,108.794 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "153.039,117.988 154.093,117.365 153.799,116.834 152.737,117.458 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "175.599,108.689 176.788,108.406 176.638,107.814 175.442,108.102 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "155.176,116.796 156.264,116.234 155.982,115.694 154.888,116.26 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "177.974,108.117 179.159,107.82 179.025,107.226 177.832,107.522 \t\t"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M166.346,111.682c0.374-0.168,0.768-0.278,1.151-0.417l-0.209-0.571c-0.387,0.139-0.783,0.25-1.158,0.418 L166.346,111.682z"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "168.653,110.864 169.807,110.46 169.612,109.883 168.452,110.291 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "170.959,110.048 172.133,109.708 171.955,109.127 170.772,109.469 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "161.771,113.57 162.891,113.077 162.653,112.517 161.526,113.013 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "159.549,114.597 160.662,114.086 160.409,113.532 159.289,114.047 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "157.349,115.667 158.435,115.103 158.168,114.555 157.074,115.124 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "207.01,105.761 208.223,105.885 208.277,105.278 207.057,105.153 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "199.71,105.521 200.929,105.524 200.936,104.915 199.71,104.911 \t\t"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M202.146,105.523c0.406-0.016,0.812,0.028,1.215,0.048l0.023-0.609c-0.408-0.021-0.814-0.062-1.225-0.048 L202.146,105.523z"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "197.277,105.537 198.494,105.511 198.484,104.902 197.259,104.93 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "194.843,105.653 196.06,105.599 196.035,104.99 194.81,105.045 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "204.578,105.641 205.793,105.704 205.832,105.096 204.607,105.032 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "187.565,106.328 188.772,106.145 188.7,105.539 187.486,105.724 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "182.75,107.097 183.946,106.858 183.843,106.257 182.637,106.5 \t\t"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M192.414,105.806c0.403-0.032,0.806-0.104,1.213-0.105l-0.041-0.605c-0.408,0.001-0.813,0.073-1.222,0.104 L192.414,105.806z"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "185.152,106.674 186.359,106.502 186.271,105.901 185.056,106.072 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "189.986,106.039 191.201,105.925 191.143,105.32 189.921,105.433 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "180.351,107.558 181.551,107.331 181.432,106.735 180.225,106.962 \t\t"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M209.674,101.814l-0.764,7.599c18.977,1.895,37.536,9.995,51.651,22.656l5.094-5.694 C250.318,112.627,230.256,103.869,209.674,101.814z"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "222.303,108.238 223.486,108.549 223.641,107.958 222.449,107.646 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "231.699,111.066 232.85,111.496 233.061,110.927 231.902,110.494 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "210.297,106.101 211.51,106.219 211.584,105.615 210.365,105.497 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "234.002,111.922 235.156,112.344 235.383,111.779 234.223,111.353 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "212.717,106.393 213.92,106.583 214.012,105.981 212.799,105.79 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "236.277,112.835 237.402,113.32 237.643,112.763 236.51,112.273 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "224.727,108.867 225.912,109.171 226.082,108.586 224.887,108.281 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "227.084,109.548 228.254,109.919 228.438,109.34 227.258,108.966 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "229.428,110.285 230.6,110.651 230.797,110.075 229.617,109.707 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "219.92,107.686 221.117,107.925 221.258,107.332 220.051,107.091 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "217.527,107.192 218.725,107.442 218.846,106.846 217.643,106.594 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "215.125,106.769 216.332,106.947 216.438,106.348 215.225,106.167 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "261.131,128.055 262.059,128.842 262.459,128.383 261.523,127.589 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "255.406,123.518 256.381,124.248 256.744,123.76 255.764,123.025 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "257.342,124.994 258.309,125.735 258.684,125.257 257.713,124.511 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "253.402,122.136 254.402,122.83 254.752,122.332 253.746,121.635 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "251.389,120.769 252.404,121.438 252.742,120.931 251.719,120.258 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "259.277,126.473 260.205,127.261 260.594,126.792 259.66,125.998 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "245.096,117.048 246.16,117.642 246.457,117.111 245.387,116.513 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "240.746,114.83 241.842,115.371 242.111,114.825 241.008,114.282 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "249.316,119.484 250.352,120.13 250.676,119.614 249.635,118.966 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "242.939,115.906 244.033,116.45 244.316,115.911 243.217,115.363 \t\t"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M247.229,118.229c0.355,0.198,0.722,0.379,1.058,0.606l0.312-0.522c-0.34-0.23-0.707-0.412-1.063-0.611 L247.229,118.229z"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "238.529,113.802 239.652,114.284 239.908,113.732 238.775,113.246 \t\t"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M265.656,126.375l-5.094,5.694c14.197,12.707,24.333,30.117,28.364,48.81l7.465-1.614 C292.024,159.004,281.058,140.16,265.656,126.375z"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "272.064,139.014 272.842,139.955 273.314,139.569 272.531,138.622 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "277.978,146.793 278.636,147.826 279.144,147.49 278.481,146.453 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "263.615,130.231 264.5,131.069 264.918,130.624 264.025,129.78 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "279.3,148.853 279.968,149.877 280.483,149.554 279.812,148.523 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "265.391,131.9 266.281,132.732 266.711,132.299 265.812,131.463 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "280.616,150.914 281.226,151.976 281.749,151.667 281.136,150.6 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "273.633,140.958 274.395,141.915 274.873,141.542 274.107,140.579 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "275.158,142.867 275.872,143.858 276.36,143.499 275.645,142.5 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "276.581,144.854 277.298,145.845 277.796,145.498 277.077,144.499 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "270.453,137.181 271.258,138.099 271.717,137.701 270.908,136.777 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "268.818,135.369 269.654,136.26 270.104,135.847 269.264,134.954 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "267.123,133.616 267.967,134.495 268.408,134.073 267.557,133.189 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "291.753,177.954 292.046,179.138 292.642,179.003 292.343,177.811 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "289.786,170.891 290.138,172.062 290.72,171.88 290.364,170.702 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "290.481,173.235 290.833,174.406 291.419,174.241 291.065,173.062 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "288.972,168.583 289.376,169.738 289.952,169.543 289.546,168.381 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "288.146,166.282 288.571,167.428 289.144,167.217 288.714,166.063 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "291.179,175.578 291.462,176.766 292.052,176.615 291.769,175.419 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "285.245,159.537 285.755,160.651 286.308,160.396 285.794,159.276 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "283.04,155.168 283.601,156.254 284.14,155.974 283.575,154.879 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "287.224,164.014 287.681,165.148 288.247,164.924 287.786,163.782 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "284.167,157.34 284.739,158.422 285.286,158.154 284.71,157.066 \t\t"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M286.271,161.76c0.164,0.372,0.363,0.73,0.5,1.116l0.562-0.238c-0.14-0.389-0.338-0.75-0.504-1.125 L286.271,161.76z"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "281.843,153.033 282.462,154.089 282.995,153.792 282.37,152.731 \t\t"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M296.392,179.265l-7.465,1.614c4.037,18.69,1.984,38.429-5.842,56.079l6.985,3.088 C298.54,220.969,300.776,199.521,296.392,179.265z"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "294.171,193.253 294.228,194.47 294.837,194.433 294.776,193.209 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "294.36,202.989 294.29,204.206 294.897,204.231 294.97,203.01 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "292.478,181.186 292.71,182.383 293.308,182.269 293.075,181.062 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "294.224,205.421 294.163,206.636 294.771,206.681 294.831,205.456 \t\t"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M292.946,183.58c0.078,0.4,0.173,0.797,0.216,1.202l0.6-0.098c-0.043-0.407-0.137-0.808-0.215-1.208 L292.946,183.58z"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "294.071,207.851 293.94,209.062 294.546,209.12 294.679,207.901 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "294.282,195.742 294.341,196.959 294.95,196.939 294.892,195.713 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "294.396,198.174 294.384,199.392 294.993,199.388 295.005,198.165 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "294.378,200.61 294.378,201.827 294.987,201.839 294.987,200.614 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "293.929,190.828 294.046,192.041 294.653,191.989 294.536,190.768 \t\t"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M293.685,188.404c0.07,0.4,0.103,0.806,0.135,1.21l0.605-0.067c-0.033-0.406-0.064-0.814-0.137-1.219 L293.685,188.404z"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "293.329,185.991 293.503,187.198 294.106,187.114 293.931,185.898 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "287.126,236.263 286.638,237.388 287.198,237.628 287.687,236.497 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "289.677,229.356 289.317,230.53 289.892,230.726 290.255,229.546 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "288.886,231.681 288.456,232.833 289.026,233.044 289.46,231.885 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "290.415,227.011 290.042,228.183 290.624,228.364 290.999,227.185 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "291.083,224.653 290.784,225.841 291.37,226.007 291.671,224.812 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "288.03,233.985 287.612,235.14 288.177,235.366 288.599,234.204 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "292.741,217.505 292.489,218.702 293.087,218.823 293.339,217.62 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "293.532,212.692 293.341,213.897 293.942,213.987 294.136,212.776 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "291.702,222.282 291.392,223.466 291.979,223.62 292.292,222.427 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "293.157,215.103 292.978,216.308 293.575,216.415 293.757,215.2 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "292.245,219.897 292.005,221.097 292.599,221.233 292.839,220.028 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "293.815,210.274 293.696,211.487 294.3,211.56 294.421,210.341 \t\t"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M290.071,240.046l-6.985-3.088c-7.653,17.537-21.009,32.306-37.651,41.861l3.818,6.617 C267.273,275.091,281.774,259.054,290.071,240.046z"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "280.032,250.05 279.392,251.087 279.905,251.415 280.55,250.372 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "274.467,258.036 273.729,259.003 274.205,259.385 274.945,258.409 \t\t"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M285.817,239.319c-0.145,0.383-0.348,0.736-0.524,1.104l0.551,0.261c0.178-0.369,0.381-0.728,0.529-1.111 L285.817,239.319z"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "272.963,259.95 272.168,260.874 272.635,261.269 273.434,260.337 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "284.749,241.517 284.214,242.614 284.757,242.888 285.298,241.784 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "271.381,261.802 270.594,262.733 271.051,263.138 271.84,262.2 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "278.718,252.165 278.017,253.161 278.521,253.505 279.226,252.501 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "277.321,254.163 276.632,255.163 277.126,255.521 277.821,254.511 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "275.923,256.153 275.176,257.114 275.662,257.483 276.415,256.517 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "281.325,247.985 280.679,249.019 281.2,249.333 281.851,248.292 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "282.501,245.847 281.911,246.915 282.438,247.216 283.034,246.144 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "283.681,243.714 283.095,244.784 283.632,245.073 284.222,243.995 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "249.113,280.663 248.053,281.274 248.363,281.796 249.43,281.183 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "255.211,276.585 254.219,277.3 254.568,277.8 255.566,277.077 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "253.23,278.021 252.199,278.677 252.535,279.185 253.572,278.522 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "257.191,275.151 256.207,275.876 256.568,276.364 257.559,275.636 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "259.102,273.628 258.145,274.388 258.52,274.868 259.48,274.103 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "251.172,279.341 250.146,280.01 250.469,280.524 251.502,279.853 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "264.637,268.835 263.754,269.681 264.166,270.128 265.053,269.28 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "268.1,265.405 267.271,266.298 267.705,266.726 268.539,265.829 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "260.996,272.089 260.062,272.872 260.449,273.345 261.389,272.554 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "266.391,267.142 265.512,267.987 265.934,268.427 266.82,267.575 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "262.832,270.478 261.912,271.278 262.311,271.741 263.236,270.933 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "269.771,263.63 268.934,264.517 269.379,264.931 270.221,264.04 \t\t"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M249.252,285.437l-3.818-6.617c-16.58,9.668-36.203,13.803-55.116,11.732l-0.812,7.596 C210.029,300.394,231.297,295.903,249.252,285.437z"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "235.213,287.616 234.078,288.075 234.301,288.644 235.441,288.179 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "225.971,290.81 224.801,291.163 224.961,291.749 226.139,291.394 \t\t"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M246.242,282.329c-0.355,0.203-0.695,0.431-1.064,0.604l0.291,0.535c0.373-0.177,0.715-0.404,1.07-0.607 L246.242,282.329z"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "223.617,291.469 222.43,291.755 222.576,292.345 223.771,292.056 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "244.088,283.493 243.002,284.056 243.279,284.599 244.371,284.032 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "221.244,292.046 220.059,292.345 220.189,292.938 221.383,292.64 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "232.893,288.55 231.734,288.946 231.939,289.521 233.105,289.118 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "230.58,289.349 229.428,289.76 229.617,290.335 230.777,289.925 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "228.264,290.135 227.09,290.478 227.266,291.06 228.447,290.714 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "237.482,286.7 236.35,287.159 236.584,287.722 237.725,287.26 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "239.703,285.667 238.592,286.181 238.84,286.735 239.961,286.22 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "241.918,284.626 240.816,285.159 241.08,285.71 242.188,285.171 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "192.195,294.208 190.984,294.077 190.925,294.681 192.146,294.815 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "199.49,294.499 198.273,294.499 198.263,295.104 199.488,295.108 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "197.056,294.489 195.841,294.417 195.815,295.026 197.039,295.097 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "201.926,294.517 200.708,294.507 200.713,295.114 201.939,295.124 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "204.359,294.394 203.143,294.45 203.164,295.06 204.389,295.003 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "194.625,294.351 193.41,294.29 193.368,294.897 194.591,294.958 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "211.643,293.78 210.434,293.927 210.5,294.53 211.719,294.386 \t\t"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M216.463,293.038c-0.4,0.072-0.795,0.178-1.199,0.224l0.1,0.602c0.406-0.043,0.806-0.152,1.207-0.225 L216.463,293.038z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M206.793,294.272c-0.404,0.059-0.812,0.047-1.217,0.07l0.036,0.606c0.408-0.025,0.818-0.014,1.226-0.068 L206.793,294.272z"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "214.055,293.429 212.848,293.601 212.932,294.206 214.146,294.03 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "209.219,294.036 208.006,294.151 208.059,294.76 209.279,294.642 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "218.859,292.571 217.66,292.802 217.775,293.399 218.982,293.169 \t\t"
                  }), t("path", {
                    fill: "#62381B",
                    d: "M189.504,298.147l0.812-7.596c-18.978-2.005-37.479-10.22-51.518-22.974l-5.126,5.664 C148.925,287.091,168.928,295.972,189.504,298.147z"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "176.916,291.635 175.73,291.327 175.573,291.915 176.767,292.226 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "167.537,288.749 166.386,288.321 166.169,288.89 167.329,289.321 \t\t"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M188.908,293.862c-0.403-0.045-0.812-0.059-1.211-0.131l-0.079,0.602c0.402,0.074,0.812,0.088,1.219,0.136 L188.908,293.862z"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "165.232,287.899 164.092,287.446 163.861,288.007 165.009,288.464 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "186.493,293.538 185.288,293.349 185.193,293.95 186.405,294.14 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "162.971,286.954 161.845,286.47 161.601,287.026 162.733,287.517 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "174.49,291.011 173.312,290.671 173.14,291.255 174.326,291.599 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "172.141,290.296 170.97,289.927 170.783,290.507 171.962,290.878 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "169.795,289.565 168.635,289.163 168.434,289.737 169.601,290.142 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "179.291,292.222 178.099,291.948 177.958,292.54 179.156,292.815 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "181.684,292.71 180.489,292.464 180.363,293.06 181.566,293.308 \t\t"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M184.082,293.169c-0.401-0.062-0.807-0.104-1.203-0.205l-0.111,0.601c0.399,0.098,0.807,0.143,1.211,0.205 L184.082,293.169z"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "138.212,271.589 137.286,270.798 136.883,271.253 137.814,272.052 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "143.903,276.165 142.94,275.423 142.573,275.909 143.544,276.657 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "141.98,274.671 141.019,273.929 140.639,274.403 141.607,275.153 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "145.904,277.554 144.905,276.858 144.552,277.353 145.557,278.054 \t\t"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M147.905,278.942c-0.353-0.201-0.672-0.455-1.006-0.687l-0.34,0.502c0.336,0.234,0.657,0.488,1.012,0.691 L147.905,278.942z"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "140.052,273.185 139.133,272.388 138.741,272.853 139.667,273.659 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "154.18,282.69 153.115,282.097 152.814,282.626 153.887,283.224 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "158.515,284.933 157.419,284.394 157.146,284.937 158.249,285.481 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "149.974,280.229 148.941,279.583 148.613,280.095 149.652,280.745 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "156.321,283.858 155.241,283.29 154.955,283.827 156.042,284.399 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "152.048,281.507 151.002,280.88 150.688,281.401 151.74,282.034 \t\t"
                  }), t("polygon", {
                    fill: "#FFFFFF",
                    points: "160.718,285.989 159.607,285.479 159.349,286.03 160.467,286.544 \t\t"
                  })), t("g", {
                    id: "airplane2"
                  }, t("g", null, t("path", {
                    fill: "#F15C27",
                    d: "M236.783,38.819c-27.964-6.462-57.599-5.521-85.059,2.874l0.206,0.674 c27.354-8.361,56.879-9.295,84.733-2.853C236.676,39.276,236.709,39.041,236.783,38.819z"
                  }), t("path", {
                    fill: "#EE7D8F",
                    d: "M236.756,40.347c-34.021-7.978-70.586-4.699-102.564,9.443l0.406,0.923 c32.142-14.219,68.961-17.389,103.1-9.111C237.215,41.334,236.902,40.873,236.756,40.347z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M243.795,43.947c-0.73-0.284-1.404-0.626-2.121-0.892C201.906,32.281,158.058,37.35,122,57.389 l0.485,0.882c36.504-20.287,81.056-25.147,121.159-13.634l0.193-0.679C243.822,43.952,243.811,43.952,243.795,43.947z"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M243.232,46.077c-30.975-8.823-64.655-8.02-95.111,2.486l-0.181-0.523 c30.565-10.542,64.361-11.349,95.445-2.495L243.232,46.077z"
                  }), t("path", {
                    fill: "#69C8C3",
                    d: "M242.934,47.121c-39.451-11.327-83.298-6.547-119.202,13.412l-0.376-0.685 C159.44,39.791,203.5,34.986,243.148,46.37L242.934,47.121z"
                  })), t("g", null, t("path", {
                    fill: "#69C8C3",
                    d: "M254.555,46.239l-4.512-8.032c-0.181-0.32-0.611-0.677-0.959-0.791l-1.148-0.382 c-0.352-0.115-0.541,0.074-0.426,0.425l2.426,7.373c0.113,0.35,0.494,0.715,0.849,0.816l3.457,0.989 C254.594,46.739,254.734,46.56,254.555,46.239z"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M252.951,49.896l-8.418,3.741c-0.337,0.149-0.896,0.177-1.244,0.061l-1.148-0.381 c-0.35-0.116-0.389-0.381-0.088-0.593l6.354-4.46c0.299-0.212,0.823-0.278,1.17-0.147l3.36,1.274 C253.281,49.52,253.289,49.747,252.951,49.896z"
                  }), t("g", null, t("g", null, t("path", {
                    fill: "#2D948D",
                    d: "M250.949,44.656c-4.021-1.323-8.056-2.614-12.099-3.868c-0.899-0.28-1.746,0.136-2.35,0.787 c-0.601,0.64-0.873,1.533-0.188,2.505c0.931,1.313,2.078,1.545,3.041,1.881c4.219,1.478,8.457,2.933,12.693,4.322 c4.565,1.497,8.256,2.585,12.85,4.013c0.502,0.157,1.23-0.004,1.404-0.441c0.488-1.229-0.715-3.32-0.965-3.642 c-0.646-0.816-1.254-1.086-1.896-1.311C258.979,47.34,255.439,46.134,250.949,44.656z"
                  }))), t("path", {
                    fill: "#2D948D",
                    d: "M235.941,43.594l-0.674-6.528c-0.022-0.216,0.127-0.337,0.332-0.27l1.154,0.385 c0.207,0.067,0.461,0.277,0.569,0.466l1.953,3.417c0.107,0.188,0.039,0.422-0.155,0.522l-2.861,1.461 C236.064,43.146,235.965,43.811,235.941,43.594z"
                  }), t("g", null, t("circle", {
                    fill: "#FFFFFF",
                    cx: "252.673",
                    cy: "47.702",
                    r: "0.554"
                  }), t("circle", {
                    fill: "#FFFFFF",
                    cx: "255.49",
                    cy: "48.635",
                    r: "0.554"
                  }), t("circle", {
                    fill: "#FFFFFF",
                    cx: "258.305",
                    cy: "49.571",
                    r: "0.554"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M261.646,50.679c-0.096,0.29-0.41,0.446-0.701,0.352c-0.291-0.096-0.446-0.411-0.35-0.7 c0.094-0.292,0.408-0.448,0.699-0.353C261.586,50.076,261.744,50.387,261.646,50.679z"
                  }), t("path", {
                    fill: "#FFFFFF",
                    d: "M250.385,46.941c-0.096,0.291-0.41,0.448-0.701,0.352c-0.289-0.097-0.445-0.41-0.352-0.701 c0.1-0.29,0.41-0.447,0.701-0.351C250.324,46.337,250.482,46.65,250.385,46.941z"
                  }), t("circle", {
                    fill: "#FFFFFF",
                    cx: "247.043",
                    cy: "45.833",
                    r: "0.554"
                  }), t("circle", {
                    fill: "#FFFFFF",
                    cx: "244.229",
                    cy: "44.898",
                    r: "0.554"
                  }), t("circle", {
                    fill: "#FFFFFF",
                    cx: "241.412",
                    cy: "43.963",
                    r: "0.554"
                  })), t("path", {
                    fill: "#2D948D",
                    d: "M238.443,37.706c-0.073,0.223-0.313,0.342-0.534,0.271l-3.619-1.202 c-0.224-0.074-0.345-0.313-0.271-0.536l0,0c0.074-0.223,0.314-0.341,0.537-0.268l3.617,1.199 C238.396,37.245,238.518,37.485,238.443,37.706L238.443,37.706z"
                  }))), t("g", {
                    id: "airplane1"
                  }, t("g", null, t("path", {
                    fill: "#F15C27",
                    d: "M300.649,326.339c-32.001,24.181-73.167,35.484-113.023,31.668c0.024,0.234,0.023,0.472-0.014,0.707 c40.01,3.818,81.335-7.536,113.459-31.811L300.649,326.339z"
                  }), t("path", {
                    fill: "#EE7D8F",
                    d: "M319.285,307.528c-33.812,35.615-84.521,53.887-133.252,48.537c0.009,0.002,0.017,0.002,0.024,0.008 c0.666,0.227,1.096,0.648,1.342,1.146c48.581,4.86,98.932-13.513,132.611-48.988L319.285,307.528z"
                  }), t("path", {
                    fill: "#E8D320",
                    d: "M330.949,291.716c-17.326,22.97-40.897,41.193-67.568,52.011c-26.635,10.93-56.24,14.246-84.685,9.918 l-0.074,0.494c1.526,0.452,3.088,0.772,4.636,1.145c27.162,3.32,55.166-0.229,80.503-10.625 c26.839-10.885,50.558-29.223,67.991-52.336L330.949,291.716z"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M178.923,352.165c44.001,6.967,90.593-5.731,124.836-34.244l0.35,0.429 c-34.357,28.61-81.12,41.356-125.269,34.362L178.923,352.165z"
                  }), t("path", {
                    fill: "#69C8C3",
                    d: "M179.087,351.091c27.993,4.261,57.12,0.996,83.321-9.758c26.236-10.639,49.433-28.571,66.479-51.174 l0.623,0.471c-17.131,22.714-40.439,40.734-66.81,51.427c-26.332,10.807-55.604,14.086-83.732,9.809L179.087,351.091z"
                  })), t("path", {
                    fill: "#2D948D",
                    d: "M169.401,353.132l5.165,7.628c0.207,0.305,0.665,0.622,1.023,0.709l1.176,0.284 c0.358,0.086,0.532-0.118,0.388-0.459l-3.03-7.143c-0.144-0.34-0.554-0.674-0.915-0.746l-3.525-0.695 C169.321,352.636,169.194,352.827,169.401,353.132z"
                  }), t("path", {
                    fill: "#69C8C3",
                    d: "M170.694,349.353l8.076-4.431c0.324-0.176,0.876-0.25,1.236-0.163l1.176,0.284 c0.358,0.086,0.418,0.349,0.136,0.582l-5.958,4.976c-0.282,0.237-0.799,0.346-1.153,0.244l-3.457-0.99 C170.397,349.757,170.371,349.528,170.694,349.353z"
                  }), t("g", null, t("g", null, t("path", {
                    fill: "#69C8C3",
                    d: "M173.126,354.407c4.118,0.984,8.244,1.934,12.378,2.848c0.919,0.203,1.728-0.282,2.275-0.979 c0.543-0.688,0.744-1.603-0.023-2.512c-1.035-1.232-2.198-1.367-3.187-1.625c-4.326-1.117-8.672-2.214-13.01-3.246 c-4.674-1.111-8.443-1.888-13.139-2.929c-0.514-0.112-1.226,0.109-1.363,0.562c-0.384,1.262,0.989,3.248,1.268,3.545 c0.709,0.762,1.339,0.977,1.997,1.15C164.9,352.401,168.529,353.31,173.126,354.407z"
                  }))), t("path", {
                    fill: "#69C8C3",
                    d: "M188.169,354.214l1.216,6.449c0.041,0.215-0.097,0.347-0.309,0.297l-1.184-0.287 c-0.211-0.051-0.481-0.235-0.605-0.416l-2.229-3.243c-0.125-0.181-0.075-0.416,0.11-0.533l2.729-1.693 C188.084,354.671,188.13,354.003,188.169,354.214z"
                  }), t("g", null, t("circle", {
                    fill: "#2D948D",
                    cx: "171.153",
                    cy: "351.516",
                    r: "0.554"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M167.731,350.692c0.072-0.299,0.37-0.482,0.668-0.412c0.297,0.072,0.479,0.373,0.407,0.67 s-0.371,0.48-0.668,0.41C167.842,351.286,167.66,350.989,167.731,350.692z"
                  }), t("circle", {
                    fill: "#2D948D",
                    cx: "165.386",
                    cy: "350.125",
                    r: "0.554"
                  }), t("circle", {
                    fill: "#2D948D",
                    cx: "162.502",
                    cy: "349.426",
                    r: "0.555"
                  }), t("circle", {
                    fill: "#2D948D",
                    cx: "174.036",
                    cy: "352.213",
                    r: "0.553"
                  }), t("path", {
                    fill: "#2D948D",
                    d: "M176.381,352.78c0.073-0.299,0.372-0.482,0.669-0.408c0.298,0.07,0.479,0.369,0.407,0.668 c-0.072,0.297-0.37,0.479-0.667,0.41C176.492,353.376,176.31,353.077,176.381,352.78z"
                  }), t("circle", {
                    fill: "#2D948D",
                    cx: "179.803",
                    cy: "353.605",
                    r: "0.554"
                  }), t("circle", {
                    fill: "#2D948D",
                    cx: "182.687",
                    cy: "354.303",
                    r: "0.555"
                  })), t("path", {
                    fill: "#69C8C3",
                    d: "M186.167,360.292c0.055-0.229,0.285-0.367,0.511-0.315l3.707,0.897c0.227,0.056,0.368,0.283,0.312,0.511 l0,0c-0.056,0.229-0.283,0.366-0.513,0.312l-3.704-0.893C186.253,360.745,186.113,360.517,186.167,360.292L186.167,360.292z"
                  })), t("g", {
                    id: "floatingGlobe"
                  }, t("g", {
                    id: "cloud3"
                  }, t("path", {
                    fill: "#69C8C3",
                    d: "M66.556,68.339c-0.038,0.058-0.069,0.115-0.104,0.173c-1.225-0.498-2.67-0.087-3.43,1.056 c-0.677,1.016-0.61,2.304,0.065,3.235c-0.329,0.249-0.624,0.551-0.865,0.913c-1.147,1.726-0.682,4.054,1.042,5.202l0.083,0.048 l7.9-11.859C69.62,66.279,67.593,66.782,66.556,68.339z"
                  })), t("g", {
                    id: "cloud2"
                  }, t("path", {
                    fill: "#E8D320",
                    d: "M63.183,75.428c-0.639,0.958-0.816,2.089-0.589,3.134c-1.438,0.035-2.81,0.714-3.64,1.959 c-0.222,0.33-0.383,0.679-0.502,1.039c-1.757-0.423-3.771,0.389-4.945,2.151c-1.221,1.833-1.141,4.104,0.051,5.559 c-0.074,0.096-0.146,0.191-0.216,0.295c-1.522,2.284-0.904,5.368,1.381,6.889c0.056,0.038,0.116,0.068,0.171,0.103l14.524-21.804 c-0.174-0.166-0.361-0.322-0.568-0.461C66.97,73.04,64.434,73.549,63.183,75.428z"
                  })), t("g", {
                    id: "cloud1"
                  }, t("path", {
                    fill: "#EE7D8F",
                    d: "M54.284,71.778c-0.227,0.342-0.375,0.712-0.453,1.091c-1.448-0.076-2.929,0.624-3.822,1.963 c-0.458,0.69-0.698,1.458-0.739,2.218c-1.128,0.156-2.185,0.772-2.864,1.794c-1.123,1.686-0.837,3.896,0.578,5.251 c-0.097,0.11-0.189,0.229-0.273,0.355c-1.079,1.619-0.732,3.771,0.744,4.979L59.31,71.629c-0.203-0.269-0.451-0.51-0.748-0.708 C57.143,69.977,55.229,70.361,54.284,71.778z"
                  })), t("g", {
                    id: "globe"
                  }, t("rect", {
                    x: "72.131",
                    y: "105.627",
                    transform: "matrix(-0.5542 0.8324 -0.8324 -0.5542 203.174 109.2116)",
                    fill: "#F15C27",
                    width: "0.418",
                    height: "6.778"
                  }), t("rect", {
                    x: "70.9",
                    y: "107.488",
                    transform: "matrix(-0.5536 0.8328 -0.8328 -0.5536 202.812 113.0433)",
                    fill: "#F15C27",
                    width: "0.42",
                    height: "6.778"
                  }), t("rect", {
                    x: "69.658",
                    y: "109.361",
                    transform: "matrix(-0.5569 0.8306 -0.8306 -0.5569 202.4233 117.5026)",
                    fill: "#F15C27",
                    width: "0.417",
                    height: "6.776"
                  }), t("rect", {
                    x: "68.41",
                    y: "111.22",
                    transform: "matrix(-0.5563 0.831 -0.831 -0.5563 202.0303 121.3445)",
                    fill: "#F15C27",
                    width: "0.42",
                    height: "6.777"
                  }), t("g", null, t("path", {
                    fill: "#E8D320",
                    d: "M63.61,105.152c-6.2-10.182-14.584-10.383-16.479-9.651c-0.104,0.146-0.213,0.279-0.312,0.428 c-0.22,0.327-0.419,0.665-0.607,1.003c0.106,2.084,3.6,9.639,15.329,11.35c2.21,0.321,4.252,1.46,6.139,2.864l0.975-1.464 C66.624,108.494,64.774,107.062,63.61,105.152z"
                  }), t("path", {
                    fill: "#69C8C3",
                    d: "M61.542,108.281c-11.729-1.71-15.223-9.265-15.329-11.35c-0.175,0.311-0.331,0.624-0.48,0.94 c-1.44,3.539-0.811,8.584,4.71,11.965c2.518,1.543,6.831,1.281,9.389,1.117c2.538-0.164,4.015-0.022,6.883,1.643l0.967-1.451 C65.794,109.741,63.752,108.602,61.542,108.281z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M50.443,109.837c-5.521-3.381-6.15-8.426-4.71-11.965c-2.649,5.602-1.466,12,3.09,15.034 c3.259,2.171,7.444,2.082,11.082,0.175c1.849-0.67,3.479-1.041,6.14,0.521l0.67-1.006c-2.868-1.665-4.345-1.807-6.883-1.643 C57.273,111.118,52.96,111.381,50.443,109.837z"
                  }), t("path", {
                    fill: "#F15C27",
                    d: "M60.699,94.33c-5.683-4.047-10.917-2.119-13.439,0.997c-0.044,0.059-0.086,0.116-0.128,0.174 c1.894-0.731,10.278-0.53,16.479,9.651c1.164,1.91,3.015,3.342,5.047,4.529l0.965-1.448c-2.667-1.994-3.375-3.297-4.221-5.703 C64.551,100.112,63.104,96.042,60.699,94.33z"
                  }), t("path", {
                    fill: "#E2324B",
                    d: "M47.26,95.327c2.522-3.115,7.758-5.043,13.439-0.997c2.403,1.711,3.852,5.782,4.701,8.2 c0.845,2.405,1.554,3.709,4.221,5.703l0.815-1.227c-1.362-0.987-2.417-2.638-2.732-5.756c0.312-4.042-1.225-7.873-4.447-10.018 C58.344,87.959,51.327,89.813,47.26,95.327z"
                  })), t("polygon", {
                    fill: "#62381B",
                    points: "74.637,109.911 70.346,116.354 74.69,118.545 78.333,113.075 \t\t\t"
                  }))), t("g", {
                    id: "innerCircles"
                  }, t("path", {
                    id: "circle5",
                    fill: "#F15C27",
                    d: "M288.569,200.171c0.433-34.354-21.302-67.555-52.857-81.048 c-31.26-14.176-70.434-7.837-95.479,15.701c-25.674,22.849-35.486,61.307-24.13,93.701c10.636,32.639,41.765,57.229,76.03,59.846 l-0.126,1.414c-34.818-2.658-66.439-27.643-77.248-60.807c-11.542-32.912-1.567-71.987,24.517-95.2 c25.45-23.912,65.248-30.357,97.012-15.952c32.061,13.708,54.142,47.439,53.703,82.346L288.569,200.171L288.569,200.171z"
                  }), t("path", {
                    id: "circle4",
                    fill: "#EE7D8F",
                    d: "M284.937,200.171c0.051-19.738-7.062-39.39-19.792-54.483 c-12.639-15.128-30.668-25.74-50.131-29.101c-19.402-3.526-40.029-0.038-57.123,9.838c-17.177,9.729-30.664,25.691-37.525,44.189 c-6.875,18.503-7.045,39.381-0.405,57.977c6.559,18.623,19.868,34.726,36.884,44.724c16.958,10.125,37.526,13.873,56.979,10.652 c19.481-3.146,37.719-13.39,50.528-28.398l1.535,1.322c-13.113,15.362-31.785,25.854-51.738,29.076 c-19.91,3.297-40.973-0.544-58.336-10.908c-17.423-10.238-31.045-26.717-37.763-45.791c-6.799-19.045-6.625-40.406,0.415-59.358 c7.028-18.945,20.833-35.28,38.419-45.242c17.505-10.111,38.625-13.685,58.484-10.072c19.932,3.44,38.391,14.306,51.329,29.793 c13.03,15.447,20.319,35.581,20.264,55.783H284.937z"
                  }), t("path", {
                    id: "circle3",
                    fill: "#E8D320",
                    d: "M282.087,200.171c0.102-21.531-8.755-42.883-24.042-58.042 c-15.16-15.285-36.51-24.141-58.042-24.042c-21.531-0.1-42.881,8.755-58.042,24.042c-15.287,15.16-24.142,36.511-24.041,58.042 c-0.101,21.531,8.755,42.882,24.042,58.041c15.16,15.289,36.511,24.144,58.042,24.043c21.532,0.101,42.881-8.756,58.042-24.043 C273.332,243.052,282.188,221.702,282.087,200.171h2.024c0.105,22.058-8.974,43.947-24.634,59.476 c-15.526,15.66-37.418,24.738-59.475,24.635c-22.057,0.104-43.946-8.973-59.475-24.635c-15.66-15.527-24.739-37.418-24.635-59.476 c-0.104-22.056,8.975-43.946,24.634-59.474c15.527-15.662,37.419-24.74,59.476-24.637c22.057-0.104,43.948,8.975,59.475,24.637 c15.66,15.527,24.739,37.418,24.634,59.474H282.087z"
                  }), t("path", {
                    id: "circle1",
                    fill: "#2D948D",
                    d: "M279.073,200.171c0.505-32.562-21.546-63.749-52.265-74.399 c-30.48-11.412-67.283-1.406-87.706,23.976c-21.112,24.755-24.097,62.852-7.185,90.62c16.173,28.275,50.92,43.988,82.834,37.48 l0.207,1.094c-32.358,6.604-67.604-9.334-84-38.008c-17.153-28.164-14.124-66.791,7.285-91.898 c20.709-25.737,58.032-35.887,88.942-24.312c31.152,10.802,53.509,42.428,53.001,75.448H279.073z"
                  }), t("path", {
                    id: "circle2_1_",
                    fill: "#69C8C3",
                    d: "M276.892,200.171c0.088-20.185-8.191-40.148-22.521-54.367 c-14.218-14.326-34.185-22.608-54.368-22.52c-20.187-0.089-40.15,8.193-54.368,22.52c-14.327,14.219-22.609,34.184-22.52,54.367 c-0.09,20.187,8.192,40.148,22.52,54.367c14.219,14.326,34.183,22.609,54.368,22.521c20.186,0.088,40.15-8.195,54.368-22.521 C268.699,240.319,276.979,220.354,276.892,200.171h1.57c0.092,20.593-8.362,40.978-22.979,55.478 c-14.504,14.617-34.887,23.074-55.479,22.979c-20.591,0.095-40.976-8.36-55.479-22.979 c-14.616-14.502-23.071-34.887-22.979-55.479c-0.093-20.592,8.362-40.976,22.979-55.478c14.503-14.617,34.888-23.074,55.479-22.98 c20.592-0.092,40.975,8.363,55.479,22.98c14.617,14.502,23.071,34.886,22.979,55.478L276.892,200.171L276.892,200.171z"
                  })))))
              }
            }
          }, {
            key: "render",
            value: function() {
              return this.getTheme()
            }
          }]) && n(o.prototype, a), c && n(o, c), Object.defineProperty(o, "prototype", {
            writable: !1
          }), l
        }(s.Component)
    }).call(this, l("2mXy").h)
  },
  N14G: function() {},
  O4bw: function(t, e, l) {
    "use strict";
    (function(t) {
      function o(t) {
        return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, o(t)
      }

      function n(t, e) {
        for (var l = 0; l < e.length; l++) {
          var o = e[l];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
      }

      function i(t, e) {
        return i = Object.setPrototypeOf || function(t, e) {
          return t.__proto__ = e, t
        }, i(t, e)
      }

      function r(t) {
        var e = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (t) {
            return !1
          }
        }();
        return function() {
          var l, o = c(t);
          if (e) {
            var n = c(this).constructor;
            l = Reflect.construct(o, arguments, n)
          } else l = o.apply(this, arguments);
          return a(this, l)
        }
      }

      function a(t, e) {
        if (e && ("object" === o(e) || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        return function(t) {
          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t
        }(t)
      }

      function c(t) {
        return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }, c(t)
      }
      l.d(e, "a", (function() {
        return s
      }));
      l("IAL8");
      var s = function(e) {
        function l(t) {
          var e;
          return (e = s.call(this, t)).state = {
            showNotificationType: null
          }, e
        }! function(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(t, "prototype", {
            writable: !1
          }), e && i(t, e)
        }(l, e);
        var o, a, c, s = r(l);
        return o = l, (a = [{
          key: "checkForNotifications",
          value: function() {
            window;
            COMMONCONSTANTS, COMMONCONSTANTS
          }
        }, {
          key: "componentDidMount",
          value: function() {
            var t = this;
            setTimeout((function() {
              t.checkForNotifications()
            }), 3e3)
          }
        }, {
          key: "getInnerJSX",
          value: function() {
            var e = null;
            return this.state.showNotificationType === COMMONCONSTANTS.RATING_NOTIFICATION && (e = t("div", {
              className: "rating-container"
            }, t("span", {
              className: "text"
            }, "Love this App?"), t("span", {
              className: "rate-text"
            }, "Rate us"), t("span", {
              className: "stars"
            }, "★★★★★"))), e
          }
        }, {
          key: "onClickRating",
          value: function() {
            this.state.showNotificationType === COMMONCONSTANTS.RATING_NOTIFICATION && (window, this.props.logToAmplitude(COMMONCONSTANTS.RATING_CLICK), TRACK({
              category: COMMONCONSTANTS.BEHAVIOUR,
              action: COMMONCONSTANTS.RATING_CLICK,
              label: "popup_open_till_this_click",
              value: this.intCount
            }), this.setState({
              showNotificationType: null
            }), window.open(COMMONCONSTANTS.REVIEWS_URL, "_blank"))
          }
        }, {
          key: "onClickClose",
          value: function() {
            this.showNotificationType === COMMONCONSTANTS.RATING_NOTIFICATION && (window, this.props.logToAmplitude(COMMONCONSTANTS.RATING_CLOSED), TRACK({
              category: COMMONCONSTANTS.BEHAVIOUR,
              action: COMMONCONSTANTS.RATING_CLOSED,
              label: "popup_open_till_this_click",
              value: this.intCount
            }))
          }
        }, {
          key: "render",
          value: function() {
            return this.state.showNotificationType ? t("div", {
              className: "inner-container",
              onClick: this.onClickRating.bind(this)
            }, this.getInnerJSX()) : null
          }
        }]) && n(o.prototype, a), c && n(o, c), Object.defineProperty(o, "prototype", {
          writable: !1
        }), l
      }(l("2mXy").Component)
    }).call(this, l("2mXy").h)
  },
  OLr9: function(t, e, l) {
    "use strict";
    (function(t) {
      function o(t) {
        return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, o(t)
      }

      function n(t, e) {
        for (var l = 0; l < e.length; l++) {
          var o = e[l];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
      }

      function i() {
        return i = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, l) {
          var o = r(t, e);
          if (o) {
            var n = Object.getOwnPropertyDescriptor(o, e);
            return n.get ? n.get.call(arguments.length < 3 ? t : l) : n.value
          }
        }, i.apply(this, arguments)
      }

      function r(t, e) {
        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = u(t)););
        return t
      }

      function a(t, e) {
        return a = Object.setPrototypeOf || function(t, e) {
          return t.__proto__ = e, t
        }, a(t, e)
      }

      function c(t) {
        var e = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (t) {
            return !1
          }
        }();
        return function() {
          var l, o = u(t);
          if (e) {
            var n = u(this).constructor;
            l = Reflect.construct(o, arguments, n)
          } else l = o.apply(this, arguments);
          return s(this, l)
        }
      }

      function s(t, e) {
        if (e && ("object" === o(e) || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        return p(t)
      }

      function p(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }

      function u(t) {
        return u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }, u(t)
      }
      l.d(e, "a", (function() {
        return f
      }));
      l("63mI");
      var f = function(e) {
        function l(t) {
          var e;
          return (e = f.call(this, t)).setWrapperRef = e.setWrapperRef.bind(p(e)), e
        }! function(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(t, "prototype", {
            writable: !1
          }), e && a(t, e)
        }(l, e);
        var o, r, s, f = c(l);
        return o = l, (r = [{
          key: "setWrapperRef",
          value: function(t) {
            this.wrapperRef = t
          }
        }, {
          key: "componentDidMount",
          value: function() {
            i(u(l.prototype), "componentDidMount", this).call(this)
          }
        }, {
          key: "componentWillUnmount",
          value: function() {
            i(u(l.prototype), "componentWillUnmount", this).call(this)
          }
        }, {
          key: "onClickItem",
          value: function(e) {
            if (this.selectedItem.id !== e.id)
              if (e.type && "premium" == e.type && !this.props.userLocalData.installDate && "fontFamily" == this.props.data.id && !Utility.disablePremiumFeature(this.props.userLocalData)) this.props.setParentState({
                notification: {
                  actionType: COMMONCONSTANTS.NOTIFICATION_WITH_CROSS,
                  showType: "info",
                  autoClose: !1,
                  children: t("span", null, t("h1", null, "Paid Font!"), "This is a ", t("b", null, "Premium font"), ". ", t("br", null), " ", t("br", null), "To use it, Please ", t("a", {
                    href: COMMONCONSTANTS.LICENSE_BUY_URL,
                    target: "_blank"
                  }, "buy license here"), " ", t("br", null), "& support our work.")
                }
              });
              else if (e.type && "premium" == e.type && !this.props.userLocalData.installDate && "fontSize" == this.props.data.id && !Utility.disablePremiumFeature(this.props.userLocalData)) this.props.setParentState({
              notification: {
                actionType: COMMONCONSTANTS.NOTIFICATION_WITH_CROSS,
                showType: "info",
                autoClose: !1,
                children: t("span", null, t("h1", null, "Paid TextSize!"), "This is a ", t("b", null, "Premium text size"), ". ", t("br", null), " ", t("br", null), "To use it, Please ", t("a", {
                  href: COMMONCONSTANTS.LICENSE_BUY_URL,
                  target: "_blank"
                }, "buy license here"), " ", t("br", null), "& support our work.")
              }
            });
            else {
              var l = this.props.settings;
              l.value[this.props.data.id] = e.id, e.type && "premium" == e.type && !this.props.userLocalData.installDate && !Utility.disablePremiumFeature(this.props.userLocalData) ? this.props.setParentState({
                settings: l,
                notification: {
                  actionType: COMMONCONSTANTS.NOTIFICATION_WITH_CROSS,
                  showType: "info",
                  autoClose: !1,
                  children: t("span", null, t("h1", null, "Paid Theme!"), "This is a ", t("b", null, "Premium theme"), ". ", t("br", null), "For once, we have applied this theme for your demo. ", t("br", null), t("br", null), "To use it permanently, ", t("br", null), "Please ", t("a", {
                    href: COMMONCONSTANTS.LICENSE_BUY_URL,
                    target: "_blank"
                  }, "buy license here"), " ", t("br", null), "& support our work.")
                }
              }) : (e.type && "premium" == e.type && "theme" == this.props.data.id && (TRACK({
                category: COMMONCONSTANTS.SETTINGS,
                action: COMMONCONSTANTS.PREMIUM_THEME_CLICK,
                label: e.id
              }), this.props.logToAmplitude(COMMONCONSTANTS.PREMIUM_THEME_CLICK, {
                settings_property_id: this.props.data.id,
                settings_property_value: e.id
              })), this.props.logToAmplitude(COMMONCONSTANTS.SETTINGS_PROPERTY_CHANGE, {
                settings_property_id: this.props.data.id,
                settings_property_value: e.id
              }), TRACK({
                category: COMMONCONSTANTS.SETTINGS,
                action: COMMONCONSTANTS.SETTINGS_PROPERTY_CHANGE,
                label: this.props.data.id,
                value: e.id
              }), MessagePassing.send({
                key: COMMONCONSTANTS.SAVE_VALUES,
                value: l
              }), "notesSize" == this.props.data.id && location.reload())
            }
          }
        }, {
          key: "getDropDownForSmallNote",
          value: function(e) {
            var l = this;
            return t("div", {
              className: "option-tray ".concat(e),
              ref: this.setWrapperRef
            }, t("div", {
              className: "close-container",
              onClick: this.props.close
            }, t("span", {
              className: "icon lnr lnr-cross"
            })), t("div", {
              className: "heading-container"
            }, t("span", {
              className: "text"
            }, this.props.data.label)), t("div", {
              className: "items-container"
            }, this.items.map((function(e) {
              var o = l.selectedItem.id == e.id,
                n = e.type && "premium" == e.type;
              return t("div", {
                style: "fontFamily" == l.selectedFeature ? {
                  fontFamily: e.value
                } : null,
                key: e.id,
                className: "item ".concat(o ? "selected" : ""),
                onClick: l.onClickItem.bind(l, e)
              }, n && t("span", {
                className: "premium-theme"
              }, t("span", {
                className: "icon lnr lnr-star"
              })), t("span", {
                className: "text"
              }, e.name), o && t("span", {
                className: "tick"
              }, "✓"))
            }))))
          }
        }, {
          key: "getJSXAccordingToItem",
          value: function(e) {
            var l = null;
            switch (this.selectedFeature) {
              case "notesSize":
                l = t("span", {
                  className: "notes-size-container ".concat(e.id)
                }, t("span", {
                  className: "note-demo"
                }));
                break;
              case "fontFamily":
              case "fontSize":
                return null;
              case "theme":
                var o = e.type && "premium" == e.type;
                l = t("div", {
                  className: "theme-box"
                }, o && t("span", {
                  className: "premium-theme"
                }, t("span", {
                  className: "icon lnr lnr-star"
                }), t("span", {
                  className: "text"
                }, "Premium")), e.colorCodes ? t("div", {
                  className: "color-codes"
                }, e.colorCodes.map((function(e) {
                  return t("span", {
                    className: "color",
                    style: {
                      backgroundColor: e
                    }
                  })
                }))) : e.preview_image ? t("div", {
                  className: "image-container"
                }, t("div", {
                  className: "image",
                  style: {
                    backgroundImage: "url(images/".concat(e.preview_image, ")")
                  }
                })) : t("video", {
                  autoplay: !0,
                  loop: !0
                }, t("source", {
                  src: "images/".concat(e.preview_video),
                  type: "video/mp4"
                })))
            }
            return t("div", {
              className: "display ".concat(this.selectedFeature)
            }, l)
          }
        }, {
          key: "getStyleInfo",
          value: function(t) {
            var e = {};
            return "fontFamily" != this.selectedFeature && "fontSize" != this.selectedFeature || (e[this.selectedFeature] = t.value), e
          }
        }, {
          key: "getDropDown",
          value: function(e) {
            var l = this,
              o = "theme" == e ? null : this.setWrapperRef,
              n = Utility.getNotesSizeId(this.props.settings),
              i = "default";
            return "theme" == e || "small" != n && "compact" != n || (i = n), t("div", {
              className: "option-tray ".concat(i, " ").concat(e),
              ref: o
            }, t("div", {
              className: "default-close-container",
              onClick: this.props.close
            }, t("span", {
              className: "icon lnr lnr-cross"
            })), t("div", {
              className: "arrow-container"
            }, t("span", {
              className: "arrow-up"
            })), t("div", {
              className: "items-container ".concat(e)
            }, this.items.map((function(e) {
              var o = l.selectedItem.id == e.id,
                n = e.type && "premium" == e.type,
                i = "theme" != l.props.data.id;
              return t("div", {
                key: e.id,
                className: "item ".concat(o ? "selected" : ""),
                onClick: l.onClickItem.bind(l, e)
              }, t("div", {
                className: "heading"
              }, t("span", {
                style: l.getStyleInfo(e),
                className: "text ".concat(l.selectedFeature)
              }, e.name), o && t("span", {
                className: "tick"
              }, "✓"), n && i && t("span", {
                className: "premium-nontheme-option"
              }, t("span", {
                className: "icon lnr lnr-star"
              }), t("span", {
                className: "text"
              }, "Premium"))), l.getJSXAccordingToItem(e))
            }))))
          }
        }, {
          key: "render",
          value: function() {
            var t = this;
            return this.items = this.props.data.options, this.selectedFeature = this.props.data.id, this.selectedItem = this.items.filter((function(e) {
              return e.id == t.props.settings.value[t.props.data.id]
            }))[0], this.getDropDown(this.selectedFeature)
          }
        }]) && n(o.prototype, r), s && n(o, s), Object.defineProperty(o, "prototype", {
          writable: !1
        }), l
      }(l("V6Lh").a)
    }).call(this, l("2mXy").h)
  },
  PW7t: function() {},
  Q9r8: function() {},
  QfWi: function(t, e, l) {
    "use strict";
    l.r(e),
      function(t) {
        function o(t) {
          return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
          } : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
          }, o(t)
        }

        function n(t, e) {
          for (var l = 0; l < e.length; l++) {
            var o = e[l];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
          }
        }

        function i(t, e) {
          return i = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e, t
          }, i(t, e)
        }

        function r(t) {
          var e = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (t) {
              return !1
            }
          }();
          return function() {
            var l, o = s(t);
            if (e) {
              var n = s(this).constructor;
              l = Reflect.construct(o, arguments, n)
            } else l = o.apply(this, arguments);
            return a(this, l)
          }
        }

        function a(t, e) {
          if (e && ("object" === o(e) || "function" == typeof e)) return e;
          if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
          return c(t)
        }

        function c(t) {
          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t
        }

        function s(t) {
          return s = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
          }, s(t)
        }
        l.d(e, "default", (function() {
          return S
        }));
        l("jzTc");
        var p = l("2mXy"),
          u = l("yQRk"),
          f = l("XkcL"),
          h = l("VBnW"),
          d = l("My6w"),
          F = l("Lpdv"),
          y = l("O4bw"),
          m = l("FeO9"),
          g = l("oqGk"),
          C = l("E2F5"),
          v = (l("l8q4"), l("I7s8")),
          O = l("S9Wk"),
          b = l("Fnp/"),
          N = (l("tmKu"), l("kf5q")),
          M = l("mJ8t"),
          S = function(e) {
            function l(t) {
              var e;
              return (e = p.call(this, t)).state = {
                folderData: null,
                notesArray: [],
                menuOpen: !1,
                settings: null,
                notification: null,
                userLocalData: null,
                fetchingNotes: !0,
                focusNoteId: null,
                upgradePopup: null,
                notesOverlay: !1,
                removeNode: !1,
                feedBackSubmitted: !1,
                firestoreLive: !1,
                isBlur: !1,
                notesKey: 0,
                subTheme: null,
                notesVisibility: 1,
                notesAlternateAreaData: "",
                focusMode: !1,
                showLoginReminder: !1
              }, e.applyInteractionToBody = e.applyInteractionToBody.bind(c(e)), e.changeThemeSubtheme = e.changeThemeSubtheme.bind(c(e)), e.notesAlternateAreaDataChange = e.notesAlternateAreaDataChange.bind(c(e)), e
            }! function(t, e) {
              if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
              t.prototype = Object.create(e && e.prototype, {
                constructor: {
                  value: t,
                  writable: !0,
                  configurable: !0
                }
              }), Object.defineProperty(t, "prototype", {
                writable: !1
              }), e && i(t, e)
            }(l, e);
            var o, a, s, p = r(l);
            return o = l, a = [{
              key: "applyInteractionToBody",
              value: function(t) {
                switch (t) {
                  case "notesHide":
                    this.setState({
                      notesVisibility: 0
                    });
                    break;
                  case "notesShow":
                    this.setState({
                      notesVisibility: 1
                    });
                    break;
                  default:
                    console.log("You should NOT have seen this :(")
                }
              }
            }, {
              key: "changeFocusMode",
              value: function() {
                var t = this;
                this.setState({
                  isBlur: !1
                }), this.setState({
                  focusMode: !this.state.focusMode
                }, (function() {
                  var e = window.localStorage;
                  e[COMMONCONSTANTS.FOCUS_MODE_LSCHECK] = t.state.focusMode ? "true" : "false"
                }))
              }
            }, {
              key: "changeThemeSubtheme",
              value: function(t) {
                this.setState({
                  subTheme: t
                }), this.logToAmplitude("Subtheme", {
                  maintheme: "snow",
                  subtheme: t
                })
              }
            }, {
              key: "notesAlternateAreaDataChange",
              value: function(t) {
                this.setState({
                  notesAlternateAreaData: t
                })
              }
            }, {
              key: "logToAmplitude",
              value: function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                SEND_TO_AMPLITUDE(t, e, {
                  userLocalData: this.state.userLocalData,
                  settings: this.state.settings,
                  folderData: this.state.folderData,
                  notesArray: this.state.notesArray
                })
              }
            }, {
              key: "fetchAllData",
              value: function() {
                MessagePassing.send({
                  key: COMMONCONSTANTS.FETCH_VALUES,
                  value: {
                    id: "folderNames"
                  }
                }), MessagePassing.send({
                  key: COMMONCONSTANTS.FETCH_USER_LOCAL_DATA,
                  value: {}
                }), MessagePassing.send({
                  key: COMMONCONSTANTS.FETCH_VALUES,
                  value: {
                    id: "settings"
                  }
                })
              }
            }, {
              key: "applySettingstoBody",
              value: function() {
                var t = this;
                this.state.settings && (Utility.getOptions().filter((function(t) {
                  return "theme" == t.id
                }))[0].options.filter((function(e) {
                  return e.id == t.state.settings.value.theme
                })), document.getElementsByTagName("body"))
              }
            }, {
              key: "blurTheApp",
              value: function(t) {
                this.setState({
                  isBlur: t
                })
              }
            }, {
              key: "checkForBrowserSpecifications",
              value: function() {
                var e = Utility.getBrowserSpecs();
                "Chrome" == e.name && e.version < 53 && this.setState({
                  notification: {
                    actionType: COMMONCONSTANTS.BLOCKED_LOADING,
                    children: t("div", {
                      className: "update-container"
                    }, t("span", null, "Please update your browser"), t("div", {
                      className: "list",
                      style: {
                        marginTop: 40
                      }
                    }, t("div", null, "1.  On your computer, open Chrome."), t("div", null, "2.  Click the top right button to open menu options"), t("div", null, "3.  Click Help and then About Google Chrome.")))
                  }
                })
              }
            }, {
              key: "fetchDataToStartApp",
              value: function() {
                Utility.isExtension(), this.fetchAllData()
              }
            }, {
              key: "onClickNeverShowAgain",
              value: function() {
                var t = window.localStorage;
                t[COMMONCONSTANTS.NEVER_SHOW_AGAIN_ZOOM_POPUP] || (t[COMMONCONSTANTS.NEVER_SHOW_AGAIN_ZOOM_POPUP] = 1), this.setState({
                  notification: null
                })
              }
            }, {
              key: "checkZoomStatus",
              value: function() {
                var e = this;
                Utility.isExtension() && window.APP_OPEN_IN_TAB && chrome.tabs.setZoom(0), setTimeout((function() {
                  var l = window.localStorage;
                  Math.abs(window.outerWidth - window.innerWidth) > 28 && !window.APP_OPEN_IN_TAB && Utility.isExtension() && !l[COMMONCONSTANTS.NEVER_SHOW_AGAIN_ZOOM_POPUP] && e.setState({
                    notification: {
                      actionType: COMMONCONSTANTS.FULL_CLOSABLE_NOTIFICATION,
                      classToAdd: "zoom",
                      children: t("div", {
                        className: "zoom-message-container"
                      }, t("div", null, "You zoomed out/in this page when you opened in new tab. Please open this popup in new tab and reset page to it's default zoom state which is 100%."), t("div", null, "Otherwise this popup will also be in zoomed state."), t("span", {
                        className: "open-in-new-tab",
                        onClick: e.openInNewTab
                      }, "Open in new tab and reset zoom"), t("span", {
                        className: "never-show",
                        onClick: e.onClickNeverShowAgain.bind(e)
                      }, "Never show this popup again"))
                    }
                  })
                }), 2e3)
              }
            }, {
              key: "checkForNewTabForNonPremium",
              value: function() {
                var t = this;
                setTimeout((function() {
                  t.state.userLocalData && window.APP_OPEN_IN_TAB && !Utility.disablePremiumFeature(t.state.userLocalData) && t.setState({
                    upgradePopup: {
                      text: "Open In Tab",
                      blocked: !0
                    }
                  })
                }), 2e3)
              }
            }, {
              key: "checkForPremiumBadge",
              value: function() {
                var t = this;
                setTimeout((function() {
                  t.state.userLocalData && t.state.userLocalData.installDate ? Utility.setPremiumBadgeTextAndIcon() : Utility.removePremiumBadgeTextAndIcon()
                }), 100)
              }
            }, {
              key: "checkForTour",
              value: function() {
                setTimeout((function() {
                  Object(N.a)()
                }), 1e3)
              }
            }, {
              key: "checkForFocusMode",
              value: function() {
                var t = window.localStorage;
                t[COMMONCONSTANTS.FOCUS_MODE_LSCHECK] && "true" == t[COMMONCONSTANTS.FOCUS_MODE_LSCHECK] && this.setState({
                  focusMode: !0
                })
              }
            }, {
              key: "checkForPopupCount",
              value: function() {
                var t = localStorage[COMMONCONSTANTS.POPUP_OPEN_COUNT];
                t && parseInt(t) && this.setState({
                  popupCount: parseInt(t)
                })
              }
            }, {
              key: "checkForVisibleAdForPremium",
              value: function() {
                var t = this;
                setTimeout((function() {
                  var e;
                  null !== (e = t.state.userLocalData) && void 0 !== e && e.installDate && document.querySelector(".bottom-banner-inner-container") && t.logToAmplitude(COMMONCONSTANTS.PREMIUM_AD, {
                    email: localStorage.email
                  })
                }), 2e3)
              }
            }, {
              key: "componentDidMount",
              value: function() {
                this.bindEvents(), this.checkForBrowserSpecifications(), this.checkForNewTabForNonPremium(), this.fetchDataToStartApp(), this.checkForPremiumBadge(), this.checkForFocusMode(), this.checkForPopupCount(), this.checkForVisibleAdForPremium()
              }
            }, {
              key: "openInNewTab",
              value: function(t) {
                var e = this;
                setTimeout((function() {
                  if ("popup" === t) {
                    var l = Utility.getDimensionsAccordingToSize(e.state.settings),
                      o = l.width,
                      n = l.height;
                    chrome.windows.create({
                      url: chrome.runtime.getURL("popuptab.html"),
                      width: parseInt(o),
                      height: parseInt(n + 25),
                      focused: !0,
                      type: "popup",
                      left: parseInt((window.screen.width - o) / 2),
                      top: parseInt((window.screen.height - n) / 2)
                    }, (function() {
                      window.close()
                    }))
                  } else chrome.tabs.create({
                    url: chrome.runtime.getURL("popuptab.html")
                  })
                }), 0)
              }
            }, {
              key: "addMessageEventListener",
              value: function() {
                var e = this;
                MessagePassing.on((function(l) {
                  var o = l.value,
                    n = l.senderData || {};
                  if (Utility.shouldAllowEvent(window.assignedId, l.assignedId, l.key)) switch (l.key) {
                    case COMMONCONSTANTS.FETCH_VALUES_SUCCESS:
                      switch (o.id) {
                        case COMMONCONSTANTS.FOLDER_NAMES_KEY_STRING:
                          e.folderData = o, MessagePassing.send({
                            key: COMMONCONSTANTS.FETCH_FOLDER_ALL_NOTES,
                            value: {
                              id: o.activeId
                            }
                          });
                          break;
                        case COMMONCONSTANTS.SETTINGS_KEY_STRING:
                          e.setState({
                            settings: o
                          }, e.applySettingstoBody)
                      }
                      break;
                    case COMMONCONSTANTS.FETCH_USER_LOCAL_DATA_SUCCESS:
                      if (Utility.testModePremium() && (o.installDate = !0), n && n.from && "backupSuccess" == n.from && !n.secondaryBackup) return void e.setState({
                        userLocalData: o,
                        notification: null
                      }, (function() {
                        e.setState({
                          notification: {
                            actionType: COMMONCONSTANTS.NOTIFICATION_WITH_CROSS,
                            showType: "success",
                            autoClose: !0,
                            children: t("span", null, "Backed up your data successfully !")
                          }
                        })
                      }));
                      if (l.senderData && l.senderData.from && "backupError" == l.senderData.from) return void(n.secondaryBackup || e.setState({
                        userLocalData: o,
                        notification: {
                          actionType: COMMONCONSTANTS.NOTIFICATION_WITH_CROSS,
                          showType: "success",
                          autoClose: !0,
                          children: t("span", null, "Success fully logged out", o.message, " ")
                        }
                      }));
                      if (l.senderData && l.senderData.from && "logout" == l.senderData.from) {
                        var i = [];
                        return l.senderData.source && "user" == l.senderData.source && (i = t("div", {
                          className: "logout-consent-container"
                        }, t("div", {
                          className: "question"
                        }, "Do you also want to delete all data from this device?"), t("div", {
                          className: "options-container"
                        }, t("span", {
                          className: "no consent-button",
                          onClick: function() {
                            e.setState({
                              notification: null
                            })
                          }
                        }, "No"), t("span", {
                          className: "yes consent-button",
                          onClick: function() {
                            MessagePassing.send({
                              key: COMMONCONSTANTS.CLEAR_ALL_NOTES_DATA,
                              value: {}
                            })
                          }
                        }, "Delete All data")))), void e.setState({
                          userLocalData: o,
                          notification: {
                            actionType: COMMONCONSTANTS.NOTIFICATION_WITH_CROSS,
                            showType: "success",
                            autoClose: !1,
                            children: t("span", {
                              className: "logout-text"
                            }, "Success fully logged out", i)
                          }
                        })
                      }
                      e.setState({
                        userLocalData: o,
                        notification: null
                      }), o.email && o.email.length > 0 && !e.state.firestoreLive && MessagePassing.send({
                        key: COMMONCONSTANTS.WAKEUP_FIRESTORE,
                        value: {
                          userLocalData: o
                        }
                      });
                      break;
                    case COMMONCONSTANTS.WAKEUP_FIRESTORE_SUCCESS:
                      e.setState({
                        firestoreLive: !0
                      }), o && o.userLocalData && (Utility.shouldCreateSecondaryBackup(o.userLocalData) && setTimeout((function() {
                        MessagePassing.send({
                          key: COMMONCONSTANTS.BACKUP,
                          value: {
                            secondaryBackup: !0
                          },
                          callerInfo: {
                            from: COMMONCONSTANTS.INTERNAL_ACTION,
                            secondaryBackup: !0
                          }
                        })
                      }), 1100), Utility.shouldBackUp(o.userLocalData) && setTimeout((function() {
                        console.log("backup normal"), MessagePassing.send({
                          key: COMMONCONSTANTS.BACKUP,
                          value: {},
                          callerInfo: {
                            from: COMMONCONSTANTS.INTERNAL_ACTION
                          }
                        })
                      }), 100));
                      break;
                    case COMMONCONSTANTS.WAKEUP_FIRESTORE_ERROR:
                      o && o.code && o.code == COMMONCONSTANTS.WAKEUP_USER_EMPTY && e.setState({
                        showLoginReminder: !0
                      });
                      break;
                    case COMMONCONSTANTS.CLEAR_ALL_NOTES_DATA_SUCCESS:
                      e.setState({
                        userLocalData: o,
                        notification: {
                          actionType: COMMONCONSTANTS.NOTIFICATION_WITH_CROSS,
                          showType: "success",
                          autoClose: !0,
                          children: t("span", null, "Cleared all data ")
                        }
                      }), e.fetchAllData(), setTimeout((function() {
                        e.setState({
                          notesKey: 1
                        })
                      }), 200);
                      break;
                    case COMMONCONSTANTS.CLEAR_ALL_NOTES_DATA_ERROR:
                      e.setState({
                        notification: {
                          actionType: COMMONCONSTANTS.NOTIFICATION_WITH_CROSS,
                          showType: "error",
                          autoClose: !0,
                          children: t("span", null, o.message, " ")
                        }
                      });
                      break;
                    case COMMONCONSTANTS.FETCH_USER_LOCAL_DATA_ERROR:
                      break;
                    case COMMONCONSTANTS.FETCH_USER_ERROR:
                      e.setState({
                        userLocalData: o,
                        user: null,
                        notification: {
                          actionType: COMMONCONSTANTS.NOTIFICATION_WITH_CROSS,
                          showType: "error",
                          autoClose: !0,
                          children: t("span", null, o.message, " ")
                        }
                      });
                      break;
                    case COMMONCONSTANTS.SAVE_USER_LOCAL_DATA_SUCCESS:
                      MessagePassing.send({
                        key: COMMONCONSTANTS.FETCH_USER_LOCAL_DATA,
                        value: {},
                        callerInfo: l.senderData
                      });
                      break;
                    case COMMONCONSTANTS.SAVE_USER_LOCAL_DATA_ERROR:
                      MessagePassing.send({
                        key: COMMONCONSTANTS.FETCH_USER_LOCAL_DATA,
                        value: {}
                      });
                      break;
                    case COMMONCONSTANTS.FETCH_FOLDER_ALL_NOTES_SUCCESS:
                      console.log("notes fetched"), e.setState({
                        folderData: e.folderData,
                        notesArray: o,
                        fetchingNotes: !1,
                        notesOverlay: !1
                      }), e.checkForTour();
                      break;
                    case COMMONCONSTANTS.FETCH_NOTE_SUCCESS:
                      break;
                    case COMMONCONSTANTS.SAVE_VALUES_SUCCESS:
                      MessagePassing.send({
                        key: COMMONCONSTANTS.FETCH_VALUES,
                        value: {
                          id: o
                        }
                      });
                      break;
                    case COMMONCONSTANTS.SAVE_NOTE_SUCCESS:
                      break;
                    case COMMONCONSTANTS.BACKUP_SUCCESS:
                      MessagePassing.send({
                        key: COMMONCONSTANTS.FETCH_USER_LOCAL_DATA,
                        value: {},
                        callerInfo: {
                          from: "backupSuccess",
                          secondaryBackup: n.secondaryBackup
                        }
                      });
                      break;
                    case COMMONCONSTANTS.BACKUP_ERROR:
                      "browser-token-mismatch" == o.code && e.setState({
                        notification: {
                          actionType: COMMONCONSTANTS.ASK_FOR_CONSENT,
                          question: "ERROR !",
                          agreeText: "OK",
                          smallText: "You are logged in on some other browser/device therefore you will be LOGGED OUT now. You can login again and your old data will be merged with current data.",
                          onAgree: function() {
                            e.setState({
                              notification: {
                                actionType: COMMONCONSTANTS.BLOCKED_LOADING,
                                children: t("span", null, "Logging you Out ")
                              }
                            }), MessagePassing.send({
                              key: COMMONCONSTANTS.LOGOUT,
                              value: {},
                              callerInfo: {
                                from: "backupError"
                              }
                            })
                          }
                        }
                      }), "license-deactive" == o.code && e.setState({
                        notification: {
                          actionType: COMMONCONSTANTS.NOTIFICATION_WITH_CROSS,
                          showType: "error",
                          autoClose: !0,
                          children: t("span", null, "Your License is deactive. Please buy license")
                        }
                      });
                      break;
                    case COMMONCONSTANTS.RESTORE_SUCCESS:
                      e.setState({
                        notesArray: [],
                        settings: null,
                        folderNames: null,
                        fetchingNotes: !0,
                        notification: {
                          actionType: COMMONCONSTANTS.NOTIFICATION_WITH_CROSS,
                          showType: "success",
                          autoClose: !0,
                          children: t("span", null, "Restored your data successfully !")
                        }
                      }), e.fetchAllData();
                      break;
                    case COMMONCONSTANTS.RESTORE_ERROR:
                      e.setState({
                        notification: {
                          actionType: COMMONCONSTANTS.NOTIFICATION_WITH_CROSS,
                          showType: "error",
                          autoClose: !0,
                          children: t("span", null, "Couldn't restore your data. ", o.message, " ")
                        }
                      });
                      break;
                    case COMMONCONSTANTS.LOGIN_SUCCESS:
                      MessagePassing.send({
                        key: COMMONCONSTANTS.FETCH_USER_LOCAL_DATA,
                        value: {}
                      });
                      break;
                    case COMMONCONSTANTS.LOGIN_ERROR:
                      break;
                    case COMMONCONSTANTS.LOGOUT_SUCCESS:
                      delete localStorage.email, MessagePassing.send({
                        key: COMMONCONSTANTS.FETCH_USER_LOCAL_DATA,
                        value: {},
                        callerInfo: l.senderData
                      }), MessagePassing.send({
                        key: COMMONCONSTANTS.FETCH_VALUES,
                        value: {
                          id: "folderNames"
                        }
                      });
                      break;
                    case COMMONCONSTANTS.LOGOUT_ERROR:
                      e.setState({
                        notification: {
                          actionType: COMMONCONSTANTS.NOTIFICATION_WITH_CROSS,
                          showType: "error",
                          autoClose: !0,
                          children: t("span", null, "Couldn't log out ", o.message, " ")
                        }
                      });
                      break;
                    case COMMONCONSTANTS.SUBMIT_FEEDBACK_SUCCESS:
                    case COMMONCONSTANTS.SUBMIT_FEEDBACK_ERROR:
                      e.setState({
                        feedBackSubmitted: !0
                      });
                      break;
                    case COMMONCONSTANTS.BROADCAST_POPUP_OPENED:
                      setTimeout((function() {
                        window.APP_OPEN_IN_TAB && e.setState({
                          removeNode: !0,
                          notification: {
                            actionType: COMMONCONSTANTS.BLOCKED_LOADING,
                            children: t("div", {
                              className: "app-open-two-location-container"
                            }, t("div", {
                              className: "header"
                            }, t("span", {
                              className: "text"
                            }, " You opened the popup. Please reload this page to use it here")), t("div", {
                              className: "reload-container"
                            }, t("div", {
                              className: "reload-button",
                              onClick: function() {
                                window.location.reload()
                              }
                            }, "Use here")))
                          }
                        })
                      }), 100);
                      break;
                    case COMMONCONSTANTS.BROADCAST_ON_CLICK_EVENT:
                      setTimeout((function() {
                        if (window.APP_OPEN_IN_TAB) {
                          var o = l.senderData.tabId;
                          chrome.tabs.getCurrent((function(l) {
                            l.id != o && e.setState({
                              notification: {
                                actionType: COMMONCONSTANTS.BLOCKED_LOADING,
                                children: t("div", {
                                  className: "app-open-two-location-container"
                                }, t("div", {
                                  className: "header"
                                }, t("span", {
                                  className: "text"
                                }, " This App was used in another tab. Please reload this page to use it here")), t("div", {
                                  className: "reload-container"
                                }, t("div", {
                                  className: "reload-button",
                                  onClick: function() {
                                    window.location.reload()
                                  }
                                }, "Use here")))
                              }
                            })
                          }))
                        }
                      }), 100)
                  }
                }))
              }
            }, {
              key: "bindEvents",
              value: function() {
                this.addMessageEventListener()
              }
            }, {
              key: "getInlineCSS",
              value: function() {
                var t, e = Utility.getOptions(),
                  l = {},
                  o = "",
                  n = this.state.settings,
                  i = DefaultValuesHelper.getDefaultValues(COMMONCONSTANTS.UKIV_INDEXDB_CURRENT_VERSION).values.filter((function(t) {
                    return "settings" == t.id
                  }))[0];
                if (n || (n = i), e.forEach((function(t) {
                    var e = t.options.filter((function(e) {
                        return e.id == n.value[t.id]
                      }))[0],
                      i = e.value;
                    switch (t.id) {
                      case "fontFamily":
                      case "fontSize":
                        break;
                      case "notesSize":
                        l.width = i.width + "px", l.height = i.height + "px", o += e.id + " ";
                        break;
                      case "theme":
                        o += i + " "
                    }
                  })), this.state.folderData) {
                  var r = this.state.folderData.activeId,
                    a = this.state.folderData.value.filter((function(t) {
                      return t.id === r
                    }))[0],
                    c = this.state.folderData.value.filter((function(t) {
                      return t.visible
                    })),
                    s = a.show.filter((function(t) {
                      return 1 === t
                    })).length;
                  o += " notes-visible-" + s, o += " visible-folders-" + c.length
                }
                return null !== (t = this.state.userLocalData) && void 0 !== t && t.installDate && (o += " is-premium"), this.state.focusMode && (o += " focus"), {
                  style: l,
                  classToAdd: o
                }
              }
            }, {
              key: "setParentState",
              value: function(t) {
                this.setState(t)
              }
            }, {
              key: "onManuallyCloseNotification",
              value: function() {
                this.logToAmplitude(COMMONCONSTANTS.MANUALLY_CLOSE_NOTIFICATION), TRACK({
                  category: COMMONCONSTANTS.NOTIFICATION,
                  action: COMMONCONSTANTS.MANUALLY_CLOSE_NOTIFICATION
                }), this.setState({
                  notification: null
                })
              }
            }, {
              key: "onFocusNote",
              value: function(t) {
                this.setState({
                  focusNoteId: t
                })
              }
            }, {
              key: "onCloseNotification",
              value: function() {
                this.state.notification && this.state.notification.onCloseNotification ? this.state.notification.onCloseNotification() : this.onManuallyCloseNotification()
              }
            }, {
              key: "render",
              value: function() {
                var e, l = this,
                  o = this.getInlineCSS();
                return t("div", {
                  className: "app ".concat(null !== (e = this.state.userLocalData) && void 0 !== e && e.installDate ? "is-premium" : "", " ").concat(this.state.subTheme ? this.state.subTheme : "", " ").concat(this.state.isBlur ? "app-blur" : "", " ").concat(o.classToAdd, " "),
                  style: o.style
                }, !this.state.removeNode && !this.state.focusMode && t("div", {
                  className: "header-container"
                }, this.state.settings && this.state.folderData && t(u.a, {
                  logToAmplitude: this.logToAmplitude.bind(this),
                  setParentState: this.setParentState.bind(this),
                  settings: this.state.settings,
                  userLocalData: this.state.userLocalData,
                  folderData: this.state.folderData
                })), !this.state.fetchingNotes && this.state.settings && !this.state.removeNode && this.state.notesVisibility ? t("div", {
                  className: "content"
                }, t(f.a, {
                  key: this.state.notesKey,
                  notesOverlay: this.state.notesOverlay,
                  onFocusNote: this.onFocusNote.bind(this),
                  focusNoteId: this.state.focusNoteId,
                  logToAmplitude: this.logToAmplitude.bind(this),
                  userLocalData: this.state.userLocalData,
                  setParentState: this.setParentState.bind(this),
                  settings: this.state.settings,
                  folderData: this.state.folderData,
                  notesArray: this.state.notesArray
                }), t(O.a, {
                  firestoreLive: this.state.firestoreLive,
                  settings: this.state.settings,
                  blurTheApp: this.blurTheApp.bind(this),
                  logToAmplitude: this.logToAmplitude.bind(this),
                  userLocalData: this.state.userLocalData,
                  setParentState: this.setParentState.bind(this),
                  changeFocusMode: this.changeFocusMode.bind(this),
                  focusMode: this.state.focusMode,
                  openInNewTab: this.openInNewTab.bind(this)
                })) : null, this.state.popupCount > 2 && this.state.userLocalData && !this.state.userLocalData.installDate && t(v.a, {
                  setParentState: this.setParentState.bind(this),
                  settings: this.state.settings,
                  logToAmplitude: this.logToAmplitude.bind(this)
                }), this.state.notification && t(h.a, {
                  logToAmplitude: this.logToAmplitude.bind(this),
                  onCloseNotification: this.onCloseNotification.bind(this),
                  data: this.state.notification
                }), this.state.settings && !this.state.removeNode && t(d.a, {
                  logToAmplitude: this.logToAmplitude.bind(this),
                  key: this.state.settings.value.theme,
                  settings: this.state.settings,
                  applyInteractionToBody: this.applyInteractionToBody,
                  notesAlternateAreaDataChange: this.notesAlternateAreaDataChange,
                  changeThemeSubtheme: this.changeThemeSubtheme
                }), this.state.upgradePopup && t(F.a, {
                  logToAmplitude: this.logToAmplitude.bind(this),
                  data: this.state.upgradePopup,
                  close: function() {
                    l.setState({
                      upgradePopup: null
                    })
                  }
                }), this.state.showLoginReminder && t(M.a, {
                  logToAmplitude: this.logToAmplitude.bind(this)
                }), t(C.a, {
                  logToAmplitude: this.logToAmplitude.bind(this)
                }), t(y.a, {
                  logToAmplitude: this.logToAmplitude.bind(this)
                }), !this.state.feedBackSubmitted && t(m.a, {
                  logToAmplitude: this.logToAmplitude.bind(this)
                }), this.state.userLocalData && t(g.a, {
                  userLocalData: this.state.userLocalData,
                  setParentState: this.setParentState.bind(this),
                  logToAmplitude: this.logToAmplitude.bind(this)
                }), t(b.a, {
                  setParentState: this.setParentState.bind(this)
                }))
              }
            }], a && n(o.prototype, a), s && n(o, s), Object.defineProperty(o, "prototype", {
              writable: !1
            }), l
          }(p.Component)
      }.call(this, l("2mXy").h)
  },
  RJ2T: function(t, e, l) {
    "use strict";
    (function(t) {
      function o(t) {
        return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, o(t)
      }

      function n(t, e) {
        for (var l = 0; l < e.length; l++) {
          var o = e[l];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
      }

      function i() {
        return i = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, l) {
          var o = r(t, e);
          if (o) {
            var n = Object.getOwnPropertyDescriptor(o, e);
            return n.get ? n.get.call(arguments.length < 3 ? t : l) : n.value
          }
        }, i.apply(this, arguments)
      }

      function r(t, e) {
        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = p(t)););
        return t
      }

      function a(t, e) {
        return a = Object.setPrototypeOf || function(t, e) {
          return t.__proto__ = e, t
        }, a(t, e)
      }

      function c(t) {
        var e = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (t) {
            return !1
          }
        }();
        return function() {
          var l, o = p(t);
          if (e) {
            var n = p(this).constructor;
            l = Reflect.construct(o, arguments, n)
          } else l = o.apply(this, arguments);
          return s(this, l)
        }
      }

      function s(t, e) {
        if (e && ("object" === o(e) || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        return function(t) {
          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t
        }(t)
      }

      function p(t) {
        return p = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }, p(t)
      }
      l.d(e, "a", (function() {
        return u
      }));
      l("kpLI");
      var u = function(e) {
        function l(t) {
          var e;
          return (e = u.call(this, t)).state = {
            editLinkOpen: !1,
            href: e.props.data.href,
            text: e.props.data.text
          }, e
        }! function(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(t, "prototype", {
            writable: !1
          }), e && a(t, e)
        }(l, e);
        var o, r, s, u = c(l);
        return o = l, (r = [{
          key: "onClickEdit",
          value: function() {
            var t = this.props.data.text;
            this.setState({
              editLinkOpen: !0
            }), this.props.logToAmplitude(COMMONCONSTANTS.LINK_EDITOR_EDIT_CLICK), TRACK({
              category: COMMONCONSTANTS.NOTES,
              action: COMMONCONSTANTS.LINK_EDITOR_EDIT_CLICK,
              label: t.length
            })
          }
        }, {
          key: "componentWillUnmount",
          value: function() {
            i(p(l.prototype), "componentWillUnmount", this).call(this)
          }
        }, {
          key: "componentDidMount",
          value: function() {
            i(p(l.prototype), "componentDidMount", this).call(this)
          }
        }, {
          key: "onClickLink",
          value: function(t) {
            this.props.logToAmplitude(COMMONCONSTANTS.LINK_EDITOR_LINK_CLICK), TRACK({
              category: COMMONCONSTANTS.NOTES,
              action: COMMONCONSTANTS.LINK_EDITOR_LINK_CLICK
            }), t.preventDefault(), t.stopPropagation(), window.open(this.props.data.href, "_blank")
          }
        }, {
          key: "onClickUnlink",
          value: function() {
            var t = {
              href: this.state.href,
              text: this.state.text,
              ops: this.props.data.ops,
              index: this.props.data.index
            };
            this.props.logToAmplitude(COMMONCONSTANTS.LINK_EDITOR_UNLINK_CLICK), this.props.onClickUnlink(t), TRACK({
              category: COMMONCONSTANTS.NOTES,
              action: COMMONCONSTANTS.LINK_EDITOR_UNLINK_CLICK
            })
          }
        }, {
          key: "onClickDone",
          value: function() {
            var e = this.state.text,
              l = this.state.href;
            l && e && 0 != l.trim().length && 0 != e.trim().length ? (-1 == l.indexOf("http") && (l = "https://" + l), this.props.editLink({
              href: l,
              text: e,
              ops: this.props.data.ops,
              index: this.props.data.index
            }), this.props.logToAmplitude(COMMONCONSTANTS.LINK_EDITOR_DONE_CLICK, {
              hrefLength: l.length,
              textLength: e.length
            }), TRACK({
              category: COMMONCONSTANTS.NOTES,
              action: COMMONCONSTANTS.LINK_EDITOR_DONE_CLICK,
              label: e.length
            })) : this.props.setParentState({
              notification: {
                actionType: COMMONCONSTANTS.NOTIFICATION_WITH_CROSS,
                showType: "error",
                autoClose: !0,
                timer: 3e3,
                children: t("span", null, "Value must not be empty")
              }
            })
          }
        }, {
          key: "onChangeText",
          value: function(t) {
            this.setState({
              text: t.target.value
            })
          }
        }, {
          key: "onChangeLink",
          value: function(t) {
            this.setState({
              href: t.target.value
            })
          }
        }, {
          key: "render",
          value: function() {
            var e = this.props.data.href,
              l = this.props.data.x,
              o = this.props.data.y;
            return e.length > 20 && (e = e.slice(0, 20), e += "..."), t("div", {
              ref: this.setWrapperRef,
              className: "link-editor-container ".concat(this.state.editLinkOpen ? "edit-open" : ""),
              style: {
                top: o + "px",
                left: l + "px"
              }
            }, t("span", {
              className: "close-container",
              onClick: this.props.close
            }, t("span", {
              className: "cross"
            }, "x")), t("div", {
              className: "wrapper-container"
            }, t("div", {
              className: "arrow-container"
            }, t("span", {
              className: "arrow-up"
            })), t("div", {
              className: "inner-container"
            }, !this.state.editLinkOpen && t("div", {
              className: "default-container"
            }, t("div", {
              className: "pell-inline-link"
            }, t("span", {
              className: "pre-text"
            }, "Visit"), t("span", {
              className: "link",
              onClick: this.onClickLink.bind(this)
            }, e)), t("div", {
              className: "button-container"
            }, t("span", {
              className: "edit-button small-button",
              onClick: this.onClickEdit.bind(this)
            }, "Edit"), t("span", {
              className: "unlink small-button",
              onClick: this.onClickUnlink.bind(this)
            }, "Unlink"))), this.state.editLinkOpen && t("div", {
              className: "edit-link-container"
            }, t("div", {
              className: "paste-link-container"
            }, t("div", {
              className: "label-text"
            }, "Write / Paste Link here"), t("input", {
              onKeyUp: this.onChangeLink.bind(this),
              className: "paste-link-input",
              value: this.state.href
            })), t("div", {
              className: "text-link-container"
            }, t("div", {
              className: "label-text"
            }, "Text to show on Note"), t("input", {
              onKeyUp: this.onChangeText.bind(this),
              className: "text-link-input",
              value: this.state.text
            })), t("div", {
              className: "button-container"
            }, t("span", {
              className: "button",
              onClick: this.onClickDone.bind(this)
            }, "Done"))))))
          }
        }]) && n(o.prototype, r), s && n(o, s), Object.defineProperty(o, "prototype", {
          writable: !1
        }), l
      }(l("V6Lh").a)
    }).call(this, l("2mXy").h)
  },
  RRfL: function() {},
  S9Wk: function(t, e, l) {
    "use strict";
    (function(t) {
      function o(t) {
        return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, o(t)
      }

      function n(t, e) {
        var l = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          e && (o = o.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), l.push.apply(l, o)
        }
        return l
      }

      function i(t) {
        for (var e = 1; e < arguments.length; e++) {
          var l = null != arguments[e] ? arguments[e] : {};
          e % 2 ? n(Object(l), !0).forEach((function(e) {
            r(t, e, l[e])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : n(Object(l)).forEach((function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e))
          }))
        }
        return t
      }

      function r(t, e, l) {
        return e in t ? Object.defineProperty(t, e, {
          value: l,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = l, t
      }

      function a(t, e) {
        for (var l = 0; l < e.length; l++) {
          var o = e[l];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
      }

      function c(t, e) {
        return c = Object.setPrototypeOf || function(t, e) {
          return t.__proto__ = e, t
        }, c(t, e)
      }

      function s(t) {
        var e = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (t) {
            return !1
          }
        }();
        return function() {
          var l, o = u(t);
          if (e) {
            var n = u(this).constructor;
            l = Reflect.construct(o, arguments, n)
          } else l = o.apply(this, arguments);
          return p(this, l)
        }
      }

      function p(t, e) {
        if (e && ("object" === o(e) || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        return function(t) {
          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t
        }(t)
      }

      function u(t) {
        return u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }, u(t)
      }
      l.d(e, "a", (function() {
        return m
      }));
      l("UrXQ");
      var f = l("2mXy"),
        h = l("Ix2s"),
        d = l("0cdj"),
        F = l("T+Bt"),
        y = l("ffFS"),
        m = function(e) {
          function l(t) {
            var e;
            return (e = p.call(this, t)).state = {
              selectedTab: null
            }, e
          }! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                writable: !0,
                configurable: !0
              }
            }), Object.defineProperty(t, "prototype", {
              writable: !1
            }), e && c(t, e)
          }(l, e);
          var o, n, r, p = s(l);
          return o = l, (n = [{
            key: "componentDidMount",
            value: function() {}
          }, {
            key: "onClickSettingTab",
            value: function(t) {
              this.setState({
                selectedTab: t
              }), this.props.logToAmplitude("Sidebar Settings", {
                tab: t
              }), TRACK({
                category: "Sidebar Settings",
                action: t
              })
            }
          }, {
            key: "closeTray",
            value: function() {
              this.setState({
                selectedTab: null
              }), this.props.blurTheApp(0)
            }
          }, {
            key: "closeTrayByOutside",
            value: function(t) {
              "settings-background-trigger" == t.target.id && (this.setState({
                selectedTab: null
              }), this.props.blurTheApp(0))
            }
          }, {
            key: "getContent",
            value: function(e) {
              switch (e) {
                case "theme":
                  return t("div", null, t("div", {
                    className: "heading-text"
                  }, "Try a new theme:"), t(d.a, {
                    logToAmplitude: this.props.logToAmplitude,
                    setParentState: this.props.setParentState,
                    userLocalData: this.props.userLocalData,
                    settings: this.props.settings,
                    whatToShow: "theme"
                  }));
                case "fontFamily":
                  return t("div", null, t("div", {
                    className: "heading-text"
                  }, "Choose your font:"), t(d.a, {
                    logToAmplitude: this.props.logToAmplitude,
                    setParentState: this.props.setParentState,
                    userLocalData: this.props.userLocalData,
                    settings: this.props.settings,
                    whatToShow: "fontFamily"
                  }));
                case "notesSize":
                  return t("div", null, t("div", {
                    className: "heading-text"
                  }, "Change Popup size:"), t(d.a, {
                    logToAmplitude: this.props.logToAmplitude,
                    setParentState: this.props.setParentState,
                    userLocalData: this.props.userLocalData,
                    settings: this.props.settings,
                    whatToShow: "notesSize"
                  }));
                case "fontSize":
                  return t("div", null, t("div", {
                    className: "heading-text"
                  }, "Change Text size:"), t(d.a, {
                    logToAmplitude: this.props.logToAmplitude,
                    setParentState: this.props.setParentState,
                    userLocalData: this.props.userLocalData,
                    settings: this.props.settings,
                    whatToShow: "fontSize"
                  }));
                case "login":
                  return t(Profile, {
                    firestoreLive: this.props.firestoreLive,
                    setParentState: this.props.setParentState,
                    logToAmplitude: this.props.logToAmplitude,
                    userLocalData: this.props.userLocalData
                  });
                case "backup":
                  return t(Backup, {
                    firestoreLive: this.props.firestoreLive,
                    setParentState: this.props.setParentState,
                    logToAmplitude: this.props.logToAmplitude,
                    userLocalData: this.props.userLocalData
                  });
                case "refer":
                  return t(F.a, {
                    setParentState: this.props.setParentState,
                    logToAmplitude: this.props.logToAmplitude
                  })
              }
            }
          }, {
            key: "onClickSettingTabObsolete",
            value: function(t, e) {
              switch (t) {
                case "appMode":
                  this.props.changeAppMode(e);
                  break;
                case "light":
                  var l = i({}, this.props.settings);
                  l.value.theme = "normal_theme", this.props.changeSettings(l);
                  break;
                case "dark":
                  var o = i({}, this.props.settings);
                  o.value.theme = "Dark", this.props.changeSettings(o);
                  break;
                case "font":
                case "account":
                case "themes":
                  this.setState({
                    selectedTab: t
                  })
              }
            }
          }, {
            key: "onClickNewTab",
            value: function() {
              var t = !Utility.disablePremiumFeature(this.props.userLocalData);
              this.props.logToAmplitude(COMMONCONSTANTS.OPEN_IN_TAB, {
                disablePremiumFeature: t
              }), TRACK({
                category: COMMONCONSTANTS.SETTINGS,
                action: COMMONCONSTANTS.OPEN_IN_TAB,
                label: t
              }), t ? this.props.setParentState({
                upgradePopup: {
                  text: "Draggable Popup"
                }
              }) : this.props.openInNewTab("popup")
            }
          }, {
            key: "onClickFocus",
            value: function() {
              var t = !Utility.disablePremiumFeature(this.props.userLocalData);
              this.props.logToAmplitude(COMMONCONSTANTS.FOCUS_MODE, {
                disablePremiumFeature: t
              }), TRACK({
                category: COMMONCONSTANTS.SETTINGS,
                action: COMMONCONSTANTS.FOCUS_MODE,
                label: t
              }), t ? this.props.setParentState({
                upgradePopup: {
                  text: "Focus Mode"
                }
              }) : this.props.changeFocusMode()
            }
          }, {
            key: "render",
            value: function() {
              var e = this.state,
                l = this.props.focusMode;
              return t("div", {
                className: "settings-outer-container"
              }, !l && t("div", {
                className: "upper-settings"
              }, t("span", null, t(y.a, {
                firestoreLive: this.props.firestoreLive,
                openInNewTab: this.props.openInNewTab.bind(this),
                logToAmplitude: this.props.logToAmplitude.bind(this),
                setParentState: this.props.setParentState.bind(this),
                userLocalData: this.props.userLocalData,
                settings: this.props.settings
              })), t("span", {
                className: "tab-item theme-setting",
                onClick: this.onClickSettingTab.bind(this, "theme")
              }, t("span", {
                className: "icon-container themes-icon"
              }), t("span", {
                className: "text text-smaller"
              }, "Themes")), t("span", {
                className: "tab-item",
                onClick: this.onClickSettingTab.bind(this, "fontFamily")
              }, t("span", {
                className: "icon-container font-family-icon"
              }), t("span", {
                className: "text"
              }, "Fonts")), t("span", {
                className: "tab-item",
                onClick: this.onClickSettingTab.bind(this, "fontSize")
              }, t("span", {
                className: "icon-container font-size-icon"
              }), t("span", {
                className: "text"
              }, "Text Size")), t("span", {
                className: "tab-item",
                onClick: this.onClickSettingTab.bind(this, "notesSize")
              }, t("span", {
                className: "icon-container note-size-icon"
              }), t("span", {
                className: "text"
              }, "App Size")), t("span", {
                className: "tab-item",
                onClick: this.onClickSettingTab.bind(this, "refer")
              }, t("span", {
                className: "icon-container refer-icon"
              }), t("span", {
                className: "text"
              }, "Refer")), t("span", {
                className: "tab-item"
              }, t("a", {
                className: "link-white",
                href: "https://fireant.vn/charts",
                target: "_blank"
              }, t("span", {
                className: "icon-container help-icon"
              }), t("span", {
                className: "text"
              }, "Fireant")))), !l && t("div", {
                className: "lower-settings"
              }, t("span", {
                className: "tab-item",
                onClick: this.onClickNewTab.bind(this)
              }, t("span", {
                className: "icon-container new-tab-icon"
              }), t("span", {
                className: "text"
              }, "Drag"), t("span", {
                className: "settings-sidebar-tags hide-on-premium"
              }, "Pro")), t("span", {
                className: "tab-item focus",
                onClick: this.onClickFocus.bind(this)
              }, t("span", {
                className: "icon-container focus-icon"
              }), t("span", {
                className: "text"
              }, "Focus"), t("span", {
                className: "settings-sidebar-tags hide-on-premium"
              }, "Pro"))), e.selectedTab && t(h.a, {
                parentClass: "settings-tray-container",
                blurTheApp: this.props.blurTheApp.bind(this)
              }, t("div", {
                className: "black-background",
                id: "settings-background-trigger",
                onClick: this.closeTrayByOutside.bind(this)
              }, t("div", {
                className: "close-container",
                onClick: this.closeTray.bind(this)
              }, t("i", {
                className: "lnr lnr-cross"
              })), t("div", {
                className: "settings-content"
              }, this.getContent(e.selectedTab)))), l && t("span", {
                className: "focus-control-button",
                onClick: this.props.changeFocusMode
              }, t("span", {
                className: "icon-container"
              }, "×"), t("span", {
                className: "text"
              }, "Exit focus mode")))
            }
          }]) && a(o.prototype, n), r && a(o, r), Object.defineProperty(o, "prototype", {
            writable: !1
          }), l
        }(f.Component)
    }).call(this, l("2mXy").h)
  },
  "T+Bt": function(t, e, l) {
    "use strict";
    (function(t) {
      function o(t) {
        return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, o(t)
      }

      function n(t, e) {
        for (var l = 0; l < e.length; l++) {
          var o = e[l];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
      }

      function i(t, e) {
        return i = Object.setPrototypeOf || function(t, e) {
          return t.__proto__ = e, t
        }, i(t, e)
      }

      function r(t) {
        var e = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (t) {
            return !1
          }
        }();
        return function() {
          var l, o = c(t);
          if (e) {
            var n = c(this).constructor;
            l = Reflect.construct(o, arguments, n)
          } else l = o.apply(this, arguments);
          return a(this, l)
        }
      }

      function a(t, e) {
        if (e && ("object" === o(e) || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        return function(t) {
          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t
        }(t)
      }

      function c(t) {
        return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }, c(t)
      }
      l.d(e, "a", (function() {
        return u
      }));
      l("ELEc");
      var s = l("2mXy"),
        p = l("i8rI"),
        u = function(e) {
          function l(t) {
            return s.call(this, t)
          }! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                writable: !0,
                configurable: !0
              }
            }), Object.defineProperty(t, "prototype", {
              writable: !1
            }), e && i(t, e)
          }(l, e);
          var o, a, c, s = r(l);
          return o = l, (a = [{
            key: "render",
            value: function() {
              return t("div", {
                className: "refer-container"
              }, t("div", {
                className: "content-container"
              }, t(p.a, {
                userLocalData: this.props.userLocalData,
                logToAmplitude: this.props.logToAmplitude
              })))
            }
          }]) && n(o.prototype, a), c && n(o, c), Object.defineProperty(o, "prototype", {
            writable: !1
          }), l
        }(s.Component)
    }).call(this, l("2mXy").h)
  },
  Ttxi: function() {},
  UrXQ: function() {},
  V6Lh: function(t, e, l) {
    "use strict";

    function o(t) {
      return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
      } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
      }, o(t)
    }

    function n(t, e) {
      for (var l = 0; l < e.length; l++) {
        var o = e[l];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
      }
    }

    function i(t, e) {
      return i = Object.setPrototypeOf || function(t, e) {
        return t.__proto__ = e, t
      }, i(t, e)
    }

    function r(t) {
      var e = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" == typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
        } catch (t) {
          return !1
        }
      }();
      return function() {
        var l, o = s(t);
        if (e) {
          var n = s(this).constructor;
          l = Reflect.construct(o, arguments, n)
        } else l = o.apply(this, arguments);
        return a(this, l)
      }
    }

    function a(t, e) {
      if (e && ("object" === o(e) || "function" == typeof e)) return e;
      if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
      return c(t)
    }

    function c(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t
    }

    function s(t) {
      return s = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t)
      }, s(t)
    }
    l.d(e, "a", (function() {
      return p
    }));
    var p = function(t) {
      function e(t) {
        var e;
        return e = p.call(this, t), t.close ? (e.setWrapperRef = e.setWrapperRef.bind(c(e)), e) : a(e, new Error("close function must be included in props"))
      }! function(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(t, "prototype", {
          writable: !1
        }), e && i(t, e)
      }(e, t);
      var l, o, s, p = r(e);
      return l = e, (o = [{
        key: "setWrapperRef",
        value: function(t) {
          this.wrapperRef = t
        }
      }, {
        key: "componentWillUnmount",
        value: function() {
          this._unbindEvents()
        }
      }, {
        key: "componentDidMount",
        value: function() {
          this._bindEvents()
        }
      }, {
        key: "_unbindEvents",
        value: function() {
          document.removeEventListener("mousedown", this._handleClickOutside.bind(this))
        }
      }, {
        key: "_bindEvents",
        value: function() {
          document.addEventListener("mousedown", this._handleClickOutside.bind(this))
        }
      }, {
        key: "_handleClickOutside",
        value: function(t) {
          this.wrapperRef && !this.wrapperRef.contains(t.target) && this.props.close()
        }
      }]) && n(l.prototype, o), s && n(l, s), Object.defineProperty(l, "prototype", {
        writable: !1
      }), e
    }(l("2mXy").Component)
  },
  VBnW: function(t, e, l) {
    "use strict";
    (function(t) {
      function o(t) {
        return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, o(t)
      }

      function n(t, e) {
        for (var l = 0; l < e.length; l++) {
          var o = e[l];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
      }

      function i(t, e) {
        return i = Object.setPrototypeOf || function(t, e) {
          return t.__proto__ = e, t
        }, i(t, e)
      }

      function r(t) {
        var e = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (t) {
            return !1
          }
        }();
        return function() {
          var l, o = c(t);
          if (e) {
            var n = c(this).constructor;
            l = Reflect.construct(o, arguments, n)
          } else l = o.apply(this, arguments);
          return a(this, l)
        }
      }

      function a(t, e) {
        if (e && ("object" === o(e) || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        return function(t) {
          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t
        }(t)
      }

      function c(t) {
        return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }, c(t)
      }
      l.d(e, "a", (function() {
        return p
      }));
      var s = l("2mXy"),
        p = (l("Q9r8"), l("EDtS"), function(e) {
          function l(t) {
            return s.call(this, t)
          }! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                writable: !0,
                configurable: !0
              }
            }), Object.defineProperty(t, "prototype", {
              writable: !1
            }), e && i(t, e)
          }(l, e);
          var o, a, c, s = r(l);
          return o = l, (a = [{
            key: "componentDidMount",
            value: function() {
              var t = this;
              this.props.data.autoClose && setTimeout((function() {
                t.props.onCloseNotification()
              }), this.props.data.timer || 4e3)
            }
          }, {
            key: "getJSX",
            value: function() {
              var e = this.props.data.actionType,
                l = this.props.data.children,
                o = this.props.data.showType,
                n = this.props.data.classToAdd || "",
                i = Utility.isExtension(),
                r = "";
              if (i) switch (o) {
                case "success":
                  r = "images/success.png";
                  break;
                case "error":
                  r = "images/skull.png";
                  break;
                case "warning":
                  r = "images/ghost.png";
                  break;
                case "info":
                  r = "images/bird.png"
              }
              switch (e) {
                case COMMONCONSTANTS.NOTIFICATION_WITH_CROSS:
                  return t("div", {
                    className: "notification-container ".concat(o, " ").concat(n)
                  }, t("div", {
                    className: "inner-container"
                  }, t("div", {
                    className: "left-container"
                  }, t("span", {
                    className: "icon-container"
                  }, t("span", {
                    className: "image",
                    style: i && {
                      backgroundImage: "url(".concat(r, ")")
                    }
                  }))), t("div", {
                    className: "right-container"
                  }, t("div", {
                    className: "close-container",
                    onClick: this.props.onCloseNotification
                  }, t("span", {
                    className: "lnr lnr-cross-circle"
                  })), t("div", {
                    className: "children-container"
                  }, l))));
                case COMMONCONSTANTS.ANNOUNCEMENT_WITH_CROSS:
                  return t("div", {
                    className: "announcement"
                  }, t("div", {
                    className: "inner-container"
                  }, t("div", {
                    className: "close-container",
                    onClick: this.props.onCloseNotification
                  }, t("span", {
                    className: "lnr lnr-cross-circle"
                  })), t("div", {
                    className: "heading"
                  }, t("span", {
                    className: "text"
                  }, "Annoucement")), t("div", {
                    className: "main-container"
                  }, t("div", {
                    className: "children-container"
                  }, l), t("div", {
                    className: "bg-image-container"
                  }, t("span", {
                    className: "image",
                    style: i && {
                      backgroundImage: "url(images/bell.png)"
                    }
                  })))));
                case COMMONCONSTANTS.BLOCKED_LOADING:
                  return t("div", {
                    className: "blocked-loader-container"
                  }, t("div", {
                    className: "loader"
                  }, t("svg", {
                    width: "90",
                    height: "90",
                    viewBox: "0 0 90 90",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "svg"
                  }, t("g", null, t("circle", {
                    cx: "45",
                    cy: "45",
                    r: "12",
                    class: "circle circle--hidden circle--1"
                  }), t("circle", {
                    cx: "45",
                    cy: "45",
                    r: "12",
                    class: "circle circle--hidden circle--2"
                  }), t("circle", {
                    cx: "45",
                    cy: "45",
                    r: "16",
                    class: "circle circle--3"
                  })))), t("div", {
                    className: "text-container"
                  }, l));
                case COMMONCONSTANTS.ASK_FOR_CONSENT:
                  var a = this.props.data,
                    c = a.question,
                    s = a.smallText || null,
                    p = a.agreeText || null,
                    u = a.disagreeText || null;
                  return t("div", {
                    className: "ask-consent-container"
                  }, t("div", {
                    className: "inner-container"
                  }, t("div", {
                    className: "image-container"
                  }, t("div", {
                    className: "image",
                    style: i ? {
                      backgroundImage: "url(images/emojiTheme/nerd.png)"
                    } : null
                  })), t("div", {
                    className: "question-container"
                  }, c), s && t("div", {
                    className: "small-text"
                  }, s), t("div", {
                    className: "buttons-container"
                  }, u && t("span", {
                    className: "button button-no",
                    onClick: a.onDisagree
                  }, t("span", {
                    className: "disagree-text"
                  }, u)), p && t("span", {
                    className: "button button-yes",
                    onClick: a.onAgree
                  }, t("span", {
                    className: "agree-text"
                  }, p)))));
                case COMMONCONSTANTS.FULL_CLOSABLE_NOTIFICATION:
                  return t("div", {
                    className: "blocked-loader-container ".concat(this.props.data.classToAdd || "")
                  }, t("div", {
                    className: "close-container",
                    onClick: this.props.onCloseNotification
                  }, t("span", {
                    className: "lnr lnr-cross-circle"
                  })), t("div", {
                    className: "text-container"
                  }, l))
              }
            }
          }, {
            key: "render",
            value: function() {
              return this.getJSX()
            }
          }]) && n(o.prototype, a), c && n(o, c), Object.defineProperty(o, "prototype", {
            writable: !1
          }), l
        }(s.Component))
    }).call(this, l("2mXy").h)
  },
  VEWY: function(t, e, l) {
    "use strict";
    (function(t) {
      function o(t) {
        return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, o(t)
      }

      function n() {
        return n = Object.assign || function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var l = arguments[e];
            for (var o in l) Object.prototype.hasOwnProperty.call(l, o) && (t[o] = l[o])
          }
          return t
        }, n.apply(this, arguments)
      }

      function i(t, e) {
        for (var l = 0; l < e.length; l++) {
          var o = e[l];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
      }

      function r(t, e) {
        return r = Object.setPrototypeOf || function(t, e) {
          return t.__proto__ = e, t
        }, r(t, e)
      }

      function a(t) {
        var e = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (t) {
            return !1
          }
        }();
        return function() {
          var l, o = s(t);
          if (e) {
            var n = s(this).constructor;
            l = Reflect.construct(o, arguments, n)
          } else l = o.apply(this, arguments);
          return c(this, l)
        }
      }

      function c(t, e) {
        if (e && ("object" === o(e) || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        return function(t) {
          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t
        }(t)
      }

      function s(t) {
        return s = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }, s(t)
      }
      l.d(e, "a", (function() {
        return h
      }));
      var p = l("2mXy"),
        u = l("z5ZF"),
        f = (l("N14G"), l("JxFh"), l("1s1d")),
        h = (l("+XzI"), function(e) {
          function l(t) {
            var e;
            return (e = p.call(this, t)).state = {
              mounted: !1,
              noteMenuOpen: !1
            }, e
          }! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                writable: !0,
                configurable: !0
              }
            }), Object.defineProperty(t, "prototype", {
              writable: !1
            }), e && r(t, e)
          }(l, e);
          var o, c, s, p = a(l);
          return o = l, (c = [{
            key: "setEditorRef",
            value: function(t) {
              this.editorRef = t
            }
          }, {
            key: "componentWillUnmount",
            value: function() {}
          }, {
            key: "onTextChange",
            value: function(t) {
              Utility.recordTypingTime(), this.throttledFn(t, this.props.note)
            }
          }, {
            key: "componentDidMount",
            value: function() {
              this.throttledFn = Utility.throttle((function(t, e) {
                var l = n({}, e);
                l.delta = t, MessagePassing.send({
                  key: COMMONCONSTANTS.SAVE_NOTE,
                  value: l
                })
              }), 1e3), this.setState({
                mounted: !0
              })
            }
          }, {
            key: "checkForAutoOpen",
            value: function() {
              var t = window.localStorage;
              t[COMMONCONSTANTS.POPUP_OPEN_COUNT] && parseInt(t[COMMONCONSTANTS.POPUP_OPEN_COUNT]) >= 10 && (t[COMMONCONSTANTS.AUTONOTE_FEATURES_SHOW] || (this.setState({
                noteMenuOpen: !0
              }), t[COMMONCONSTANTS.AUTONOTE_FEATURES_SHOW] = 1))
            }
          }, {
            key: "onClickMenu",
            value: function() {
              this.state.noteMenuOpen || (this.props.logToAmplitude(COMMONCONSTANTS.NOTE_MENU_OPEN), TRACK({
                category: COMMONCONSTANTS.NOTES,
                action: COMMONCONSTANTS.NOTE_MENU_OPEN
              })), this.setState({
                noteMenuOpen: !this.state.noteMenuOpen
              })
            }
          }, {
            key: "getCrossJSX",
            value: function() {
              return t("div", {
                className: "cross"
              }, t("span", {
                className: "icon lnr lnr-cross"
              }))
            }
          }, {
            key: "onClickDownloadNote",
            value: function() {
              var t = this,
                e = "";
              this.props.folderData.value.forEach((function(l) {
                l.id == t.props.folderData.activeId && (e = l.value)
              })), Utility.isExtension() && chrome.tabs.create({
                url: chrome.runtime.getURL("download.html?noteId=" + this.props.note.id + "&folderName=" + e + "&action=download")
              }), this.props.logToAmplitude(COMMONCONSTANTS.DOWNLOAD_NOTE_CLICK), TRACK({
                category: COMMONCONSTANTS.NOTES,
                action: COMMONCONSTANTS.DOWNLOAD_NOTE_CLICK,
                label: this.props.note.delta.ops.length
              })
            }
          }, {
            key: "onClickPrint",
            value: function() {
              var t = this,
                e = "";
              this.props.folderData.value.forEach((function(l) {
                l.id == t.props.folderData.activeId && (e = l.value)
              })), Utility.isExtension() && chrome.tabs.create({
                url: chrome.runtime.getURL("download.html?noteId=" + this.props.note.id + "&folderName=" + e + "&action=print")
              }), this.props.logToAmplitude(COMMONCONSTANTS.PRINT_NOTE_CLICK), TRACK({
                category: COMMONCONSTANTS.NOTES,
                action: COMMONCONSTANTS.PRINT_NOTE_CLICK,
                label: this.props.note.delta.ops.length
              })
            }
          }, {
            key: "onClickClearNote",
            value: function() {
              var t = this;
              this.props.setParentState({
                notification: {
                  actionType: COMMONCONSTANTS.ASK_FOR_CONSENT,
                  question: "This note data will be cleared?",
                  agreeText: "Clear",
                  disagreeText: "Cancel",
                  onAgree: function() {
                    t.editorRef.clearNote(), t.props.setParentState({
                      notification: null
                    })
                  },
                  onDisagree: function() {
                    t.props.setParentState({
                      notification: null
                    })
                  }
                }
              }), this.props.logToAmplitude(COMMONCONSTANTS.CLEAR_NOTE_CLICK), TRACK({
                category: COMMONCONSTANTS.NOTES,
                action: COMMONCONSTANTS.CLEAR_NOTE_CLICK,
                label: this.props.note.id
              })
            }
          }, {
            key: "onClickHideNote",
            value: function(e) {
              var l = this,
                o = n({}, this.props.folderData);
              o.value.forEach((function(t) {
                if (t.id == l.props.folderData.activeId) {
                  t.show[e] = 0;
                  for (var o = 0, n = 0; n < t.show.length; ++n)
                    if (t.show[n]) {
                      o = n;
                      break
                    } t.noteIndexOnSmall = o
                }
              })), MessagePassing.send({
                key: COMMONCONSTANTS.SAVE_VALUES,
                value: o
              }), this.props.logToAmplitude(COMMONCONSTANTS.HIDE_NOTE_CLICK), TRACK({
                category: COMMONCONSTANTS.NOTES,
                action: COMMONCONSTANTS.HIDE_NOTE_CLICK,
                label: this.props.note.id
              }), this.props.setParentState({
                notification: {
                  actionType: COMMONCONSTANTS.NOTIFICATION_WITH_CROSS,
                  showType: "info",
                  classToAdd: "folder-helper",
                  autoClose: !0,
                  timer: 8e3,
                  children: t("span", {
                    className: "text"
                  }, "Note is now hidden. ", t("br", null), "You can ", t("u", null, "unhide the note"), " by clicking on above folder name.")
                }
              })
            }
          }, {
            key: "onFocusIn",
            value: function(t) {
              this.props.onFocusIn(t)
            }
          }, {
            key: "getLoaderJSX",
            value: function() {
              return null
            }
          }, {
            key: "render",
            value: function() {
              var e = this;
              this.visibleNotes = [], this.props.folderData && (this.folder = this.props.folderData.value.filter((function(t) {
                return t.id == e.props.folderData.activeId
              }))[0], this.visibleNotes = this.folder.show.filter((function(t) {
                return t
              }))), this.getLoaderJSX();
              var l = "note";
              return this.props.focusNoteId == this.props.note.id && (l += " focus"), this.props.activeWhenSmall && (l += " active-on-small"), t("div", {
                className: l
              }, t("div", {
                className: "note-inner-wrapper"
              }, this.state.mounted && t(f.a, {
                currentFolderId: this.props.currentFolderId,
                ref: this.setEditorRef.bind(this),
                settings: this.props.settings,
                onFocusIn: this.onFocusIn.bind(this),
                setParentState: this.props.setParentState,
                userLocalData: this.props.userLocalData,
                logToAmplitude: this.props.logToAmplitude,
                key: this.props.note.id,
                delta: this.props.note.delta,
                onTextChange: this.onTextChange.bind(this),
                id: this.props.note.id
              }), t("div", {
                className: "note-download-container"
              }, t("span", {
                className: "menu-button",
                onClick: this.onClickMenu.bind(this)
              }, t("span", {
                className: "circle"
              }, !this.state.noteMenuOpen && t("span", {
                className: "arrow-down"
              }), this.state.noteMenuOpen && this.getCrossJSX())), this.state.noteMenuOpen && t(u.a, {
                onClickPrint: this.onClickPrint.bind(this),
                onClickClearNote: this.onClickClearNote.bind(this),
                showHideButton: this.visibleNotes.length > 1,
                onClickHideNote: this.onClickHideNote.bind(this, this.props.index),
                logToAmplitude: this.props.logToAmplitude,
                onClickDownloadNote: this.onClickDownloadNote.bind(this),
                close: function() {
                  e.setState({
                    noteMenuOpen: !1
                  })
                },
                setParentState: this.props.setParentState,
                note: this.props.note
              }))))
            }
          }]) && i(o.prototype, c), s && i(o, s), Object.defineProperty(o, "prototype", {
            writable: !1
          }), l
        }(p.Component))
    }).call(this, l("2mXy").h)
  },
  Vk77: function(t, e, l) {
    "use strict";
    (function(t) {
      function o(t) {
        return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, o(t)
      }

      function n(t, e) {
        for (var l = 0; l < e.length; l++) {
          var o = e[l];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
      }

      function i(t, e) {
        return i = Object.setPrototypeOf || function(t, e) {
          return t.__proto__ = e, t
        }, i(t, e)
      }

      function r(t) {
        var e = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (t) {
            return !1
          }
        }();
        return function() {
          var l, o = c(t);
          if (e) {
            var n = c(this).constructor;
            l = Reflect.construct(o, arguments, n)
          } else l = o.apply(this, arguments);
          return a(this, l)
        }
      }

      function a(t, e) {
        if (e && ("object" === o(e) || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        return function(t) {
          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t
        }(t)
      }

      function c(t) {
        return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }, c(t)
      }
      l.d(e, "a", (function() {
        return s
      }));
      var s = function(e) {
        function l(t) {
          return s.call(this, t)
        }! function(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(t, "prototype", {
            writable: !1
          }), e && i(t, e)
        }(l, e);
        var o, a, c, s = r(l);
        return o = l, (a = [{
          key: "onClickButton",
          value: function() {
            var t = this.props.source || "";
            this.props.logToAmplitude(COMMONCONSTANTS.LICENSE_BUY_BUTTON_CLICK, {
              license_buy_button_click_source: t
            }), TRACK({
              category: COMMONCONSTANTS.LICENSE_BUY,
              action: COMMONCONSTANTS.LICENSE_BUY_BUTTON_CLICK,
              label: t
            })
          }
        }, {
          key: "render",
          value: function() {
            return Utility.getPriceObject(), t("div", {
              className: "price-container"
            }, t("a", {
              className: "button",
              target: "_blank",
              href: COMMONCONSTANTS.PAYMENT_URL,
              onClick: this.onClickButton.bind(this)
            }, "Upgrade Now"))
          }
        }]) && n(o.prototype, a), c && n(o, c), Object.defineProperty(o, "prototype", {
          writable: !1
        }), l
      }(l("2mXy").Component)
    }).call(this, l("2mXy").h)
  },
  Xfpc: function(t, e, l) {
    "use strict";
    (function(t) {
      function o(t) {
        return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, o(t)
      }

      function n() {
        return n = Object.assign || function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var l = arguments[e];
            for (var o in l) Object.prototype.hasOwnProperty.call(l, o) && (t[o] = l[o])
          }
          return t
        }, n.apply(this, arguments)
      }

      function i(t, e) {
        for (var l = 0; l < e.length; l++) {
          var o = e[l];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
      }

      function r(t, e, l) {
        return e && i(t.prototype, e), l && i(t, l), Object.defineProperty(t, "prototype", {
          writable: !1
        }), t
      }

      function a(t, e) {
        return a = Object.setPrototypeOf || function(t, e) {
          return t.__proto__ = e, t
        }, a(t, e)
      }

      function c(t) {
        var e = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (t) {
            return !1
          }
        }();
        return function() {
          var l, o = u(t);
          if (e) {
            var n = u(this).constructor;
            l = Reflect.construct(o, arguments, n)
          } else l = o.apply(this, arguments);
          return s(this, l)
        }
      }

      function s(t, e) {
        if (e && ("object" === o(e) || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        return p(t)
      }

      function p(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }

      function u(t) {
        return u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }, u(t)
      }
      l.d(e, "a", (function() {
        return h
      }));
      var f = l("2mXy"),
        h = (l("XkcL"), l("S9Wk"), function(e) {
          function l(t) {
            var e;
            return (e = o.call(this, t)).state = {
              gameMode: 0,
              score: 0,
              gameOver: 0,
              gameHighScore: 0
            }, e.callExplode = e.callExplode.bind(p(e)), e.gameOver = e.gameOver.bind(p(e)), e
          }! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                writable: !0,
                configurable: !0
              }
            }), Object.defineProperty(t, "prototype", {
              writable: !1
            }), e && a(t, e)
          }(l, e);
          var o = c(l);
          return r(l, [{
            key: "onClickButton",
            value: function() {
              var t = this;
              this.setState({
                gameMode: !this.state.gameMode
              }, (function() {
                t.resetGameState(), t.state.gameMode || t.gameOver(), t.state.gameOver && t.setState({
                  gameOver: 0
                })
              }))
            }
          }, {
            key: "componentDidMount",
            value: function() {
              this.scare(), this.addGhost()
            }
          }, {
            key: "checkAndSetHighScore",
            value: function(t) {
              t > this.state.gameHighScore && (window.localStorage[COMMONCONSTANTS.THEME_CORONA_HIGHSCORE] = t)
            }
          }, {
            key: "callExplode",
            value: function() {
              var t = this,
                e = this,
                l = "";
              window.localStorage[COMMONCONSTANTS.THEME_CORONA_HIGHSCORE] && (l = " Lifetime Highscore: " + this.state.gameHighScore), this.setState({
                score: this.state.score + 10
              }, (function() {
                return e.props.notesAlternateAreaDataChange("Game : Kill CoronaVirus  People Recovered: " + t.state.score + l)
              }))
            }
          }, {
            key: "gameOver",
            value: function() {
              var t = this;
              this.setState({
                gameOver: 1
              }, (function() {
                t.props.notesAlternateAreaDataChange("Game Over. Total People Recovered " + t.state.score), t.props.applyInteractionToBody("notesShow"), t.checkAndSetHighScore(t.state.score)
              }))
            }
          }, {
            key: "resetGameState",
            value: function() {
              this.state.gameMode ? (this.props.applyInteractionToBody("notesHide"), this.runGame(this.props.obj.width, this.props.obj.height)) : (this.props.applyInteractionToBody("notesShow"), this.run(this.props.obj.width, this.props.obj.height))
            }
          }, {
            key: "scare",
            value: function(t, e) {
              var l = {
                  w: t,
                  h: e
                },
                o = document.getElementById("horror-canvas");
              document.getElementById("horror-canvas"), o.width = l.w, o.height = l.h;
              o.getContext("2d");
              var n = document.getElementById("horror-canvas"),
                i = n.width = window.innerWidth,
                r = n.height = window.innerHeight,
                a = new function(t, e, l) {
                  this.init = function() {
                    this.loop()
                  };
                  var o = this;
                  this.c = t, this.ctx = t.getContext("2d"), this.cw = e, this.ch = l, this.mx = 0, this.my = 0, this.lightning = [], this.lightTimeCurrent = 0, this.lightTimeTotal = 50, this.rand = function(t, e) {
                    return ~~(Math.random() * (e - t + 1) + t)
                  }, this.hitTest = function(t, e, l, o, n, i, r, a) {
                    return !(t + l < n || n + r < t || e + o < i || i + a < e)
                  }, this.createL = function(t, e, l) {
                    this.lightning.push({
                      x: t,
                      y: e,
                      xRange: this.rand(5, 30),
                      yRange: this.rand(5, 25),
                      path: [{
                        x: t,
                        y: e
                      }],
                      pathLimit: this.rand(10, 35),
                      canSpawn: l,
                      hasFired: !1
                    })
                  }, this.updateL = function() {
                    for (var t = this.lightning.length; t--;) {
                      var e = this.lightning[t];
                      e.path.push({
                        x: e.path[e.path.length - 1].x + (this.rand(0, e.xRange) - e.xRange / 2),
                        y: e.path[e.path.length - 1].y + this.rand(0, e.yRange)
                      }), e.path.length > e.pathLimit && this.lightning.splice(t, 1), e.hasFired = !0
                    }
                  }, this.renderL = function() {
                    for (var t = this.lightning.length; t--;) {
                      var e = this.lightning[t];
                      this.ctx.strokeStyle = "hsla(0, 100%, 100%, " + this.rand(10, 100) / 100 + ")", this.ctx.lineWidth = 1, 0 == this.rand(0, 30) && (this.ctx.lineWidth = 2), 0 == this.rand(0, 60) && (this.ctx.lineWidth = 3), 0 == this.rand(0, 90) && (this.ctx.lineWidth = 4), 0 == this.rand(0, 120) && (this.ctx.lineWidth = 5), 0 == this.rand(0, 150) && (this.ctx.lineWidth = 6), this.ctx.beginPath();
                      var l = e.path.length;
                      this.ctx.moveTo(e.x, e.y);
                      for (var o = 0; o < l; o++) this.ctx.lineTo(e.path[o].x, e.path[o].y), e.canSpawn && 0 == this.rand(0, 100) && (e.canSpawn = !1, this.createL(e.path[o].x, e.path[o].y, !1));
                      e.hasFired || (this.ctx.fillStyle = "rgba(255, 255, 255, " + this.rand(2, 6) / 100 + ")", this.ctx.fillRect(0, 0, this.cw, this.ch)), 0 == this.rand(0, 30) && (this.ctx.fillStyle = "rgba(255, 255, 255, " + this.rand(1, 2) / 100 + ")", this.ctx.fillRect(0, 0, this.cw, this.ch)), this.ctx.stroke()
                    }
                  }, this.lightningTimer = function() {
                    if (this.lightTimeCurrent++, this.lightTimeCurrent >= this.lightTimeTotal) {
                      for (var t = this.rand(100, e - 100), o = this.rand(0, l / 2), n = this.rand(1, 3); n--;) this.createL(t, o, !0);
                      this.lightTimeCurrent = 0, this.lightTimeTotal = this.rand(30, 100)
                    }
                  }, this.clearCanvas = function() {
                    this.ctx.globalCompositeOperation = "destination-out", this.ctx.fillStyle = "rgba(0,0,0," + this.rand(1, 30) / 100 + ")", this.ctx.fillRect(0, 0, this.cw, this.ch), this.ctx.globalCompositeOperation = "source-over"
                  }, this.loop = function() {
                    ! function t() {
                      requestAnimationFrame(t, o.c), o.clearCanvas(), o.updateL(), o.lightningTimer(), o.renderL()
                    }()
                  }
                }(n, i, r);
              ! function() {
                for (var t = 0, e = ["ms", "moz", "webkit", "o"], l = 0; l < e.length && !window.requestAnimationFrame; ++l) window.requestAnimationFrame = window[e[l] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[l] + "CancelAnimationFrame"] || window[e[l] + "CancelRequestAnimationFrame"];
                window.requestAnimationFrame || (window.requestAnimationFrame = function(e) {
                  var l = (new Date).getTime(),
                    o = Math.max(0, 16 - (l - t)),
                    n = window.setTimeout((function() {
                      e(l + o)
                    }), o);
                  return t = l + o, n
                }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function(t) {
                  clearTimeout(t)
                })
              }(), a.init()
            }
          }, {
            key: "addGhost",
            value: function() {
              function t(t, e, l, o, n) {
                return (t - e) * (n - o) / (l - e) + o
              }
              var e = {
                  x: window.innerWidth / 2,
                  y: window.innerHeight / 2,
                  dir: ""
                },
                l = !1,
                o = function t(l) {
                  e = {
                    x: l.clientX || l.pageX || l.touches[0].pageX || window.innerWidth / 2,
                    y: l.clientY || l.pageX || l.touches[0].pageY || window.innerHeight / 2,
                    dir: t.x > l.clientX ? "left" : "right"
                  }
                };
              ["mousemove", "touchstart", "touchmove"].forEach((function(t) {
                window.addEventListener(t, o)
              })), window.addEventListener("mousedown", (function() {
                l = !0
              })), window.addEventListener("mouseup", (function() {
                l = !1
              }));
              var i = new(function() {
                function o(t) {
                  n(this, t), this.el = document.querySelector("#ghost"), this.mouth = document.querySelector(".ghost__mouth"), this.eyes = document.querySelector(".ghost__eyes"), this.pos = {
                    x: 0,
                    y: 0
                  }
                }
                return r(o, [{
                  key: "follow",
                  value: function() {
                    this.distX = e.x - this.pos.x, this.distY = e.y - this.pos.y, this.velX = this.distX / 8, this.velY = this.distY / 8, this.pos.x += this.distX / 10, this.pos.y += this.distY / 10, this.skewX = t(this.velX, 0, 100, 0, -50), this.scaleY = t(this.velY, 0, 100, 1, 2), this.scaleEyeX = t(Math.abs(this.velX), 0, 100, 1, 1.2), this.scaleEyeY = t(Math.abs(2 * this.velX), 0, 100, 1, .1), this.scaleMouth = Math.min(Math.max(t(Math.abs(1.5 * this.velX), 0, 100, 0, 10), t(Math.abs(1.2 * this.velY), 0, 100, 0, 5)), 2), l && (this.scaleEyeY = .4, this.scaleMouth = -this.scaleMouth), this.el.style.transform = "translate(" + this.pos.x + "px, " + this.pos.y + "px) scale(.7) skew(" + this.skewX + "deg) rotate(" + -this.skewX + "deg) scaleY(" + this.scaleY + ")", this.eyes.style.transform = "translateX(-50%) scale(" + this.scaleEyeX + "," + this.scaleEyeY + ")", this.mouth.style.transform = "translate(" + (.5 * -this.skewX - 10) + "px) scale(" + this.scaleMouth + ")"
                  }
                }]), o
              }());
              ! function t() {
                requestAnimationFrame(t), i.follow()
              }()
            }
          }, {
            key: "render",
            value: function() {
              return t("div", null, t("div", null, t("div", {
                className: "horror-theme-container"
              }, t("div", {
                id: "ghost",
                className: "ghost"
              }, t("div", {
                className: "ghost__head"
              }, t("div", {
                className: "ghost__eyes"
              }), t("div", {
                className: "ghost__mouth"
              })), t("div", {
                className: "ghost__tail"
              }, t("div", {
                className: "ghost__rip"
              }))), t("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                version: "1.1"
              }, t("defs", null, t("filter", {
                id: "goo"
              }, t("feGaussianBlur", {
                in: "SourceGraphic",
                stdDeviation: "10",
                result: "ghost-blur"
              }), t("feColorMatrix", {
                in: "ghost-blur",
                mode: "matrix",
                values: " 1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 16 -7",
                result: "ghost-gooey"
              })))), t("canvas", {
                id: "horror-canvas",
                style: {
                  width: this.props.obj.width,
                  height: this.props.obj.height
                }
              }))))
            }
          }]), l
        }(f.Component))
    }).call(this, l("2mXy").h)
  },
  XkcL: function(t, e, l) {
    "use strict";
    (function(t) {
      function o(t) {
        return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, o(t)
      }

      function n() {
        return n = Object.assign || function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var l = arguments[e];
            for (var o in l) Object.prototype.hasOwnProperty.call(l, o) && (t[o] = l[o])
          }
          return t
        }, n.apply(this, arguments)
      }

      function i(t, e) {
        for (var l = 0; l < e.length; l++) {
          var o = e[l];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
      }

      function r(t, e) {
        return r = Object.setPrototypeOf || function(t, e) {
          return t.__proto__ = e, t
        }, r(t, e)
      }

      function a(t) {
        var e = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (t) {
            return !1
          }
        }();
        return function() {
          var l, o = s(t);
          if (e) {
            var n = s(this).constructor;
            l = Reflect.construct(o, arguments, n)
          } else l = o.apply(this, arguments);
          return c(this, l)
        }
      }

      function c(t, e) {
        if (e && ("object" === o(e) || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        return function(t) {
          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t
        }(t)
      }

      function s(t) {
        return s = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }, s(t)
      }
      l.d(e, "a", (function() {
        return f
      }));
      var p = l("2mXy"),
        u = (l("DFMV"), l("VEWY")),
        f = function(e) {
          function l(t) {
            var e;
            return (e = p.call(this, t)).state = {
              showOverlayFolderId: ""
            }, e
          }! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                writable: !0,
                configurable: !0
              }
            }), Object.defineProperty(t, "prototype", {
              writable: !1
            }), e && r(t, e)
          }(l, e);
          var o, c, s, p = a(l);
          return o = l, (c = [{
            key: "checkForOverlay",
            value: function() {
              var t = window.localStorage[COMMONCONSTANTS.SHOW_RESTORE_HELPER_OVERLAY_FOLDER_ID];
              t && t.length > 0 && this.setState({
                showOverlayFolderId: t
              })
            }
          }, {
            key: "componentDidMount",
            value: function() {
              this.checkForOverlay()
            }
          }, {
            key: "onClickCloseOverlay",
            value: function() {
              window.localStorage[COMMONCONSTANTS.SHOW_RESTORE_HELPER_OVERLAY_FOLDER_ID] = "", this.setState({
                showOverlayFolderId: ""
              })
            }
          }, {
            key: "getNotesJSX",
            value: function() {
              var e = this;
              return this.props.notesArray.map((function(l, o) {
                if (e.currentFolder.show[o]) {
                  var n = !1;
                  return e.currentFolder.noteIndexOnSmall == o && (n = !0), t(u.a, {
                    currentFolderId: e.currentFolderId,
                    index: o,
                    folderData: e.props.folderData,
                    key: e.currentFolderId + "-" + l.id,
                    settings: e.props.settings,
                    logToAmplitude: e.props.logToAmplitude,
                    focusNoteId: e.props.focusNoteId,
                    onFocusIn: e.props.onFocusNote.bind(e, l.id),
                    userLocalData: e.props.userLocalData,
                    setParentState: e.props.setParentState,
                    activeWhenSmall: n,
                    note: l
                  })
                }
                return null
              }))
            }
          }, {
            key: "onClickNoteTab",
            value: function(t) {
              var e = this,
                l = n({}, this.props.folderData);
              l.value.forEach((function(l) {
                l.id == e.currentFolderId && (l.noteIndexOnSmall = t)
              })), this.props.logToAmplitude(COMMONCONSTANTS.SMALL_NOTE_TAB_CLICK, {
                current_folder_id: this.currentFolderId,
                noteIndexOnSmall: t
              }), TRACK({
                category: COMMONCONSTANTS.NOTES,
                action: COMMONCONSTANTS.SMALL_NOTE_TAB_CLICK,
                label: this.currentFolderId,
                value: t
              }), MessagePassing.send({
                key: COMMONCONSTANTS.SAVE_VALUES,
                value: l
              })
            }
          }, {
            key: "getNoteTabJSX",
            value: function() {
              var e = this,
                l = [];
              return this.currentFolder.show.map((function(o, n) {
                o && l.push(t("span", {
                  onClick: e.onClickNoteTab.bind(e, n),
                  className: "note-tab ".concat(e.currentFolder.noteIndexOnSmall == n ? "active-on-small" : "")
                }, "Note " + (n + 1)))
              })), t("div", {
                className: "notes-tab-container"
              }, l)
            }
          }, {
            key: "render",
            value: function() {
              var e = this;
              this.currentFolderId = this.props.folderData.activeId, this.currentFolder = this.props.folderData.value.filter((function(t) {
                return t.id == e.currentFolderId
              }))[0];
              var l = null;
              return "small" == Utility.getNotesSizeId(this.props.settings) && (l = this.getNoteTabJSX()), t("div", {
                className: "notes-wrapper-container"
              }, t("div", {
                className: "notes-container c-".concat(this.currentFolderId, " ").concat(this.props.notesOverlay ? "overlay" : "")
              }, this.getNotesJSX()), l, this.state.showOverlayFolderId == this.currentFolderId && t("div", {
                className: "overlay-container"
              }, t("div", {
                className: "inner-container"
              }, t("div", {
                className: "text-container"
              }, "We have restored your old account data, there were some differences between this device data and the data backed-up from last time. We have merged both the data here.", t("br", null), t("br", null), "Section ", t("span", {
                className: "highlight"
              }, "THIS Device Data "), " will have the data which was on this device already.", t("br", null), t("br", null), "Section ", t("span", {
                className: "highlight"
              }, "Restored Data "), " will have the data restored from your last time backup/computer. You may have to scroll down to see this data."), t("div", {
                className: "close-button",
                onClick: this.onClickCloseOverlay.bind(this)
              }, "Ok. I understood."))))
            }
          }]) && i(o.prototype, c), s && i(o, s), Object.defineProperty(o, "prototype", {
            writable: !1
          }), l
        }(p.Component)
    }).call(this, l("2mXy").h)
  },
  ZAQo: function() {},
  chaq: function(t, e, l) {
    "use strict";
    (function(t) {
      function o(t) {
        return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, o(t)
      }

      function n(t, e) {
        for (var l = 0; l < e.length; l++) {
          var o = e[l];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
      }

      function i(t, e) {
        return i = Object.setPrototypeOf || function(t, e) {
          return t.__proto__ = e, t
        }, i(t, e)
      }

      function r(t) {
        var e = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (t) {
            return !1
          }
        }();
        return function() {
          var l, o = c(t);
          if (e) {
            var n = c(this).constructor;
            l = Reflect.construct(o, arguments, n)
          } else l = o.apply(this, arguments);
          return a(this, l)
        }
      }

      function a(t, e) {
        if (e && ("object" === o(e) || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        return function(t) {
          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t
        }(t)
      }

      function c(t) {
        return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }, c(t)
      }
      l.d(e, "a", (function() {
        return u
      }));
      l("nWBr");
      var s = l("2mXy"),
        p = (l("hFkc"), l("i8rI")),
        u = function(e) {
          function l(t) {
            return s.call(this, t)
          }! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                writable: !0,
                configurable: !0
              }
            }), Object.defineProperty(t, "prototype", {
              writable: !1
            }), e && i(t, e)
          }(l, e);
          var o, a, c, s = r(l);
          return o = l, (a = [{
            key: "onCloseHelp",
            value: function() {
              this.props.setParentState({
                notification: null
              })
            }
          }, {
            key: "onClickShareItem",
            value: function(e) {
              var l = this;
              "facebook" == e && (this.props.logToAmplitude(COMMONCONSTANTS.MENU_FACEBOOK_CLICK), TRACK({
                category: COMMONCONSTANTS.SETTINGS,
                action: COMMONCONSTANTS.MENU_FACEBOOK_CLICK,
                label: !Utility.disablePremiumFeature(this.props.userLocalData)
              }), window.open("https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fgetstickynotes.com", "_blank")), "twitter" == e && (this.props.logToAmplitude(COMMONCONSTANTS.MENU_TWITTER_CLICK), TRACK({
                category: COMMONCONSTANTS.SETTINGS,
                action: COMMONCONSTANTS.MENU_TWITTER_CLICK,
                label: !Utility.disablePremiumFeature(this.props.userLocalData)
              }), window.open("https://twitter.com/intent/retweet?tweet_id=950923577485795328&related=twitterapi,twittermedia,twitter,support", "_blank")), "help" == e && (this.props.logToAmplitude(COMMONCONSTANTS.HELP_SECTION_CLICK), TRACK({
                category: COMMONCONSTANTS.SETTINGS,
                action: COMMONCONSTANTS.HELP_SECTION_CLICK,
                label: !Utility.disablePremiumFeature(this.props.userLocalData)
              }), window.open(COMMONCONSTANTS.HELP_URL, "_target")), "like" == e && (this.props.logToAmplitude(COMMONCONSTANTS.LOVE_SECTION_CLICK), TRACK({
                category: COMMONCONSTANTS.SETTINGS,
                action: COMMONCONSTANTS.LOVE_SECTION_CLICK,
                label: !Utility.disablePremiumFeature(this.props.userLocalData)
              }), this.props.setParentState({
                notification: {
                  classToAdd: "full-white",
                  actionType: COMMONCONSTANTS.FULL_CLOSABLE_NOTIFICATION,
                  children: t(p.a, {
                    userLocalData: this.props.userLocalData,
                    logToAmplitude: this.props.logToAmplitude
                  }),
                  onCloseNotification: function() {
                    l.props.setParentState({
                      notification: null
                    })
                  }
                }
              }))
            }
          }, {
            key: "render",
            value: function() {
              return t("div", {
                className: "outside-links"
              })
            }
          }]) && n(o.prototype, a), c && n(o, c), Object.defineProperty(o, "prototype", {
            writable: !1
          }), l
        }(s.Component)
    }).call(this, l("2mXy").h)
  },
  cr5L: function() {},
  fEOk: function() {},
  ffFS: function(t, e, l) {
    "use strict";
    (function(t) {
      function o(t) {
        return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, o(t)
      }

      function n(t, e) {
        for (var l = 0; l < e.length; l++) {
          var o = e[l];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
      }

      function i(t, e, l) {
        return e && n(t.prototype, e), l && n(t, l), Object.defineProperty(t, "prototype", {
          writable: !1
        }), t
      }

      function r() {
        return r = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, l) {
          var o = a(t, e);
          if (o) {
            var n = Object.getOwnPropertyDescriptor(o, e);
            return n.get ? n.get.call(arguments.length < 3 ? t : l) : n.value
          }
        }, r.apply(this, arguments)
      }

      function a(t, e) {
        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = h(t)););
        return t
      }

      function c(t, e) {
        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
        t.prototype = Object.create(e && e.prototype, {
          constructor: {
            value: t,
            writable: !0,
            configurable: !0
          }
        }), Object.defineProperty(t, "prototype", {
          writable: !1
        }), e && s(t, e)
      }

      function s(t, e) {
        return s = Object.setPrototypeOf || function(t, e) {
          return t.__proto__ = e, t
        }, s(t, e)
      }

      function p(t) {
        var e = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (t) {
            return !1
          }
        }();
        return function() {
          var l, o = h(t);
          if (e) {
            var n = h(this).constructor;
            l = Reflect.construct(o, arguments, n)
          } else l = o.apply(this, arguments);
          return u(this, l)
        }
      }

      function u(t, e) {
        if (e && ("object" === o(e) || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        return f(t)
      }

      function f(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }

      function h(t) {
        return h = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }, h(t)
      }
      l.d(e, "a", (function() {
        return C
      }));
      l("Etil"), l("0cdj");
      var d = l("V6Lh"),
        F = l("1Xhv"),
        y = l("chaq"),
        m = l("2mXy"),
        g = function(e) {
          function l(t) {
            var e;
            return (e = o.call(this, t)).state = {
              mounted: !1,
              backupSettingsOpen: !1,
              openInTab: !1
            }, e.setWrapperRef = e.setWrapperRef.bind(f(e)), e
          }
          c(l, e);
          var o = p(l);
          return i(l, [{
            key: "setWrapperRef",
            value: function(t) {
              this.wrapperRef = t
            }
          }, {
            key: "componentDidMount",
            value: function() {
              r(h(l.prototype), "componentDidMount", this).call(this);
              var t = this;
              setTimeout((function() {
                var e = {
                  mounted: !0
                };
                window.APP_OPEN_IN_TAB && (e.openInTab = !0), t.setState(e)
              }), 200)
            }
          }, {
            key: "componentWillUnmount",
            value: function() {
              r(h(l.prototype), "componentWillUnmount", this).call(this)
            }
          }, {
            key: "onClickAUthButton",
            value: function(t) {
              Utility.isExtension() && chrome.tabs.create({
                url: chrome.runtime.getURL("tab.html")
              }), t.length > 0 && (this.props.logToAmplitude(COMMONCONSTANTS.UPGRADE_BUTTON_CLICK), TRACK({
                category: COMMONCONSTANTS.SETTINGS,
                action: COMMONCONSTANTS.UPGRADE_BUTTON_CLICK,
                label: !Utility.disablePremiumFeature(this.props.userLocalData)
              })), 0 == t.length && (this.props.logToAmplitude(COMMONCONSTANTS.LOGIN_BUTTON_CLICK), TRACK({
                category: COMMONCONSTANTS.SETTINGS,
                action: COMMONCONSTANTS.LOGIN_BUTTON_CLICK,
                label: !Utility.disablePremiumFeature(this.props.userLocalData)
              }))
            }
          }, {
            key: "onClickLogout",
            value: function() {
              var e = this;
              this.props.setParentState({
                notification: {
                  actionType: COMMONCONSTANTS.ASK_FOR_CONSENT,
                  question: "Do you want to Logout?",
                  agreeText: "Yes",
                  disagreeText: "No",
                  onAgree: function() {
                    e.props.setParentState({
                      notification: {
                        actionType: COMMONCONSTANTS.BLOCKED_LOADING,
                        children: t("span", null, "Logging you Out ")
                      }
                    }), MessagePassing.send({
                      key: COMMONCONSTANTS.LOGOUT,
                      value: {},
                      callerInfo: {
                        from: "logout",
                        source: "user"
                      }
                    })
                  },
                  onDisagree: function() {
                    e.props.setParentState({
                      notification: null
                    })
                  }
                }
              }), this.props.logToAmplitude(COMMONCONSTANTS.LOGOUT_BUTTON_CLICK), TRACK({
                category: COMMONCONSTANTS.SETTINGS,
                action: COMMONCONSTANTS.LOGOUT_BUTTON_CLICK,
                label: !Utility.disablePremiumFeature(this.props.userLocalData)
              })
            }
          }, {
            key: "onAction",
            value: function(e) {
              this.props.logToAmplitude(COMMONCONSTANTS.CLICK_BACKUP), TRACK({
                category: COMMONCONSTANTS.SETTINGS,
                action: COMMONCONSTANTS.CLICK_BACKUP,
                label: !Utility.disablePremiumFeature(this.props.userLocalData)
              });
              var l = !1;
              if (this.props.userLocalData && this.props.userLocalData.installDate && (l = !0), !!Utility.disablePremiumFeature(this.props.userLocalData) && l) {
                Utility.getPriceObject();
                var o = {};
                e == COMMONCONSTANTS.BACKUP && (o = {
                  dontSkipAnyNote: !0
                }, this.props.setParentState({
                  notification: {
                    actionType: COMMONCONSTANTS.BLOCKED_LOADING,
                    children: t("span", null, "Backing up your data")
                  }
                })), MessagePassing.send({
                  key: e,
                  value: o
                })
              } else this.props.setParentState({
                upgradePopup: {
                  text: "Backup"
                }
              })
            }
          }, {
            key: "onClickSettings",
            value: function() {
              var t = !Utility.disablePremiumFeature(this.props.userLocalData);
              this.props.logToAmplitude(COMMONCONSTANTS.BACKUP_OPTIONS_CLICK), TRACK({
                category: COMMONCONSTANTS.SETTINGS,
                action: COMMONCONSTANTS.BACKUP_OPTIONS_CLICK,
                label: t
              });
              var e = !1;
              this.props.userLocalData && this.props.userLocalData.installDate && (e = !0), !t && e || this.props.setParentState({
                upgradePopup: {
                  text: "Backup"
                }
              }), this.setState({
                backupSettingsOpen: !0
              })
            }
          }, {
            key: "onCloseSettings",
            value: function() {
              this.setState({
                backupSettingsOpen: !1
              })
            }
          }, {
            key: "onClickNewTab",
            value: function() {
              var t = !Utility.disablePremiumFeature(this.props.userLocalData);
              this.props.logToAmplitude(COMMONCONSTANTS.OPEN_IN_TAB, {
                disablePremiumFeature: t
              }), TRACK({
                category: COMMONCONSTANTS.SETTINGS,
                action: COMMONCONSTANTS.OPEN_IN_TAB,
                label: t
              }), t ? this.props.setParentState({
                upgradePopup: {
                  text: "Open in new tab"
                }
              }) : this.props.openInNewTab()
            }
          }, {
            key: "geEmailJSX",
            value: function(e) {
              var l = 'Login to access paid features like "Backups"';
              return e.length > 0 && (l = "internet off or logged-out...", this.props.firestoreLive && (l = e)), t("div", {
                className: "email-container ".concat(e.length > 0 ? "has-email" : "")
              }, t("span", {
                className: "email"
              }, l), e.length > 0 && this.props.firestoreLive && t("span", {
                className: "logout-button lnr lnr-power-switch",
                onClick: this.onClickLogout.bind(this)
              }))
            }
          }, {
            key: "getJSXAccordingToState",
            value: function(e, l, o) {
              var n = null,
                i = "Login";
              if (e) {
                var r = "";
                o.backupTimestamp && (r = new Date(o.backupTimestamp).toDateString()), n = t("span", {
                  className: "last-backup-time"
                }, t("span", {
                  className: "label"
                }, "Last backup at"), t("span", {
                  className: "time"
                }, r))
              } else l.length > 0 && (i = "Upgrade"), n = t("span", {
                className: "button-container"
              }, t("span", {
                className: "button-wrapper"
              }, t("a", {
                className: "button enter-license",
                onClick: this.onClickAUthButton.bind(this, "email")
              }, t("span", null, i)), t("span", {
                className: "message-container"
              }, t("span", null, i, " to enable premium features"))));
              return t("span", {
                className: "state-container"
              }, n)
            }
          }, {
            key: "getAuthJSX",
            value: function() {
              var e = this.props.userLocalData,
                l = "",
                o = !1;
              return e && e.installDate && (o = !0), e.email && (l = e.email).length > 23 && (l = l.slice(0, 20), l += "..."), t("div", {
                className: "auth-container"
              }, o && t("span", {
                className: "premium-tag"
              }, "Premium"), t("div", {
                className: "inner-container"
              }, this.geEmailJSX(l), t("div", {
                className: "backup-info-container ".concat(l.length > 0 ? "has-email" : "")
              }, this.getJSXAccordingToState(o, l, e), t("span", {
                className: "small-button backup",
                onClick: this.onAction.bind(this, COMMONCONSTANTS.BACKUP)
              }, "Backup Now")), t("div", {
                className: "lower-auth-container"
              }, t("span", {
                className: "settings",
                onClick: this.onClickSettings.bind(this)
              }, t("span", {
                className: "settings-label"
              }, o ? "Automatically" : "Buy License to", " backup my data"), t("span", {
                className: "option-button"
              }, t("span", {
                className: "option-text"
              }, this.props.userLocalData.backupSettings.interval.toUpperCase()), t("span", {
                className: "lnr lnr-chevron-down"
              }))), this.state.backupSettingsOpen && t(F.a, {
                logToAmplitude: this.props.logToAmplitude,
                setParentState: this.props.setParentState,
                userLocalData: this.props.userLocalData,
                close: this.onCloseSettings.bind(this)
              }))))
            }
          }, {
            key: "render",
            value: function() {
              return t("div", {
                ref: this.setWrapperRef,
                className: "menu-container"
              }, this.state.mounted && t("div", {
                className: "div"
              }, t("div", {
                className: "arrow-up-container"
              }, t("div", {
                className: "arrow-up"
              })), t("div", {
                className: "main-container"
              }, t("div", {
                className: "top-container"
              }, this.getAuthJSX()), t("div", {
                className: "bottom-container ".concat(this.state.openInTab ? "new-tab" : "")
              }, t(y.a, {
                userLocalData: this.props.userLocalData,
                logToAmplitude: this.props.logToAmplitude,
                setParentState: this.props.setParentState
              }))), !this.state.openInTab && t("div", {
                className: "open-in-new-tab",
                onClick: this.onClickNewTab.bind(this)
              }, t("span", {
                className: "lnr lnr-arrow-up"
              }), t("span", {
                className: "box"
              }), t("span", {
                className: "text"
              }, "Pop-out in new browser tab"))))
            }
          }]), l
        }(d.a),
        C = function(e) {
          function l(t) {
            var e;
            return (e = o.call(this, t)).state = {
              menuOpen: !1
            }, e
          }
          c(l, e);
          var o = p(l);
          return i(l, [{
            key: "onClickMenu",
            value: function() {
              this.state.menuOpen ? (this.props.logToAmplitude(COMMONCONSTANTS.MENU_CLOSE_MANUALLY), TRACK({
                category: COMMONCONSTANTS.SETTINGS,
                action: COMMONCONSTANTS.MENU_CLOSE_MANUALLY,
                label: !Utility.disablePremiumFeature(this.props.userLocalData)
              })) : (this.props.logToAmplitude(COMMONCONSTANTS.SETTINGS), TRACK({
                category: COMMONCONSTANTS.FOLDER,
                action: COMMONCONSTANTS.MENU_OPEN,
                label: !Utility.disablePremiumFeature(this.props.userLocalData)
              })), this.setState({
                menuOpen: !this.state.menuOpen
              })
            }
          }, {
            key: "getCrossJSX",
            value: function() {
              return t("div", {
                className: "cross"
              }, t("span", {
                className: "lnr lnr-cross"
              }))
            }
          }, {
            key: "onCloseMenu",
            value: function() {
              this.setState({
                menuOpen: !1
              })
            }
          }, {
            key: "getBackground",
            value: function() {
              t("div", {
                className: "user-helper-message-container"
              }, t("div", {
                className: "text"
              }, " "), t("div", {
                className: "arrow-container"
              }, t("span", {
                className: "lnr lnr-arrow-up"
              })));
              var e = window.localStorage;
              if (e[COMMONCONSTANTS.SETTINGS_PROPERTY_CHANGE]) parseInt(e[COMMONCONSTANTS.SETTINGS_PROPERTY_CHANGE]);
              return null
            }
          }, {
            key: "componentDidMount",
            value: function() {
              var t = window.localStorage;
              t[COMMONCONSTANTS.POPUP_OPEN_COUNT] && parseInt(t[COMMONCONSTANTS.POPUP_OPEN_COUNT]) > 1 && (t[COMMONCONSTANTS.AUTOOPEN_SETTINGS] || (t[COMMONCONSTANTS.AUTOOPEN_SETTINGS] = 1, this.props.logToAmplitude(COMMONCONSTANTS.SETTINGS, {
                autoOpenSettings: !0
              })))
            }
          }]), l
        }(m.Component)
    }).call(this, l("2mXy").h)
  },
  ftAZ: function() {},
  g1hq: function(t, e, l) {
    "use strict";
    (function(t) {
      function o(t, e) {
        var l = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(t);
          e && (o = o.filter((function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), l.push.apply(l, o)
        }
        return l
      }

      function n(t, e, l) {
        return e in t ? Object.defineProperty(t, e, {
          value: l,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = l, t
      }

      function i(t, e) {
        return function(t) {
          if (Array.isArray(t)) return t
        }(t) || function(t, e) {
          var l = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
          if (null == l) return;
          var o, n, i = [],
            r = !0,
            a = !1;
          try {
            for (l = l.call(t); !(r = (o = l.next()).done) && (i.push(o.value), !e || i.length !== e); r = !0);
          } catch (t) {
            a = !0, n = t
          } finally {
            try {
              r || null == l.return || l.return()
            } finally {
              if (a) throw n
            }
          }
          return i
        }(t, e) || function(t, e) {
          if (!t) return;
          if ("string" == typeof t) return r(t, e);
          var l = Object.prototype.toString.call(t).slice(8, -1);
          "Object" === l && t.constructor && (l = t.constructor.name);
          if ("Map" === l || "Set" === l) return Array.from(t);
          if ("Arguments" === l || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)) return r(t, e)
        }(t, e) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }

      function r(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var l = 0, o = new Array(e); l < e; l++) o[l] = t[l];
        return o
      }

      function a(e) {
        var l = this,
          r = i(Object(c.c)(!1), 2),
          a = r[0],
          p = r[1],
          u = function() {
            l.props.logToAmplitude(COMMONCONSTANTS.FOLDER_SWITCHER_CLICK), p(!a)
          },
          f = function(t) {
            var i = e.folderData.value.filter((function(t) {
              return t.visible
            })).length;
            if (1 !== i || !t.visible) {
              var r = function(t) {
                  for (var e = 1; e < arguments.length; e++) {
                    var l = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? o(Object(l), !0).forEach((function(e) {
                      n(t, e, l[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : o(Object(l)).forEach((function(e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e))
                    }))
                  }
                  return t
                }({}, e.folderData),
                a = !Utility.disablePremiumFeature(l.props.userLocalData);
              if (t.id > 3 && a) return e.setParentState({
                upgradePopup: {
                  text: "All 10 Folders"
                }
              });
              if (r.value.forEach((function(e) {
                  e.id === t.id && (e.visible = !t.visible)
                })), r.activeId === t.id)
                for (var c = 0; c < r.value.length; ++c) {
                  var s = r.value[c];
                  if (s.visible) {
                    r.activeId = s.id;
                    break
                  }
                }
              l.props.logToAmplitude(COMMONCONSTANTS.FOLDER_PILL_CLICK, {
                folderId: t.id,
                folderVisible: t.visible
              }), e.setFolderData(r)
            }
          },
          h = this.props.userLocalData.installDate;
        return t("div", {
          className: "folder-switcher"
        }, t("div", {
          className: "switch-button",
          onClick: u
        }, "+/-"), a && t(s.a, {
          close: u,
          title: "Hide/Show Folder"
        }, t("div", {
          className: "folder-body"
        }, !h && t("div", {
          className: "message-container"
        }, t("small", null, "First 3 folders are free. Next 7 folders are exclusive to premium users. "), t("a", {
          className: "button",
          target: "_blank",
          href: COMMONCONSTANTS.PAYMENT_URL,
          onClick: function() {
            var t;
            t = l.props.source || "folder_switcher_manual", l.props.logToAmplitude(COMMONCONSTANTS.LICENSE_BUY_BUTTON_CLICK, {
              license_buy_button_click_source: t
            }), TRACK({
              category: COMMONCONSTANTS.LICENSE_BUY,
              action: COMMONCONSTANTS.LICENSE_BUY_BUTTON_CLICK,
              label: t
            })
          }
        }, "Upgrade now!")), t("div", {
          className: "folder-message"
        }, "Folder can be renamed by double clicking any folder tab from the top."), e.folderData.value.map((function(e, l) {
          return t("div", {
            className: "folder-block ".concat(e.visible ? "visible" : "hidden"),
            onClick: function() {
              f(e)
            }
          }, t("div", {
            className: "folder-name"
          }, t("span", {
            class: "num"
          }, l + 1), t("span", {
            class: "text"
          }, e.value)), (h || !h && l < 3) && t("div", {
            className: "folder-pill"
          }, t("div", {
            className: "icon-container"
          }, t("span", {
            class: "lnr lnr-checkmark-circle"
          })), t("span", null, e.visible ? "Visible" : "Hidden")), !h && l >= 3 && t("div", {
            className: "folder-pill unlock"
          }, t("div", {
            className: "icon-container"
          }, t("span", {
            class: "lnr lnr-lock"
          })), t("span", null, "Unlock")))
        })))))
      }
      l.d(e, "a", (function() {
        return a
      }));
      l("1X64");
      var c = l("MOxe"),
        s = l("12DX")
    }).call(this, l("2mXy").h)
  },
  hFkc: function(t, e, l) {
    "use strict";
    (function() {
      function t(e) {
        return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, t(e)
      }

      function e(t, e) {
        for (var l = 0; l < e.length; l++) {
          var o = e[l];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
      }

      function o(t, e) {
        return Object.setPrototypeOf || function(t, e) {
          return t.__proto__ = e, t
        }, o(t, e)
      }

      function n(t) {
        var e = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (t) {
            return !1
          }
        }();
        return function() {
          var l, o = r(t);
          if (e) {
            var n = r(this).constructor;
            Reflect.construct(o, arguments, n)
          } else o.apply(this, arguments);
          return i(this, l)
        }
      }

      function i(e, l) {
        if (l && ("object" === t(l) || "function" == typeof l)) return l;
        if (void 0 !== l) throw new TypeError("Derived constructors may only return object or undefined");
        return function(t) {
          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t
        }(e)
      }

      function r(t) {
        return Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }, r(t)
      }
      l("/Vop"), l("2mXy")
    }).call(this, l("2mXy").h)
  },
  i8rI: function(t, e, l) {
    "use strict";
    (function(t) {
      function o(t) {
        return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, o(t)
      }

      function n(t, e) {
        for (var l = 0; l < e.length; l++) {
          var o = e[l];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
      }

      function i(t, e) {
        return i = Object.setPrototypeOf || function(t, e) {
          return t.__proto__ = e, t
        }, i(t, e)
      }

      function r(t) {
        var e = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (t) {
            return !1
          }
        }();
        return function() {
          var l, o = c(t);
          if (e) {
            var n = c(this).constructor;
            l = Reflect.construct(o, arguments, n)
          } else l = o.apply(this, arguments);
          return a(this, l)
        }
      }

      function a(t, e) {
        if (e && ("object" === o(e) || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        return function(t) {
          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t
        }(t)
      }

      function c(t) {
        return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }, c(t)
      }
      l.d(e, "a", (function() {
        return s
      }));
      l("Ttxi");
      var s = function(e) {
        function l(t) {
          return s.call(this, t)
        }! function(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(t, "prototype", {
            writable: !1
          }), e && i(t, e)
        }(l, e);
        var o, a, c, s = r(l);
        return o = l, (a = [{
          key: "onClickRateButton",
          value: function() {
            this.props.logToAmplitude(COMMONCONSTANTS.RATE_BUTTON_CLICK), TRACK({
              category: COMMONCONSTANTS.SETTINGS,
              action: COMMONCONSTANTS.RATE_BUTTON_CLICK,
              label: !Utility.disablePremiumFeature(this.props.userLocalData)
            })
          }
        }, {
          key: "onClickShareButton",
          value: function(t) {
            "facebook" == t && (this.props.logToAmplitude(COMMONCONSTANTS.LOVE_SECTION_FACEBOOK_CLICK), TRACK({
              category: COMMONCONSTANTS.SETTINGS,
              action: COMMONCONSTANTS.LOVE_SECTION_FACEBOOK_CLICK,
              label: !Utility.disablePremiumFeature(this.props.userLocalData)
            })), "twitter" == t && (this.props.logToAmplitude(COMMONCONSTANTS.LOVE_SECTION_TWITTER_CLICK), TRACK({
              category: COMMONCONSTANTS.SETTINGS,
              action: COMMONCONSTANTS.LOVE_SECTION_TWITTER_CLICK,
              label: !Utility.disablePremiumFeature(this.props.userLocalData)
            }))
          }
        }, {
          key: "render",
          value: function() {
            return t("div", {
              className: "like-container"
            }, t("div", {
              className: "share-container"
            }, t("div", {
              className: "text"
            }, "Premium version is provided by @Phebungphe1995, contact to him: "), " ", t("br", null), t("a", {
              onClick: this.onClickShareButton.bind(this, "facebook"),
              target: "_blank",
              href: "https://www.facebook.com/phebungphe1995",
              className: "facebook"
            }, "f")), t("div", {
              className: "heading-text"
            }, "Write a beautiful review:"), t("a", {
              onClick: this.onClickRateButton.bind(this),
              target: "_blank",
              href: "https://getstickynotes.com/rating-from-chrome",
              className: "rate-button"
            }, "Rate this App & give feedback"), t("div", {
              className: "animation"
            }, t("span", {
              className: "pulse"
            }, t("span", null, "❤")), t("span", {
              className: "c"
            })))
          }
        }]) && n(o.prototype, a), c && n(o, c), Object.defineProperty(o, "prototype", {
          writable: !1
        }), l
      }(l("2mXy").Component)
    }).call(this, l("2mXy").h)
  },
  jzTc: function() {},
  kf5q: function(t, e) {
    "use strict";
    var l = function(t) {
      var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      window.SEND_TO_AMPLITUDE(t, e)
    };
    e.a = function() {
      var t = window.localStorage;
      if (!document.querySelector(".login-overlay-container") && (!t[COMMONCONSTANTS.TOUR_SHOWN] && !(t[COMMONCONSTANTS.POPUP_OPEN_COUNT] && parseInt(t[COMMONCONSTANTS.POPUP_OPEN_COUNT]) && parseInt(t[COMMONCONSTANTS.POPUP_OPEN_COUNT]) > 2) && document.querySelector(".folder-1 .folder-action"))) {
        var e = new Shepherd.Tour({
          classPrefix: "tour-",
          useModalOverlay: !0,
          defaultStepOptions: {
            classes: "shadow-md bg-purple-dark"
          }
        });
        Shepherd.on("cancel", (function() {
          t[COMMONCONSTANTS.TOUR_SHOWN] = !0
        })), e.addStep({
          id: "folder-step",
          text: "(1/4) <br /><h2>Folder Settings</h2>Every Folder has <u>3 notes</u>. You can hide or show these notes from here. <br /> <br />You can also change the folder name from here.  ",
          attachTo: {
            element: ".folder-1 .folder-action",
            on: "right"
          },
          classes: "tour-step right",
          buttons: [{
            text: "Exit Tour",
            action: function() {
              return l(COMMONCONSTANTS.TOUR_EXIT, {
                step: 1
              }), this.cancel()
            },
            secondary: !0
          }, {
            text: "Next",
            action: function() {
              return l(COMMONCONSTANTS.TOUR_NEXT_STEP, {
                step: 1
              }), this.next()
            }
          }]
        }), e.addStep({
          id: "add-folder-step",
          text: "(2/4)<h2>Show / Hide folders</h2>There are total " + COMMONCONSTANTS.TOTAL_FOLDERS + " folders. You can hide them or make them visible from here.",
          attachTo: {
            element: ".folder-switcher",
            on: "bottom"
          },
          classes: "tour-step bottom",
          buttons: [{
            text: "Exit",
            action: function() {
              return l(COMMONCONSTANTS.TOUR_EXIT, {
                step: 2
              }), this.cancel()
            },
            secondary: !0
          }, {
            text: "Next",
            action: function() {
              return l(COMMONCONSTANTS.TOUR_NEXT_STEP, {
                step: 2
              }), this.next()
            }
          }]
        }), e.addStep({
          id: "add-folder-step",
          text: "(3/4)<h2> Login, Backup & Upgrade </h2> Add license-key here after purchasing the premium.",
          attachTo: {
            element: ".menu-outer-container",
            on: "left"
          },
          classes: "tour-step bottom",
          buttons: [{
            text: "Exit",
            action: function() {
              return l(COMMONCONSTANTS.TOUR_EXIT, {
                step: 3
              }), this.cancel()
            },
            secondary: !0
          }, {
            text: "Next",
            action: function() {
              return l(COMMONCONSTANTS.TOUR_NEXT_STEP, {
                step: 3
              }), this.next()
            }
          }]
        }), e.addStep({
          id: "dark-mode-step",
          text: "(4/4)<h2>Try new themes everyday </h2> Enjoy lots of premium & animated themes.",
          attachTo: {
            element: ".tab-item.theme-setting",
            on: "left"
          },
          classes: "tour-step bottom",
          buttons: [{
            text: "Finish",
            action: function() {
              return l(COMMONCONSTANTS.TOUR_EXIT, {
                step: 4
              }), this.cancel()
            }
          }]
        }), e.start()
      }
    }
  },
  kpLI: function() {},
  l8q4: function(t, e, l) {
    "use strict";
    (function() {
      function t(e) {
        return "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, t(e)
      }

      function e(t, e) {
        for (var l = 0; l < e.length; l++) {
          var o = e[l];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
      }

      function o(t, e) {
        return Object.setPrototypeOf || function(t, e) {
          return t.__proto__ = e, t
        }, o(t, e)
      }

      function n(t) {
        var e = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (t) {
            return !1
          }
        }();
        return function() {
          var l, o = r(t);
          if (e) {
            var n = r(this).constructor;
            Reflect.construct(o, arguments, n)
          } else o.apply(this, arguments);
          return i(this, l)
        }
      }

      function i(e, l) {
        if (l && ("object" === t(l) || "function" == typeof l)) return l;
        if (void 0 !== l) throw new TypeError("Derived constructors may only return object or undefined");
        return function(t) {
          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t
        }(e)
      }

      function r(t) {
        return Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }, r(t)
      }
      l("03eb"), l("2mXy")
    }).call(this, l("2mXy").h)
  },
  mJ8t: function(t, e, l) {
    "use strict";
    (function(t) {
      function o(t, e) {
        return function(t) {
          if (Array.isArray(t)) return t
        }(t) || function(t, e) {
          var l = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
          if (null == l) return;
          var o, n, i = [],
            r = !0,
            a = !1;
          try {
            for (l = l.call(t); !(r = (o = l.next()).done) && (i.push(o.value), !e || i.length !== e); r = !0);
          } catch (t) {
            a = !0, n = t
          } finally {
            try {
              r || null == l.return || l.return()
            } finally {
              if (a) throw n
            }
          }
          return i
        }(t, e) || function(t, e) {
          if (!t) return;
          if ("string" == typeof t) return n(t, e);
          var l = Object.prototype.toString.call(t).slice(8, -1);
          "Object" === l && t.constructor && (l = t.constructor.name);
          if ("Map" === l || "Set" === l) return Array.from(t);
          if ("Arguments" === l || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)) return n(t, e)
        }(t, e) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
      }

      function n(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var l = 0, o = new Array(e); l < e; l++) o[l] = t[l];
        return o
      }

      function i(e) {
        var l = o(Object(r.c)(!1), 2),
          n = l[0],
          i = l[1],
          a = o(Object(r.c)(null), 2),
          c = a[0],
          s = a[1];
        return Object(r.a)((function() {
          Utility.isExtension() && chrome.storage.local.get("userLocalData", (function(t) {
            t.userLocalData && (s(t.userLocalData), t.userLocalData.installDate && (i(!0), e.logToAmplitude(COMMONCONSTANTS.USER_AUTO_LOGOUT, {
              force_login_email: t.userLocalData.email
            })))
          }))
        }), []), n ? t("div", {
          className: "login-reminder-container"
        }, t("div", {
          className: "title"
        }, "There is a problem with backing up your data."), t("div", {
          className: "action",
          onClick: function() {
            e.logToAmplitude(COMMONCONSTANTS.FORCE_LOGIN, {
              force_login_email: (null == c ? void 0 : c.email) || ""
            }), chrome.tabs.create({
              url: chrome.runtime.getURL("tab.html")
            })
          }
        }, "Click here to login again.")) : null
      }
      l.d(e, "a", (function() {
        return i
      }));
      l("Fowd");
      var r = l("MOxe")
    }).call(this, l("2mXy").h)
  },
  mdIT: function() {},
  nCbn: function(t, e, l) {
    "use strict";
    (function(t) {
      function o(t) {
        return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, o(t)
      }

      function n(t, e) {
        for (var l = 0; l < e.length; l++) {
          var o = e[l];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
      }

      function i(t, e) {
        return i = Object.setPrototypeOf || function(t, e) {
          return t.__proto__ = e, t
        }, i(t, e)
      }

      function r(t) {
        var e = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (t) {
            return !1
          }
        }();
        return function() {
          var l, o = c(t);
          if (e) {
            var n = c(this).constructor;
            l = Reflect.construct(o, arguments, n)
          } else l = o.apply(this, arguments);
          return a(this, l)
        }
      }

      function a(t, e) {
        if (e && ("object" === o(e) || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        return function(t) {
          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t
        }(t)
      }

      function c(t) {
        return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }, c(t)
      }
      l.d(e, "a", (function() {
        return s
      }));
      var s = function(e) {
        function l(t) {
          return s.call(this, t)
        }! function(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(t, "prototype", {
            writable: !1
          }), e && i(t, e)
        }(l, e);
        var o, a, c, s = r(l);
        return o = l, (a = [{
          key: "render",
          value: function() {
            var e = Utility.getBenefits();
            return t("div", {
              className: "benefits"
            }, e.map((function(e, l) {
              return t("div", {
                className: "benefit b-".concat(l + 1)
              }, t("span", {
                className: "icon"
              }, t("span", {
                className: "lnr lnr-checkmark-circle"
              })), t("span", {
                className: "text"
              }, t("span", {
                dangerouslySetInnerHTML: {
                  __html: e.text
                }
              })))
            })))
          }
        }]) && n(o.prototype, a), c && n(o, c), Object.defineProperty(o, "prototype", {
          writable: !1
        }), l
      }(l("2mXy").Component)
    }).call(this, l("2mXy").h)
  },
  nMw1: function() {},
  nWBr: function() {},
  oqGk: function(t, e, l) {
    "use strict";
    (function(t) {
      function o(t) {
        return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, o(t)
      }

      function n(t, e) {
        for (var l = 0; l < e.length; l++) {
          var o = e[l];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
      }

      function i(t, e) {
        return i = Object.setPrototypeOf || function(t, e) {
          return t.__proto__ = e, t
        }, i(t, e)
      }

      function r(t) {
        var e = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (t) {
            return !1
          }
        }();
        return function() {
          var l, o = c(t);
          if (e) {
            var n = c(this).constructor;
            l = Reflect.construct(o, arguments, n)
          } else l = o.apply(this, arguments);
          return a(this, l)
        }
      }

      function a(t, e) {
        if (e && ("object" === o(e) || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        return function(t) {
          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t
        }(t)
      }

      function c(t) {
        return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }, c(t)
      }
      l.d(e, "a", (function() {
        return u
      }));
      l("fEOk");
      var s = l("2mXy"),
        p = l("kf5q"),
        u = function(e) {
          function l(t) {
            var e;
            return (e = s.call(this, t)).state = {
              show: !1
            }, e
          }! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                writable: !0,
                configurable: !0
              }
            }), Object.defineProperty(t, "prototype", {
              writable: !1
            }), e && i(t, e)
          }(l, e);
          var o, a, c, s = r(l);
          return o = l, (a = [{
            key: "onClickLoginButton",
            value: function() {
              this.props.logToAmplitude(COMMONCONSTANTS.SKIPPABLE_LOGIN_CLICK), TRACK({
                category: COMMONCONSTANTS.BEHAVIOUR,
                action: COMMONCONSTANTS.SKIPPABLE_LOGIN_CLICK,
                label: COMMONCONSTANTS.RELEASE_VERSION
              }), Utility.isExtension() && chrome.tabs.create({
                url: chrome.runtime.getURL("tab.html")
              })
            }
          }, {
            key: "onClickSkip",
            value: function() {
              this.props.logToAmplitude(COMMONCONSTANTS.SKIP_BUTTON_CLICK), TRACK({
                category: COMMONCONSTANTS.BEHAVIOUR,
                action: COMMONCONSTANTS.SKIP_BUTTON_CLICK,
                label: COMMONCONSTANTS.RELEASE_VERSION
              }), this.setState({
                show: !1
              }, (function() {
                Object(p.a)()
              }))
            }
          }, {
            key: "componentDidMount",
            value: function() {
              if (!(this.props.userLocalData && this.props.userLocalData.email && this.props.userLocalData.email.length > 0)) {
                var t = window.localStorage;
                t[COMMONCONSTANTS.SHOW_LOGIN_OVERLAY] || (t[COMMONCONSTANTS.SHOW_LOGIN_OVERLAY] = !0, this.setState({
                  show: !0
                }))
              }
            }
          }, {
            key: "render",
            value: function() {
              return this.state.show ? t("div", {
                className: "login-overlay-container"
              }, t("div", {
                className: "inner-container"
              }, t("div", {
                className: "dog-container"
              }, t("div", {
                className: "dog"
              }, t("div", {
                className: "ears"
              }), t("div", {
                className: "body"
              }, t("div", {
                className: "eyes"
              }), t("div", {
                className: "beard"
              }, t("div", {
                className: "mouth"
              }, t("div", {
                className: "tongue"
              }))), t("div", {
                className: "belt"
              }, t("div", {
                className: "locket"
              }), t("div", {
                className: "dot dot1"
              }), t("div", {
                className: "dot dot2"
              }), t("div", {
                className: "dot dot3"
              }), t("div", {
                className: "dot dot4"
              })), t("div", {
                className: "stomach"
              }), t("div", {
                className: "legs"
              }, t("div", {
                className: "left"
              }), t("div", {
                className: "right"
              }))), t("div", {
                className: "tail"
              }))), t("div", {
                className: "login-button",
                onClick: this.onClickLoginButton.bind(this)
              }, t("span", {
                className: "text"
              }, "Login now for a beautiful journey")), t("div", {
                className: "login-message"
              }, "and get ", t("span", {
                className: "highlight"
              }, "exclusive"), " discounts & offers on your email"), t("div", {
                className: "skip-button",
                onClick: this.onClickSkip.bind(this)
              }, t("span", {
                className: "text"
              }, "I will login later")))) : null
            }
          }]) && n(o.prototype, a), c && n(o, c), Object.defineProperty(o, "prototype", {
            writable: !1
          }), l
        }(s.Component)
    }).call(this, l("2mXy").h)
  },
  pkEa: function(t, e, l) {
    "use strict";
    (function() {
      l("2mXy"), l("mdIT")
    }).call(this, l("2mXy").h)
  },
  "r9l/": function(t, e, l) {
    "use strict";
    (function(t) {
      function o(t) {
        return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, o(t)
      }

      function n() {
        return n = Object.assign || function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var l = arguments[e];
            for (var o in l) Object.prototype.hasOwnProperty.call(l, o) && (t[o] = l[o])
          }
          return t
        }, n.apply(this, arguments)
      }

      function i(t, e) {
        for (var l = 0; l < e.length; l++) {
          var o = e[l];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
      }

      function r() {
        return r = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, l) {
          var o = a(t, e);
          if (o) {
            var n = Object.getOwnPropertyDescriptor(o, e);
            return n.get ? n.get.call(arguments.length < 3 ? t : l) : n.value
          }
        }, r.apply(this, arguments)
      }

      function a(t, e) {
        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = f(t)););
        return t
      }

      function c(t, e) {
        return c = Object.setPrototypeOf || function(t, e) {
          return t.__proto__ = e, t
        }, c(t, e)
      }

      function s(t) {
        var e = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (t) {
            return !1
          }
        }();
        return function() {
          var l, o = f(t);
          if (e) {
            var n = f(this).constructor;
            l = Reflect.construct(o, arguments, n)
          } else l = o.apply(this, arguments);
          return p(this, l)
        }
      }

      function p(t, e) {
        if (e && ("object" === o(e) || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        return u(t)
      }

      function u(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }

      function f(t) {
        return f = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }, f(t)
      }
      l.d(e, "a", (function() {
        return h
      }));
      l("Dia2");
      var h = function(e) {
        function l(t) {
          var e;
          return (e = h.call(this, t)).setWrapperRef = e.setWrapperRef.bind(u(e)), e.currentFolder = e.props.folderData.value.filter((function(t) {
            return t.id == e.props.folderData.activeId
          }))[0], e.state = {
            text: e.currentFolder.value
          }, e
        }! function(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(t, "prototype", {
            writable: !1
          }), e && c(t, e)
        }(l, e);
        var o, a, p, h = s(l);
        return o = l, (a = [{
          key: "setWrapperRef",
          value: function(t) {
            this.wrapperRef = t
          }
        }, {
          key: "componentWillUnmount",
          value: function() {
            r(f(l.prototype), "componentWillUnmount", this).call(this), this.trackNameChange()
          }
        }, {
          key: "componentDidMount",
          value: function() {
            var t = this;
            r(f(l.prototype), "componentDidMount", this).call(this), this.changeName = "", this.saveFolderName = Utility.throttle((function(e) {
              var l = n({}, t.props.folderData);
              l.value.forEach((function(l) {
                l.id == t.props.folderData.activeId && (l.value = e)
              })), MessagePassing.send({
                key: COMMONCONSTANTS.SAVE_VALUES,
                value: l
              })
            }), 600), this.saveFolderVisibleNotes = Utility.throttle((function(e, l) {
              var o = n({}, t.props.folderData);
              o.value.forEach((function(o) {
                if (o.id == t.props.folderData.activeId) {
                  o.show[e] = l;
                  for (var n = 0, i = 0; i < o.show.length; ++i)
                    if (o.show[i]) {
                      n = i;
                      break
                    } o.noteIndexOnSmall = n
                }
              })), MessagePassing.send({
                key: COMMONCONSTANTS.SAVE_VALUES,
                value: o
              })
            }), 600)
          }
        }, {
          key: "onClickSmallNote",
          value: function(t) {
            if (1 != this.folder.show.filter((function(t) {
                return t
              })).length || !this.folder.show[t]) {
              var e = this.folder.show[t] ? 0 : 1;
              this.saveFolderVisibleNotes(t, e), this.props.logToAmplitude(COMMONCONSTANTS.FOLDER_DROPDOWN_SMALL_NOTE_CLICK), TRACK({
                category: COMMONCONSTANTS.FOLDER,
                action: COMMONCONSTANTS.FOLDER_DROPDOWN_SMALL_NOTE_CLICK,
                label: e
              })
            }
          }
        }, {
          key: "getNotesJSX",
          value: function() {
            var e = this;
            return t("div", {
              className: "small-notes-container"
            }, this.folder.show.map((function(l, o) {
              var n = "";
              return l && (n = "tick"), t("div", {
                className: "small-note ".concat(n),
                onClick: e.onClickSmallNote.bind(e, o)
              }, t("span", {
                className: "circle"
              }, "✓"))
            })))
          }
        }, {
          key: "onChangeText",
          value: function(t) {
            var e = t.target.value;
            this.setState({
              text: e
            }), this.saveFolderName(e), this.changeName = e
          }
        }, {
          key: "trackNameChange",
          value: function() {
            this.changeName.length > 0 && (this.props.logToAmplitude(COMMONCONSTANTS.FOLDER_NAME_CHANGE), TRACK({
              category: COMMONCONSTANTS.FOLDER,
              action: COMMONCONSTANTS.FOLDER_NAME_CHANGE,
              label: this.changeName.length
            }))
          }
        }, {
          key: "render",
          value: function() {
            var e = this;
            this.folder = this.props.folderData.value.filter((function(t) {
              return t.id == e.props.folderData.activeId
            }))[0];
            var l = this.folder.show.filter((function(t) {
              return t
            })).length;
            return t("div", {
              className: "folder-dropdown",
              ref: this.setWrapperRef
            }, t("div", {
              className: "arrow-up-container"
            }, t("span", {
              className: "arrow-up"
            })), t("div", {
              className: "main-container"
            }, t("div", {
              className: "name-container"
            }, t("h2", null, "Folder Settings"), t("div", {
              className: "label-text"
            }, "Rename this folder: "), t("div", {
              className: "input-container",
              onKeyUp: this.onChangeText.bind(this)
            }, t("input", {
              type: "text",
              defaultValue: this.currentFolder.value,
              onChange: function(t) {
                return e.setState({
                  text: t.target.value
                })
              }
            }))), t("div", {
              className: "notes-toggle-container"
            }, t("div", {
              className: "label-text"
            }, "Select which notes to show:"), this.getNotesJSX(), t("div", {
              className: "live-message"
            }, "Currently showing", t("span", {
              className: "visible-count"
            }, l), "notes"))))
          }
        }]) && i(o.prototype, a), p && i(o, p), Object.defineProperty(o, "prototype", {
          writable: !1
        }), l
      }(l("V6Lh").a)
    }).call(this, l("2mXy").h)
  },
  rkEp: function() {},
  "sZ/9": function() {},
  sdxc: function() {},
  tmKu: function(t, e, l) {
    "use strict";
    (function() {
      l("2mXy"), l("6Ea2"), l("XkcL"), l("S9Wk")
    }).call(this, l("2mXy").h)
  },
  uK48: function(t, e, l) {
    "use strict";
    (function(t) {
      function o(t) {
        return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, o(t)
      }

      function n(t, e) {
        for (var l = 0; l < e.length; l++) {
          var o = e[l];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
      }

      function i() {
        return i = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, l) {
          var o = r(t, e);
          if (o) {
            var n = Object.getOwnPropertyDescriptor(o, e);
            return n.get ? n.get.call(arguments.length < 3 ? t : l) : n.value
          }
        }, i.apply(this, arguments)
      }

      function r(t, e) {
        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = p(t)););
        return t
      }

      function a(t, e) {
        return a = Object.setPrototypeOf || function(t, e) {
          return t.__proto__ = e, t
        }, a(t, e)
      }

      function c(t) {
        var e = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (t) {
            return !1
          }
        }();
        return function() {
          var l, o = p(t);
          if (e) {
            var n = p(this).constructor;
            l = Reflect.construct(o, arguments, n)
          } else l = o.apply(this, arguments);
          return s(this, l)
        }
      }

      function s(t, e) {
        if (e && ("object" === o(e) || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        return function(t) {
          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t
        }(t)
      }

      function p(t) {
        return p = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }, p(t)
      }
      l.d(e, "a", (function() {
        return u
      }));
      l("5hIn");
      var u = function(e) {
        function l(t) {
          var e;
          return (e = u.call(this, t)).state = {
            text: ""
          }, e
        }! function(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(t, "prototype", {
            writable: !1
          }), e && a(t, e)
        }(l, e);
        var o, r, s, u = c(l);
        return o = l, (r = [{
          key: "componentWillUnmount",
          value: function() {
            i(p(l.prototype), "componentWillUnmount", this).call(this)
          }
        }, {
          key: "componentDidMount",
          value: function() {
            i(p(l.prototype), "componentDidMount", this).call(this)
          }
        }, {
          key: "onClickDone",
          value: function() {
            var e = this.state.text;
            e && 0 != e.trim().length ? (-1 == e.indexOf("http") && (e = "http://" + e), this.props.onClickCreateLink({
              text: e,
              range: this.props.data.range
            }), this.props.logToAmplitude(COMMONCONSTANTS.CREATE_LINK_FROM_SELECTION_DONE_CLICK), TRACK({
              category: COMMONCONSTANTS.NOTES,
              action: COMMONCONSTANTS.CREATE_LINK_FROM_SELECTION_DONE_CLICK,
              label: e.length
            })) : this.props.setParentState({
              notification: {
                actionType: COMMONCONSTANTS.NOTIFICATION_WITH_CROSS,
                showType: "error",
                autoClose: !0,
                timer: 3e3,
                children: t("span", null, "Value must not be empty")
              }
            })
          }
        }, {
          key: "onChangeInput",
          value: function(t) {
            this.setState({
              text: t.target.value
            })
          }
        }, {
          key: "render",
          value: function() {
            return t("div", {
              ref: this.setWrapperRef,
              style: {
                top: this.props.data.y + "px",
                left: this.props.data.x + "px"
              },
              className: "create-link-container"
            }, t("span", {
              className: "close-container",
              onClick: this.props.close
            }, t("span", {
              className: "cross"
            }, "x")), t("div", {
              className: "wrapper-container"
            }, t("div", {
              className: "inner-container"
            }, t("div", {
              className: "edit-link-container"
            }, t("div", {
              className: "text-link-container"
            }, t("div", {
              className: "label-text"
            }, "Website Link"), t("input", {
              value: "https://",
              onChange: this.onChangeInput.bind(this),
              className: "text-link-input"
            })), t("div", {
              className: "button-container"
            }, t("span", {
              className: "button",
              onClick: this.onClickDone.bind(this)
            }, "Done"))))))
          }
        }]) && n(o.prototype, r), s && n(o, s), Object.defineProperty(o, "prototype", {
          writable: !1
        }), l
      }(l("V6Lh").a)
    }).call(this, l("2mXy").h)
  },
  "xmE+": function() {
    "use strict"
  },
  yQRk: function(t, e, l) {
    "use strict";
    (function(t) {
      function o(t) {
        return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, o(t)
      }

      function n() {
        return n = Object.assign || function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var l = arguments[e];
            for (var o in l) Object.prototype.hasOwnProperty.call(l, o) && (t[o] = l[o])
          }
          return t
        }, n.apply(this, arguments)
      }

      function i(t, e) {
        for (var l = 0; l < e.length; l++) {
          var o = e[l];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
      }

      function r(t, e) {
        return r = Object.setPrototypeOf || function(t, e) {
          return t.__proto__ = e, t
        }, r(t, e)
      }

      function a(t) {
        var e = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (t) {
            return !1
          }
        }();
        return function() {
          var l, o = s(t);
          if (e) {
            var n = s(this).constructor;
            l = Reflect.construct(o, arguments, n)
          } else l = o.apply(this, arguments);
          return c(this, l)
        }
      }

      function c(t, e) {
        if (e && ("object" === o(e) || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        return function(t) {
          if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return t
        }(t)
      }

      function s(t) {
        return s = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }, s(t)
      }
      l.d(e, "a", (function() {
        return h
      }));
      var p = l("2mXy"),
        u = (l("ZAQo"), l("r9l/")),
        f = l("g1hq"),
        h = function(e) {
          function l(t) {
            var e;
            return (e = p.call(this, t)).state = {
              folderOpen: !1,
              folderLayout: null
            }, e
          }! function(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
            t.prototype = Object.create(e && e.prototype, {
              constructor: {
                value: t,
                writable: !0,
                configurable: !0
              }
            }), Object.defineProperty(t, "prototype", {
              writable: !1
            }), e && r(t, e)
          }(l, e);
          var o, c, s, p = a(l);
          return o = l, (c = [{
            key: "saveFolderCount",
            value: function() {
              var t, e;
              null !== (t = this.props.folderData) && void 0 !== t && null !== (e = t.value) && void 0 !== e && e.length && (localStorage[COMMONCONSTANTS.FOLDER_OPEN_COUNT] = this.props.folderData.value.filter((function(t) {
                return t.visible
              })).length)
            }
          }, {
            key: "componentDidMount",
            value: function() {
              var t = this;
              this.changeFolderLayout(), setTimeout((function() {
                t.saveFolderCount()
              }), 1e3)
            }
          }, {
            key: "componentWillUnmount",
            value: function() {}
          }, {
            key: "onClickFolderDropdownIcon",
            value: function(t) {
              this.setState({
                folderOpen: !0
              }), t.stopPropagation();
              var e = this.props.folderData.activeId;
              this.props.logToAmplitude(COMMONCONSTANTS.OPEN_FOLDER_DROPDOWN), TRACK({
                category: COMMONCONSTANTS.FOLDER,
                action: COMMONCONSTANTS.OPEN_FOLDER_DROPDOWN,
                label: e
              })
            }
          }, {
            key: "getActionJSX",
            value: function() {
              var e = this;
              return t("span", {
                className: "folder-action"
              }, t("span", {
                className: "icon-container  more-icon",
                onClick: this.onClickFolderDropdownIcon.bind(this)
              }), this.state.folderOpen && t(u.a, {
                logToAmplitude: this.props.logToAmplitude,
                folderData: this.props.folderData,
                close: function() {
                  e.changeFolderLayout(), e.setState({
                    folderOpen: !1
                  })
                }
              }))
            }
          }, {
            key: "onClickTab",
            value: function(t) {
              var e = t.id;
              if (this.props.folderData.activeId !== e) {
                var l = n({}, this.props.folderData);
                l.activeId = e, this.props.logToAmplitude(COMMONCONSTANTS.CLICK_FOLDER, {
                  folderId: e
                }), TRACK({
                  category: COMMONCONSTANTS.FOLDER,
                  action: COMMONCONSTANTS.CLICK_FOLDER,
                  label: e
                }), MessagePassing.send({
                  key: COMMONCONSTANTS.SAVE_VALUES,
                  value: l
                })
              } else this.setState({
                folderOpen: !0
              })
            }
          }, {
            key: "getText",
            value: function(t) {
              var e = Utility.getNotesSizeId(this.props.settings);
              return e && "small" == e ? t.slice(0, 1).toUpperCase() : (t.length > 20 && (t = t.slice(0, 20), t += ".."), t)
            }
          }, {
            key: "setFolderData",
            value: function(t) {
              var e = this;
              MessagePassing.send({
                key: COMMONCONSTANTS.SAVE_VALUES,
                value: t
              }), setTimeout((function() {
                e.changeFolderLayout()
              }), 0)
            }
          }, {
            key: "changeFolderLayout",
            value: function() {
              var t = this,
                e = document.querySelector(".folder-section").clientWidth,
                l = document.querySelector(".folder-container").clientWidth,
                o = e - l;
              return console.log(o), o <= 80 && "list" !== this.state.folderLayout ? this.setState({
                folderLayout: "list"
              }) : this.setState({
                folderLayout: null
              }, (function() {
                var l = document.querySelector(".folder-container").clientWidth;
                if (e - l < 80) return t.setState({
                  folderLayout: "list"
                })
              }))
            }
          }, {
            key: "render",
            value: function() {
              var e = this,
                l = "list" === this.state.folderLayout,
                o = this.props.userLocalData,
                n = Utility.getNotesSizeId(this.props.settings);
              return t("div", {
                className: "folder-section ".concat(l ? "small" : "", " ").concat(n)
              }, t("div", {
                className: "folder-container"
              }, this.props.folderData && this.props.folderData.value.map((function(i, r) {
                if (!i.visible) return null;
                if (!o.installDate && r >= 3) return null;
                var a = i.id === e.props.folderData.activeId,
                  c = e.getText(i.value),
                  s = "";
                return l && c && c.length > 0 && (s = c[0].toUpperCase()), t("div", {
                  className: "folder-".concat(i.id, " ").concat(a ? "active" : "", " folder"),
                  onClick: e.onClickTab.bind(e, i)
                }, t("div", {
                  className: "folder-inner-container"
                }, l && t("span", {
                  className: "text scale-this-text"
                }, s), !l && t("span", {
                  className: "text scale-this-text"
                }, c.toUpperCase()), a && e.getActionJSX()), (l || "small" === n) && t("span", {
                  className: "help-text-container"
                }, t("span", {
                  className: "help-text"
                }, i.value), t("span", {
                  className: "triangle"
                })))
              }))), t("div", {
                className: "folder-switcher"
              }, t(f.a, {
                logToAmplitude: this.props.logToAmplitude,
                setParentState: this.props.setParentState,
                userLocalData: this.props.userLocalData,
                setFolderData: this.setFolderData.bind(this),
                folderData: this.props.folderData
              })))
            }
          }]) && i(o.prototype, c), s && i(o, s), Object.defineProperty(o, "prototype", {
            writable: !1
          }), l
        }(p.Component)
    }).call(this, l("2mXy").h)
  },
  z5ZF: function(t, e, l) {
    "use strict";
    (function(t) {
      function o(t) {
        return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, o(t)
      }

      function n(t, e) {
        for (var l = 0; l < e.length; l++) {
          var o = e[l];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o)
        }
      }

      function i() {
        return i = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(t, e, l) {
          var o = r(t, e);
          if (o) {
            var n = Object.getOwnPropertyDescriptor(o, e);
            return n.get ? n.get.call(arguments.length < 3 ? t : l) : n.value
          }
        }, i.apply(this, arguments)
      }

      function r(t, e) {
        for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = u(t)););
        return t
      }

      function a(t, e) {
        return a = Object.setPrototypeOf || function(t, e) {
          return t.__proto__ = e, t
        }, a(t, e)
      }

      function c(t) {
        var e = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (t) {
            return !1
          }
        }();
        return function() {
          var l, o = u(t);
          if (e) {
            var n = u(this).constructor;
            l = Reflect.construct(o, arguments, n)
          } else l = o.apply(this, arguments);
          return s(this, l)
        }
      }

      function s(t, e) {
        if (e && ("object" === o(e) || "function" == typeof e)) return e;
        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
        return p(t)
      }

      function p(t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
      }

      function u(t) {
        return u = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }, u(t)
      }
      l.d(e, "a", (function() {
        return f
      }));
      l("nMw1");
      var f = function(e) {
        function l(t) {
          var e;
          return (e = f.call(this, t)).setWrapperRef = e.setWrapperRef.bind(p(e)), e
        }! function(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
          t.prototype = Object.create(e && e.prototype, {
            constructor: {
              value: t,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(t, "prototype", {
            writable: !1
          }), e && a(t, e)
        }(l, e);
        var o, r, s, f = c(l);
        return o = l, (r = [{
          key: "setWrapperRef",
          value: function(t) {
            this.wrapperRef = t
          }
        }, {
          key: "componentDidMount",
          value: function() {
            i(u(l.prototype), "componentDidMount", this).call(this)
          }
        }, {
          key: "componentWillUnmount",
          value: function() {
            i(u(l.prototype), "componentWillUnmount", this).call(this)
          }
        }, {
          key: "render",
          value: function() {
            return t("div", {
              ref: this.setWrapperRef,
              className: "note-menu-container"
            }, t("div", {
              className: "main-container"
            }, t("div", {
              className: "item-container",
              onClick: this.props.onClickClearNote
            }, t("span", {
              className: "icon lnr lnr-trash"
            }), t("span", {
              className: "delete-note item-text"
            }, "Clear")), this.props.showHideButton && t("div", {
              className: "item-container hide-item",
              onClick: this.props.onClickHideNote
            }, t("span", {
              className: "icon lnr lnr-eye"
            }), t("span", {
              className: "line"
            }), t("span", {
              className: "delete-note item-text"
            }, "Hide")), t("div", {
              className: "item-container",
              onClick: this.props.onClickDownloadNote
            }, t("span", {
              className: "icon lnr lnr-download"
            }), t("span", {
              className: "download-note item-text"
            }, "Export as text")), t("div", {
              className: "item-container",
              onClick: this.props.onClickPrint
            }, t("span", {
              className: "icon lnr lnr-printer"
            }), t("span", {
              className: "download-note item-text"
            }, "Print"))), t("div", {
              className: "arrow-up-container"
            }, t("div", {
              className: "arrow-down"
            })))
          }
        }]) && n(o.prototype, r), s && n(o, s), Object.defineProperty(o, "prototype", {
          writable: !1
        }), l
      }(l("V6Lh").a)
    }).call(this, l("2mXy").h)
  }
});
//# sourceMappingURL=bundle.abd8b.js.map