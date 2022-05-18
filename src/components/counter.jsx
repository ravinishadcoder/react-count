import React,{useState} from "react";
import styles from "./count.module.css"
const Counter = () => {
  const [count, setCount] = useState(0);
  //console.log(count)
  
  return (
    <>
      <h1 className={count%2==0 ? styles.color2:styles.color1}>Counter App: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => {
          if(count>0){
            setCount(count - 1)
          }
          
      }}>Decrement</button>
      <button onClick={() => {
          if(count>0){
            setCount(count * 2)
          }
      }}>Double</button>
    </>
  );
};

export { Counter };
