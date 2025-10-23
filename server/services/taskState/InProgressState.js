import { TaskState } from './TaskState.js';
export class InProgressState extends TaskState {
  moveToDone(user) {
    if (!this.isTeamMember(user)) {
      throw new Error('Not authorized: You are not a member of this project.');
    }
    this.task.status = 'Done';
  }

  moveBackToToDo(user) {
    if (!this.isTeamMember(user)) {
      throw new Error('Not authorized: You are not a member of this project.');
    }
    this.task.status = 'To Do';
    this.task.assignees = [];
  }
}
