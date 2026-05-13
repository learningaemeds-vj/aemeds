export default function decorate(block){

  const rows=[...block.children];

  [...block.children].forEach((row,r) =>  {

    [...row.children].forEach((col) => {
      console.log(col);
      console.log(col.TextContent);
    });
    console.log(row);
    console.log(r);
  });
 console.log(rows.length);
}

