import { Box } from "@chakra-ui/react";
import PropTypes from "prop-types";

function PageContainer({ children }) {
  return <Box paddingTop={"40px"}>{children}</Box>;
}

export default PageContainer;
PageContainer.propTypes = {
  children: PropTypes.node,
};
