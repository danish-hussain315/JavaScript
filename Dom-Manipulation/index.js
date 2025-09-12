// let parent = document.querySelectorAll(".day")
 let parent = document.querySelector(".parent")
/*console.log(parent.children);            //HTMLCollection of day day day day
console.log(parent);
 
for (let index = 0; index < parent.children.length; index++) {
  console.log(parent.children[index].innerHTML);
}
parent.children[0].style.color = "Green" */


const dayOne = document.querySelector(".day")
console.log(dayOne);
console.log(dayOne.parentElement);
console.log(dayOne.nextElementSibling);


console.log("Nodes :::: " , parent.childNodes);
// const internal = document.querySelector('selSectorChoice1')
