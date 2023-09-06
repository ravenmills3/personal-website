import { Box, Container } from "@mantine/core";
import { Link } from "react-router-dom";
import { FaUserAlt, FaCommentAlt } from "react-icons/fa";

const Header = () => {
  return (
    <div className="nav-bar">
      <Container>
        <Box component={Link} to="/">
          Raven's Mind
        </Box>
        <Box component={Link} to="/projects">
          Projects
        </Box>
        <Box component={Link} to="/books">
          Bookshelf
        </Box>
        <Box component={Link} to="/resume">
          Resume
        </Box>
        <Box component={Link} to="/message">
          <FaCommentAlt /> Contact Me
        </Box>
        <Box component={Link} to="/login">
          <FaUserAlt />
        </Box>
      </Container>
    </div>
  );
};

export default Header;
