import { separateAddress } from 'utils/separate_address'

let someString: string
let separator: string

beforeEach(() => {
  someString = 'ул.Кирова 8, вход сектор А5 <br> стадион ”Динамо”'
  separator = '<br>'
})

test('delete <br> from string', () => {
  const result = separateAddress(someString)

  expect(result.includes(separator)).toBeFalsy()
})
