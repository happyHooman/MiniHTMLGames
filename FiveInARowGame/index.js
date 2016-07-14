var turn = "x";  //specifies who's turn is now
var table = [
    ["", "", "", "", "", "", "", "",],
    ["", "", "", "", "", "", "", "",],
    ["", "", "", "", "", "", "", "",],
    ["", "", "", "", "", "", "", "",],
    ["", "", "", "", "", "", "", "",],
    ["", "", "", "", "", "", "", "",],
    ["", "", "", "", "", "", "", "",],
    ["", "", "", "", "", "", "", "",],
]; //initialize the grid table

var marked = [];
var props = {
    width: 600,
    height: 600
};


function startGame() {
    myGameArea.start();
}

var myGameArea = {
    canvas: document.createElement("canvas"),
    start: function () {
        this.canvas.width = props.width;
        this.canvas.height = props.height;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        console.log("Click any cell to begin playing the game. Five in a row wins!");
        this.canvas.addEventListener('mousedown', function (e) {
            var x = e.offsetX;
            var y = e.offsetY;
            var width = props.width / 8;
            var height = props.height / 8;
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
    var width = props.width / 8;
    var height = props.height / 8;

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
    // x, y - the coordinates of the current cell
    // n1, n2 - specify the direction (may only have the values "-1", "0" and "1")
    var r = 0;
    if (x + n1 >= 0 && x + n1 < 8 && y + n2 >= 0 && y + n2 < 8) {
        if (table[x + n1][y + n2] == table[x][y]) {
            marked.push([x + n1, y + n2]);
            r++;
            if (r == 4) return r;
            r += checkDirection(x + n1, y + n2, n1, n2)
        }
    }
    return r;
}

function printMarked(winner) {
    var l = marked.length;
    if (winner == "x") {
        for (var i = 0; i < 5; i++) {
            drawX(marked[i][0], marked[i][1], "red");
        }
    }
    if (winner == "o") {
        for (var i = 0; i < 5; i++) {
            drawO(marked[i][0], marked[i][1], "red");
        }
    }
}
function wins(winner) {
    myGameArea.context.lineWidth = 10;
    myGameArea.context.lineCap = "round";
    printMarked(winner);
    turn = "0";
    console.log("Player " + winner.toUpperCase() + " wins!!!");
}
function checkNeighbours(x, y) {
    var c = 1;

    marked = [];
    marked.push([x, y]);

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

    if (c == 5) wins(table[x][y]);
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

function drawX(x, y, color) {
    var width = props.width / 8;
    var height = props.height / 8;
    var ctx = myGameArea.context;
    var posX, posY;

    if (!color) color = "#000";
    ctx.strokeStyle = color;

    posX = x * width + width / 2;
    posY = y * height + height / 2;


    ctx.beginPath();
    ctx.translate(posX, posY);
    ctx.moveTo(-20, -20);
    ctx.lineTo(20, 20);
    ctx.moveTo(20, -20);
    ctx.lineTo(-20, 20);
    ctx.stroke();
    ctx.translate(-posX, -posY);

    table[x][y] = "x";
    console.log("X-mark at cell (" + x + ", " + y + ")");
}

function drawO(x, y, color) {
    var width = props.width / 8;
    var height = props.height / 8;
    var ctx = myGameArea.context;
    var posX, posY;

    if (!color) color = "#000";
    ctx.strokeStyle = color;

    posX = x * width + width / 2;
    posY = y * height + height / 2;

    ctx.beginPath();
    ctx.arc(posX, posY, 25, 0, 2 * Math.PI);
    ctx.stroke();

    table[x][y] = "o";
    console.log("O-mark at cell (" + x + ", " + y + ")");
}