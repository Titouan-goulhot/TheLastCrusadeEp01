/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
var tableauAssociatif = [

 null,
    { //Type 1
        LEFT: "DOWN",
        RIGHT: "DOWN",
        TOP: "DOWN"
    },
     { //Type 2
        LEFT: "RIGHT",
        RIGHT: "LEFT"
    },

     { // Type 3
         TOP: "DOWN"
    },

     { // Type 4
        TOP: "LEFT",
        RIGHT: "DOWN"
    }, 
    { // Type 5
        TOP: "RIGHT",
        LEFT: "DOWN"
    }, 
     { // Type 6 (Comparable au type 2)
        LEFT: "RIGHT",
        RIGHT: "LEFT"
    },
     { // Type 7
        TOP: "DOWN",
        RIGHT: "DOWN"
    },
     {//Type 8
        RIGHT: "DOWN",
        LEFT: "DOWN"
    }, 
    {//Type 9
        TOP: "DOWN",
        LEFT: "DOWN"
    },
     {// Type 10
        TOP: "LEFT"
    }, 
    {//Type 11
        TOP: "RIGHT"
    },
     {//Type 12
        RIGHT: "DOWN"
    },
    {//Type 13
        LEFT: "DOWN"
    }


]
  
var inputs = readline().split(' ');
var W = parseInt(inputs[0]); // number of columns.
var H = parseInt(inputs[1]); // number of rows.
var tableauStockage = []; // tableau dans lequel on va "push" les cases.

//Boucle for pour parcourir le tableau
for (let i = 0; i < H; i++) {
    //var LINE = readline(); // represents a line in the grid and contains W integers. Each integer represents one room of a given type.
    tableauStockage.push(readline().split(" "));
}

var EX = parseInt(readline()); // the coordinate along the X axis of the exit (not useful for this first mission, but must be read).

// game loop
while (true) {
    var inputs = readline().split(' ');
    var XI = parseInt(inputs[0]);
    var YI = parseInt(inputs[1]);
    var POS = inputs[2];

         switch (tableauAssociatif[tableauStockage[YI][XI]][POS]) {
        case 'DOWN':
            YI++;
            break;
        case 'LEFT':
            XI--;
            break;
        case 'RIGHT':
            XI++;
            break;
    }

    // Write an action using console.log()
    // To debug: console.error('Debug messages...');


    // One line containing the X Y coordinates of the room in which you believe Indy will be on the next turn.
    console.log(XI + ' ' + YI);
}
