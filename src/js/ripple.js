import $ from 'jquery';

export default function Ripple() {
console.log("shit");
  $(document).ready(function (jQuery) {
    console.log("shit");
    const target = document.querySelectorAll('.ripple');
    target.forEach(btn => {
      btn.addEventListener('click', function(e) {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;
        console.log("shit");
        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        this.appendChild(ripples);
        setTimeout(() => {
          ripples.remove()
        }, 1000);
      })
    });
  });
}
