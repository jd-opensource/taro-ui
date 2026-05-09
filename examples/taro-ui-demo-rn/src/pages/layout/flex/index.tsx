import React from 'react'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'

export default class FlexPage extends React.Component {
  public config: Taro.PageConfig = {
    navigationBarTitleText: 'Taro UI',
  }

  public render(): JSX.Element {
    return (
      <View className='page flex-page'>
        <DocsHeader title='Flex 弹性布局' />

        {/* <View className='at-row'>
          <Text className='at-col at-col-bg-1 at-col--wrap'>
            自动换行这样用就行了，可是换行换的不对，在有逗号的地方就换行了，后面还有很多空白
          </Text>
        </View>

        <View className='at-row'>
          <Text className='at-col at-col-bg-1 at-col--wrap'>
            AAAAAAAAAAA,AAAAAAAAAA,AAAAAAAAAA,AAAAAAA,AAAAAAAA,AAAAAAAAA,
          </Text>
        </View>

        <View className='at-row'>
          <Text className='at-col at-col-bg-1 at-col-1 at-col--auto'>
            AA,,A,,,,,
          </Text>
        </View>

        <View className='at-row'>
          <Text className='at-col at-col-bg-1 at-col-1 at-col--auto'>
          自动换行这样用就行了，可是换行换的不对，在有逗号的地方就换行了，后面还有很多空白
          </Text>
        </View> */}

        <View className='doc-body'>
          {/* 基本案例 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>基本案例</View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <View className='at-row'>
                  <View className='at-col at-col-bg-1'>A</View>
                  <View className='at-col at-col-bg-2'>B</View>
                  <View className='at-col at-col-bg-3'>C</View>
                </View>
              </View>
            </View>
          </View>

          {/* 定义长度 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>定义长度</View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <View className='at-row'>
                  <View className='at-col at-col-bg-1 at-col-3'>A</View>
                  <View className='at-col at-col-bg-2 at-col-6'>B</View>
                  <View className='at-col at-col-bg-3 at-col-2'>C</View>
                  <View className='at-col at-col-bg-4 at-col-1'>D</View>
                </View>
              </View>
            </View>
          </View>

          {/* 定义偏移 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>定义偏移</View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <View className='at-row'>
                  <View className='at-col at-col-bg-1 at-col__offset-2'>A</View>
                  <View className='at-col at-col-bg-2 at-col__offset-3'>B</View>
                  <View className='at-col at-col-bg-3'>C</View>
                </View>
              </View>
            </View>
          </View>

          {/* 超出换行 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>超出换行</View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <View className='at-row at-row--wrap'>
                  <View className='at-col at-col-bg-1 at-col-4'>A</View>
                  <View className='at-col at-col-bg-2 at-col-4'>B</View>
                  <View className='at-col at-col-bg-3 at-col-4'>C</View>
                  <View className='at-col at-col-bg-4 at-col-4'>D</View>
                  <View className='at-col at-col-bg-5 at-col-4'>E</View>
                </View>
              </View>
            </View>
          </View>

          {/* 宽度根据内容撑开 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>宽度根据内容撑开（RN不支持）</View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <View className='at-row'>
                  <View className='at-col at-col-bg-1 at-col-1 at-col--auto'>
                    被内容撑开
                  </View>
                  <View className='at-col at-col-bg-2'>B</View>
                </View>
              </View>
            </View>
          </View>

          {/* 内容自动换行 */}
          <View className='doc-body--panel'>
            <View className='panel__title'>内容自动换行</View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <View className='at-row'>
                  <View className='at-col at-col-bg-1 at-col-1 at-col--wrap'>
                    内容自动换行
                  </View>
                  <View className='at-col at-col-bg-2'>B</View>
                </View>
              </View>
            </View>
          </View>

          <View className='doc-body--panel'>
            <View className='panel__title'>侧轴方向的对齐方式</View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <View className='at-row'>
                  <View style='height:100px' className='at-col at-col-bg-1'>
                    A
                  </View>
                  <View className='at-col at-col-bg-2'>
                    默认对齐方式 -- stretch
                  </View>
                </View>
              </View>
              <View className='panel__content--example-item'>
                <View className='at-row at-row__align--start'>
                  <View style='height:100px' className='at-col at-col-bg-1'>
                    B
                  </View>
                  <View className='at-col at-col-bg-2'>顶部对齐 -- start</View>
                </View>
              </View>
              <View className='panel__content--example-item'>
                <View className='at-row at-row__align--center'>
                  <View style='height:100px' className='at-col at-col-bg-1'>
                    C
                  </View>
                  <View className='at-col at-col-bg-2'>居中对齐 -- center</View>
                </View>
              </View>
              <View className='panel__content--example-item'>
                <View className='at-row at-row__align--end'>
                  <View style='height:100px' className='at-col at-col-bg-1'>
                    D
                  </View>
                  <View className='at-col at-col-bg-2'>底部对齐 -- end</View>
                </View>
              </View>
            </View>
          </View>

          <View className='doc-body--panel'>
            <View className='panel__title'>主轴方向的排列方式</View>
            <View className='panel__content'>
              <View className='panel__content--example-item'>
                <View className='at-row'>
                  <View className='at-col at-col-bg-1 at-col-5'>默认</View>
                  <View className='at-col at-col-bg-2 at-col-5'>Start</View>
                </View>
              </View>
              <View className='panel__content--example-item'>
                <View className='at-row at-row__justify--end'>
                  <View className='at-col at-col-bg-1 at-col-5'>底部排列</View>
                  <View className='at-col at-col-bg-2 at-col-5'>End</View>
                </View>
              </View>
              <View className='panel__content--example-item'>
                <View className='at-row at-row__justify--center'>
                  <View className='at-col at-col-bg-1 at-col-5'>居中排列</View>
                  <View className='at-col at-col-bg-2 at-col-5'>Center</View>
                </View>
              </View>
              <View className='panel__content--example-item'>
                <View className='at-row at-row__justify--between'>
                  <View className='at-col at-col-bg-1 at-col-5'>左右排列</View>
                  <View className='at-col at-col-bg-2 at-col-5'>Between</View>
                </View>
              </View>
              <View className='panel__content--example-item'>
                <View className='at-row at-row__justify--around'>
                  <View className='at-col at-col-bg-1 at-col-5'>平均排列</View>
                  <View className='at-col at-col-bg-2 at-col-5'>Around</View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
