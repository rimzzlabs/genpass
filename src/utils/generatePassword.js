const createPassword = (length, chars) => {
  let password = ''
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return password
}

const generatePassword = (length = 8, lower = true, upper = false, number = false, symbol = false) => {
  const upperText = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lowerText = 'abcdefghijklmnopqrstuvwxyz'
  const numberText = 1234567890
  const symbolText = `!@#$%^&*()_+-=[]{}|;\\':",./<>?${'`'}~`

  let chars = ''
  if (lower) chars += lowerText
  if (symbol) chars += symbolText
  if (upper) chars += upperText
  if (number) chars += numberText

  return createPassword(length, chars)
}

export default generatePassword
