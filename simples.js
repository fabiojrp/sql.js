const SQL = await initSqlJs();
const fetched = await fetch("musica.db");
const buf = await fetched.arrayBuffer();

const db = new SQL.Database(new Uint8Array(buf));

// Grab the table element
const table = document.querySelector("table");
table.innerHTML = '<tr><th>Id</th><th>Nome</th></tr>';

// Prepare a statement
const stmt = db.prepare("SELECT playlistId as id, Name as name FROM playlists");        
while(stmt.step()) { //
    const row = stmt.getAsObject();
    table.innerHTML += `<tr><td>${row['id']}</td><td>${row['name']}</td></tr>`;
}        