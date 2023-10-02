"use client";

import Contents from "@/components/ui/Contents";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import Sidebar from "@/components/ui/Sidebar";
import { isLoggedIn } from "@/services/auth.service";
import { Layout } from "antd";
import { useRouter } from "next/navigation";
import React from "react";
import { useEffect, useState } from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const isUserLoggedIn = isLoggedIn();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    if (!isUserLoggedIn) {
      router.push("login");
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
