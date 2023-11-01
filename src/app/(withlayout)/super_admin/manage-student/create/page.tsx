"use client";
import StepperForm from "@/components/stepperForm/StepperForm";
import StudenBasictInfo from "@/components/studentForms/StudentBasicInfo";
import StudentGuardianInfo from "@/components/studentForms/StudentGuardianInfo";
import StudentInfo from "@/components/studentForms/StudentInfo";
import StudentLocalGuardianInfo from "@/components/studentForms/StudentLocalGuardianInfo";

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
      content: <StudenBasictInfo />,
    },
    {
      title: "Guardian Information",
      content: <StudentGuardianInfo />,
    },
    {
      title: "Local Guardian Information",
      content: <StudentLocalGuardianInfo />,
    },
  ];

  const handleStudentSubmit = (data: any) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

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

      <StepperForm
        submitHandler={(value) => handleStudentSubmit(value)}
        steps={steps}
      />
    </div>
  );
};

export default CreateStudent;
