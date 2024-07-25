let v=document.getElementById('title');
console.log(v);
console.log(v.id)
console.log(v.className);
console.log(v.getAttribute('id'));
v.setAttribute('class','domtitle');
console.log(v.className);

let h1=document.getElementById('heading1');
h1.style.backgroundColor="green";
h1.style.padding='10px';
h1.style.border='10px'
h1.style.borderColor='white';
h1.style.borderRadius='10px';
console.log(h1.innerText);
console.log(h1.innerHTML);
console.log(h1.textContent);

console.log(document.getElementsByClassName('heading'));

let qs=document.querySelector('.heading')
console.log(qs);

// let qsa=document.querySelectorAll('.heading')
// console.log(qsa);

// console.log(document.querySelector('input[type="password"]'));
// console.log(document.querySelector('p:first-child'));
console.log(document.querySelector('#heading3'));
console.log(document.querySelector('*'));// gives all html code 
let ul=document.querySelector('ul');
console.log(ul);

// console.log(ul.querySelector('li'));
let li=ul.querySelector('li');
li.style.Color='black';
li.style.backgroundColor='yellow';
li.style.padding='10px';
li.innerText="This is the list which i select";
console.log(li.innerText);






