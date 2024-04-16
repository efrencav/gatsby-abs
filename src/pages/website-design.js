import * as React from "react"
import { Helmet } from "react-helmet";
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import WebsiteDetailsMain from "../components/websiteDetails"


const WebsitePage = () => (

    <Layout>
        <WebsiteDetailsMain />
    </Layout>
)

export default WebsitePage

export const Head = () => (
    <Seo />
)