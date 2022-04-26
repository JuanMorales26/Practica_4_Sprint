const UserService = require('./../../app/services/userService')
describe("Unit test module for UserService",() =>{
    test("1)Unit test for Class Constructor", () =>{
        const user = UserService.create(1,"JuanMorales26","Juan Morales")
        expect(user.id).toBe(1);
        expect(user.user).toBe("JuanMorales26");
        expect(user.name).toBe("Juan Morales");
        expect(user.bio).not.toBeUndefined();
    });
    test("2)Get all user data in a list", () =>{
        const user = UserService.create(1,"JuanMorales26","Juancho")
        const userInfoInList= UserService.getInfo(user);
        expect(userInfoInList[0]).toBe(1);
        expect(userInfoInList[1]).toBe("JuanMorales26");
        expect(userInfoInList[2]).toBe("Juancho");
        expect(userInfoInList[3]).toBe("Sin Bio");
    });
    test("3) Update username", () =>{
        const user = UserService.create(1,"JuanMorales26","Juancho")
        UserService.updateUserUsername(user,"Santiago")
        expect(user.name).toBe("Santiago");
    });
    test("4) Given a list of Users give me the list of usernames", () =>{
        const user1 = UserService.create(1,"JuanMorales1","Juancho")
        const user2 = UserService.create(2,"JuanMorales2","Juancho")
        const user3 = UserService.create(3,"JuanMorales3","Juancho")
        const usernames= UserService.getAllUsernames([user1,user2,user3])
        expect(usernames[0]).toBe("JuanMorales1");
        expect(usernames[1]).toBe("JuanMorales2");
        expect(usernames[2]).toBe("JuanMorales3");
    });
})