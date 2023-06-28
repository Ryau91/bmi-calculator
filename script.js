const imageUrls = [
    "australia.jpg",
    "canada.jpg",
    "france.jpg",
    "germany.jpg",
    "greece.jpg",
    "italy.jpg",
    "portugal.jpg",
    "spain.jpg",
    "turkey.jpg",
    "usa.jpg"
]

const backgroundChanger = document.querySelector(".change-background")
const body = document.querySelector("body")
const metricButton = document.getElementById("metric")
const imperialButton = document.getElementById("imperial")
const heightUnit = document.querySelector(".height-unit")
const weightUnit = document.querySelector(".weight-unit")
const calculateButton = document.querySelector(".calculate-button")
const BMIValue = document.querySelector(".BMI-value")

backgroundChanger.addEventListener('click', e => {
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    const randomImage = imageUrls[randomIndex];
    body.style.backgroundImage = 'url(images/backgrounds/'+randomImage+')';
}); 

calculateButton.addEventListener('click', e => {
    const height = document.querySelector(".height-value").value;
    const weight = document.querySelector(".weight-value").value;
    
    const selectedSystem = document.querySelector('input[name="measurement-system"]:checked').value;
    console.log(typeof selectedSystem);

    let answer;
    if (selectedSystem == "metric") {
        answer = (weight) / ((height / 100)**2)
    } else {
        answer = (weight*703) / ((height)**2)
    }
    BMIValue.innerHTML = answer.toFixed(2);
    
});

metricButton.addEventListener("change", e => {
    heightUnit.innerHTML="cm"
    weightUnit.innerHTML="kg"
})

imperialButton.addEventListener("change", e => {
    heightUnit.innerHTML="in"
    weightUnit.innerHTML="lb"
})