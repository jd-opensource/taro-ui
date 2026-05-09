export default {
  pages: [
    'pages/index/index',
    'pages/panel/index',
    'pages/basic/icon/index',
    'pages/basic/button/index',
    'pages/basic/color/index',
    'pages/basic/typo/index',
    'pages/advanced/calendar/index',
    'pages/theme/index'
  ],
  subpackages: [
    {
      root: 'pages/form',
      pages: [
        'form/index',
        'checkbox/index',
        'input/index',
        'input-number/index',
        'radio/index',
        'textarea/index',
        'switch/index',
        'rate/index',
        'picker/index',
        'picker-view/index',
        'slider/index',
        'search-bar/index',
        'image-picker/index',
        'range/index'
      ]
    },
    {
      root: 'pages/view',
      pages: [
        'noticebar/index',
        'badge/index',
        'tag/index',
        'avatar/index',
        'article/index',
        'timeline/index',
        'swiper/index',
        'load-more/index',
        'divider/index',
        'countdown/index',
        'steps/index',
        'curtain/index'
      ]
    },
    {
      root: 'pages/navigation',
      pages: [
        'drawer/index',
        'pagination/index',
        'tabs/index',
        'tabbar/index',
        'segmented-control/index',
        'navbar/index',
        'indexes/index'
      ]
    },
    {
      root: 'pages/action',
      pages: [
        'toast/index',
        'modal/index',
        'progress/index',
        'action-sheet/index',
        'swipe-action/index',
        'activity-indicator/index',
        'message/index'
      ]
    },
    {
      root: 'pages/layout',
      pages: [
        'flex/index',
        'grid/index',
        'float-layout/index',
        'card/index',
        'list/index',
        'accordion/index'
      ]
    }
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'Taro UI',
    navigationBarTextStyle: 'black'
  }
}
