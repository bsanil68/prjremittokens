import { Tree } from 'rsuite';
import FolderFillIcon from '@rsuite/icons/FolderFill';
import PageIcon from '@rsuite/icons/Page';

const data = [
  {
    label: 'docs',
    value: 'docs',
    children: [
      {
        label: 'pages',
        value: 'pages',
        
      }
    ]
  },
  {
    label: 'packages',
    value: 'packages',
    children: [
      {
        label: 'rsuite',
        value: 'packages-rsuite',
        
      }
    ]
  },
  {
    label: 'node_modules',
    value: 'node_modules',
    children: [
      {
        label: 'rsuite',
        value: 'node_modules-rsuite',
        
      }
    ]
  },
  {
    label: 'README.md',
    value: 'README.md',
    children: null
  },
  {
    label: 'LICENSE',
    value: 'LICENSE',
    children: null
  },
  {
    label: 'package.json',
    value: 'package.json',
    children: null
  },
  {
    label: 'tsconfig.json',
    value: 'tsconfig.json',
    children: null
  },
  {
    label: 'webpack.config.js',
    value: 'webpack.config.js',
    children: null
  }
];

const CommonBankSidebar = () => (
  <Tree
    data={data}
    showIndentLine
    defaultExpandItemValues={['node_modules', 'node_modules-rsuite']}
    renderTreeNode={node => {
      return (
        <>
          {node.children ? <FolderFillIcon /> : <PageIcon />} {node.label}
        </>
      );
    }}
  />
);
export default CommonBankSidebar;