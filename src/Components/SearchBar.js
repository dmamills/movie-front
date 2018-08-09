import React, { PureComponent } from 'react';


class SearchBar extends PureComponent {

  constructor(prop) {
    super(prop);

    this.setInputRef = this.setInputRef.bind(this);
    this.setTypeRef = this.setTypeRef.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.keyPressed = this.keyPressed.bind(this);
  }

  setInputRef(input) {
    this.searchInput = input;
  }

  setTypeRef(select) {
    this.typeSelect = select;
  }

  keyPressed(e) {
    if(e.keyCode === 13) {
      this.onSubmit();
    }
  }

  onSubmit() {
    const query = this.searchInput.value;
    const type = this.typeSelect.value;
    this.props.onSearch(query, type);
  }

  render() {
    return (<div className="search-bar">
      <div className="input-group">
        <label htmlFor="search">Search Term</label>
        <input 
          placeholder="Enter Search Term...."
          type="text"
          id="search"
          ref={this.setInputRef}
          onKeyDown={this.keyPressed}
        /> 
      </div>
      <div className="input-group">
        <label htmlFor="search-type">Type</label>
        <select
          id="search-type"
          ref={this.setTypeRef}
        >
          <option>Title</option>
          <option>Genre</option>
          <option>Actor</option>
        </select>
      </div>
      <div className="input-group button-group">
        <button 
          className="submit-button"
          onClick={this.onSubmit}
        >Search</button>
      </div>
    </div>);
  }

}

export default SearchBar;
