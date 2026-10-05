import { Routes, Route } from "react-router-dom"
import React, { Suspense } from "react";
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

const Home = React.lazy(() => import("./pages/Home"));
const Tprogram = React.lazy(() => import("./pages/Tprogram"));
const MultiF = React.lazy(() => import("./pages/Multi"));
const ContactForm = React.lazy(() => import("./pages/Contact.jsx"));
const SingleF = React.lazy(() => import("./pages/Single"));
const Services = React.lazy(() => import("./pages/Services"));
const News = React.lazy(() => import("./pages/News"));
const Gallery = React.lazy(() => import("./pages/Gallery"));

const GraphicDesign = React.lazy(() => import("./single-Subpages/Graphic-design"));
const WebMobileDevelopment = React.lazy(() => import("./single-Subpages/Web-mobile-dev"));
const AppDigitalSolutionDevelopment = React.lazy(() => import("./single-Subpages/App-digital-sol-dev"));
const AudioVisualProffession = React.lazy(() => import("./single-Subpages/Audiovisual-Professions"));
const ComputerMaintenance = React.lazy(() => import("./single-Subpages/Computer-Maintenance"));
const GSMMaintenance = React.lazy(() => import("./single-Subpages/GSM-Maintenance"));
const VideoSurveillance = React.lazy(() => import("./single-Subpages/Video-Surveillance"));
const TraditionalAndModernScreenPrinting = React.lazy(() => import("./single-Subpages/Traditional & Modern-Screen-Printing"));
const DataEntryOperationBasicComputerSkills = React.lazy(() => import("./single-Subpages/Data-Entry-Operation-Basic-Computer-Skills"));
const SecretarialAndOfficeAutomation = React.lazy(() => import("./single-Subpages/Secretarial-and-Office-Automation"));
const AccountingSecretariat = React.lazy(() => import("./single-Subpages/Accounting-Secretariat"));

const GraphicDesign3DModeling = React.lazy(() => import("./multi-subpages/Graphic-Design-3D-Modeling"));
const GraphicDesignDigitalCommunication = React.lazy(() => import("./multi-subpages/Graphic-Design-Digital-Communication"));
const GraphicDesignCommunicationMultimedia = React.lazy(() => import("./multi-subpages/Graphic-Design-Communication-Multimedia"));
const GraphicDesignTraditionalandModernScreenPrinting = React.lazy(() => import("./multi-subpages/Graphic-Design-Traditional-and-Modern-Screen-Printing"));
const GraphicDesignOfficeAdministration = React.lazy(() => import("./multi-subpages/Graphic-Design-Office-Administration"));
const GraphicDesignScreenPrintingSecretarialServices = React.lazy(() => import("./multi-subpages/Graphic-Design-Screen-Printing-Secretarial-Services"));
const GraphicDesignWebDevelopment = React.lazy(() => import("./multi-subpages/Graphic-Design-Web-Development"));
const AudiovisualInfographics = React.lazy(() => import("./multi-subpages/Audiovisual-Infographics"));
const ComputerMaintenanceTechnicianComputerNetworksElectronics = React.lazy(() => import("./multi-subpages/Computer-Maintenance-Technician-Computer-Networks-Electronics"));
const ComputerMaintenanceTechnicianComputerNetworksCellPhones = React.lazy(() => import("./multi-subpages/Computer-Maintenance-Technician-Computer-Networks-Cell-Phones"));

const News1 = React.lazy(() => import("./News subpages/News1"));
const News2 = React.lazy(() => import("./News subpages/News2"));
const News3 = React.lazy(() => import("./News subpages/News3"));
const News4 = React.lazy(() => import("./News subpages/News4"));

