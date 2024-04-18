import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import TermDetails from "../components/terms"

const IndexPage = () => (
    <Layout>
        <TermDetails />
    </Layout>
)

export default IndexPage

export const Head = () => (
    <Seo />
)