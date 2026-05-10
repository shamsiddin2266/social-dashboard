import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import { ageGroups, topCountries } from "../data/data"
const colors = ["#6366f1", "#22c55e", "#f59e0b", "#ef4444"]

function Charts({ followerGrowth, engagementData }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>

      <div style={{ background: "#1e293b", padding: "20px", borderRadius: "10px" }}>
        <h3 style={{ marginBottom: "16px" }}>Follower Growth</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={followerGrowth}>
            <XAxis dataKey="month" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip />
            <Line type="monotone" dataKey="followers" stroke="#6366f1" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div style={{ background: "#1e293b", padding: "20px", borderRadius: "10px" }}>
        <h3 style={{ marginBottom: "16px" }}>Post Engagement</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={engagementData}>
            <XAxis dataKey="post" stroke="#94a3b8" />
            <YAxis stroke="#94a3b8" />
            <Tooltip />
            <Bar dataKey="likes" fill="#6366f1" />
            <Bar dataKey="comments" fill="#22c55e" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
        <div style={{ background: "#1e293b", padding: "20px", borderRadius: "10px" }}>
          <h3 style={{ marginBottom: "16px" }}>Age Groups</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={ageGroups} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                {ageGroups.map((entry, index) => (
                  <Cell key={index} fill={colors[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div style={{ background: "#1e293b", padding: "20px", borderRadius: "10px" }}>
          <h3 style={{ marginBottom: "16px" }}>Top Countries</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={topCountries} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                {topCountries.map((entry, index) => (
                  <Cell key={index} fill={colors[index]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

      </div>

    </div>
  )
}

export default Charts