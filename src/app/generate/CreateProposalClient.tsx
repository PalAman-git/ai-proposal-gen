"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateProposalPage() {
  const router = useRouter();

  const [clientName, setClientName] = useState("");
  const [projectType, setProjectType] = useState("");
  const [loading, setLoading] = useState(false);
  const [debugLog, setDebugLog] = useState<string[]>([]);

  const log = (message: string) => {
    console.log(`[CreatePage] ${message}`);
    setDebugLog((prev) => [...prev, message]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    log("Form submitted.");

    try {
      log("Sending data to /api/generate...");
      const generateRes = await fetch("/api/generate", {
        method: "POST",
        body: JSON.stringify({
          client_name: clientName,
          project_type: projectType,
        }),
        headers: { "Content-Type": "application/json" },
      });

      const { content } = await generateRes.json();
      console.log("[CreatePage] Received GPT content:", content);

      const saveRes = await fetch("/api/proposals", {
        method: "POST",
        body: JSON.stringify({
          client_name: clientName,
          project_type: projectType,
          content,
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (!saveRes.ok) {
        const error = await saveRes.json();
        log(`Error saving: ${error.error}`);
        return;
      }

      log("Proposal saved successfully. Redirecting...");
      router.push("/dashboard");
    } catch (err) {
      if (err instanceof Error) {
        log(`Error: ${err.message}`);
      } else {
        log("An unknown error occurred.");
      }
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Generate New Proposal</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Client Name</label>
          <input
            type="text"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <div>
          <label className="block font-medium">Project Type</label>
          <input
            type="text"
            value={projectType}
            onChange={(e) => setProjectType(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          {loading ? "Generating..." : "Generate Proposal"}
        </button>
      </form>

      <div className="mt-6 text-sm text-gray-500">
        <h2 className="font-medium mb-2">Debug Log:</h2>
        <ul className="space-y-1">
          {debugLog.map((msg, i) => (
            <li key={i}>• {msg}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
