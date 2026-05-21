import React from 'react'
import { Image, Text, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import iconAction from '../../assets/images/icon-list-action.png'
import iconBasic from '../../assets/images/icon-list-basic.png'
import iconForm from '../../assets/images/icon-list-form.png'
import iconHOC from '../../assets/images/icon-list-hoc.png'
import iconLayout from '../../assets/images/icon-list-layout.png'
import iconNavigation from '../../assets/images/icon-list-navigation.png'
import iconView from '../../assets/images/icon-list-view.png'
import './index.scss'

interface PanelBasicState {
  panelNames: {
    [key: string]: {
      name: string
      icon: string
    }
  }
  list: {
    [key: string]: {
      id: string
      name: string
    }[]
  }
  currentId: string
}
interface PanelBasicProps {}
export default class PanelBasic extends React.Component<
  PanelBasicProps,
  PanelBasicState
> {
  public config: Taro.PageConfig = {
    navigationBarTitleText: 'Taro UI'
  }

  public constructor(props: any) {
    super(props)

    this.state = {
      panelNames: {
        basic: {
          name: '基础',
          icon: iconBasic
        },
        view: {
          name: '视图',
          icon: iconView
        },
        action: {
          name: '操作反馈',
          icon: iconAction
        },
        form: {
          name: '表单',
          icon: iconForm
        },
        layout: {
          name: '布局',
          icon: iconLayout
        },
        navigation: {
          name: '导航',
          icon: iconNavigation
        },
        advanced: {
          name: '高阶组件',
          icon: iconHOC
        }
      },
      list: {
        basic: [
          {
            id: 'Color',
            name: '颜色'
          },
          {
            id: 'Icon',
            name: '图标'
          },
          {
            id: 'Typo',
            name: '字体'
          },
          {
            id: 'Button',
            name: '按钮'
          }
        ],
        view: [
          {
            id: 'Avatar',
            name: '头像'
          },
          {
            id: 'Article',
            name: '文章'
          },
          {
            id: 'Badge',
            name: '徽标'
          },
          {
            id: 'Countdown',
            name: '倒计时'
          },
          {
            id: 'Curtain',
            name: '幕帘'
          },
          {
            id: 'Divider',
            name: '分割线'
          },
          {
            id: 'NoticeBar',
            name: '通告栏'
          },
          {
            id: 'Tag',
            name: '标签'
          },
          {
            id: 'Timeline',
            name: '时间轴'
          },
          {
            id: 'Swiper',
            name: '滑块视图容器'
          },
          {
            id: 'Load-More',
            name: '页面提示'
          },
          {
            id: 'Steps',
            name: '步骤条'
          }
        ],
        action: [
          {
            id: 'Action-Sheet',
            name: '动作面板'
          },
          {
            id: 'Activity-Indicator',
            name: '活动指示器'
          },
          {
            id: 'Modal',
            name: '模态框'
          },
          {
            id: 'Progress',
            name: '进度条'
          },
          {
            id: 'Toast',
            name: '轻提示'
          },
          {
            id: 'Swipe-Action',
            name: '滑动操作'
          },
          {
            id: 'Message',
            name: '消息通知'
          }
        ],
        form: [
          {
            id: 'Form',
            name: '表单'
          },
          {
            id: 'Input',
            name: '输入框'
          },
          {
            id: 'Radio',
            name: '单选框'
          },
          {
            id: 'Checkbox',
            name: '复选框'
          },
          {
            id: 'Switch',
            name: '开关'
          },
          {
            id: 'Rate',
            name: '评分'
          },
          {
            id: 'Input-Number',
            name: '数字输入框'
          },
          {
            id: 'Textarea',
            name: '多行文本框'
          },
          {
            id: 'Picker',
            name: '选择器'
          },
          {
            id: 'Picker-View',
            name: '滚动选择器'
          },
          {
            id: 'Slider',
            name: '滑动条'
          },
          {
            id: 'Search-Bar',
            name: '搜索栏'
          },
          {
            id: 'Image-Picker',
            name: '图片选择器'
          },
          {
            id: 'Range',
            name: '范围选择器'
          }
        ],
        layout: [
          {
            id: 'Flex',
            name: '弹性布局'
          },
          {
            id: 'Grid',
            name: '栅格'
          },
          {
            id: 'List',
            name: '列表'
          },
          {
            id: 'Card',
            name: '卡片'
          },
          {
            id: 'Float-Layout',
            name: '浮动弹层'
          },
          {
            id: 'Accordion',
            name: '手风琴'
          }
        ],
        navigation: [
          {
            id: 'NavBar',
            name: '导航栏'
          },
          {
            id: 'TabBar',
            name: '标签栏'
          },
          {
            id: 'Tabs',
            name: '标签页'
          },
          {
            id: 'Segmented-Control',
            name: '分段器'
          },
          {
            id: 'Pagination',
            name: '分页器'
          },
          {
            id: 'Drawer',
            name: '抽屉'
          },
          {
            id: 'Indexes',
            name: '索引选择器'
          }
        ],
        advanced: [
          {
            id: 'Calendar',
            name: '日历'
          }
        ]
      },
      currentId: ''
    }
  }

  public componentDidMount(): void {
    const { id } = Taro.Current.router.params
    this.setState({
      currentId: id.toLowerCase() || ''
    })
  }

  private gotoComponent(id: string, parent: string): void {
    Taro.navigateTo({
      url: `/pages/${parent.toLowerCase()}/${id.toLowerCase()}/index`
    })
  }

  public render(): JSX.Element {
    const { list, currentId, panelNames } = this.state
    const itemList = list[currentId] || []
    const title = (panelNames[currentId] && panelNames[currentId].name) || ''
    const icon = (panelNames[currentId] && panelNames[currentId].icon) || ''

    return (
      <View className='page'>
        {/* S Header */}
        <View className='panel-header'>
          <View className='panel-header__icon'>
            {icon ? (
              <Image src={icon} className='img' mode='widthFix' />
            ) : (
              <Text className='at-icon at-icon-list' />
            )}
          </View>
          <View className='panel-header__title'>{title}</View>
        </View>
        {/* E Header */}

        {/* S Body */}
        <View className='panel-body'>
          <View className='component-list'>
            {itemList.map(item => (
              <View
                className='component-list__item'
                key={item.id}
                onClick={this.gotoComponent.bind(this, item.id, currentId)}
              >
                <Text className='name'>{`${item.id} ${item.name}`}</Text>
                <Text className='at-icon at-icon-chevron-right' />
              </View>
            ))}
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
