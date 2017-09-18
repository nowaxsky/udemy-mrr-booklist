import React from 'react';
import { connect } from 'react-redux';
import { selectBook } from "../actions/index";
import { bindActionCreators } from 'redux';


class BookList extends React.Component {

    renderList() {

        return this.props.books.map((book) => {
            return (
                <li
                    key={book.title}
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    // Whatever is returned will show up as props inside of BookList.
    // console.log(state.books);
    return {
        books: state.books
    };
}

// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ selectBook: selectBook }, dispatch);
// }

function mapDispatchToProps(dispatch) {
    return {
        selectBook: (book) => dispatch(selectBook(book))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BookList);