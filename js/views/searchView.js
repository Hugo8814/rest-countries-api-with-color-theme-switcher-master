class SearchView {
  _parentEl = document.querySelector(".search__bg");
  getQuery() {
    const query = this._parentEl.querySelector(".search__box").value;

    this._clearInput();
    return query;
  }
  _clearInput() {
    this._parentEl.querySelector(".search__box").value = "";
  }
  addHandlerSearch(handler) {
    if (document.querySelector(".search"))
      this._parentEl.addEventListener("submit", function (e) {
        e.preventDefault();

        // Check if target element exists
        handler(); // Call the handler only if the target element exists
      });
  }
}
export default new SearchView();
