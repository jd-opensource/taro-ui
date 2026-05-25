import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { Image, View } from '@tarojs/components'
import { ITouchEvent } from '@tarojs/components/types/common'
import Taro from '@tarojs/taro'
import { AtImagePickerProps, File } from '../../../types/image-picker'
import { noop, uuid } from '../../common/utils'

interface MatrixFile extends Partial<File> {
  type: 'blank' | 'btn'
  uuid: string
}

// 生成 jsx 二维矩阵
const generateMatrix = (
  files: MatrixFile[],
  col: number,
  showAddBtn: boolean
): MatrixFile[][] => {
  const matrix: Array<MatrixFile>[] = []
  const length = showAddBtn ? files.length + 1 : files.length
  const row = Math.ceil(length / col)
  for (let i = 0; i < row; i++) {
    if (i === row - 1) {
      // 最后一行数据加上添加按钮
      const lastArr = files.slice(i * col)
      if (lastArr.length < col) {
        if (showAddBtn) {
          lastArr.push({ type: 'btn', uuid: uuid() })
        }
        // 填补剩下的空列
        for (let j = lastArr.length; j < col; j++) {
          lastArr.push({ type: 'blank', uuid: uuid() })
        }
      }
      matrix.push(lastArr)
    } else {
      matrix.push(files.slice(i * col, (i + 1) * col))
    }
  }
  return matrix
}

function AtImagePicker({
  className = '',
  customStyle = '',
  files = [],
  mode = 'aspectFill',
  showAddBtn = true,
  multiple = false,
  length = 4,
  count,
  sizeType,
  sourceType,
  onChange = noop,
  onImageClick,
  onFail,
  children
}: AtImagePickerProps): JSX.Element {
  const ENV = Taro.getEnv()

  const chooseFile = (): void => {
    const filePathName =
      ENV === Taro.ENV_TYPE.ALIPAY ? 'apFilePaths' : 'tempFiles'
    // const count = multiple ? 99 : 1
    const params: any = {}
    if (multiple) {
      params.count = 99
    }
    if (count) {
      params.count = count
    }
    if (sizeType) {
      params.sizeType = sizeType
    }
    if (sourceType) {
      params.sourceType = sourceType
    }
    Taro.chooseImage(params)
      .then(res => {
        const targetFiles = res.tempFilePaths.map((path, i) => ({
          url: path,
          file: res[filePathName][i]
        }))
        const newFiles = files.concat(targetFiles)
        onChange(newFiles, 'add')
      })
      .catch(err => {
        onFail?.(err)
      })
  }

  const handleImageClick = (idx: number): void => {
    onImageClick && onImageClick(idx, files[idx])
  }

  const handleRemoveImg = (idx: number, event: ITouchEvent): void => {
    event.stopPropagation()
    event.preventDefault()
    if (ENV === Taro.ENV_TYPE.WEB) {
      window.URL.revokeObjectURL(files[idx].url)
    }
    const newFiles = files.filter((_, i) => i !== idx)
    onChange(newFiles, 'remove', idx)
  }

  const rowLength = length <= 0 ? 1 : length
  // 行数
  const matrix = generateMatrix(files as MatrixFile[], rowLength, showAddBtn)
  const rootCls = classNames('at-image-picker', className)

  return (
    <View className={rootCls} style={customStyle}>
      {matrix.map((row, i) => (
        <View className='at-image-picker__flex-box' key={i + 1}>
          {row.map((item, j) =>
            item.url ? (
              <View className='at-image-picker__flex-item' key={i * length + j}>
                <View className='at-image-picker__item'>
                  <View
                    className='at-image-picker__remove-btn'
                    onClick={(event: ITouchEvent) =>
                      handleRemoveImg(i * length + j, event)
                    }
                  ></View>
                  <Image
                    className='at-image-picker__preview-img'
                    mode={mode}
                    src={item.url}
                    onClick={() => handleImageClick(i * length + j)}
                  />
                </View>
              </View>
            ) : (
              <View
                className='at-image-picker__flex-item'
                key={`empty_${i * length}${j}`}
              >
                {item.type === 'btn' && (
                  <View onClick={chooseFile}>
                    {children || (
                      <View className='at-image-picker__item at-image-picker__choose-btn'>
                        <View className='add-bar'></View>
                        <View className='add-bar'></View>
                      </View>
                    )}
                  </View>
                )}
              </View>
            )
          )}
        </View>
      ))}
    </View>
  )
}

AtImagePicker.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  customStyle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  files: PropTypes.array,
  mode: PropTypes.oneOf([
    'scaleToFill',
    'aspectFit',
    'aspectFill',
    'widthFix',
    'top',
    'bottom',
    'center',
    'left',
    'right',
    'top left',
    'top right',
    'bottom left',
    'bottom right'
  ]),
  showAddBtn: PropTypes.bool,
  multiple: PropTypes.bool,
  length: PropTypes.number,
  onChange: PropTypes.func,
  onImageClick: PropTypes.func,
  onFail: PropTypes.func,
  count: PropTypes.number,
  sizeType: PropTypes.array,
  sourceType: PropTypes.array
}

export default AtImagePicker
