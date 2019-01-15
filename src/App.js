import React, { Component } from 'react';
import CardCollection from "./CardCollection";
import store from './store.js';
import './App.css';
import Pagination from "./Pagination";
import SortBy from "./SortBy";

// import {createStore} from "redux";

//const reducer = combineReducers({
    // our_reducer
    // your_reducer
//});

//let store = createStore(reducer);

window.store = store;

class App extends Component {

  render() {
      return (
        <CardCollection store={store} cardsOnFirstPage="18" cardsToShowOnLoad="24" render={(cards, state, totalResults, showEditorsChoice) => (
            <div>
                {cards.map(card => (
                    <div class="card">
                        <img src={card.icon}>
                        </img>
                        <div>
                            {card.heading}
                        </div>
                        <div>
                            {card.subheading}
                        </div>
                        <img src={card.adobe_related_product_icon[0]}>
                        </img>
                    </div>
                ))}
            </div>
          )}>
            <SortBy className="sort-by" initialSort="date" render={(activeSort) => (
                <button
                    type="button"
                    id="sortBy-date"
                    name="sortBy"
                    className="button-link active"
                    value="date"
                    onClick={() => {store.dispatch({action: 'SORT', by: 'DATE'})}}
                    disabled="">
                    Date
                </button>
            )}>
            </SortBy>
            <Pagination
                pageText="Some Page Text"
                nextText="Some Next Text"
                prevText="Some Previous Text"
                firstPageText="Some First Page Text"
                lastPageText="Some Last Page Text"
                paginationLabel="Some Pagination Label"

                isMobile={false}

                showLeftCheveron={true}
                showLeftDoubleCheveron={true}
                showRightCheveron={true}
                showRightDoubleCheveron={true}

                currentPage={1}
                numberOfPages={10}
                pageList={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}

                onGoToTheFirstPage={() => {store.dispatch({ type: 'INCREMENT_PAGE' })}}
                onGoToTheLastPage={() => {console.log('hi')}}
                onGoToPreviousPage={() => {console.log('hi')}}
                onGoToPage={() => {console.log('hi')}}
                onGoToNextPage={() => {console.log('hi')}}/>
        </CardCollection>
    );
  }
}

export default App;
