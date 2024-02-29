class SeachView {
  _parentEl = document.querySelector(".search");
  getQuery() {
    const query = this._parentEl.querySelector("search__box").value;
    this._clearInput();
    return query;
  }
  _clearInput() {
    this._parentEl.querySelector(".search__field").value = "";
  }
  addHandlerSearch(handler) {
    this._parentEl.addEventListener("sumbit", function (e) {
      e.preventDefault();
      handler();
    });
  }
}
export default new SearchView();
