import { addBalance } from "../../data.js";

export default async (req, res) => {
    const id = req.params.id;
    const balance = req.body.balance;
    if (!balance) {
        res.status(400).json({"error": "balance are required"});
        return;
    }
    const user = await addBalance(id, balance);
    if (user) res.status(200).json({"data": user});
    else res.status(404).json({"error": "not found"});
}