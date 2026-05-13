export default function decorate(block){

  const rows=[...block.children];

  [...block.children].forEach((row,r) =>  {
    console.log(row);
    console.log(r);
  });
 console.log(rows.length);
}

