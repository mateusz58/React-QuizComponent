import React, { Component } from 'react';
import InvoiceEntry from './InvoiceEntry';

let quizData = require('./quiz_data.json')

class Invoice extends Component {
    constructor(props) {
        super(props);
        this.state = { quiz_position: 1 };
    }
    render() {
        return  (
        <div>
            <InvoiceEntry quiz_question={quizData.quiz_questions
                [this.state.quiz_position - 1]}/>
        </div>
        )
    }
}
export default Invoice