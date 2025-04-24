import { EuiFieldSearch } from "@elastic/eui";
import React from "react";

interface CommonSearchFieldProps {
  placeholder: string;
  value: string;
  isClearable: boolean;
  onChange:any;
  onSearch: any;
  fullWidth:boolean;
}

export const CommonSearchField: React.FC<CommonSearchFieldProps> = ({
  placeholder,
  value,
  isClearable,
  onChange,
  onSearch,
  fullWidth,
}) => {
  return (
    <>
      <EuiFieldSearch
        placeholder={placeholder}
        value={value}
        isClearable={isClearable}
        onChange={onChange}
        onSearch={onSearch}
        fullWidth={fullWidth}
      />
    </>
  );
};
