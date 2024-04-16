import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import MuscleRehabMain from "../components/muscleRehab"

const IndexPage = () => (
    <Layout>
        <MuscleRehabMain />
    </Layout>
)

export default IndexPage

export const Head = () => (
    <Seo />
)