import { Authors } from './../constant/index';
import { Books } from "../constant";

export const resolvers = {
    Query : {
        books : (parent : string, args : any,context : string, info:string) => {
            console.log(parent)
            console.log(args)
            return (Books)
        },
        authors : () => {
            return (Authors)
        }
    }
}