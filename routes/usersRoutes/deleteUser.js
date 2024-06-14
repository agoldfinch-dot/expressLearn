import { deleteUser } from "../../data.js";

export default async (req, res) => {
    const id = req.params.id
    const isDeleted = await deleteUser(id);
    if (isDeleted) res.status(201).json({"data": `${id} was deleted`})
    else res.status(404).json({"error": "user not found"})

}