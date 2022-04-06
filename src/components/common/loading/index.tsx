import { Spin } from "antd"
import { LoadingOutlined } from "@ant-design/icons"

import "./styles.scss"

export interface ILoadingProps {
  isLoading: boolean
}

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const TheLoadingSpinner = ({ isLoading }: ILoadingProps) => {
  return (
    <div className={`loading-container ${!isLoading ? "display-none" : ""}`}>
      <Spin indicator={antIcon} className="loading-content" />
      <div className="loading-overlay" />
    </div>
  )
}

export default TheLoadingSpinner
