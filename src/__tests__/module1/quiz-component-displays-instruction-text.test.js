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
let quizData = require('../../quiz_data.json')

describe('InvoiceEntry Component', () => {
  it('displays the instruction text from JSON data @quiz-component-displays-instruction-text', () => {
    assert(quizComponentExists, "The InvoiceEntry component hasn't been created yet.")

    let quiz;
    try {
      quiz = shallow(<Quiz />)
    } catch (e) {
      assert(false, "We weren't able to mount the InvoiceEntry component.")
    }

    if (quiz.find('.InvoiceEntry').length > 0) {
      assert(quiz.find('.InvoiceEntry').text() == quizData.quiz_questions[0].instruction_text, "The div with a className of `InvoiceEntry` isn't displaying the correct instruction text.")
    } else if (quizQuestionComponentExists) {
      if (quiz.containsMatchingElement(<QuizQuestion />)) {
        // this block will run after @quiz-question-component-has-render-method in module 2
      }
    } else {
      assert(false, "There is not a div with a className of InvoiceEntry yet.")
    }
  })
})