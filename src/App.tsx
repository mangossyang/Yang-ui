import React from 'react';
import Button, { ButtonSize, ButtonType } from './components/Button/button'

import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
function App() {
  return (
    <div className="App">
      {/* <Menu defaultIndex="0" onSelect={index => alert(index)}>
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

      </Menu> */}
      <Button btnType={ButtonType.Primary} size={ButtonSize.Small}>button</Button>
      <Button btnType={ButtonType.Danger} disabled>button</Button>
      <Button btnType={ButtonType.Default} size={ButtonSize.Large}>button</Button>
      <Button btnType={ButtonType.Link} href="www.baidu.com" target="_black" >button</Button>
      {/* <Button btnType={ButtonType.Danger}  circle size={ButtonSize.Large}>i</Button> */}


    </div>
  );
}

export default App;
