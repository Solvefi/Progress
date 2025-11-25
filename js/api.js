const circle = document.querySelector('.progress-bar');
const radius = circle.r.baseVal.value;
const circumference = 2* Math.PI * radius;
const valueInput = document.getElementById('value');

valueInput.addEventListener('change', function() {
    const value = parseInt(valueInput.value) || 0;
    setProgress(value);
});

circle.style.strokeDasharray = `${circumference} ${circumference}`
circle.style.strokeDashoffset = circumference;

function setProgress (percent){
    const offset = circumference - percent/100 * circumference;
    circle.style.strokeDashoffset = offset;
}
