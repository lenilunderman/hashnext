import Head from 'next/head'
// import React, { useState } from 'react'

// export default function Home() {
//   const [text, setText] = useState('')
//   const [hiddenText, sethiddenText] = useState([])
//   const [proceText, setProceText] = ''

//   const handleChange = (e) => {
//     //console.log(e.target.value)
//     setText(e.target.value)
//   }

//   const handleClick = () => {
//     if (!text) {
//       alert('no text there ')
//       return
//     }

//     let hiddenTextArray = JSON.parse(JSON.stringify(hiddenText))
//     let textWrittern = JSON.parse(JSON.stringify(text))
//     console.log(textWrittern)
//     // format the text
//     let formatedText = textWrittern.replace(/".*?"/g, 'XXXX')
//     formatedText = formatedText.replace(/'.*?'/g, 'XXXX')
//     // get the secret text from single and double quotes
//     let hiddenSingleQuoteWords = textWrittern.match(/'.*?'/g)
//     let hiddenDoubleQouteWords = textWrittern.match(/".*?"/g)
//     console.log('single:', hiddenSingleQuoteWords)
//     console.log('double', hiddenDoubleQouteWords)
//     console.log('text formated: ', formatedText)

//     if (
//       hiddenDoubleQouteWords &&
//       Array.isArray(hiddenDoubleQouteWords) &&
//       hiddenDoubleQouteWords.length > 0
//     ) {
//       hiddenTextArray = [
//         ...hiddenTextArray,
//         ...hiddenDoubleQouteWords.map(
//           (word) => word && word.replace(/['"]+/g, '')
//         ),
//       ]
//     }
//     if (
//       hiddenSingleQuoteWords &&
//       Array.isArray(hiddenSingleQuoteWords) &&
//       hiddenSingleQuoteWords.length > 0
//     ) {
//       hiddenTextArray = [
//         ...hiddenTextArray,
//         ...hiddenSingleQuoteWords.map(
//           (word) => word && word.replace(/['"]+/g, '')
//         ),
//       ]
//     }

//     sethiddenText: hiddenTextArray, console.log('hd:', hiddenTextArray)
//   }
//   return (
//     <div>
//       <Head>
//         <title>Create Next App</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>
//       <h1> The secret CIA Word Compiler</h1>
//       <p>
//         Given keywords or phrases using single and double quotes will result in
//         a hidden text mask.
//       </p>
//       <textarea
//         name="text"
//         cols="30"
//         rows="10"
//         placeholder="Please enter keyword of phrase such as eg. Hello world “Boston Red Sox”, ‘Pepperoni Pizza’, ‘Cheese Pizza’, beer"
//         onChange={(e) => handleChange(e)}
//       ></textarea>
//       <br />

//       <button type="button" value="Submit" onClick={handleClick}>
//         Send information
//       </button>
//       <br />
//       {hiddenTextArray && hiddenTextArray.length > 0 && (
//         <span>
//           <strong>The hidden text is: </strong>
//           {JSON.stringify(hiddenTextArray.toString())}
//         </span>
//       )}
//     </div>
//   )
// }
