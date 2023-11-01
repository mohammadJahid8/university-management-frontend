"use client";
import ActionBar from "@/components/ui/ActionBar";
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

      <ActionBar title="Create Faculty" />
    </div>
  );
};

export default CreateStudent;
