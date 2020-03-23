document.addEventListener('DOMContentLoaded', () => {
    let rateForm = document.getElementById('rate-form');
    let rate1 = document.getElementById('1-star');
    let rate2 = document.getElementById('2-star');
    let rate3 = document.getElementById('3-star');
    let rate4 = document.getElementById('4-star');
    let rate5 = document.getElementById('5-star');
    let rateComment = document.getElementById('content');
    let noRateError = document.getElementById('no-rate-error');
    let noCommentError = document.getElementById('no-comment-error');

    rateForm.addEventListener('submit', (e) => {
        let rate = rate5.checked ? 5 : rate4.checked ? 4 : rate3.checked ? 3 : rate2.checked ? 2 : rate1.checked ? 1 : 0;
        let comment = rateComment.value;
        if (rate > 0) {
            noRateError.classList.add('d-none');
        } else {
            noRateError.classList.remove('d-none');
            e.preventDefault();
            return
        }
        if (rate < 3 && comment.length === 0) {
            noCommentError.classList.remove('d-none');
            e.preventDefault();
        } else {
            noCommentError.classList.add('d-none');
        }
    });
});