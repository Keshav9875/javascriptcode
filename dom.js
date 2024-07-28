// let v=document.getElementById('title');
// console.log(v);
// console.log(v.id)
// console.log(v.className);
// console.log(v.getAttribute('id'));
// v.setAttribute('class','domtitle');
// console.log(v.className);

// let h1=document.getElementById('heading1');
// h1.style.backgroundColor="green";
// h1.style.padding='10px';
// h1.style.border='10px'
// h1.style.borderColor='white';
// h1.style.borderRadius='10px';
// console.log(h1.innerText);
// console.log(h1.innerHTML);
// console.log(h1.textContent);

// console.log(document.getElementsByClassName('heading'));

// let qs=document.querySelector('.heading')
// console.log(qs);

// // let qsa=document.querySelectorAll('.heading')
// // console.log(qsa);

// // console.log(document.querySelector('input[type="password"]'));
// // console.log(document.querySelector('p:first-child'));
// console.log(document.querySelector('#heading3'));
// console.log(document.querySelector('*'));// gives all html code 
// let ul=document.querySelector('ul');
// console.log(ul);

// // console.log(ul.querySelector('li'));
// let li=ul.querySelector('li');
// li.style.Color='black';
// li.style.backgroundColor='yellow';
// li.style.padding='10px';
// li.innerText="This is the list which i select";
// console.log(li.innerText);

// let query=document.querySelectorAll(".para");
// console.log(query);

// query.forEach(function(p){
//     console.log(p.innerHTML);
// })

// query.forEach(function(p){
//     console.log(p.innerText);
// })

// query.forEach(function(p){
//     console.log(p.textContent);
// })

// let hc=document.getElementsByClassName('para');
// console.log(hc);

// let myconvertedarray=Array.from(hc);

// console.log(myconvertedarray);

// let qs=document.querySelector('.div');
// let qsa=qs.getElementsByClassName('para')

// let arr=Array.from(qsa);
// arr.forEach(function(item){
//     item.style.color="orange";
// })

// let elm = document.getElementsByTagName('p');
// console.log(elm);

// for(let i=0;i<elm.length;i++){
//      elm[i].innerHTML="hello dom";
// }


// for(let i=0;i<elm.length;i++){
//     console.log(elm[i]);
// }

// let queryse=document.querySelectorAll("p:nth-child(even)") //pseudo selector in css.
// console.log(queryse);

// queryse.forEach(function(item){
//     console.log(item.innerHTML);
// })

// const parent=document.querySelectorAll('.parent')
// console.log(parent.children);

// let p=document.querySelector('.parent');
// console.log(p.children);
// console.log(p.children);
// console.log(p.children[1].innerHTML);
// for(let i=0;i<p.children.length;i++){
//     console.log(p.children[i].innerHTML);
// }

// p.children[1].style.color="orange";
// console.log(p.firstElementChild);
// console.log(p.lastElementChild);

// let d=document.querySelector('.day')
// console.log(d.parentElement);
// console.log(d.nextElementSibling);
// console.log(p.childNodes);

// console.log(d.previousElementSibling);

// let div=document.createElement('div');
// div.className="div2"
// div.id="divid"
// div.setAttribute('title','generatedtitle')
// div.style.backgroundColor="orange";
// div.style.padding='10px';
// div.innerText="chai aur code"
// document.body.appendChild(div);

// let list1=document.querySelector('.parent');
// let item=document.createElement('li');

// item.textContent="keshav garg"
// item.style.backgroundColor="blue";

// let pos=list1.firstElementChild;
// list1.insertBefore(item,pos);

// let parent=document.body;
// let elm=document.createElement('h1')
// elm.innerText="heading1"
// elm.style.backgroundColor="green"

// parent.insertBefore(elm,list1)

// function addlang(langname){
//     let li =document.createElement('li')
//     li.innerHTML=langname;
//     li.style.backgroundColor="orange"
//     document.querySelector('.parent').appendChild(li)

// }
// addlang('typescript')


// let secondlang=document.querySelector('li:nth-child(2)')
// secondlang.innerHTML="javascript"
// secondlang.outerHTML='<li>js</li>';
// console.log(secondlang.innerHTML);
// secondlang.remove();





// let newli =document.createElement('li');
// newli.textContent="mojo"

// secondlang.replaceWith(newli)
// console.log(secondlang.innerHTML);

// let fwe=document.querySelector('.day');
// console.log(fwe.innerHTML);
// fwe.outerHTML="<li>js</li>";
// console.log(fwe.innerHTML);




// let par=document.querySelector('.parent')
// let newli=document.createElement("li")
// newli.innerHTML="jany"


// let chli=par.firstElementChild;
// chli.replaceWith(newli)
// // console.log(chli);
// // par.replaceChild(newli,chli)

// let elm=document.querySelector('.parent')

// let htm="<h1>hello heading</h1>"

// // elm.insertAdjacentHTML("afterbegin",htm);
// elm.insertAdjacentHTML("beforebegin",htm);
// elm.insertAdjacentHTML("afterend",htm);
// elm.insertAdjacentHTML("beforeend",htm);

//change inline style in css 
// let vr=document.querySelector('.parent')
// vr.style.cssText="color:purple";

//getComputedStyle in css -> used to get the css existing on any obj , class or id.
// let vr=document.querySelector('.parent')
// let css=getComputedStyle(vr);
// console.log(css.color,css.backgroundColor,css.padding);

// //change css classes

// let dv=document.getElementById('dom')
// console.log(dv.className);
// // dv.className="dom" // it change the existing class dim to dom
// dv.className+=" dom"// but it append the class on the existing class. refer tech gun 
// console.log(dv.className);

// console.log(dv.classList);
// let dvc=dv.classList;

// for(let l of dvc){
//     console.log(l);
// }

// dv.classList.add('tom')
// dv.classList.remove('tom')
// dv.classList.replace('dim','tom')
// console.log(dv.classList);
// let result=dv.classList.contains('dim')
// console.log(result);

// dv.classList.toggle('dim');
// dv.classList.toggle('tom');
// dv.classList.toggle('tom');

// get width and height of any element

let g=document.querySelector('.parent');
console.log(g.offsetHeight);//border+padding include hoga.
console.log(g.offsetWidth);

console.log(g.clientHeight);//Not include border but padding include always in height and width both...
console.log(g.clientWidth);



    
















































