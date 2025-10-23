import express from 'express';
import protect from '../middleware/auth.middleware.js'; 
import {
  isTaskTeamMember, 
  isTaskProjectCreator, 
} from '../middleware/taskAuthorization.js';
import {
  deleteTask,
  updateTaskStatus,
  changeTaskPriority,
  updateTask, 
} from '../controllers/task.controller.js';
const router = express.Router();
router
  .route('/:taskId/status')
  .put(protect, isTaskTeamMember, updateTaskStatus);
router
  .route('/:taskId/priority')
  .put(protect, isTaskProjectCreator, changeTaskPriority); 
router
  .route('/:taskId')
  .put(protect, isTaskTeamMember, updateTask) 
  .delete(protect, isTaskProjectCreator, deleteTask); 
export default router;