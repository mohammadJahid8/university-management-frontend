"use client";
import UMBreadCumb from "@/components/ui/UMBreadCumb";
import { getUserInfo } from "@/services/auth.service";

const CreateStudent = () => {
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
      <h1>Create Admin</h1>
    </div>
  );
};

export default CreateStudent;
