import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App';
import { shallow } from 'enzyme';
import { assert } from 'chai';

let fs = require('fs');
let babylon = require('babylon')

describe('App Component', () => {
  it('imports QuizQuestion from QuizQuestion.js @app-component-imports-quiz-component', () => {
    let appFile;
    try {
      appFile = fs.readFileSync(__dirname + '/../../App.js').toString();
    } catch (e) {
      assert(false, "The App.js file hasn't been created yet.")
    }

    let quizFile;
    try {
      quizFile = fs.readFileSync(__dirname + '/../../QuizQuestion.js').toString();
    } catch (e) {
      assert(false, "The QuizQuestion.js file hasn't been created yet.")
    }

    let ast = babylon.parse(appFile, { sourceType: "module", plugins: ["jsx"] })

    let quiz_import_found = false;

    ast['program']['body'].forEach(element => {
      if (element.type == 'ImportDeclaration') {
        if (element.source.value == './QuizQuestion.js' || element.source.value == './QuizQuestion' || element.source.value == 'QuizQuestion') {
          assert(element.specifiers[0].local.name == 'QuizQuestion', "You're not importing the QuizQuestion class from the QuizQuestion.js file.")
          quiz_import_found = true
        }
      }
    })
    assert(quiz_import_found, "You're not importing the QuizQuestion.js file.")
  });
})