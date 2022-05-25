import { View, Text,Animated,Easing } from 'react-native'
import React,{useEffect,useRef} from 'react'

export default function Loading(props) {
    const opacity = useRef(new Animated.Value(1)).current

  useEffect(()=>{
    const loopingAnimation = startAnimation();
    loopingAnimation.start()

    return()=>loopingAnimation.stop()
  },[])

  const startAnimation = () =>{
    return Animated.loop(
      Animated.sequence([
        Animated.timing(opacity,{
          toValue:0.3,
          timing:Easing.out(),
          useNativeDriver:true,
          delay:0,
          duration:700
        }),
        Animated.timing(opacity,{
          toValue:1,
          timing:Easing.in(),
          useNativeDriver:true,
          delay:0,
          duration:700
        }),

      ])
    )
  }
  return (
    <Animated.View style={[{opacity:opacity,borderRadius:props.borderRadius},props.style]}>
        
    </Animated.View>
  )
}

Loading.defaultProps={
    borderRadius:10
}