import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import KinsmenMain from "../components/kinsmen"
const IndexPage = () => (
    <Layout>
        <KinsmenMain />
    </Layout>
)

export default IndexPage

export const Head = () => (
    <Seo />
)