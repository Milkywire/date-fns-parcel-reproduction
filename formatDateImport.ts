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

// Builds successfully and the build gives no runtime error

import { formatDate } from "date-fns";

function renderFormattedDate() {
  let formattedDate: string;
  try {
    formattedDate = formatDate(Date.now(), "yyyy-MM-dd HH:mm:ss");
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
