import { getRandomVal } from "../utils/getRandomVal.js";
//here we need to store the record in a database in this case an array;
export const data = [] //act as a db;
export function shortURL(req, res) {
    console.log("Database contains: ",data)
    //then we need to see if the item already exist in the db
    let record = data.find((record) => record.original_url === req.body.url)
    console.log("Item being searched is ", record)
    if(record) {
        console.log("Item being searched was found")
        return res.json(record)
    }else {
        let record = {
            original_url: req.body.url,
            short_url: getRandomVal()
        }
        //atempt to store the record in the db;
        data.push(record);
        console.log("New record has been added to the database: ", data)
        return res.json(record)
    }
}