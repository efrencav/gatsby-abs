import * as React from "react"
import { Helmet } from "react-helmet";
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import SlbBrand from "../components/slbBrand"


const WebsitePage = () => (

    <Layout>
        <SlbBrand />
    </Layout>
)

export default WebsitePage

export const Head = () => (
    <Seo />
)