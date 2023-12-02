// JavaScript to alter content

// Example 1: Change content on button click
const changeContentButton = document.getElementById('changeContentButton');
const contentToChange = document.getElementById('contentToChange');

changeContentButton.addEventListener('click', () => {
    contentToChange.innerHTML = "New Content! Clicked!";
});

// Example 2: Toggle class on image click
const toggleImage = document.getElementById('toggleImage');

toggleImage.addEventListener('click', () => {
    toggleImage.classList.toggle('bordered');
});
function showPopup(imageName) {
    alert(`You clicked on ${imageName}`);
}