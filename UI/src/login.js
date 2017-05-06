import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'

import Login from './components/login'

import s1 from './styles/themify-icons.css'
import s2 from './styles/bootstrap.css'
import s3 from './styles/owl.carousel.min.css'
import s4 from './styles/owl.theme.default.min.css'
import s5 from './styles/magnific-popup.css'
import s6 from './styles/superfish.css'
import s7 from './styles/easy-responsive-tabs.css'
import s8 from './styles/animate.css'
import s9 from './styles/style.css'
import s10 from 'codemirror/lib/codemirror.css'

render(
  <Login />,
  document.getElementById('root')
)
