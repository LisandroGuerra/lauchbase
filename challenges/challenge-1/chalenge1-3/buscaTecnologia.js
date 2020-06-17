const users = [
    {
        name: 'Carlos',
        tecnologies: [
            'CSS',
            'HTML'
        ]
    },
    {
        name: 'Jasmine',
        tecnologies: [
            'CSS',
            'JavaScript'
        ]
    },
    {
        name: 'Lisandro',
        tecnologies: [
            'HTML',
            'CSS',
            'JavaScript',
            'Python'
        ]
    },
    {
        name: 'Tuane',
        tecnologies: [
            'HTML',
            'NodeJS'
        ]
    }
]

for (let user of users) {
    console.log(`${user.name} works with ${user.tecnologies}.`);
}



function worksWithCSS(user) {
    return user.tecnologies.includes('CSS');
}


for (let index = 0; index < users.length; index++){
    if (worksWithCSS(users[index])) {
        console.log(`The user ${users[index].name} works with CSS`);
    }
}
