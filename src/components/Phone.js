import { Text, withLabel, withValidation } from './base'
import { isPhone } from '../validation'

export default withValidation(withLabel(Text), isPhone)
