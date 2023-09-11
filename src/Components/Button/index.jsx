import { Button } from '@chakra-ui/react'
import PropTypes from 'prop-types'

// eslint-disable-next-line react/prop-types
export default function MainButton ({scheme,children,onClick}) {
  return (
   
  <Button onClick={()=>{onClick()}} colorScheme={'teal'} variant={scheme}>
    {children}
  </Button>
 
  )

}
MainButton.propTypes = {
  scheme: PropTypes.string.isRequired}