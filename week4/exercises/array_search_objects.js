const inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 },
  ];
  const filteredInventory = inventory.filter(function (product) {
    return product.quantity > 0
  });
  let tempStr = '';
  filteredInventory.forEach(function (product, index) {
    tempStr += `Product ${index + 1} : ${product.name}\n`; 
  });
  console.log(tempStr);