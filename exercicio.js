createUser=(name,email) => {
    return{
        name,
        email,
        fala(ass){
            return `Ola, meu nome é ${name} e meu email é ${email}`
        },
    }
}

const user = createUser("lucas","lucasamorimpast@gmail.com");
console.log(user.fala("ola"))
