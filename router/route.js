import  { Router } from "express";
const router = Router();

/* import controller */
import * as controller from '../controllers/controller.js';

/* Questions Routes */
// router.get('/questions', controller.getQuestions)
// router.post('/questions', controller.insertQuestion)

router.route('/questions')
        .get(controller.getQuestions) /* GET Request*/
        .post(controller.insertQuestion) /* Post Request */
        .delete(controller.dropQuestions) /* Delete Request */

router.route('/result')
        .get(controller.getResult)
        .post(controller.storeResult)
        .delete(controller.dropResult)

        
export default router;