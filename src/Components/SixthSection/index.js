import React from "react";
import AddIcon from "@mui/icons-material/Add";
import SixthSectionData from "../../Data/SixthSection";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import Typography from "@mui/material/Typography";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `0px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "block",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<AddIcon className="text-white" />}
    {...props}
  />
))(({ theme }) => ({
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(45deg)",
  },
}));

export default function SixthSection() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div >
      <h1 className="text-white py-16 text-center text-5xl font-extrabold">
        Frequently Asked Questions
      </h1>
      {SixthSectionData.map((lst) => (
        <div key={lst.id} className="py-2 px-40">
          <Accordion>
            <AccordionSummary
              id="panel1d-header"
              className="!bg-[rgb(45,45,45)] !text-white"
            >
              <Typography
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
                className="!text-2xl h-16 p-5"
              >
                {lst.ques}
              </Typography>
            </AccordionSummary>
            <div>
              <Typography className="!bg-[rgb(45,45,45)] !text-white p-8 !text-xl text-justify">
                {lst.ans}
              </Typography>
            </div>
          </Accordion>
        </div>
      ))}

      <div className="text-white text-center py-14 text-[20px]">
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
        <div className="flex items-center gap-5 justify-center py-14">
          <input
            className="p-2 bg-[#00000080] w-[400px] h-14 text-white font-semibold border-2 rounded "
            type="email"
            name="email"
            id="email"
            label="Email address"
            placeholder="Email address"
          />
          <button className="bg-[#E50914] text-white text-3xl font-semibold rounded p-2 h-fit w-fit" >
            Get Started <ArrowForwardIosSharpIcon className="pb-1" />
          </button>
        </div>
      </div>
      <div className="bg-[rgb(45,45,45)] h-2"></div>

    </div>
  );
}
