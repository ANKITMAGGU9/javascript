// Welcome message using prompt
const userName = prompt("Welcome! Please enter your name:");
// Uppercase the first letter of userName
const formattedUserName = userName.charAt(0).toUpperCase() + userName.slice(1);
// asking age for math operation
const userAge = prompt(`Hello, ${formattedUserName}! Please enter your age:`);

// Displaying welcome message with formattedUserName
document.write(`<h1>Hello, ${formattedUserName}! Welcome to My World!</h1>`);

// Basic Info using Object data type
const myInfo = {
    name: "Ankit Maggu",
    school: "Nova Scotia Community College",
    age: 25, 
    hobbies: ["Tinkering with Electronics", "Trekking", "Football", "Coding"] // Array data type
};

// Adding picture using document.write
document.write("<div id='info'>");
document.write(`<img id="picture" src="profilePic.jpg" alt="Ankit's Picture">`);
//document.write(`<p id="welcome-message">${welcomeMessage}</p>`);
document.write(`<p>Name: ${myInfo.name}</p>`);
document.write(`<p> School: ${myInfo.school}</p>`);
document.write("</div>");

// Math Operation
const num1 = 2023;
const num2 = userAge;
const birthYear = num1 - num2;
console.log("Your birth year is = ",birthYear);
//check if the age is even or odd
const oddEven = userAge%2
if (oddEven == 0){
    console.log("your age is an even");
    document.write('your age is an even number');
}
else{
    console.log("your age is odd");
    document.write('your age is an odd number');
}

document.write("<div id='hobbies'>");
document.write("<h2>Things I Like</h2>");
document.write("<ul>");
// Using a for loop to create a list of things you like
for (let i = 0; i < myInfo.hobbies.length; i++) {
    document.write(`<li>${myInfo.hobbies[i]}</li>`);
}
document.write("</ul>");
document.write(`<p>${formattedUserName} your year of birth is: ${birthYear}</p>`);
document.write("</div>");
