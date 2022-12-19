//https://teachablemachine.withgoogle.com/models/4-49UlQZ0/model.json
function start() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/4-49UlQZ0/model.json', modelReady);
}
function modelReady() {
    classifier.classify(gotResults);
}
function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML = 'I can hear- ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accurracy- ' + results[0].confidence.toFixed(3)*100;
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";

        img1 = document.getElementById("animal1")
        img2 = document.getElementById("animal2")
        img3 = document.getElementById("animal3")
        img4 = document.getElementById("animal4")

        if (results[0].label == "lion") {
            img1.src = "lion.gif";
            img2.src = "tiger.png";
            img3.src = "elephant.png";
            img4.src = "dog.png";
        }
        else if (results[0].label == "tiger") {
            img1.src = "lion.png";
            img2.src = "tiger.gif";
            img3.src = "elephant.png";
            img4.src = "dog.png";
        }
        else if (results[0].label == "elephant") {
            img1.src = "lion.png";
            img2.src = "tiger.png";
            img3.src = "elephant.gif";
            img4.src = "dog.png";
        }
        else if (results[0].label == "dog") {
            img1.src = "lion.png";
            img2.src = "tiger.png";
            img3.src = "elephant.png";
            img4.src = "dog.gif";

        }

    }

}