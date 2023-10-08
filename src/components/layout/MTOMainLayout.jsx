import React, { useState } from 'react';
import { Sidebar, TreeView, Content } from 'rsuite';

const MTOLayout = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  // Handle tree node selection
  const handleTreeNodeSelect = (nodeData) => {
    // Extract the nodeId from the nodeData based on the key
    const nodeId = getNodeById(nodeData.key);

    setSelectedItem(nodeId);

    //  change content based  in node  selected    
  };
   // Define your sidebar tree data
   const sidebarData = [
    {
      label: 'MTODashboard',
      key: 'mtodash',
      icon: 'dashboard',
      children: [
        {
          label: 'ONBoards',
          key: 'onboard',
        },
        {
          label: 'Accounts',
          key: 'accounts',
        },
      ],
    },
    {
      label: 'Plans',
      key: 'plans',
      icon: 'shopping-bag',
      children: [
        {
          label: 'SelectPlan',
          key: 'selectplan',
        },
        {
          label: 'RemitOnboard',
          key: 'planApprovals',
        },
        {
          label: 'PlanPayments',
          key: 'planpayments',
        },
      ],
    },
    // Add more menu items as needed
    {
      label: 'Commision',
      key: 'commision',
      icon: 'shopping-bag',
      children: [
        {
          label: 'ApprovedAccounts',
          key: 'approvedacc',
        },
        {
          label: 'Rejected',
          key: 'rejectedacc',
        },
        {
          label: 'Resubmission',
          key: 'resub',
        },
      ],
    },
  ];


  // Function to map key to nodeId
  const getNodeById = (key) => {
    switch (key) {
      case 'Node 1':
        return 'Node1ID';
      case 'Node 2':
        return 'Node2ID';
      case 'Node 3':
        return 'Node3ID';
      case 'Node 4':
        return 'Node4ID';
      case 'Node 5':
        return 'Node5ID';
      default:
        return null;
    }
  };


  return (
    <div>
      <Sidebar>
        <TreeView
          data={sidebarData}
          onSelect={handleTreeNodeSelect}
        />
      </Sidebar>
      
      <Content>
       
      </Content>
    </div>
  );
};

export default MTOLayout;
