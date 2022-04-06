import React from "react"
import { Layout } from "antd"

export interface LayoutProps {
  children: React.ReactNode
}
const Layouts = ({ children }: LayoutProps) => {
  return <Layout className="layout-container">{children}</Layout>
}

export default Layouts
