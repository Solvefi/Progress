const circle = document.querySelector('.progress-bar');
const radius = circle.r.baseVal.value;
const circumference = 2* Math.PI * radius;
const valueInput = document.getElementById('value');
const animateCheckbox = document.getElementById('animate');
const circleProgress = document.querySelector('.circular-progress')
const hideCheckbox = document.getElementById('hide');


circle.style.strokeDasharray = `${circumference} ${circumference}`
circle.style.strokeDashoffset = circumference;



valueInput.addEventListener('change', function() {
    const value = parseInt(valueInput.value) || 0;
    setProgress(value);
});

animateCheckbox.addEventListener('change', function() {
    if (this.checked){
        circle.classList.add('animating')
    } else {
        circle.classList.remove('animating')
    }

});

hideCheckbox.addEventListener('change', function() {
    if (this.checked){
        circleProgress.classList.add('hidden')
    } else {
        circleProgress.classList.remove('hidden')
    }

});

function setProgress (percent){
    const offset = circumference - percent/100 * circumference;
    circle.style.strokeDashoffset = offset;
}
