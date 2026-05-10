import { useState } from "react"
import { platforms } from "./data/data"
import Charts from "./components/Charts"

function App() {
  const [activePlatform, setActivePlatform] = useState("instagram")
  const [dateRange, setDateRange] = useState("all")

  const data = platforms[activePlatform]

  const tabStyle = (name) => ({
    padding: "8px 20px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    background: activePlatform === name ? "#6366f1" : "#1e293b",
    color: "white",
    fontSize: "14px",
  })

  const dateStyle = (name) => ({
    padding: "6px 14px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    background: dateRange === name ? "#22c55e" : "#1e293b",
    color: "white",
    fontSize: "13px",
  })

  const filterData = (growthData) => {
    if (dateRange === "7days") return growthData.slice(-2)
    if (dateRange === "30days") return growthData.slice(-3)
    if (dateRange === "3months") return growthData.slice(-5)
    return growthData
  }

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>

      <h1 style={{ marginBottom: "20px", fontSize: "24px" }}>Social Media Dashboard</h1>

      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        <button style={tabStyle("instagram")} onClick={() => setActivePlatform("instagram")}>Instagram</button>
        <button style={tabStyle("twitter")} onClick={() => setActivePlatform("twitter")}>Twitter</button>
        <button style={tabStyle("youtube")} onClick={() => setActivePlatform("youtube")}>YouTube</button>
      </div>

      <div style={{ display: "flex", gap: "10px", marginBottom: "24px" }}>
        <button style={dateStyle("7days")} onClick={() => setDateRange("7days")}>Last 7 Days</button>
        <button style={dateStyle("30days")} onClick={() => setDateRange("30days")}>Last 30 Days</button>
        <button style={dateStyle("3months")} onClick={() => setDateRange("3months")}>Last 3 Months</button>
        <button style={dateStyle("all")} onClick={() => setDateRange("all")}>All Time</button>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "16px", marginBottom: "30px" }}>
        <div style={{ background: "#1e293b", padding: "20px", borderRadius: "10px" }}>
          <p style={{ color: "#94a3b8", marginBottom: "8px" }}>Total Followers</p>
          <h2 style={{ fontSize: "28px" }}>{data.overview.followers.toLocaleString()}</h2>
          <p style={{ color: "#22c55e", fontSize: "13px", marginTop: "6px" }}>+5.2% this month</p>
        </div>

        <div style={{ background: "#1e293b", padding: "20px", borderRadius: "10px" }}>
          <p style={{ color: "#94a3b8", marginBottom: "8px" }}>Total Posts</p>
          <h2 style={{ fontSize: "28px" }}>{data.overview.posts}</h2>
          <p style={{ color: "#22c55e", fontSize: "13px", marginTop: "6px" }}>+12 this month</p>
        </div>

        <div style={{ background: "#1e293b", padding: "20px", borderRadius: "10px" }}>
          <p style={{ color: "#94a3b8", marginBottom: "8px" }}>Engagement Rate</p>
          <h2 style={{ fontSize: "28px" }}>{data.overview.engagement}%</h2>
          <p style={{ color: "#ef4444", fontSize: "13px", marginTop: "6px" }}>-0.3% this month</p>
        </div>

        <div style={{ background: "#1e293b", padding: "20px", borderRadius: "10px" }}>
          <p style={{ color: "#94a3b8", marginBottom: "8px" }}>Total Likes</p>
          <h2 style={{ fontSize: "28px" }}>{data.overview.likes.toLocaleString()}</h2>
          <p style={{ color: "#22c55e", fontSize: "13px", marginTop: "6px" }}>+8.1% this month</p>
        </div>

      </div>

      <Charts engagementData={data.engagementData} followerGrowth={filterData(data.followerGrowth)} />

    </div>
  )
}

export default App