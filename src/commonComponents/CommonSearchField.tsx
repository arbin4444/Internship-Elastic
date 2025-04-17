import { EuiFieldSearch } from "@elastic/eui";
import React from "react";

interface CommonSearchFieldProps {
  placeholder: string;
  value: string;
  isClearable: boolean;
  onChange: any;
}

export const CommonSearchField: React.FC<CommonSearchFieldProps> = ({
  placeholder,
  value,
  isClearable,
  onChange,
}) => {
  return (
    <>
      <EuiFieldSearch
        placeholder={placeholder}
        value={value}
        isClearable={isClearable}
        onChange={onChange}
      />
    </>
  );
};
