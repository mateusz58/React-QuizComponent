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
  it('renders a div with a className of `InvoiceEntry`  @quiz-component-has-quiz-question-div', () => {
    assert(quizComponentExists, "The InvoiceEntry component hasn't been created yet.")

    let quiz;
    try {
      quiz = shallow(<Quiz />)
    } catch (e) {
      assert(false, "We weren't able to mount the InvoiceEntry component.")
    }
    
    if (quiz.containsMatchingElement(<div className="InvoiceEntry"></div>)) {
      // this block will run after @quiz-component-has-quiz-question-div
      assert(quiz.containsMatchingElement(<div className="InvoiceEntry"></div>), "The InvoiceEntry component isn't rendering a single div with the class `InvoiceEntry`.")
    } else if ( quiz.find('.InvoiceEntry').getElements().length == 1) {
      let el = quiz.find('.InvoiceEntry').getElements()[0];
      if (el.props.className == 'InvoiceEntry') {
        if (el.props.children == null) {
          assert(el.props.children == quizData.quiz_questions[0].instruction_text)
        }
      }
    } else if (quiz.containsMatchingElement(<div>Quiz</div>)) {
      // this block will run until @quiz-component-has-quiz-question-div
      assert(false, "The InvoiceEntry component isn't rendering a single div with the class `InvoiceEntry`.")
    } else if (quizQuestionComponentExists) {
      if (quiz.containsMatchingElement(<QuizQuestion />)) {
        // this block will run after @quiz-question-component-has-render-method in module 2
      }
    } else {
      assert(false, "The InvoiceEntry component isn't rendering a single div with the class `InvoiceEntry`.")
    }

  })
})