const { Router } = require("express");
const { getFilesController, getOriginalFileList } = require("../controllers/file");


const router = Router();

router.get('/data', getFilesController);
router.get('/list', getOriginalFileList);

module.exports = router;