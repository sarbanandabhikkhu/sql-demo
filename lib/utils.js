let bookId;

function getData(tbl_name) {

  const xhr = new XMLHttpRequest();

  xhr.open("GET", "./../data/ebooks.db", true);

  xhr.responseType = "arraybuffer";

  xhr.onload = function (e) {

    const uInt8Array = new Uint8Array(this.response);

    const db = new SQL.Database(uInt8Array);

    const table = db.exec(`SELECT * FROM ${tbl_name}`);

    const index =

      tbl_name == "masud_rana" ? 11 : tbl_name == "harry_potter" ? 10 : "";

    const output = document.getElementById("books");

    output.innerHTML = "";

    table[0].values

      .map((book) => {

        const card = document.createElement("div");

        card.innerHTML = `

        	<img src="https://drive.google.com/thumbnail?id=${book[index]}&sz=w420-h600">          <h3>${book[0]}</h3><a href="https://drive.google.com/uc?id=${book[index]}&export=download">Download</a>

          <button class="read-btn" id="${book[index]}">👁️</button>`;

        card.setAttribute("class", "card");

        output.appendChild(card);

      })

      .join("");

    console.log(table[0].columns.map((c) => c));

    console.log(

      table[0].values.map((v) => {

        const o = [];

        v.map((s) => {

          o.push(s);

        });

        return o;

      })

    );

  };

  xhr.send();

}

const getTableName = (e) => {

  console.log(e.target.id);

  return e.target.className == "table-btn" ? e.target.id : "";

};

const getBookId = (e) => {

  return e.target.className == "read-btn"

    ? e.target.id

    : e.target.id == "close-btn"

    ? e.target.id

    : "";

};

function openPreview(id) {

  bookId = id;

  const preview = document.getElementById("preview");

  preview.innerHTML = `<iframe src="https://drive.google.com/file/d/${id}/preview" frameborder="0" allowfullscreen></iframe>

  <button id="close-btn">Close</button>`;

  preview.style.display = "block";

  console.log(`Book "${id}" is opened!`);

}

function closePreview() {

  document.getElementById("preview").style.display = "none";
let bookId;

function getData(tbl_name) {

  const xhr = new XMLHttpRequest();

  xhr.open("GET", "./../data/ebooks.db", true);

  xhr.responseType = "arraybuffer";

  xhr.onload = function (e) {

    const uInt8Array = new Uint8Array(this.response);

    const db = new SQL.Database(uInt8Array);

    const table = db.exec(`SELECT * FROM ${tbl_name}`);

    const index =

      tbl_name == "masud_rana" ? 11 : tbl_name == "harry_potter" ? 10 : "";

    const output = document.getElementById("books");

    output.innerHTML = "";

    table[0].values

      .map((book) => {

        const card = document.createElement("div");

        card.innerHTML = `

        	<img src="https://drive.google.com/thumbnail?id=${book[index]}&sz=w420-h600">

          <h3>${book[0]}</h3><a href="https://drive.google.com/uc?id=${book[index]}&export=download">Download</a>

          <button class="read-btn" id="${book[index]}">👁️</button>`;

        card.setAttribute("class", "card");

        output.appendChild(card);

      })

      .join("");

    console.log(table[0].columns.map((c) => c));

    console.log(

      table[0].values.map((v) => {

        const o = [];

        v.map((s) => {

          o.push(s);

        });

        return o;

      })

    );

  };

  xhr.send();

}

const getTableName = (e) => {

  console.log(e.target.id);

  return e.target.className == "table-btn" ? e.target.id : "";

};

const getBookId = (e) => {

  return e.target.className == "read-btn"

    ? e.target.id

    : e.target.id == "close-btn"

    ? e.target.id

    : "";

};

function openPreview(id) {

  bookId = id;

  const preview = document.getElementById("preview");

  preview.innerHTML = `<iframe src="https://drive.google.com/file/d/${id}/preview" frameborder="0" allowfullscreen></iframe>

  <button id="close-btn">Close</button>`;

  preview.style.display = "block";

  console.log(`Book "${id}" is opened!`);

}

function closePreview() {

  document.getElementById("preview").style.display = "none";

  console.log(`Book "${bookId}" is closed!`);

}

export { getData, getTableName, getBookId, openPreview, closePreview };
  console.log(`Book "${bookId}" is closed!`);

}

export { getData, getTableName, getBookId, openPreview, closePreview };
