import { useState } from "react";

const DAILY = [
  { id: 1, label: "Morning pages", emoji: "☀" },
  { id: 2, label: "3L water", emoji: "💧" },
  { id: 3, label: "Move (gym or walk)", emoji: "🏋" },
  { id: 4, label: "15 min writing", emoji: "✍" },
  { id: 5, label: "Bacne treatment", emoji: "✨" },
  { id: 6, label: "Teeth whitening", emoji: "😁" },
  { id: 7, label: "Skincare AM/PM", emoji: "🧴" },
  { id: 8, label: "Zero inbox", emoji: "📭" },
  { id: 9, label: "Supplements", emoji: "💊" },
  { id: 10, label: "Manifestation journal", emoji: "🌙" },
  { id: 11, label: "Sunscreen", emoji: "🌞" },
  { id: 12, label: "Retainers", emoji: "😬" },
  { id: 13, label: "No sugar / no processed", emoji: "🍎" },
];

const MILESTONES = [
  { id: "m1", label: "30 Substack essays published", color: "#F0997B" },
  { id: "m2", label: "TOS complete draft to supervisors", color: "#AFA9EC" },
  { id: "m3", label: "Artist's Way weeks 7 & 8", color: "#85B7EB" },
  { id: "m4", label: "Visit grandma & grandpa", color: "#5DCAA5" },
  { id: "m5", label: "Resolve Mitacs → pay parents", color: "#FAC775" },
  { id: "m6", label: "$10K invested + $5K saved", color: "#FAC775" },
  { id: "m7", label: "Cansbridge offer signed", color: "#ED93B1" },
  { id: "m8", label: "Gym to 50 total for 2026", color: "#5DCAA5" },
  { id: "m9", label: "Clear bacne", color: "#97C459" },
  { id: "m10", label: "11 teeth whitening sessions", color: "#85B7EB" },
];

const DATES = Array.from({ length: 19 }, (_, i) => i + 12);

const COLORS = {
  coral: { bg: "#FAECE7", accent: "#D85A30", text: "#712B13", light: "#F5C4B3" },
  purple: { bg: "#EEEDFE", accent: "#7F77DD", text: "#3C3489", light: "#CECBF6" },
  teal: { bg: "#E1F5EE", accent: "#1D9E75", text: "#085041", light: "#9FE1CB" },
  amber: { bg: "#FAEEDA", accent: "#EF9F27", text: "#633806", light: "#FAC775" },
  pink: { bg: "#FBEAF0", accent: "#D4537E", text: "#72243E", light: "#F4C0D1" },
  blue: { bg: "#E6F1FB", accent: "#378ADD", text: "#0C447C", light: "#B5D4F4" },
};

