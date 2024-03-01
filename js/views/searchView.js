class SearchView {
  _parentEl = document.querySelector(".search__bg");
  getQuery() {
    const query = this._parentEl.querySelector(".search__box").value;
    console.log(query);
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
      console.log("whats");
    });
  }
}
export default new SearchView();
