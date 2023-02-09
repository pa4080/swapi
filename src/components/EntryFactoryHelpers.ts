export interface EntryStyles {
  EntryContainer: string;
  Cat: string;
  TitleName: string;
  DataContainer: string;
  Field: string;
  Label: string;
  Data: string;
}

export const defaultStyles = {
  EntryContainer:
    "bg-mlt-dark-3/70 px-6 py-4 rounded-3xl bg-blend-hard overflow-hidden text-mlt-gray-4",
  Cat: "text-4xl text-mlt-yellow-primary mb-2",
  TitleName: "text-2xl my-4 text-mlt-gray-6",
  DataContainer: "",
  Field: "text-lg mt-2",
  Label: "text-mlt-gray-2 inline-block",
  Data: "font-semibold inline-block ml-2"
};

export const capitalize = (input: any): string => {
  // console.log(input);
  const str = String(input).trim().replace(/_/g, " ") ?? "Unknown";
  if (!str) return "Unknown";
  return str
    .split(" ")
    .map((s) => `${s[0].toUpperCase()}${s.slice(1)}`)
    .join(" ");
};

export function numberWithCommas(input: string | number): string {
  /**
   * Safari browser does not support lookbehind RegExps and 
   * the following expression causes an fatal error.
   * input.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
   * Refs:
   * > https://www.appsloveworld.com/reactjs/200/495/react-application-on-safari-throws-syntaxerror-invalid-regular-expression-inval
   * > https://stackoverflow.com/questions/51568821/works-in-chrome-but-breaks-in-safari-invalid-regular-expression-invalid-group
   * > https://stackoverflow.com/questions/20646412/simple-regex-in-javascript-works-in-all-browsers-but-safari
   * > https://caniuse.com/js-regexp-lookbehind
   * Solution: 
   * > https://stackoverflow.com/a/2901298/6543935
   */
  return String(input).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
}

export const composeSuffix = (key: string): string => {
  switch (key.toLowerCase()) {
    case "height":
      return " cm";
    case "mass":
      return " kg";
    case "cargo_capacity":
      return " kg";
    case "length":
      return " m";
    case "cost_in_credits":
      return " credits";
    case "diameter":
      return " km";
    case "orbital_period":
      return " unified galaxy days";
    case "rotation_period":
      return " unified galaxy days";
    case "average_height":
      return " cm";
    case "average_lifespan":
      return " years";
    default:
      return "";
  }
};
