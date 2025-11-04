import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Silently swallow Spline WebGL errors and render fallback
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.warn('Spline error captured by ErrorBoundary:', error, info);
    }
  }

  render() {
    const { hasError } = this.state;
    const { fallback = null, children } = this.props;

    if (hasError) return fallback;
    return children;
  }
}

export default ErrorBoundary;
