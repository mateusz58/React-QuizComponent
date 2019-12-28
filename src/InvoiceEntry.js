import React, { Component } from 'react'

class InvoiceEntry extends Component {

    constructor(props) {
        super(props);
        this.state = {
            incorrectAnswer: false
        }
    }

    render() {
        return  (
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        <li>{this.props.quiz_question.answer_options[0]}</li>
                    </ul>
                </section>
            </main>
        )
    }
}

export default InvoiceEntry