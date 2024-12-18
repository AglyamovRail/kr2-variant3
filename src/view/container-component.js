import {createElement} from '../framework/render.js';


function createContainerComponentTemplate() {
    return (
        `<div class="header-container"><h1>Мой Фитнес Трекер</h1></div>
        `
      );
}


export default class ContainerComponent {
  getTemplate() {
    return createContainerComponentTemplate();
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
