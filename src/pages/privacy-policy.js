import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import PrivacyDetails from "../components/privacy"

const IndexPage = () => (
    <Layout>
        <PrivacyDetails />
    </Layout>
)

export default IndexPage

export const Head = () => (
    <Seo />
)