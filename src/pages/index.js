import React from "react"

import Layout from '../components/Layout'

import Typography from '@material-ui/core/Typography'

import { Link } from 'gatsby'

import Login from '../components/Login'

const IndexPage = () => (
  <Layout>
    Home Page
    <Login judul={false?"ini benar":"ini salah"}/>
    <Login></Login>
  </Layout>
)

export default IndexPage
