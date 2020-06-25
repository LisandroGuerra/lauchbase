const user = {
    name: 'Lisandro',
    company: {
        name: 'Rocketseat',
        color: 'Purple',
        spot: 'Computer programming',
        address: {
            street: "Guilherme Gembala street",
            number: 260
        }
    
    }
}

console.log(`The conpany ${user.company.name} is located on the ${user.company.address.street}, ${user.company.address.number}.`);