import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            1. Lorem ipsum dolor sit amet.
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Repellendus at debitis, tenetur nisi delectus aliquam.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            explicabo accusantium, repudiandae asperiores obcaecati consequatur
            consequuntur accusamus nobis dolores ratione!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            {" "}
            2. Lorem, ipsum dolor sit amet consectetur.{" "}
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
            laboriosam non amet, minima veritatis tenetur labore tempore nisi a
            doloremque perspiciatis suscipit quibusdam culpa, repellendus
            adipisci modi architecto incidunt dolorem!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            3. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore,
            quidem aliquam. Rem, dolorum cumque! Enim.{" "}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            sapiente neque quidem esse, illum dolore sequi ipsa omnis commodi,
            ducimus doloremque voluptatibus.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            4. Lorem ipsum dolor sit amet.
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore,
            quidem aliquam.
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl. Integer
            sit amet egestas eros, vitae egestas augue. Duis vel est augue.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
            laudantium neque, quibusdam facere sit molestias.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
