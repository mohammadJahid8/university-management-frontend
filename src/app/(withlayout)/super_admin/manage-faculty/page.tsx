"use client";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCumb from "@/components/ui/UMBreadCumb";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd";
import Link from "next/link";

const ManageFaculty = () => {
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
            label: `manage-faculty`,
            link: `/${role}/manage-faculty`,
          },
        ]}
      />

      <ActionBar title="Manage faculty">
        <Link href="/super_admin/manage-faculty/create">
          <Button>Create Faculty</Button>
        </Link>
      </ActionBar>
    </div>
  );
};

export default ManageFaculty;
