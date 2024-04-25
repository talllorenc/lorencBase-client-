import JSONPretty from "react-json-pretty";
import "./JsonTheme.css";

interface IJsonHlProps {
  code: string;
}

const JsonHl = ({ code }: IJsonHlProps) => {
  return <JSONPretty id="json-pretty" data={code}></JSONPretty>;
};

export default JsonHl;
