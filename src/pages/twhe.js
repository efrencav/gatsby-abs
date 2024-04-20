import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import TexasWomenMain from "../components/texasWomen"
const IndexPage = () => (
    <Layout>
        <TexasWomenMain />
    </Layout>
)

export default IndexPage

export const Head = () => (
        <Seo title="Texas Women in Higher Education Portfolio | Abstract Creative" />
)
