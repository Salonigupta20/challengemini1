import React from 'react';


function App(){
    let curDate= new Date(); 
curDate= curDate.getHours();
let greeting= '';
const style= {
  textAlign: 'center',
}

if( curDate>=1 && curDate<12){
  greeting= 'Good Morning';
  style.color= 'yellow';
}
else if(curDate>=12 && curDate<19){
  greeting='Good Afternoon';
  style.color='orange'
}
else{
  greeting= 'Good Night';
  style.color= 'brown'
}


return(
    <>
    <div>
  <h1 style={style}>
  Hello Dear {greeting}
  </h1>
  </div>
  </>
)
}
export default App;