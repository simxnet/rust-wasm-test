let imports = {};
imports['__wbindgen_placeholder__'] = module.exports;
function notDefined(what) { return () => { throw new Error(`${what} is not defined`); }; }

module.exports.__wbg_random_26e2d782b541ca6b = typeof Math.random == 'function' ? Math.random : notDefined('Math.random');

module.exports.__wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

const path = require('path').join(__dirname, '../pkg/rasm_bg.wasm');
const bytes = require('fs').readFileSync(path);

const wasmModule = new WebAssembly.Module(bytes);
const wasmInstance = new WebAssembly.Instance(wasmModule, imports);
let wasm = wasmInstance.exports;

console.log(wasm.memory)