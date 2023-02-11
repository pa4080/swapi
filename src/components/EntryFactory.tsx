import React, { useEffect } from "react";
import { SwapiTypes } from "../models";
import { capitalize, defaultStyles, EntryStyles } from "./EntryFactoryHelpers";
import EntryField from "./EntryField";
import EntryWooIntegration from "./EntryWooData";

interface Props {
  data: SwapiTypes;
  styles?: EntryStyles;
  fields: string[];
}

const EntryFactory: React.FC<Props> = ({ data, styles = defaultStyles, fields }) => {
  useEffect(() => {
    document.getElementById("scroll-to-top")?.scrollIntoView();
  }, [data]);

  return (
    <div id="Entry" className="relative w-fit h-fit">
      <div className={`entry-container ${styles.EntryContainer}`}>
        {data.category ? (
          <>
            <h2 className={styles.Cat}>{capitalize(data.category)}</h2>
            <div className="entry-data z-10">
              <div className={styles.TitleName}>
                {capitalize(data.title ?? data.name)}
              </div>
              <div className={styles.DataContainer}>
                {fields.map((field, i) => {
                  const name: string = field;
                  const value: string = data[field];
                  return (
                    <EntryField key={i} name={name} value={value} styles={styles} />
                  );
                })}
              </div>
            </div>
          </>
        ) : (
          <h2 className={styles.Cat}>Jumping through hyperspace...</h2>
        )}
      </div>
      {data.category ? <EntryWooIntegration titleName={data.title ?? data.name} /> : ""}
    </div>
  );
};

export default EntryFactory;
