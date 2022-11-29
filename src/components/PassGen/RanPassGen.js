import React, { useState } from 'react'
import '../../css/index.css'
import {
  numbers,
  upperCaseLetters,
  lowerCaseLetters,
  specialCharacters,
} from './characters'

export default function RanPassGen() {
  const [password, setPassword] = useState('')
  const [passwordLength, setPasswordLength] = useState(12)
  const [includeUppercase, setIncludeUppercase] = useState(false)
  const [includeLowercase, setIncludeLowercase] = useState(false)
  const [includeNumbers, setIncludeNumbers] = useState(false)
  const [includeSymbols, setIncludeSymbols] = useState(false)

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
  }


  const handleCopyPassword = (e) => {
    if (password === '') {
    } else {
      copyToClipboard()
    }
  }

  return (
      <div className='container'>
          <div className='generator__password'>
            <h3>{password}</h3>
            <button onClick={handleCopyPassword} className='copy__btn'>
              <i className='far fa-clipboard'>Copy pass</i>
            </button>
          </div>

          <div className='form-group'>
            <label htmlFor='password-strength'>Password length</label>
            <input
              defaultValue={passwordLength}
              onChange={(e) => setPasswordLength(e.target.value)}
              type='number'
              id='password-strength'
              name='password-strength'
              max='20'
              min='10'
            />
          </div>

          <div className='form-group'>
            <label htmlFor='uppercase-letters'>Include Uppercase Letters</label>
            <input
              checked={includeUppercase}
              onChange={(e) => setIncludeUppercase(e.target.checked)}
              type='checkbox'
              id='uppercase-letters'
              name='uppercase-letters'
            />
          </div>

          <div className='form-group'>
            <label htmlFor='lowercase-letters'>Include Lowercase Letters</label>
            <input
              checked={includeLowercase}
              onChange={(e) => setIncludeLowercase(e.target.checked)}
              type='checkbox'
              id='lowercase-letters'
              name='lowercase-letters'
            />
          </div>

          <div className='form-group'>
            <label htmlFor='include-numbers'>Include Numbers</label>
            <input
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
              type='checkbox'
              id='include-numbers'
              name='include-numbers'
            />
          </div>

          <div className='form-group'>
            <label htmlFor='include-symbols'>Include Symbols</label>
            <input
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
              type='checkbox'
              id='include-symbols'
              name='include-symbols'
            />
          </div>

          <button onClick={handleGeneratePassword} className='generator__btn'>
            Generate Password
          </button>
        </div>
  )
}