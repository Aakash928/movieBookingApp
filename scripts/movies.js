// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page
var lstorage = localStorage.getItem('amount') || 0;

document.querySelector('#wallet').innerText = lstorage;
var id;

lstSearchPic = async() => {
    try {
        const query = document.querySelector('#search').value;
        // const query = 'avenger'
        const res = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=d18c9f35`);
        const data = await res.json();
        return (data.Search);
        console.log(data)
    } catch (err) {
        console.log(err)
    }
}

// lstSearchPic()
appendFun = (data) => {
    console.log(data)
    data.forEach(({ Title, Poster }) => {
        let box = document.createElement('div');
        let img = document.createElement('img');
        let name = document.createElement('h3');
        let btn = document.createElement('button');
        btn.setAttribute('class', 'book_now');
        btn.innerText = 'book now';
        name.innerText = Title;
        img.src = Poster;
        let data = {
            Title,
            Poster
        }
        btn.onclick = () => {
            localStorage.setItem('movie', JSON.stringify(data));
            window.location.href = 'checkout.html';
        }

        box.append(img, name, btn)
        document.querySelector('#movies').append(box);
    })
}




master = async() => {
    const api = await lstSearchPic();
    if (api === undefined) {
        return false;
    }
    appendFun(api);

}


function debounce(fun, delay) {
    if (id) {
        clearTimeout(id)
    }
    id = setTimeout(() => {
        fun();
    }, delay);
}