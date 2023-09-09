import { useEffect } from "react";
import { TextInput, PasswordInput, Button, Group, Box } from "@mantine/core";
import { useForm, isEmail } from "@mantine/form";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../slices/users";
import { setCredentials } from "../slices/auth";
import { motion } from "framer-motion";

const LoginPage = () => {
  const pageAnimation = {
    initial: {
      y: "100vh",
    },
    final: {
      y: "0vh",
      transition: {
        type: "spring",
        mass: 0.4,
      },
    },
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  const { userInfo } = useSelector(state => state.auth);
  const loginForm = useForm({
    initialValues: {
      email: "",
      password: "",
      termsOfService: false,
    },

    validate: {
      email: isEmail("Invalid email"),
    },
  });

  // Redirect to my control page if loggedIn
  useEffect(() => {
    if (userInfo) {
      navigate("/settings");
    }
  }, [navigate, userInfo]);

  const submitHandler = async e => {
    try {
      const res = await login({ e }).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/settings");
    } catch (err) {
      console.log(err?.data?.message || err.error);
    }
  };

  return (
    <motion.div className="login-wrapper" variants={pageAnimation} initial="initial" animate="final">
      <div className="heading1">Sign In</div>
      <div className="login-form-wrapper">
        <Box component={loginForm} maw={400} mx="auto" onSubmit={form.onSubmit(e => submitHandler(e))}>
          <TextInput withAsterisk label="Email" placeholder="your@email.com" {...form.getInputProps("email")} />
          <PasswordInput withAsterisk label="Password" placeholder="12345678" {...form.getInputProps("password")} />
          <Group position="center" mt="md">
            <Button
              variant="light"
              radius="md"
              disabled={isLoading || !form.isTouched()}
              type="submit"
              className="heading-3"
            >
              Sign In
            </Button>
          </Group>
        </Box>
      </div>
    </motion.div>
  );
};

export default LoginPage;
