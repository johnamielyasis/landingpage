import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { RecoilRoot } from 'recoil'
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <RecoilRoot>
    <Layout className="font-sans" />
  </RecoilRoot>
)

export default IndexPage
