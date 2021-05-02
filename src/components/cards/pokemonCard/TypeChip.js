import Chip from "@material-ui/core/Chip";
import { titleCase } from "../../../util/string";

const TypeChip = ({ name, ...otherProps }) => (
  <Chip className="types-chip" label={titleCase(name)} {...otherProps} />
);

export default TypeChip;
