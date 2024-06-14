import { getUsers } from "../../data.js";

export default async (req, res) => {
    const response = await getUsers();
    if (response) res.json({'data': response});
    else res.status(404).json({"error": "no users"})
};