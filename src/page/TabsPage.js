import { Tab, Tabs } from '../component/Tabs';

const TabsPage = () => {
  const tabs = [
    {
      label: 'Test 1',
      content: 'TEST 111',
    },
    {
      label: 'Test 2',
      content: 'TEST 222',
    },
    {
      label: 'Test 3',
      content: 'TEST 333',
    },
    {
      label: 'Test 4',
      content: 'TEST 444',
    },
  ];
  return (
    <div className="">
      <h1 className="text-lg">🚧 Tabs Page 입니다.</h1>
      <div className="m-4 p-4 border-2 rounded-md flex flex-col space-y-4">
        <Tabs>
          {tabs.map((tab) => (
            <Tab label={tab.label}>{tab.content}</Tab>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default TabsPage;
