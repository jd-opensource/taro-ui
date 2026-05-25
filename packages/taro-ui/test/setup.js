import '@testing-library/jest-dom'

const INITIAL_RANDOM_SEED = 0

function createSeededRandom(seed = INITIAL_RANDOM_SEED) {
  let state = seed
  return () => {
    state += 0.123456789
    return state % 1
  }
}

let nextRandom = createSeededRandom()

beforeEach(() => {
  nextRandom = createSeededRandom()
})

jest.spyOn(Math, 'random').mockImplementation(() => nextRandom())

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn()
  }))
})

global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn()
}))