export default function VisionBoard() {
  const [checks, setChecks] = useState({});
  const [milestoneChecks, setMilestoneChecks] = useState({});
  const [streak, setStreak] = useState(0);
  const [view, setView] = useState("board");

  const toggle = (day, id) => {
    const key = `${day}-${id}`;
    const next = { ...checks, [key]: !checks[key] };
    setChecks(next);
    let s = 0;
    for (let d = 12; d <= 30; d++) {
      const allDone = DAILY.every((item) => next[`${d}-${item.id}`]);
      if (allDone) s++;
      else break;
    }
    setStreak(s);
  };

  const toggleMilestone = (id) => {
    setMilestoneChecks((p) => ({ ...p, [id]: !p[id] }));
  };

  const getDayProgress = (day) => {
    let count = 0;
    DAILY.forEach((item) => {
      if (checks[`${day}-${item.id}`]) count++;
    });
    return count;
  };

  const milestoneDone = Object.values(milestoneChecks).filter(Boolean).length;

  return (
    <div style={{ fontFamily: "'Instrument Serif', Georgia, serif", maxWidth: 720, margin: "0 auto", padding: "0" }}>
      <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />

      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        .tab-btn { 
          padding: 10px 24px; border: none; cursor: pointer; font-family: 'DM Sans', sans-serif;
          font-size: 13px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase;
          transition: all 0.3s ease; border-radius: 100px;
        }
        .tab-active { background: #1a1a1a; color: white; }
        .tab-inactive { background: transparent; color: #888; }
        .tab-inactive:hover { color: #1a1a1a; }
        .check-btn {
          width: 28px; height: 28px; border-radius: 6px; border: 2px solid #ddd;
          cursor: pointer; display: flex; align-items: center; justify-content: center;
          font-size: 14px; transition: all 0.2s ease; background: white; flex-shrink: 0;
        }
        .check-btn:hover { border-color: #aaa; transform: scale(1.1); }
        .check-done { background: #1a1a1a; border-color: #1a1a1a; color: white; }
        .milestone-row {
          display: flex; align-items: center; gap: 12px; padding: 12px 16px;
          border-radius: 12px; transition: all 0.2s ease; cursor: pointer;
        }
        .milestone-row:hover { transform: translateX(4px); }
        .day-col { 
          display: flex; flex-direction: column; align-items: center; gap: 3px; 
          min-width: 36px; 
        }
        .day-header {
          font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 700;
          color: #aaa; letter-spacing: 1px;
        }
        .day-check {
          width: 22px; height: 22px; border-radius: 5px; border: 1.5px solid #e0e0e0;
          cursor: pointer; display: flex; align-items: center; justify-content: center;
          font-size: 11px; transition: all 0.15s ease; background: white;
        }
        .day-check:hover { border-color: #aaa; }
        .day-check-done { background: #1D9E75; border-color: #1D9E75; color: white; }
        .habit-label {
          font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500;
          color: #333; min-width: 170px; white-space: nowrap;
        }
        .progress-ring {
          width: 100%; height: 6px; border-radius: 3px; background: #f0f0f0; overflow: hidden;
        }
        .progress-fill {
          height: 100%; border-radius: 3px; transition: width 0.4s ease;
        }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
        .fade-in { animation: fadeIn 0.5s ease forwards; }
      `}</style>

      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 32, paddingTop: 8 }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: 4, color: "#aaa", fontWeight: 700, textTransform: "uppercase", marginBottom: 8 }}>
          Aidan Gurung
        </p>
        <h1 style={{ fontSize: 48, fontWeight: 400, lineHeight: 1.1, color: "#1a1a1a", marginBottom: 4 }}>
          April 2026
        </h1>
        <p style={{ fontSize: 20, fontStyle: "italic", color: "#999", fontFamily: "'Instrument Serif', Georgia, serif" }}>
          19 days. No excuses.
        </p>
      </div>

      {/* Streak Counter */}
      <div style={{ 
        background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)", 
        borderRadius: 16, padding: "20px 28px", marginBottom: 24,
        display: "flex", justifyContent: "space-between", alignItems: "center"
      }}>
        <div>
          <p style={{ fontFamily: "'DM Sans'", fontSize: 11, letterSpacing: 2, color: "#888", fontWeight: 600, textTransform: "uppercase" }}>75 Hard streak</p>
          <p style={{ fontSize: 40, color: "white", lineHeight: 1.2 }}>{streak} <span style={{ fontSize: 18, color: "#666" }}>/ 75 days</span></p>
        </div>
        <div style={{ textAlign: "right" }}>
          <p style={{ fontFamily: "'DM Sans'", fontSize: 11, letterSpacing: 2, color: "#888", fontWeight: 600, textTransform: "uppercase" }}>Milestones</p>
          <p style={{ fontSize: 40, color: "#1D9E75", lineHeight: 1.2 }}>{milestoneDone} <span style={{ fontSize: 18, color: "#666" }}>/ {MILESTONES.length}</span></p>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 28 }}>
        <button className={`tab-btn ${view === "board" ? "tab-active" : "tab-inactive"}`} onClick={() => setView("board")}>Vision Board</button>
        <button className={`tab-btn ${view === "tracker" ? "tab-active" : "tab-inactive"}`} onClick={() => setView("tracker")}>Daily Tracker</button>
      </div>

      {view === "board" && (
        <div className="fade-in">
          {/* Milestones Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 28 }}>
            {MILESTONES.map((m) => (
              <div key={m.id} onClick={() => toggleMilestone(m.id)}
                style={{ 
                  background: milestoneChecks[m.id] ? "#f8f8f8" : "white",
                  border: `1.5px solid ${milestoneChecks[m.id] ? "#ddd" : m.color}`,
                  borderRadius: 14, padding: "16px 18px", cursor: "pointer",
                  transition: "all 0.2s ease", position: "relative", overflow: "hidden",
                  opacity: milestoneChecks[m.id] ? 0.6 : 1,
                }}>
                {milestoneChecks[m.id] && (
                  <div style={{ position: "absolute", top: 8, right: 12, fontSize: 18 }}>✓</div>
                )}
                <div style={{ 
                  width: 8, height: 8, borderRadius: "50%", background: m.color, 
                  marginBottom: 10, opacity: milestoneChecks[m.id] ? 0.4 : 1 
                }} />
                <p style={{ 
                  fontFamily: "'DM Sans'", fontSize: 14, fontWeight: 600, color: "#1a1a1a",
                  textDecoration: milestoneChecks[m.id] ? "line-through" : "none",
                  lineHeight: 1.4
                }}>
                  {m.label}
                </p>
              </div>
            ))}
          </div>

          {/* Daily Non-Negotiables List */}
          <div style={{ marginBottom: 20 }}>
            <p style={{ fontFamily: "'DM Sans'", fontSize: 11, letterSpacing: 3, color: "#aaa", fontWeight: 700, textTransform: "uppercase", marginBottom: 16 }}>
              Daily non-negotiables
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              {DAILY.map((item) => (
                <div key={item.id} style={{ 
                  display: "flex", alignItems: "center", gap: 10, padding: "10px 14px",
                  borderRadius: 10, background: "#fafafa", border: "1px solid #f0f0f0"
                }}>
                  <span style={{ fontSize: 16, width: 24, textAlign: "center" }}>{item.emoji}</span>
                  <span style={{ fontFamily: "'DM Sans'", fontSize: 13, fontWeight: 500, color: "#333" }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Schedule Note */}
          <div style={{ 
            background: COLORS.purple.bg, borderRadius: 14, padding: "20px 24px",
            borderLeft: `4px solid ${COLORS.purple.accent}`, marginTop: 20
          }}>
            <p style={{ fontFamily: "'DM Sans'", fontSize: 13, fontWeight: 700, color: COLORS.purple.text, marginBottom: 6 }}>
              The daily split
            </p>
            <p style={{ fontFamily: "'DM Sans'", fontSize: 13, color: COLORS.purple.text, lineHeight: 1.6, opacity: 0.85 }}>
              <strong>9am – 1pm:</strong> Deep TOS work (freshest hours, no distractions)<br/>
              <strong>2pm onwards:</strong> Substack writing & publishing<br/>
              <strong>Kingston (Apr 12–18):</strong> Bank 12–14 Substacks before flying<br/>
              <strong>Oxford (Apr 19–30):</strong> Finish remaining 6–8 + submit TOS
            </p>
          </div>
        </div>
      )}

      {view === "tracker" && (
        <div className="fade-in" style={{ overflowX: "auto" }}>
          <div style={{ minWidth: 850 }}>
            {/* Day progress bars */}
            <div style={{ display: "flex", gap: 4, marginBottom: 20, paddingLeft: 182 }}>
              {DATES.map((d) => {
                const prog = getDayProgress(d);
                const pct = Math.round((prog / 13) * 100);
                const isTravel = d === 19;
                return (
                  <div key={d} style={{ flex: 1, minWidth: 32, textAlign: "center" }}>
                    <div style={{ 
                      fontFamily: "'DM Sans'", fontSize: 10, fontWeight: 700, 
                      color: isTravel ? COLORS.coral.accent : (pct === 100 ? "#1D9E75" : "#bbb"),
                      marginBottom: 3, letterSpacing: 0.5
                    }}>
                      {pct > 0 ? `${pct}%` : ""}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Header row */}
            <div style={{ display: "flex", alignItems: "center", gap: 4, marginBottom: 8 }}>
              <div style={{ minWidth: 170, marginRight: 8 }} />
              {DATES.map((d) => (
                <div key={d} className="day-col" style={{ flex: 1, minWidth: 32 }}>
                  <span className="day-header" style={{ color: d === 19 ? COLORS.coral.accent : undefined }}>
                    {d}
                  </span>
                  {d === 19 && <span style={{ fontSize: 8, color: COLORS.coral.accent, fontFamily: "'DM Sans'", fontWeight: 700 }}>FLY</span>}
                </div>
              ))}
            </div>

            {/* Habit rows */}
            {DAILY.map((item, idx) => (
              <div key={item.id} style={{ 
                display: "flex", alignItems: "center", gap: 4, marginBottom: 4,
                padding: "4px 0", borderRadius: 8,
                background: idx % 2 === 0 ? "transparent" : "#fafafa"
              }}>
                <div className="habit-label" style={{ marginRight: 8, display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 14, width: 20, textAlign: "center" }}>{item.emoji}</span>
                  {item.label}
                </div>
                {DATES.map((d) => {
                  const key = `${d}-${item.id}`;
                  const done = checks[key];
                  return (
                    <div key={key} className="day-col" style={{ flex: 1, minWidth: 32 }}>
                      <button 
                        className={`day-check ${done ? "day-check-done" : ""}`}
                        onClick={() => toggle(d, item.id)}
                      >
                        {done ? "✓" : ""}
                      </button>
                    </div>
                  );
                })}
              </div>
            ))}

            {/* Phase labels */}
            <div style={{ display: "flex", marginTop: 16, paddingLeft: 182, gap: 4 }}>
              <div style={{ 
                flex: 8, background: COLORS.teal.bg, borderRadius: 8, padding: "8px 12px",
                textAlign: "center", fontFamily: "'DM Sans'", fontSize: 11, fontWeight: 700,
                color: COLORS.teal.text, letterSpacing: 1
              }}>
                KINGSTON — BANK SUBSTACKS
              </div>
              <div style={{ 
                flex: 11, background: COLORS.purple.bg, borderRadius: 8, padding: "8px 12px",
                textAlign: "center", fontFamily: "'DM Sans'", fontSize: 11, fontWeight: 700,
                color: COLORS.purple.text, letterSpacing: 1
              }}>
                OXFORD — TOS + FINISH STRONG
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div style={{ textAlign: "center", marginTop: 32, paddingBottom: 8 }}>
        <p style={{ fontFamily: "'Instrument Serif'", fontSize: 16, fontStyle: "italic", color: "#ccc" }}>
          miss one, start over. that's the deal.
        </p>
      </div>
    </div>
  );
}
