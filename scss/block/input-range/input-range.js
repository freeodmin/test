var inputRange = document.querySelectorAll('.input-range');
var i;

for (i = 0; i < inputRange.length; ++i) {
    var inputRangeElm = inputRange[i];
    var inputRangeElmValue = inputRangeElm.value;
    inputRangeElm.closest('.form__field').querySelector('.input-range-count').innerHTML = inputRangeElmValue;
    inputRange.forEach((inputRangeElm) => inputRangeElm.addEventListener('change', (e) => (inputRangeElm.closest('.form__field').querySelector('.input-range-count').innerHTML = e.target.value)));
    inputRange.forEach((inputRangeElm) => inputRangeElm.addEventListener('mousemove', (e) => (inputRangeElm.closest('.form__field').querySelector('.input-range-count').innerHTML = e.target.value)));
}