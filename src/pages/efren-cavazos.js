import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import TeamDetailsMain from "../components/efrenCavazos"

const IndexPage = () => (
    <Layout>
        <TeamDetailsMain />
    </Layout>
)

export default IndexPage

export const Head = () => (
    <Seo />
)