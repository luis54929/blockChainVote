/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/end-of-stream";
exports.ids = ["vendor-chunks/end-of-stream"];
exports.modules = {

/***/ "(ssr)/./node_modules/end-of-stream/index.js":
/*!*********************************************!*\
  !*** ./node_modules/end-of-stream/index.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var once = __webpack_require__(/*! once */ \"(ssr)/./node_modules/once/once.js\");\n\nvar noop = function() {};\n\nvar isRequest = function(stream) {\n\treturn stream.setHeader && typeof stream.abort === 'function';\n};\n\nvar isChildProcess = function(stream) {\n\treturn stream.stdio && Array.isArray(stream.stdio) && stream.stdio.length === 3\n};\n\nvar eos = function(stream, opts, callback) {\n\tif (typeof opts === 'function') return eos(stream, null, opts);\n\tif (!opts) opts = {};\n\n\tcallback = once(callback || noop);\n\n\tvar ws = stream._writableState;\n\tvar rs = stream._readableState;\n\tvar readable = opts.readable || (opts.readable !== false && stream.readable);\n\tvar writable = opts.writable || (opts.writable !== false && stream.writable);\n\tvar cancelled = false;\n\n\tvar onlegacyfinish = function() {\n\t\tif (!stream.writable) onfinish();\n\t};\n\n\tvar onfinish = function() {\n\t\twritable = false;\n\t\tif (!readable) callback.call(stream);\n\t};\n\n\tvar onend = function() {\n\t\treadable = false;\n\t\tif (!writable) callback.call(stream);\n\t};\n\n\tvar onexit = function(exitCode) {\n\t\tcallback.call(stream, exitCode ? new Error('exited with error code: ' + exitCode) : null);\n\t};\n\n\tvar onerror = function(err) {\n\t\tcallback.call(stream, err);\n\t};\n\n\tvar onclose = function() {\n\t\tprocess.nextTick(onclosenexttick);\n\t};\n\n\tvar onclosenexttick = function() {\n\t\tif (cancelled) return;\n\t\tif (readable && !(rs && (rs.ended && !rs.destroyed))) return callback.call(stream, new Error('premature close'));\n\t\tif (writable && !(ws && (ws.ended && !ws.destroyed))) return callback.call(stream, new Error('premature close'));\n\t};\n\n\tvar onrequest = function() {\n\t\tstream.req.on('finish', onfinish);\n\t};\n\n\tif (isRequest(stream)) {\n\t\tstream.on('complete', onfinish);\n\t\tstream.on('abort', onclose);\n\t\tif (stream.req) onrequest();\n\t\telse stream.on('request', onrequest);\n\t} else if (writable && !ws) { // legacy streams\n\t\tstream.on('end', onlegacyfinish);\n\t\tstream.on('close', onlegacyfinish);\n\t}\n\n\tif (isChildProcess(stream)) stream.on('exit', onexit);\n\n\tstream.on('end', onend);\n\tstream.on('finish', onfinish);\n\tif (opts.error !== false) stream.on('error', onerror);\n\tstream.on('close', onclose);\n\n\treturn function() {\n\t\tcancelled = true;\n\t\tstream.removeListener('complete', onfinish);\n\t\tstream.removeListener('abort', onclose);\n\t\tstream.removeListener('request', onrequest);\n\t\tif (stream.req) stream.req.removeListener('finish', onfinish);\n\t\tstream.removeListener('end', onlegacyfinish);\n\t\tstream.removeListener('close', onlegacyfinish);\n\t\tstream.removeListener('finish', onfinish);\n\t\tstream.removeListener('exit', onexit);\n\t\tstream.removeListener('end', onend);\n\t\tstream.removeListener('error', onerror);\n\t\tstream.removeListener('close', onclose);\n\t};\n};\n\nmodule.exports = eos;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZW5kLW9mLXN0cmVhbS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQSxXQUFXLG1CQUFPLENBQUMsK0NBQU07O0FBRXpCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLDRCQUE0QjtBQUMvQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VuZC1vZi1zdHJlYW0vaW5kZXguanM/OGJiZiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgb25jZSA9IHJlcXVpcmUoJ29uY2UnKTtcblxudmFyIG5vb3AgPSBmdW5jdGlvbigpIHt9O1xuXG52YXIgaXNSZXF1ZXN0ID0gZnVuY3Rpb24oc3RyZWFtKSB7XG5cdHJldHVybiBzdHJlYW0uc2V0SGVhZGVyICYmIHR5cGVvZiBzdHJlYW0uYWJvcnQgPT09ICdmdW5jdGlvbic7XG59O1xuXG52YXIgaXNDaGlsZFByb2Nlc3MgPSBmdW5jdGlvbihzdHJlYW0pIHtcblx0cmV0dXJuIHN0cmVhbS5zdGRpbyAmJiBBcnJheS5pc0FycmF5KHN0cmVhbS5zdGRpbykgJiYgc3RyZWFtLnN0ZGlvLmxlbmd0aCA9PT0gM1xufTtcblxudmFyIGVvcyA9IGZ1bmN0aW9uKHN0cmVhbSwgb3B0cywgY2FsbGJhY2spIHtcblx0aWYgKHR5cGVvZiBvcHRzID09PSAnZnVuY3Rpb24nKSByZXR1cm4gZW9zKHN0cmVhbSwgbnVsbCwgb3B0cyk7XG5cdGlmICghb3B0cykgb3B0cyA9IHt9O1xuXG5cdGNhbGxiYWNrID0gb25jZShjYWxsYmFjayB8fCBub29wKTtcblxuXHR2YXIgd3MgPSBzdHJlYW0uX3dyaXRhYmxlU3RhdGU7XG5cdHZhciBycyA9IHN0cmVhbS5fcmVhZGFibGVTdGF0ZTtcblx0dmFyIHJlYWRhYmxlID0gb3B0cy5yZWFkYWJsZSB8fCAob3B0cy5yZWFkYWJsZSAhPT0gZmFsc2UgJiYgc3RyZWFtLnJlYWRhYmxlKTtcblx0dmFyIHdyaXRhYmxlID0gb3B0cy53cml0YWJsZSB8fCAob3B0cy53cml0YWJsZSAhPT0gZmFsc2UgJiYgc3RyZWFtLndyaXRhYmxlKTtcblx0dmFyIGNhbmNlbGxlZCA9IGZhbHNlO1xuXG5cdHZhciBvbmxlZ2FjeWZpbmlzaCA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmICghc3RyZWFtLndyaXRhYmxlKSBvbmZpbmlzaCgpO1xuXHR9O1xuXG5cdHZhciBvbmZpbmlzaCA9IGZ1bmN0aW9uKCkge1xuXHRcdHdyaXRhYmxlID0gZmFsc2U7XG5cdFx0aWYgKCFyZWFkYWJsZSkgY2FsbGJhY2suY2FsbChzdHJlYW0pO1xuXHR9O1xuXG5cdHZhciBvbmVuZCA9IGZ1bmN0aW9uKCkge1xuXHRcdHJlYWRhYmxlID0gZmFsc2U7XG5cdFx0aWYgKCF3cml0YWJsZSkgY2FsbGJhY2suY2FsbChzdHJlYW0pO1xuXHR9O1xuXG5cdHZhciBvbmV4aXQgPSBmdW5jdGlvbihleGl0Q29kZSkge1xuXHRcdGNhbGxiYWNrLmNhbGwoc3RyZWFtLCBleGl0Q29kZSA/IG5ldyBFcnJvcignZXhpdGVkIHdpdGggZXJyb3IgY29kZTogJyArIGV4aXRDb2RlKSA6IG51bGwpO1xuXHR9O1xuXG5cdHZhciBvbmVycm9yID0gZnVuY3Rpb24oZXJyKSB7XG5cdFx0Y2FsbGJhY2suY2FsbChzdHJlYW0sIGVycik7XG5cdH07XG5cblx0dmFyIG9uY2xvc2UgPSBmdW5jdGlvbigpIHtcblx0XHRwcm9jZXNzLm5leHRUaWNrKG9uY2xvc2VuZXh0dGljayk7XG5cdH07XG5cblx0dmFyIG9uY2xvc2VuZXh0dGljayA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmIChjYW5jZWxsZWQpIHJldHVybjtcblx0XHRpZiAocmVhZGFibGUgJiYgIShycyAmJiAocnMuZW5kZWQgJiYgIXJzLmRlc3Ryb3llZCkpKSByZXR1cm4gY2FsbGJhY2suY2FsbChzdHJlYW0sIG5ldyBFcnJvcigncHJlbWF0dXJlIGNsb3NlJykpO1xuXHRcdGlmICh3cml0YWJsZSAmJiAhKHdzICYmICh3cy5lbmRlZCAmJiAhd3MuZGVzdHJveWVkKSkpIHJldHVybiBjYWxsYmFjay5jYWxsKHN0cmVhbSwgbmV3IEVycm9yKCdwcmVtYXR1cmUgY2xvc2UnKSk7XG5cdH07XG5cblx0dmFyIG9ucmVxdWVzdCA9IGZ1bmN0aW9uKCkge1xuXHRcdHN0cmVhbS5yZXEub24oJ2ZpbmlzaCcsIG9uZmluaXNoKTtcblx0fTtcblxuXHRpZiAoaXNSZXF1ZXN0KHN0cmVhbSkpIHtcblx0XHRzdHJlYW0ub24oJ2NvbXBsZXRlJywgb25maW5pc2gpO1xuXHRcdHN0cmVhbS5vbignYWJvcnQnLCBvbmNsb3NlKTtcblx0XHRpZiAoc3RyZWFtLnJlcSkgb25yZXF1ZXN0KCk7XG5cdFx0ZWxzZSBzdHJlYW0ub24oJ3JlcXVlc3QnLCBvbnJlcXVlc3QpO1xuXHR9IGVsc2UgaWYgKHdyaXRhYmxlICYmICF3cykgeyAvLyBsZWdhY3kgc3RyZWFtc1xuXHRcdHN0cmVhbS5vbignZW5kJywgb25sZWdhY3lmaW5pc2gpO1xuXHRcdHN0cmVhbS5vbignY2xvc2UnLCBvbmxlZ2FjeWZpbmlzaCk7XG5cdH1cblxuXHRpZiAoaXNDaGlsZFByb2Nlc3Moc3RyZWFtKSkgc3RyZWFtLm9uKCdleGl0Jywgb25leGl0KTtcblxuXHRzdHJlYW0ub24oJ2VuZCcsIG9uZW5kKTtcblx0c3RyZWFtLm9uKCdmaW5pc2gnLCBvbmZpbmlzaCk7XG5cdGlmIChvcHRzLmVycm9yICE9PSBmYWxzZSkgc3RyZWFtLm9uKCdlcnJvcicsIG9uZXJyb3IpO1xuXHRzdHJlYW0ub24oJ2Nsb3NlJywgb25jbG9zZSk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdGNhbmNlbGxlZCA9IHRydWU7XG5cdFx0c3RyZWFtLnJlbW92ZUxpc3RlbmVyKCdjb21wbGV0ZScsIG9uZmluaXNoKTtcblx0XHRzdHJlYW0ucmVtb3ZlTGlzdGVuZXIoJ2Fib3J0Jywgb25jbG9zZSk7XG5cdFx0c3RyZWFtLnJlbW92ZUxpc3RlbmVyKCdyZXF1ZXN0Jywgb25yZXF1ZXN0KTtcblx0XHRpZiAoc3RyZWFtLnJlcSkgc3RyZWFtLnJlcS5yZW1vdmVMaXN0ZW5lcignZmluaXNoJywgb25maW5pc2gpO1xuXHRcdHN0cmVhbS5yZW1vdmVMaXN0ZW5lcignZW5kJywgb25sZWdhY3lmaW5pc2gpO1xuXHRcdHN0cmVhbS5yZW1vdmVMaXN0ZW5lcignY2xvc2UnLCBvbmxlZ2FjeWZpbmlzaCk7XG5cdFx0c3RyZWFtLnJlbW92ZUxpc3RlbmVyKCdmaW5pc2gnLCBvbmZpbmlzaCk7XG5cdFx0c3RyZWFtLnJlbW92ZUxpc3RlbmVyKCdleGl0Jywgb25leGl0KTtcblx0XHRzdHJlYW0ucmVtb3ZlTGlzdGVuZXIoJ2VuZCcsIG9uZW5kKTtcblx0XHRzdHJlYW0ucmVtb3ZlTGlzdGVuZXIoJ2Vycm9yJywgb25lcnJvcik7XG5cdFx0c3RyZWFtLnJlbW92ZUxpc3RlbmVyKCdjbG9zZScsIG9uY2xvc2UpO1xuXHR9O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBlb3M7XG4iXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbMF0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/end-of-stream/index.js\n");

/***/ })

};
;