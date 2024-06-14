import sqlite3 from "sqlite3";

sqlite3.verbose();
const db = new sqlite3.Database("users.db")

db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    age INEGER NOT NULL,
    balance REAL NOT NULL,
    role TEXT NOT NULL
)`);


async function updateUser(id, updatedData) {
    const changes = await new Promise((resolve, reject) => {
        db.run(`UPDATE users SET name = ?, age = ? WHERE id = ?`, [updatedData.name, updatedData.age, id], function (err) {
            if (err)
            {
                reject(err);
            }
            else
            {
                resolve(this.changes);
            }
        });
    });
    if (changes > 0) return getUserById(id);
    return null;
}

async function getUsers() {
    try 
    {
        const users = await new Promise((resolve,reject) => {
        db.all('SELECT * FROM users', [], (err, rows) => {
            if (err) 
            {
                reject(err);
            }
            else
            {
                resolve(rows);
            }
            });
        });
        return users;
    }
    catch (err)
    {
        return null;
    }
}

async function addUser(user) {
    const lastId = await new Promise((resolve, reject) => {
        db.run(`INSERT INTO USERS (name, age, balance, role) VALUES (?, ?, ?, ?)`, [user.name, user.age, user.balance, user.role], function (err) {
            if (err)
            {
                reject(err);
            }
            else
            {
                resolve(this.lastID);
            }
        });
    });
    return getUserById(lastId);
}

async function getUserById(id) {
    const user = await new Promise((resolve, reject) => {
        db.get(`SELECT * FROM users WHERE id = ?`, [id], function (err, row) {
            if (err)
            {
                reject(err);
            }
            else
            {
                resolve(row);
            }
        });
    });
    return user;
}

async function deleteUser(id) {
    const changes = await new Promise((resolve, reject) => {
        db.run(`DELETE FROM users WHERE id = ?`, [id], function (err) {
            if (err)
            {
                reject(err);
            }
            else
            {
                resolve(this.changes);
            }
        });
    });
    return changes > 0;
}

async function getTopUsers() {
    try 
    {
        const users = await new Promise((resolve,reject) => {
        db.all('SELECT id, name, balance FROM users ORDER BY balance DESC', [], (err, rows) => {
            if (err) 
            {
                reject(err);
            }
            else
            {
                resolve(rows);
            }
            });
        });
        return users;
    }
    catch (err)
    {
        return null;
    }
}

async function addBalance(id, balance) {
    const changes = await new Promise((resolve, reject) => {
        db.run(`UPDATE users SET balance = balance + ? WHERE id = ?`, [balance, id], function (err) {
            if (err)
            {
                reject(err);
            }
            else
            {
                resolve(this.changes);
            }
        });
    });
    if (changes > 0) return getUserById(id);
    return null;
}
async function reduceBalance(id, balance) {
    const changes = await new Promise((resolve, reject) => {
        db.run(`UPDATE users SET balance = balance - ? WHERE id = ?`, [balance, id], function (err) {
            if (err)
            {
                reject(err);
            }
            else
            {
                resolve(this.changes);
            }
        });
    });
    if (changes > 0) return getUserById(id);
    return null;
}

async function setBalance(id, balance) {
    const changes = await new Promise((resolve, reject) => {
        db.run(`UPDATE users SET balance = ? WHERE id = ?`, [balance, id], function (err) {
            if (err)
            {
                reject(err);
            }
            else
            {
                resolve(this.changes);
            }
        });
    });
    if (changes > 0) return getUserById(id);
    return null;
}


export {getUsers, getTopUsers, getUserById, setBalance, reduceBalance, addBalance, deleteUser, addUser, updateUser};