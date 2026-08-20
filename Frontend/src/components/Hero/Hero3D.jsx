import { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Html, Float } from "@react-three/drei";

// Photo path: drop your headshot in /public as profile.jpg and it'll load here.
const PROFILE_IMAGE = "/images/profile.jpg";

function useReducedMotionFlag() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

function PhotoCard({ reduced }) {
  const groupRef = useRef();

  useFrame((state) => {
    if (reduced || !groupRef.current) return;
    // gentle mouse-based tilt
    const targetX = state.pointer.y * 0.15;
    const targetY = state.pointer.x * 0.15;
    groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.05;
    groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.05;
  });

  const card = (
    <div style={{
       position: "relative",
     width: 220, height: 240 }}>
      {/* offset copper glow blob peeking from behind */}
      <div
        style={{
          position: "absolute",
          top: 16,
          left: 16,
          width: "100%",
          height: "100%",
          borderRadius: "42% 58% 65% 35% / 45% 40% 60% 55%",
          background: "linear-gradient(135deg, #C9683A, rgba(201,104,58,0.25))",
          filter: "blur(1px)",
          opacity: 0.55,
        }}
      />
      {/* photo, clipped to an organic blob shape */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          borderRadius: "42% 58% 65% 35% / 45% 40% 60% 55%",
          overflow: "hidden",
          border: "2px solid rgba(246,241,231,0.2)",
          boxShadow: "0 30px 55px rgba(0,0,0,0.5)",
          background: "#1B1A17",
        }}
      >
        <img
          src={PROFILE_IMAGE}
          alt="Nandan Mali"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 25%", display: "block" }}
          onError={(e) => {
            e.currentTarget.style.display = "none";
            e.currentTarget.nextSibling.style.display = "flex";
          }}
        />
        <div
          style={{
            display: "none",
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            color: "rgba(246,241,231,0.3)",
            fontFamily: "monospace",
            fontSize: 12,
            textAlign: "center",
            padding: 16,
          }}
        >
          Add /public/profile.jpg
        </div>
      </div>
    </div>
  );

  return (
    <group ref={groupRef} position={[-1.55, 0.15, 0]}>
      <Html center transform distanceFactor={4} occlude={false} zIndexRange={[1, 0]}>
        {card}
      </Html>
    </group>
  );
}

function CodePanel({ reduced }) {
  const groupRef = useRef();

  useFrame((state) => {
    if (reduced || !groupRef.current) return;
    const targetX = -state.pointer.y * 0.1;
    const targetY = -state.pointer.x * 0.1;
    groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.05;
    groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.05;
  });

  const panel = (
    <div
      style={{
        width: 260,
        borderRadius: 14,
        overflow: "hidden",
        border: "1px solid rgba(201,104,58,0.25)",
        boxShadow: "0 30px 60px rgba(0,0,0,0.45)",
        background: "#161512",
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 11,
        lineHeight: 1.7,
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 6,
          padding: "10px 14px",
          borderBottom: "1px solid rgba(246,241,231,0.08)",
        }}
      >
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(246,241,231,0.15)" }} />
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(246,241,231,0.15)" }} />
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "rgba(246,241,231,0.15)" }} />
      </div>
      <pre style={{ margin: 0, padding: "16px 18px", color: "#D8CFBF", whiteSpace: "pre-wrap" }}>
        <span style={{ color: "#C9683A" }}>const</span> developer = {"{"}
        {"\n"}  name: <span style={{ color: "#C9683A" }}>"Nandan Mali"</span>,
        {"\n"}  role: <span style={{ color: "#C9683A" }}>"MERN Stack Developer"</span>,
        {"\n"}  stack: [<span style={{ color: "#C9683A" }}>"React"</span>, <span style={{ color: "#C9683A" }}>"Node"</span>, <span style={{ color: "#C9683A" }}>"Express"</span>, <span style={{ color: "#C9683A" }}>"MongoDB"</span>],
        {"\n"}  status: <span style={{ color: "#C9683A" }}>"open to freelance work"</span>
        {"\n"}{"}"};
      </pre>
    </div>
  );

  return (
    <group ref={groupRef} position={[1.55, -0.4, 0]}>
      <Html center transform distanceFactor={4.6} occlude={false} zIndexRange={[1,0]}>
        {panel}
      </Html>
    </group>
  );
}

function Scene({ reduced }) {
  return (
    <>
      <Float speed={reduced ? 0 : 1.4} rotationIntensity={0} floatIntensity={reduced ? 0 : 0.6}>
        <PhotoCard reduced={reduced} />
      </Float>
      <Float speed={reduced ? 0 : 1.1} rotationIntensity={0} floatIntensity={reduced ? 0 : 0.5}>
        <CodePanel reduced={reduced} />
      </Float>
    </>
  );
}

export default function Hero3D() {
  const reduced = useReducedMotionFlag();

  return (
<div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 5.6], fov: 44 }} dpr={[1, 1.5]}>
        <Suspense fallback={null}>
          <Scene reduced={reduced} />
        </Suspense>
      </Canvas>
    </div>
  );
}
