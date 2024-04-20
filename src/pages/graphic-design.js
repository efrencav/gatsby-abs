import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import GraphicDetailsMain from "../components/graphicDetails"

const GraphicPage = () => (
    <Layout>
        <GraphicDetailsMain />
    </Layout>
)

export default GraphicPage

export const Head = () => (
    <Seo title="Graphic Design Services | Abstract Creative" />
)
