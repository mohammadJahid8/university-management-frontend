"use client";
import ActionBar from "@/components/ui/ActionBar";
import UMBreadCumb from "@/components/ui/UMBreadCumb";
import UMTable from "@/components/ui/UMTable";

import { getUserInfo } from "@/services/auth.service";
import { Button, Input, Popconfirm, message } from "antd";
import Link from "next/link";
import { useState } from "react";
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { useDebounced } from "@/redux/hooks";
import dayjs from "dayjs";
import {
  useAcademicFacultiesQuery,
  useDeleteAcademicFacultyMutation,
} from "@/redux/api/academic/facultyApi";

const Faculty = () => {
  const { role } = getUserInfo() as any;

  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(2);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  const [open, setOpen] = useState<boolean>(false);
  const [itemId, setItemId] = useState<string>("");
  const [confirmLoading, setConfirmLoading] = useState<boolean>(false);
  const showPopconfirm = (id: string) => {
    setItemId(id);
    setOpen(true);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  query["limit"] = pageSize;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }

  const { data, isLoading } = useAcademicFacultiesQuery({ ...query });
  const [deleteAcademicFaculty] = useDeleteAcademicFacultyMutation();
  const academicFaculties = data?.academicFaculties;
  const meta = data?.meta;

  const deleteHandler = async (id: string) => {
    setConfirmLoading(true);
    message.loading("Delete...");

    try {
      await deleteAcademicFaculty(id);
      message.success("Academic Faculty Deleted Successfully");
      setOpen(false);
      setConfirmLoading(false);
    } catch (error: any) {
      console.log(error.message);
      message.error(error.message);
    }
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      sorter: true,
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
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
            <Link href={`/super_Faculty/department/edit/${data.id}`}>
              <Button onClick={() => console.log(data)} type="primary">
                <EditOutlined />
              </Button>
            </Link>

            <Popconfirm
              title="Delete Academic Faculty!"
              description="Are you sure to delete this Academic Faculty?"
              open={itemId === data?.id ? open : false}
              onConfirm={() => deleteHandler(data?.id)}
              okButtonProps={{
                loading: confirmLoading,
              }}
              onCancel={handleCancel}
            >
              <Button
                onClick={() => showPopconfirm(data?.id)}
                type="primary"
                danger
              >
                <DeleteOutlined />
              </Button>
            </Popconfirm>
          </div>
        );
      },
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setPageSize(pageSize);
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
            label: `academic`,
            link: `/${role}/academic/faculty`,
          },
        ]}
      />

      <ActionBar title="Faculties">
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
          <Link href="/admin/academic/faculty/create">
            <Button type="primary">Create Faculty</Button>
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
        dataSource={academicFaculties}
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

export default Faculty;
