const changeContentButton = document.getElementById('changeContentButton');
const contentToChange = document.getElementById('contentToChange');

changeContentButton.addEventListener('click', () => {
    contentToChange.innerHTML = "New Content! Clicked!";
});

const toggleImage = document.getElementById('toggleImage');

toggleImage.addEventListener('click', () => {
    toggleImage.classList.toggle('bordered');
});
function showPopup(imageName) {
    alert(`You clicked on ${imageName}`);
}