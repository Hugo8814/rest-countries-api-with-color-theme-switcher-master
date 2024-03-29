import View from "./View.js";

class FilterView extends View {
  _parentElement = document.querySelector(".search__sort");
  btnOps = document.querySelectorAll(".search__sort-box-option");

  constructor() {
    super();
    this._addHandlerShowWindow();
    //this._addHandlerHideWindow();
  }

  toggleHidden() {
    this.btnOps.forEach((btn) => {
      btn.classList.toggle("hidden");
    });
  }

  _addHandlerShowWindow() {
    this.btnOps.forEach((btn) => {
      btn.addEventListener("click", this.toggleHidden.bind(this));
    });
  }
  addHandlerfilter(handler) {
    if (document.querySelector(".search"))
      this._parentElement.addEventListener("click", function (e) {
        e.preventDefault();

        // Check if target element exists
        handler(); // Call the handler only if the target element exists
      });
  }

  getOptionData() {
    return new Promise((resolve, reject) => {
      // Assuming you want to attach the handler to each button
      this.btnOps.forEach((btn) => {
        btn.addEventListener("click", function (e) {
          e.preventDefault();
          const country = btn.getAttribute("value");

          resolve(country); // Resolve the promise with the selected country value
        });
      });
    });
  }
}

export default new FilterView();
