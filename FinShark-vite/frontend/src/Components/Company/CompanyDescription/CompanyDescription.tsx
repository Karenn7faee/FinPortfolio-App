import SimpleAccordion from "../../Accordion/SimpleAccordion";

interface Props {
  content?: string;
}

const CompanyDescription = ({ content }: Props) => {
  return (
    <>
      {content ? (
        <>
          <SimpleAccordion title="Company Description">
            <p>{content}</p>
          </SimpleAccordion>
          <hr />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default CompanyDescription;
