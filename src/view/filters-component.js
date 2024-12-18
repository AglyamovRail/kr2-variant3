import {createElement} from '../framework/render.js';


function createFiltersComponentTemplate() {
    return (
        `<div class="filters">
            <h2>Фильтры</h2>
            <select id="sport-filter">
                <option value="">Все виды спорта</option>
                <option value="running">Бег</option>
                <option value="cycling">Велосипед</option>
                <option value="swimming">Плавание</option>
                <option value="gym">Тренажерный зал</option>
            </select>
            <input type="date" id="date-filter" placeholder="Фильтр по дате">
        </div>`
    );
}



export default class FiltersComponent {
  getTemplate() {
    return createFiltersComponentTemplate();
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
