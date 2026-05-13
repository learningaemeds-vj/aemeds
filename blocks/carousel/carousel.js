export default function decorate(block){
[...block.children].forEach((row) => {
  console.log(row);
  [...row.children].forEach((col) => {
    console.log(col);
  });
});
  
}

