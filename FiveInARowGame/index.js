var turn = "x";
var table = [
    ["", "", "", "", "", "", "", "",],
    ["", "", "", "", "", "", "", "",],
    ["", "", "", "", "", "", "", "",],
    ["", "", "", "", "", "", "", "",],
    ["", "", "", "", "", "", "", "",],
    ["", "", "", "", "", "", "", "",],
    ["", "", "", "", "", "", "", "",],
    ["", "", "", "", "", "", "", "",],
];


function startGame() {
    myGameArea.start();
}

var myGameArea = {
    canvas: document.createElement("canvas"),
    start: function () {
        this.canvas.width = 600;
        this.canvas.height = 600;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        var me = this.canvas;
        console.log("Click any cell to begin playing the game. Five in a row wins!");
        this.canvas.addEventListener('mousedown', function (e) {
            var x = e.offsetX;
            var y = e.offsetY;
            var width = me.width / 8;
            var height = me.height / 8;
            x = Math.floor(x / width);
            y = Math.floor(y / height);
            if (e.button == 0 && (turn == "x" || turn == "o")) {
                if (!table[x][y]) {
                    draw(x, y);
                }
                else console.log("Cell (" + x + ", " + y + ") is busy");
            }
        });
        drawGrid();
    }
};

function drawGrid() {
    var ctx = myGameArea.context;
    ctx.lineWidth = 3;
    var width = 600 / 8;
    var height = 600 / 8;

    //horizontal lines
    for (var i = 0; i < 8; i++) {
        ctx.moveTo(0, i * height);
        ctx.lineTo(8 * width, i * height);
    }

    //vertical lines
    for (var i = 0; i < 8; i++) {
        ctx.moveTo(i * width, 0);
        ctx.lineTo(i * width, 8 * height);
    }

    ctx.stroke();
}


function checkDirection(x, y, n1, n2) {
    var r = 0;
    if (x + n1 >= 0 && x + n1 < 8 && y + n2 >= 0 && y + n2 < 8) {
        if (table[x + n1][y + n2] == table[x][y]) {
            r++;
            if (r == 4) return r;
            r += checkDirection(x + n1, y + n2, n1, n2)
        }
    }
    return r;
}

function wins(x, y) {
    turn = "0";
    console.log("Player " + table[x][y].toUpperCase() + " wins!!!");
}
function checkNeighbours(x, y) {
    var c = 1;

    c += checkDirection(x, y, -1, -1);
    c += checkDirection(x, y, 1, 1);
    if (c >= 5) console.log(c + " - on left diagonal");

    if (c < 5) {
        c = 1;
        c += checkDirection(x, y, 0, -1);
        c += checkDirection(x, y, 0, 1);
        if (c >= 5) console.log(c + " - vertically");
    }
    if (c < 5) {
        c = 1;
        c += checkDirection(x, y, 1, -1);
        c += checkDirection(x, y, -1, 1);
        if (c >= 5) console.log(c + " - on right diagonal");
    }
    if (c < 5) {
        c = 1;
        c += checkDirection(x, y, -1, 0);
        c += checkDirection(x, y, 1, 0);
        if (c >= 5) console.log(c + " - horizontally");
    }

    if (c == 5) wins(x, y);
}

function draw(x, y) {
    if (turn == "x") {
        drawX(x, y);
        turn = "o";
    }
    else if (turn == "o") {
        drawO(x, y);
        turn = "x";
    }
    checkNeighbours(x, y);
}

function drawX(x, y) {
    var width = 600 / 8;
    var height = 600 / 8;
    var ctx = myGameArea.context;
    var posX, posY;

    posX = x * width + width / 2;
    posY = y * height + height / 2;

    ctx.translate(posX, posY);
    ctx.moveTo(-20, -20);
    ctx.lineTo(20, 20);
    ctx.moveTo(20, -20);
    ctx.lineTo(-20, 20);
    ctx.stroke();
    ctx.translate(-posX, -posY);

    table[x][y] = "x";
    // printTable(table);
    console.log("X-mark at cell (" + x + ", " + y + ")");
}

function drawO(x, y) {
    var width = 600 / 8;
    var height = 600 / 8;
    var ctx = myGameArea.context;
    var posX, posY;

    posX = x * width + width / 2;
    posY = y * height + height / 2;

    ctx.beginPath();
    ctx.arc(posX, posY, 25, 0, 2 * Math.PI);
    ctx.stroke();

    table[x][y] = "o";
    // printTable();
    console.log("O-mark at cell (" + x + ", " + y + ")");

}

function printTable() {
    var stringToPrint = "";
    for (var i = 0; i < 8; i++) {
        for (var j = 0; j < 8; j++) {
            stringToPrint += table[j][i] + ", ";
        }
        console.log(stringToPrint);
        stringToPrint = "";
    }
}