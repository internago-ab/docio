import React from "react"

//components
import Layout from "../components/layout"
import Hero from "../components/hero"
import PayrollBlock from "../components/payrollBlock"

//style
import "../../src/style.css"
import "../components/link.scss"

//images
import desktop from "../images/payroll/desktop.png"
import discussion from "../images/payroll/online.jpg"
import twoPhones from "../images/payroll/payroll-two-phones.png"
import threePhones from "../images/payroll/payroll-three-phones.png"
import timeAbsence from "../images/payroll/time-absence.jpg"
import expenseManagement from "../images/payroll/expense-management.jpg"
import payrollWorkflow from "../images/payroll/payroll-workflow.jpg"

export default function Home() {
  return (
  <Layout>
    <Hero
      size="small"
      intro="For all your payroll needs"
      title="Internago Payroll Portal"
      text="
      International payroll can be challenging, but it is important and has to be done. ‎And we have the perfect tool to help you with payroll and a variety of other HR tasks. You can efficiently store and manage employee and payroll data in one place, controlled via one online interface. All you have to do is check and approve."
      button="See all powerful features"
      bg={timeAbsence}
    />
        <PayrollBlock
        id="time-absence"
        bg="bg-green"
        bgText="bg-text-white"
        title="Time and absence"
        text="<strong>With Internago’s payroll portal, you have the perfect tool to manage your international employees in one single interface. </strong><br></br> It’s simple to use and gives your company the possibility to use the same system for your domestic and international employees when registering absence, vacations and other deviations.
        All is done directly on the portal. By handling everything in the same place your management and HR will have a clear calendar overview of all absences which significantly improves personnel planning."
        image={discussion}
        alt="Internagos dashborard on a computerscreen"
        />
        <PayrollBlock
        id="share-documents"
        bg="bg-grey"
        bgText="bg-text-green"
        reverse="reverse"
        title="Share documents"
        text="<strong> Don't remember where you stored that employment contract? </strong><br></br> With Share documents you will have all your sensitive and important documents in one place. You can share the documents directly with your colleagues or external collaborators through hyperlinks accessible only by permitted personnel.

        Additionally, this tool allows you to access all files in one place, which means you spend less time searching for information and more time focussing on your job."
        image={threePhones}
        alt="Internagos dashborard on a computerscreen"
        />
        <PayrollBlock
        id="expense"
        bg="bg-green"
        bgText="bg-text-white"
        title="Expense Management"
        text="<strong>Sick of handling excel sheets and emails with expense reports?</strong><br></br> Our built-in expense management tool standardises this work for all your employees and on all your international markets.

        Using a simple online access, it provides a quick overview of all your expenses. With a smooth and easy registration process, as well as a rapid and easy handling and approval of errands, your previous time is saved, and your company’s internal efficiency is increased."   
        image={expenseManagement}
        alt="Internagos dashborard on a computerscreen"
        />
        <PayrollBlock
        id="multilingual"
        bg="bg-grey"
        bgText="bg-text-green"
        reverse="reverse"
        title="Multilingual"
        text="<strong>Having foreign workers also means handling multiple languages. </strong><br></br>

        Our portal comes with the option of language adaptation. This means that it can be easily updated to allow for the integration of languages or other related adjustments in accordance with your organisation’s needs."
        image={desktop}
        alt="Internagos dashborard on a computerscreen"
        />
        <PayrollBlock
        id="workflow"
        bg="bg-green"
        bgText="bg-text-white"
        title="Payroll workflow"
        text="<strong> Many organisations have multiple approving managers and several different roles. </strong><br></br>A local director that may handle the absence management for his or her employees, but it is the responsibility of central HR to manage payroll and absences of that local director. 

        As all our customers have their specific requirements, we have created an advanced configuration tool to handle your organisation’s specific needs and payroll workflow. This will eliminate the risk of error and make your payroll workflow more efficient and secure."
        image={payrollWorkflow}
        alt="Woman sitting at table"
        />
        <PayrollBlock
        id="access"
        bg="bg-grey"
        bgText="bg-text-green"
        reverse="reverse"
        title="Access 24/7"
        text="Access your payroll data and employee data at any time from anywhere thanks to our mobile device login and real time notiflications."
        image={twoPhones}
        alt="Internagos dashborard on a computerscreen"
        />
  </Layout>
)
}
