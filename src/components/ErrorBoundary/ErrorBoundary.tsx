import React, { ErrorInfo } from "react";

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<
  React.PropsWithChildren<{}>,
  State
> {
  constructor(props: React.PropsWithChildren<{}>) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error) {
    // Просто оновлюємо стан, щоб React знав про помилку,
    // але ми не показуємо fallback UI
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, info);
  }

  render() {
    // Якщо є помилка — рендеримо дітей без змін, або можна null
    if (this.state.hasError) {
      return this.props.children;
      // або null, якщо хочеш приховати UI при помилці
      // return null;
    }

    return this.props.children;
  }
}
