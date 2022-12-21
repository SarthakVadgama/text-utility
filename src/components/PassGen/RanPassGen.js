import React, { useEffect, useState } from 'react'
import '../../css/index.css'
import '../../css/ranPass.css'
import TableBody from './TableBody'
import {
  numbers,
  upperCaseLetters,
  lowerCaseLetters,
  specialCharacters,
} from './characters'

export default function RanPassGen(props) {
  const [password, setPassword] = useState('Random Password appears Here')
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

    if(passwordLength>=10 && passwordLength<=20){
      setPassword(createPassword(characterList));
    }else{
      props.showAlert("Password length selected mst be between 10 - 20", "danger");
    }
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

  const getLocItems = () => {
    let passes = localStorage.getItem('passes')
    if (passes) {
      return JSON.parse(localStorage.getItem('passes'))
    } else {
      return []
    }
  }
  const [items, setItems] = useState(getLocItems())
  const copyToClipboard = () => {
    const newTextArea = document.createElement('textarea')
    newTextArea.innerText = password;
    newTextArea.select();
    navigator.clipboard.writeText(newTextArea.value);
    props.showAlert("Text copied successfully", "success");
    setItems([...items, password])
    password('Random Password appears Here')
  }
  useEffect(() => {
    localStorage.setItem('passes', JSON.stringify(items))
  }, [items])

  const handleCopyPassword = (e) => {
    if (password === '' || password === 'Random Password appears Here') {
      props.showAlert("There is no password to copy. Please generate a password to copy.", "danger")
    } else {
      copyToClipboard()
    }
  }

  return (
    <>
      <div className={`container justify-content-center mb-5 pb-5 pt-3 tA-${props.mode} tAbRP-${props.mode}`}>
        <h3 className='mb-5'>Random Password Generator</h3>
        <center>

          <div className='generator__password'>
            <h3>{password}  <button onClick={handleCopyPassword} className={`copy__btn btn tAo-${props.mode} tAbo-${props.mode}`}>
              <i class="bi bi-clipboard-check-fill"></i> Copy
            </button></h3>

          </div>

          <div className='form-group w-50 fs-5'>
            <label htmlFor='password-strength' className='form-label mt-3'>Password length</label>
            <input
              defaultValue={passwordLength}
              onChange={(e) => setPasswordLength(e.target.value)}
              type='number'
              id='password-strength'
              name='password-strength'
              className='form-control mb-3'
              style={{ width: "5rem" }}
              max='20'
              min='10'
            />
          </div>

          {/* <div className='form-check m-2 w-25 fs-5'>
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

        <div className='form-check m-2 w-25 fs-5'>
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

        <div className='form-check m-2 w-25 fs-5'>
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

        <div className='form-check m-2 mb-3 w-25 fs-5'>
          <label htmlFor='include-symbols' className='form-check-label'>Include Symbols</label>
          <input
            checked={includeSymbols}
            onChange={(e) => setIncludeSymbols(e.target.checked)}
            type='checkbox'
            id='include-symbols'
            name='include-symbols'
            className='form-check-input'
          />
        </div> */}

          <button onClick={handleGeneratePassword} className={`generator__btn btn tAo-${props.mode} tAbo-${props.mode}`}>
            <i class="bi bi-wrench"></i>  - Generate Password
          </button>
        </center>
      </div>
      < TableBody items={items} setItems={setItems} mode={props.mode} showAlert={props.showAlert} />
    </>
  )
}