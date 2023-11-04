"use client";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCumb from "@/components/ui/UMBreadCumb";
import UMTable from "@/components/ui/UMTable";
import { useDepartmentsQuery } from "@/redux/api/departmentApi";
import { getUserInfo } from "@/services/auth.service";
import { Button, Input } from "antd";
import Link from "next/link";
import { useState } from "react";
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  ReloadOutlined,
} from "@ant-design/icons";

const Department = () => {
  const { role } = getUserInfo() as any;

  const query: Record<string, any> = {};

  const [pageSize, setPageSize] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  query["limit"] = pageSize;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  query["searchTerm"] = searchTerm;

  const { data, isLoading } = useDepartmentsQuery({ ...query });
  const departments = data?.departments;
  const meta = data?.meta;

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      sorter: true,
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "start",
              gap: "10px",
            }}
          >
            <Button onClick={() => console.log(data)} type="primary">
              <EyeOutlined />
            </Button>
            <Button onClick={() => console.log(data)} type="primary">
              <EditOutlined />
            </Button>
            <Button onClick={() => console.log(data)} type="primary" danger>
              <DeleteOutlined />
            </Button>
          </div>
        );
      },
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    console.log(page, pageSize);
    setPage(page);
    setPageSize(page);
  };

  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { field, order } = sorter;
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const resetFilter = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
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
            label: `department`,
            link: `/${role}/department`,
          },
        ]}
      />

      <ActionBar title="Department List">
        <Input
          type="text"
          size="large"
          placeholder="Search.."
          style={{
            width: "20%",
          }}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div>
          <Link href="/super_admin/department/create">
            <Button type="primary">Create Department</Button>
          </Link>
          {(!!sortBy || !!sortOrder || !!searchTerm) && (
            <Button
              type="primary"
              style={{
                marginLeft: "5px",
              }}
              onClick={resetFilter}
            >
              <ReloadOutlined />
            </Button>
          )}
        </div>
      </ActionBar>

      <UMTable
        loading={isLoading}
        dataSource={departments}
        columns={columns}
        pageSize={pageSize}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default Department;
