const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("returns ['Lightouse', 'Labs'] for ['Yo Yo', 'Lightouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lightouse', 'Labs']), ['Lightouse', 'Labs'])
  })

  it("returns [2, 3, 4] for [1, 2, 3, 4]", () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4])
  })
})