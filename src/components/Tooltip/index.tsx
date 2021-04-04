import React from 'react';

import { Container } from './styles';

interface TooltipProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({
  title,
  className,
  children,
}: TooltipProps) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  );
};

Tooltip.defaultProps = {
  className: '',
};

export default Tooltip;
