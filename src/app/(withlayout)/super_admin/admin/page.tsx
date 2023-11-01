"use client";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCumb from "@/components/ui/UMBreadCumb";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

const ManageAdminPage = () => {
  const { role } = getUserInfo() as any;
  return (
    <div>
      <UMBreadCumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
          {
            label: `admin`,
            link: `/${role}/admin`,
          },
        ]}
      />

      <ActionBar title="Admin List">
        <Link href="/super_admin/admin/create">
          <Button>Create Admin</Button>
        </Link>
      </ActionBar>
    </div>
  );
};

export default ManageAdminPage;
