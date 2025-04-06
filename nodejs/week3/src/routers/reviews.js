import express from 'express';
const reviewsRouter = express.Router();
import { getReviews, getReviewById, createReview, updateReview, deleteReview } from './data/reviews';



reviewsRouter.get('/', async (req, res) => {
  const reviews = await getReviews();
  res.json(reviews);
});

reviewsRouter.get('/: meals_id', async (req, res) => {
  const review = await getReviewById(req.params.meals_id);
  res.json(review);
}
);

reviewsRouter.post('/', async (req, res) => {
    const { title, description, stars, meals_id } = req.body;
    const newReview = await createReview(title, description, stars, meals_id);
    res.json(newReview);
    }
);
reviewsRouter.get('/:id', async (req, res) => {
    const review = await getReviewById(req.params.id);
    if (review) {
        res.json(review);
    } else {
        res.status(404).json({ error: 'Review not found' });
    }
    }
);
reviewsRouter.put('/:id', async (req, res) => {
    const { title, description, stars, meals_id } = req.body;
    const review = await updateReview(req.params.id, title, description, stars, meals_id);
    res.json(review);
    }
);  
reviewsRouter.delete('/:id', async (req, res) => {
    const review = await deleteReview(req.params.id);
    res.json(review);
    }
);  
