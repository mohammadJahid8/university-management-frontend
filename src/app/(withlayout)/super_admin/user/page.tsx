"use client";
import UMBreadCumb from "@/components/ui/UMBreadCumb";
import { getUserInfo } from "@/services/auth.service";

const ManageStudent = () => {
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
            label: `user`,
            link: `/${role}/user`,
          },
        ]}
      />
      <h1>manage user page</h1>
    </div>
  );
};

export default ManageStudent;
