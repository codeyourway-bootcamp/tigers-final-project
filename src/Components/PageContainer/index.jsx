import { Box } from "@chakra-ui/react";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
function PageContainer({ children, format }) {
  if (format === "column") {
    return (
      <Box
        display={"flex"}
        justifyContent={"center"}
        flexDirection={"row"}
        paddingTop={"70px"}
      >
        {children}
      </Box>
    );
  }
  return <Box paddingTop={"40px"}>{children}</Box>;
}

export default PageContainer;
PageContainer.propTypes = {
  children: PropTypes.node,
};
