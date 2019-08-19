import React from 'react';
import './App.css';
import { HeaderComponent } from './HeaderComponent';
import { NavComponent } from './NavComponent';
import { PostComponent } from './PostComponent';
import { AsideComponent } from './AsideComponent';

function App() {
  
  var cm1 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ornare aliquam arcu, eu egestas arcu mollis sit amet. Donec iaculis, tellus sed sagittis tincidunt, magna metus luctus urna, id elementum velit augue vitae urna. Proin posuere est leo, sit amet interdum felis efficitur et. Sed feugiat ipsum eget nisi dictum vestibulum nec ut nibh. Quisque efficitur dui nunc, eu tincidunt erat ullamcorper et. Aenean faucibus neque ornare diam imperdiet tincidunt.";
  var cm2 = "Duis sodales orci lorem, eget dignissim libero eleifend vel. Donec vitae malesuada lectus. Donec finibus, massa sed gravida finibus, felis nulla finibus nibh, tincidunt lacinia odio erat sit amet neque. Nunc elit felis, faucibus a eleifend ut, feugiat quis lectus. Morbi sollicitudin ipsum sed purus dictum condimentum. Etiam eleifend at quam ut facilisis. Proin molestie enim a ante egestas blandit. Praesent aliquet, turpis semper accumsan semper.";
  var cm3 = "Aenean porttitor felis sit amet ante finibus condimentum. Nulla quis maximus tortor. Donec ultrices orci tortor, non commodo eros fringilla in. Sed auctor pulvinar faucibus. Integer a fringilla metus. Curabitur quis mauris quis lectus lobortis convallis. Donec auctor nunc ut tortor semper scelerisque. Donec nisl nisl, semper ac condimentum a, tempus at libero. Vestibulum eu sollicitudin nibh. Nulla at nisl tristique, tincidunt turpis sed, tincidunt massa.";
  
  return (
    <div className="container">
      <HeaderComponent />
      <NavComponent />

      <div className="row">
        <div className="col-md-9">
          <PostComponent comment={cm1} image="./post1.png"/>
          <PostComponent comment={cm2} image="./post2.png"/>
          <PostComponent comment={cm3} image="./post3.png"/>
        </div>
        <div className="offset-md-1 col-md-2">
          <AsideComponent />
        </div>
      </div>      
    </div>
  );
}

export default App;
