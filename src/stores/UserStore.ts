import { Store } from 'pullstate'

type UserStorageType = {
    userSelected: string;
    // userChoices: string[];
}

export const UserStorage = new Store<UserStorageType>({
    userSelected: "white"
    // ,
    // userChoices: ['#000000', '#804000', '#FE0000', '#FE6A00', '#FFD800', '#00FF01', '#FFFFFF', '#01FFFF', '#0094FE', '#0026FF', '#B100FE', '#FF006E']
})

export const setUserSelected = (input: string) => {
    UserStorage.update(
        s => {
            s.userSelected = input;
            console.log("user selected: " + s.userSelected + " Hex Colour")
        }
    )
}