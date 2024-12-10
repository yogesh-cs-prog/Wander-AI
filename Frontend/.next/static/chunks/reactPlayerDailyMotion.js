/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["reactPlayerDailyMotion"],{

/***/ "(app-pages-browser)/./node_modules/react-player/lib/players/DailyMotion.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-player/lib/players/DailyMotion.js ***!
  \**************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("var __create = Object.create;\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __getProtoOf = Object.getPrototypeOf;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;\nvar __export = (target, all) => {\n  for (var name in all)\n    __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n  if (from && typeof from === \"object\" || typeof from === \"function\") {\n    for (let key of __getOwnPropNames(from))\n      if (!__hasOwnProp.call(to, key) && key !== except)\n        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n  }\n  return to;\n};\nvar __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(\n  // If the importer is in node compatibility mode or this is not an ESM\n  // file that has been converted to a CommonJS file using a Babel-\n  // compatible transform (i.e. \"__esModule\" has not been set), then set\n  // \"default\" to the CommonJS \"module.exports\" for node compatibility.\n  isNodeMode || !mod || !mod.__esModule ? __defProp(target, \"default\", { value: mod, enumerable: true }) : target,\n  mod\n));\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, \"__esModule\", { value: true }), mod);\nvar __publicField = (obj, key, value) => {\n  __defNormalProp(obj, typeof key !== \"symbol\" ? key + \"\" : key, value);\n  return value;\n};\nvar DailyMotion_exports = {};\n__export(DailyMotion_exports, {\n  default: () => DailyMotion\n});\nmodule.exports = __toCommonJS(DailyMotion_exports);\nvar import_react = __toESM(__webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\"));\nvar import_utils = __webpack_require__(/*! ../utils */ \"(app-pages-browser)/./node_modules/react-player/lib/utils.js\");\nvar import_patterns = __webpack_require__(/*! ../patterns */ \"(app-pages-browser)/./node_modules/react-player/lib/patterns.js\");\nconst SDK_URL = \"https://api.dmcdn.net/all.js\";\nconst SDK_GLOBAL = \"DM\";\nconst SDK_GLOBAL_READY = \"dmAsyncInit\";\nclass DailyMotion extends import_react.Component {\n  constructor() {\n    super(...arguments);\n    __publicField(this, \"callPlayer\", import_utils.callPlayer);\n    __publicField(this, \"onDurationChange\", () => {\n      const duration = this.getDuration();\n      this.props.onDuration(duration);\n    });\n    __publicField(this, \"mute\", () => {\n      this.callPlayer(\"setMuted\", true);\n    });\n    __publicField(this, \"unmute\", () => {\n      this.callPlayer(\"setMuted\", false);\n    });\n    __publicField(this, \"ref\", (container) => {\n      this.container = container;\n    });\n  }\n  componentDidMount() {\n    this.props.onMount && this.props.onMount(this);\n  }\n  load(url) {\n    const { controls, config, onError, playing } = this.props;\n    const [, id] = url.match(import_patterns.MATCH_URL_DAILYMOTION);\n    if (this.player) {\n      this.player.load(id, {\n        start: (0, import_utils.parseStartTime)(url),\n        autoplay: playing\n      });\n      return;\n    }\n    (0, import_utils.getSDK)(SDK_URL, SDK_GLOBAL, SDK_GLOBAL_READY, (DM) => DM.player).then((DM) => {\n      if (!this.container)\n        return;\n      const Player = DM.player;\n      this.player = new Player(this.container, {\n        width: \"100%\",\n        height: \"100%\",\n        video: id,\n        params: {\n          controls,\n          autoplay: this.props.playing,\n          mute: this.props.muted,\n          start: (0, import_utils.parseStartTime)(url),\n          origin: window.location.origin,\n          ...config.params\n        },\n        events: {\n          apiready: this.props.onReady,\n          seeked: () => this.props.onSeek(this.player.currentTime),\n          video_end: this.props.onEnded,\n          durationchange: this.onDurationChange,\n          pause: this.props.onPause,\n          playing: this.props.onPlay,\n          waiting: this.props.onBuffer,\n          error: (event) => onError(event)\n        }\n      });\n    }, onError);\n  }\n  play() {\n    this.callPlayer(\"play\");\n  }\n  pause() {\n    this.callPlayer(\"pause\");\n  }\n  stop() {\n  }\n  seekTo(seconds, keepPlaying = true) {\n    this.callPlayer(\"seek\", seconds);\n    if (!keepPlaying) {\n      this.pause();\n    }\n  }\n  setVolume(fraction) {\n    this.callPlayer(\"setVolume\", fraction);\n  }\n  getDuration() {\n    return this.player.duration || null;\n  }\n  getCurrentTime() {\n    return this.player.currentTime;\n  }\n  getSecondsLoaded() {\n    return this.player.bufferedTime;\n  }\n  render() {\n    const { display } = this.props;\n    const style = {\n      width: \"100%\",\n      height: \"100%\",\n      display\n    };\n    return /* @__PURE__ */ import_react.default.createElement(\"div\", { style }, /* @__PURE__ */ import_react.default.createElement(\"div\", { ref: this.ref }));\n  }\n}\n__publicField(DailyMotion, \"displayName\", \"DailyMotion\");\n__publicField(DailyMotion, \"canPlay\", import_patterns.canPlay.dailymotion);\n__publicField(DailyMotion, \"loopOnEnded\", true);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9yZWFjdC1wbGF5ZXIvbGliL3BsYXllcnMvRGFpbHlNb3Rpb24uanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEVBQThFLDZEQUE2RDtBQUMzSTtBQUNBO0FBQ0EsOEJBQThCLGtDQUFrQztBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDRGQUE0RjtBQUN6SDtBQUNBO0FBQ0E7QUFDQSxtR0FBbUc7QUFDbkc7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUUsOEJBQThCO0FBQ3ZHO0FBQ0E7QUFDQSxvREFBb0Qsa0JBQWtCLGFBQWE7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSwyQkFBMkIsbUJBQU8sQ0FBQyxtRkFBTztBQUMxQyxtQkFBbUIsbUJBQU8sQ0FBQyw4RUFBVTtBQUNyQyxzQkFBc0IsbUJBQU8sQ0FBQyxvRkFBYTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxxQ0FBcUM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksVUFBVTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUVBQXVFLE9BQU8sOERBQThELGVBQWU7QUFDM0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcGxheWVyL2xpYi9wbGF5ZXJzL0RhaWx5TW90aW9uLmpzPzVhNTkiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF9fY3JlYXRlID0gT2JqZWN0LmNyZWF0ZTtcbnZhciBfX2RlZlByb3AgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG52YXIgX19nZXRPd25Qcm9wRGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG52YXIgX19nZXRPd25Qcm9wTmFtZXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbnZhciBfX2dldFByb3RvT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG52YXIgX19oYXNPd25Qcm9wID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbnZhciBfX2RlZk5vcm1hbFByb3AgPSAob2JqLCBrZXksIHZhbHVlKSA9PiBrZXkgaW4gb2JqID8gX19kZWZQcm9wKG9iaiwga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUsIHZhbHVlIH0pIDogb2JqW2tleV0gPSB2YWx1ZTtcbnZhciBfX2V4cG9ydCA9ICh0YXJnZXQsIGFsbCkgPT4ge1xuICBmb3IgKHZhciBuYW1lIGluIGFsbClcbiAgICBfX2RlZlByb3AodGFyZ2V0LCBuYW1lLCB7IGdldDogYWxsW25hbWVdLCBlbnVtZXJhYmxlOiB0cnVlIH0pO1xufTtcbnZhciBfX2NvcHlQcm9wcyA9ICh0bywgZnJvbSwgZXhjZXB0LCBkZXNjKSA9PiB7XG4gIGlmIChmcm9tICYmIHR5cGVvZiBmcm9tID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBmcm9tID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICBmb3IgKGxldCBrZXkgb2YgX19nZXRPd25Qcm9wTmFtZXMoZnJvbSkpXG4gICAgICBpZiAoIV9faGFzT3duUHJvcC5jYWxsKHRvLCBrZXkpICYmIGtleSAhPT0gZXhjZXB0KVxuICAgICAgICBfX2RlZlByb3AodG8sIGtleSwgeyBnZXQ6ICgpID0+IGZyb21ba2V5XSwgZW51bWVyYWJsZTogIShkZXNjID0gX19nZXRPd25Qcm9wRGVzYyhmcm9tLCBrZXkpKSB8fCBkZXNjLmVudW1lcmFibGUgfSk7XG4gIH1cbiAgcmV0dXJuIHRvO1xufTtcbnZhciBfX3RvRVNNID0gKG1vZCwgaXNOb2RlTW9kZSwgdGFyZ2V0KSA9PiAodGFyZ2V0ID0gbW9kICE9IG51bGwgPyBfX2NyZWF0ZShfX2dldFByb3RvT2YobW9kKSkgOiB7fSwgX19jb3B5UHJvcHMoXG4gIC8vIElmIHRoZSBpbXBvcnRlciBpcyBpbiBub2RlIGNvbXBhdGliaWxpdHkgbW9kZSBvciB0aGlzIGlzIG5vdCBhbiBFU01cbiAgLy8gZmlsZSB0aGF0IGhhcyBiZWVuIGNvbnZlcnRlZCB0byBhIENvbW1vbkpTIGZpbGUgdXNpbmcgYSBCYWJlbC1cbiAgLy8gY29tcGF0aWJsZSB0cmFuc2Zvcm0gKGkuZS4gXCJfX2VzTW9kdWxlXCIgaGFzIG5vdCBiZWVuIHNldCksIHRoZW4gc2V0XG4gIC8vIFwiZGVmYXVsdFwiIHRvIHRoZSBDb21tb25KUyBcIm1vZHVsZS5leHBvcnRzXCIgZm9yIG5vZGUgY29tcGF0aWJpbGl0eS5cbiAgaXNOb2RlTW9kZSB8fCAhbW9kIHx8ICFtb2QuX19lc01vZHVsZSA/IF9fZGVmUHJvcCh0YXJnZXQsIFwiZGVmYXVsdFwiLCB7IHZhbHVlOiBtb2QsIGVudW1lcmFibGU6IHRydWUgfSkgOiB0YXJnZXQsXG4gIG1vZFxuKSk7XG52YXIgX190b0NvbW1vbkpTID0gKG1vZCkgPT4gX19jb3B5UHJvcHMoX19kZWZQcm9wKHt9LCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KSwgbW9kKTtcbnZhciBfX3B1YmxpY0ZpZWxkID0gKG9iaiwga2V5LCB2YWx1ZSkgPT4ge1xuICBfX2RlZk5vcm1hbFByb3Aob2JqLCB0eXBlb2Yga2V5ICE9PSBcInN5bWJvbFwiID8ga2V5ICsgXCJcIiA6IGtleSwgdmFsdWUpO1xuICByZXR1cm4gdmFsdWU7XG59O1xudmFyIERhaWx5TW90aW9uX2V4cG9ydHMgPSB7fTtcbl9fZXhwb3J0KERhaWx5TW90aW9uX2V4cG9ydHMsIHtcbiAgZGVmYXVsdDogKCkgPT4gRGFpbHlNb3Rpb25cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBfX3RvQ29tbW9uSlMoRGFpbHlNb3Rpb25fZXhwb3J0cyk7XG52YXIgaW1wb3J0X3JlYWN0ID0gX190b0VTTShyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIGltcG9ydF91dGlscyA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbnZhciBpbXBvcnRfcGF0dGVybnMgPSByZXF1aXJlKFwiLi4vcGF0dGVybnNcIik7XG5jb25zdCBTREtfVVJMID0gXCJodHRwczovL2FwaS5kbWNkbi5uZXQvYWxsLmpzXCI7XG5jb25zdCBTREtfR0xPQkFMID0gXCJETVwiO1xuY29uc3QgU0RLX0dMT0JBTF9SRUFEWSA9IFwiZG1Bc3luY0luaXRcIjtcbmNsYXNzIERhaWx5TW90aW9uIGV4dGVuZHMgaW1wb3J0X3JlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgX19wdWJsaWNGaWVsZCh0aGlzLCBcImNhbGxQbGF5ZXJcIiwgaW1wb3J0X3V0aWxzLmNhbGxQbGF5ZXIpO1xuICAgIF9fcHVibGljRmllbGQodGhpcywgXCJvbkR1cmF0aW9uQ2hhbmdlXCIsICgpID0+IHtcbiAgICAgIGNvbnN0IGR1cmF0aW9uID0gdGhpcy5nZXREdXJhdGlvbigpO1xuICAgICAgdGhpcy5wcm9wcy5vbkR1cmF0aW9uKGR1cmF0aW9uKTtcbiAgICB9KTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwibXV0ZVwiLCAoKSA9PiB7XG4gICAgICB0aGlzLmNhbGxQbGF5ZXIoXCJzZXRNdXRlZFwiLCB0cnVlKTtcbiAgICB9KTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwidW5tdXRlXCIsICgpID0+IHtcbiAgICAgIHRoaXMuY2FsbFBsYXllcihcInNldE11dGVkXCIsIGZhbHNlKTtcbiAgICB9KTtcbiAgICBfX3B1YmxpY0ZpZWxkKHRoaXMsIFwicmVmXCIsIChjb250YWluZXIpID0+IHtcbiAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgIH0pO1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMucHJvcHMub25Nb3VudCAmJiB0aGlzLnByb3BzLm9uTW91bnQodGhpcyk7XG4gIH1cbiAgbG9hZCh1cmwpIHtcbiAgICBjb25zdCB7IGNvbnRyb2xzLCBjb25maWcsIG9uRXJyb3IsIHBsYXlpbmcgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgWywgaWRdID0gdXJsLm1hdGNoKGltcG9ydF9wYXR0ZXJucy5NQVRDSF9VUkxfREFJTFlNT1RJT04pO1xuICAgIGlmICh0aGlzLnBsYXllcikge1xuICAgICAgdGhpcy5wbGF5ZXIubG9hZChpZCwge1xuICAgICAgICBzdGFydDogKDAsIGltcG9ydF91dGlscy5wYXJzZVN0YXJ0VGltZSkodXJsKSxcbiAgICAgICAgYXV0b3BsYXk6IHBsYXlpbmdcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAoMCwgaW1wb3J0X3V0aWxzLmdldFNESykoU0RLX1VSTCwgU0RLX0dMT0JBTCwgU0RLX0dMT0JBTF9SRUFEWSwgKERNKSA9PiBETS5wbGF5ZXIpLnRoZW4oKERNKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuY29udGFpbmVyKVxuICAgICAgICByZXR1cm47XG4gICAgICBjb25zdCBQbGF5ZXIgPSBETS5wbGF5ZXI7XG4gICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXIodGhpcy5jb250YWluZXIsIHtcbiAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgICB2aWRlbzogaWQsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIGNvbnRyb2xzLFxuICAgICAgICAgIGF1dG9wbGF5OiB0aGlzLnByb3BzLnBsYXlpbmcsXG4gICAgICAgICAgbXV0ZTogdGhpcy5wcm9wcy5tdXRlZCxcbiAgICAgICAgICBzdGFydDogKDAsIGltcG9ydF91dGlscy5wYXJzZVN0YXJ0VGltZSkodXJsKSxcbiAgICAgICAgICBvcmlnaW46IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4sXG4gICAgICAgICAgLi4uY29uZmlnLnBhcmFtc1xuICAgICAgICB9LFxuICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICBhcGlyZWFkeTogdGhpcy5wcm9wcy5vblJlYWR5LFxuICAgICAgICAgIHNlZWtlZDogKCkgPT4gdGhpcy5wcm9wcy5vblNlZWsodGhpcy5wbGF5ZXIuY3VycmVudFRpbWUpLFxuICAgICAgICAgIHZpZGVvX2VuZDogdGhpcy5wcm9wcy5vbkVuZGVkLFxuICAgICAgICAgIGR1cmF0aW9uY2hhbmdlOiB0aGlzLm9uRHVyYXRpb25DaGFuZ2UsXG4gICAgICAgICAgcGF1c2U6IHRoaXMucHJvcHMub25QYXVzZSxcbiAgICAgICAgICBwbGF5aW5nOiB0aGlzLnByb3BzLm9uUGxheSxcbiAgICAgICAgICB3YWl0aW5nOiB0aGlzLnByb3BzLm9uQnVmZmVyLFxuICAgICAgICAgIGVycm9yOiAoZXZlbnQpID0+IG9uRXJyb3IoZXZlbnQpXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sIG9uRXJyb3IpO1xuICB9XG4gIHBsYXkoKSB7XG4gICAgdGhpcy5jYWxsUGxheWVyKFwicGxheVwiKTtcbiAgfVxuICBwYXVzZSgpIHtcbiAgICB0aGlzLmNhbGxQbGF5ZXIoXCJwYXVzZVwiKTtcbiAgfVxuICBzdG9wKCkge1xuICB9XG4gIHNlZWtUbyhzZWNvbmRzLCBrZWVwUGxheWluZyA9IHRydWUpIHtcbiAgICB0aGlzLmNhbGxQbGF5ZXIoXCJzZWVrXCIsIHNlY29uZHMpO1xuICAgIGlmICgha2VlcFBsYXlpbmcpIHtcbiAgICAgIHRoaXMucGF1c2UoKTtcbiAgICB9XG4gIH1cbiAgc2V0Vm9sdW1lKGZyYWN0aW9uKSB7XG4gICAgdGhpcy5jYWxsUGxheWVyKFwic2V0Vm9sdW1lXCIsIGZyYWN0aW9uKTtcbiAgfVxuICBnZXREdXJhdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wbGF5ZXIuZHVyYXRpb24gfHwgbnVsbDtcbiAgfVxuICBnZXRDdXJyZW50VGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5wbGF5ZXIuY3VycmVudFRpbWU7XG4gIH1cbiAgZ2V0U2Vjb25kc0xvYWRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5wbGF5ZXIuYnVmZmVyZWRUaW1lO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRpc3BsYXkgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgc3R5bGUgPSB7XG4gICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxuICAgICAgZGlzcGxheVxuICAgIH07XG4gICAgcmV0dXJuIC8qIEBfX1BVUkVfXyAqLyBpbXBvcnRfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgc3R5bGUgfSwgLyogQF9fUFVSRV9fICovIGltcG9ydF9yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyByZWY6IHRoaXMucmVmIH0pKTtcbiAgfVxufVxuX19wdWJsaWNGaWVsZChEYWlseU1vdGlvbiwgXCJkaXNwbGF5TmFtZVwiLCBcIkRhaWx5TW90aW9uXCIpO1xuX19wdWJsaWNGaWVsZChEYWlseU1vdGlvbiwgXCJjYW5QbGF5XCIsIGltcG9ydF9wYXR0ZXJucy5jYW5QbGF5LmRhaWx5bW90aW9uKTtcbl9fcHVibGljRmllbGQoRGFpbHlNb3Rpb24sIFwibG9vcE9uRW5kZWRcIiwgdHJ1ZSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/react-player/lib/players/DailyMotion.js\n"));

/***/ })

}]);