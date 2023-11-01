

export async function getAllBooks(url) {
    const res = await fetch(url, {
        headers: {
            
        }
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
}

getAllBooks("http://127.0.0.1:1337/api/restaurants")