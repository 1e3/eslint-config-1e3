import { OFF } from './constants'
import importRules from './import'
import prettierRules from './prettier'

export default {
  indent: OFF,
  ...importRules,
  ...prettierRules,
}
