// import { useEffect, useState } from "react";
import FormsBanner from "./forms/formBanner";
// import ProjectDetailsFormStep from "./forms/steps/projectDetails";
// import AddMemberStep from "./forms/steps/addMembersStep";
// import CollegeDetailsStep from "./forms/steps/collegeDetailStep";
// import PaymentStep from "./forms/steps/paymentStep";
// import StepProgressBar from "./forms/stepProgress";
import { useParams } from "react-router-dom";
import { eventsData } from "../constants";
// import { qr } from "../assets";
import { IconAlertCircle, IconMessageCircle } from "@tabler/icons-react";

// const osteps = [
//   { id: 1, label: "Project Details" },
//   { id: 2, label: "Add Members" },
//   { id: 3, label: "College Details" },
//   { id: 4, label: "Payment" },
// ];

// const pSteps = [
//   { id: 1, label: "Add Members" },
//   { id: 2, label: "College Details" },
//   { id: 3, label: "Payment" },
// ]

const Register = () => {
  const { event } = useParams()
  // const [currentStep, setCurrentStep] = useState(0);
  // const [steps, setSteps] = useState(osteps)
  // const nextStep = () => setCurrentStep((prev) => prev + 1);
  // const prevStep = () => setCurrentStep((prev) => prev - 1);

  
  // useEffect(() => {
  //   if(event === 'pradnya'){
  //     if(currentStep === 0){
  //       setCurrentStep(1)
  //       setSteps(() => (pSteps))
  //     }
  //   }
  // }, [])
  
  const eventData = eventsData[event];

  return (
    <>
      <div className="pt-24 p-2">
        <FormsBanner
          logo={eventData.logo}
          eventName={eventData.name}
          eventDescription={eventData.short_desc}
          fees={eventData.registrations.fees.national}
          min_team_size={eventData.registrations.min_team_size}
          max_team_size={eventData.registrations.max_team_size}
        />
      </div>


      <div className="container mx-auto px-2 pb-16">
        {/* New Progress Bar Component */}
        {/* {<StepProgressBar steps={steps} currentStep={(event === 'pradnya') ? currentStep - 1 : currentStep} />} */}

        {/* Step Content */}
        <div
          className="mt-8"
          >

          {event === 'impetus' && <EventCloseMessage event_name={'Impetus'} />}
          {event === 'pradnya' && <EventCloseMessage event_name={'Pradnya'} />}
          {event === 'concepts' && <EventCloseMessage event_name={'Concepts'} />}

          {/* {currentStep === 0 && ( 
            <GradientWrapper>
              <ProjectDetailsFormStep event={event} nextStep={nextStep} prevStep={prevStep} />
            </GradientWrapper>
          )}
          {currentStep === 1 && (
            <GradientWrapper>
              <AddMemberStep
                event={event}
                minMembers={event === 'pradnya' ? 1 : 2}
                maxMembers={event === 'pradnya' ? 2 : 5}
                nextStep={nextStep}
                prevStep={prevStep}
                isPradnya={(event === 'pradnya' ? true : false)}
              />
            </GradientWrapper>
          )}
          {currentStep === 2 && (
            <GradientWrapper>
              <CollegeDetailsStep event={event} nextStep={nextStep} prevStep={prevStep} />
            </GradientWrapper>
          )}
          {currentStep === 3 && (
            <GradientWrapper>
              <PaymentStep
                event={event}
                amount={eventData.registrations.fees.national}
                imagePath={qr}
                prevStep={prevStep}
              />
            </GradientWrapper>
          )} */}
        </div>
      </div>
    </>
  );
};

export default Register

// const GradientWrapper = ({ children }) => {
//   return (
//     <div className="bg-gradient-to-r from-dark-blue via-light-blue to-orange-100 w-full max-w-7xl mx-auto p-px">
//       { children }
//     </div>
//   )
// }

const EventCloseMessage = ({ event_name }) => {
  return (
    <div className="max-w-7xl mx-auto bg-gradient-to-r from-dark-blue via-light-blue to-orange-100 p-px">
      <div className="bg-tertiary text-white text-center p-4">
        <h2 className="text-lg sm:text-xl font-bold flex items-center justify-center gap-1 text-secondary">
          <IconAlertCircle size={20}/> Registration Update - {event_name}
        </h2>
        <p className="mt-2 sm:text-lg">
          Registrations for <span className="font-semibold">{event_name}</span> are now officially 
          <span className="font-bold text-red-600"> CLOSED!</span>
        </p>
        <p className="mt-1 text-sm sm:text-base text-slate-400">
          Thank you for the overwhelming response. Stay tuned for further updates, and we look forward 
          to seeing you at the event!
        </p>
        <p className="mt-2 text-sm italic flex items-center justify-center gap-1 text-orange-100">
          <IconMessageCircle size={18} /> For any queries, feel free to reach out.
        </p>
      </div>
    </div>
  );
};