import PricingPlan from "../components/Slider/PricingPlan";
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

export default function Pricing() {
  const classes = useStyles();
  return (
    <>
      <div className="page-header container-fluid bg-secondary pt-2 pt-lg-4 pb-5 mb-5">
        <div className="container py-1" style={{ marginTop: "3rem" }}>
          <div className="row  align-items-center py-4">
            <div className="col-md-6 text-center text-md-left">
              <h1 className="mb-4 mb-md-0 text-white">Pricing Plan</h1>
            </div>
            <div className="col-md-6 text-center text-md-right">
              <div className="d-inline-flex align-items-center">
                <a className="btn text-white">Home</a>
                <i className="fas fa-angle-right text-white"></i>
                <a className="btn text-white disabled">Pricing</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PricingPlan />

      <h1
        className="display-4 text-center mb-5"
        style={{ fontSize: "3rem", marginTop: "0.5rem" }}
      >
        Frequently Asked Questions
      </h1>

      <div
        className="container-fluid"
        style={{ marginBottom: "5rem", marginTop: "4rem" }}
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
