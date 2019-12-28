let fs = require('fs');
import { assert } from 'chai';

describe('InvoiceEntry Component', () => {
  it('exists @quiz-component-exists', () => {
    let file;
    try {
      file = fs.readFileSync(__dirname + '/../../InvoiceEntry.js').toString();
    } catch (e) {
      assert(false, "The InvoiceEntry.js file hasn't been created yet.")
    }
  });
})
