import React, { useState } from 'react'
function index() {
  const [text, setText] = useState('')
  const [processedText, setProcessedText] = useState('')
  const [hidenText, setHidenText] = useState([])

  // function
  const handleChange = (e) => {
    setText(e.target.value)
  }

  const submit = () => {
    // check if text is empty
    if (!text) {
      alert('please enter some text')
      return
    }

    // check and mask all the text
    let hiddenTextArray = JSON.parse(JSON.stringify(hidenText))
    let textWritten = JSON.parse(JSON.stringify(text))
    // take the special characters from it
    let formattedText = textWritten.replace(/".*?"/g, 'XXXX')
    formattedText = formattedText.replace(/'.*?'/g, 'XXXX')
    // hide the especial for single and double quotes
    let hiddenDoubleQuoteWords = textWritten.match(/".*?"/g)
    let hiddenSingleQuoteWords = textWritten.match(/'.*?'/g)

    // do all the checking before displaying the information
    if (
      hiddenDoubleQuoteWords &&
      Array.isArray(hiddenDoubleQuoteWords) &&
      hiddenDoubleQuoteWords.length > 0
    ) {
      hiddenTextArray = [
        ...hiddenTextArray,
        ...hiddenDoubleQuoteWords.map(
          (word) => word && word.replace(/['"]+/g, '')
        ),
      ]
    }
    if (
      hiddenSingleQuoteWords &&
      Array.isArray(hiddenSingleQuoteWords) &&
      hiddenSingleQuoteWords.length > 0
    ) {
      hiddenTextArray = [
        ...hiddenTextArray,
        ...hiddenSingleQuoteWords.map(
          (word) => word && word.replace(/['"]+/g, '')
        ),
      ]
    }

    console.log('formated text:', formattedText)
    console.log('hidden array:', hiddenTextArray)
    setProcessedText(formattedText)
    setHidenText(hiddenTextArray)
  }

  return (
    <div className="container">
      <h3>Using hooks</h3>
      <textarea
        name="text"
        id=""
        cols="50"
        rows="15"
        placeholder="Please enter keyword of phrase such as eg. Hello world “Boston Red Sox”, ‘Pepperoni Pizza’, ‘Cheese Pizza’, beer"
        onChange={(e) => handleChange(e)}
      ></textarea>
      <br />
      <button type="Submit" value="Submit" onClick={submit}>
        Send file
      </button>
      {processedText && (
        <p>
          {' '}
          <b>The formatted text is: </b> {processedText}
        </p>
      )}
      {hidenText.length > 0 && (
        <p>
          <b>The hidden text is: </b> {JSON.stringify(hidenText.toString())}
        </p>
      )}
    </div>
  )
}

export default index
