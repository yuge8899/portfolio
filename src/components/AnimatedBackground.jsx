import { useMemo } from 'react'

const AnimatedBackground = ({ scrollY }) => {
  // 生成随机粒子
  const particles = useMemo(() => {
    return Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      delay: Math.random() * 10,
      duration: Math.random() * 20 + 15,
      color: ['#6366F1', '#8B5CF6', '#EC4899', '#06B6D4', '#F59E0B', '#ffffff'][
        Math.floor(Math.random() * 6)
      ],
    }))
  }, [])

  // 生成光束
  const beams = useMemo(() => {
    return Array.from({ length: 5 }, (_, i) => ({
      id: i,
      x: 100 + Math.random() * 1200,
      y: Math.random() * 300,
      height: 200 + Math.random() * 300,
      rotation: -20 + Math.random() * 40,
      delay: Math.random() * 5,
    }))
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* 主背景渐变 */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 30%, #1A1A2E 0%, #0A0A0F 50%, #050508 100%)',
        }}
      />

      {/* 极光效果 */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="aurora1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(99,102,241,0.15)" />
            <stop offset="50%" stopColor="rgba(139,92,246,0.08)" />
            <stop offset="100%" stopColor="rgba(236,72,153,0.05)" />
          </linearGradient>
          <linearGradient id="aurora2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(6,182,212,0.1)" />
            <stop offset="50%" stopColor="rgba(99,102,241,0.05)" />
            <stop offset="100%" stopColor="rgba(139,92,246,0.03)" />
          </linearGradient>
        </defs>
        <path
          d="M0,0 Q200,100 400,50 Q600,0 800,80 L800,300 Q600,200 400,250 Q200,300 0,200 Z"
          fill="url(#aurora1)"
          className="animate-aurora"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        <path
          d="M640,100 Q840,50 1040,100 Q1240,150 1440,80 L1440,450 Q1240,300 1040,320 Q840,340 640,280 Z"
          fill="url(#aurora2)"
          className="animate-aurora"
          style={{ animationDelay: '5s', transform: `translateY(${scrollY * 0.15}px)` }}
        />
      </svg>

      {/* 大型光晕 */}
      <div
        className="absolute w-[1200px] h-[1200px] rounded-full glow-pulse"
        style={{
          left: '-200px',
          top: '-100px',
          background: 'radial-gradient(circle, rgba(99,102,241,0.4) 0%, transparent 70%)',
          filter: 'blur(80px)',
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      />
      <div
        className="absolute w-[900px] h-[900px] rounded-full glow-pulse"
        style={{
          right: '100px',
          top: '100px',
          background: 'radial-gradient(circle, rgba(139,92,246,0.35) 0%, transparent 70%)',
          filter: 'blur(100px)',
          animationDelay: '2s',
          transform: `translateY(${scrollY * 0.25}px)`,
        }}
      />
      <div
        className="absolute w-[800px] h-[800px] rounded-full glow-pulse"
        style={{
          left: '200px',
          top: '700px',
          background: 'radial-gradient(circle, rgba(236,72,153,0.3) 0%, transparent 70%)',
          filter: 'blur(80px)',
          animationDelay: '4s',
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />
      <div
        className="absolute w-[500px] h-[500px] rounded-full glow-pulse"
        style={{
          left: '-100px',
          top: '500px',
          background: 'radial-gradient(circle, rgba(6,182,212,0.25) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animationDelay: '1s',
          transform: `translateY(${scrollY * 0.15}px)`,
        }}
      />
      <div
        className="absolute w-[600px] h-[600px] rounded-full glow-pulse"
        style={{
          right: '100px',
          top: '1200px',
          background: 'radial-gradient(circle, rgba(245,158,11,0.2) 0%, transparent 70%)',
          filter: 'blur(80px)',
          animationDelay: '3s',
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      />

      {/* 光束 */}
      {beams.map((beam) => (
        <div
          key={beam.id}
          className="absolute w-[2px] animate-beam"
          style={{
            left: `${beam.x}px`,
            top: `${beam.y}px`,
            height: `${beam.height}px`,
            background: 'linear-gradient(180deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)',
            transform: `rotate(${beam.rotation}deg) translateY(${scrollY * 0.1}px)`,
            animationDelay: `${beam.delay}s`,
          }}
        />
      ))}

      {/* 粒子 */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full float-particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            opacity: 0.5,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
          }}
        />
      ))}

      {/* 闪烁星星 */}
      {[
        { x: '15%', y: '15%', size: 12, color: 'rgba(255,255,255,0.8)' },
        { x: '85%', y: '20%', size: 10, color: 'rgba(99,102,241,0.8)' },
        { x: '50%', y: '25%', size: 8, color: 'rgba(236,72,153,0.8)' },
        { x: '10%', y: '40%', size: 10, color: 'rgba(139,92,246,0.8)' },
        { x: '90%', y: '50%', size: 12, color: 'rgba(6,182,212,0.8)' },
      ].map((star, i) => (
        <div
          key={i}
          className="absolute twinkle"
          style={{
            left: star.x,
            top: star.y,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDelay: `${i * 0.5}s`,
            transform: 'rotate(45deg)',
          }}
        >
          <div
            className="absolute"
            style={{
              width: '100%',
              height: '2px',
              background: star.color,
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          />
          <div
            className="absolute"
            style={{
              width: '2px',
              height: '100%',
              background: star.color,
              left: '50%',
              transform: 'translateX(-50%)',
            }}
          />
        </div>
      ))}

      {/* 几何装饰 */}
      <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.3 }}>
        {/* 圆环 */}
        <circle
          cx="1200"
          cy="600"
          r="50"
          fill="none"
          stroke="rgba(99,102,241,0.15)"
          strokeWidth="1"
          className="animate-float"
        />
        <circle
          cx="180"
          cy="900"
          r="40"
          fill="none"
          stroke="rgba(139,92,246,0.15)"
          strokeWidth="1"
          className="animate-float-slow"
        />
        <circle
          cx="1100"
          cy="800"
          r="75"
          fill="none"
          stroke="rgba(99,102,241,0.1)"
          strokeWidth="1"
          className="animate-float-slower"
        />

        {/* 三角形 */}
        <polygon
          points="1280,400 1295,430 1265,430"
          fill="none"
          stroke="rgba(139,92,246,0.2)"
          strokeWidth="1"
          className="animate-float"
          style={{ animationDelay: '1s' }}
        />
        <polygon
          points="80,550 95,575 65,575"
          fill="none"
          stroke="rgba(236,72,153,0.2)"
          strokeWidth="1"
          className="animate-float-slow"
          style={{ animationDelay: '2s' }}
        />

        {/* 菱形 */}
        <rect
          x="1240"
          y="890"
          width="20"
          height="20"
          fill="none"
          stroke="rgba(6,182,212,0.2)"
          strokeWidth="1"
          transform="rotate(45, 1250, 900)"
          className="animate-float"
          style={{ animationDelay: '0.5s' }}
        />
        <rect
          x="112"
          y="193"
          width="15"
          height="15"
          fill="none"
          stroke="rgba(245,158,11,0.2)"
          strokeWidth="1"
          transform="rotate(45, 120, 200)"
          className="animate-float-slow"
          style={{ animationDelay: '1.5s' }}
        />

        {/* 弧线 */}
        <ellipse
          cx="100"
          cy="200"
          rx="50"
          ry="50"
          fill="none"
          stroke="rgba(6,182,212,0.3)"
          strokeWidth="2"
          strokeDasharray="80 220"
          className="animate-float"
        />
        <ellipse
          cx="1340"
          cy="790"
          rx="40"
          ry="40"
          fill="none"
          stroke="rgba(245,158,11,0.25)"
          strokeWidth="2"
          strokeDasharray="100 150"
          className="animate-float-slow"
        />

        {/* 运动曲线 */}
        <path
          d="M100,340 Q140,300 180,340 Q220,380 260,340"
          fill="none"
          stroke="rgba(99,102,241,0.3)"
          strokeWidth="2"
          className="animate-float"
        />
        <path
          d="M1200,540 Q1240,500 1280,540 Q1320,580 1360,540"
          fill="none"
          stroke="rgba(139,92,246,0.25)"
          strokeWidth="2"
          className="animate-float-slow"
        />

        {/* 螺旋 */}
        <path
          d="M1320,240 Q1350,240 1350,270 Q1350,300 1320,300 Q1290,300 1290,270 Q1290,250 1310,250 Q1325,250 1325,265 Q1325,275 1315,275"
          fill="none"
          stroke="rgba(236,72,153,0.2)"
          strokeWidth="1.5"
          className="animate-float"
        />
      </svg>

      {/* 底部波浪 */}
      <div className="absolute bottom-0 left-0 w-[200%] h-32 overflow-hidden">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="absolute w-full h-full wave-animation"
        >
          <path
            d="M0,60 Q360,0 720,60 T1440,60 L1440,120 L0,120 Z"
            fill="rgba(99,102,241,0.03)"
          />
        </svg>
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="absolute w-full h-full wave-animation"
          style={{ animationDelay: '-5s' }}
        >
          <path
            d="M0,80 Q360,30 720,80 T1440,80 L1440,120 L0,120 Z"
            fill="rgba(139,92,246,0.02)"
          />
        </svg>
      </div>
    </div>
  )
}

export default AnimatedBackground