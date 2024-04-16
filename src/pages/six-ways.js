import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import SixWaysMain from "../components/sixWays"
const IndexPage = () => (
    <Layout>
        <SixWaysMain />
    </Layout>
)

export default IndexPage

export const Head = () => (
    <Seo />
)