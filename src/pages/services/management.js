import React from "react"
import { graphql } from "gatsby"
import { Helmet } from "react-helmet"
import BackgroundImage from "gatsby-background-image"
import "../../scss/management.scss"

import Handshake from "../../icons/handshake.svg"
import Connection from "../../icons/connection.svg"
import Location from "../../icons/location.svg"

import ManagementCard from "../../components/services/ManagementCard"

import Layout from "../../components/Layout"

const Management = ({ data }) => {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Management - Purchase Productions</title>
        <meta
          name="keywords"
          content="Nathan Purchase, Band Management, Tour Management, Booking Management, Purchase, Purchase Productions, Purchase Productions LLC, Music Agency, Concert Photography, Michigan Music, Michigan music agency"
        ></meta>
        <meta
          name="description"
          content="Purchase Productions LLC has years of experience helping bands meet their booking, touring, and general management needs."
        ></meta>
        <link rel="canonical" href="https://purchaseproductions.com/about" />
      </Helmet>
      <Layout>
        <section className="management">
          <BackgroundImage
            className="management__hero"
            fluid={data.background.childImageSharp.fluid}
            alt="concert background image"
            style={{ position: "absolute" }}
          ></BackgroundImage>
          <div className="management__overlay" />
          <ManagementCard icon={Handshake} heading="management" />
          <ManagementCard icon={Location} heading="tour management" />
          <ManagementCard icon={Connection} heading="booking" />
        </section>

        <div className="bottom-icons">
          <div>
            Icons made by{" "}
            <a href="https://www.flaticon.com/authors/ddara" title="dDara">
              dDara
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>{" "}
            is licensed by{" "}
            <a
              href="http://creativecommons.org/licenses/by/3.0/"
              title="Creative Commons BY 3.0"
              target="_blank"
              rel="noopener noreferrer"
            >
              CC 3.0 BY
            </a>
          </div>

          <div>
            Icons made by{" "}
            <a href="https://www.flaticon.com/authors/srip" title="srip">
              srip
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>{" "}
            is licensed by{" "}
            <a
              href="http://creativecommons.org/licenses/by/3.0/"
              title="Creative Commons BY 3.0"
              target="_blank"
              rel="noopener noreferrer"
            >
              CC 3.0 BY
            </a>
          </div>
        </div>
      </Layout>
    </React.Fragment>
  )
}

export default Management

export const managementBkQuery = graphql`
  query {
    background: file(relativePath: { eq: "management/management-bk.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
