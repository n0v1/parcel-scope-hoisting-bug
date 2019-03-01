# For debugging Parcel --experimental-scope-hoisting bug

## Usage

* Install dependencies by running `npm install`.
* `npm run prod`, then visit [http://127.0.0.1:4321](http://127.0.0.1:4321/): no console errors
* `npm run prod:hoist` throws this error:

```bash
�  Unexpected token, expected ";" (2:19)
    at Parser.raise (/c/_devel/git/parcel-scope-hoisting-bug/node_modules/@babel/parser/lib/index.js:3831:17)
    at Parser.unexpected (/c/_devel/git/parcel-scope-hoisting-bug/node_modules/@babel/parser/lib/index.js:5143:16)
    at Parser.semicolon (/c/_devel/git/parcel-scope-hoisting-bug/node_modules/@babel/parser/lib/index.js:5131:40)
    at Parser.parseVarStatement (/c/_devel/git/parcel-scope-hoisting-bug/node_modules/@babel/parser/lib/index.js:7716:12)
    at Parser.parseStatementContent (/c/_devel/git/parcel-scope-hoisting-bug/node_modules/@babel/parser/lib/index.js:7310:21)
    at Parser.parseStatement (/c/_devel/git/parcel-scope-hoisting-bug/node_modules/@babel/parser/lib/index.js:7243:17)
    at Parser.parseBlockOrModuleBlockBody (/c/_devel/git/parcel-scope-hoisting-bug/node_modules/@babel/parser/lib/index.js:7819:25)
    at Parser.parseBlockBody (/c/_devel/git/parcel-scope-hoisting-bug/node_modules/@babel/parser/lib/index.js:7806:10)
    at Parser.parseTopLevel (/c/_devel/git/parcel-scope-hoisting-bug/node_modules/@babel/parser/lib/index.js:7181:10)
    at Parser.parse (/c/_devel/git/parcel-scope-hoisting-bug/node_modules/@babel/parser/lib/index.js:8669:17)
    at Object.parse (/c/_devel/git/parcel-scope-hoisting-bug/node_modules/@babel/parser/lib/index.js:10669:38)
    at JSConcatPackager.parse (/c/_devel/git/parcel-scope-hoisting-bug/node_modules/parcel-bundler/src/packagers/JSConcatPackager.js:345:23)
    at JSConcatPackager.addDeps (/c/_devel/git/parcel-scope-hoisting-bug/node_modules/parcel-bundler/src/packagers/JSConcatPackager.js:235:25)
    at JSConcatPackager.addDeps (/c/_devel/git/parcel-scope-hoisting-bug/node_modules/parcel-bundler/src/packagers/JSConcatPackager.js:223:27)
    at JSConcatPackager.end (/c/_devel/git/parcel-scope-hoisting-bug/node_modules/parcel-bundler/src/packagers/JSConcatPackager.js:441:36)
    at Bundle._package (/c/_devel/git/parcel-scope-hoisting-bug/node_modules/parcel-bundler/src/Bundle.js:199:20)
```

This is the input that causes this error:

```javascript
var $TC2$exports={};$parcel$require("TC+2","./SvgIcon.vue"),$parcel$require("TC+2","./Simple.vue"),$parcel$require("TC+2","./Ref.vue");var $TC2$export$default={name:"App",components:{"svg-icon":$TC2$import$SvgIcon,simple:$TC2$import$Simple,ref:$TC2$import$Ref}};$TC2$exports.default=$TC2$export$default;
            var $TC+2$exports = {};
          
      if (typeof $TC+2$exports === \'function\') {
        $TC+2$exports = $TC+2$exports.options;
      }
    
        /* template */
        Object.assign($TC+2$exports, (function () {
          var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'div\',[_c(\'simple\'),_vm._v(" "),_c(\'ref\'),_vm._v(" Before Icon"),_c(\'svg-icon\'),_vm._v("After Icon ")],1)}
var staticRenderFns = []

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: null,
            functional: undefined
          };
        })());
      
```

The variable name `$TC+2$exports` is not valid because of the + sign in it.

* rename `App.vue` to `App123.vue` and change the import in `src/js/index.js`
* now run `npm run prod:hoist` again, which should work now (why?), visit [http://127.0.0.1:4321](http://127.0.0.1:4321/): errors in console and icon is not displayed