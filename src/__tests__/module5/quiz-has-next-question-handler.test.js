import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App';
import { shallow } from 'enzyme';
import { assert } from 'chai';
import sinon from 'sinon';

let quizComponentExists = false;
let Quiz;
try {
  Quiz = require('../../Quiz.js').default;
  quizComponentExists = true;
} catch (e) {
  quizComponentExists = false;
}

let fs = require('fs');
let babylon = require('babylon')

describe('InvoiceEntry Component', () => {
  it('has a method named `showNextQuestion` and a renders a InvoiceEntry component with a `showNextQuestionHandler` prop @quiz-has-next-question-handler', () => {
    assert(quizComponentExists, "The InvoiceEntry component hasn't been created yet.")

    let quiz;

    try {
      quiz = shallow(<Quiz />)
    } catch (e) {
      assert(false, "We weren't able to mount the InvoiceEntry component.")
    }

    assert(quiz.find('InvoiceEntry').length == 1, "We couldn't find the InvoiceEntry component in the InvoiceEntry component's JSX.")
    
    assert(quiz.find('InvoiceEntry').props().showNextQuestionHandler != null, "The InvoiceEntry tag in InvoiceEntry's JSX doesn't have a `showNextQuestionHandler` property.")

    assert(quiz.find('InvoiceEntry').props().showNextQuestionHandler.name == 'bound showNextQuestion', "The InvoiceEntry tag in InvoiceEntry's JSX has a `showNextQuestionHandler` property, but the value isn't set to `this.showNextQuestion.bind(this)`.")

  })
})