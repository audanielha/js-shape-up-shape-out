let shapeContainer = document.querySelector(".shape-container");

// RECTANGLE 
let rectangleButton = document.querySelector("#rectangleSubmit");
let rectangleHeight = document.querySelector("#rectangleHeight");
let rectangleWidth = document.querySelector("#rectangleWidth");

// SQUARE
let squareSubmit = document.querySelector("#squareSubmit");
let squareHeightWidth = document.querySelector("#squareHeightWidth");

// CIRCLE
let circleSubmit = document.querySelector("#circleSubmit");
let circleHeightWidth = document.querySelector("#circleHeightWidth");

// TRIANGLE
let triangleSubmit = document.querySelector("#triangleSubmit");
let triangleHeightWidth = document.querySelector("#triangleHeightWidth");

console.log(circleHeightWidth)

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
        shapeContainer.appendChild(this.div);
    }

    randomNumber(){
        return Math.floor(Math.random() * 400)
    }
}

class Square extends Shape{
    constructor(height){
        super(height, height);
    }
}

class Circle extends Shape{
    constructor(height){
        super(height, height)
        this.div.style.borderRadius="50%"
    }
}

class Triangle extends Shape{
    constructor(x){
        super(x, x)
        this.div.classList.remove("test");
        this.div.style.borderLeft= `${x}px solid transparent`;
        this.div.style.borderRight = `${x}px solid transparent`;
        this.div.style.borderBottom = `${x * 2}px solid #000`;
    }
}
rectangleButton.addEventListener("click", ()=>{
    new Shape(rectangleHeight.value,rectangleWidth.value)
    rectangleHeight.value = " ";
    rectangleWidth.value = " ";
});

squareSubmit.addEventListener("click", (event)=>{
    event.preventDefault();
   new Square(squareHeightWidth.value)
   squareHeightWidth.value = " ";
});

circleSubmit.addEventListener("click", (event)=>{
    event.preventDefault();
   new Circle(circleHeightWidth.value)
   circleHeightWidth.value = " ";
});

triangleSubmit.addEventListener("click", (event)=>{
    event.preventDefault();
   new Triangle(triangleHeightWidth.value)
   triangleHeightWidth.value = " ";
});

