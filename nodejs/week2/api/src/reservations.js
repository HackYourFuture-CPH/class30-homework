import express from 'express';
const reservationsRouter = express.Router();
import { getReservations, getReservationById, createReservation, updateReservation, deleteReservation } from './data/reservations';

reservationsRouter.get('/', async (req, res) => {
    const reservations = await getReservations();
    res.json(reservations);
    }
);

reservationsRouter.get('/:id', async (req, res) => {
    const reservations = await getReservationById(req.params.id);
    if (reservations) {
        res.json(reservations);
    } else {
        res.status(404).json({ error: 'Reservation not found' });
    }
    }
);

reservationsRouter.post('/', async (req, res) => {
    const newReservation = req.body;
    const reservations = await createReservation(newReservation);
    res.json(reservations);
    }
);

reservationsRouter.put('/:id', async (req, res) => {
    const updatedReservation = req.body;
    const reservations = await updateReservation(req.params.id, updatedReservation);
    res.json(reservations);
    }
);

reservationsRouter.delete('/:id', async (req, res) => {
    const reservations = await deleteReservation(req.params.id);
    res.json(reservations);
    res.status(204).json({ message: "Deleted meal" });
    }
);

export default reservationsRouter;
