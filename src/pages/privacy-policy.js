import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import PolicyDetails from "../components/policy"

const IndexPage = () => (
    <Layout>
        <PolicyDetails />
    </Layout>
)

export default IndexPage

export const Head = () => (
 <Seo title="Privacy Policy | Abstract Creative" />
)
