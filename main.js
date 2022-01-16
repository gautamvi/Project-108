function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/jAe08Qect/model.json',modelReady);
    }
    
    function modelReady(){
        classifier.classify(gotResults);
    }

    function gotResults(error,results){
        if(error){
            console.error(error);
        }
        else{
            console.log(results);
            random_r = Math.floor(Math.random()*255)+1;
            random_g = Math.floor(Math.random()*255)+1;
            random_b = Math.floor(Math.random()*255)+1;
            
            document.getElementById("result").innerHTML = "I can hear "+results[0].label;
            document.getElementById("accuracy").innerHTML = "Accuracy : "+(results[0].confidence*100).toFixed(2)+"%";
            document.getElementById("result").style.color = "rgb("+random_r+","+random_g+","+random_b+")";
            document.getElementById("accuracy").style.color = "rgb("+random_r+","+random_g+","+random_b+")";
    
            img1 = document.getElementById("animal");

            if(results[0].label == "Mooing"){
                img1.src = "Cow.png";
            }
            else if(results[0].label == "Barking"){
                img1.src = "Dog.png";
            }
            else if(results[0].label == "Meowing"){
                img1.src = "Cat.png";
            }
            else{
                img1.src = "Ear.png";
            }
        }
    }