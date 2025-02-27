// Create an async function that waits for 3 seconds before logging "Waited 3 seconds!".
async function sayHello() {
    await new Promise(resolve => setTimeout(resolve, 3000));
    console.log("Waited 3 seconds!");
}

//sayHello();

// Fetch data from https://jsonplaceholder.typicode.com/users and log all usernames.
async function getUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    const userNames = data.map((user) => user.name);
    console.log('users names: ', userNames)
}

//getUsers();

async function getPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        const titles = posts.map((post) => post.title)
        console.log('all titles: ', titles)
    } catch (error) {
        console.error('error fetch posts: ', error.message)
    }
}

getPosts();