import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from '@chakra-ui/react'

function SliderComponents(){
    return(
        <>
        <Slider aria-label='slider-ex-1' defaultValue={30}>
  <SliderTrack>
    <SliderFilledTrack />
  </SliderTrack>
  <SliderThumb />
</Slider>
        </>
    )
}
export default SliderComponents;