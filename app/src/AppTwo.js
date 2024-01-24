import React from 'react';
import styles from './name.module.css';
import Column from './Column.js'
import Button from './Button.js'
import About from './About.js'

export default function AppTwo() { 
    return (
        <div className = {styles.background}>  
          <div className = {styles.bar}>
          <div className= {styles.header}>
            <h1 text-align = 'center'>
              Top Ten
            </h1>
          </div>
          <div className = {styles.about}>
            <h1>
              <About/>
            </h1>
          </div>
          </div>  
          
          <div className = {styles.main}>
          <div>
           <h2>
              <Button/>
            </h2>
          </div>
          <div>
            <Column/>
          </div>
          </div> 
        </div> 
      );
}