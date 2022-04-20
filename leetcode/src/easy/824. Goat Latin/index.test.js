import {toGoatLatin} from "./index";

describe("sample test", () => {
  test('test 1', () => {
    const sentence = "I speak Goat Latin"
    expect(toGoatLatin(sentence)).toEqual("Imaa peaksmaaa oatGmaaaa atinLmaaaaa")
  })

  test('test 2', () => {
    const sentence = "The quick brown fox jumped over the lazy dog"
    expect(toGoatLatin(sentence)).toEqual("heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa")
  })
})