const AudiovisualSlideshow = React.lazy(() => import("./Gallery-Slide/Audio-visual"));
const ComputerScienceSlideshow = React.lazy(() => import("./Gallery-Slide/Computer-science"));
const GraphicDesignSlideshow = React.lazy(() => import("./Gallery-Slide/Graphic-design-G"));
const ScreenPrintingSlideshow = React.lazy(() => import("./Gallery-Slide/Screen-printing"));
const WebDevelopmentSlideshow = React.lazy(() => import("./Gallery-Slide/Web-development"));
const ComputerMaintenanceSlideshow = React.lazy(() => import("./Gallery-Slide/Computer-Maintenance-G"));
const GSMCellularSlideshow = React.lazy(() => import("./Gallery-Slide/GSM-Cellular"));
const VideoSurveillanceSlideshow = React.lazy(() => import("./Gallery-Slide/Video-Surveillance-G"));



function App() {
  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={<div>Loading…</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Tprogram" element={<Tprogram />} />
            <Route path="/Single" element={<SingleF />} />
            <Route path="/Multi" element={<MultiF />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Graphic-design" element={<GraphicDesign />} />
            <Route path="/Web-mobile-dev" element={<WebMobileDevelopment />} />
            <Route path="/App-digital-sol-dev" element={<AppDigitalSolutionDevelopment />} />
            <Route path="/Audiovisual-Professions" element={<AudioVisualProffession />} />
            <Route path="/Computer-Maintenance" element={<ComputerMaintenance />} />
            <Route path="/GSM-Maintenance" element={<GSMMaintenance />} />
            <Route path="/Video-Surveillance" element={<VideoSurveillance />} />
            <Route path="/Traditional & Modern-Screen-Printing" element={<TraditionalAndModernScreenPrinting />} />
            <Route path="/Data-Entry-Operation-Basic-Computer-Skills" element={<DataEntryOperationBasicComputerSkills />} />
            <Route path="/Secretarial-and-Office-Automation" element={<SecretarialAndOfficeAutomation />} />
            <Route path="/Accounting-Secretariat" element={<AccountingSecretariat />} />
            <Route path="/Graphic-Design-3D-Modeling" element={<GraphicDesign3DModeling />} />
            <Route path="/Graphic-Design-Digital-Communication" element={<GraphicDesignDigitalCommunication />} />
            <Route path="/Graphic-Design-Communication-Multimedia" element={<GraphicDesignCommunicationMultimedia />} />
            <Route path="/Graphic-Design-Traditional-and-Modern-Screen-Printing" element={<GraphicDesignTraditionalandModernScreenPrinting />} />
            <Route path="/Graphic-Design-Office-Administration" element={<GraphicDesignOfficeAdministration />} />
            <Route path="/Graphic-Design-Screen-Printing-Secretarial-Services" element={<GraphicDesignScreenPrintingSecretarialServices />} />
            <Route path="/Graphic-Design-Web-Development" element={<GraphicDesignWebDevelopment />} />
            <Route path="/Audiovisual-Infographics" element={<AudiovisualInfographics />} />
            <Route path="/Computer-Maintenance-Technician-Computer-Networks-Electronics" element={<ComputerMaintenanceTechnicianComputerNetworksElectronics />} />
            <Route path="/Computer-Maintenance-Technician-Computer-Networks-Cell-Phones" element={<ComputerMaintenanceTechnicianComputerNetworksCellPhones />} />
            <Route path="/News1" element={<News1 />} />
            <Route path="/News2" element={<News2 />} />
            <Route path="/News3" element={<News3 />} />
            <Route path="/News4" element={<News4 />} />
            <Route path="/Audio-visual" element={<AudiovisualSlideshow />} />
            <Route path="/Computer-science" element={<ComputerScienceSlideshow />} />
            <Route path="/Graphic-design-G" element={<GraphicDesignSlideshow />} />
            <Route path="/Screen-printing" element={<ScreenPrintingSlideshow />} />
            <Route path="/Web-development" element={<WebDevelopmentSlideshow />} />
            <Route path="/Computer-Maintenance-G" element={<ComputerMaintenanceSlideshow />} />
            <Route path="/GSM-Cellular" element={<GSMCellularSlideshow />} />
            <Route path="/Video-Surveillance-G" element={<VideoSurveillanceSlideshow />} />
            <Route path="/News" element={<News />} />
            <Route path="/Gallery" element={<Gallery />} />
            <Route path="/Contact" element={<ContactForm />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  )
}

export default App
