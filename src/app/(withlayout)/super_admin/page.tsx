"use client";
import UMBreadCumb from "@/components/ui/UMBreadCumb";
import { getUserInfo } from "@/services/auth.service";

const SuperAdminPage = () => {
  const { role } = getUserInfo() as any;
  return (
    <div>
      <UMBreadCumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
        ]}
      />
      <h1>this page is for super admin</h1>
    </div>
  );
};

export default SuperAdminPage;
