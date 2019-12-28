import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App';
import { shallow } from 'enzyme';
import { assert } from 'chai';

let fs = require('fs');
let babylon = require('babylon')

describe('App Component', () => {
  it('imports InvoiceEntry from InvoiceEntry.js @app-component-imports-quiz-component', () => {
    let appFile;
    try {
      appFile = fs.readFileSync(__dirname + '/../../App.js').toString();
    } catch (e) {
      assert(false, "The App.js file hasn't been created yet.")
    }

    let quizFile;
    try {
      quizFile = fs.readFileSync(__dirname + '/../../InvoiceEntry.js').toString();
    } catch (e) {
      assert(false, "The InvoiceEntry.js file hasn't been created yet.")
    }

    let ast = babylon.parse(appFile, { sourceType: "module", plugins: ["jsx"] })

    let quiz_import_found = false;

    ast['program']['body'].forEach(element => {
      if (element.type == 'ImportDeclaration') {
        if (element.source.value == './InvoiceEntry.js' || element.source.value == './InvoiceEntry' || element.source.value == 'InvoiceEntry') {
          assert(element.specifiers[0].local.name == 'InvoiceEntry', "You're not importing the InvoiceEntry class from the InvoiceEntry.js file.")
          quiz_import_found = true
        }
      }
    })
    assert(quiz_import_found, "You're not importing the InvoiceEntry.js file.")
  });
})