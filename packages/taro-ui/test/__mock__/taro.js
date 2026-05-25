const ENV_TYPE = {
  WEB: 'WEB',
  WEAPP: 'WEAPP',
  ALIPAY: 'ALIPAY',
  SWAN: 'SWAN',
  TT: 'TT',
  QQ: 'QQ',
  JD: 'JD'
}

function createSelectorQuery() {
  const query = {
    select() {
      return query
    },
    selectViewport() {
      return query
    },
    boundingClientRect() {
      return query
    },
    scrollOffset() {
      return query
    },
    exec(callback) {
      if (callback) {
        callback([
          {
            width: 200,
            height: 43,
            top: 0,
            left: 0,
            right: 375,
            bottom: 43,
            scrollTop: 0,
            scrollLeft: 0
          }
        ])
      }
    }
  }
  return query
}

const taro = {
  ENV_TYPE,
  getEnv: () => ENV_TYPE.WEB,
  getSystemInfo: jest.fn().mockResolvedValue({ windowWidth: 375 }),
  nextTick: callback => Promise.resolve().then(callback),
  createSelectorQuery,
  pxTransform: size => `${size}px`,
  initPxTransform: jest.fn(),
  eventCenter: {
    on: jest.fn(),
    off: jest.fn(),
    once: jest.fn(),
    trigger: jest.fn()
  },
  useDidShow: jest.fn(),
  useDidHide: jest.fn(),
  chooseImage: jest.fn(),
  showToast: jest.fn(),
  hideToast: jest.fn(),
  navigateTo: jest.fn(),
  redirectTo: jest.fn()
}

module.exports = taro
module.exports.default = taro
