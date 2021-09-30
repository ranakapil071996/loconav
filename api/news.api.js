const router = require('express').Router();
const NewsAPI = require('newsapi');

const newsapi = new NewsAPI(process.env.NEW_API_KEY);

router.get('/', async (req, res) => {
  try {
    const queryData = {
      language: 'en',
      country: 'in',
      ...req.query
    };
    const response = await newsapi.v2.topHeadlines(queryData);
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: 'Error in fetching' });
  }
});

module.exports = router;
