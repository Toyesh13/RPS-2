class Form{
    constructor(){
        this.message = createElement("h2", 'Hi, Please select the level');
        this.Very_easy1 = createButton("Very Easy");
        this.Easy1 = createButton("Easy");
        this.Normal1 = createButton("Normal");
        this.Hard1 = createButton("Hard");
        this.Very_hard1 = createButton("Very Hard");
        this.Extreme1 = createButton("Extreme");
        this.veP = false
    }

    setElementsPosition() {
        this.message.position(width/2- 150, 40);
        this.Extreme1.position(width/2 - 100, height - 70);
        this.Very_hard1.position(width/2 - 100,  this.Extreme1.y - height/8.44);
        this.Hard1.position(width/2 - 100,  this.Very_hard1.y - height/8.44);
        this.Normal1.position(width/2 - 100,  this.Hard1.y - height/8.44);
        this.Easy1.position(width/2 - 100,  this.Normal1.y - height/8.44);
        this.Very_easy1.position(width/2 - 100,  this.Easy1.y - height/8.44);
    }

    setElementsClass() {
        this.message.class("msgtext");
        this.Very_easy1.class("customButton");
        this.Easy1.class("customButton");
        this.Normal1.class("customButton")
        this.Hard1.class("customButton")
        this.Very_hard1.class("customButton")
        this.Extreme1.class("customButton")
    }

    handleMousePressed() {
        this.Very_easy1.mousePressed(() => {
            this.veP = true
            very_easy = new Very_Easy
            very_easy.start()
            this.hide()
        })
        this.Easy1.mousePressed(() => {
            easy = new Easy
        })
        this.Normal1.mousePressed(() => {
            normal = new Normal
        })
        this.Hard1.mousePressed(() => {
            hard = new Hard
        })
        this.Very_hard1.mousePressed(() => {
            very_hard = new Very_Hard
        })
        this.Extreme1.mousePressed(() => {
          extreme = new Extreme  
        })
    }

    hide() {
        this.message.hide()
        this.Very_easy1.hide()
        this.Easy1.hide()
        this.Normal1.hide()
        this.Hard1.hide()
        this.Very_hard1.hide()
        this.Extreme1.hide()
    }

    display() {
        this.setElementsPosition()
        this.setElementsClass()
        this.handleMousePressed()
    }
}