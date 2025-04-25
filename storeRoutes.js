import express from 'express';
import Store from '../models/Store.model.js';

const router = express.Router();

// Create a new store
router.post('/', async (req, res) => {
  try {
    const store = await Store.create(req.body);
    res.status(201).json(store);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all stores
router.get('/', async (req, res) => {
  try {
    const stores = await Store.findAll();
    res.status(200).json(stores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;