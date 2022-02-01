const container = document.querySelector('.container');

//adding red paragraph text
const redParagraph = document.createElement('p');
redParagraph.textContent = 'Hey Im red!';
redParagraph.style.color = 'red';

container.appendChild(redParagraph);

//adding blue "Im a blue h3" h3
const blueHeader = document.createElement('h3');
blueHeader.textContent = 'Im a blue h3';
blueHeader.style.color = 'blue';

container.appendChild(blueHeader);

//adding div with black border and pink background color
const borderDiv = document.createElement('div');
borderDiv.style.border = '2px solid black';
borderDiv.style.backgroundColor = 'pink';

//adding elements into borderDiv
const headerInDiv = document.createElement('h1');
headerInDiv.textContent = 'Im in a div';

const pInDiv = document.createElement('p');
pInDiv.textContent = 'ME TOO!';

borderDiv.append(headerInDiv, pInDiv);

//adding borderDiv and children to page
container.appendChild(borderDiv);


//button that causes alert
//function for execution of eventListener
function helloWorldAlert() {
    alert("Hello World");
}

//creating button
const button = document.createElement('button');
button.textContent = 'click me for an alert';
button.addEventListener('click', helloWorldAlert);

//adding button to page
container.appendChild(button);