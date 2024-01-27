const { Router } = require("express");
const { getFilesController, getOriginalFileList } = require("../controllers/file");


const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    FileLines:
 *      type: object
 *      properties:
 *        text: 
 *          type: string
 *        number: 
 *          type: number
 *        hex:
 *          type: string
 *          maxLength: 32
 *          description: a hexagecimal number of 32 digits
 *      example:
 *        text: some text
 *        number: 12345
 *        hex: f9e1bcdb9e3784acc448af34f4727252
 *    File:
 *      type: object
 *      properties:
 *        file: 
 *          type: string
 *          description: the file name
 *        lines:
 *          type: array
 *          description: the content of a file
 *          items:
 *            $ref: '#/components/schemas/FileLines'
 *      example:
 *        file: test1.csv
 *        lines: [{ 
 *            "text": "some text", "number": 12345, "hex": "f9e1bcdb9e3784acc448af34f4727252" 
 *          }]
 *    OriginalFile:
 *      type: object
 *      properties:
 *        files:
 *          type: array
 *          items: 
 *            type: string
 */

/**
 * @swagger
 * /files/data:
 *  get:
 *    summary: return the processed file list
 *    tags: [Files]
 *    parameters:
 *      - in: query
 *        name: fileName
 *        schema:
 *          type: string
 *        required: false
 *        description: The name of an specific file
 *    responses:
 *      200:
 *        description: processed file list
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/File'
 *      404:
 *        description: not found
 */
router.get('/data', getFilesController);

/**
 * @swagger
 * /files/list:
 *  get:
 *    summary: return the original file list
 *    tags: [Files]
 *    responses:
 *      200:
 *        description: origal file list
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/OriginalFile'
 */
router.get('/list', getOriginalFileList);

module.exports = router;