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

describe('QuizQuestion Component', () => {
  it('has a method named `showNextQuestion` and a renders a QuizQuestion component with a `showNextQuestionHandler` prop @quiz-has-next-question-handler', () => {
    assert(quizComponentExists, "The QuizQuestion component hasn't been created yet.")

    let quiz;

    try {
      quiz = shallow(<Quiz />)
    } catch (e) {
      assert(false, "We weren't able to mount the QuizQuestion component.")
    }

    assert(quiz.find('QuizQuestion').length == 1, "We couldn't find the QuizQuestion component in the QuizQuestion component's JSX.")
    
    assert(quiz.find('QuizQuestion').props().showNextQuestionHandler != null, "The QuizQuestion tag in QuizQuestion's JSX doesn't have a `showNextQuestionHandler` property.")

    assert(quiz.find('QuizQuestion').props().showNextQuestionHandler.name == 'bound showNextQuestion', "The QuizQuestion tag in QuizQuestion's JSX has a `showNextQuestionHandler` property, but the value isn't set to `this.showNextQuestion.bind(this)`.")

  })
})