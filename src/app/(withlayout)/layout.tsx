"use client";

import Contents from "@/components/ui/Contents";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import Sidebar from "@/components/ui/Sidebar";
import { getUserInfo, isLoggedIn } from "@/services/auth.service";
import { Layout } from "antd";
import { useRouter } from "next/navigation";
import React from "react";
import { useEffect, useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const isUserLoggedIn = isLoggedIn();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const data = getUserInfo() as any;

  const expDate = new Date(data?.exp * 1000);

  const nowDate = new Date();

  useEffect(() => {
    if (!isUserLoggedIn || expDate <= nowDate) {
      router.push("/login");
    }
    setIsLoading(true);
  }, [router, isLoading]);

  if (!isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Layout hasSider>
      <Sidebar />

      <Contents>{children}</Contents>
    </Layout>
  );
};

export default DashboardLayout;
