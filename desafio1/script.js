const users = [
    {name: 'Kalebe', age : 19, email : 'kalebefukudadeoliveira@gmail.com'},
    {name: 'Marta', age: 25, email: 'marta@gmail.com'},
    {name: 'Miriam', age: 40, email: 'miriam@gmail.com'},
    {name: 'João', age: 32, email: 'joao@gmail.com'}
];

const searchValue = 'Kalebe';

function searchUser(usersArray, searchValue) {
    return new Promise((resolve, reject) => { 
            for (let i = 0; i < usersArray.length; i++) {
                const user = usersArray[i];
                if (user.name === searchValue || user.age === searchValue || user.email === searchValue) {
                    resolve(user);
                    return;
                }
            }
         reject(new Error('Nenhum usuário encontrado.'));
    });
}

searchUser(users, searchValue)
    .then(userFound => {
        console.log('Usuário encontrado:', userFound);
    })
    .catch(error => {
        console.error('Erro:', error.message);
    });
