const db = require('../../data/dbConfig')

function findBy(filter){
    return db('users').where(filter)
}

async function create(user) {
    const [id] = await db('users').insert(user)
    return findById(id)
}

function findById(id) {
    return db('users').where('id', id).first()
}

module.exports = {
    findBy, 
    create,
    findById
}