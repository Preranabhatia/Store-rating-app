import express from 'express';
import Rating from '../models/Rating.model.js';

const router = express.Router();

// Create a new rating
router.post('/', async (req, res) => {
  try {
    const rating = await Rating.create(req.body);
    res.status(201).json(rating);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all ratings
router.get('/', async (req, res) => {
  try {
    const ratings = await Rating.findAll();
    res.status(200).json(ratings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;