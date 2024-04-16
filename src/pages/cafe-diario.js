import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import CafeDiarioMain from "../components/cafeDiario"
const IndexPage = () => (
    <Layout>
        <CafeDiarioMain />
    </Layout>
)

export default IndexPage

export const Head = () => (
    <Seo />
)