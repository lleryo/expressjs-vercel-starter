"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// app/src/lib/config/env.ts
var env_exports = {};
__export(env_exports, {
  AWS_ACCESS_KEY_ID: () => AWS_ACCESS_KEY_ID,
  AWS_REGION: () => AWS_REGION,
  AWS_SECRET_ACCESS_KEY: () => AWS_SECRET_ACCESS_KEY,
  SANITY_API_VERSION: () => SANITY_API_VERSION,
  SANITY_DATASET: () => SANITY_DATASET,
  SANITY_PROJECT_ID: () => SANITY_PROJECT_ID,
  SANITY_SECRET_TOKEN: () => SANITY_SECRET_TOKEN
});
module.exports = __toCommonJS(env_exports);
var import_dotenv = __toESM(require("dotenv"));
import_dotenv.default.config({
  path: ".env"
});
var AWS_ACCESS_KEY_ID = String(process.env.AWS_ACCESS_KEY_ID);
if (!AWS_ACCESS_KEY_ID) {
  throw new Error("AWS_ACCESS_KEY_ID is required in the environment variables.");
}
var AWS_SECRET_ACCESS_KEY = String(process.env.AWS_SECRET_ACCESS_KEY);
if (!AWS_SECRET_ACCESS_KEY) {
  throw new Error("AWS_SECRET_ACCESS_KEY is required in the environment variables.");
}
var AWS_REGION = String(process.env.AWS_REGION);
if (!AWS_REGION) {
  throw new Error("AWS_REGION is required in the environment variables.");
}
var SANITY_SECRET_TOKEN = String(process.env.SANITY_SECRET_TOKEN);
if (!SANITY_SECRET_TOKEN) {
  throw new Error("SANITY_SECRET_TOKEN is required in the environment variables.");
}
var SANITY_API_VERSION = String(process.env.SANITY_API_VERSION);
if (!SANITY_API_VERSION) {
  throw new Error("SANITY_API_VERSION is required in the environment variables.");
}
var SANITY_PROJECT_ID = String(process.env.SANITY_PROJECT_ID);
if (!SANITY_PROJECT_ID) {
  throw new Error("SANITY_PROJECT_ID is required in the environment variables.");
}
var SANITY_DATASET = String(process.env.SANITY_DATASET);
if (!SANITY_DATASET) {
  throw new Error("SANITY_DATASET is required in the environment variables.");
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AWS_ACCESS_KEY_ID,
  AWS_REGION,
  AWS_SECRET_ACCESS_KEY,
  SANITY_API_VERSION,
  SANITY_DATASET,
  SANITY_PROJECT_ID,
  SANITY_SECRET_TOKEN
});
