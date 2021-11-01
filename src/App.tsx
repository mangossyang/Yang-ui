import React, {useState} from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Button from '@/components/Button/button'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
import Icon from '@/components//Icon/icon'
import Transition from '@comp/Transition/transition'
library.add(fas)

function App() {
  const [show, setShow] = useState(false)
  return (
    <div className="App">
      <Button btnType='primary' onClick={() => setShow(!show)}>click</Button>
      <Transition wrapper in={show} timeout={300} animation='zoom-in-left'>

      <Icon icon="coffee" theme="primary" size="10x"></Icon>
      </Transition>
      <Menu defaultIndex="0" onSelect={index => alert(index)}>
        <MenuItem > cool link</MenuItem>
        <MenuItem disabled> cool link</MenuItem>
        <SubMenu title="dropdowm">
          <MenuItem > cool link</MenuItem>
          <MenuItem > cool link</MenuItem>
        </SubMenu>
        <MenuItem > cool link</MenuItem>

      </Menu>
      <Menu mode="vertical" defaultOpenSubMenus={['2']}>
        <MenuItem > cool link</MenuItem>
        <MenuItem disabled> cool link</MenuItem>
        <SubMenu title="dropdowm">
          <MenuItem disabled> cool link</MenuItem>
          <MenuItem > cool link</MenuItem>
        </SubMenu>
        <MenuItem > cool link</MenuItem>

      </Menu>

    </div>
  );
}

export default App;
