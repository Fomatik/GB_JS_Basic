/*
1. Создать функцию, генерирующую шахматную доску. Можно использовать любые html-теги.
Доска должна быть верно разлинована на черные и белые ячейки.
Строки должны нумероваться числами от 1 до 8, столбцы — латинскими буквами A, B, C, D, E, F, G, H.

3. Заполнить созданную таблицу буквами, отвечающими за шахматную фигуру, например К – король, Ф – ферзь и т.п.,
	причем все фигуры должны стоять на своих местах и быть соответственно черными и белыми.*/

// Создаем шахматную доску
function createChessBoard() {
    const board = document.getElementById("chessBoard");
    let isBlack = false;
    const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];

    // Создание ряда с буквами
    const lettersRow = document.createElement("div");
    lettersRow.classList.add("row");

    const lettersFragment = document.createDocumentFragment(); // Документный фрагмент

    for (let i = 0; i < 8; i++) {
        const letterCell = document.createElement("div");
        letterCell.classList.add("letter-cell");
        letterCell.innerText = letters[i];
        lettersFragment.appendChild(letterCell);
    }

    lettersRow.appendChild(lettersFragment);
    board.appendChild(lettersRow);

    // Создание доски
    const boardFragment = document.createDocumentFragment(); // Документный фрагмент

    for (let i = 0; i < 8; i++) {
        const row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < 8; j++) {
            const square = document.createElement("div");
            square.classList.add("square");

            if (isBlack) {
                square.classList.add("black");
            } else {
                square.classList.add("white");
            }

            row.appendChild(square);
            isBlack = !isBlack;
        }

        // Создание ячейки с цифрой
        const numberCell = document.createElement("div");
        numberCell.classList.add("number-cell");
        numberCell.innerText = 8 - i;
        row.insertBefore(numberCell, row.firstChild);

        isBlack = !isBlack;
        boardFragment.appendChild(row);
    }

    board.appendChild(boardFragment);
}


// Создаем фигуры на доске
function createChessPieces() {
    const board = document.getElementById("chessBoard");

    // Массив с информацией о фигурах
    const pieces = [
        "♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜",
        "♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟",
        "", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "",
        "", "", "", "", "", "", "", "",
        "♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙",
        "♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"
    ];

    const piecesFragment = document.createDocumentFragment(); // Документный фрагмент

    for (let i = 0; i < pieces.length; i++) {
        const piece = document.createElement("div");
        piece.classList.add("piece");
        piece.innerHTML = pieces[i];
        piecesFragment.appendChild(piece);
    }

    board.appendChild(piecesFragment);
}

function placeChessPieces() {
    createChessPieces();
    const squares = document.querySelectorAll(".square");
    const pieces = document.querySelectorAll(".piece");

    for (let i = 0; i < squares.length; i++) {
        squares[i].appendChild(pieces[i]);
    }

}
