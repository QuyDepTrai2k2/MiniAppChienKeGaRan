import React from "react";

export const Page: React.FC<{ className?: string; hideScrollbar?: boolean; children?: React.ReactNode }> = ({ className, children }) => (
  <div className={className} style={{ width: "100vw", height: "100vh" }}>{children}</div>
);

const TextBase: React.FC<{ size?: string; className?: string; style?: React.CSSProperties; children?: React.ReactNode }> = ({ className, style, children }) => (
  <span className={className} style={style}>{children}</span>
);

const Title: React.FC<{ size?: string; className?: string; style?: React.CSSProperties; children?: React.ReactNode }> = ({ className, style, children }) => (
  <h1 className={className} style={style}>{children}</h1>
);

export const Text = Object.assign(TextBase, { Title });

export const App: React.FC<{ theme?: string; children?: React.ReactNode }> = ({ children }) => <>{children}</>;
export const ZMPRouter: React.FC<{ children?: React.ReactNode }> = ({ children }) => <>{children}</>;
export const AnimationRoutes: React.FC<{ children?: React.ReactNode }> = ({ children }) => <>{children}</>;
export const Route: React.FC<{ path?: string; element?: React.ReactNode }> = ({ element }) => <>{element}</>;
