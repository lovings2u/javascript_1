function RefreshTable() {
    console.log("done");
    $("#mytable" ).load( "https://javascript-1-biniprc1.c9users.io/posts #mytable" );
}

$("#refresh-btn").on("click", RefreshTable);
