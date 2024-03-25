

async function fetchjoke() {
    try {
        const response = await fetch('https://api.api-ninjas.com/v1/jokes?limit=' + 1,{
            method: 'GET',
            headers: {
            'X-Api-Key': 'ElbKcpO8AhHPvDhzZvRnGQ==JCbbGS25InS4hxZr'
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error: ', error);
    }
}



const btn = document.querySelector('.btn');
btn.addEventListener('click', async () => {
    let jokes = await fetchjoke()
    jokes.forEach(element => {
        console.log(element.joke)
        document.querySelector('.joke').innerHTML = element.joke;
    });

})
