import React, { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

type ErrorFallbackComponent = React.ComponentType<ErrorFallbackProps>;

interface Props {
  children: ReactNode;
  errorFallback: ErrorFallbackComponent;
  onReset: () => void;
}

interface State {
  hasError: boolean;
  error: Error | null;
}
/**
 * ErrorBoundary 컴포넌트로 에러가 떴을 당시에, 표시할 컴포넌트를 정의합니다.
 * @param children 자식 컴포넌트
 * @param errorFallback 에러 발생 시 표시할 컴포넌트
 * @param onReset 에러 발생 시 호출될 함수
 * @author 홍규진
 */
export default class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('에러:', error, errorInfo);
  }

  public render() {
    const { hasError, error } = this.state;
    const { children, errorFallback: ErrorFallback } = this.props;

    if (hasError && error) {
      return (
        <ErrorFallback
          error={error}
          resetErrorBoundary={this.resetErrorBoundary}
        />
      );
    }

    return children;
  }

  private resetErrorBoundary = () => {
    this.setState({ hasError: false, error: null });
    this.props.onReset(); // 외부에서 전달받은 onReset 함수 호출
  };
}
