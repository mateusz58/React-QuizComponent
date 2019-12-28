import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App';
import { shallow } from 'enzyme';
import { assert } from 'chai';

let fs = require('fs');
let babylon = require('babylon')

describe('InvoiceEntry Component', () => {
  it('imports InvoiceEntry from InvoiceEntry.js @quiz-component-imports-quiz-question-component', () => {
    let quizFile;
    try {
      quizFile = fs.readFileSync(__dirname + '/../../InvoiceEntry.js').toString();
    } catch (e) {
      assert(false, "The InvoiceEntry.js file hasn't been created yet.")
    }

    let quizQuestionFile;
    try {
      quizQuestionFile = fs.readFileSync(__dirname + '/../../InvoiceEntry.js').toString();
    } catch (e) {
      assert(false, "The InvoiceEntry.js file hasn't been created yet.")
    }

    let ast = babylon.parse(quizFile, { sourceType: "module", plugins: ["jsx"] })

    let quiz_question_import_found = false;

    ast['program']['body'].forEach(element => {
      if (element.type == 'ImportDeclaration') {
        if (element.source.value == './InvoiceEntry.js' || element.source.value == './InvoiceEntry' || element.source.value == 'InvoiceEntry') {
          assert(element.specifiers[0].local.name == 'InvoiceEntry', "You're not importing the InvoiceEntry class from the InvoiceEntry.js file.")
          quiz_question_import_found = true
        }
      }
    })
    assert(quiz_question_import_found, "You're not importing the InvoiceEntry.js file.")
  });
})