import { EuiButton } from "@elastic/eui";
import React from "react";

interface CommonButtonsProps {
  size?: "s" | "m";
  isSelected?: boolean;
  isLoading?: boolean;
  iconType?: string;
  className?: string;
  fill?: boolean;
  color?:
    | "text"
    | "accent"
    | "accentSecondary"
    | "primary"
    | "success"
    | "warning"
    | "danger";
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  title: string;
  arialabel?: string;
}

export const CommonButton: React.FC<CommonButtonsProps> = ({
  size,
  isSelected,
  isLoading,
  iconType,
  className,
  fill,
  color = "text",
  onClick,
  title,
  arialabel,
}) => {
  return (
    <div>
      <EuiButton
        size={size}
        isSelected={isSelected}
        isLoading={isLoading}
        iconType={iconType}
        className={className}
        fill={fill}
        color={color}
        onClick={onClick}
        aria-label={arialabel}
      >
        {title}
      </EuiButton>
    </div>
  );
};
