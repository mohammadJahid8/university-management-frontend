import { Button } from "antd";
import Link from "next/link";

const ManageFaculty = () => {
  return (
    <div>
      <h1>manage faculty page</h1>
      <Link href="/super_admin/manage-faculty/create">
        <Button>Create Faculty</Button>
      </Link>
    </div>
  );
};

export default ManageFaculty;
