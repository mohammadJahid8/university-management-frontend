"use client";
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
      <h1>reset password page</h1>
    </div>
  );
};

export default ResetPasswordPage;
