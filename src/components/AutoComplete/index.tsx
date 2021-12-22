import React, {
  FC,
  useState,
  ChangeEvent,
  ReactElement,
  useEffect,
  useRef,
  KeyboardEvent
} from 'react'
import classnames from 'classnames'
import Input, { InputProps } from '../Input'
import Icon from '@/components/Icon'
import useDebounce from '../../hooks/useDebounce'
import useClickOutside from '../../hooks/useClickOutside'
interface DataSourceObject {
  value: string
}
export type DataSourceType<T = {}> = T & DataSourceObject
interface AutoCompleteProps extends Omit<InputProps, 'onSelect'> {
  //异步支持
  customFilter: (str: string) => DataSourceType[] | Promise<DataSourceType[]>
  onSelect?: (item: DataSourceType) => void
  customRender?: (item: DataSourceType) => ReactElement
}
export const AutoComplete: FC<AutoCompleteProps> = (props) => {
  const { customFilter, onSelect, value, customRender, ...restProp } = props
  const [inputvalue, setInputValue] = useState(value as string)
  const [loading, setLoading] = useState(false)
  const [highLightIndex, setHighLightIndex] = useState(-1)
  const [selData, setSelData] = useState<DataSourceType[]>([])
  const tirgger = useRef(false)
  const divEle = useRef(null)
  const debounceParam = useDebounce(inputvalue)
  useClickOutside(divEle, () => {
    setSelData([])
  })
  useEffect(() => {
    if (debounceParam && tirgger.current) {
      const result = customFilter(debounceParam)
      if (result instanceof Promise) {
        setLoading(true)
        result.then((res) => {
          console.log(highLightIndex, 'meiyou')
          setLoading(false)
          setSelData(res)
        })
      } else {
        setSelData(result)
      }
    } else {
      setSelData([])
    }
    setHighLightIndex(-1)
  }, [debounceParam])
  const handleClick = (item: DataSourceType) => {
    tirgger.current = false
    setInputValue(item.value)
    setSelData([])
    onSelect && onSelect(item)
  }
  const handleSelect = (e: ChangeEvent<HTMLInputElement>) => {
    tirgger.current = true
    const value = e.target.value.trim()
    setInputValue(value)
  }
  const renderItem = (item: DataSourceType) => {
    return customRender ? customRender(item) : item.value
  }
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.code) {
      case 'ArrowDown':
        highlight(highLightIndex + 1)
        break
      case 'ArrowUp':
        highlight(highLightIndex - 1)
        break
      case 'Enter':
        handleClick(selData[highLightIndex])
        break
      case 'Escape':
        setSelData([])
        break
      default:
        break
    }
  }
  const highlight = (index: number) => {
    if (index < 0) index = 0
    if (index >= selData.length) index = selData.length - 1
    setHighLightIndex(index)
  }
  const renderList = () => {
    return (
      <ul>
        {selData.map((item, index) => {
          const cnames = classnames('item', {
            'high-light': index === highLightIndex
          })
          return (
            <li
              key={index}
              className={cnames}
              onClick={() => handleClick(item)}
            >
              {renderItem(item)}
            </li>
          )
        })}
      </ul>
    )
  }

  return (
    <div className="" ref={divEle}>
      <Input
        value={inputvalue}
        {...restProp}
        onChange={handleSelect}
        onKeyDown={handleKeyDown}
      />
      {loading && (
        <ul>
          <Icon icon="spinner" spin></Icon>
        </ul>
      )}
      {!!selData.length && renderList()}
    </div>
  )
}

export default AutoComplete
