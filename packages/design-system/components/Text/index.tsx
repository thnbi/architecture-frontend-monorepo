import React from "react";
import styled from "styled-components";

interface TextProps {
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  children: React.ReactNode;
}

const StyledText = styled.span`
  font-family: "Roboto", sans-serif;
  font-weight: 700;
`;

export function Text({ tag, children, ...props }: TextProps) {
  return (
    <StyledText as={tag} {...props}>
      {children}
    </StyledText>
  );
}
