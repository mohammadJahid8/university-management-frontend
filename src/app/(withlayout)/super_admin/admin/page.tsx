import { Button } from "antd";
import Link from "next/link";
import React from "react";

const ManageAdminPage = () => {
  return (
    <div>
      <h1>Manage admin page</h1>
      <Link href="/super_admin/admin/create">
        <Button>Create Admin</Button>
      </Link>
    </div>
  );
};

export default ManageAdminPage;
