function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/178zjmYCo/model.json", modelReady);
    }
    function modelReady(){
        classifier.classify(gotresults);
    }
    function gotresults(error, results){
     if (error) {
        console.error(error);
    
     } else {
        console.log(results);
        ran_r = Math.floor(Math.random() *255) + 1;
        ran_g = Math.floor(Math.random() *255) + 1;
        ran_b = Math.floor(Math.random() *255) + 1;
        document.getElementById("r_label").innerHTML = 'I can hear -  ' +results[0].label;
        document.getElementById("r_confidence").innerHTML = 'Acuuracy -  ' +(results[0].confidence *100).toFixed(2) + "%";
        document.getElementById("r_label").style.color = "rgb("+ran_r+","+ran_g+","+ran_b+")";
        document.getElementById("r_confidence").style.color = "rgb("+ran_r+","+ran_g+","+ran_b+")";
        
    
        img1 = document.getElementById('a1');
        img2 = document.getElementById('a2');
        img3 = document.getElementById('a3');
        img4 = document.getElementById('a4');


        if (results[0].label  == "Background Noise") {
            img1.src = "lol.jpg";
    
        }else if (results[0].label  == "dog") {
            img1.src = "maxresdefault.png";
        }

}
     }
    