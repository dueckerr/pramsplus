import React from "react";
    import { Box } from "@material-ui/core";
    import CountUp from "react-countup";
    import VisibilitySensor from "react-visibility-sensor";

    export default function BOE() {
      const [focus, setFocus] = React.useState(false);
      return (
        <Box component="div">
          <CountUp start={focus ? 0 : null} end={1000000} duration={50} redraw={true}>
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} />
                <VisibilitySensor
                  onChange={isVisible => {
                    if (isVisible) {
                      setFocus(true);
                    } 
                  }}
                >
                  <a>+</a>
                </VisibilitySensor> BOE Allocated  
              </div>
            )}
          </CountUp>
        </Box>
      );
    }