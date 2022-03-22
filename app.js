const submitBtn = document.getElementById('submitBtn'),
userRating = document.getElementById('user-rating'),
ratingPage = document.getElementById('rating-page'),
thankyouPage = document.getElementById('thankyou');





submitBtn.addEventListener('click', (e)=> {
    const checked = document.querySelector('input[name="ratings"]:checked');
    if(checked == null) {
        e.preventDefault();
    } else {
        ratio= checked.value;
        // toggle current card page
    ratingPage.classList.add('hidden');

    // toggle success page
    thankyouPage.classList.remove('hidden');
        userRating.innerHTML = ratio;
    }
})