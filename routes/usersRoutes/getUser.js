import { getUserById } from "../../data.js";

export default async (req, res) => {
    const user = await getUserById(req.params.id);
    if (user) res.status(200).json({"data": user})
    else res.status(404).json({"error": "no user with this id"})
}