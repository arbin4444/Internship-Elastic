import {
  EuiConfirmModal,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSpacer,
  EuiSwitch,
  EuiText,
  useGeneratedHtmlId,
} from "@elastic/eui";
import React, { useState } from "react";
import { CommonInputField } from "../commonComponents/CommonInputField";
import { CommonComboBox } from "../commonComponents/CommonComboBox";
import { CommonCheckBox } from "../commonComponents/CommonCheckBox";
import { CommonTextArea } from "../commonComponents/CommonTextArea";
import { CommonButton } from "../commonComponents/CommonButton";
import { CommonFlyout } from "../commonComponents/CommonFlyout";
import { CommonTable } from "../commonComponents/CommonTable";
import { CommonIconButton } from "../commonComponents/CommonIconButton";
import {CommonToast} from "../commonComponents/CommonToast";
interface ComboBoxOption {
  label: string;
}

interface UserDetail {
  id : number;
  userName :string;
  userService:string[];
  userRetire :string;
  userDescription:string;
}




export const DetailForm:React.FC = () => {
  const comboBoxOptions:ComboBoxOption[] = [
    { label: "1 year" },
    { label: "2 year" },
    { label: "3 year" },
  ];
  const [inputName, setInputName] = useState<string>("");
  const [option, setOption] = useState<ComboBoxOption[]>(comboBoxOptions);
  const [selectedOption, setSelectedOption] = useState<ComboBoxOption[]>([]);
  const [checkbox, setCheckbox] = useState<boolean>(false);
  const [checkbox1, setCheckbox1] = useState<boolean>(false);
  const [description, setDescription] = useState<string>("");
  const [detailFlyout, setDetailFlyout] = useState<boolean>(false);
  const [usersDetails, setUsersDetails] = useState<UserDetail[]>([]);

  //For Switch Case
  const [switchUser, setSwitchUser] = useState<boolean>(false);

  // console.log("this is selectedOption",selectedOption)

  //For Adding Pagination to the Table

  const [pageIndex, setPageIndex] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(5);
  // const [showPerPageOptions, setShowPerPageOptions] = useState(true);

  // const tooglePerPageOptions =() => setShowPerPageOptions(!showPerPageOptions)

  //Manually handling pagination of data
  const findUsers = (usersDetails:UserDetail[], pageIndex:number, pageSize:number) => {
    let pageItems;

    if (!pageIndex && !pageSize) {
      pageItems = usersDetails;
    } else {
      const startIndex = pageIndex * pageSize;
      pageItems = usersDetails.slice(
        startIndex,
        Math.min(startIndex + pageSize, usersDetails.length)
      );
    }
    return {
      pageItems,
      totalItemCount: usersDetails.length,
    };
  };

  const { pageItems, totalItemCount } = findUsers(
    usersDetails,
    pageIndex,
    pageSize
  );
  const handlePageChange = ({ page }:any) => {
    if (page) {
      const { index: pageIndex, size: pageSize } = page;
      setPageIndex(pageIndex);
      setPageSize(pageSize);
    }
  };
  const pagination = {
    pageIndex,
    pageSize,
    totalItemCount,
    pageSizeOptions: [5, 0],
    onChange: handlePageChange,
  };

  //For Switch Case
  const handleSwitchUserSelection = ()=>{
    setSwitchUser(!switchUser);
  }

  //For Delete Table Data
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [deleteUserId, setDeleteUserId] = useState<number|null>(null);
  const modalDeleteId = useGeneratedHtmlId();
  const handleShowModal = (id:any) => {
    setDeleteUserId(id);
    setDeleteModal(true);
  };
  const handleCloseModal = () => {
    setDeleteModal(false);
  };
  const handleDeleteModal = (id: number) => {
    let filteredUser = usersDetails.filter(
      (users) => users.id !== deleteUserId
    );
    setUsersDetails([...filteredUser]);
    setDeleteModal(false);
  };

  //For edit table Data using Flyout
  const [editDetailFlyout, setEditDetailFlyout] = useState<boolean>(false);
  const [editOption, setEditOption] = useState<ComboBoxOption[]>(comboBoxOptions);
  const [editUserDetails, setEditUserDetails] = useState<any>(null);
  const basicEditChecboxId = useGeneratedHtmlId({
    prefix: "basicEditCheckbox",
  });
  const editDetailFlyoutId = useGeneratedHtmlId({
    prefix: "editDetailFlyout",
  });
  const basicEditCheckbox1 = useGeneratedHtmlId({
    prefix: "basicEditCheckbox1",
  });
  const handleEditCheckbox = () => {
    setEditUserDetails({ ...editUserDetails, userRetire: "yes" });
  };
  const handleEditCheckbox1 = () => {
    setEditUserDetails({ ...editUserDetails, userRetire: "No" });
  };
  const handleEditUserDescription = (e: { target: { value: any; }; }) => {
    setEditUserDetails({ ...editUserDetails, userDescription: e.target.value });
  };
  const handleUpdateUserDetails = () => {
    setUsersDetails(
      usersDetails.map((user) =>
        user.id === editUserDetails.id ? editUserDetails : user
      )
    );
    setEditDetailFlyout(false);
  };
  const handleEditFlyout = (id: number) => {
    const editUser = usersDetails.find((user) => user.id === id);
    setEditUserDetails(editUser);
    setEditDetailFlyout(true);
  };
  const handleEditSelectedOption = (service: any[]) => {
    setEditUserDetails({
      ...editUserDetails,
      userService: service.map((s) => s.label),
    });
  };

  const detailFlyoutId = useGeneratedHtmlId({
    prefix: "detailFlyout",
  });

  const basicCheckboxId = useGeneratedHtmlId({
    prefix: "basicCheckbox",
  });
  const basicCheckboxId1 = useGeneratedHtmlId({
    prefix: "basicCheckbox",
  });

  //For Table

  const columns = [
    {
      field: "userName",
      name: "User Name",
      "data-test-subj": "userNameCell",
      render: (prop: any) => <>{prop}</>,
    },
    {
      field: "userService",
      name: "Service Year",
      "data-test-subj": "userServiceCell",
      render: (prop: any) => <>{prop}</>,
    },
    {
      field: "userRetire",
      name: "Retire",
      "data-test-subj": "userRetireCell",
      render: (prop: any) => <>{prop}</>,
    },
    {
      field: "userDescription",
      name: "Description",
      "data-test-subj": "userDescriptionCell",
      render: (prop: any) => <>{prop}</>,
    },
    {
      field: "id",
      name: "Action",
      "data-test-subj": "userActioncell",
      render: (id: number) => (
        <>
          <CommonIconButton
            iconType="trash"
            aria-label="Delete"
            color="danger"
            onClick={() => handleShowModal(id)}/>
          {deleteModal && (
            <EuiConfirmModal
              aria-labelledby={modalDeleteId}
              style={{ width: 600 }}
              title="Are you sure you want to delete?"
              titleProps={{ id: modalDeleteId }}
              onCancel={handleCloseModal}
              onConfirm={() => handleDeleteModal(id)}
              cancelButtonText="Cancel"
              confirmButtonText="Delete"
              defaultFocusedButton="confirm"
              buttonColor="danger"
            >
              <p>This will delete your selected data permanently</p>
            </EuiConfirmModal>
          )}
          <CommonIconButton
            iconType="pencil"
            aria-label="Edit"
            color="success"
            onClick={() => handleEditFlyout(id)}/>
        </>
      ),
    },
  ];

  const handleChangeName = (e :any) => {
    e.preventDefault();
    setInputName(e.target.value);
  };
  const onChangeCheckbox = () => {
    setCheckbox(!checkbox);
    setCheckbox1(false);
  };
  const onChangeCheckbox1 = () => {
    setCheckbox1(!checkbox1);
    setCheckbox(false);
  };
  const handleChange = (selectedOption: React.SetStateAction<ComboBoxOption[]>) => {
    setSelectedOption(selectedOption);
  };

  const handleChangeDescription = (e: { preventDefault: () => void; target: { value: React.SetStateAction<string>; }; }) => {
    e.preventDefault();
    setDescription(e.target.value);
  };

  const handleUsersTable = () => {
    const user = {
      id: Date.now(),
      userName: inputName,
      userService: selectedOption.map((info) => info.label),
      userRetire: checkbox ? "yes" : checkbox1 ? "No" : "Not selected",
      userDescription: description,
    };
    if (
      !inputName ||
      !selectedOption ||
      (!checkbox && !checkbox1) ||
      !description
    ) {
      console.log(alert("please fill details properly"));
      return;
    }
    setUsersDetails([...usersDetails, user]);
    // console.log(setUsersDetails,"This is updated data")
    // if (page){
    //   const {index : pageIndex, size:pageSize} = page;
    //   setPageIndex(pageIndex);
    //   setPageSize(pageSize);
    // }
    handleAddToast();
  };

  //for Details Flyout
  let flyout;
  if (detailFlyout) {
    flyout = (
      <CommonFlyout
        ownFocus
        onClose={() => setDetailFlyout(false)}
        aria-labelledby={detailFlyoutId}
        title="Personal Details Flyout"
        detailTitle="If you want to know your details. Check out below list"
        name={inputName}
        service={selectedOption.map((info) => info.label)}
        retire={checkbox ? "yes" : checkbox1 ? "no" : "not selected"}
        description={description}></CommonFlyout>
    );
  }

  //for editting user Details (Flyout)
  let editFlyout;
  if (editDetailFlyout && editUserDetails) {
    editFlyout = (
      <CommonFlyout
        ownFocus
        onClose={() => setEditDetailFlyout(false)}
        aria-labelledby={editDetailFlyoutId}
        title="Edit Personal Details"
        detailTitle="Now, you can make changes in Personal Details"
        name={
          <CommonInputField
            value={editUserDetails.userName}
            onChange={(e: { target: { value: any; }; }) =>
              setEditUserDetails({
                ...editUserDetails,
                userName: e.target.value,
              })
            }
            placeholder="enter name"
          />
        }
        service={
          <CommonComboBox
            placeholder="select options to edit"
            options={editOption}
            selectedOptions={editUserDetails.userService.map((service: any) => ({
              label: service,
            }))}
            onChange={handleEditSelectedOption}
          />
        }
        retire={
          <>
            <CommonCheckBox
              id={basicEditChecboxId}
              label="Yes"
              checked={editUserDetails.userRetire === "yes"}
              onChange={handleEditCheckbox}
            />
            <CommonCheckBox
              id={basicEditCheckbox1}
              label="No"
              checked={editUserDetails.userRetire === "No"}
              onChange={handleEditCheckbox1}
            />
          </>
        }
        description={
          <CommonTextArea
            value={editUserDetails.userDescription}
            onChange={handleEditUserDescription}
            placeholder="Description Area" isClearable={false}/>
        }
        close={
          <CommonButton
            title="Close"
            iconType="cross"
            color="danger"
            onClick={() => setEditDetailFlyout(false)}/>
        }
        update={
          <CommonButton title="Update" color="primary" onClick={handleUpdateUserDetails}/>
        }
      ></CommonFlyout>
    );
  }


  //For Toast

  let toastId = 0;

  interface Toast {
  id: string;
  title: string;
  color: string;
  text: any;

  }

  const [toasts,setToast]=useState<Toast[]>([]);

  const handleAddToast =()=>{
    const toast = getToast();
    setToast(toasts.concat(toast));
  }
  const removeToast=(id:string)=>{
    setToast((toasts)=>
       toasts.filter((toast)=>toast.id !== id)
    )
  }


  const getToast =()=>{
    const toasts= [
      {
        title : "Submitted Successfully",
        color : "success",
        text : <p>Your data is submitted successfully</p>
      },
      {
        title : "oops! sorry",
        color : "danger",
        text : <p>maybe you entered wrong data</p>
      }
    ];
    return {
      id: `toast${toastId++}`,
      ...toasts[Math.floor(Math.random()* toasts.length)],
    };
  };
   



  return (
    <>
      <EuiFlexGroup
        justifyContent="center"
        alignItems="center"
        direction="column"
      >
        <EuiFlexGroup direction="column">
          <EuiFlexGroup gutterSize="xl" alignItems="center">
            <EuiFlexItem grow={false}>
              <EuiText className="textName">Name :</EuiText>
            </EuiFlexItem>
            <EuiFlexItem className="textiInputField" grow={false}>
              <CommonInputField
                value={inputName}
                onChange={handleChangeName}
                placeholder="enter your name"
              />
            </EuiFlexItem>
          </EuiFlexGroup>
          <EuiFlexGroup alignItems="center">
            <EuiFlexItem grow={false}>
              <EuiText className="textName">Service Year:</EuiText>
            </EuiFlexItem>
            <EuiFlexItem>
              <CommonComboBox
                placeholder="select options"
                options={option}
                selectedOptions={selectedOption}
                onChange={handleChange}
              />
            </EuiFlexItem>
          </EuiFlexGroup>
          <EuiFlexGroup gutterSize="xl">
            <EuiFlexItem grow={false}>
              <EuiText className="textName1">Retire :</EuiText>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <CommonCheckBox
                id={basicCheckboxId}
                label="yes"
                checked={checkbox}
                onChange={onChangeCheckbox}
              />
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <CommonCheckBox
                id={basicCheckboxId1}
                checked={checkbox1}
                onChange={onChangeCheckbox1}
                label="No"
              />
            </EuiFlexItem>
          </EuiFlexGroup>
          <EuiFlexGroup>
            <EuiFlexItem grow={false}>
              <EuiText>Description :</EuiText>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <CommonTextArea
                value={description}
                onChange={handleChangeDescription}
                placeholder="Text Area"
                isClearable={true}
              />
            </EuiFlexItem>
          </EuiFlexGroup>
          <EuiFlexGroup justifyContent="center">
            <EuiFlexItem grow={false}>
              <div>
                <CommonButton
                  className="button"
                  color="success"
                  onClick={handleUsersTable}
                  title="Submit"
                />
              </div>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <div>
                <CommonButton
                  title="Next"
                  color="primary"
                  onClick={() => setDetailFlyout(true)}
                />
              </div>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFlexGroup>
      </EuiFlexGroup>
      {flyout}
      {editFlyout}
      <EuiSpacer size="xl"/>
      <EuiFlexGroup>
        <EuiFlexItem>
          <EuiSwitch
            label="User Selection"
            checked={switchUser}
            onChange={handleSwitchUserSelection}
          />
          <EuiSpacer size="s"/>
          <CommonTable
            tableCaption="User Details"
            items={pageItems}
            rowHeader="userName"
            columns={columns}
            pagination={pagination}
            onChange={handlePageChange}
          />
        </EuiFlexItem>
      </EuiFlexGroup>
      <CommonToast
        toasts={toasts}
        dismissToast={removeToast}
        toastLifeTimeMs={1000}
      />
    </>
  );
};
