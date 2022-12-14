import React from "react"
//components
import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import TextImage from "../components/textImage"
import IconGrid from "../components/iconGrid"
import ListBlock from "../components/listBlock"

//style
import "../../src/style.css"
import "../../src/breakpoint.scss"
import "../components/link.scss"

//images
import books from "../images/businessPeople.jpg"
import heroLanding from "../images/meeting.jpg"
import workers from "../images/crowd.jpg"
import desk from "../images/international.jpg"
import computerMockup from "../images/payroll-desktop-tablet.png"

export default function Home() {

  return (
  <Layout>
    <Seo title="Home" />
    <Hero
      alt="man using laptop"
      intro="For all your payroll needs"
      title="Internago Payroll Portal"
      text="Manage your payroll on multiple international markets with one online interface."
      button="See all powerful features"
      link="/payroll"
      bg={heroLanding}
    />
    <TextImage
          title="Payroll and HR Management"
          text="<strong> Let's be honest, international payroll can be challenging, but it has to be done. We have the perfect tool for managing international payroll and HR related tasks for your international employees. </strong> <br><br> We let you store and manage all important employee and payroll data in one place. In this way you will increase your control and efficiency by using one online interface for all your international employees. Your job is simply to check and approve in the portal.          "
          image={desk}
          alt="People standing inside city building"
          button="Read more"
          link="/payroll"
      />
     <IconGrid
          header="Six reasons to go with Docio"
          text="<strong> International payroll can be challenging, but it is important and has to be done.</strong> <br></br> And we have the perfect tool to help you with payroll and a variety of other HR tasks. You can efficiently store and manage employee and payroll data in one place, controlled via one online interface. All you have to do is check and approve.          "
          button="Read more"
          content={[
            {
              link: "/payroll#time-absence",
              alt: "Diagram icon",
              header: "Time and absence",
              text: "Let your employees enter absence directly into the portal. You just approve or reject. You will get a nice overview of all absence for all your employees on all your international markets.",
            },
            {           
              link: "/payroll#share-documents",   
              alt: "Wifi icon",
              header: "Share documents",
              text:
                "Don't know where you stored that employment contract? With our Document sharing tool you will have all your sensitive documents in one place",
            },
            {
              link: "/payroll#expense",
              alt: "Calendar icon",
              header: "Expense Management",
              text: "Sick of handling excel sheets with expense reports? We offer a standardised expense management tool that will work for all your employees on your international markets.",
            },
            {
              link: "/payroll#multilingual",
              alt: "Gearwheel icon",
              header: "Multilingual",
              text: "Our portal comes in multiple languages. We easily integrate a new language according to your needs.",
            },
            {
              link: "/payroll#workflow",
              alt: "Cloud icon",
              header: "Payroll workflow",
              text: "Do you have multiple approvers and roles? Our payroll workflow is fully configurable to handle your specific needs and processes.",
            },
            {
              link: "/payroll#access",
              alt: "Document icon",
              header: "Access 24/7",
              text:
                "Access your payroll data and employee data at any time and from anywhere thanks to our mobile device login and real time notifications.",
            },
          ]}
        />
         <div className="card-img-wrapper">
            <div className="card-img">
                <img src={workers} alt='Three men walking downstairs'/>
            </div>
        </div>
          <TextImage
            reverse="rowreverse"
            title="Share Doc"
            text="<strong>The Share documents module greatly facilitates the sharing and management of payroll and accounting related files.</strong> <br></br> A perfect tool for payroll management and various declarations to individuals and companies."
            image={computerMockup}
            alt="Internagos dashborard on a computerscreen and a tablet"
            button="Read more"
            link="/"
        />
          <ListBlock
            intro="Payroll portal"
            header="Manage your payroll across multiple international markets with one online interface."
            image={books}
            alt="People walking outside a building"
            content={[
              {
                text: "Gross up calculations",
              },
              {              
                text:
                  "Payments",
              },
              {              
                text:
                  "Tax filing",
              },
              {              
                text:
                  "Implementation and onboarding",
              },
              {              
                text:
                  "Gross to net (GTN)",
              },
              {              
                text:
                  "Shadow payroll",
              },
              {              
                text:
                  "Leaver calculations",
              },
              {              
                text:
                  "Bonus and RSU calculations",
              },
            
            ]}
        />
  </Layout>
)
}
