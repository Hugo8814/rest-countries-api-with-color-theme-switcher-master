import View from "./View.js";

class FilterView extends View {
  _parentElement = document.querySelector(".search__sort");
  btnOps = document.querySelector(".search__sort-option");

  constructor() {
    super();
    this._addHandlerShowWindow();
    //this._addHandlerHideWindow();
  }

  toggleHidden() {
    this.btnOps.classList.toggle("hidden");
  }
  _addHandlerShowWindow() {
    this.btnOps.addEventListener("click", this.toggleHidden.bind(this));
  }

  addHandlerfilter(handler) {
    this._parentElement.addEventListener("click", function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new FilterView();
