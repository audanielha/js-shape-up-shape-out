let shapeContainer = document.querySelector(".shape-container");
let rectangleButton = document.querySelector("#rectangleSubmit");
let rectangleHeight = document.querySelector("#rectangleHeight");
let rectangleWidth = document.querySelector("#rectangleWidth");


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

rectangleButton.addEventListener("click", ()=>{
    new Shape(rectangleHeight.value,rectangleWidth.value)
})