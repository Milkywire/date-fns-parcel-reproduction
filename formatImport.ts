/**
 * Gives runtime error on dev server
 * 
 * TypeError: Cannot read properties of undefined (reading 'y')
    at format.mjs:378:21
    at Array.map (<anonymous>)
    at format (format.mjs:367:6)
    at renderFormattedDate (formatImport.ts:10:26)
    at ghM9m.date-fns (formatImport.ts:21:1)
    at newRequire (index.0dd3d9d0.js:71:24)
    at index.0dd3d9d0.js:122:5
    at index.0dd3d9d0.js:145:3
 */

/**
 * Build fails
 * 
 * @parcel/core: node_modules/date-fns/index.mjs does not export 'format'

  /Users/isakstarlander/git/date-fns-parcel-reproduction/formatImport.ts:17:10
    16 | 
  > 17 | import { format } from "date-fns";
  >    |          ^^^^^^
    18 | 
    19 | function renderFormattedDate() {
 */

import { format } from "date-fns";

function renderFormattedDate() {
  let formattedDate: string;
  try {
    formattedDate = format(Date.now(), "yyyy-MM-dd HH:mm:ss");
  } catch (e) {
    console.log("error:", e);
    formattedDate = "error formatting date";
  }
  const div = document.getElementById("paragraph");
  if (div) {
    div.innerHTML = formattedDate;
  }
}

renderFormattedDate();
