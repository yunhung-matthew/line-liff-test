import './index.css';
import liff from '@line/liff'

document.addEventListener("DOMContentLoaded", function() {
  liff
    .init({ liffId: process.env.LIFF_ID })
    .then(() => {
        console.log("Success! you can do something with LIFF API here.")
        renderHelloWorld()
    })
    .catch((error) => {
        console.log(error)
    })
});

function renderHelloWorld() {
    if (!liff.isLoggedIn()) {
        liff.login();
    } else {
        liff
            .getProfile()
            .then((profile) => {
                const {
                    userId,
                    displayName,
                    pictureUrl,
                    statusMessage,
                } = profile
                console.log('liff.getProfile()', profile)

                document.querySelector('.welcome').innerText = `Hi~ ${displayName}!`

            })
            .catch((err) => {
                console.log("error", err);
            });
    
        const idToken = liff.getIDToken();
        console.log('idToken', idToken);
    }
}