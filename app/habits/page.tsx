'use client';

import { useEffect, useState } from "react";
import { supabase } from "@/utils/supabase";

const HABITS = [
  { id: 1, label: "Diet — no sugar", emoji: "🍎" },
  { id: 2, label: "Workout 1 — 45 min", emoji: "🏋️" },
  { id: 3, label: "Workout 2 — 45 min outdoors", emoji: "🌤️" },
  { id: 4, label: "1 gallon of water", emoji: "💧" },
  { id: 5, label: "Read 10 pages", emoji: "📖" },
  { id: 6, label: "Progress photo", emoji: "📸" },
];

// 75 days starting April 12, 2026
const START_DATE = new Date(2026, 3, 12); // month is 0-indexed
const TOTAL_DAYS = 75;

function getDayLabel(dayIndex: number) {
  const d = new Date(START_DATE);
  d.setDate(d.getDate() + dayIndex);
  return {
    date: d.getDate(),
    month: d.toLocaleString("default", { month: "short" }),
    dayNum: dayIndex + 1,
  };
}

const DAYS = Array.from({ length: TOTAL_DAYS }, (_, i) => getDayLabel(i));

export default function HabitsPage() {
  const [checks, setChecks] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase
        .from("habit_checks")
        .select("day_index, habit_id");
      if (error) {
        console.error("Failed to load habit_checks:", error);
      } else if (data) {
        const next: Record<string, boolean> = {};
        for (const row of data) {
          next[`${row.day_index}-${row.habit_id}`] = true;
        }
        setChecks(next);
      }
      setLoading(false);
    })();
  }, []);

  const toggle = async (day: number, habitId: number) => {
    const key = `${day}-${habitId}`;
    const wasChecked = !!checks[key];

    setChecks((prev) => ({ ...prev, [key]: !wasChecked }));

    if (wasChecked) {
      const { error } = await supabase
        .from("habit_checks")
        .delete()
        .eq("day_index", day)
        .eq("habit_id", habitId);
      if (error) {
        console.error("Delete failed:", error);
        setChecks((prev) => ({ ...prev, [key]: true }));
      }
    } else {
      const { error } = await supabase
        .from("habit_checks")
        .insert({ day_index: day, habit_id: habitId });
      if (error) {
        console.error("Insert failed:", error);
        setChecks((prev) => ({ ...prev, [key]: false }));
      }
    }
  };

  const getDayComplete = (day: number) =>
    HABITS.every((h) => checks[`${day}-${h.id}`]);

  const streak = (() => {
    let s = 0;
    for (let d = 0; d < TOTAL_DAYS; d++) {
      if (getDayComplete(d)) s++;
      else break;
    }
    return s;
  })();

  const totalCompleted = Array.from({ length: TOTAL_DAYS }, (_, i) => i).filter(getDayComplete).length;

  return (
    <main className="w-full px-6 lg:px-16 py-12">
      <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />

      <style>{`
        .day-check {
          width: 24px; height: 24px; border-radius: 5px; border: 1.5px solid #e0e0e0;
          cursor: pointer; display: flex; align-items: center; justify-content: center;
          font-size: 12px; transition: all 0.15s ease; background: white; flex-shrink: 0;
        }
        .day-check:hover { border-color: #aaa; background: #f5f5f5; }
        .day-check-done { background: #1a1a1a !important; border-color: #1a1a1a !important; color: white; }
        .day-complete-dot { background: #1D9E75; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
        .fade-in { animation: fadeIn 0.4s ease forwards; }
      `}</style>

      {/* Header */}
      <div style={{ marginBottom: 32 }}>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 11, letterSpacing: 4, color: "#aaa", fontWeight: 700, textTransform: "uppercase", marginBottom: 8 }}>
          Aidan Gurung
        </p>
        <h1 style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 48, fontWeight: 400, lineHeight: 1.1, color: "#1a1a1a", marginBottom: 4 }}>
          75 Hard
        </h1>
        <p style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 20, fontStyle: "italic", color: "#999" }}>
          April 12 – June 25, 2026
        </p>
      </div>

      {/* Stats bar */}
      <div style={{
        background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
        borderRadius: 16, padding: "20px 28px", marginBottom: 32,
        display: "flex", gap: 40, alignItems: "center"
      }}>
        <div>
          <p style={{ fontFamily: "'DM Sans'", fontSize: 11, letterSpacing: 2, color: "#666", fontWeight: 600, textTransform: "uppercase", marginBottom: 2 }}>Current streak</p>
          <p style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 40, color: "white", lineHeight: 1.1 }}>
            {streak} <span style={{ fontSize: 16, color: "#555" }}>/ 75 days</span>
          </p>
        </div>
        <div style={{ width: 1, height: 48, background: "#333" }} />
        <div>
          <p style={{ fontFamily: "'DM Sans'", fontSize: 11, letterSpacing: 2, color: "#666", fontWeight: 600, textTransform: "uppercase", marginBottom: 2 }}>Perfect days</p>
          <p style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 40, color: "#1D9E75", lineHeight: 1.1 }}>
            {totalCompleted} <span style={{ fontSize: 16, color: "#555" }}>/ 75</span>
          </p>
        </div>
        <div style={{ marginLeft: "auto", width: 180 }}>
          <p style={{ fontFamily: "'DM Sans'", fontSize: 11, letterSpacing: 2, color: "#666", fontWeight: 600, textTransform: "uppercase", marginBottom: 8 }}>Progress</p>
          <div style={{ width: "100%", height: 8, borderRadius: 4, background: "#333", overflow: "hidden" }}>
            <div style={{ height: "100%", borderRadius: 4, background: "#1D9E75", width: `${(totalCompleted / 75) * 100}%`, transition: "width 0.4s ease" }} />
          </div>
          <p style={{ fontFamily: "'DM Sans'", fontSize: 11, color: "#555", marginTop: 6 }}>{Math.round((totalCompleted / 75) * 100)}% complete</p>
        </div>
      </div>

      {/* Tracker grid */}
      <div className="fade-in" style={{ overflowX: "auto" }}>
        <div style={{ minWidth: 900 }}>

          {/* Header row — day numbers */}
          <div style={{ display: "flex", alignItems: "center", marginBottom: 8, paddingLeft: 200 }}>
            {DAYS.map((d, i) => (
              <div key={i} style={{
                flex: 1, minWidth: 28, textAlign: "center",
              }}>
                <div style={{
                  fontFamily: "'DM Sans'", fontSize: 9, fontWeight: 700,
                  color: getDayComplete(i) ? "#1D9E75" : "#ccc",
                  letterSpacing: 0.5, lineHeight: 1.2
                }}>
                  {d.date}<br/>
                  <span style={{ fontWeight: 400 }}>{d.month}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Habit rows */}
          {HABITS.map((habit, idx) => (
            <div key={habit.id} style={{
              display: "flex", alignItems: "center", marginBottom: 6,
              padding: "6px 0", borderRadius: 10,
              background: idx % 2 === 0 ? "transparent" : "#fafafa"
            }}>
              {/* Habit label */}
              <div style={{
                width: 200, flexShrink: 0, display: "flex", alignItems: "center", gap: 10,
                paddingRight: 12, fontFamily: "'DM Sans', sans-serif",
                fontSize: 13, fontWeight: 500, color: "#333"
              }}>
                <span style={{ fontSize: 16, width: 22, textAlign: "center", flexShrink: 0 }}>{habit.emoji}</span>
                {habit.label}
              </div>

              {/* Checkboxes */}
              {DAYS.map((_, dayIdx) => {
                const key = `${dayIdx}-${habit.id}`;
                const done = checks[key];
                return (
                  <div key={dayIdx} style={{ flex: 1, minWidth: 28, display: "flex", justifyContent: "center" }}>
                    <button
                      className={`day-check ${done ? "day-check-done" : ""}`}
                      onClick={() => toggle(dayIdx, habit.id)}
                    >
                      {done ? "✓" : ""}
                    </button>
                  </div>
                );
              })}
            </div>
          ))}

          {/* Day complete indicators */}
          <div style={{ display: "flex", paddingLeft: 200, marginTop: 10 }}>
            {DAYS.map((_, i) => (
              <div key={i} style={{ flex: 1, minWidth: 28, display: "flex", justifyContent: "center" }}>
                <div style={{
                  width: 8, height: 8, borderRadius: "50%",
                  background: getDayComplete(i) ? "#1D9E75" : "#f0f0f0",
                  transition: "background 0.2s ease"
                }} />
              </div>
            ))}
          </div>
          <p style={{ fontFamily: "'DM Sans'", fontSize: 11, color: "#ccc", marginTop: 6, paddingLeft: 200 }}>
            green dot = perfect day
          </p>

        </div>
      </div>

      {/* Footer */}
      <div style={{ textAlign: "center", marginTop: 40, paddingBottom: 8 }}>
        <p style={{ fontFamily: "'Instrument Serif', Georgia, serif", fontSize: 16, fontStyle: "italic", color: "#ccc" }}>
          miss one, start over. that&apos;s the deal.
        </p>
      </div>
    </main>
  );
}
