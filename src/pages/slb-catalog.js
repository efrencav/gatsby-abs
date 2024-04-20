import * as React from "react"
import { Helmet } from "react-helmet";
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import SlbCatalogMain from "../components/slbCatalog"


const WebsitePage = () => (

    <Layout>
        <SlbCatalogMain />
    </Layout>
)

export default WebsitePage

export const Head = () => (
    <Seo title="Schlumberger Well Intervention Catalog Portfolio | Abstract Creative" />
)
