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
            label: `manage-faculty`,
            link: `/${role}/manage-faculty`,
          },
        ]}
      />
      <h1>Create Faculty</h1>
    </div>
  );
};

export default CreateStudent;
