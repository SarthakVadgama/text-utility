import React, { useState } from 'react'
import '../../css/index.css'
import {
  numbers,
  upperCaseLetters,
  lowerCaseLetters,
  specialCharacters,
} from './characters'

export default function RanPassGen(props) {
  const [password, setPassword] = useState('')
  const [passwordLength, setPasswordLength] = useState(12)
  const [includeUppercase, setIncludeUppercase] = useState(true)
  const [includeLowercase, setIncludeLowercase] = useState(true)
  const [includeNumbers, setIncludeNumbers] = useState(true)
  const [includeSymbols, setIncludeSymbols] = useState(true)

  const handleGeneratePassword = (e) => {
    if (
      !includeUppercase &&
      !includeLowercase &&
      !includeNumbers &&
      !includeSymbols
    ) {
    }
    let characterList = ''

    if (includeLowercase) {
      characterList = characterList + lowerCaseLetters
    }

    if (includeUppercase) {
      characterList = characterList + upperCaseLetters
    }

    if (includeNumbers) {
      characterList = characterList + numbers
    }

    if (includeSymbols) {
      characterList = characterList + specialCharacters
    }

    setPassword(createPassword(characterList))
  }
  const createPassword = (characterList) => {
    let password = ''
    const characterListLength = characterList.length

    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characterListLength)
      password = password + characterList.charAt(characterIndex)
    }
    return password
  }

  const copyToClipboard = () => {
    const newTextArea = document.createElement('textarea')
    newTextArea.innerText = password;
    newTextArea.select();
    navigator.clipboard.writeText(newTextArea.value);
    props.showAlert("Text copied successfully", "success");
  }
  const handleCopyPassword = (e) => {
    if (password === '') {
    } else {
      copyToClipboard()
    }
  }

  return (
      <div className='container justify-content-center p-5'>
          <div className='generator__password'>
            <h3>{password}</h3>
            <button onClick={handleCopyPassword} className='copy__btn btn btn-warning'>
              <i className='far fa-clipboard'></i> Copy Password
            </button>
          </div>

          <div className='form-group'>
            <label htmlFor='password-strength' className='form-label mt-3'>Password length</label>
            <input
              defaultValue={passwordLength}
              onChange={(e) => setPasswordLength(e.target.value)}
              type='number'
              id='password-strength'
              name='password-strength'
              className='form-control mb-3'
              style={{width: "10rem"}}
              max='20'
              min='10'
            />
          </div>

          <div className='form-check m-2'>
            <label htmlFor='uppercase-letters' className='form-check-label'>Include Uppercase Letters</label>
            <input
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
              type='checkbox'
              id='uppercase-letters'
              name='uppercase-letters'
              className='form-check-input'
            />
          </div>

          <div className='form-check m-2'>
            <label htmlFor='lowercase-letters' className='form-check-label'>Include Lowercase Letters</label>
            <input
              checked={includeLowercase}
              onChange={(e) => setIncludeLowercase(e.target.checked)}
              type='checkbox'
              id='lowercase-letters'
              name='lowercase-letters'
              className='form-check-input'
            />
          </div>

          <div className='form-check m-2'>
            <label htmlFor='include-numbers' className='form-check-label'>Include Numbers</label>
            <input
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
              type='checkbox'
              id='include-numbers'
              name='include-numbers'
              className='form-check-input'
            />
          </div>

          <div className='form-check m-2 mb-3'>
            <label htmlFor='include-symbols' className='form-check-label'>Include Symbols</label>
            <input
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
              type='checkbox'
              id='include-symbols'
              name='include-symbols'
              className='form-check-input'
            />
          </div>

          <button onClick={handleGeneratePassword} className='generator__btn btn btn-success'>
            Generate Password
          </button>
        </div>
  )
}