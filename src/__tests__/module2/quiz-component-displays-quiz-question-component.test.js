import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App';
import { shallow } from 'enzyme';
import { assert } from 'chai';

let quizComponentExists = false;
let Quiz;
try {
  Quiz = require('../../Quiz.js').default;
  quizComponentExists = true;
} catch (e) {
  quizComponentExists = false;
}

let quizQuestionComponentExists = false;
let QuizQuestion;
try {
  QuizQuestion = require('../../InvoiceEntry.js').default;
  quizQuestionComponentExists = true;
} catch (e) {
  quizQuestionComponentExists = false;
}

let fs = require('fs');

describe('InvoiceEntry Component', () => {
  it('displays the InvoiceEntry component @quiz-component-displays-quiz-question-component', () => {
    assert(quizQuestionComponentExists, "The InvoiceEntry component hasn't been created yet.")
    assert(quizComponentExists, "The InvoiceEntry component hasn't been created yet.")

    let quiz;
    try {
      quiz = shallow(<Quiz />)
    } catch (e) {
      assert(false, "We weren't able to mount the InvoiceEntry component.")
    }

    assert(quiz.find('InvoiceEntry').length == 1, "We couldn't find the InvoiceEntry component being loaded by the InvoiceEntry component.")
  })
})