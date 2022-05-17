let list = [
  { key: 1,  value: 222222 },
  { key: 2,  value: 111111 },
  { key: 3,  value: 111111 },
  { key: 4,  value: 111111 },
  { key: 5,  value: 111111 },
  { key: 6,  value: 333333 },
];

x = 333333

console.log(list.filter((item) => item.value === x));



const addlistchanger =  (value) => {
  if (list.filter((item) => item.value === value).length!==0) {
    // alert("already there is a ticket with this Number");
    console.log("already exists");
  } else {
      list.push({key:list.length+1,value:value})
      console.log(list);
  }
};

addlistchanger(x)


