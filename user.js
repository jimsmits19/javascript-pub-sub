

class User {
constructor(eventEmitter) {

    eventEmitter.on('homepage_posted', ({ userName, password }) => {
        
        console.log(userName, password);
        
    })
}
}

module.exports = User;