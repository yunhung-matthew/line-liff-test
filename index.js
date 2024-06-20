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
    const {
        userId,
        displayName,
        pictureUrl,
        statusMessage,
    } = liff.getProfile();

    document.querySelector('.welcome').innerText = `Hi~ ${displayName}!`
}