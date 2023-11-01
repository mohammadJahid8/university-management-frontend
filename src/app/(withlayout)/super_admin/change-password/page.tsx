"use client";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCumb from "@/components/ui/UMBreadCumb";
import { getUserInfo } from "@/services/auth.service";

const ResetPasswordPage = () => {
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
            label: `change-password`,
            link: `/${role}/change-password`,
          },
        ]}
      />

      <ActionBar title="Reset password " />
    </div>
  );
};

export default ResetPasswordPage;
