const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  let queryText = 'SELECT * FROM "favorites" ORDER BY "id" DESC;';
  pool.query(queryText).then(result => {
      res.send(result.rows);
  })
  .catch(error => {
      console.log('error getting favorites', error);
      res.sendStatus(500);
  });
});

// add a new favorite 
router.post('/', (req, res) => {
  console.log('Adding new favorite:', req.body);
  let queryText = `
      INSERT INTO "favorites" ("url") 
      VALUES ($1);`;
  pool.query(queryText, [req.body.url])
  .then(result => {
      res.sendStatus(201);
  })
  .catch(error => {
      console.log(`Error posting favorite`, error); 
      res.sendStatus(500);
  });
});

// update given favorite with a category id
router.put('/:id', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  console.log("In PUT", req.params.id, req.body);
  let queryText = `
      UPDATE "favorites"
      SET "category_id" = $1
      WHERE "id" = $2;
      `;
  pool.query(queryText, [req.body.category_id, req.params.id])
      .then((result) => {
      res.sendStatus(200);
  })
  .catch((error) => {
      console.log("error in PUT category", error);
      res.sendStatus(500);
  });
  res.sendStatus(200);
});

// delete a favorite
router.delete('/', (req, res) => {
  console.log('In Delete:', req.params.id);
  let queryText = `
      DELETE FROM "favorites"
      WHERE "id" = $1;
      `
  pool.query(queryText, [req.params.id])
      .then( (result) => {
      console.log('Favorite deleted');
      res.sendStatus(200);
  })
  .catch( (error) => {
      console.log('Error in delete', error);
      res.sendStatus(500);
  })});

module.exports = router;
