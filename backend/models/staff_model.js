const knex = require('knex')(require('../knexfile'));

const addStaff = async (name, bio, image) => {
    try {
        await knex('staff').insert({
            name,
            bio,
            image
        });
    } catch (error) {
        throw error;
    }
};


const getStaff = async () => {
    try {
        const [staff] = await db.query('SELECT * FROM staff');
        const staffData = staff[0];
        if (!staffData) {
            throw new Error('No Staff');
        }
        return {
            id: staffData.id,
            name: staffData.name,
            bio: staffData.bio,
            image: staffData.image,
        }
    } catch (error) {
        throw error;
    }
}

module.exports = {
    addStaff,
    getStaff,
};