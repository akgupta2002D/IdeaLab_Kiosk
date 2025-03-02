const knex = require('knex')(require('../knexfile'));

//name, location, location_img, date, image, description

const addEvent = async(name, location, location_image, event_date, image, description) => {
    try {
        await knex('events').insert({
            name, 
            location,
            location_image, 
            event_date,
            image, 
            description
        })
    } catch (error){
        throw error; 

    }
}

const getEvents = async () => {
    try {
        const [events] = await db.query('SELECT * FROM events');
        const eventData = staff[0];
        if (!eventData) {
            throw new Error('No Staff');
        }
        return {
            name: eventData.name, 
            location: eventData.location, 
            location_image: eventData.location_image,
            event_date: eventData.event_date, 
            image: eventData.image,
            description: eventData.description,
        }
    }catch (error) {
        throw error;
    }
}

module.exports = {
    addEvent,
    getEvents,
};