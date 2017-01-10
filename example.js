$(function () {

    // define select editor properties
    var authors = {
        "values": ["Bob", "John", "Alice", "Jane"]
    };
    var occupations = {
        "values": ["Engineer", "Programmer", "Designer",
            "Administrator", "Manager", "Director",
            "Accountant"]
    };
    var statuses = {
        "values": ["In progress", "Completed", "Done", "Todo"]
    };

    // generate data
    var data = [];
    for (var i = 0; i < 10000; ++i) {
        data.push({
            "id": i + 1,
            "created_at": new Date().toDateString(),
            "is_admin": true,
            "status": _.shuffle(statuses.values)[0],
            "body": "The quick, brown fox jumps over a lazy dog.",
            "author": _.shuffle(authors.values)[0],
            "occupation": _.shuffle(occupations.values)[0],
            "title": "Test " + i + Math.round(Math.random() * 1000),
            "count": Math.round(Math.random() * 100)
        });
    }

    // define columns
    var columns = [{
        name: "id",
        type: "int"
    }, {
        name: "is_admin",
        type: "boolean",
        editor: "BooleanEditor",
        display: "admin"
    }, {
        name: "created_at",
        type: "string",
        display: "created at",
        editor: function (grid) {


            return "DateEditor";
        }
    }, {
        name: "author",
        type: "string",
        editor: "SelectEditor",
        editorProps: authors
    }, {
        name: "occupation",
        type: "string",
        editor: "AutocompleteEditor",
        editorProps: occupations
    }, {
        name: "body",
        type: "string",
        editor: "TextareaEditor"
    }, {
        name: "status",
        type: "string",
        editor: "SelectEditor",
        editorProps: statuses
    }];

    // initialize grid
    var options = {
        // add an empty row at the end of grid
        emptyRow: true,
        // enable sortable callbacks
        sortable: false,
        // disable specific keys
        disableKeys: [],
        // move active cell when a row is removed
        moveOnRowRemove: true,
        // skip these cells on duplicate action
        skipOnDuplicate: ["id"],
        // set the initial order of table
        initialSort: {col: "id", order: "asc"},
        selectable: false,
	toolbar: false,
	readonly: true,
	emptyRow:false 
    };



    var grid = $(".sensei-grid-readonly").grid(data, columns, options);
    grid.render();


});
