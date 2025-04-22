function loadContent(page) {
    const contentDiv = document.getElementById('content');
    
    // Clear previous content
    contentDiv.innerHTML = "";

    // Load new content based on the selected page
    if (page === 'about') {
        contentDiv.innerHTML = `
            <section id="about">
                <h2>About Me</h2>
                <p>Hello! I'm Delta, a passionate individual who's journeyed through a lot in life. Here's a little about me!</p>
                <ul>
                    <li>Age: 25</li>
                    <li>Occupation: DevOps Engineer</li>
                    <li>Loves the color blue</li>
                    <li>Hobbies: Reading, coding, and playing the guitar</li>
                </ul>
            </section>`;
    }

    else if (page === 'heartbreak') {
        contentDiv.innerHTML = `
            <section id="heartbreak">
                <h2>Heartbreak Diary</h2>
                <p>This is my emotional journey through heartbreak. The highs, the lows, and everything in between...</p>
                <p>After everything, I realized that healing isn't linear. There are good days and bad days, but in the end, I became stronger.</p>
            </section>`;
    }

    else if (page === 'thoughts') {
        contentDiv.innerHTML = `
            <section id="thoughts">
                <h2>Personal Thoughts</h2>
                <p>I've always believed that personal growth is more important than success in society's eyes. Here's what I think about today's world:</p>
                <p>In my opinion, the current political climate is a reflection of the changing global dynamics. The rise of technology has disrupted everything...</p>
            </section>`;
    }

    else if (page === 'playlist') {
        contentDiv.innerHTML = `
            <section id="playlist">
                <h2>Spotify Playlist</h2>
                <iframe src="https://open.spotify.com/embed/playlist/YOUR_PLAYLIST_ID" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
            </section>`;
    }

    else if (page === 'secret') {
        contentDiv.innerHTML = `
            <section id="secret">
                <h2>Secret Page</h2>
                <input type="password" id="password" placeholder="Enter password">
                <button onclick="checkPassword()">Submit</button>
                <p id="secretMessage" style="display:none;">Welcome to the secret page!</p>
            </section>`;
    }
}

function checkPassword() {
    const password = document.getElementById('password').value;
    if(password === "yourSecretPassword") {  // Ganti dengan password yang hanya mereka tahu
        document.getElementById('secretMessage').style.display = "block";
    } else {
        alert("Incorrect password!");
    }
}
