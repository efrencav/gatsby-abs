import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import PatcoMain from "../components/patco"
const IndexPage = () => (
    <Layout>
        <PatcoMain />
    </Layout>
)

export default IndexPage

export const Head = () => (
    <Seo />
)