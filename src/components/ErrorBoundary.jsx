import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-red-50 dark:bg-red-900/30 rounded-lg">
          <div className="text-red-800 dark:text-red-200 font-medium">
            Ocorreu um erro ao carregar este componente.
          </div>
          <button
            onClick={() => window.location.reload()}
            className="mt-2 px-4 py-2 bg-red-100 dark:bg-red-800/50 hover:bg-red-200 dark:hover:bg-red-800 text-red-800 dark:text-red-200 rounded-md transition-colors"
          >
            Tentar novamente
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
