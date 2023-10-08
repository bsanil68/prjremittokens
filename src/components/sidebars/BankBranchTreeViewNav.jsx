import React, { useState } from 'react';
import { Tree } from 'rsuite';
import Dashboard from './Dashboard'; // Import your Dashboard component
import Profile from './Profile'; // Import your Profile component
import SavingsIcon from '@mui/icons-material/Savings';
import DSADashboard from '../layout/DSADashboard';

const BankBranchTreeViewNav = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  // Define your tree data with icons
  const treeData = [
    {
      label: 'Dashboard',
      value: 'dashboard',
      icon: <i className="rs-icon rs-icon-dashboard" />, // Example: using an icon element
    },
    {
      label: 'RemitterTasks',
      value: 'remtasks',
      icon: <SavingsIcon/>, 
      children: [
        {
          label: 'ApproveBenificiary',
          value: 'approvebeni',
        },
        {
          label: 'ApprovePayment',
          value: 'approvepayment',
        },
        {
          label: 'ApproveNewAccounts',
          value: 'approveaccounts',
        },



      ],
    },
    // Add more menu items as needed with their respective icons
    {
        label: 'MTOTasks',
        value: 'mtotasks',
        icon: <SavingsIcon/>, 
        children: [
          {
            label: 'ViewPayments',
            value: 'viewpayments',
          },
          {
            label: 'ViewDebitNotes',
            value: 'Editremitter',
          },
          {
            label: 'AddBenificiary',
            value: 'addbeni',
          },
          {
            label: 'EditBenificiary',
            value: 'Editbeni',
          },
  
        ],
      },
      {
        label: 'Payment',
        value: 'payment',
        icon: <SavingsIcon/>, 
        children: [
          {
            label: 'SendPaymentInfo',
            value: 'sendpaymentinfo',
          },
          {
            label: 'ViewPaymentInfo',
            value: 'Viewpaymentinfo',
          },
  
        ],
      },
      {
        label: 'Account',
        value: 'account',
        icon: <SavingsIcon/>, 
        children: [
          {
            label: 'SendAccReq',
            value: 'sendaccreq',
          },
          {
            label: 'ViewAccStatus',
            value: 'viewaccstatus',
          },
  
        ],
      },
  ];

  // Define a function to handle item selection
  const handleSelect = (value) => {
    // Handle the selected item, e.g., set it in state
    setSelectedItem(value);
  };

 

  return (
    <div>
      <Tree data={treeData} onSelect={handleSelect} defaultExpandAll />
      {selectedItem === 'dashboard' && <DSADashboard/>}
      {selectedItem === 'plans' && <Profile />}
      {/* Add similar conditional rendering for sub-profiles or other menu items */}

    </div>
  );
};

export default BankBranchTreeViewNav;