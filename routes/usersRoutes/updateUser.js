import { updateUser } from "../../data.js";

export default async (req, res) => {
    const id = req.params.id;
    const updateData = {
        ...req.body
    }
    const user = await updateUser(id, updateData);
    if (user) res.status(201).json(user);
    else res.status(404).json({"error": "user not found"})
    
}