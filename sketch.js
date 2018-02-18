let training_data = [
    {
        inputs: [0,1],
        targets: [1]
    },
    {
        inputs: [1,0],
        targets: [1]
    },
    {
        inputs: [0,0],
        targets: [0]
    },
    {
        inputs: [1,1],
        targets: [0]
    },
]

function setup() {
    createCanvas(400, 400);
    nn = new NeuralNetwork(2,4,1,0.05);
}

function draw() {
    background(0);
    
    for(let i = 0; i < 10; i++){
        let data = random(training_data);
        nn.train(data.inputs, data.targets);
    }
    
    let res = 10;
    let cols = width/res;
    let rows = height/res;
    
    for(let i = 0; i < cols; i++){
        for(let j = 0; j < rows; j++){
            let x1 = i / cols;
            let x2 = j / rows;
            
            let inputs = [x1, x2];
            let y = nn.query(inputs);
            
            noStroke();
            fill(y * 255);
            rect(i * res, j * res, res, res);
        }
    }
}