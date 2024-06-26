import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import TeamDetailsMain from "../components/allenVanlu"

const IndexPage = () => (
    <Layout>
        <TeamDetailsMain />
    </Layout>
)

export default IndexPage

export const Head = () => (
    <Seo />
)