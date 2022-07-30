import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import $ from 'jquery';
import AnimatedBg from "react-animated-bg";
function App(){
  const Wrapper = () => (
    <AnimatedBg colors={["red", "#ef4f03", "rgb(47, 53, 255)"]}>
      My element with animated BG
    </AnimatedBg>
  );
  return(Wrapper);
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

$(document).ready(function(){
    $(window).scroll(function(){
     if ( $(this).scrollTop() > 100) { 
      $('.scroll').fadeIn();
     } else { 
      $('.scroll').fadeOut();
     }
    });
    
    $('.scroll').click(function(){
     $('html, body').animate({scrollTop : 0},800);
     return false;
    });
});
