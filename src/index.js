import { injectGlobal } from 'emotion'
import globalStyles from './style/global'

import App from './components/app'

injectGlobal(globalStyles)

export default App
