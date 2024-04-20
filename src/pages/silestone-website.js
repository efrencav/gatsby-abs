import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import SilestoneWebsiteMain from "../components/silestoneWeb"
const IndexPage = () => (
    <Layout>
        <SilestoneWebsiteMain />
    </Layout>
)

export default IndexPage

export const Head = () => (
        <Seo title="Silestone Website Portfolio | Abstract Creative" />
)
