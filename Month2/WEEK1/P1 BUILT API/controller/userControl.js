
let users = [
    {
        "id": 1,
        "firstname": "Dwayne",
        "lastname": "Odgers",
      },
      {
        "id": 2,
        "firstname": "Abbot",
        "lastname": "Coyle",
      }
]

const getAll = (req,res) => {
    res.send(users)
}

const getByID = (req,res) => {
    const id = parseInt(req.params.id)
    const user = users.find((user)=> user.id === id)
    res.send(user)
}

const deleteByid =  (req,res) => {
    const id = parseInt(req.params.id);
    users = users.filter((user)=> user.id !== id)
    console.log(`user removed with id: ${id}`);
}

const create = (req,res) => {
    const newid = users.length + 1;
    const newUser = {...req.body, id: newid};
    users.push(newUser)
    
    console.log(`new user added with id ${newid}`);
}

const update = (req,res) => {
    const id = parseInt(req.params.id);
    let user = users.findIndex((user)=> user.id === id);
    users[user] = {...req.body, id:id}
    console.log(`user updated with id: ${id}`);
}

export {
    getAll, getByID, deleteByid, create, update
}