// Store the wallet amount to your local storage with key "amount"
var lstorage = localStorage.getItem('amount') || 0;
console.log(lstorage)
document.querySelector('#wallet').innerText = lstorage;
// console.log(get)
const getAmount = document.querySelector('#add_to_wallet');

getAmount.onclick = () => {
    const enterAmount = document.querySelector('#amount').value;

    const totalAmount = Number(lstorage) + Number(enterAmount);




    localStorage.setItem('amount', totalAmount);

    window.location.reload();
    // localStorage.clear();
}
document.querySelector('#book_movies').addEventListener('click', toMovie);

function toMovie() {
    window.location.href = 'movies.html';
}