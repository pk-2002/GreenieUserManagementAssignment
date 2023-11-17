

// User Details Tab

import React, { useState } from "react";
import { Table, Input, Button, Modal } from "antd";

const UserTable = ({ users }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredUsers = users.filter((user) => {
    return user.username.includes(searchQuery) || user.email.includes(searchQuery);
  });

  const handleGenerateToken = (user) => {
    // TODO: Implement token generation logic
    const token = "YOUR_PROTECTED_USER_TOKEN";

    // Open modal to display the token
    Modal.open({
      title: "Protected User Token",
      content: <div>Token: {token}</div>,
      footer: null,
    });
  };

  return (
    <div>
      <Input
        type="text"
        placeholder="Search users..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Table
        columns={[
          { title: "Username", dataIndex: "username" },
          { title: "Email", dataIndex: "email" },
          { title: "Phone", dataIndex: "phone" },
          { title: "Created At", dataIndex: "createdAt" },
          {
            title: "Actions",
            render: (user) => (
              <Button type="primary" onClick={() => handleGenerateToken(user)}>
                Generate Token
              </Button>
            ),
          },
        ]}
        dataSource={filteredUsers}
      />
    </div>
  );
};

const UserDetails = () => {
  // TODO: Fetch user data from placeholder database
  const users = [
    { id: 1, username: "johndoe", email: "john.doe@example.com", phone: "1234567890", createdAt: new Date() },
    { id: 2, username: "janedoe", email: "jane.doe@example.com", phone: "0987654321", createdAt: new Date() },
  ];

  return (
    <div>
      <UserTable users={users} />
    </div>
  );
};

// Account Creation Tab

const AccountCreation = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // TODO: Implement dummy request handling logic
    alert("Account created successfully!");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="primary" htmlType="submit">
          Create Account
        </Button>
      </form>
    </div>
  );
};

// Dashboard Layout

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("userDetails");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };


  return (
    <div>
    <p>Hello</p>
    </div>
);
};
