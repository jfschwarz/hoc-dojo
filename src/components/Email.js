import { Text, withLabel, withValidation } from './base'
import { isEmail } from '../validation'

export default withValidation(withLabel(Text), isEmail)
