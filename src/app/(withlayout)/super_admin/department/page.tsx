"use client";
import UMBreadCumb from "@/components/ui/UMBreadCumb";
import { getUserInfo } from "@/services/auth.service";
import { Button } from "antd";
import Link from "next/link";

const Department = () => {
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
            label: `department`,
            link: `/${role}/department`,
          },
        ]}
      />

      <h1>Department List</h1>
      <Link href="/super_admin/department/create">
        <Button>Create Department</Button>
      </Link>
    </div>
  );
};

export default Department;
