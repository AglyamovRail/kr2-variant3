import { createElement } from '../framework/render.js';
import { translateWorkoutData, formatDate } from '../utils.js';

function createWorkoutComponentTemplate(workout, onDelete) {

  const translatedWorkout = translateWorkoutData(workout);
  const formattedDate = formatDate(translatedWorkout.date);

  return `
    <div class="card" data-id="${translatedWorkout.id}">
      <p><strong>Вид спорта:</strong> ${translatedWorkout.sport}</p>
      <p><strong>Длительность:</strong> ${translatedWorkout.duration} мин</p>
      <p><strong>Интенсивность:</strong> ${translatedWorkout.intensity}</p>
      <p><strong>Дата:</strong> ${formattedDate}</p>
      <button class="delete-btn">Удалить</button>
    </div>`;
}

export default class WorkoutComponent {
  constructor(workout, onDelete) {
    this.workout = workout;
    this.onDelete = onDelete;
    this.element = null;
  }

  getTemplate() {
    return createWorkoutComponentTemplate(this.workout, this.onDelete);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
      this._setDeleteHandler();
    }
    return this.element;
  }

  _setDeleteHandler() {
    const deleteBtn = this.element.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', this._onDeleteClick.bind(this));
  }

  _onDeleteClick() {
    this.onDelete(this.workout.id);
  }

  removeElement() {
    this.element = null;
  }
}
