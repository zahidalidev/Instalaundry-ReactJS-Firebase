import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Colors } from "./../config/Colors";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function Faq() {
  const classes = useStyles();

  return (
    <>
      <div className="page-header container-fluid bg-secondary pt-2 pt-lg-4 pb-5 mb-5">
        <div className="container py-1" style={{ marginTop: "3rem" }}>
          <div className="row align-items-center py-4">
            <div className="col-md-6 text-center text-md-left">
              <h1 className="mb-4 mb-md-0 text-white">FAQ'S</h1>
            </div>
            <div className="col-md-6 text-center text-md-right">
              <div className="d-inline-flex align-items-center">
                <a className="btn text-white">Home</a>
                <i className="fas fa-angle-right text-white"></i>
                <a className="btn text-white disabled">FAQ's</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1
        className="display-4 text-center mb-5"
        style={{ fontSize: "3rem", marginTop: "6rem" }}
      >
        Frequently Asked Questions
      </h1>
      {/* <h6 className="text-secondary text-uppercase text-center font-weight-medium mb-3">
        Answers to all your questions!
      </h6> */}
      <div
        className="container-fluid"
        style={{ marginBottom: "8rem", marginTop: "6rem" }}
      >
        <div className={classes.root}>
          <div className="row">
            <div className="col-1"></div>
            <div className="col-md-5">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography
                    className={classes.heading}
                    style={{ fontSize: "1.06rem" }}
                  >
                    How does InstaLaundry work?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <p style={{ color: Colors.secondary, fontWeight: "bold" }}>
                      Ans:
                    </p>{" "}
                    Instalaundry is a subscription laundry service. We provide a
                    professional full-service model to help our customers save
                    time, stress, and inconvience. We do not subcontract any
                    work to other people/companies in order to maintain our
                    service standards. Every load is individually washed with
                    machines.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography
                    className={classes.heading}
                    style={{ fontSize: "1.06rem" }}
                  >
                    How can I Pay?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <p style={{ color: Colors.secondary, fontWeight: "bold" }}>
                      Ans:
                    </p>{" "}
                    You can pay using your credit or debit card. We accept Visa,
                    Mastercard, and Amex. No payments will be recieved at the
                    door.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography
                    className={classes.heading}
                    style={{ fontSize: "1.06rem" }}
                  >
                    What products do we use for washing?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <p style={{ color: Colors.secondary, fontWeight: "bold" }}>
                      Ans:
                    </p>{" "}
                    All laundry detergents used are eco-friendly grade. We have
                    options for hypo allergenic and Scent Free liquid detergents
                    for additional charges. For indiviuals with specific needs
                    (allergies/infants) has the option to provide their own
                    detergents for use.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography
                    className={classes.heading}
                    style={{ fontSize: "1.06rem" }}
                  >
                    What kind of garments are included in the subscription plan?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <p style={{ color: Colors.secondary, fontWeight: "bold" }}>
                      Ans:
                    </p>{" "}
                    All subscription plans cover standard clothing items
                    (shirts, pants, sweaters, undergarments, towels, beddings,
                    non feathered jackets) Items such as comforters/duvets,
                    blankets, bath/kitchen mats, are not included. These items
                    are washed and dried separately to follow their specific
                    care instructions and is an additional charge per pound.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography
                    className={classes.heading}
                    style={{ fontSize: "1.06rem" }}
                  >
                    How are the clothes washed?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <p style={{ color: Colors.secondary, fontWeight: "bold" }}>
                      Ans:
                    </p>{" "}
                    Each hamper you provide us will be washed together under
                    cold water settings to prevent color leaks. Your clothes
                    will never be cleaned with items belonging to others. It is
                    the customers responsibliy to ensure all clothing provided
                    in the hamper can be washed together, special requests must
                    be made through customer service.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography
                    className={classes.heading}
                    style={{ fontSize: "1.06rem" }}
                  >
                    Can I cancel my subscription?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <p style={{ color: Colors.secondary, fontWeight: "bold" }}>
                      Ans:
                    </p>{" "}
                    Yes, you can cancel at any time through your online profile
                    account settings or call customer service at (604) 528-6379
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="col-md-5">
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography
                    className={classes.heading}
                    style={{ fontSize: "1.06rem" }}
                  >
                    How can I schedule a Pick-Up?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <p style={{ color: Colors.secondary, fontWeight: "bold" }}>
                      Ans:
                    </p>{" "}
                    Simply select a plan and enter in your preferred pick-up and
                    drop off times.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography
                    className={classes.heading}
                    style={{ fontSize: "1.06rem" }}
                  >
                    What is the turnaround time?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <p style={{ color: Colors.secondary, fontWeight: "bold" }}>
                      Ans:
                    </p>{" "}
                    Our service goal provides our customers with thier laundry
                    in 12 hours. This applies to laundry pick up times in our
                    designated business timeframes. Changes to scheudled times
                    or bad weather conditions may effect turnaround.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography
                    className={classes.heading}
                    style={{ fontSize: "1.06rem" }}
                  >
                    How do I pack my dirty laundry for pick up?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <p style={{ color: Colors.secondary, fontWeight: "bold" }}>
                      Ans:
                    </p>{" "}
                    For your first order, simply place your clothes in a regular
                    sized garbage bag. You will receive an instalaundry hamper
                    bag along with your fresh clothes during drop off.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography
                    className={classes.heading}
                    style={{ fontSize: "1.06rem" }}
                  >
                    Do you provide dry cleaning?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <p style={{ color: Colors.secondary, fontWeight: "bold" }}>
                      Ans:
                    </p>{" "}
                    No, instalaundry provides day to day household laundry
                    services. Ironing and steaming is not included.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography
                    className={classes.heading}
                    style={{ fontSize: "1.06rem" }}
                  >
                    Can I recieve a delivery if I am not home?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <p style={{ color: Colors.secondary, fontWeight: "bold" }}>
                      Ans:
                    </p>{" "}
                    Definitely. We offer contactless pick-up and delivery. What
                    this means is that we will come by and pick-up or deliver
                    your clothes without you having to be there. The key is you
                    need to make sure we have an access to a safe place to keep
                    your clothes. This means you can buzz us into your apartment
                    building remotely or can provide a door code/clear
                    instructions. If our delivery staff cannot access your
                    building, this will result in a cancellation fee of $5.00.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography
                    className={classes.heading}
                    style={{ fontSize: "1.06rem" }}
                  >
                    What do I do if I need to change my pickup/delivery time?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <p style={{ color: Colors.secondary, fontWeight: "bold" }}>
                      Ans:
                    </p>{" "}
                    To modify, change, or cancel a pickup/delivery time simply
                    login to your online profile. A cancellation fee of $5.00
                    will be charged for any changes made within 24 hours to the
                    scheudled time. Otherwise, 24 hours is required.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
            <div className="col-1"></div>
          </div>
        </div>
      </div>
    </>
  );
}
