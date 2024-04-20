import * as React from "react"
import Layout from "../components/layout"
import { Seo } from "../components/seo"
import BrandingDetailsMain from "../components/brandingDetails"

const BrandingPage = () => (
    <Layout>
        <BrandingDetailsMain />
    </Layout>
)

export default BrandingPage

export const Head = () => (
    <Seo title="Branding Services | Abstract Creative" />

)
