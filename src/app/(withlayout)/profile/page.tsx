"use client";
import UMBreadCumb from "@/components/ui/UMBreadCumb";
import { getUserInfo } from "@/services/auth.service";

const page = () => {
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
      <h1>this is your profile</h1>
    </div>
  );
};

export default page;
