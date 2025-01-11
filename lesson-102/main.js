// const users = {
//     alex: {
//         age: 26,
//         isAdmin: false
//     },
//     john: {
//         age: 20,
//         isAdmin: true,
//         sayHello(name) {
//             console.log(`Hello ${name}`)
//         }
//     }
// }

// console.log(users.john)
// users.john.sayHello('Tom')


// ======================================

// const users = [
//     {
//         name: 'alex',
//         age: 23,
//         isAdmin: false
//     },
//     {
//         name: 'john',
//         age: 30,
//         isAdmin: true
//     }
// ]

// for (let i = 0; i < users.length; i++){
//     console.log(users[i].age)
// }


// ==================ДЗ==================


// const user = [
//     {
//         name: 'Sergey',
//         age: 26,
//         nation: 'Belarus',
//         city: 'Borisov'
//     }
// ]
// console.log(user);

// ===========================

// const user = {
//         sayHello(name) {
//             console.log(`Hello ${name}`);
//         }
//     }
// console.log(user);
// user.sayHello('Sergey')

// ===========================

const users = [
    {
        name: 'alex',
        age: 23,
        isAdmin: false
    },
    {
        name: 'john',
        age: 30,
        isAdmin: true
    },
    {
        name: 'sergey',
        age: 26,
        isAdmin: true
    },
    {
        name: 'leon',
        age: 13,
        isAdmin: false
    },
    {
        name: 'anon',
        age: 26,
        isAdmin: true
    },
    {
        name: 'max',
        age: 13,
        isAdmin: true
    }
]

let justUser = 0;

for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin != true)
        justUser++
}
console.log(`Не являются админами:${justUser} пользователей`)
