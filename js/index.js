import {
  getData,
  getTableName,
  getBookId,
  openPreview,
  closePreview,
} from "./../lib/utils.js";

document.addEventListener("DOMContentLoaded", (event) => {
  document.body.innerHTML = `
		<div id="tables"></div>
		<div id="books"></div>
    <div id="preview"></div>
 `;

  const xhr = new XMLHttpRequest();
  xhr.open("GET", "./../data/ebooks.db", true);
  xhr.responseType = "arraybuffer";

  xhr.onload = function (e) {
    const uInt8Array = new Uint8Array(this.response);
    const db = new SQL.Database(uInt8Array);
    const tables = db.exec("SELECT * FROM sqlite_master WHERE type='table'");
    tables[0].values.map((tbl) => {
      if (tbl[2] == "android_metadata" || tbl[2] == "series") return ;
      const tables = document.getElementById("tables");
      const button = document.createElement("button");
      button.setAttribute("class", "table-btn");
      button.innerText = tbl[2];
      button.id = tbl[2];
      tables.appendChild(button);
    });
  };
  xhr.send();

  console.log("DOM fully loaded and parsed");
});

document.body.addEventListener("click", (e) => {
  const bookId = getBookId(e),
    tableName = getTableName(e),
    bookItem = document.getElementById(bookId),
    tableItem = document.getElementById(tableName);

  if (tableName !== "" && tableItem.className == "table-btn")
    getData(tableName);

  if (bookId == "") return;
  bookId == "close-btn" ? closePreview() : openPreview(bookId);
});
