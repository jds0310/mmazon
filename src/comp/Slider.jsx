import React, {useState, useEffect} from 'react'
import SliderIn from './SliderIn'
import data from '../data/slideData'
import './slider.css'

const Slider = () => {
  // 렌더링 될때 0번이 출력, 두번째 1번, 세번째 2번, 네번째 3번, 다시 0

  const [slider, setSlider] = useState(data);
  const [index, setIndex] = useState(0);
  const lastIndex = slider.length - 1;
  useEffect(()=>{

    if(index < 0){
      setIndex(lastIndex);
    }
    if(index > lastIndex){
      setIndex(0);
    }
  },[index, slider])

  useEffect(()=>{
    let imgSlider = setInterval(()=>{
      setIndex(index + 1);
    },3000);
    return () =>clearInterval(imgSlider);
  },[index])

  return (
    <div className="slide-container">
      {
        slider.map((slider, sliderIndex)=>(
          <SliderIn key={slider.id} lastIndex={lastIndex} slideIndex={sliderIndex} index={index} {...slider}/>
        ))
      }
      <button className="prev" onClick={()=>setIndex(index-1)}>&lt;</button>
      <button className="next" onClick={()=>setIndex(index+1)}>&gt;</button>
    </div>
  )
}

export default Slider