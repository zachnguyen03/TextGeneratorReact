import React, { Component } from 'react';
// import PropTypes from 'prop-types';


export default class TextSelectionForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            numberOfParagraphs: 0,
            htmlIncluded : false
        }
    }


    render() {  
        return(
            <div className="form">
                <form>
                    <label htmlFor="numParagraphs">Enter number of paragraphs</label>
                    <input type="text" name="numParagraphs" onChange={this.onChange.bind(this)}/>
                    <label htmlFor="htmlInclude">Is HTML included</label>
                    <select name="htmlInclude" onChange={this.onSelected.bind(this)}>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    <button type="submit" onClick={this.logState}>Submit</button>
                </form>

                <hr />
            </div>
        )
    }

    onChange(event) {
        this.setState({numberOfParagraphs: parseInt(event.target.value)})
    }

    onSelected(event) {
        this.setState({htmlIncluded: event.target.value==="yes"? true : false})
    }

    // logState(e) {
    //     e.preventDefault();
    //     console.log(this.state);
    // }
}