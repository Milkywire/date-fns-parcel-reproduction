// Gives no runtime error, gives no build error

import { format } from "date-fns";

function renderFormattedDate() {
  let formattedDate;
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
