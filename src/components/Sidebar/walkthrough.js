import React, { useEffect, useReducer }  from "react";
import JoyRide, { ACTIONS, EVENTS, STATUS } from "react-joyride";

/* export default function PageGuide() {
    return (
      <Joyride
        
        callback={() => null}
        steps={[
          {
            content:
              "Double click or press enter on this cell to open the DropDownEditor",
            target: ".react-grid-Cell:last-child"
          }
        ]}
      />
    );
  }
*/
// Define the steps
const TOUR_STEPS = [
    {
      target: ".tour-logo",
      content: "This is our tour’s logo.",
      disableBeacon: true,
    },
    {
      target: ".tour-cart",
      content:
        "View the cart you’ve added here",
    },
    {
      target: ".tour-contact",
      content: "Contact the developer",
    },
    {
      target: ".tour-policy",
      content: "We accept returns after 14 days max",
    },
  ];
  
  // Define our state
  const INITIAL_STATE = {
    key: new Date(),
    run: true,
    continuous: true,
    loading: false,
    stepIndex: 0,
    steps: TOUR_STEPS,
  };
  
  // Set up the reducer function
  const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "START":
        return { ...state, run: true };
      case "RESET":
        return { ...state, stepIndex: 0 };
      case "STOP":
        return { ...state, run: false };
      case "NEXT_OR_PREV":
        return { ...state, ...action.payload };
      case "RESTART":
        return {
          ...state,
          stepIndex: 0,
          run: true,
          loading: false,
          key: new Date(),
        };
      default:
        return state;
    }
  };
  
  // Define the Tour component
  const Tour = () => {
    const [tourState, dispatch] = useReducer(reducer, INITIAL_STATE);
    useEffect(() => {
      if (!localStorage.getItem("tour")) {
        dispatch({ type: "START" });
      }
    }, []);
    const callback = (data) => {
      const { action, index, type, status } = data;
      if (
        action === ACTIONS.CLOSE ||
        (status === STATUS.SKIPPED && tourState.run) ||
        status === STATUS.FINISHED
      ) {
        dispatch({ type: "STOP" });
      } else if (type === EVENTS.STEP_AFTER || type === EVENTS.TARGET_NOT_FOUND) {
        dispatch({
          type: "NEXT_OR_PREV",
          payload: { stepIndex: index + (action === ACTIONS.PREV ? -1 : 1) },
        });
      }
    };
    const startTour = () => {
      dispatch({ type: "RESTART" });
    };
  
    return (
      <>
        <button className="btn btn-primary" onClick={startTour}>
          Start Tour
        </button>
        <JoyRide
          {...tourState}
          callback={callback}
          showSkipButton={true}
          styles={{
            tooltipContainer: {
              textAlign: "left",
            },
  
            buttonBack: {
              marginRight: 10,
            },
          }}
          locale={{
            last: "End tour",
          }}
        />
      </>
    );
  };
  export default Tour;