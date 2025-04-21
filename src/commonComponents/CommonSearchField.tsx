import { EuiFieldSearch } from "@elastic/eui";
import React from "react";

interface CommonSearchFieldProps {
  placeholder: string;
  value: string;
  isClearable: boolean;
  onChange:any;
  onSearch: any;
}

export const CommonSearchField: React.FC<CommonSearchFieldProps> = ({
  placeholder,
  value,
  isClearable,
  onChange,
  onSearch,
}) => {
  return (
    <>
      <EuiFieldSearch
        placeholder={placeholder}
        value={value}
        isClearable={isClearable}
        onChange={onChange}
        onSearch={onSearch}
      />
    </>
  );
};
