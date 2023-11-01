"use client";
import StepperForm from "@/components/stepperForm/StepperForm";
import StudentInfo from "@/components/studentForms/studentInfo";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCumb from "@/components/ui/UMBreadCumb";
import { getUserInfo } from "@/services/auth.service";

const CreateStudent = () => {
  const { role } = getUserInfo() as any;

  const steps = [
    {
      title: "Student Information",
      content: <StudentInfo />,
    },
    {
      title: "Basic Information",
      content: <StudentInfo />,
    },
    {
      title: "Guardian Information",
      content: <StudentInfo />,
    },
    {
      title: "Local Guardian Information",
      content: <StudentInfo />,
    },
  ];

  return (
    <div>
      <UMBreadCumb
        items={[
          {
            label: `${role}`,
            link: `/${role}`,
          },
          {
            label: `manage-student`,
            link: `/${role}/manage-student`,
          },
        ]}
      />

      <ActionBar title="Create student" />

      <StepperForm steps={steps} />
    </div>
  );
};

export default CreateStudent;
