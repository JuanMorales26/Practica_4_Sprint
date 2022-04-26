const User = require('./../../../Twitter/app/models/User')

class UserService{
    static create(id, username, name){
       const user =  new User(id, username, name,"Sin Bio")
       return user
    }
    static getInfo(user){
        const list= [user.id,user.user,user.name,user.bio]
        return list
    }
    static updateUserUsername(user,newusername){
        user.setUsername(newusername)
        return user
    }
    static getAllUsernames(userslist){
        const list = [userslist[0].user, userslist[1].user, userslist[2].user]
        return list
    }
}
module.exports = UserService