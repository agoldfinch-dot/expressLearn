import { addUser } from "../../data.js";



export default async (req, res) => {
    const balance = Math.random()*1000;
    const role = 'user';
    const user = {
        balance,
        role,
       ...req.body
    }
    console.log(req.body)
    if (req.body.name && req.body.age) 
    {
        const addedUser = await addUser(user);
        res.status(201).json({"data":addedUser});
    }
    else
    {
        res.status(400).json({"error": "name and age required"})
    }
    
}