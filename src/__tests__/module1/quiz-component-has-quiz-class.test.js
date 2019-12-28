import React from 'react';
import ReactDOM from 'react-dom';
import App from '../../App';
import { shallow } from 'enzyme';
import { assert } from 'chai';

let fs = require('fs');
let babylon = require("babylon");

describe('InvoiceEntry Component', () => {
  it('has a InvoiceEntry class that extends Component @quiz-component-has-quiz-class', () => {
    let file;
    try {
      file = fs.readFileSync(__dirname + '/../../InvoiceEntry.js').toString();
    } catch (e) {
      assert(false, "The InvoiceEntry.js file hasn't been created yet.")
    }

    let ast = babylon.parse(file, { sourceType: "module", plugins: ["jsx"] })

    let class_declaration_count = 0;

    ast['program']['body'].forEach(element => {
      if (element.type == 'ClassDeclaration') {
        if (element.id.name == 'InvoiceEntry') {
          if (element.superClass.name == 'Component') {
            
          } else {
            assert(false, "We found a class named InvoiceEntry, but it doesn't extend the Component class.")
          }
        }
        class_declaration_count = class_declaration_count + 1
      }
    })

    assert(class_declaration_count > 0, "We couldn't find any class declarations.")
    assert(class_declaration_count == 1, "We found more than one class declaration, but there's only supposed to be one class named InvoiceEntry.")
  })

  it('exports the InvoiceEntry class as default @quiz-component-has-quiz-class', () => {
    let file;
    try {
      file = fs.readFileSync(__dirname + '/../../InvoiceEntry.js').toString();
    } catch (e) {
      assert(false, "The InvoiceEntry.js file hasn't been created yet.")
    }

    let re = /\nexport default Quiz\;*\s*$/g
    let match = file.match(re)
    assert(match != null && match.length > 0, "We couldn't find `export default InvoiceEntry` at the end of your InvoiceEntry.js file.")
  })
})