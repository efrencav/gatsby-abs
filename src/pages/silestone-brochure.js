import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import SilestoneBrochureMain from "../components/silestoneBrochure"
const IndexPage = () => (
    <Layout>
        <SilestoneBrochureMain />
    </Layout>
)

export default IndexPage

export const Head = () => (
        <Seo title="Silestone Brochure Portfolio | Abstract Creative" />
)
