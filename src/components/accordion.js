import {
  Accordion,
  AccordionItem,
  Card,
  CardBody,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import React from "react";

export default function Accordioncustom({ data }) {
  return (
    <Accordion className="col-span-3 content-center" variant="bordered">
      {data.map((item, index) => (
        <AccordionItem key={index} title={item.title}>
          {Array.isArray(item.description) ? (
            <div className="grid grid-cols-2 xl:grid-cols-3 gap-4 text-center content-center">
              {item.description.map((desc, idx) => (
                <div key={idx} className="p-2">
                  <Card shadow="sm" isHoverable="true">
                    <CardHeader>{desc}</CardHeader>
                  </Card>
                </div>
              ))}
            </div>
          ) : typeof item.description === "object" ? (
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 text-center content-center">
              {Object.keys(item.description).map((key, idx) => (
                <div className="p-2" key={idx}>
                  <Card shadow="sm" isHoverable="true">
                    <CardHeader>{key}</CardHeader>
                    <Divider />
                    {typeof item.description[key] === "object" ? (
                      <CardBody>
                        {Object.keys(item.description[key]).map(
                          (subkey, subidx) => (
                            <div key={subidx}>
                              <strong>{subkey}:</strong>{" "}
                              {item.description[key][subkey]}
                            </div>
                          )
                        )}
                      </CardBody>
                    ) : (
                      <p>{item.description[key]}</p>
                    )}
                  </Card>
                </div>
              ))}
            </div>
          ) : (
            <p>{item.description}</p>
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
