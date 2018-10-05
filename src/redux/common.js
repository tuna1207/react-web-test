const reducerPrefix = 'test-app'

const reducerPrefixFormat = _key => `${reducerPrefix}/${_key}_reducer/`.toUpperCase()

export { reducerPrefixFormat }
