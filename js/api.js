const circle = document.querySelector('.progress-bar');
const radius = circle.r.baseVal.value;
const circumference = 2* Math.PI * radius;
const valueInput = document.getElementById('value');
const animateChekbox = document.getElementById('animate');
const circleProgress = document.querySelector('.progress-circle')


circle.style.strokeDasharray = `${circumference} ${circumference}`
circle.style.strokeDashoffset = circumference;



valueInput.addEventListener('change', function() {
    const value = parseInt(valueInput.value) || 0;
    setProgress(value);
});

animateChekbox.addEventListener('change', function() {
    if (this.checked){
        circle.classList.add('animating')
    } else {
        circle.classList.remove('animating')
    }

});

function setProgress (percent){
    const offset = circumference - percent/100 * circumference;
    circle.style.strokeDashoffset = offset;
}
