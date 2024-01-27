const { Router } = require("express");
const { getFilesController } = require("../controllers/file");


const router = Router();

router.get('/data', getFilesController);

module.exports = router;