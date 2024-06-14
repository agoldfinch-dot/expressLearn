import { getTopUsers } from "../../data.js";

export default async (req, res) => {
    const topUsers = await getTopUsers();
    res.status(200).json({"data": topUsers})
}