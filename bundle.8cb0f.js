! function(e) {
  function t(o) {
    if (n[o]) return n[o].exports;
    var r = n[o] = {
      i: o,
      l: !1,
      exports: {}
    };
    return e[o].call(r.exports, r, r.exports, t), r.l = !0, r.exports
  }
  var n = {};
  t.m = e, t.c = n, t.d = function(e, n, o) {
    t.o(e, n) || Object.defineProperty(e, n, {
      enumerable: !0,
      get: o
    })
  }, t.r = function(e) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    })
  }, t.t = function(e, n) {
    if (1 & n && (e = t(e)), 8 & n) return e;
    if (4 & n && "object" == typeof e && e && e.__esModule) return e;
    var o = Object.create(null);
    if (t.r(o), Object.defineProperty(o, "default", {
        enumerable: !0,
        value: e
      }), 2 & n && "string" != typeof e)
      for (var r in e) t.d(o, r, function(t) {
        return e[t]
      }.bind(null, r));
    return o
  }, t.n = function(e) {
    var n = e && e.__esModule ? function() {
      return e.default
    } : function() {
      return e
    };
    return t.d(n, "a", n), n
  }, t.o = function(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }, t.p = "/", t(t.s = "mdyV")
}({
  "+kaF": function(e, t, n) {
    "use strict";
    (function(e) {
      function o(e) {
        return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, o(e)
      }

      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }

      function i(e, t) {
        return i = Object.setPrototypeOf || function(e, t) {
          return e.__proto__ = t, e
        }, i(e, t)
      }

      function a(e) {
        var t = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (e) {
            return !1
          }
        }();
        return function() {
          var n, o = c(e);
          if (t) {
            var r = c(this).constructor;
            n = Reflect.construct(o, arguments, r)
          } else n = o.apply(this, arguments);
          return s(this, n)
        }
      }

      function s(e, t) {
        if (t && ("object" === o(t) || "function" == typeof t)) return t;
        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
        return function(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e
        }(e)
      }

      function c(e) {
        return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, c(e)
      }
      n.d(t, "a", (function() {
        return f
      }));
      var l = n("hosL"),
        u = n("fsDx"),
        p = n("7ikU"),
        f = function(t) {
          function n(e) {
            var t;
            return (t = l.call(this, e)).state = {
              error: null,
              email: "",
              password: "",
              emailFocusIn: !1,
              passwordFocusIn: !1,
              emailLabelOnTop: !1,
              passwordLabelOnTop: !1,
              onHoverDog: !1
            }, t
          }! function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), Object.defineProperty(e, "prototype", {
              writable: !1
            }), t && i(e, t)
          }(n, t);
          var o, s, c, l = a(n);
          return o = n, (s = [{
            key: "onClickInput",
            value: function() {
              this.setState({
                error: null
              }), this.props.clearError()
            }
          }, {
            key: "onKeyUp",
            value: function(e) {
              13 == e.keyCode && this.onClickSubmit()
            }
          }, {
            key: "onClickSubmit",
            value: function() {
              this.props.logToAmplitude(COMMONCONSTANTS.LOGIN_WITH_EMAIL_BUTTON_CLICK), TRACK({
                category: COMMONCONSTANTS.AUTH,
                action: COMMONCONSTANTS.LOGIN_WITH_EMAIL_BUTTON_CLICK
              });
              var t = this.state.email,
                n = this.state.password;
              return t && 0 != t.trim().length ? n && 0 != n.trim().length ? n.trim().length < 6 ? this.setState({
                error: "Your password must be atleast 6 characters long."
              }) : (this.props.setParentState({
                notification: {
                  actionType: COMMONCONSTANTS.BLOCKED_LOADING,
                  children: e("span", null, "loading...")
                }
              }), void MessagePassing.send({
                key: COMMONCONSTANTS.LOGIN,
                value: {
                  email: t,
                  password: n
                }
              })) : this.setState({
                error: "Please write your password (Atleast 6 characters)."
              }) : this.setState({
                error: "Please write you email id."
              })
            }
          }, {
            key: "onFocusIn",
            value: function(e) {
              var t = this;
              setTimeout((function() {
                if (0 == t.state[e].length) {
                  var n = e + "LabelOnTop";
                  if (t.state[n]) return;
                  var o = {};
                  o[n] = !0, t.setState(o)
                }
              }), 0)
            }
          }, {
            key: "onFocusOut",
            value: function(e) {
              var t = this;
              setTimeout((function() {
                if (0 == t.state[e].length) {
                  var n = e + "LabelOnTop";
                  if (!t.state[n]) return;
                  var o = {};
                  o[n] = !1, t.setState(o)
                }
              }), 0)
            }
          }, {
            key: "onResetPassword",
            value: function() {
              this.props.logToAmplitude(COMMONCONSTANTS.RESET_PASSWORD_CLICK), TRACK({
                category: COMMONCONSTANTS.AUTH,
                action: COMMONCONSTANTS.RESET_PASSWORD_CLICK
              }), this.props.setParentState({
                notification: {
                  actionType: COMMONCONSTANTS.BLOCKED_LOADING,
                  children: e(p.a, {
                    logToAmplitude: this.props.logToAmplitude,
                    setParentState: this.props.setParentState
                  })
                }
              })
            }
          }, {
            key: "getLoginSignupJSX",
            value: function() {
              var t = this,
                n = !1,
                o = "";
              return this.state.error && (n = !0, o = this.state.error), this.props.error && (n = !0, o = this.props.error), e("div", {
                className: "create-account"
              }, e("div", {
                className: "left-side"
              }, e("div", {
                className: "heading"
              }, e("span", {
                className: "text"
              }, " Login / Signup for a beautiful journey!")), e(u.a, {
                logToAmplitude: this.props.logToAmplitude,
                setParentState: this.props.setParentState
              }), e("div", {
                className: "middle-text-container"
              }, e("span", null, "or")), e("div", {
                className: "signup-with-email"
              }, e("div", {
                className: "error-container"
              }, n && e("div", {
                className: "error-text-container"
              }, e("span", {
                className: "circle"
              }, "!"), e("span", {
                className: "text"
              }, o))), e("div", {
                className: "with-email-password"
              }, e("div", {
                className: "inputs-container"
              }, e("div", {
                className: "input-container"
              }, this.state.emailLabelOnTop && e("div", {
                style: {
                  left: 0
                },
                className: "label-text on-top"
              }, "Email"), 0 == this.state.email.length && !this.state.emailLabelOnTop && e("div", {
                style: {},
                className: "label-text"
              }, "Email"), e("input", {
                onKeyUp: this.onKeyUp.bind(this),
                onFocusIn: this.onFocusIn.bind(this, "email"),
                onFocusOut: this.onFocusOut.bind(this, "email"),
                value: this.state.email,
                id: "signup-email",
                type: "text",
                onClick: this.onClickInput.bind(this, "email"),
                onInput: function(e) {
                  t.setState({
                    email: e.target.value
                  })
                },
                className: "email"
              })), e("div", {
                className: "input-container"
              }, this.state.passwordLabelOnTop && e("div", {
                style: {
                  left: 0
                },
                className: "label-text on-top"
              }, "Password (greater than 6 letters)"), 0 == this.state.password.length && !this.state.passwordLabelOnTop && e("div", {
                className: "label-text"
              }, "Password"), e("input", {
                onKeyUp: this.onKeyUp.bind(this),
                onFocusIn: this.onFocusIn.bind(this, "password"),
                onFocusOut: this.onFocusOut.bind(this, "password"),
                value: this.state.password,
                id: "signup-password",
                type: "password",
                onInput: function(e) {
                  t.setState({
                    password: e.target.value
                  })
                },
                onClick: this.onClickInput.bind(this, "password"),
                className: "password"
              }))), e("div", {
                className: "policy-container"
              }, e("div", {
                className: "text-container"
              }, e("span", {
                className: "normal-text"
              }, "By signing in you agree to our ", e("a", {
                target: "_blank",
                href: "/terms.html"
              }, "Terms"), " and ", e("a", {
                href: "/privacy.html",
                target: "_blank"
              }, "Privacy policy")))), e("div", {
                className: "button ".concat(this.state.error ? "error" : ""),
                onClick: this.onClickSubmit.bind(this)
              }, !this.state.error && e("span", null, "Login / Signup"), this.state.error && e("span", null, "Please correct errors")), e("div", {
                className: "reset-password"
              }, e("span", {
                className: "reset-password-button",
                onClick: this.onResetPassword.bind(this)
              }, "Reset password")), e("div", null, e("br", null), "(Note: Some universities have blocked non-whitelist emails, so you might not receive verification email. Use your personal email id. )")))), e("div", {
                className: "right-side"
              }, e("div", {
                className: "inner-container"
              }, e("div", {
                className: "steps-container"
              }, e("div", {
                className: "step step-1"
              }, e("span", {
                className: "label"
              }, "Step 1"), e("span", {
                className: "text-container"
              }, e("span", {
                className: "text"
              }, "Login"))), e("div", {
                className: "step step-2"
              }, e("span", {
                className: "label"
              }, "Step 2"), e("span", {
                className: "text-container"
              }, e("span", {
                className: "text"
              }, "Purchase License"))), e("div", {
                className: "step step-1"
              }, e("span", {
                className: "label"
              }, "Step 3"), e("span", {
                className: "text-container"
              }, e("span", {
                className: "text text-1"
              }, "Verify your License"), e("div", {
                className: "text text-2"
              }, "And Enjoy the premium features")))), e("div", {
                className: "dog-container"
              }, this.state.onHoverDog && e("div", {
                className: "bubble"
              }, e("span", {
                className: "arrow"
              }), e("span", {
                className: "text"
              }, "Signup Please !")), e("div", {
                className: "dog",
                onMouseEnter: function() {
                  t.setState({
                    onHoverDog: !0
                  })
                },
                onMouseLeave: function() {
                  t.setState({
                    onHoverDog: !1
                  })
                }
              }, e("div", {
                className: "ears"
              }), e("div", {
                className: "body"
              }, e("div", {
                className: "eyes"
              }), e("div", {
                className: "beard"
              }, e("div", {
                className: "mouth"
              }, e("div", {
                className: "tongue"
              }))), e("div", {
                className: "belt"
              }, e("div", {
                className: "locket"
              }), e("div", {
                className: "dot dot1"
              }), e("div", {
                className: "dot dot2"
              }), e("div", {
                className: "dot dot3"
              }), e("div", {
                className: "dot dot4"
              })), e("div", {
                className: "stomach"
              }), e("div", {
                className: "legs"
              }, e("div", {
                className: "left"
              }), e("div", {
                className: "right"
              }))), e("div", {
                className: "tail"
              }))))))
            }
          }, {
            key: "resendMail",
            value: function() {
              MessagePassing.send({
                key: COMMONCONSTANTS.SEND_EMAILID_CONFIRMATION_EMAIL,
                value: {}
              })
            }
          }, {
            key: "onClickVerifiedMail",
            value: function() {
              this.props.setParentState({
                notification: {
                  actionType: COMMONCONSTANTS.BLOCKED_LOADING,
                  children: e("span", null, "Verifying your email.... Please Wait...")
                }
              }), MessagePassing.send({
                key: COMMONCONSTANTS.FETCH_USER,
                value: {}
              })
            }
          }, {
            key: "getEmailVerficationJSX",
            value: function() {
              return e("div", {
                className: "verify-mail-container"
              }, e("div", {
                className: "letter-box-animation"
              }, e("div", {
                className: "mail-container"
              }, e("div", {
                className: "line-container"
              }, e("div", {
                className: "line line-1"
              }), e("div", {
                className: "line line-4"
              }), e("div", {
                className: "line line-2"
              }), e("div", {
                className: "line line-5"
              }), e("div", {
                className: "line line-3"
              })), e("div", {
                className: "mail"
              }))), e("div", {
                className: "heading-container"
              }, e("span", {
                className: "text"
              }, "Please click the verification link in the email we just sent to "), e("span", {
                className: "email"
              }, this.props.userLocalData.email)), e("div", {
                className: "buttons-container"
              }, e("span", {
                className: "button resend",
                onClick: this.resendMail.bind(this)
              }, "Resend email"), e("span", {
                className: "button verified-account",
                onClick: this.onClickVerifiedMail.bind(this)
              }, "I have verified my email")))
            }
          }, {
            key: "render",
            value: function() {
              return e("div", {
                className: "login-signup-container"
              }, this.props.userLocalData && this.props.userLocalData.email && !this.props.userLocalData.emailVerified && this.getEmailVerficationJSX(), (this.props.forceLogin || !this.props.userLocalData || !this.props.userLocalData.email) && this.getLoginSignupJSX("login"))
            }
          }]) && r(o.prototype, s), c && r(o, c), Object.defineProperty(o, "prototype", {
            writable: !1
          }), n
        }(l.Component)
    }).call(this, n("hosL").h)
  },
  "4Z+E": function() {},
  "7ikU": function(e, t, n) {
    "use strict";
    (function(e) {
      function o(e) {
        return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, o(e)
      }

      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }

      function i(e, t) {
        return i = Object.setPrototypeOf || function(e, t) {
          return e.__proto__ = t, e
        }, i(e, t)
      }

      function a(e) {
        var t = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (e) {
            return !1
          }
        }();
        return function() {
          var n, o = c(e);
          if (t) {
            var r = c(this).constructor;
            n = Reflect.construct(o, arguments, r)
          } else n = o.apply(this, arguments);
          return s(this, n)
        }
      }

      function s(e, t) {
        if (t && ("object" === o(t) || "function" == typeof t)) return t;
        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
        return function(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e
        }(e)
      }

      function c(e) {
        return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, c(e)
      }
      n.d(t, "a", (function() {
        return l
      }));
      var l = function(t) {
        function n(e) {
          var t;
          return (t = l.call(this, e)).state = {
            email: "",
            error: ""
          }, t
        }! function(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(e, "prototype", {
            writable: !1
          }), t && i(e, t)
        }(n, t);
        var o, s, c, l = a(n);
        return o = n, (s = [{
          key: "onClickSubmit",
          value: function() {
            this.props.logToAmplitude(COMMONCONSTANTS.RESET_PASSWORD_EMAIL_SUBMIT_CLICK), TRACK({
              category: COMMONCONSTANTS.AUTH,
              action: COMMONCONSTANTS.RESET_PASSWORD_EMAIL_SUBMIT_CLICK
            });
            var t = this.state.email;
            if (!t || 0 == t.trim().length) return this.setState({
              error: "ERROR: Please write your email."
            });
            MessagePassing.send({
              key: COMMONCONSTANTS.SEND_FORGOT_PASSWORD_MAIL,
              value: {
                email: t
              }
            }), this.props.setParentState({
              notification: {
                actionType: COMMONCONSTANTS.BLOCKED_LOADING,
                children: e("span", null, "Sending mail to email ", t)
              }
            })
          }
        }, {
          key: "render",
          value: function() {
            var t = this;
            return e("div", {
              className: "forgot-password auth-small-container"
            }, e("div", {
              className: "back-container"
            }, e("div", {
              className: "back-button",
              onClick: function() {
                t.props.setParentState({
                  notification: null
                })
              }
            }, e("span", {
              className: "lnr lnr-arrow-left"
            }), e("span", {
              className: "text"
            }, "Back"))), e("div", {
              className: "heading-text"
            }, "Enter your email id to receive email to reset password."), e("span", {
              className: "error"
            }, this.state.error.length > 0 && e("span", {
              className: "text"
            }, this.state.error)), e("div", {
              className: "input-container"
            }, e("input", {
              type: "email",
              onKeyUp: function(e) {
                t.setState({
                  error: "",
                  email: e.target.value
                })
              },
              value: this.state.email,
              placeholder: "Your Email id"
            }), e("div", {
              className: "submit-button",
              onClick: this.onClickSubmit.bind(this)
            }, e("span", {
              className: "text"
            }, "Send email to reset password"))))
          }
        }]) && r(o.prototype, s), c && r(o, c), Object.defineProperty(o, "prototype", {
          writable: !1
        }), n
      }(n("hosL").Component)
    }).call(this, n("hosL").h)
  },
  E36h: function() {},
  EQiw: function(e, t, n) {
    "use strict";
    (function(e) {
      function o(e) {
        return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, o(e)
      }

      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }

      function i(e, t) {
        return i = Object.setPrototypeOf || function(e, t) {
          return e.__proto__ = t, e
        }, i(e, t)
      }

      function a(e) {
        var t = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (e) {
            return !1
          }
        }();
        return function() {
          var n, o = c(e);
          if (t) {
            var r = c(this).constructor;
            n = Reflect.construct(o, arguments, r)
          } else n = o.apply(this, arguments);
          return s(this, n)
        }
      }

      function s(e, t) {
        if (t && ("object" === o(t) || "function" == typeof t)) return t;
        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
        return function(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e
        }(e)
      }

      function c(e) {
        return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, c(e)
      }
      n.d(t, "a", (function() {
        return l
      }));
      var l = function(t) {
        function n(e) {
          return l.call(this, e)
        }! function(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(e, "prototype", {
            writable: !1
          }), t && i(e, t)
        }(n, t);
        var o, s, c, l = a(n);
        return o = n, (s = [{
          key: "onClickButton",
          value: function() {
            var e = this.props.source || "";
            this.props.logToAmplitude(COMMONCONSTANTS.LICENSE_BUY_BUTTON_CLICK, {
              license_buy_button_click_source: e
            }), TRACK({
              category: COMMONCONSTANTS.LICENSE_BUY,
              action: COMMONCONSTANTS.LICENSE_BUY_BUTTON_CLICK,
              label: e
            })
          }
        }, {
          key: "render",
          value: function() {
            return Utility.getPriceObject(), e("div", {
              className: "price-container"
            }, e("a", {
              className: "button",
              target: "_blank",
              href: COMMONCONSTANTS.PAYMENT_URL,
              onClick: this.onClickButton.bind(this)
            }, "Upgrade Now"))
          }
        }]) && r(o.prototype, s), c && r(o, c), Object.defineProperty(o, "prototype", {
          writable: !1
        }), n
      }(n("hosL").Component)
    }).call(this, n("hosL").h)
  },
  ElJc: function(e, t, n) {
    "use strict";
    (function(e) {
      function o(e) {
        return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, o(e)
      }

      function r() {
        return r = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
          }
          return e
        }, r.apply(this, arguments)
      }

      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }

      function a(e, t) {
        return a = Object.setPrototypeOf || function(e, t) {
          return e.__proto__ = t, e
        }, a(e, t)
      }

      function s(e) {
        var t = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (e) {
            return !1
          }
        }();
        return function() {
          var n, o = l(e);
          if (t) {
            var r = l(this).constructor;
            n = Reflect.construct(o, arguments, r)
          } else n = o.apply(this, arguments);
          return c(this, n)
        }
      }

      function c(e, t) {
        if (t && ("object" === o(t) || "function" == typeof t)) return t;
        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
        return function(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e
        }(e)
      }

      function l(e) {
        return l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, l(e)
      }
      n.d(t, "a", (function() {
        return u
      }));
      var u = function(t) {
        function n(e) {
          return u.call(this, e)
        }! function(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(e, "prototype", {
            writable: !1
          }), t && a(e, t)
        }(n, t);
        var o, c, l, u = s(n);
        return o = n, (c = [{
          key: "componentDidMount",
          value: function() {}
        }, {
          key: "onClickOption",
          value: function(e) {
            var t = r({}, this.props.userLocalData);
            t.backupSettings.interval = e;
            var n = "";
            "daily" == e ? n = "Your data will be backed up daily automatically." : "weekly" == e ? n = "Your data will be backed up weekly automatically." : "never" == e && (n = "Your data will be never be backed up automatically."), MessagePassing.send({
              key: COMMONCONSTANTS.SAVE_USER_LOCAL_DATA,
              value: t,
              callerInfo: {
                from: "backupSettings",
                messageToShow: n
              }
            }), this.props.logToAmplitude(COMMONCONSTANTS.AUTH_BACKUP_OPTION_SELECTED, {
              backupInterval: e
            }), TRACK({
              category: COMMONCONSTANTS.AUTH,
              action: COMMONCONSTANTS.AUTH_BACKUP_OPTION_SELECTED,
              label: e
            })
          }
        }, {
          key: "render",
          value: function() {
            return this.interval = this.props.userLocalData.backupSettings.interval, e("div", {
              className: "backup-settings-container"
            }, e("div", {
              className: "inner-container"
            }, e("div", {
              className: "heading"
            }, e("span", null, "Please select your automatic data backup settings. (You can change later)")), e("div", {
              className: "options"
            }, e("div", {
              className: "option",
              onClick: this.onClickOption.bind(this, "daily")
            }, e("span", {
              className: "select-span ".concat("daily" == this.interval ? "selected" : "")
            }, e("span", {
              className: "icon lnr lnr-check"
            }, "✓")), e("span", {
              className: "text"
            }, "Backup daily"), e("div", {
              className: "hidden-text"
            }, e("span", {
              className: "triangle"
            }), e("span", null, "Your data will be backedup daily. "))), e("div", {
              className: "option",
              onClick: this.onClickOption.bind(this, "weekly")
            }, e("span", {
              className: "select-span ".concat("weekly" == this.interval ? "selected" : "")
            }, e("span", {
              className: "icon lnr lnr-check"
            }, "✓")), e("span", {
              className: "text"
            }, "Backup weekly"), e("div", {
              className: "hidden-text"
            }, e("span", {
              className: "triangle"
            }), e("span", null, "Your data will be backed up weekly. "))), e("div", {
              className: "option",
              onClick: this.onClickOption.bind(this, "never")
            }, e("span", {
              className: "select-span ".concat("never" == this.interval ? "selected" : "")
            }, e("span", {
              className: "icon lnr lnr-check"
            }, "✓")), e("span", {
              className: "text"
            }, "Never"), e("div", {
              className: "hidden-text"
            }, e("span", {
              className: "triangle"
            }), e("span", null, "Your data will never be backed up. If your browser or computer crashes, you will lose the data. "))))))
          }
        }]) && i(o.prototype, c), l && i(o, l), Object.defineProperty(o, "prototype", {
          writable: !1
        }), n
      }(n("hosL").Component)
    }).call(this, n("hosL").h)
  },
  KhSS: function() {},
  OwME: function() {},
  QfWi: function(e, t, n) {
    "use strict";
    n.r(t),
      function(e) {
        function o(e) {
          return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }, o(e)
        }

        function r(e, t) {
          for (var n = 0; n < t.length; n++) {
            var o = t[n];
            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
          }
        }

        function i(e, t) {
          return i = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
          }, i(e, t)
        }

        function a(e) {
          var t = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (e) {
              return !1
            }
          }();
          return function() {
            var n, o = c(e);
            if (t) {
              var r = c(this).constructor;
              n = Reflect.construct(o, arguments, r)
            } else n = o.apply(this, arguments);
            return s(this, n)
          }
        }

        function s(e, t) {
          if (t && ("object" === o(t) || "function" == typeof t)) return t;
          if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
          return function(e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e
          }(e)
        }

        function c(e) {
          return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
          }, c(e)
        }
        n.d(t, "default", (function() {
          return h
        }));
        n("KhSS"), n("h+mg"), n("E36h");
        var l = n("hosL"),
          u = n("+kaF"),
          p = n("fnd5"),
          f = n("QyV/"),
          d = n("Uhs+"),
          O = n("cacb"),
          N = n("rcpC"),
          y = n("fsDx"),
          m = n("rIIB"),
          h = function(t) {
            function n(t) {
              var n;
              return (n = l.call(this, t)).setState({
                installPage: !1,
                error: null,
                user: null,
                mode: "login",
                mailResent: !1,
                userLocalData: null,
                settings: null,
                folderData: null,
                notesArray: [],
                forceLogin: !1,
                firestoreLive: !1,
                notification: {
                  actionType: COMMONCONSTANTS.BLOCKED_LOADING,
                  children: e("span", null, "Loading ....")
                }
              }), n
            }! function(e, t) {
              if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
              e.prototype = Object.create(t && t.prototype, {
                constructor: {
                  value: e,
                  writable: !0,
                  configurable: !0
                }
              }), Object.defineProperty(e, "prototype", {
                writable: !1
              }), t && i(e, t)
            }(n, t);
            var o, s, c, l = a(n);
            return o = n, (s = [{
              key: "fetchAllData",
              value: function() {
                MessagePassing.send({
                  key: COMMONCONSTANTS.FETCH_VALUES,
                  value: {
                    id: "folderNames"
                  }
                }), MessagePassing.send({
                  key: COMMONCONSTANTS.FETCH_VALUES,
                  value: {
                    id: "settings"
                  }
                })
              }
            }, {
              key: "logToAmplitude",
              value: function(e, t) {
                SEND_TO_AMPLITUDE(e, t, {
                  userLocalData: this.state.userLocalData,
                  settings: this.state.settings,
                  folderData: this.state.folderData,
                  notesArray: this.state.notesArray
                })
              }
            }, {
              key: "componentWillMount",
              value: function() {
                var e = window.location.search;
                e.indexOf("signup") > -1 && this.setState({
                  mode: "signup"
                }), e.indexOf("login") > -1 && this.setState({
                  mode: "login"
                })
              }
            }, {
              key: "componentDidMount",
              value: function() {
                var e = this;
                this.bindEvents(), this.fetchAllData();
                var t = window.location.href,
                  n = !1;
                t.indexOf("install") > -1 && (n = !0, this.setState({
                  installPage: !0
                })), window.localStorage[COMMONCONSTANTS.AUTH_PAGE_OPEN] = 1, Utility.isExtension() || setTimeout((function() {}), 1e3), MessagePassing.send({
                  key: COMMONCONSTANTS.FETCH_USER_LOCAL_DATA,
                  value: {}
                }), setTimeout((function() {
                  n || (e.logToAmplitude(COMMONCONSTANTS.AUTH_PAGE_OPEN), TRACK({
                    category: COMMONCONSTANTS.AUTH,
                    action: COMMONCONSTANTS.AUTH_PAGE_OPEN,
                    label: COMMONCONSTANTS.RELEASE_VERSION
                  }))
                }), 2e3), MessagePassing.send({
                  key: COMMONCONSTANTS.WAKEUP_FIRESTORE,
                  value: {}
                })
              }
            }, {
              key: "checkForEmailVerification",
              value: function() {
                var e = this;
                setTimeout((function() {
                  e.state.userLocalData && e.state.userLocalData.email && !e.state.userLocalData.emailVerified && !e.startEmailVerification && (e.startEmailVerification = !0, e.loginSignupRef.onClickVerifiedMail())
                }), 0)
              }
            }, {
              key: "addMessageEventListener",
              value: function() {
                var t = this;
                MessagePassing.on((function(n) {
                  var o = n.value,
                    r = n.senderData || {};
                  if (Utility.shouldAllowEvent(window.assignedId, n.assignedId, n.key)) switch (n.key) {
                    case COMMONCONSTANTS.WAKEUP_FIRESTORE_SUCCESS:
                      t.setState({
                        firestoreLive: !0,
                        forceLogin: !1
                      });
                      break;
                    case COMMONCONSTANTS.WAKEUP_FIRESTORE_ERROR:
                      o && o.code && o.code == COMMONCONSTANTS.WAKEUP_USER_EMPTY && t.setState({
                        forceLogin: !0,
                        firestoreLive: !0
                      });
                      break;
                    case COMMONCONSTANTS.FETCH_VALUES_SUCCESS:
                      switch (o.id) {
                        case COMMONCONSTANTS.FOLDER_NAMES_KEY_STRING:
                          t.setState({
                            folderData: o
                          }), MessagePassing.send({
                            key: COMMONCONSTANTS.FETCH_FOLDER_ALL_NOTES,
                            value: {
                              id: o.activeId
                            }
                          });
                          break;
                        case COMMONCONSTANTS.SETTINGS_KEY_STRING:
                          t.setState({
                            settings: o
                          })
                      }
                      break;
                    case COMMONCONSTANTS.FETCH_FOLDER_ALL_NOTES_SUCCESS:
                      t.setState({
                        notesArray: o
                      });
                      break;
                    case COMMONCONSTANTS.CREATE_ACCOUNT_SUCCESS:
                      MessagePassing.send({
                        key: COMMONCONSTANTS.FETCH_USER_LOCAL_DATA,
                        value: {}
                      }), MessagePassing.send({
                        key: COMMONCONSTANTS.SEND_EMAILID_CONFIRMATION_EMAIL,
                        value: {}
                      }), t.setState({
                        user: o,
                        notification: {
                          actionType: COMMONCONSTANTS.NOTIFICATION_WITH_CROSS,
                          showType: "success",
                          autoClose: !0,
                          children: e("span", null, "Your account has been created")
                        }
                      }), t.logToAmplitude(COMMONCONSTANTS.CREATE_ACCOUNT_SUCCESS), TRACK({
                        category: COMMONCONSTANTS.AUTH,
                        action: COMMONCONSTANTS.CREATE_ACCOUNT_SUCCESS
                      });
                      break;
                    case COMMONCONSTANTS.CREATE_ACCOUNT_ERROR:
                      var i = "";
                      switch (o.code) {
                        case "auth/email-already-in-use":
                          return MessagePassing.send({
                            key: COMMONCONSTANTS.LOGIN,
                            value: n.senderData
                          }), void t.setState({
                            notification: {
                              actionType: COMMONCONSTANTS.BLOCKED_LOADING,
                              children: e("span", null, "Logging you in ...")
                            }
                          });
                        case "auth/invalid-email":
                          i = "This is email id invalid. Check again your email id.";
                          break;
                        case "auth/operation-not-allowed":
                          i = "You email might be disabled for some reason. contact the developers of this app.";
                          break;
                        case "auth/weak-password":
                          i = "Your password is very weak. Please use at least 6 characters."
                      }
                      t.setState({
                        error: i,
                        notification: {
                          actionType: COMMONCONSTANTS.NOTIFICATION_WITH_CROSS,
                          showType: "error",
                          autoClose: !0,
                          children: e("span", null, i)
                        }
                      }), console.log(o);
                      break;
                    case COMMONCONSTANTS.FETCH_USER_SUCCESS:
                      o.emailVerified ? MessagePassing.send({
                        key: COMMONCONSTANTS.FETCH_USER_LOCAL_DATA,
                        value: {}
                      }) : t.setState({
                        notification: {
                          actionType: COMMONCONSTANTS.NOTIFICATION_WITH_CROSS,
                          showType: "error",
                          autoClose: !0,
                          children: e("span", null, "Please click the link in the email we sent you.")
                        }
                      });
                      break;
                    case COMMONCONSTANTS.FETCH_USER_ERROR:
                      t.setState({
                        notification: {
                          actionType: COMMONCONSTANTS.NOTIFICATION_WITH_CROSS,
                          showType: "error",
                          autoClose: !0,
                          children: e("span", null, o.message)
                        }
                      }), MessagePassing.send({
                        key: COMMONCONSTANTS.FETCH_USER_LOCAL_DATA,
                        value: {}
                      });
                      break;
                    case COMMONCONSTANTS.SEND_EMAILID_CONFIRMATION_EMAIL_SUCCESS:
                      t.setState({
                        notification: {
                          actionType: COMMONCONSTANTS.NOTIFICATION_WITH_CROSS,
                          showType: "success",
                          autoClose: !0,
                          children: e("span", null, "Email confirmation link sent")
                        }
                      });
                      break;
                    case COMMONCONSTANTS.SEND_FORGOT_PASSWORD_MAIL_SUCCESS:
                      t.setState({
                        error: null,
                        notification: {
                          actionType: COMMONCONSTANTS.FULL_CLOSABLE_NOTIFICATION,
                          children: e("div", {
                            style: {
                              padding: "40px 0",
                              fontSize: "16px"
                            }
                          }, e("big", null, "Password reset mail sent to ", r.email, ". "), e("br", null), e("br", null), e("br", null), e("br", null), "If you do not receive email witin 5 minutes please check your spam folder. For security reasons link can only be used for 1 hour.")
                        }
                      });
                      break;
                    case COMMONCONSTANTS.SEND_FORGOT_PASSWORD_MAIL_ERROR:
                      var a = "Could not send reset mail to ".concat(r.email, ". ").concat(o.message);
                      "auth/user-not-found" == o.code && (a = "You don't have account with us with email ".concat(r.email, ". Please create your new account.")), t.setState({
                        notification: {
                          actionType: COMMONCONSTANTS.NOTIFICATION_WITH_CROSS,
                          showType: "error",
                          autoClose: !0,
                          children: e("span", null, a)
                        }
                      });
                      break;
                    case COMMONCONSTANTS.LOGIN_WITH_GOOGLE_SUCCESS:
                      t.logToAmplitude(COMMONCONSTANTS.LOGIN_WITH_GOOGLE_SUCCESS), TRACK({
                        category: COMMONCONSTANTS.AUTH,
                        action: COMMONCONSTANTS.LOGIN_WITH_GOOGLE_SUCCESS
                      }), console.log("DEBUG: AUTH: INDEX.JS LOGIN_WITH_GOOGLE_SUCCESS"), t.setState({
                        forceLogin: !1,
                        notification: {
                          actionType: COMMONCONSTANTS.BLOCKED_LOADING,
                          children: e("span", null, "You are Logged in. Just restoring your data !")
                        }
                      }), MessagePassing.send({
                        key: COMMONCONSTANTS.FETCH_USER_LOCAL_DATA,
                        value: {},
                        callerInfo: {
                          from: "login"
                        }
                      });
                      break;
                    case COMMONCONSTANTS.LOGIN_WITH_GOOGLE_ERROR:
                      var s = "";
                      switch (o.code) {
                        case "auth/user-disabled":
                          s = "You email might be disabled for some reason. contact the developers of this app.";
                          break;
                        case "auth/too-many-requests":
                          s = "Too many failed requests. Please wait for some time.";
                          break;
                        case "not-found":
                          s = "There is some problem with login. Try again later, check internet connection or raise a support ticket in the help section. ERROR CODE: not-found-google-login";
                          break;
                        default:
                          var c = "default-email-google-login";
                          o.code && (c = o.code), o.message && (c += o.message), s = "There is some problem with login. Try again later, check internet connection or raise a support ticket in the help section. ERROR CODE " + c
                      }
                      t.setState({
                        error: s,
                        notification: {
                          actionType: COMMONCONSTANTS.NOTIFICATION_WITH_CROSS,
                          showType: "error",
                          classToAdd: "big",
                          autoClose: !0,
                          children: e("span", null, s)
                        }
                      }), console.log(o);
                      break;
                    case COMMONCONSTANTS.LOGIN_SUCCESS:
                      t.setState({
                        forceLogin: !1
                      }), t.logToAmplitude(COMMONCONSTANTS.LOGIN_SUCCESS), TRACK({
                        category: COMMONCONSTANTS.AUTH,
                        action: COMMONCONSTANTS.LOGIN_SUCCESS
                      }), MessagePassing.send({
                        key: COMMONCONSTANTS.FETCH_USER_LOCAL_DATA,
                        value: {},
                        callerInfo: {
                          from: "login"
                        }
                      });
                      break;
                    case COMMONCONSTANTS.RESTORE_SUCCESS:
                      t.setState({
                        notification: {
                          actionType: COMMONCONSTANTS.NOTIFICATION_WITH_CROSS,
                          showType: "success",
                          autoClose: !0,
                          children: e("span", null, "Restored your data successfully ! Now you can use the extension !")
                        }
                      });
                      break;
                    case COMMONCONSTANTS.RESTORE_ERROR:
                      t.setState({
                        notification: {
                          actionType: COMMONCONSTANTS.NOTIFICATION_WITH_CROSS,
                          showType: "error",
                          autoClose: !0,
                          children: e("span", null, o.message)
                        }
                      });
                      break;
                    case COMMONCONSTANTS.BACKUP_SUCCESS:
                      t.setState({
                        notification: {
                          actionType: COMMONCONSTANTS.NOTIFICATION_WITH_CROSS,
                          showType: "success",
                          autoClose: !0,
                          children: e("span", null, "Backed up your data !")
                        }
                      });
                      break;
                    case COMMONCONSTANTS.BACKUP_ERROR:
                      t.setState({
                        notification: {
                          actionType: COMMONCONSTANTS.NOTIFICATION_WITH_CROSS,
                          showType: "error",
                          autoClose: !0,
                          children: e("span", null, o.message)
                        }
                      });
                      break;
                    case COMMONCONSTANTS.LOGIN_ERROR:
                      var l = "";
                      switch (o.code) {
                        case "auth/user-not-found":
                          return void t.setState({
                            notification: {
                              actionType: COMMONCONSTANTS.BLOCKED_LOADING,
                              children: e(N.a, {
                                logToAmplitude: t.logToAmplitude.bind(t),
                                data: n.senderData,
                                setParentState: t.setParentState.bind(t)
                              })
                            }
                          });
                        case "auth/wrong-password":
                          return void MessagePassing.send({
                            key: COMMONCONSTANTS.CHECK_LOGIN_ERROR_REASON,
                            value: n.senderData
                          });
                        case "auth/invalid-email":
                          l = "Email id is incorrect.";
                          break;
                        case "auth/user-disabled":
                          l = "You email might be disabled for some reason. contact the developers of this app.";
                          break;
                        case "auth/too-many-requests":
                          l = "Too many failed requests. Please wait for some time.";
                          break;
                        case "not-found":
                          l = "There is some problem with login. Try again later, check internet connection or raise a support ticket in the help section. ERROR CODE: not-found-email";
                          break;
                        default:
                          var u = "default-email-code";
                          o.code && (u = o.code), o.message && (u += o.message), l = "There is some problem with login. Try again later, check internet connection or raise a support ticket in the help section. Error code " + u
                      }
                      t.setState({
                        error: l,
                        notification: {
                          classToAdd: "big",
                          actionType: COMMONCONSTANTS.NOTIFICATION_WITH_CROSS,
                          showType: "error",
                          autoClose: !0,
                          children: e("span", null, l)
                        }
                      }), console.log(o);
                      break;
                    case COMMONCONSTANTS.CHECK_LOGIN_ERROR_REASON_SUCCESS:
                      switch (l = "Password is incorrect or You signed in from  one click 'LOGIN WITH GOOGLE", o.code) {
                        case "ArtificialLoginSignup/password-incorrect-has-google-account":
                          l = "Password is incorrect. You can also use 'LOGIN WITH GOOGLE' to login. You already have used that method before ?";
                          break;
                        case "ArtificialLoginSignup/password-incorrect":
                          l = "Password is incorrect. Did you forgot you password?";
                          break;
                        case "ArtificialLoginSignup/google-login":
                          return l = "You don't have a password for this account. You created you account with one click 'Signup With Google.' Please use that method.", void t.setState({
                            notification: {
                              classToAdd: "login-error-firebase",
                              actionType: COMMONCONSTANTS.FULL_CLOSABLE_NOTIFICATION,
                              children: e(y.a, {
                                setParentState: t.setParentState.bind(t),
                                logToAmplitude: t.logToAmplitude.bind(t),
                                error: o
                              })
                            }
                          });
                        case "ArtificialLoginSignup/multipleProviders":
                        case "ArtificialLoginSignup/email-not-found":
                          l = "You created you account with one click 'Signup With Google.' Please use that method.";
                          break;
                        default:
                          l = "There is some problem with login. Check internet connection or raise a support ticket in the help section.."
                      }
                      t.setState({
                        error: l,
                        notification: {
                          actionType: COMMONCONSTANTS.NOTIFICATION_WITH_CROSS,
                          showType: "error",
                          autoClose: !0,
                          children: e("span", null, l)
                        }
                      });
                      break;
                    case COMMONCONSTANTS.CHECK_LOGIN_ERROR_REASON_ERROR:
                      t.setState({
                        error: l = "Password is incorrect or You signed in from  one click 'LOGIN WITH GOOGLE",
                        notification: {
                          actionType: COMMONCONSTANTS.NOTIFICATION_WITH_CROSS,
                          showType: "error",
                          autoClose: !0,
                          children: e("span", null, " ", l)
                        }
                      });
                      break;
                    case COMMONCONSTANTS.UPDATE_USER_DETAILS_SUCCESS:
                      MessagePassing.send({
                        key: COMMONCONSTANTS.FETCH_USER_LOCAL_DATA,
                        value: {}
                      }), t.setState({
                        notification: {
                          actionType: COMMONCONSTANTS.NOTIFICATION_WITH_CROSS,
                          showType: "success",
                          autoClose: !0,
                          children: e("span", null, "You are now logged in.")
                        }
                      });
                      break;
                    case COMMONCONSTANTS.UPDATE_USER_DETAILS_ERROR:
                      t.setState({
                        notification: {
                          actionType: COMMONCONSTANTS.NOTIFICATION_WITH_CROSS,
                          showType: "success",
                          autoClose: !0,
                          children: e("span", null, "You are now logged in.")
                        }
                      });
                      break;
                    case COMMONCONSTANTS.SAVE_USER_LOCAL_DATA_SUCCESS:
                      MessagePassing.send({
                        key: COMMONCONSTANTS.FETCH_USER_LOCAL_DATA,
                        value: {},
                        callerInfo: n.senderData
                      });
                      break;
                    case COMMONCONSTANTS.FETCH_USER_LOCAL_DATA_SUCCESS:
                      if (console.log(o), n.senderData && "login" == n.senderData.from) return console.log("DEBUG: called fetch user local data success : from login"), t.setState({
                        userLocalData: o,
                        notification: null
                      }), void(o.isPremium && o.emailVerified && (o.backupTimestamp ? setTimeout((function() {
                        t.setState({
                          notification: {
                            actionType: COMMONCONSTANTS.NOTIFICATION_WITH_CROSS,
                            showType: "info",
                            autoClose: !0,
                            children: e("span", null, "Restoring your data!")
                          }
                        }), console.log("DEBUG: called restore from inside local data success"), MessagePassing.send({
                          key: COMMONCONSTANTS.RESTORE,
                          value: {}
                        })
                      }), 1e3) : setTimeout((function() {
                        t.setState({
                          notification: {
                            actionType: COMMONCONSTANTS.NOTIFICATION_WITH_CROSS,
                            showType: "info",
                            autoClose: !0,
                            children: e("span", null, "Backing up your data")
                          }
                        }), MessagePassing.send({
                          key: COMMONCONSTANTS.BACKUP,
                          value: {
                            dontSkipAnyNote: !0
                          }
                        })
                      }), 1e3)));
                      if (n.senderData && "backupSettings" == n.senderData.from) return void t.setState({
                        userLocalData: o,
                        notification: {
                          actionType: COMMONCONSTANTS.NOTIFICATION_WITH_CROSS,
                          showType: "info",
                          autoClose: !0,
                          children: e("span", null, n.senderData.messageToShow)
                        }
                      });
                      t.setState({
                        userLocalData: o,
                        notification: null
                      }), t.checkForEmailVerification();
                      break;
                    case COMMONCONSTANTS.FETCH_USER_LOCAL_DATA_ERROR:
                      t.setState({
                        notification: {
                          actionType: COMMONCONSTANTS.NOTIFICATION_WITH_CROSS,
                          showType: "error",
                          autoClose: !0,
                          children: e("span", null, "Couldn't fetch your details!")
                        }
                      });
                      break;
                    case COMMONCONSTANTS.MAKE_USER_PREMIUM_SUCCESS:
                      MessagePassing.send({
                        key: COMMONCONSTANTS.FETCH_USER_LOCAL_DATA,
                        value: {}
                      }), t.setState({
                        notification: {
                          actionType: COMMONCONSTANTS.NOTIFICATION_WITH_CROSS,
                          showType: "success",
                          autoClose: !0,
                          children: e("span", null, "You are now a premium member!")
                        }
                      });
                      break;
                    case COMMONCONSTANTS.MAKE_USER_PREMIUM_ERROR:
                      t.setState({
                        notification: {
                          actionType: COMMONCONSTANTS.NOTIFICATION_WITH_CROSS,
                          showType: "error",
                          autoClose: !0,
                          children: e("span", null, o.message)
                        }
                      });
                      break;
                    case COMMONCONSTANTS.MAKE_USER_NORMAL_SUCCESS:
                      t.setState({
                        user: o,
                        notification: {
                          actionType: COMMONCONSTANTS.NOTIFICATION_WITH_CROSS,
                          showType: "success",
                          autoClose: !0,
                          children: e("span", null, "You are unsubscribed. You are not a premium member")
                        }
                      });
                      break;
                    case COMMONCONSTANTS.MAKE_USER_NORMAL_ERROR:
                      t.setState({
                        notification: {
                          actionType: COMMONCONSTANTS.NOTIFICATION_WITH_CROSS,
                          showType: "success",
                          autoClose: !0,
                          children: e("span", null, o.message)
                        }
                      });
                      break;
                    case COMMONCONSTANTS.LOGOUT_SUCCESS:
                      t.passedByLogout = !0, window.location.reload();
                      break;
                    case COMMONCONSTANTS.LOGOUT_ERROR:
                      t.setState({
                        notification: {
                          actionType: COMMONCONSTANTS.NOTIFICATION_WITH_CROSS,
                          showType: "error",
                          autoClose: !0,
                          children: e("span", null, o.message)
                        }
                      })
                  }
                }))
              }
            }, {
              key: "bindEvents",
              value: function() {
                this.addMessageEventListener()
              }
            }, {
              key: "clearError",
              value: function() {
                this.setState({
                  error: null
                })
              }
            }, {
              key: "setParentState",
              value: function(e) {
                this.setState(e)
              }
            }, {
              key: "render",
              value: function() {
                var t = this;
                return this.state.installPage ? e("div", {
                  className: "on-install-page"
                }, e(m.a, {
                  userLocalData: this.state.userLocalData,
                  logToAmplitude: this.logToAmplitude.bind(this),
                  setParentState: this.setParentState.bind(this)
                })) : e("div", {
                  className: "auth-container ".concat(this.state.firestoreLive ? "" : "loading")
                }, e("div", {
                  className: "loading-container"
                }, e("div", {
                  className: "main-message"
                }, "Loading..."), e("div", {
                  className: "small-text"
                }, "If you see this message for long time, either check your internet connection or contact at support@ukiv.com")), e(f.a, {
                  forceLogin: this.state.forceLogin,
                  userLocalData: this.state.userLocalData,
                  logToAmplitude: this.logToAmplitude.bind(this),
                  setParentState: this.setParentState.bind(this)
                }), (this.state.forceLogin || !this.state.userLocalData || !this.state.userLocalData.emailVerified || !this.state.userLocalData.email) && e(u.a, {
                  ref: function(e) {
                    t.loginSignupRef = e
                  },
                  setParentState: this.setParentState.bind(this),
                  stopLoading: function() {
                    t.setState({
                      loading: null
                    })
                  },
                  mode: this.state.mode,
                  logToAmplitude: this.logToAmplitude.bind(this),
                  userLocalData: this.state.userLocalData,
                  clearError: this.clearError.bind(this),
                  forceLogin: this.state.forceLogin,
                  error: this.state.error
                }), this.state.notification && e(p.a, {
                  logToAmplitude: this.logToAmplitude.bind(this),
                  onCloseNotification: function() {
                    t.setState({
                      notification: null
                    })
                  },
                  data: this.state.notification
                }), !this.state.forceLogin && this.state.userLocalData && this.state.userLocalData.emailVerified && !this.state.userLocalData.isPremium && e(d.a, {
                  logToAmplitude: this.logToAmplitude.bind(this),
                  setParentState: this.setParentState.bind(this)
                }), !this.state.forceLogin && this.state.userLocalData && this.state.userLocalData.emailVerified && this.state.userLocalData.isPremium && e(O.a, {
                  userLocalData: this.state.userLocalData,
                  logToAmplitude: this.logToAmplitude.bind(this)
                }))
              }
            }]) && r(o.prototype, s), c && r(o, c), Object.defineProperty(o, "prototype", {
              writable: !1
            }), n
          }(l.Component)
      }.call(this, n("hosL").h)
  },
  "QyV/": function(e, t, n) {
    "use strict";
    (function(e) {
      function o(e) {
        return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, o(e)
      }

      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }

      function i(e, t) {
        return i = Object.setPrototypeOf || function(e, t) {
          return e.__proto__ = t, e
        }, i(e, t)
      }

      function a(e) {
        var t = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (e) {
            return !1
          }
        }();
        return function() {
          var n, o = c(e);
          if (t) {
            var r = c(this).constructor;
            n = Reflect.construct(o, arguments, r)
          } else n = o.apply(this, arguments);
          return s(this, n)
        }
      }

      function s(e, t) {
        if (t && ("object" === o(t) || "function" == typeof t)) return t;
        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
        return function(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e
        }(e)
      }

      function c(e) {
        return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, c(e)
      }
      n.d(t, "a", (function() {
        return l
      }));
      var l = function(t) {
        function n(e) {
          return l.call(this, e)
        }! function(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(e, "prototype", {
            writable: !1
          }), t && i(e, t)
        }(n, t);
        var o, s, c, l = a(n);
        return o = n, (s = [{
          key: "componentDidMount",
          value: function() {}
        }, {
          key: "onClickLogout",
          value: function() {
            this.props.setParentState({
              notification: {
                actionType: COMMONCONSTANTS.BLOCKED_LOADING,
                children: e("span", null, "Logging you Out ")
              }
            }), MessagePassing.send({
              key: COMMONCONSTANTS.LOGOUT,
              value: {}
            })
          }
        }, {
          key: "render",
          value: function() {
            var t = Utility.isExtension(),
              n = this.props.userLocalData,
              o = !1;
            return n && n.email && n.email.length > 0 && (o = !0), this.props.forceLogin && (o = !1), e("div", {
              className: "header-container"
            }, e("div", {
              className: "logo-container"
            }, e("span", {
              className: "logo",
              style: t ? {
                backgroundImage: "url(images/logo.png)"
              } : null
            }), e("span", {
              className: "text"
            }, " Sticky Notes - Just popped up!")), o && e("div", {
              className: "auth-box"
            }, e("span", {
              className: "email"
            }, n.email), e("span", {
              className: "logout",
              onClick: this.onClickLogout.bind(this)
            }, "Logout")))
          }
        }]) && r(o.prototype, s), c && r(o, c), Object.defineProperty(o, "prototype", {
          writable: !1
        }), n
      }(n("hosL").Component)
    }).call(this, n("hosL").h)
  },
  "Uhs+": function(e, t, n) {
    "use strict";
    (function(e) {
      function o(e) {
        return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, o(e)
      }

      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }

      function i(e, t) {
        return i = Object.setPrototypeOf || function(e, t) {
          return e.__proto__ = t, e
        }, i(e, t)
      }

      function a(e) {
        var t = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (e) {
            return !1
          }
        }();
        return function() {
          var n, o = c(e);
          if (t) {
            var r = c(this).constructor;
            n = Reflect.construct(o, arguments, r)
          } else n = o.apply(this, arguments);
          return s(this, n)
        }
      }

      function s(e, t) {
        if (t && ("object" === o(t) || "function" == typeof t)) return t;
        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
        return function(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e
        }(e)
      }

      function c(e) {
        return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, c(e)
      }
      n.d(t, "a", (function() {
        return f
      }));
      var l = n("hosL"),
        u = n("k7tN"),
        p = n("EQiw"),
        f = function(t) {
          function n(e) {
            var t;
            return (t = l.call(this, e)).state = {
              licenseKey: ""
            }, t
          }! function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), Object.defineProperty(e, "prototype", {
              writable: !1
            }), t && i(e, t)
          }(n, t);
          var o, s, c, l = a(n);
          return o = n, (s = [{
            key: "componentDidMount",
            value: function() {}
          }, {
            key: "onClickSubmit",
            value: function() {
              this.props.logToAmplitude(COMMONCONSTANTS.LICENSE_SUBMIT_BUTTON_CLICK), TRACK({
                category: COMMONCONSTANTS.AUTH,
                action: COMMONCONSTANTS.LICENSE_SUBMIT_BUTTON_CLICK
              });
              var t = this.state.licenseKey;
              0 != t.trim().length ? (this.props.setParentState({
                notification: {
                  actionType: COMMONCONSTANTS.BLOCKED_LOADING,
                  children: e("span", null, "Checking license key..")
                }
              }), MessagePassing.send({
                key: COMMONCONSTANTS.MAKE_USER_PREMIUM,
                value: {
                  licenseKey: t
                }
              })) : this.props.setParentState({
                notification: {
                  actionType: COMMONCONSTANTS.NOTIFICATION_WITH_CROSS,
                  showType: "error",
                  autoClose: !0,
                  children: e("span", null, "Please enter license code ")
                }
              })
            }
          }, {
            key: "onKeyUp",
            value: function(e) {
              13 == e.keyCode && this.onClickSubmit()
            }
          }, {
            key: "onClickBuyLicense",
            value: function() {
              this.props.logToAmplitude(COMMONCONSTANTS.BUY_LICENSE_BUTTON_CLICK), TRACK({
                category: COMMONCONSTANTS.AUTH,
                action: COMMONCONSTANTS.BUY_LICENSE_BUTTON_CLICK
              })
            }
          }, {
            key: "render",
            value: function() {
              var t = this;
              return Utility.getPriceObject(), e("div", {
                className: "couponcode-container"
              }, e("div", {
                className: "main-heading"
              }, "How to activate premium features:"), e("div", {
                className: "step step-2"
              }, e("div", {
                className: "label"
              }, "Step 1"), e(p.a, {
                logToAmplitude: this.props.logToAmplitude,
                source: "coupon-page"
              }), e("div", {
                className: "get-license-number"
              }, e("a", {
                className: "link",
                target: "_blank",
                href: COMMONCONSTANTS.PAYMENT_URL,
                onClick: this.onClickBuyLicense.bind(this)
              }, e("b", null, e("span", null, "First, Click here to UPGRADE"))))), e("div", {
                className: "step step-3"
              }, e("div", {
                className: "label"
              }, "Step 2"), e("div", {
                className: "license-container"
              }, e("span", {
                className: "heading-text"
              }, "Then, Enter your license key here"), e("div", {
                className: "license-input-container"
              }, e("input", {
                type: "text",
                onKeyUp: this.onKeyUp.bind(this),
                onInput: function(e) {
                  t.setState({
                    licenseKey: e.target.value
                  })
                },
                placeholder: "UKSN-XXXXXXXXXXXXXX",
                value: this.state.licenseKey
              }), e("span", {
                className: "button submit",
                onClick: this.onClickSubmit.bind(this)
              }, "Verify")), e("div", {
                className: "message-container"
              }, e("span", null, "After completing the payment, you will receive your licence key in an email. Enter that key here. ")))), e(u.a, null))
            }
          }]) && r(o.prototype, s), c && r(o, c), Object.defineProperty(o, "prototype", {
            writable: !1
          }), n
        }(l.Component)
    }).call(this, n("hosL").h)
  },
  cacb: function(e, t, n) {
    "use strict";
    (function(e) {
      function o(e) {
        return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, o(e)
      }

      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }

      function i(e, t) {
        return i = Object.setPrototypeOf || function(e, t) {
          return e.__proto__ = t, e
        }, i(e, t)
      }

      function a(e) {
        var t = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (e) {
            return !1
          }
        }();
        return function() {
          var n, o = c(e);
          if (t) {
            var r = c(this).constructor;
            n = Reflect.construct(o, arguments, r)
          } else n = o.apply(this, arguments);
          return s(this, n)
        }
      }

      function s(e, t) {
        if (t && ("object" === o(t) || "function" == typeof t)) return t;
        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
        return function(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e
        }(e)
      }

      function c(e) {
        return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, c(e)
      }
      n.d(t, "a", (function() {
        return f
      }));
      var l = n("hosL"),
        u = n("k7tN"),
        p = n("ElJc"),
        f = function(t) {
          function n(e) {
            var t;
            return (t = l.call(this, e)).state = {
              licenseKey: ""
            }, t
          }! function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), Object.defineProperty(e, "prototype", {
              writable: !1
            }), t && i(e, t)
          }(n, t);
          var o, s, c, l = a(n);
          return o = n, (s = [{
            key: "componentDidMount",
            value: function() {
              this.props.logToAmplitude(COMMONCONSTANTS.MAKE_USER_PREMIUM_SUCCESS), TRACK({
                category: COMMONCONSTANTS.AUTH,
                action: COMMONCONSTANTS.MAKE_USER_PREMIUM_SUCCESS
              })
            }
          }, {
            key: "render",
            value: function() {
              var t = Utility.isExtension();
              return e("div", {
                className: "premium-page-container"
              }, e("div", {
                className: "image-container"
              }, e("span", {
                className: "image",
                style: t ? {
                  backgroundImage: "url(images/emojiTheme/party.png)"
                } : null
              })), e("div", {
                className: "heading-text"
              }, e("span", {
                className: "text"
              }, "Congratulations !"), e("span", {
                className: "animation"
              })), e("div", {
                className: "message-text"
              }, e("div", {
                className: "line-1"
              }, "You are now a licensed premium member.")), e(p.a, {
                logToAmplitude: this.props.logToAmplitude,
                userLocalData: this.props.userLocalData
              }), e(u.a, null))
            }
          }]) && r(o.prototype, s), c && r(o, c), Object.defineProperty(o, "prototype", {
            writable: !1
          }), n
        }(l.Component)
    }).call(this, n("hosL").h)
  },
  fnd5: function(e, t, n) {
    "use strict";
    (function(e) {
      function o(e) {
        return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, o(e)
      }

      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }

      function i(e, t) {
        return i = Object.setPrototypeOf || function(e, t) {
          return e.__proto__ = t, e
        }, i(e, t)
      }

      function a(e) {
        var t = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (e) {
            return !1
          }
        }();
        return function() {
          var n, o = c(e);
          if (t) {
            var r = c(this).constructor;
            n = Reflect.construct(o, arguments, r)
          } else n = o.apply(this, arguments);
          return s(this, n)
        }
      }

      function s(e, t) {
        if (t && ("object" === o(t) || "function" == typeof t)) return t;
        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
        return function(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e
        }(e)
      }

      function c(e) {
        return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, c(e)
      }
      n.d(t, "a", (function() {
        return u
      }));
      var l = n("hosL"),
        u = (n("4Z+E"), n("OwME"), function(t) {
          function n(e) {
            return l.call(this, e)
          }! function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), Object.defineProperty(e, "prototype", {
              writable: !1
            }), t && i(e, t)
          }(n, t);
          var o, s, c, l = a(n);
          return o = n, (s = [{
            key: "componentDidMount",
            value: function() {
              var e = this;
              this.props.data.autoClose && setTimeout((function() {
                e.props.onCloseNotification()
              }), this.props.data.timer || 4e3)
            }
          }, {
            key: "getJSX",
            value: function() {
              var t = this.props.data.actionType,
                n = this.props.data.children,
                o = this.props.data.showType,
                r = this.props.data.classToAdd || "",
                i = Utility.isExtension(),
                a = "";
              if (i) switch (o) {
                case "success":
                  a = "images/success.png";
                  break;
                case "error":
                  a = "images/skull.png";
                  break;
                case "warning":
                  a = "images/ghost.png";
                  break;
                case "info":
                  a = "images/bird.png"
              }
              switch (t) {
                case COMMONCONSTANTS.NOTIFICATION_WITH_CROSS:
                  return e("div", {
                    className: "notification-container ".concat(o, " ").concat(r)
                  }, e("div", {
                    className: "inner-container"
                  }, e("div", {
                    className: "left-container"
                  }, e("span", {
                    className: "icon-container"
                  }, e("span", {
                    className: "image",
                    style: i && {
                      backgroundImage: "url(".concat(a, ")")
                    }
                  }))), e("div", {
                    className: "right-container"
                  }, e("div", {
                    className: "close-container",
                    onClick: this.props.onCloseNotification
                  }, e("span", {
                    className: "lnr lnr-cross-circle"
                  })), e("div", {
                    className: "children-container"
                  }, n))));
                case COMMONCONSTANTS.ANNOUNCEMENT_WITH_CROSS:
                  return e("div", {
                    className: "announcement"
                  }, e("div", {
                    className: "inner-container"
                  }, e("div", {
                    className: "close-container",
                    onClick: this.props.onCloseNotification
                  }, e("span", {
                    className: "lnr lnr-cross-circle"
                  })), e("div", {
                    className: "heading"
                  }, e("span", {
                    className: "text"
                  }, "Annoucement")), e("div", {
                    className: "main-container"
                  }, e("div", {
                    className: "children-container"
                  }, n), e("div", {
                    className: "bg-image-container"
                  }, e("span", {
                    className: "image",
                    style: i && {
                      backgroundImage: "url(images/bell.png)"
                    }
                  })))));
                case COMMONCONSTANTS.BLOCKED_LOADING:
                  return e("div", {
                    className: "blocked-loader-container"
                  }, e("div", {
                    className: "loader"
                  }, e("svg", {
                    width: "90",
                    height: "90",
                    viewBox: "0 0 90 90",
                    xmlns: "http://www.w3.org/2000/svg",
                    className: "svg"
                  }, e("g", null, e("circle", {
                    cx: "45",
                    cy: "45",
                    r: "12",
                    class: "circle circle--hidden circle--1"
                  }), e("circle", {
                    cx: "45",
                    cy: "45",
                    r: "12",
                    class: "circle circle--hidden circle--2"
                  }), e("circle", {
                    cx: "45",
                    cy: "45",
                    r: "16",
                    class: "circle circle--3"
                  })))), e("div", {
                    className: "text-container"
                  }, n));
                case COMMONCONSTANTS.ASK_FOR_CONSENT:
                  var s = this.props.data,
                    c = s.question,
                    l = s.smallText || null,
                    u = s.agreeText || null,
                    p = s.disagreeText || null;
                  return e("div", {
                    className: "ask-consent-container"
                  }, e("div", {
                    className: "inner-container"
                  }, e("div", {
                    className: "image-container"
                  }, e("div", {
                    className: "image",
                    style: i ? {
                      backgroundImage: "url(images/emojiTheme/nerd.png)"
                    } : null
                  })), e("div", {
                    className: "question-container"
                  }, c), l && e("div", {
                    className: "small-text"
                  }, l), e("div", {
                    className: "buttons-container"
                  }, p && e("span", {
                    className: "button button-no",
                    onClick: s.onDisagree
                  }, e("span", {
                    className: "disagree-text"
                  }, p)), u && e("span", {
                    className: "button button-yes",
                    onClick: s.onAgree
                  }, e("span", {
                    className: "agree-text"
                  }, u)))));
                case COMMONCONSTANTS.FULL_CLOSABLE_NOTIFICATION:
                  return e("div", {
                    className: "blocked-loader-container ".concat(this.props.data.classToAdd || "")
                  }, e("div", {
                    className: "close-container",
                    onClick: this.props.onCloseNotification
                  }, e("span", {
                    className: "lnr lnr-cross-circle"
                  })), e("div", {
                    className: "text-container"
                  }, n))
              }
            }
          }, {
            key: "render",
            value: function() {
              return this.getJSX()
            }
          }]) && r(o.prototype, s), c && r(o, c), Object.defineProperty(o, "prototype", {
            writable: !1
          }), n
        }(l.Component))
    }).call(this, n("hosL").h)
  },
  fsDx: function(e, t, n) {
    "use strict";
    (function(e) {
      function o(e) {
        return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, o(e)
      }

      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }

      function i(e, t) {
        return i = Object.setPrototypeOf || function(e, t) {
          return e.__proto__ = t, e
        }, i(e, t)
      }

      function a(e) {
        var t = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (e) {
            return !1
          }
        }();
        return function() {
          var n, o = c(e);
          if (t) {
            var r = c(this).constructor;
            n = Reflect.construct(o, arguments, r)
          } else n = o.apply(this, arguments);
          return s(this, n)
        }
      }

      function s(e, t) {
        if (t && ("object" === o(t) || "function" == typeof t)) return t;
        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
        return function(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e
        }(e)
      }

      function c(e) {
        return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, c(e)
      }
      n.d(t, "a", (function() {
        return l
      }));
      var l = function(t) {
        function n(e) {
          return l.call(this, e)
        }! function(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(e, "prototype", {
            writable: !1
          }), t && i(e, t)
        }(n, t);
        var o, s, c, l = a(n);
        return o = n, (s = [{
          key: "onClickFirebaseLogin",
          value: function() {
            var t = this;
            this.props.logToAmplitude(COMMONCONSTANTS.GOOGLE_LOGIN_BUTTON_CLICK), TRACK({
              category: COMMONCONSTANTS.AUTH,
              action: COMMONCONSTANTS.GOOGLE_LOGIN_BUTTON_CLICK
            }), this.props.setParentState({
              notification: {
                actionType: COMMONCONSTANTS.BLOCKED_LOADING,
                children: e("div", {
                  className: "google-signup-loader-container"
                }, e("div", {
                  className: "login-text"
                }, "logging you ..."), e("div", {
                  className: "message-text"
                }, e("span", null, "You may be redirected to new browser tab where you will be asked to enter your credentials. This is Chrome browser's behaviour.")), e("div", {
                  className: "non-response-text"
                }, "If you think it's taking too much time, you may close this screen and try again with same/other method."), e("span", {
                  className: "close-button",
                  onClick: function() {
                    t.props.setParentState({
                      notification: null
                    })
                  }
                }, "Close"))
              }
            }), MessagePassing.send({
              key: COMMONCONSTANTS.LOGIN_WITH_GOOGLE,
              value: {}
            })
          }
        }, {
          key: "getHeaderJSX",
          value: function() {
            return this.props.error && "ArtificialLoginSignup/google-login" == this.props.error.code ? e("div", {
              className: "login-error"
            }, "No password associated with this account found. You created your account using 'SIGNUP WITH GOOGLE'.") : this.props.error && "ArtificialLoginSignup/multipleProviders" == this.props.error.code ? e("div", {
              className: "login-error"
            }, "Couldn't get your password association with this account. LOGIN WITH GOOGLE'") : null
          }
        }, {
          key: "render",
          value: function() {
            var t = "",
              n = Utility.isExtension();
            return n && (t = "images/google.png"), e("div", {
              className: "firebase-signup-container"
            }, this.getHeaderJSX(), e("div", {
              className: "button-container",
              onClick: this.onClickFirebaseLogin.bind(this)
            }, e("span", {
              className: "image",
              style: n && {
                backgroundImage: "url(".concat(t, ")")
              }
            }), e("span", {
              className: "text"
            }, "Login / Signup", " With Google Chrome")))
          }
        }]) && r(o.prototype, s), c && r(o, c), Object.defineProperty(o, "prototype", {
          writable: !1
        }), n
      }(n("hosL").Component)
    }).call(this, n("hosL").h)
  },
  "h+mg": function() {},
  hosL: function(e, t, n) {
    "use strict";

    function o(e, t) {
      for (var n in t) e[n] = t[n];
      return e
    }

    function r(e) {
      var t = e.parentNode;
      t && t.removeChild(e)
    }

    function i(e, t, n) {
      var o, r, i, s = arguments,
        c = {};
      for (i in t) "key" == i ? o = t[i] : "ref" == i ? r = t[i] : c[i] = t[i];
      if (arguments.length > 3)
        for (n = [n], i = 3; i < arguments.length; i++) n.push(s[i]);
      if (null != n && (c.children = n), "function" == typeof e && null != e.defaultProps)
        for (i in e.defaultProps) void 0 === c[i] && (c[i] = e.defaultProps[i]);
      return a(e, c, o, r, null)
    }

    function a(e, t, n, o, r) {
      var i = {
        type: e,
        props: t,
        key: n,
        ref: o,
        __k: null,
        __: null,
        __b: 0,
        __e: null,
        __d: void 0,
        __c: null,
        __h: null,
        constructor: void 0,
        __v: null == r ? ++I.__v : r
      };
      return null != I.vnode && I.vnode(i), i
    }

    function s() {
      return {
        current: null
      }
    }

    function c(e) {
      return e.children
    }

    function l(e, t) {
      this.props = e, this.context = t
    }

    function u(e, t) {
      if (null == t) return e.__ ? u(e.__, e.__.__k.indexOf(e) + 1) : null;
      for (var n; t < e.__k.length; t++)
        if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
      return "function" == typeof e.type ? u(e) : null
    }

    function p(e) {
      var t, n;
      if (null != (e = e.__) && null != e.__c) {
        for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
          if (null != (n = e.__k[t]) && null != n.__e) {
            e.__e = e.__c.base = n.__e;
            break
          } return p(e)
      }
    }

    function f(e) {
      (!e.__d && (e.__d = !0) && P.push(e) && !d.__r++ || D !== I.debounceRendering) && ((D = I.debounceRendering) || U)(d)
    }

    function d() {
      for (var e; d.__r = P.length;) e = P.sort((function(e, t) {
        return e.__v.__b - t.__v.__b
      })), P = [], e.some((function(e) {
        var t, n, r, i, a, s;
        e.__d && (a = (i = (t = e).__v).__e, (s = t.__P) && (n = [], (r = o({}, i)).__v = i.__v + 1, C(s, i, r, t.__n, void 0 !== s.ownerSVGElement, null != i.__h ? [a] : null, n, null == a ? u(i) : a, i.__h), b(n, i), i.__e != a && p(i)))
      }))
    }

    function O(e, t, n, o, r, i, s, l, p, f) {
      var d, O, y, h, _, S, T, b = o && o.__k || H,
        v = b.length;
      for (n.__k = [], d = 0; d < t.length; d++)
        if (null != (h = n.__k[d] = null == (h = t[d]) || "boolean" == typeof h ? null : "string" == typeof h || "number" == typeof h ? a(null, h, null, null, h) : Array.isArray(h) ? a(c, {
            children: h
          }, null, null, null) : h.__b > 0 ? a(h.type, h.props, h.key, null, h.__v) : h)) {
          if (h.__ = n, h.__b = n.__b + 1, null === (y = b[d]) || y && h.key == y.key && h.type === y.type) b[d] = void 0;
          else
            for (O = 0; O < v; O++) {
              if ((y = b[O]) && h.key == y.key && h.type === y.type) {
                b[O] = void 0;
                break
              }
              y = null
            }
          C(e, h, y = y || j, r, i, s, l, p, f), _ = h.__e, (O = h.ref) && y.ref != O && (T || (T = []), y.ref && T.push(y.ref, null, h), T.push(O, h.__c || _, h)), null != _ ? (null == S && (S = _), "function" == typeof h.type && null != h.__k && h.__k === y.__k ? h.__d = p = N(h, p, e) : p = m(e, h, y, b, _, p), f || "option" !== n.type ? "function" == typeof n.type && (n.__d = p) : e.value = "") : p && y.__e == p && p.parentNode != e && (p = u(y))
        } for (n.__e = S, d = v; d--;) null != b[d] && ("function" == typeof n.type && null != b[d].__e && b[d].__e == n.__d && (n.__d = u(o, d + 1)), A(b[d], b[d]));
      if (T)
        for (d = 0; d < T.length; d++) g(T[d], T[++d], T[++d])
    }

    function N(e, t, n) {
      var o, r;
      for (o = 0; o < e.__k.length; o++)(r = e.__k[o]) && (r.__ = e, t = "function" == typeof r.type ? N(r, t, n) : m(n, r, r, e.__k, r.__e, t));
      return t
    }

    function y(e, t) {
      return t = t || [], null == e || "boolean" == typeof e || (Array.isArray(e) ? e.some((function(e) {
        y(e, t)
      })) : t.push(e)), t
    }

    function m(e, t, n, o, r, i) {
      var a, s, c;
      if (void 0 !== t.__d) a = t.__d, t.__d = void 0;
      else if (null == n || r != i || null == r.parentNode) e: if (null == i || i.parentNode !== e) e.appendChild(r), a = null;
        else {
          for (s = i, c = 0;
            (s = s.nextSibling) && c < o.length; c += 2)
            if (s == r) break e;
          e.insertBefore(r, i), a = i
        } return void 0 !== a ? a : r.nextSibling
    }

    function h(e, t, n) {
      "-" === t[0] ? e.setProperty(t, n) : e[t] = null == n ? "" : "number" != typeof n || B.test(t) ? n : n + "px"
    }

    function _(e, t, n, o, r) {
      var i;
      e: if ("style" === t)
        if ("string" == typeof n) e.style.cssText = n;
        else {
          if ("string" == typeof o && (e.style.cssText = o = ""), o)
            for (t in o) n && t in n || h(e.style, t, "");
          if (n)
            for (t in n) o && n[t] === o[t] || h(e.style, t, n[t])
        }
      else if ("o" === t[0] && "n" === t[1]) i = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + i] = n, n ? o || e.addEventListener(t, i ? T : S, i) : e.removeEventListener(t, i ? T : S, i);
      else if ("dangerouslySetInnerHTML" !== t) {
        if (r) t = t.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
        else if ("href" !== t && "list" !== t && "form" !== t && "download" !== t && t in e) try {
          e[t] = null == n ? "" : n;
          break e
        } catch (e) {}
        "function" == typeof n || (null != n && (!1 !== n || "a" === t[0] && "r" === t[1]) ? e.setAttribute(t, n) : e.removeAttribute(t))
      }
    }

    function S(e) {
      this.l[e.type + !1](I.event ? I.event(e) : e)
    }

    function T(e) {
      this.l[e.type + !0](I.event ? I.event(e) : e)
    }

    function C(e, t, n, r, i, a, s, u, p) {
      var f, d, N, y, m, h, _, S, T, C, b, g = t.type;
      if (void 0 !== t.constructor) return null;
      null != n.__h && (p = n.__h, u = t.__e = n.__e, t.__h = null, a = [u]), (f = I.__b) && f(t);
      try {
        e: if ("function" == typeof g) {
          if (S = t.props, T = (f = g.contextType) && r[f.__c], C = f ? T ? T.props.value : f.__ : r, n.__c ? _ = (d = t.__c = n.__c).__ = d.__E : ("prototype" in g && g.prototype.render ? t.__c = d = new g(S, C) : (t.__c = d = new l(S, C), d.constructor = g, d.render = M), T && T.sub(d), d.props = S, d.state || (d.state = {}), d.context = C, d.__n = r, N = d.__d = !0, d.__h = []), null == d.__s && (d.__s = d.state), null != g.getDerivedStateFromProps && (d.__s == d.state && (d.__s = o({}, d.__s)), o(d.__s, g.getDerivedStateFromProps(S, d.__s))), y = d.props, m = d.state, N) null == g.getDerivedStateFromProps && null != d.componentWillMount && d.componentWillMount(), null != d.componentDidMount && d.__h.push(d.componentDidMount);
          else {
            if (null == g.getDerivedStateFromProps && S !== y && null != d.componentWillReceiveProps && d.componentWillReceiveProps(S, C), !d.__e && null != d.shouldComponentUpdate && !1 === d.shouldComponentUpdate(S, d.__s, C) || t.__v === n.__v) {
              d.props = S, d.state = d.__s, t.__v !== n.__v && (d.__d = !1), d.__v = t, t.__e = n.__e, t.__k = n.__k, d.__h.length && s.push(d);
              break e
            }
            null != d.componentWillUpdate && d.componentWillUpdate(S, d.__s, C), null != d.componentDidUpdate && d.__h.push((function() {
              d.componentDidUpdate(y, m, h)
            }))
          }
          d.context = C, d.props = S, d.state = d.__s, (f = I.__r) && f(t), d.__d = !1, d.__v = t, d.__P = e, f = d.render(d.props, d.state, d.context), d.state = d.__s, null != d.getChildContext && (r = o(o({}, r), d.getChildContext())), N || null == d.getSnapshotBeforeUpdate || (h = d.getSnapshotBeforeUpdate(y, m)), b = null != f && f.type === c && null == f.key ? f.props.children : f, O(e, Array.isArray(b) ? b : [b], t, n, r, i, a, s, u, p), d.base = t.__e, t.__h = null, d.__h.length && s.push(d), _ && (d.__E = d.__ = null), d.__e = !1
        } else null == a && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = v(n.__e, t, n, r, i, a, s, p);
        (f = I.diffed) && f(t)
      }
      catch (e) {
        t.__v = null, (p || null != a) && (t.__e = u, t.__h = !!p, a[a.indexOf(u)] = null), I.__e(e, t, n)
      }
    }

    function b(e, t) {
      I.__c && I.__c(t, e), e.some((function(t) {
        try {
          e = t.__h, t.__h = [], e.some((function(e) {
            e.call(t)
          }))
        } catch (e) {
          I.__e(e, t.__v)
        }
      }))
    }

    function v(e, t, n, o, i, a, s, c) {
      var l, u, p, f, d = n.props,
        N = t.props,
        y = t.type,
        m = 0;
      if ("svg" === y && (i = !0), null != a)
        for (; m < a.length; m++)
          if ((l = a[m]) && (l === e || (y ? l.localName == y : 3 == l.nodeType))) {
            e = l, a[m] = null;
            break
          } if (null == e) {
        if (null === y) return document.createTextNode(N);
        e = i ? document.createElementNS("http://www.w3.org/2000/svg", y) : document.createElement(y, N.is && N), a = null, c = !1
      }
      if (null === y) d === N || c && e.data === N || (e.data = N);
      else {
        if (a = a && H.slice.call(e.childNodes), u = (d = n.props || j).dangerouslySetInnerHTML, p = N.dangerouslySetInnerHTML, !c) {
          if (null != a)
            for (d = {}, f = 0; f < e.attributes.length; f++) d[e.attributes[f].name] = e.attributes[f].value;
          (p || u) && (p && (u && p.__html == u.__html || p.__html === e.innerHTML) || (e.innerHTML = p && p.__html || ""))
        }
        if (function(e, t, n, o, r) {
            var i;
            for (i in n) "children" === i || "key" === i || i in t || _(e, i, null, n[i], o);
            for (i in t) r && "function" != typeof t[i] || "children" === i || "key" === i || "value" === i || "checked" === i || n[i] === t[i] || _(e, i, t[i], n[i], o)
          }(e, N, d, i, c), p) t.__k = [];
        else if (m = t.props.children, O(e, Array.isArray(m) ? m : [m], t, n, o, i && "foreignObject" !== y, a, s, e.firstChild, c), null != a)
          for (m = a.length; m--;) null != a[m] && r(a[m]);
        c || ("value" in N && void 0 !== (m = N.value) && (m !== e.value || "progress" === y && !m) && _(e, "value", m, d.value, !1), "checked" in N && void 0 !== (m = N.checked) && m !== e.checked && _(e, "checked", m, d.checked, !1))
      }
      return e
    }

    function g(e, t, n) {
      try {
        "function" == typeof e ? e(t) : e.current = t
      } catch (e) {
        I.__e(e, n)
      }
    }

    function A(e, t, n) {
      var o, i, a;
      if (I.unmount && I.unmount(e), (o = e.ref) && (o.current && o.current !== e.__e || g(o, null, t)), n || "function" == typeof e.type || (n = null != (i = e.__e)), e.__e = e.__d = void 0, null != (o = e.__c)) {
        if (o.componentWillUnmount) try {
          o.componentWillUnmount()
        } catch (e) {
          I.__e(e, t)
        }
        o.base = o.__P = null
      }
      if (o = e.__k)
        for (a = 0; a < o.length; a++) o[a] && A(o[a], t, n);
      null != i && r(i)
    }

    function M(e, t, n) {
      return this.constructor(e, n)
    }

    function E(e, t, n) {
      var o, r, a;
      I.__ && I.__(e, t), r = (o = "function" == typeof n) ? null : n && n.__k || t.__k, a = [], C(t, e = (!o && n || t).__k = i(c, null, [e]), r || j, j, void 0 !== t.ownerSVGElement, !o && n ? [n] : r ? null : t.firstChild ? H.slice.call(t.childNodes) : null, a, !o && n ? n : r ? r.__e : t.firstChild, o), b(a, e)
    }

    function k(e, t) {
      E(e, t, k)
    }

    function w(e, t, n) {
      var r, i, s, c = arguments,
        l = o({}, e.props);
      for (s in t) "key" == s ? r = t[s] : "ref" == s ? i = t[s] : l[s] = t[s];
      if (arguments.length > 3)
        for (n = [n], s = 3; s < arguments.length; s++) n.push(c[s]);
      return null != n && (l.children = n), a(e.type, l, r || e.key, i || e.ref, null)
    }

    function L(e, t) {
      var n = {
        __c: t = "__cC" + x++,
        __: e,
        Consumer: function(e, t) {
          return e.children(t)
        },
        Provider: function(e) {
          var n, o;
          return this.getChildContext || (n = [], (o = {})[t] = this, this.getChildContext = function() {
            return o
          }, this.shouldComponentUpdate = function(e) {
            this.props.value !== e.value && n.some(f)
          }, this.sub = function(e) {
            n.push(e);
            var t = e.componentWillUnmount;
            e.componentWillUnmount = function() {
              n.splice(n.indexOf(e), 1), t && t.call(e)
            }
          }), e.children
        }
      };
      return n.Provider.__ = n.Consumer.contextType = n
    }
    n.r(t), n.d(t, "render", (function() {
      return E
    })), n.d(t, "hydrate", (function() {
      return k
    })), n.d(t, "createElement", (function() {
      return i
    })), n.d(t, "h", (function() {
      return i
    })), n.d(t, "Fragment", (function() {
      return c
    })), n.d(t, "createRef", (function() {
      return s
    })), n.d(t, "isValidElement", (function() {
      return R
    })), n.d(t, "Component", (function() {
      return l
    })), n.d(t, "cloneElement", (function() {
      return w
    })), n.d(t, "createContext", (function() {
      return L
    })), n.d(t, "toChildArray", (function() {
      return y
    })), n.d(t, "options", (function() {
      return I
    }));
    var I, R, P, U, D, x, j = {},
      H = [],
      B = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
    I = {
      __e: function(e, t) {
        for (var n, o, r; t = t.__;)
          if ((n = t.__c) && !n.__) try {
            if ((o = n.constructor) && null != o.getDerivedStateFromError && (n.setState(o.getDerivedStateFromError(e)), r = n.__d), null != n.componentDidCatch && (n.componentDidCatch(e), r = n.__d), r) return n.__E = n
          } catch (t) {
            e = t
          }
        throw e
      },
      __v: 0
    }, R = function(e) {
      return null != e && void 0 === e.constructor
    }, l.prototype.setState = function(e, t) {
      var n;
      n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = o({}, this.state), "function" == typeof e && (e = e(o({}, n), this.props)), e && o(n, e), null != e && this.__v && (t && this.__h.push(t), f(this))
    }, l.prototype.forceUpdate = function(e) {
      this.__v && (this.__e = !0, e && this.__h.push(e), f(this))
    }, l.prototype.render = c, P = [], U = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, d.__r = 0, x = 0
  },
  k7tN: function(e, t, n) {
    "use strict";
    (function(e) {
      function o(e) {
        return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, o(e)
      }

      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }

      function i(e, t) {
        return i = Object.setPrototypeOf || function(e, t) {
          return e.__proto__ = t, e
        }, i(e, t)
      }

      function a(e) {
        var t = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (e) {
            return !1
          }
        }();
        return function() {
          var n, o = c(e);
          if (t) {
            var r = c(this).constructor;
            n = Reflect.construct(o, arguments, r)
          } else n = o.apply(this, arguments);
          return s(this, n)
        }
      }

      function s(e, t) {
        if (t && ("object" === o(t) || "function" == typeof t)) return t;
        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
        return function(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e
        }(e)
      }

      function c(e) {
        return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, c(e)
      }
      n.d(t, "a", (function() {
        return l
      }));
      var l = function(t) {
        function n(e) {
          return l.call(this, e)
        }! function(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(e, "prototype", {
            writable: !1
          }), t && i(e, t)
        }(n, t);
        var o, s, c, l = a(n);
        return o = n, (s = [{
          key: "render",
          value: function() {
            var t = Utility.getBenefits();
            return e("div", {
              className: "benefits-container"
            }, e("div", {
              className: "heading"
            }, "As a premium member, you will get loads of benefits like:"), e("div", {
              className: "benefits"
            }, t.map((function(t, n) {
              return e("div", {
                className: "benefit b-".concat(n + 1)
              }, e("span", {
                className: "icon"
              }, e("span", {
                className: "lnr lnr-checkmark-circle"
              })), e("span", {
                className: "text"
              }, e("span", {
                dangerouslySetInnerHTML: {
                  __html: t.text
                }
              })))
            }))))
          }
        }]) && r(o.prototype, s), c && r(o, c), Object.defineProperty(o, "prototype", {
          writable: !1
        }), n
      }(n("hosL").Component)
    }).call(this, n("hosL").h)
  },
  mdyV: function(e, t, n) {
    "use strict";
    n.r(t);
    var o = n("hosL"),
      r = o.h,
      i = o.render,
      a = o.hydrate,
      s = function(e) {
        return e && e.default ? e.default : e
      },
      c = function(e) {
        return "/" === e[e.length - 1] ? e : e + "/"
      };
    if ("function" == typeof s(n("QfWi"))) {
      var l = document.getElementById("preact_root") || document.body.firstElementChild;
      0,
      function() {
        var e = s(n("QfWi")),
          t = {},
          o = document.querySelector('[type="__PREACT_CLI_DATA__"]');
        o && (t = JSON.parse(decodeURI(o.innerHTML)).preRenderData || t);
        var u = {
            preRenderData: t
          },
          p = t.url ? c(t.url) : "",
          f = a && p === c(location.pathname);
        l = (f ? a : i)(r(e, {
          CLI_DATA: u
        }), document.body, l)
      }()
    }
  },
  rIIB: function(e, t, n) {
    "use strict";
    (function(e) {
      function o(e) {
        return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, o(e)
      }

      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }

      function i(e, t) {
        return i = Object.setPrototypeOf || function(e, t) {
          return e.__proto__ = t, e
        }, i(e, t)
      }

      function a(e) {
        var t = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (e) {
            return !1
          }
        }();
        return function() {
          var n, o = c(e);
          if (t) {
            var r = c(this).constructor;
            n = Reflect.construct(o, arguments, r)
          } else n = o.apply(this, arguments);
          return s(this, n)
        }
      }

      function s(e, t) {
        if (t && ("object" === o(t) || "function" == typeof t)) return t;
        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
        return function(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e
        }(e)
      }

      function c(e) {
        return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, c(e)
      }
      n.d(t, "a", (function() {
        return f
      }));
      n("vTnJ");
      var l = n("hosL"),
        u = n("QyV/"),
        p = n("k7tN"),
        f = function(t) {
          function n(e) {
            var t;
            return (t = l.call(this, e)).state = {
              option_1: !1,
              option_2: !1,
              option_3: !1,
              option_1_animation: !1,
              option_2_animation: !1,
              option_3_animation: !1,
              mounted: !1,
              oldUser: !1
            }, t
          }! function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), Object.defineProperty(e, "prototype", {
              writable: !1
            }), t && i(e, t)
          }(n, t);
          var o, s, c, l = a(n);
          return o = n, (s = [{
            key: "onSelectItem",
            value: function(e) {
              var t = {
                option_1_animation: !1,
                option_2_animation: !1,
                option_3_animation: !1
              };
              if (t[e] = !this.state[e], !this.state[e]) switch (e) {
                case "option_1":
                  this.props.logToAmplitude(COMMONCONSTANTS.INSTALL_PAGE_OPTION_1), TRACK({
                    category: COMMONCONSTANTS.ONINSTALLPAGE,
                    action: COMMONCONSTANTS.INSTALL_PAGE_OPTION_1,
                    label: COMMONCONSTANTS.RELEASE_VERSION
                  });
                  break;
                case "option_2":
                  this.props.logToAmplitude(COMMONCONSTANTS.INSTALL_PAGE_OPTION_2), TRACK({
                    category: COMMONCONSTANTS.ONINSTALLPAGE,
                    action: COMMONCONSTANTS.INSTALL_PAGE_OPTION_2,
                    label: COMMONCONSTANTS.RELEASE_VERSION
                  });
                  break;
                case "option_3":
                  this.props.logToAmplitude(COMMONCONSTANTS.INSTALL_PAGE_OPTION_3), TRACK({
                    category: COMMONCONSTANTS.ONINSTALLPAGE,
                    action: COMMONCONSTANTS.INSTALL_PAGE_OPTION_3,
                    label: COMMONCONSTANTS.RELEASE_VERSION
                  })
              }
              this.state[e] || (t[e + "_animation"] = !0), this.setState(t)
            }
          }, {
            key: "onClickBuyLicense",
            value: function() {
              this.props.logToAmplitude(COMMONCONSTANTS.BUY_LICENSE_ON_INSTALL_PAGE_CLICK), TRACK({
                category: COMMONCONSTANTS.ONINSTALLPAGE,
                action: COMMONCONSTANTS.BUY_LICENSE_ON_INSTALL_PAGE_CLICK,
                label: COMMONCONSTANTS.RELEASE_VERSION
              })
            }
          }, {
            key: "onRest",
            value: function(e) {
              var t = this,
                n = {};
              n[e + "_animation"] = !1, this.timeoutId && clearTimeout(this.timeoutId), this.timeoutId = setTimeout((function() {
                t.setState(n)
              }), 3e3)
            }
          }, {
            key: "componentDidMount",
            value: function() {
              var e = this;
              setTimeout((function() {
                e.setState({
                  mounted: !0
                })
              }), 1500), window.localStorage.count && this.setState({
                oldUser: !0
              })
            }
          }, {
            key: "render",
            value: function() {
              var t = Utility.isExtension();
              return e("div", {
                className: "on-installed-container"
              }, e(u.a, {
                userLocalData: this.props.userLocalData,
                logToAmplitude: this.props.logToAmplitude,
                setParentState: this.props.setParentState
              }), e("div", {
                className: "arrow-pointer-container"
              }, e("div", {
                className: "inner-container"
              }, e("span", {
                className: "arrow",
                style: t ? {
                  backgroundImage: "url(images/arrow.png)"
                } : null
              }), e("span", {
                className: "text"
              }, "Click ", e("img", {
                src: "/images/logo.png"
              }), "  icon to open "))), e("div", {
                className: "logo-plus-container"
              }, e("span", {
                className: "logo-plus",
                style: t ? {
                  backgroundImage: "url(images/logo.png)"
                } : null
              })), e("div", {
                className: "installation-successful"
              }, e("div", {
                className: "icon-container ".concat(this.state.mounted ? "show" : "")
              }, e("svg", {
                version: "1.1",
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 130.2 130.2"
              }, e("circle", {
                class: "path circle",
                fill: "none",
                stroke: "#35cd96",
                "stroke-width": "6",
                "stroke-miterlimit": "10",
                cx: "65.1",
                cy: "65.1",
                r: "62.1"
              }), e("polyline", {
                class: "path check",
                fill: "none",
                stroke: "#35cd96",
                "stroke-width": "6",
                "stroke-linecap": "round",
                "stroke-miterlimit": "10",
                points: "100.2,40.2 51.5,88.8 29.8,67.5 "
              }))), e("div", {
                className: "text"
              }, this.state.oldUser ? "Update" : "Installation", " Successful")), !this.state.oldUser && e("div", {
                className: "form-container"
              }, e("div", {
                className: "inner-container"
              }, e("div", {
                className: "heading-text"
              }, "Expectations ?"), e("div", {
                className: "options-container"
              }, e("div", {
                className: "option",
                onClick: this.onSelectItem.bind(this, "option_1")
              }, e("span", {
                className: "option-1 checkbox ".concat(this.state.option_1 ? "selected" : "")
              }, e("span", {
                className: "tick"
              }, "✓")), e("div", {
                className: "text"
              }, "This App will be fast."), this.state.option_1 && this.state.option_1_animation && e(Motion, {
                defaultStyle: {
                  x: 0
                },
                onRest: this.onRest.bind(this, "option_1"),
                style: {
                  x: spring(1, {
                    stiffness: 120,
                    damping: 8
                  })
                }
              }, (function(n) {
                return e("div", {
                  style: {
                    transform: "scale(".concat(n.x, ")")
                  },
                  className: "fast-container option-success-container"
                }, e("div", {
                  className: "arrow-container"
                }, e("span", {
                  className: "arrow-left"
                })), e("div", {
                  className: "main-container"
                }, e("div", {
                  className: "option-heading-text"
                }, " Yes! It is blazing fast!"), e("div", {
                  className: "animation-container"
                }, e("span", {
                  className: "icon",
                  style: t ? {
                    backgroundImage: "url(images/fast.png)"
                  } : null
                }))))
              }))), e("div", {
                className: "option",
                onClick: this.onSelectItem.bind(this, "option_2")
              }, e("span", {
                className: "option-2 checkbox ".concat(this.state.option_2 ? "selected" : "")
              }, e("span", {
                className: "tick"
              }, "✓")), e("div", {
                className: "text"
              }, "This App will be beautiful."), this.state.option_2 && this.state.option_2_animation && e(Motion, {
                defaultStyle: {
                  x: 0
                },
                onRest: this.onRest.bind(this, "option_2"),
                style: {
                  x: spring(1, {
                    stiffness: 120,
                    damping: 8
                  })
                }
              }, (function(n) {
                return e("div", {
                  style: {
                    transform: "scale(".concat(n.x, ")")
                  },
                  className: "beautiful-container option-success-container"
                }, e("div", {
                  className: "arrow-container"
                }, e("span", {
                  className: "arrow-left"
                })), e("div", {
                  className: "main-container"
                }, e("div", {
                  className: "option-heading-text"
                }, " Yes! Most beautiful notes extension on earth!"), e("div", {
                  className: "animation-container"
                }, e("span", {
                  className: "icon",
                  style: t ? {
                    backgroundImage: "url(images/gift.png)"
                  } : null
                }))))
              }))), e("div", {
                className: "option",
                onClick: this.onSelectItem.bind(this, "option_3")
              }, e("span", {
                className: "option-3 checkbox ".concat(this.state.option_3 ? "selected" : "")
              }, e("span", {
                className: "tick"
              }, "✓")), e("div", {
                className: "text"
              }, "This App will be easy to use."), this.state.option_3 && this.state.option_3_animation && e(Motion, {
                defaultStyle: {
                  x: 0
                },
                onRest: this.onRest.bind(this, "option_3"),
                style: {
                  x: spring(1, {
                    stiffness: 120,
                    damping: 8
                  })
                }
              }, (function(n) {
                return e("div", {
                  style: {
                    transform: "scale(".concat(n.x, ")")
                  },
                  className: "easy-container option-success-container"
                }, e("div", {
                  className: "arrow-container"
                }, e("span", {
                  className: "arrow-left"
                })), e("div", {
                  className: "main-container"
                }, e("div", {
                  className: "option-heading-text"
                }, " Yes, a 5 years old can use it!"), e("div", {
                  className: "animation-container"
                }, e("span", {
                  className: "icon",
                  style: t ? {
                    backgroundImage: "url(images/party.png)"
                  } : null
                }))))
              })))))), e("div", {
                className: "pro-features"
              }, e("div", {
                className: "heading"
              }, e("span", {
                className: "pro-icon",
                style: t ? {
                  backgroundImage: "url(images/trophy.png)"
                } : null
              }), e("span", {
                className: "text"
              }, "PREMIUM FEATURES")), e(p.a, null)), e("div", {
                className: "share-container"
              }, e("div", {
                className: "facebook"
              }, e("div", {
                className: "icon"
              })), e("div", {
                className: "twitter"
              }, e("div", {
                className: "icon"
              }))), e("div", {
                className: "help-container"
              }, e("div", {
                className: "heading"
              }, "Help is just an email away ! ", e("br", null), e("br", null), e("small", null, " ", e("small", null, "Contact us : support@ukiv.com "), " "))))
            }
          }]) && r(o.prototype, s), c && r(o, c), Object.defineProperty(o, "prototype", {
            writable: !1
          }), n
        }(l.Component)
    }).call(this, n("hosL").h)
  },
  rcpC: function(e, t, n) {
    "use strict";
    (function(e) {
      function o(e) {
        return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, o(e)
      }

      function r(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
        }
      }

      function i(e, t) {
        return i = Object.setPrototypeOf || function(e, t) {
          return e.__proto__ = t, e
        }, i(e, t)
      }

      function a(e) {
        var t = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (e) {
            return !1
          }
        }();
        return function() {
          var n, o = c(e);
          if (t) {
            var r = c(this).constructor;
            n = Reflect.construct(o, arguments, r)
          } else n = o.apply(this, arguments);
          return s(this, n)
        }
      }

      function s(e, t) {
        if (t && ("object" === o(t) || "function" == typeof t)) return t;
        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
        return function(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e
        }(e)
      }

      function c(e) {
        return c = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, c(e)
      }
      n.d(t, "a", (function() {
        return l
      }));
      var l = function(t) {
        function n(e) {
          var t;
          return (t = l.call(this, e)).state = {
            password: "",
            error: ""
          }, t
        }! function(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), Object.defineProperty(e, "prototype", {
            writable: !1
          }), t && i(e, t)
        }(n, t);
        var o, s, c, l = a(n);
        return o = n, (s = [{
          key: "componentDidMount",
          value: function() {}
        }, {
          key: "onKeyUp",
          value: function(e) {
            13 == e.keyCode && this.onClickSubmit()
          }
        }, {
          key: "onClickSubmit",
          value: function() {
            this.props.logToAmplitude(COMMONCONSTANTS.CREATE_ACCOUNT_SUBMIT_BUTTON), TRACK({
              category: COMMONCONSTANTS.AUTH,
              action: COMMONCONSTANTS.CREATE_ACCOUNT_SUBMIT_BUTTON
            });
            var t = this.state.password;
            if (!t || 0 == t.trim().length) return this.setState({
              error: "ERROR: Please write your password (Atleast 6 characters)."
            });
            t == this.props.data.password ? (MessagePassing.send({
              key: COMMONCONSTANTS.CREATE_ACCOUNT,
              value: {
                email: this.props.data.email,
                password: t
              }
            }), this.props.setParentState({
              notification: {
                actionType: COMMONCONSTANTS.BLOCKED_LOADING,
                children: e("span", null, "Creating account for ", this.props.data.email, " ...")
              }
            })) : this.props.setParentState({
              notification: {
                actionType: COMMONCONSTANTS.NOTIFICATION_WITH_CROSS,
                showType: "error",
                autoClose: !0,
                children: e("span", null, "Password didn't match. Please type again.")
              }
            })
          }
        }, {
          key: "render",
          value: function() {
            var t = this,
              n = this.props.data.email;
            return e("div", {
              className: "again-ask-password auth-small-container"
            }, e("div", {
              className: "back-container"
            }, e("div", {
              className: "back-button",
              onClick: function() {
                t.props.setParentState({
                  notification: null
                })
              }
            }, e("span", {
              className: "lnr lnr-arrow-left"
            }), e("span", {
              className: "text"
            }, "Back"))), e("div", {
              className: "heading-text"
            }, "Creating a new account : Please Re-enter your password."), e("span", {
              className: "error"
            }, this.state.error.length > 0 && e("span", {
              className: "text"
            }, this.state.error)), e("div", {
              className: "input-container"
            }, e("div", {
              className: "email"
            }, n), e("input", {
              onInput: function(e) {
                t.setState({
                  password: e.target.value
                })
              },
              type: "password",
              onKeyUp: this.onKeyUp.bind(this),
              value: this.state.password,
              className: "password",
              placeholder: "Password to create account"
            }), e("div", {
              className: "submit-button",
              onClick: this.onClickSubmit.bind(this)
            }, e("span", {
              className: "create-account"
            }, "Create my account"))))
          }
        }]) && r(o.prototype, s), c && r(o, c), Object.defineProperty(o, "prototype", {
          writable: !1
        }), n
      }(n("hosL").Component)
    }).call(this, n("hosL").h)
  },
  vTnJ: function() {}
});
//# sourceMappingURL=bundle.8cb0f.js.map