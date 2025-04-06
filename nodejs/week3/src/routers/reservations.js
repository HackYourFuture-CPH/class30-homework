import express from 'express';
import knex from '../../database_client.js';
import e from 'express';

const reservationsRouter = express.Router();

const getReservations = async () => {
    return await knex('reservation').select('*');

};

//GET /api/reservations
reservationsRouter.get('/', async (req, res) => {
    const reservations = await getReservations();
    res.json(reservations);
});

// POST /api/reservations
reservationsRouter.post('/', async (req, res) => {
    const newReservation = req.body;
    const reservation = await createReservation(newReservation);
    res.json(reservation);
});

//GET /api/reservations/:id
reservationsRouter.get('/:id', async (req, res) => {
    const id = req.params.id;
    const reservation = await getReservationById(id);
    res.json(reservation);
});

// PUT /api/reservations
reservationsRouter.put('/:id', async (req, res) => {
    const updatedReservation = req.body;
    const id = req.params.id;
    const reservation = await updateReservation(id, updatedReservation);
    res.json(reservation);
}
);
//delete /api/reservations/:id
reservationsRouter.delete('/:id', async (req, res) => {
    const id = req.params.id;
    await deleteReservation(id);
    res.json({ success: true });
});

export default reservationsRouter;