import React from 'react'
import { Image, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import articleImg from '../../../assets/images/article.jpg'
import './index.scss'

export default class ArticlePage extends React.Component {
  public config: Taro.PageConfig = {
    navigationBarTitleText: 'Article 文章'
  }

  public render(): JSX.Element {
    return (
      <View className='page'>
        {/* S Header */}
        <DocsHeader title='Article 文章'></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className='doc-body'>
          <View className='panel'>
            <View className='panel__title'>示例</View>
            <View className='panel__content no-padding'>
              <View className='at-article'>
                <View className='at-article__h1'>这是一级标题这是一级标题</View>
                <View className='at-article__info'>
                  2017-05-07&nbsp;&nbsp;&nbsp;这是作者
                </View>
                <View className='at-article__content'>
                  <View className='at-article__section'>
                    <View className='at-article__h2'>这是二级标题</View>
                    <View className='at-article__h3'>这是三级标题</View>
                    <View className='at-article__p'>
                      这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。1234567890123456789012345678901234567890
                      ABCDEFGHIJKLMNOPQRSTUVWXYZ
                    </View>
                    <View className='at-article__p'>
                      这是文本段落。这是文本段落。
                    </View>
                    <Image
                      className='at-article__img'
                      src={articleImg}
                      mode='widthFix'
                    />
                  </View>

                  <View className='at-article__section'>
                    <View className='at-article__h2'>这是二级标题</View>
                    <View className='at-article__h3'>这是三级标题</View>
                    <View className='at-article__p'>
                      这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。这是文本段落。1234567890123456789012345678901234567890
                      ABCDEFGHIJKLMNOPQRSTUVWXYZ
                    </View>
                    <Image
                      className='at-article__img'
                      src={articleImg}
                      mode='widthFix'
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
