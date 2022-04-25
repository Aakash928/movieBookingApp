// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time
// Title,
// Poster
var get;
refreash = () => {
        get = localStorage.getItem('amount') || 0;
        document.querySelector('#wallet').innerText = get;
    }
    // const imgLink = `https://image.tmdb.org/t/p/w500/`
refreash()

const getmovie = JSON.parse(localStorage.getItem('movie')) || [];
const box = document.createElement('div');
const name = document.createElement('h2');
name.innerText = getmovie.Title;
const img = document.createElement('img');
img.src = getmovie.Poster;
box.append(name, img)
document.querySelector('#movie').append(box);



checkprocesee = () => {
    const seat = document.querySelector('#number_of_seats').value;
    const check = seat * 100;
    if (check <= get) {
        alert("Booking successful!")
        const finalamount = Number(get) - Number(check);
        console.log(finalamount);
        localStorage.setItem('amount', Number(finalamount));
        refreash()
    } else {
        alert("Insufficient Balance!")
    }

}