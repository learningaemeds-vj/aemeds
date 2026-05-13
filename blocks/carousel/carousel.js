export default function decorate(block){
[...block.children].forEach((row,r) => {
  console.log("r = "+r);
  console.log("row = "+row);
  [...row.children].forEach((col,c) => {
    console.log("c = "+c);
    console.log("col = "+col.textContent);
  });
});
  
}

