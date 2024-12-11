let shapeContainer = document.querySelector(".shape-container");

// RECTANGLE 
let rectangleButton = document.querySelector("#rectangleSubmit");
let rectangleHeight = document.querySelector("#rectangleHeight");
let rectangleWidth = document.querySelector("#rectangleWidth");

// SQUARE
let squareSubmit = document.querySelector("#squareSubmit");
let squareHeightWidth = document.querySelector("#squareHeightWidth");



class Shape{
    constructor(height, width){
        this.height = height;
        this.width = width;
        this.div = document.createElement("div");
        this.div.classList = "test";
        this.div.style.display = "block";
        this.div.style.position = "absolute";
        this.div.style.height = `${this.height}px`;
        this.div.style.width = `${this.width}px`;
        this.div.style.left = `${this.randomNumber()}px`;
        this.div.style.top = `${this.randomNumber()}px`;
        shapeContainer.appendChild(this.div)
    }

    randomNumber(){
        return Math.floor(Math.random() * 400)
    }
}

class Square extends Shape{
    constructor(size){
        super(size, size)
    }
}

rectangleButton.addEventListener("click", ()=>{
    new Shape(rectangleHeight.value,rectangleWidth.value)
    rectangleHeight.value = " ";
    rectangleWidth.value = " ";
})

squareSubmit.addEventListener("click", ()=>{
    new Square(squareHeightWidth.value);
})