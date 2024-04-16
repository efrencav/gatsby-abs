import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import Phillips66Main from "../components/phillips66"
const IndexPage = () => (
    <Layout>
        <Phillips66Main />
    </Layout>
)

export default IndexPage

export const Head = () => (
    <Seo />
)