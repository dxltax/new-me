function loadContent(page) {
    const content = document.getElementById('content');
    content.innerHTML = "";

    if (page === 'about') {
        content.innerHTML = `<h2>Me, Myself & I</h2><p>This is where you’ll learn more about me...</p>`;
    } else if (page === 'feel') {
        content.innerHTML = `<h2>What I Feel</h2><p>My raw thoughts and heartbreak diary will appear here...</p>`;
    } else if (page === 'thoughts') {
        content.innerHTML = `<h2>What I Thoughts</h2><p>Here's where I write about the world and what I see in it...</p>`;
    } else if (page === 'spotify') {
        content.innerHTML = `<h2>Spotify</h2><p>Here's my playlist of the moment...</p>`;
    } else if (page === 'secret') {
        const password = prompt("Enter the secret password:");
        if (password === "your-secret") {
            content.innerHTML = `<h2>Only You</h2><p>This page is for your eyes only...</p>`;
        } else {
            alert("Oops, wrong password!");
        }
    }
}
