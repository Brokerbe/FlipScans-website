import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { AppRoutes } from './routes';
import { WhatsAppButton } from './components/common/WhatsAppButton';
import { ChatWidget } from './components/chat/ChatWidget';

const App = () => {
  return (
    <Router>
      <Layout>
        <AppRoutes />
        <WhatsAppButton />
        <ChatWidget />
      </Layout>
    </Router>
  );
};

export default App;