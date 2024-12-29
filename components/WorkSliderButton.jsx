"use client"

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold} from "react-icons/pi";

const WorkSliderButton = ({containerStyles, btnStyles, iconStyle}) =>  {
    const swiper = useSwiper();
  return (
    <div className={containerStyles}>
        <butto className={btnStyles} onClick={()=> swiper.slidePrev()}>
            <PiCaretLeftBold className={iconStyle}/>
        </butto>
        <butto className={btnStyles} onClick={()=> swiper.slideNext()}>
            <PiCaretRightBold className={iconStyle}/>
        </butto>
    </div>
  )
}

export default WorkSliderButton