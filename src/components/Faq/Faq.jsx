import React from "react";
import styles from "./Faq.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { ReactComponent as ExpandMoreIcon } from "../../assets/plus.svg";

function Faq() {
  return (
    <div className={styles.faq}>
      <div className={styles.faq__text}>
        <h1>FAQ</h1>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </p>
      </div>
      <div className={styles.faq__info}>
        <h4>Do I need a personal injury report?</h4>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequatduis enim velit mollit Exer. Amet minim
          mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
          officia consequatduis enim velit mollit Exer.
        </p>
        <div className={styles.accordians}>
          <div className={styles.line}></div>
          <Accordion className={styles.accordian}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className={styles.addButton} />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <h3 className={styles.accordian__h3}>
                How much is my case worth?
              </h3>
            </AccordionSummary>
            <AccordionDetails>
              <p className={styles.accordian__p}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </p>
            </AccordionDetails>
          </Accordion>
          <div className={styles.line}></div>

          <Accordion className={styles.accordian}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className={styles.addButton} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <h3 className={styles.accordian__h3}>
                What should I do right after car accidect
              </h3>
            </AccordionSummary>
            <AccordionDetails>
              <p className={styles.accordian__p}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </p>
            </AccordionDetails>
          </Accordion>
          <div className={styles.line}></div>

          <Accordion className={styles.accordian}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className={styles.addButton} />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <h3 className={styles.accordian__h3}>
                How much is my case worth?
              </h3>
            </AccordionSummary>
            <AccordionDetails>
              <p className={styles.accordian__p}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Faq;
