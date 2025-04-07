import express from 'express';
import knex from '../database_client.js';

const reservationsRouter = express.Router();

// Get all reservations
const getAllReservations = async (req, res) => {
  try {
    const reservations = await knex('reservations');
    res.json(reservations);
  } catch (error) {
    console.error('Error fetching reservations:', error);
    return [];
  }
};

//get api/reservations
reservationsRouter.get('/', async (req, res) => {
  const reservations = await getAllReservations(req, res);
  res.json(reservations);
});

// Get a reservation by ID

//Post/ api /reservations
reservationsRouter.post("/", async (req, res) => {
    try{
        const reqBody = {
            "number_of_guests": req.body.number_of_guests,
            "meal_id": req.body.meal_id,
            "contact_phonenumber": req.body.contact_phonenumber,
            "contact_name": req.body.contact_name,
            "contact_email": req.body.contact_email
        };

        const [addReservationId] = await knex("reservation").insert(reqBody);
        res.status(201).json({
            message: "Reservation successful added",
            reservationId: addReservationId
        });
    } catch (error) {
        console.error("Error adding reservation:", error );
        res.status(500).json({ error: "Failed to add reservation" });
    }
}
);

// Get api/reservations/:id
reservationsRouter.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const reservation = await knex('reservations').where({ id }).first();
    if (!reservation) {
      return res.status(404).json({ error: 'Reservation not found' });
    }
    res.json(reservation);
  } catch (error) {
    console.error('Error fetching reservation:', error);
    res.status(500).json({ error: 'Failed to fetch reservation' });
  }
});

// Put api/reservations/:id
reservationsRouter.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { number_of_guests, meal_id, contact_phonenumber, contact_name, contact_email } = req.body;
  try {
    const [updatedReservation] = await knex('reservations')
      .where({ id })
      .update(
        { number_of_guests, meal_id, contact_phonenumber, contact_name, contact_email },
        ['*']
      );
    if (!updatedReservation) {
      return res.status(404).json({ error: 'Reservation not found' });
    }
    res.json(updatedReservation);
  } catch (error) {
    console.error('Error updating reservation:', error);
    res.status(500).json({ error: 'Failed to update reservation' });
  }
});
// Delete api/reservations/:id

reservationsRouter.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedReservation = await knex('reservations').where({ id }).del();
        if (!deletedReservation) {
        return res.status(404).json({ error: 'Reservation not found' });
        }
        res.json({ message: 'Reservation deleted successfully' });
    } catch (error) {
        console.error('Error deleting reservation:', error);
        res.status(500).json({ error: 'Failed to delete reservation' });
    }
    }
);


export default reservationsRouter;
