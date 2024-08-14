// Inventort Management System 


let inventory = [
    { id: 1, name: "Apple", quantity: 10, price: 0.5 },
    { id: 2, name: "Banana", quantity: 20, price: 0.2 },
    { id: 3, name: "Orange", quantity: 15, price: 0.3 }
];

function addItem(id, name, quantity, price) {
    const newItem = { id, name, quantity, price };
    inventory.push(newItem);
    console.log(`Item ${name} added. Inventory:`, inventory);
}

function updateItem(id, updatedDetails) {
    const itemIndex = inventory.findIndex(item => item.id === id);
    if (itemIndex !== -1) {
        inventory[itemIndex] = { ...inventory[itemIndex], ...updatedDetails };
        console.log(`Item with ID ${id} updated. Inventory:`, inventory);
    } else {
        console.log(`Item with ID ${id} not found in inventory.`);
    }
}

function deleteItem(id) {
    const itemIndex = inventory.findIndex(item => item.id === id);
    if (itemIndex !== -1) {
        inventory.splice(itemIndex, 1);
        console.log(`Item with ID ${id} deleted. Inventory:`, inventory);
    } else {
        console.log(`Item with ID ${id} not found in inventory.`);
    }
}

addItem(4, "Grapes", 25, 0.4); 
updateItem(2, { name: "Banana", quantity: 30, price: 0.25 }); 
deleteItem(3); 
