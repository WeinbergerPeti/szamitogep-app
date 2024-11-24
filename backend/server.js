const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

//Middleware
app.use(cors())
app.use(express.json());

const computers = [
    { id: 1, name: 'PC 1', model: 'Dell OptiPlex 7070', specs: 'Intel i5, 8GB RAM, 256GB SSD' },
    { id: 2, name: 'PC 2', model: 'HP EliteDesk 800', specs: 'Intel i7, 16GB RAM, 512GB SSD' },
    { id: 3, name: 'PC 3', model: 'Lenovo ThinkCentre M720', specs: 'Intel i5, 8GB RAM, 1TB HDD' },
    { id: 4, name: 'PC 4', model: 'Acer Aspire TC', specs: 'Intel i3, 4GB RAM, 500GB HDD' },
    { id: 5, name: 'PC 5', model: 'Mac Mini', specs: 'Apple M1, 8GB RAM, 256GB SSD' },
    { id: 6, name: 'PC 6', model: 'ASUS VivoPC', specs: 'Intel i5, 8GB RAM, 1TB HDD' },
    { id: 7, name: 'PC 7', model: 'MSI Cubi', specs: 'Intel i7, 16GB RAM, 512GB SSD' },
    { id: 8, name: 'PC 8', model: 'Dell Inspiron', specs: 'Intel i3, 8GB RAM, 256GB SSD' },
    { id: 9, name: 'PC 9', model: 'HP ProDesk', specs: 'Intel i5, 8GB RAM, 256GB SSD' },
    { id: 10, name: 'PC 10', model: 'Lenovo ThinkPad', specs: 'Intel i7, 16GB RAM, 512GB SSD' },
    { id: 11, name: 'PC 11', model: 'Acer Predator', specs: 'Intel i9, 32GB RAM, 1TB SSD' },
    { id: 12, name: 'PC 12', model: 'ASUS ZenBook', specs: 'Intel i7, 16GB RAM, 512GB SSD' },
    { id: 13, name: 'PC 13', model: 'Razer Blade', specs: 'Intel i9, 16GB RAM, 1TB SSD' },
    { id: 14, name: 'PC 14', model: 'Microsoft Surface', specs: 'Intel i7, 8GB RAM, 256GB SSD' },
    { id: 15, name: 'PC 15', model: 'HP Spectre x360', specs: 'Intel i5, 8GB RAM, 512GB SSD' },
    { id: 16, name: 'PC 16', model: 'Dell XPS', specs: 'Intel i9, 32GB RAM, 1TB SSD' },
    { id: 17, name: 'PC 17', model: 'MacBook Pro', specs: 'Apple M1 Pro, 16GB RAM, 512GB SSD' },
    { id: 18, name: 'PC 18', model: 'Alienware Aurora', specs: 'Intel i9, 64GB RAM, 2TB SSD' },
    { id: 19, name: 'PC 19', model: 'Lenovo Legion', specs: 'AMD Ryzen 7, 16GB RAM, 512GB SSD' },
    { id: 20, name: 'PC 20', model: 'HP Omen', specs: 'Intel i7, 32GB RAM, 1TB SSD' }
];

//Alapértelmezett endpoint
app.get('/', (request, response) => {
    response.send("Üdvözlöm a számítógép backend alkalmazásában!");
});

//Minden gép lekérdezése (GET)
app.get('/computers', (request, response) => {
    response.json(computers)
});

//Egy számítógép lekérdezése
app.get('/computers/:id', (request, response) => {
    const computer = computers.find(computer => computer.id === parseInt(request.params.id))
    if (!computer) return response.status(404).send("A keresett számítógép nem található!");
    response.json(computer);
});

//szerver indítása
app.listen(port, () => {
    console.log(`Backend szerver fut a http://localhost:${port} címen`);
});

