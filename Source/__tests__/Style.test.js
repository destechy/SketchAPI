/* globals expect */

import { Style } from '../Style'

export const tests = {
  testBorders() {
    const style = new Style()
    style.borders = ['#11223344', '#1234']
    expect(style.sketchObject.borders().count()).toBe(2)
  },

  testFills() {
    const style = new Style()
    style.borders = ['#11223344', '#1234']
    expect(style.sketchObject.borders().count()).toBe(2)
  },
}