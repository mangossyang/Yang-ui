import React from 'react';
import Button,{ButtonSize,ButtonType} from './components/Button/button'
function App() {
  return (
    <div className="App">
     <Button btnType={ButtonType.Primary}  size={ButtonSize.Small}>button</Button>
     <Button btnType={ButtonType.Danger} >button</Button>
     <Button btnType={ButtonType.Default} size={ButtonSize.Large}>button</Button>
     <Button btnType={ButtonType.Link} href="www"  >button</Button>
     {/* <Button btnType={ButtonType.Danger}  circle size={ButtonSize.Large}>i</Button> */}
    </div>
  );
}

export default App;
