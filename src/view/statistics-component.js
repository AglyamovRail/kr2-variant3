import {createElement} from '../framework/render.js';


function createStatisticsComponentTemplate() {
    return (
        `<div class="statistics">
            <h2>Статистика</h2>
            <div class="stats-block">
                <p>Всего тренировок: <span id="total-workouts">0</span></p>
            </div>
        </div>`
      );
}


export default class StatisticsComponent {
  getTemplate() {
    return createStatisticsComponentTemplate();
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
