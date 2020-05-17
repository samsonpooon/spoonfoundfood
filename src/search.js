import React, { Component } from "react";

class Search extends Component {

    state = {
        searchValue: "",
        meals: []

    };

    render() {

        return (
           <div>
                    <h1>Welcome to spoonfoundfood search app</h1>
                    <input onChange={event => this.handleOnChange(event)}
                    value={this.state.searchValue}
                    name="text" type="text" placeholder="Search" />
                    <button onClick={this.handleSearch}>Search</button>

                   
	                
                    <div class ="thumb my-4 d-flex">
                                    <h1 class="mt-5"></h1>
                                    <div class="pl-lg-5 ml-md-5">

                    {this.state.meals ?  (
                        <div> 
                            {this.state.meals.map((meal,index) => (
                                    <a href="#" class="thumb-menu pr-md-4 text-center" >
                                       <div class="img" style={{backgroundImage:`url(${meal.strMealThumb})`}}>s</div>
                                          <h4 key={index}>{meal.strMeal}</h4>
	            	                </a>
                                   
                                
                            
                            
                            ))} 
                            </div>
                         
                    ): (
                            <p> try searching for food</p>
                    )}

                    </div>
                        </div>
                        </div>
        
        )
    };

    makeAPICall = searchInput => {
        var searchURL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
        
        fetch(searchURL)
        .then (response => {
            return response.json();
        })

        .then (jsonData => {
            this.setState({meals: jsonData.meals});

        });
    };

    handleOnChange = event => {
        this.setState({searchValue: event.target.value });
    };

    handleSearch = event => {
        this.makeAPICall(this.state.searchValue);
    };
    

}

export default Search;