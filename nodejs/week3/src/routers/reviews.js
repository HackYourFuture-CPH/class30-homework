import express from 'express';

import knex from '../database_client.js';


const reviewsRouter = express.Router();

const getAllReviews = async () => {
    try {
        const reviews = await knex('reviews');
        return reviews;
    } catch (error) {
        console.error('Error fetching reviews:', error);
        return [];

    }
};
// Get all reviews
reviewsRouter.get('/', async (req, res) => {
    try {
        const reviews = await getAllReviews();
        if (getAllReviews.length === 0) {
            return res.status(404).json({ error: 'No reviews found' });
        }
        res.status(200).json(reviews);
    } catch (error) {
        console.error('Error fetching reviews:', error);
        res.status(500).json({ error: 'Failed to fetch reviews' });
    }
}
);

//get/meal_id/reviews
reviewsRouter.get('/meal_id/:id', async (req, res) => {
    try {
        const mealId = req.params.id;
        const reviews = await knex('reviews').where({ meals_id: mealId });
        if (reviews.length === 0) {
            return res.status(404).json({ error: 'No reviews found for this meal' });
        }
        res.status(200).json(reviews);
    } catch (error) {
        console.error('Error fetching reviews:', error);
        res.status(500).json({ error: 'Failed to fetch reviews' });
    }
}
);
//post//reviews
reviewsRouter.post('/', async (req, res) => {
    try {
        const reqBody = {
            "title": req.body.title,
            "meals_id": req.body.meals_id,
            "description": req.body.description,
            "stars": req.body.stars,
        }
        const [addNewReviewId] = await knex('reviews').insert(reqBody);
        res.status(201).json({ message: 'Review added successfully', reviewId: addNewReviewId });


    } catch (error) {
        console.error('Error adding review:', error);
        res.status(500).json({ error: 'Failed to add review' });

    }
}
);
//get/reviews/:id
const getReviewById = async (id) => {
    try {
        const allReviews = await getAllReviews();
        const reviewId = +req.params.id;
        const matchReview = allReviews.find((review) => review.id === reviewId);
        if (!matchReview) {
            return res.status(404).json({ error: 'Review not found' });
        }
        res.status(200).json(matchReview);

    } catch (error) {
        console.error('Error fetching review:', error);
        res.status(500).json({ error: 'Failed to fetch review' });
    }

};

//put /reviews/:id

reviewsRouter.get('/:id', async (req, res) => {
    try {
        const reviewId = +req.params.id;
        const reqBody = {
        "title": req.body.title,
        "meals_id": req.body.meals_id,
         "description" : req.body.description,
        "stars": req.body.stars,
    }
    const updatedReview = await knex('reviews').where({ id: reviewId }).update(reqBody);
    if (!updatedReview) {
        return res.status(404).json({ error: 'Review not found' });
    }
    res.status(200).json({ message: 'Review updated successfully', reviewId: reviewId });
}
    catch (error) {
        console.error('Error updating review:', error);
        res.status(500).json({ error: 'Failed to update review' });
    }
}
);
 // delete/reviews/:id
 reviewsRouter.delete('/:id', async (req, res) => {
    try {
        const reviewId = +req.params.id;
        const deletedReview = await knex('reviews').where({ id: reviewId }).del();
        if (!deletedReview) {
            return res.status(404).json({ error: 'Review not found' });
        }
        res.status(200).json({ message: 'Review deleted successfully' });
    } catch (error) {
        console.error('Error deleting review:', error);
        res.status(500).json({ error: 'Failed to delete review' });
    }
}
);

export default reviewsRouter;
