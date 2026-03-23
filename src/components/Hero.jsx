import { ChevronDown } from 'lucide-react'

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-[72px]">
      <div className="text-center px-20 animate-fade-in-up">
        {/* Avatar */}
        <div className="relative inline-block mb-8">
          <div className="w-[120px] h-[120px] rounded-full avatar-glow flex items-center justify-center">
            <div className="w-[110px] h-[110px] rounded-full bg-gradient-to-br from-primary to-accent-glow" />
          </div>
          {/* 头像装饰点 */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full animate-pulse" />
        </div>

        {/* 标题 */}
        <h1 className="text-5xl md:text-7xl font-bold gradient-text mb-4">
          你好，我是设计师
        </h1>

        {/* 副标题 */}
        <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
          UI/UX 设计师 | 专注于创造美观实用的数字体验
        </p>

        {/* 按钮 */}
        <div className="flex items-center justify-center gap-4">
          <button className="btn-gradient px-8 py-4 rounded-lg font-semibold text-white flex items-center gap-2">
            查看作品
          </button>
          <button className="glass px-8 py-4 rounded-lg font-semibold text-white hover:bg-white/10 transition-colors">
            联系我
          </button>
        </div>

        {/* 滚动指示器 */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-text-secondary" />
        </div>
      </div>
    </section>
  )
}

export default Hero