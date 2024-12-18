import ContainerComponent from "./view/container-component.js";
import StatisticsComponent from "./view/statistics-component.js";
import WorkoutFormComponent from "./view/workout-form-component.js";
import FiltersComponent from "./view/filters-component.js";
import WorkoutListComponent from "./view/workouts-list-component.js";
import { render } from "./framework/render.js";
import WorkoutModel from "./model/workout-model.js";
import WorkoutsBoardPresenter from "./presenter/workouts-board-presenter.js";

const statisticsContainer = document.querySelector(".statistics");
const workoutformContainer = document.querySelector(".workout-form");
const filtersContainer = document.querySelector(".filters");
const workoutlistContainer = document.querySelector(".workouts-list");

render(new ContainerComponent(), statisticsContainer);
render(new StatisticsComponent(), statisticsContainer);
render(new WorkoutFormComponent(), workoutformContainer);
render(new FiltersComponent(), filtersContainer);
render(new WorkoutListComponent(), workoutlistContainer);

const workoutsModel = new WorkoutModel();
const workoutsBoardPresenter = new WorkoutsBoardPresenter({
  boardContainer: workoutlistContainer,
  workoutsModel,
  formContainer: workoutformContainer,
  filtersContainer: filtersContainer,
  statisticsContainer: statisticsContainer,
});

workoutsBoardPresenter.init();
