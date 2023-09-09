import { FaRegGrinBeamSweat } from "react-icons/fa";
import { Alert } from "@mantine/core";
import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null, hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true,
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.hasError) {
      // custom fallback UI
      return (
        <div>
          <Alert icon={<FaRegGrinBeamSweat size="1rem" />} title="Whoops!" color="red">
            Something happened, check the details below for what went wrong.
            <br />
            <br />
            <details style={{ whiteSpace: "pre-wrap" }}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo?.componentStack}
            </details>
          </Alert>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
