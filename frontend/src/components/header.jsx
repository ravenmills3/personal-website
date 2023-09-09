import { useState } from "react";
import { Header, Group, Avatar, Menu, Burger, MediaQuery, ActionIcon } from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  FaUserAlt,
  FaCommentAlt,
  FaGitAlt,
  FaLinkedinIn,
  FaBook,
  FaFolderOpen,
  FaSignOutAlt,
  FaSlidersH,
} from "react-icons/fa";
import "../styles/header.css";
import { useLogoutMutation } from "../slices/users";
import { logout } from "../slices/auth";

const AppNav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();
  const { userInfo } = useSelector(state => state.auth);

  const [opened, setOpened] = useState(false);
  const burgerLabel = opened ? "Close navigation" : "Open navigation";

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Header height={60} className="nav-container">
      <div className="logo-wrapper">
        <Avatar component={Link} to="/" src="../images/logo.svg" alt="it's me" />
      </div>
      <Group className="nav-button-wrapper">
        <Menu shadow="md" width={200} opened={opened} onChange={setOpened}>
          <Menu.Target>
            <Burger aria-label={burgerLabel} />
          </Menu.Target>

          <Menu.Dropdown>
            <Menu.Item component={Link} to="/projects" icon={<FaFolderOpen size={14} />}>
              Projects
            </Menu.Item>
            <Menu.Item component={Link} to="/message" icon={<FaCommentAlt size={14} />}>
              Contact
            </Menu.Item>
            <Menu.Item component={Link} to="/books" icon={<FaBook size={14} />}>
              Bookshelf
            </Menu.Item>

            <Menu.Divider />
            {userInfo ? (
              <>
                <Menu.Item component={Link} to="/settings" icon={<FaSlidersH size={14} />}>
                  Settings
                </Menu.Item>
                <Menu.Item component={Button} onClick={logoutHandler} icon={<FaSignOutAlt size={14} />}>
                  Logout
                </Menu.Item>
              </>
            ) : (
              <Menu.Item component={Link} to="/login" icon={<FaUserAlt size={14} />}>
                Login
              </Menu.Item>
            )}
          </Menu.Dropdown>
        </Menu>

        <MediaQuery smallerThan="md" styles={{ display: "none" }}>
          <Group>
            <ActionIcon variant="subtle" component="a" href="https://mantine.dev/core/">
              <FaGitAlt size="1rem" />
            </ActionIcon>
            <ActionIcon variant="subtle" component="a" href="https://mantine.dev/core/">
              <FaLinkedinIn size="1rem" />
            </ActionIcon>
          </Group>
        </MediaQuery>
      </Group>
    </Header>
  );
};

export default AppNav;
