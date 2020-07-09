import React from "react";
    import { Box } from "@material-ui/core";
    import CountUp from "react-countup";
    import VisibilitySensor from "react-visibility-sensor";

    export default function Reports() {
      const [focus, setFocus] = React.useState(false);
      return (
        <Box component="div">
          <CountUp start={focus ? 0 : null} end={25000} duration={2} redraw={true}>
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
                </VisibilitySensor> Regulatory Reports Filed
              </div>
            )}
          </CountUp>
        </Box>
      );
    }