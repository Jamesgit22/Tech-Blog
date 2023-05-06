const logBtn = document.querySelector('#log-btn');

logBtn.addEventListener('click', async () => {
    try {
        if (logBtn.innertext == "Login") {
            const response = await fetch('/')
        }
    } catch (err) {
        console.log(err);
    }
});