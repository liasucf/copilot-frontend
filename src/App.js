import React, { useState } from 'react';
import { CopilotKit } from '@copilotkit/react-core';
import { CopilotChat } from '@copilotkit/react-ui';
import '@copilotkit/react-ui/styles.css';
import './App.css';

function App() {
  const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://127.0.0.1:8000';
  const [conversationId, setConversationId] = useState(null);

  return (
    <CopilotKit runtimeUrl={backendUrl}>
      <div className="app-container">
        <header className="app-header">
          <h1>🤖 Databricks Supervisor Agent</h1>
          <p>Powered by AG-UI Protocol + CopilotKit</p>
          <div className="backend-status">
            <span className="status-dot"></span>
            <span>Connected to: {new URL(backendUrl).hostname}</span>
          </div>
        </header>
        <main className="app-main">
          <CopilotChat
            instructions={`You are a helpful Databricks supervisor agent. 
            You help users with data analysis, SQL queries, and workspace management.
            Be concise, helpful, and proactive in your responses.`}
            labels={{
              title: 'Databricks Assistant',
              initial: 'How can I help you with Databricks today?',
              placeholder: 'Type your question...',
            }}
          />
        </main>
      </div>
    </CopilotKit>
  );
}

export default App;
