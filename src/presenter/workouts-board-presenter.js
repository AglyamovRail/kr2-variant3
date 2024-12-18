import WorkoutComponent from "../view/workout-component.js";
import { render } from "../framework/render.js";

export default class WorkoutsBoardPresenter {
  constructor({ boardContainer, workoutsModel, formContainer, filtersContainer, statisticsContainer }) {
    this.boardContainer = boardContainer;
    this.workoutsModel = workoutsModel;
    this.formContainer = formContainer;
    this.filtersContainer = filtersContainer;
    this.statisticsContainer = statisticsContainer;
  }

  init() {
    this.renderWorkouts();
    this.initFormHandler();
    this.initFilterHandlers();
  }

  renderWorkouts() {
    const workouts = this.workoutsModel.getWorkouts();
    this.renderFilteredWorkouts(workouts);
  }

  renderFilteredWorkouts(filteredWorkouts) {
    const workoutsContainer = this.boardContainer.querySelector("#workouts-container");
    workoutsContainer.innerHTML = ""; 

    filteredWorkouts.forEach((workout) => {
        const workoutComponent = new WorkoutComponent(workout, this._handleDelete.bind(this));
        render(workoutComponent, workoutsContainer);
    });

    document.getElementById("total-workouts").textContent = this.workoutsModel.getWorkouts().length;
}


initFormHandler() {
  const formElement = this.formContainer.querySelector("#workout-form");

  formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const sport = formElement.querySelector("#sport").value;
    const duration = formElement.querySelector("#duration").value;
    const intensity = formElement.querySelector("#intensity").value;
    const date = formElement.querySelector("#date").value;

    if (!sport || !duration || !intensity || !date) {
      alert("Все поля должны быть заполнены!");
      return;
    }

    const newWorkout = {
      id: Date.now().toString(),
      sport,
      duration,
      intensity,
      date,
    };

    this.workoutsModel.addWorkout(newWorkout);
    this.renderWorkouts();

  
    const sportFilterElement = this.filtersContainer.querySelector("#sport-filter");
    sportFilterElement.value = ""; 

    const dateFilterElement = this.filtersContainer.querySelector("#date-filter");
    dateFilterElement.value = ""; 
  });
}



  initFilterHandlers() {
    const sportFilterElement = this.filtersContainer.querySelector("#sport-filter");
    const dateFilterElement = this.filtersContainer.querySelector("#date-filter");

    const applyFilters = () => {
      const sportFilter = sportFilterElement.value;
      const dateFilter = dateFilterElement.value;

      const filteredWorkouts = this.workoutsModel.getWorkouts().filter((workout) => {
        const matchesSport = sportFilter ? workout.sport === sportFilter : true;
        const matchesDate = dateFilter ? workout.date === dateFilter : true;
        return matchesSport && matchesDate;
      });

      this.renderFilteredWorkouts(filteredWorkouts);
    };

    sportFilterElement.addEventListener("change", applyFilters);
    dateFilterElement.addEventListener("input", applyFilters);
  }

  _handleDelete(workoutId) {

    this.workoutsModel.deleteWorkout(workoutId);
  

    this.renderWorkouts();
  

    const sportFilterElement = this.filtersContainer.querySelector("#sport-filter");
    sportFilterElement.value = ""; 
  
    const dateFilterElement = this.filtersContainer.querySelector("#date-filter");
    dateFilterElement.value = ""; 
  }
  
  
}
