import { workouts } from "../mock/workout.js";

export default class WorkoutModel {
  boardworkouts = workouts;

  getWorkouts() {
    return this.boardworkouts;
  }

  addWorkout(workout) {
    this.boardworkouts.push(workout);
  }

  deleteWorkout(workoutId) {
    this.boardworkouts = this.boardworkouts.filter(
      (workout) => workout.id !== workoutId
    );
  }
}
