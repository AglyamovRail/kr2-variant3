import {createElement} from '../framework/render.js';


function createWorkoutListComponentTemplate() {
    return (
        `<div class="workouts-list">
            <h2>Мои тренировки</h2>
            <div id="workouts-container"></div>
        </div>`
      );
}


export default class WorkoutListComponent {
  getTemplate() {
    return createWorkoutListComponentTemplate();
  }


  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }


    return this.element;
  }


  removeElement() {
    this.element = null;
  }
}

