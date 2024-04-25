import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import EnfusiaMain from "../components/enfusia"
const IndexPage = () => (
    <Layout>
        <EnfusiaMain />
    </Layout>
)

export default IndexPage

export const Head = () => (
    <Seo />
)