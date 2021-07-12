import React from 'react';
import { Campaigns } from './components/campaigns/Campaigns';
import { CampaignProvider } from './components/campaigns/CampaignProvider';
import './App.css';

function App() {
  return (
    <>
      <CampaignProvider>
        <Campaigns />
      </CampaignProvider>
    </>
  );
}

export default App;
