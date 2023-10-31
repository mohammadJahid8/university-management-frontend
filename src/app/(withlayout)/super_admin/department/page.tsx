import { Button } from "antd";
import Link from "next/link";

const Department = () => {
  return (
    <div>
      <h1>Department List</h1>
      <Link href="/super_admin/department/create">
        <Button>Create Department</Button>
      </Link>
    </div>
  );
};

export default Department;
