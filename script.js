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

let shapeNameInput = document.querySelector("#shapeNameInput");
let heightInput = document.querySelector("#heightInput");
let widthInput = document.querySelector("#widthInput");
let areaInput = document.querySelector("#areaInput");
let radiusInput = document.querySelector("#radiusInput");
let perimeterInput = document.querySelector("#perimeterInput");

class Shape{
    constructor(height, width){
        this.height = height;
        this.width = width;
        this.div = document.createElement("div");
        this.div.classList = "green";
        this.div.style.display = "block";
        this.div.style.position = "absolute";
        this.div.style.height = `${this.height}px`;
        this.div.style.width = `${this.width}px`;
        this.div.style.left = `${this.randomNumber()}px`;
        this.div.style.top = `${this.randomNumber()}px`;
        shapeContainer.appendChild(this.div);

        this.div.addEventListener("click",()=>{
            this.describe()
        });

        this.div.addEventListener("dblclick", ()=>{
            this.div.remove()
        })
    }

    randomNumber(){
        return Math.floor(Math.random() * 400)
    }
    describe(){
        heightInput.value = `${this.height}`;
        widthInput.value = `${this.width}`;
        radiusInput.value = `N/A`;
        perimeterInput.value = `${this.height * 4}`
    }
}
class Rectangle extends Shape{
    describe(){
        shapeNameInput.value = "Rectangle";
        perimeterInput.value = `${2 * (this.height + this.width)}`
        super.describe()
    }
}
class Square extends Shape{
    constructor(height){
        super(height, height);
        this.div.classList = "red";
    }
    describe(){
        shapeNameInput.value = "Square";
        areaInput.value = `${this.width * this.width}`;
        super.describe()
    }
}

class Circle extends Shape{
    constructor(height){
        super(height, height)
        this.div.classList = "purple";
        this.div.style.borderRadius="50%";
    }
    describe(){
        shapeNameInput.value = "Circle";
        super.describe()
        areaInput.value =`${this.width/2 * this.width/2 * 3.14}`;
        radiusInput.value =`${this.height/2}`;
        perimeterInput.value = `${2 * 3.14 * this.height/2}`
    }
}

class Triangle extends Shape{
    constructor(x){
        super(x, x)
        this.div.classList.remove("green");
        this.div.style.borderLeft= `${x/2}px solid transparent`;
        this.div.style.borderRight = `${x/2}px solid transparent`;
        this.div.style.borderBottom = `${x}px solid yellow`;
    }
    describe(){
        shapeNameInput.value = "Triangle";
        perimeterInput.value =`${(2 * this.height + this.height * Math.sqrt(2)).toFixed(2)}`
        super.describe()
    }
}


rectangleButton.addEventListener("click", ()=>{
    new Rectangle(rectangleHeight.value,rectangleWidth.value)
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

