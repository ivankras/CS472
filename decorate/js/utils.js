window.onload = function(){
    'use strict';
    
    // Make text bigger
    const biggerButton = document.getElementById('bigger');
    biggerButton.onclick = enlargeText;
    
    function enlargeText() {
        const textarea = document.getElementById('text');
        textarea.classList.replace('small', 'big');
    }

    // Bling
    const blingCB = document.getElementById('bling');
    blingCB.onchange = toggleDecorate;

    function toggleDecorate() {
        const textarea = document.getElementById('text');
        if (blingCB.checked) {
            textarea.classList.add('decorated');
            document.body.classList.add('background-dollar');
        } else {
            textarea.classList.remove('decorated');
            document.body.classList.remove('background-dollar');
        }

    }
};
