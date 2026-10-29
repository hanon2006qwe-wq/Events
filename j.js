const colors = ['#f1c40f', '#e74c3c', '#2ecc71', '#9b59b6', '#f39c12', '#1abc9c'];
let colorIndex = 0;
document.getElementById('btnColor').addEventListener('click', () => {
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
});

document.getElementById('btnMessage').addEventListener('click', () => {
    document.getElementById('msgDisplay').textContent = "أهلاً بك في ساحة الأحداث التفاعلية!";
});

let count = 0;
document.getElementById('btnCounter').addEventListener('click', () => {
    count++;
    document.getElementById('countVal').textContent = count;
});

const textInput = document.getElementById('textInput');
const liveText = document.getElementById('liveText');
const charCount = document.getElementById('charCount');
textInput.addEventListener('input', (e) => {
    liveText.textContent = e.target.value;
    charCount.textContent = e.target.value.length;
});

const mouseBox = document.getElementById('mouseBox');
mouseBox.addEventListener('mouseenter', () => {
    mouseBox.textContent = "دخل الماوس!";
});
mouseBox.addEventListener('mouseleave', () => {
    mouseBox.textContent = "المحتوى الأصلي";
});
mouseBox.addEventListener('click', () => {
    if (mouseBox.style.backgroundColor === 'rgb(230, 126, 34)') {
        mouseBox.style.backgroundColor = '#3498db';
        mouseBox.style.borderRadius = '0px';
    } else {
        mouseBox.style.backgroundColor = '#e67e22';
        mouseBox.style.borderRadius = '15px';
    }
});

document.addEventListener('keydown', (e) => {
    document.getElementById('keyDisplay').textContent = e.key === ' ' ? 'المسافة (Spacebar)' : e.key;
});