const express = require('express');
const validate = require('../middlewares/validate');
const memeValidation = require('../validations/meme.validation');
const memeController = require('../controllers/meme.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(memeValidation.createMeme), memeController.createMeme)
  .get(validate(memeValidation.getMemes), memeController.getMemes);

router
  .route('/:memeId')
  .patch(validate(memeValidation.updateMeme), memeController.updateMeme)
  .post(validate(memeValidation.updateMemeLikes), memeController.updateMemeLikes)
  .get(validate(memeValidation.getMeme), memeController.getMeme);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Memes
 *   description: Meme management and retrieval
 */

/**
 * @swagger
 * path:
 *  /memes:
 *    post:
 *      summary: Create a meme
 *      description: used to create memes 
 *      tags: [Memes]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - name
 *                - caption
 *                - url
 *              properties:
 *                name:
 *                  type: string
 *                url:
 *                  type: string
 *                  description: must be unique
 *                caption:
 *                  type: string
 *              example:
 *                id: 5ebac534954b54139806c112
 *                caption: hello this is creative caption
 *                name: Meme owner name
 *                url: http://www.example.com/cdcdcc
 *      responses:
 *        "201":
 *          description: Created
 *          content:
 *            application/json:
 *              schema:
 *                 $ref: '#/components/schemas/Meme'
 *        "409":
 *          $ref: '#/components/responses/DuplicateUrl'
 *        "400":
 *          $ref: '#/components/responses/Badrequest'
 *
 *    get:
 *      summary: Get all memes
 *      description: retrieve all memes in descending order.
 *      tags: [Memes]
 *      parameters:
 *        - in: query
 *          name: hasCreatedAt
 *          schema:
 *            type: boolean
 *          description: if true response will contain createdAt and likes
 *      responses:
 *        "200":
 *          description: OK
 *          content:
 *            application/json:
 *              schema:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Meme'
 *        "401":
 *          $ref: '#/components/responses/Badrequest'
 */

/**
 * @swagger
 * path:
 *  /memes/{id}:
 *    get:
 *      summary: Get a meme
 *      description: fetch meme information
 *      tags: [Memes]
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            type: string
 *          description: Meme id
 *      responses:
 *        "200":
 *          description: OK
 *          content:
 *            application/json:
 *              schema:
 *                 $ref: '#/components/schemas/meme'
 *        "400":
 *          $ref: '#/components/responses/Badrequest'
 *        "404":
 *          $ref: '#/components/responses/NotFound'
 *
 *    patch:
 *      summary: Update a meme
 *      description: update meme information.
 *      tags: [Memes]
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            type: string
 *          description: meme id
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                caption:
 *                  type: string
 *                url:
 *                  type: string
 *                  description: must be unique
 *              example:
 *                name: EMem elite
 *                url: http://dhdehehef.cxiejdk
 *      responses:
 *        "200":
 *          description: OK
 *          content:
 *            application/json:
 *              schema:
 *                 $ref: '#/components/schemas/meme'
 *        "400":
 *          $ref: '#/components/responses/Badrequest'
 *        "404":
 *          $ref: '#/components/responses/NotFound'
 *
 *    post:
 *      summary: Update likes of a meme posted
 *      description: updates the no of likes by one
 *      tags: [Memes]
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            type: string
 *          description: Meme id
 *      responses:
 *        "200":
 *          description: No content
 *        "404":
 *          $ref: '#/components/responses/NotFound'
 */
