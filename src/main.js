console.clear();

document.addEventListener('DOMContentLoaded', () => {
    console.log(document.location.href);
});

const range = size => Array(size).fill(0).map((_, i) => ++i);
console.log('range(10): ', range(10));