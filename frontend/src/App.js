import React, { useState, useEffect } from 'react';

const filterComputers = (computers, search) => {
    const lowerCaseSearch = search.toLowerCase();
    return computers.filter((computer) =>
        computer.name.toLowerCase().includes(lowerCaseSearch) ||
        computer.model.toLowerCase().includes(lowerCaseSearch) ||
        computer.specs.toLowerCase().includes(lowerCaseSearch)
    );
}

function App() {
    const [computers, setComputers] = useState([]);
    const [filteredComputers, setFilteredComputers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch('http://localhost:5000/computers')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Hiba a szerver válaszában');
                }
                return response.json();
            })
            .then((data) => {
                setComputers(data);
                setFilteredComputers(data);
            })
            .catch((error) => console.error('Fetch hiba:', error));
    }, []);

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        const filtered = filterComputers(computers, value);
        setFilteredComputers(filtered);
    };

    return (
        <div className="container">
            <h1 className="my-4">Számítógépek</h1>
            <input
                type="text"
                className="form-control mb-4"
                placeholder="Keresés..."
                value={searchTerm}
                onChange={handleSearch}
            />

            <div className="row">
                {filteredComputers.map((computer) => (
                    <div key={computer.id} className="col-md-4 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">{computer.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">{computer.model}</h6>
                                <p className="card-text">{computer.specs}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
