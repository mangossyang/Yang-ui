import React, { useState } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
// import Button from '@/components/Button'
// import Menu from './components/Menu/menu'
// import MenuItem from './components/Menu/menuItem'
// import SubMenu from './components/Menu/subMenu'
// import Icon from '@/components/Icon'
// import Transition from '@/components/Transition'
// import Input from '@/components/Input'
// import AutoComplete, { DataSourceType } from '@/components/AutoComplete'
// import Upload from '@/components/Upload'
library.add(fas)

function App() {
  // const [show, setShow] = useState(false)
  // const data = ['sdfd', 'dfe', 'y', 'd']
  // const data2 = [
  //   { value: 'sdfd', id: 1 },
  //   { value: 'dfe', id: 1 },
  //   { value: 'y', id: 1 },
  //   { value: 'd', id: 1 }
  // ]
  // const handleClick = (str: string) => {
  //   return data2.filter((i) => i.value.includes(str))
  // }
  // const handleClick = (str: string) => {
  //   return fetch(`https://api.github.com/search/users?q=${str}`)
  //     .then((res) => res.json())
  //     .then(({ items }) => {
  //       return (
  //         items &&
  //         items.length &&
  //         items
  //           .slice(0, 10)
  //           .map((item: any) => ({ value: item.login, ...item }))
  //       )
  //     })
  // }
  // const customRender = (item: DataSourceType<LakerProps>) => {
  //   return (
  //     <>
  //       <img
  //         src={item.avatar_url}
  //         style={{ width: '50px', borderRadius: '50%', marginRight: '10px' }}
  //         alt=""
  //       />
  //       <span>{item.value}</span>
  //     </>
  //   )
  // }
  // interface LakerProps {
  //   value: string
  //   id?: number
  //   avatar_url?: string
  // }
  // const beforeUpload = (p: File) => {
  //   console.log(p)
  //   return false
  // }
  return (
    <div className="App">
      {/* <Button btnType='primary' onClick={() => setShow(!show)}>click</Button>
      <Transition wrapper in={show} timeout={300} animation='zoom-in-left'>
      <Icon icon="coffee" theme="success" size="10x"></Icon>
      </Transition> */}
      {/* <Input prepend="cc" style={{ width: '300px' }} icon="coffee" />
      <Menu defaultIndex="0" onSelect={(index) => alert(index)}>
        <MenuItem> cool link</MenuItem>
        <MenuItem disabled> cool link</MenuItem>
        <SubMenu title="dropdowm">
          <MenuItem> cool link</MenuItem>
          <MenuItem> cool link</MenuItem>
        </SubMenu>
        <MenuItem> cool link</MenuItem>
      </Menu>
      <Menu mode="vertical" defaultOpenSubMenus={['2']}>
        <MenuItem> cool link</MenuItem>
        <MenuItem disabled> cool link</MenuItem>
        <SubMenu title="dropdowm">
          <MenuItem disabled> cool link</MenuItem>
          <MenuItem> cool link</MenuItem>
        </SubMenu>
        <MenuItem> cool link</MenuItem>
      </Menu>
      <AutoComplete
        customFilter={handleClick}
        onSelect={(item) => {
          console.log(item, 12)
        }}
        customRender={customRender}
      ></AutoComplete> */}
      {/* <Upload
        action=""
        defaultFileList={[
          {
            uid: 1,
            size: 123,
            name: ' Path2D.jpg',
            status: 'error',
            percent: 40
          }
        ]}
        accept=".jpg"
        multiple
        drag
      ></Upload> */}
    </div>
  )
}

export default App
